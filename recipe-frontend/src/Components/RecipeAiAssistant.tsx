import { useState } from "react";
import { askAi } from "../services/RecipeService";

const RecipeAiAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);
    try {
      const aiAnswer = await askAi(question);
      setAnswer(aiAnswer);
    } catch (err: any) {
  if (err.response && err.response.data) {
    setAnswer("Error: " + JSON.stringify(err.response.data));
  } else {
    setAnswer("Sorry, something went wrong.");
  }
}

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-3">🤖 Recipe AI Assistant</h2>
      <form onSubmit={handleAsk} className="flex gap-2 mb-3">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask about nutrition, best recipe, high protein..."
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Asking..." : "Ask AI"}
        </button>
      </form>
      {answer && (
        <div className="bg-gray-100 p-3 rounded-lg mt-2">
          <strong>AI:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default RecipeAiAssistant;
