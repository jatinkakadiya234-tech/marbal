import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import mapImage from "../../assets/map_img.png";

const locations = [
  { name: "India", top: "55%", left: "65%" },
  { name: "Canada", top: "38%", left: "20%" },
  { name: "Germany", top: "41%", left: "49%" },
  { name: "Australia", top: "78%", left: "78%"},
  { name: "London", top: "40%", left: "45%"},
  { name: "Dubai", top: "54.5%", left: "57.5%"},
  { name: "Russia", top: "39%", left: "66%" },
];

export default function WorldMap() {
  return (
    <div className="relative w-full max-w-full mx-auto !bg-white/30 p-6 rounded-lg shadow-lg my-12">
      {/* Map Image */}
      <img
        src={mapImage}
        alt="World Map"
        className="w-full h-auto rounded-lg shadow-lg"
      />

      {/* Location markers */}
      {locations.map((loc, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center text-red-600"
          style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
        >
          <FaMapMarkerAlt size={24} />
          <span className="text-sm font-semibold text-black bg-white/70 px-1 rounded mt-1">
            {loc.name}
          </span>
        </div>
      ))}
    </div>
  );
}
