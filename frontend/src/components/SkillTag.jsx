export default function SkillTag({ label, type = "offered" }) {
  const colors = {
    offered: "bg-indigo-600 text-white",
    wanted: "bg-pink-600 text-white",
    default: "bg-gray-700 text-gray-200"
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[type] || colors.default}`}
    >
      {label}
    </span>
  );
}
