import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { addDays, isAfter } from 'date-fns';
import { Lock, Unlock, ArrowLeft } from 'lucide-react';

const customFontChars = new Set(['A', 'B', 'C', 'D', '㑵', '𢗼']);
const customFontSizes: Record<string, string> = {
  A: 'text-xl',
  B: 'text-xl',
  C: 'text-5xl',
  '㑵': 'text-[28px]',
  '𢗼': 'text-[32px]',
};

// function renderWithCustomFont(text: string, charsToReplace: Set<string>) {
//   return text.split('').map((char, i) =>
//     charsToReplace.has(char) ? (
//       <span key={i} className="font-ori text-2xl">{char}</span>
//     ) : (
//       <span key={i}>{char}</span>
//     )
//   );
// }
export function renderWithCustomFont(
  text: string,
  charsToReplace: Set<string>,
  sizeMap: Record<string, string> = {}
) {
  return text.split('').map((char, i) => {
    if (charsToReplace.has(char)) {
      const sizeClass = sizeMap[char] || 'text-2xl';
      return (
        <span key={i} className={`font-ori ${sizeClass}`}>
          {char}
        </span>
      );
    } else {
      return <span key={i}>{char}</span>;
    }
  });
}



const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Survey {
  id: number;
  title: string;
  questions: {
    text: string;
    scale: number;
  }[];
}

const surveys: Survey[] = [
  {
    id: 1,
    title: "Week1",
    questions: [
      { text: "我是一个内心A大的人", scale: 0 },
      { text: "我对未来充满希望", scale: 0 },
    ]
  },
  {
    id: 2,
    title: "Week2",
    questions: [
      { text: "我能很好地处理压力", scale: 0 },
      { text: "我对生活感到满意", scale: 0 },
    ]
  },
  {
    id: 3,
    title: "Week3",
    questions: [
      { text: "我有明确的人生目标", scale: 0 },
      { text: "我觉得自己很有价值", scale: 0 },
    ]
  }
];

function App() {
  const [session, setSession] = useState(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [currentSurvey, setCurrentSurvey] = useState<Survey | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchUserStartDate();
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserStartDate = async () => {
    const { data, error } = await supabase
      .from('user_progress')
      .select('start_date')
      .single();

    if (data) {
      setStartDate(new Date(data.start_date));
    } else if (!error) {
      const newStartDate = new Date();
      await supabase
        .from('user_progress')
        .insert([{ start_date: newStartDate.toISOString() }]);
      setStartDate(newStartDate);
    }
  };

  const isSurveyUnlocked = (surveyId: number) => {
    // First survey is always unlocked
    if (surveyId === 1) return true;
    
    if (!startDate) return false;
    const unlockDate = addDays(startDate, (surveyId - 1) * 7);
    return isAfter(new Date(), unlockDate);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setIsSignUp(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setStartDate(null);
  };

  const handleScaleChange = (questionIndex: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const handleSubmitSurvey = async () => {
    if (!session || !currentSurvey) return;

    const responses = Object.entries(answers).map(([questionIndex, value]) => ({
      user_id: session.user.id,
      survey_id: currentSurvey.id,
      question_id: parseInt(questionIndex),
      scale_value: value
    }));

    const { error } = await supabase
      .from('survey_responses')
      .insert(responses);

    if (error) {
      console.error('Error submitting survey:', error);
    } else {
      setCurrentSurvey(null);
      setAnswers({});
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 special-text">Thesis Questionnaire</h1>
          <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-red-500 text-sm">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
              {isSignUp ? 'Signup' : 'Login'}
            </button>
          </form>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full text-center text-sm text-blue-500 hover:text-blue-600"
          >
            {isSignUp ? 'Already have an account? Log in now' : 'No account yet? Sign up now'}
          </button>
        </div>
      </div>
    );
  }

  if (currentSurvey) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-8">
            <button
              onClick={() => setCurrentSurvey(null)}
              className="mr-4 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={24} />
            </button>
            
            <h1 className="text-3xl font-bold special-text">{currentSurvey.title}</h1>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            {currentSurvey.questions.map((question, index) => (
              <div key={index} className="mb-8 last:mb-4">
                <p className="text-lg mb-4 special-text">
                {renderWithCustomFont(question.text, customFontChars, customFontSizes)}
                {/* {question.text} */}
                </p>
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-gray-500">完全不符合 (1)</span>
                  <span className="text-sm text-gray-500">完全符合 (20)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={answers[index] || 1}
                  onChange={(e) => handleScaleChange(index, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2">
                  <span className="text-lg font-semibold">{answers[index] || 1}</span>
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmitSurvey}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold special-text">Thesis Questionnaire</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Log Out
          </button>
        </div>

        <div className="grid gap-6">
          {surveys.map((survey) => {
            const unlocked = isSurveyUnlocked(survey.id);
            return (
              <div
                key={survey.id}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  !unlocked ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold special-text">{survey.title}</h2>
                  {unlocked ? (
                    <Unlock className="text-green-500" />
                  ) : (
                    <Lock className="text-red-500" />
                  )}
                </div>
                {unlocked ? (
                  <button
                    onClick={() => setCurrentSurvey(survey)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Start
                  </button>
                ) : (
                  <p className="text-gray-500">
                    Will be unlocked in {addDays(startDate!, (survey.id - 1) * 7).toLocaleDateString()}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;