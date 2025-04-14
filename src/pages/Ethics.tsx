import { useNavigate } from 'react-router-dom';

const Ethics = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/gender');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold mb-4">Informed Consent Form</h1>
        <p>For participating in Media Technology MSc graduation project research <b>Reimagining Chinese Character</b> conducted by Huien Tan, supervised by Professor Tessa Verhoef at Leiden University.</p>
        <p><b>By pressing the continue button below, I consent to the following:</b></p>
        <ul className="list-disc list-inside space-y-2">
          <li>I confirm that I have been clearly informed about the nature and method of the research, as described in the information sheet. My questions have been answered satisfactorily.</li>
          <li>I agree to participate in this research freely. I know that I can stop my participation at any time. If my research results are to be used in scientific publications, or made public in any other way, this will be done completely anonymously, unless I give my consent to exceptions below by marking the checkboxes.</li>
        </ul>
        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            I hereby consent to having audio recordings made during the research, and to have my answers transcribed.
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" />
            I hereby consent to having my answers quoted in research publications.
          </label>
        </div>
        <p>If I would like any further information about the study, now or in the future, I can contact Huien’s email: <b>huientan2022@gmail.com</b></p>
        <p>If I have any complaints about this research, I can contact the supervisor (Tessa Verhoef) at <b>t.verhoef@liacs.leidenuniv.nl</b> or the ethics committee at <b>ethicscommittee@science.leidenuniv.nl</b>.</p>
        <p>Name, Surname: _______________________</p>
        <p>Location and date: ________________________________</p>
        <button
          onClick={handleContinue}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Ethics;
