import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Passionate learner and skill sharer!");
  const [skillsOffered, setSkillsOffered] = useState(["JavaScript", "Cooking"]);
  const [skillsWanted, setSkillsWanted] = useState(["Photography"]);
  const [photo, setPhoto] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add backend update logic
    console.log("Profile updated:", { name, bio, skillsOffered, skillsWanted, photo });
    alert("Profile saved!");
  };

  const handleAddSkill = (type) => {
    const newSkill = prompt("Enter a skill:");
    if (newSkill) {
      if (type === "offered") {
        setSkillsOffered([...skillsOffered, newSkill]);
      } else {
        setSkillsWanted([...skillsWanted, newSkill]);
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6 flex justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Profile Photo */}
          <div className="flex items-center space-x-4">
            <img
              src={photo || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Skills Offered */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Skills Offered</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleAddSkill("offered")}
              className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-md text-sm text-white"
            >
              + Add Offered Skill
            </button>
          </div>

          {/* Skills Wanted */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Skills Wanted</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-pink-600 text-white px-2 py-0.5 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleAddSkill("wanted")}
              className="bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded-md text-sm text-white"
            >
              + Add Wanted Skill
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-medium"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
