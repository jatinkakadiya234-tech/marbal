import React from 'react';
import QuarryFlautCard from './QuarryFlautCard';

const FlautCollection = () => {
  const collections = [
    {
      mainProduct: {
        name: "Kitchen Countertops",
        description: "Transform your kitchen with our premium granite and marble countertops. Heat-resistant, durable, and elegant.",
        origin: "Heat & scratch resistant",
        type: "Easy to clean & maintain",
        category: "Available in multiple finishes",
        image: "/kitchen.jpg"
      },
      secondaryProduct: {
        name: "Luxury Flooring",
        description: "Create stunning floors with our marble and granite tiles. Perfect for both residential and commercial spaces.",
        origin: "Non-slip surface options",
        type: "Water resistant",
        category: "Long-lasting durability",
        image: "/livingrooom.jpg"
      }
    },
    {
      mainProduct: {
        name: "Wall Cladding",
        description: "Enhance your interiors with natural stone wall cladding. Add texture and elegance to any space.",
        origin: "Natural texture & patterns",
        type: "Moisture resistant",
        category: "Easy installation",
        image: "/bedroom.jpg"
      },
      secondaryProduct: {
        name: "Bathroom Vanities",
        description: "Create luxurious bathrooms with our water-resistant marble and granite vanity tops.",
        origin: "Water & stain resistant",
        type: "Hygienic surface",
        category: "Custom edge profiles",
        image: "/kitchen2.jpg"
      }
    },
    {
      mainProduct: {
        name: "Outdoor Spaces",
        description: "Weather-resistant sandstone and granite for patios, walkways, and outdoor kitchens.",
        origin: "Weather resistant",
        type: "Anti-slip surface",
        category: "UV resistant colors",
        image: "/furniture.jpg"
      },
      secondaryProduct: {
        name: "Commercial Projects",
        description: "Premium stones for hotels, offices, and commercial buildings. Durable and impressive.",
        origin: "High traffic durability",
        type: "Low maintenance",
        category: "Professional appearance",
        image: "/cozyroom.jpg"
      }
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
      
             <div className="relative text-center mb-20">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4 mt-10 "
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
          >
            <span className="relative"> How Our Stones Transform Spaces</span>
          </h2>

          {/* Decorative line */}
          <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-20" />

          <p
            className="text-sm tracking-[0.3em] uppercase text-[#0E5543]/90 leading-relaxed font-medium"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "500",
              letterSpacing: "0.02em",
            }}
          >
           Discover the endless possibilities of our premium stones in real-world applications.
          </p>
        </div>


        <div className="space-y-0">
          {collections.map((collection, index) => (
            <QuarryFlautCard 
              key={index}
              mainProduct={collection.mainProduct}
              secondaryProduct={collection.secondaryProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlautCollection;