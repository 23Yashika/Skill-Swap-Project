import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // TODO: Replace with API call
    const fakeProfiles = [
      {
        id: "1",
        name: "Marc Demo",
        photo: "",
        bio: "Guitarist and home chef who loves learning new things!",
        skillsOffered: ["Guitar", "Cooking"],
        skillsWanted: ["Photography"],
        rating: 4.8,
      },
      {
        id: "2",
        name: "Nickell",
        photo: "",
        bio: "Frontend dev exploring the art of marketing.",
        skillsOffered: ["JavaScript", "UI Design"],
        skillsWanted: ["Marketing"],
        rating: 4.5,
      },
    ];

    const found = fakeProfiles.find((p) => p.id === id);
    setProfile(found || null);
  }, [id]);

  if (!profile) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        Profile not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={profile.photo || "https://via.placeholder.com/100"}
            alt={profile.name}
            className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
            <div className="text-yellow-400 text-sm">⭐ {profile.rating.toFixed(1)}</div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 mb-6">{profile.bio}</p>

        {/* Skills Offered */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Skills Offered</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skillsOffered.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Wanted */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Skills Wanted</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skillsWanted.map((skill, idx) => (
              <span
                key={idx}
                className="bg-pink-600 text-white px-2 py-0.5 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Request Button */}
        <Link
          to={`/request/${profile.id}`}
          className="block w-full text-center bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white font-medium"
        >
          Request Swap
        </Link>
      </div>
    </div>
  );
}
