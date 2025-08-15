import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Pagination from "../components/Pagination";

export default function Home() {
  // Sample data (replace with API later)
  const profiles = [
    {
      id: 1,
      name: "Marc Demo",
      photo: "",
      skillsOffered: ["Guitar", "Cooking"],
      skillsWanted: ["Photography"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Nickell",
      photo: "",
      skillsOffered: ["JavaScript", "UI Design"],
      skillsWanted: ["Marketing"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Sarah Jones",
      photo: "",
      skillsOffered: ["Yoga", "Nutrition"],
      skillsWanted: ["Web Development"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Daniel Lee",
      photo: "",
      skillsOffered: ["Photography", "Public Speaking"],
      skillsWanted: ["Spanish"],
      rating: 4.6,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(profiles.length / itemsPerPage);

  // Filtered data for current page
  const displayedProfiles = profiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Browse Skill Swap Profiles
      </h1>

      {/* Profile Cards */}
      <div className="space-y-4">
        {displayedProfiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
