import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Gender() {
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
        <h1 className="text-2xl font-bold mb-4">👤 What’s your gender?</h1>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-4"
        >
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non-binary</option>
          <option value="prefernot">Other</option>
        </select>
        <button
          disabled={!gender}
          onClick={() => navigate('/main')}
          className={`w-full px-4 py-2 rounded ${
            gender ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
