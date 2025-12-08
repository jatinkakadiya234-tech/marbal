import React from 'react';
import { useNavigate } from 'react-router-dom';
import DualImageCard from './DualImageCard';

const UpdatedApplicationSection = () => {
  const navigate = useNavigate();
const applications = [
  {
    id: 1,
    title: "Kitchen Countertops",
    image: "/kitchen.jpg",
    alt: "Kitchen Countertops",
    description:
      "Transform your kitchen with our premium granite and marble countertops. Heat-resistant, durable, and elegant.",
    features: [
      "Heat & scratch resistant",
      "Easy to clean & maintain",
      "Available in multiple finishes",
    ],
  },
  {
    id: 2,
    title: "Luxury Flooring",
    image: "/livingrooom.jpg",
    alt: "Flooring",
    description:
      "Create stunning floors with our marble and granite tiles. Perfect for both residential and commercial spaces.",
    features: [
      "Non-slip surface options",
      "Water resistant",
      "Long-lasting durability",
    ],
  },
  {
    id: 3,
    title: "Wall Cladding",
    image: "/bedroom.jpg",
    alt: "Wall Cladding",
    description:
      "Enhance your interiors with natural stone wall cladding. Add texture and elegance to any space.",
    features: [
      "Natural texture & patterns",
      "Moisture resistant",
      "Easy installation",
    ],
  },
  {
    id: 4,
    title: "Bathroom Vanities",
    image: "/kitchen2.jpg",
    alt: "Bathroom",
    description:
      "Create luxurious bathrooms with our water-resistant marble and granite vanity tops.",
    features: [
      "Water & stain resistant",
      "Hygienic surface",
      "Custom edge profiles",
    ],
  },
  {
    id: 5,
    title: "Outdoor Spaces",
    image: "/furniture.jpg",
    alt: "Outdoor",
    description:
      "Weather-resistant sandstone and granite for patios, walkways, and outdoor kitchens.",
    features: ["Weather resistant", "Anti-slip surface", "UV resistant colors"],
  },
  {
    id: 6,
    title: "Commercial Projects",
    image: "/cozyroom.jpg",
    alt: "Commercial",
    description:
      "Premium stones for hotels, offices, and commercial buildings. Durable and impressive.",
    features: [
      "High traffic durability",
      "Low maintenance",
      "Professional appearance",
    ],
  },
];
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-4xl font-bold text-[#0E5543] mb-4"
          style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
        >
          How Our Stones Transform Spaces
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
        >
          Discover the endless possibilities of our premium stones in
          real-world applications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {applications.map((app) => (
          <DualImageCard key={app.id} app={app} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#0E5543] text-white px-8 py-3 rounded-lg hover:bg-[#1A7A62] transition-colors font-medium"
        >
          Get Custom Quote for Your Project
        </button>
      </div>
    </div>
  );
};

export default UpdatedApplicationSection;