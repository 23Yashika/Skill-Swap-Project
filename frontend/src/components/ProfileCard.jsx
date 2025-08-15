import SkillTag from "./SkillTag";

export default function ProfileCard({ id, name, photo, skillsOffered, skillsWanted, rating }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img
          src={photo || "https://via.placeholder.com/50"}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-indigo-500"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {skillsOffered?.map((skill, index) => (
              <SkillTag key={index} label={skill} type="offered" />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {skillsWanted?.map((skill, index) => (
              <SkillTag key={index} label={skill} type="wanted" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end space-y-2">
        <div className="text-sm text-yellow-400">⭐ {rating?.toFixed(1) || "0.0"}</div>
        <a
          href={`/request/${id}`}
          className="bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-md text-sm font-medium"
        >
          Request
        </a>
      </div>
    </div>
  );
}
