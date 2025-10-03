import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ServiceHeader from "./ServiceHeader";
import ServiceGrid from "./ServiceGrid";
import ServiceModal from "./ServicesModal";
import CTASection from "./CTASection";
import ServiceNav from "./ServiceNav";

// src/data/serviceData.js

export const categories = ["All", "Commercial", "Residential", "Outdoor"];

export const services = [
  {
    id: 1,
    title: "Luxury Hotel Lobby",
    category: "Commercial",
    description:
      "Grand entrance featuring our premium green marble with gold veining, creating an opulent first impression.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    details:
      "Over 2,000 sq ft of Emerald Green marble installed with precision cutting technology for seamless patterns.",
    features: ["Premium Materials", "6 Month Project", "2,000+ sq ft"],
    accentColor: "#0E5543",
  },
  {
    id: 2,
    title: "Modern Kitchen Design",
    category: "Residential",
    description:
      "Elegant kitchen countertops and backsplashes using our polished white marble with subtle grey veins.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    details:
      "Custom-cut marble countertops with integrated sink and waterfall edges for a continuous flow.",
    features: ["Custom Design", "3 Month Project", "Premium Finishing"],
    accentColor: "#B8860B",
  },
  {
    id: 3,
    title: "Outdoor Pool Deck",
    category: "Outdoor",
    description:
      "Weather-resistant marble decking around a luxury pool area that stays cool underfoot even in direct sunlight.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80",
    details:
      "Specialty treated marble with non-porous finish to withstand weather elements and pool chemicals.",
    features: ["Weather Resistant", "Specialty Treatment", "Non-Porous Finish"],
    accentColor: "#1E90FF",
  },
  // ➕ add more services as needed
];


export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section className="relative min-h-screen pb-15 bg-[white] overflow-hidden">
      {/* Service Header */}
      <ServiceHeader />

      <ServiceNav
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />


      {/* Services Grid */}
      <ServiceGrid
        filteredServices={filteredServices}
        setSelectedService={setSelectedService}
      />

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <CTASection />

      

      {/* Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
        .font-sans {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </section>
  );
}
