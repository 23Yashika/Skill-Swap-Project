import { useState } from "react";

export default function SwapRequests() {
  // Temporary mock data
  const [requests, setRequests] = useState([
    {
      id: 1,
      from: "Marc Demo",
      skillsOffered: ["Guitar", "Cooking"],
      skillsRequested: ["Photography"],
      message: "Hey, I can teach you guitar and cooking if you can help me with photography.",
      status: "pending",
    },
    {
      id: 2,
      from: "Nickell",
      skillsOffered: ["JavaScript", "UI Design"],
      skillsRequested: ["Marketing"],
      message: "Interested in swapping coding lessons for marketing tips.",
      status: "accepted",
    },
    {
      id: 3,
      from: "Sarah Jones",
      skillsOffered: ["Yoga"],
      skillsRequested: ["Web Development"],
      message: "Yoga sessions in exchange for some coding guidance.",
      status: "rejected",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Swap Requests</h1>

      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between"
          >
            {/* Request Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white">
                From: {req.from}
              </h2>
              <p className="text-gray-300 text-sm mt-1">{req.message}</p>

              <div className="mt-2 text-sm">
                <span className="font-medium text-gray-200">Offers:</span>{" "}
                {req.skillsOffered.join(", ")}
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-200">Wants:</span>{" "}
                {req.skillsRequested.join(", ")}
              </div>
            </div>

            {/* Status & Actions */}
            <div className="mt-3 md:mt-0 md:ml-6 flex flex-col items-start md:items-end space-y-2">
              {/* Status Badge */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  req.status === "pending"
                    ? "bg-yellow-500 text-black"
                    : req.status === "accepted"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
              </span>

              {/* Buttons only if pending */}
              {req.status === "pending" && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateStatus(req.id, "accepted")}
                    className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateStatus(req.id, "rejected")}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
