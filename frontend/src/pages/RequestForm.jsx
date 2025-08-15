import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RequestForm() {
  const { id } = useParams(); // Public profile ID
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [proposedSkills, setProposedSkills] = useState("");
  const [requestedSkills, setRequestedSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send request to backend
    console.log("Request sent to:", id, {
      message,
      proposedSkills,
      requestedSkills,
    });
    alert("Swap request sent!");
    navigate("/swap-requests"); // Redirect after submitting
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-6">
          Send Swap Request
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Proposed Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Skills You Can Offer
            </label>
            <input
              type="text"
              value={proposedSkills}
              onChange={(e) => setProposedSkills(e.target.value)}
              placeholder="e.g., Guitar, Cooking"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Requested Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Skills You Want to Learn
            </label>
            <input
              type="text"
              value={requestedSkills}
              onChange={(e) => setRequestedSkills(e.target.value)}
              placeholder="e.g., Photography"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message to the User
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Write a short message..."
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white font-medium"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
