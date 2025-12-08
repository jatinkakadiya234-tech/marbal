// import React, { useState } from 'react';

// const DualImageCard = ({ app }) => {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   return (
//     <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex h-80">
//       {/* Left Content Section */}
//       <div className="w-1/3 p-6 flex flex-col justify-center">
//         <h3
//           className="text-xl font-bold text-[#0E5543] mb-3"
//           style={{ fontFamily: "Arial, sans-serif", fontWeight: "300" }}
//         >
//           {app.title}
//         </h3>
//         <p
//           className="text-gray-600 mb-4 text-sm leading-relaxed"
//           style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
//         >
//           {app.description}
//         </p>
//         <div className="space-y-1">
//           <p className="text-[#0E5543] font-semibold text-xs">Italy</p>
//           <p className="text-[#0E5543] font-semibold text-xs">MARBLE</p>
//           <p className="text-[#0E5543] font-semibold text-xs">INTERIORS</p>
//         </div>
//       </div>

//       {/* Right Images Section */}
//       <div className="w-2/3 flex">
//         {/* Large Image */}
//         <div 
//           className="w-2/3 relative overflow-hidden cursor-pointer"
//           onMouseEnter={() => setHoveredProduct('main')}
//           onMouseLeave={() => setHoveredProduct(null)}
//         >
//           <img
//             src={app.image}
//             alt={app.alt}
//             className={`w-full h-full object-cover transition-all duration-500 ${
//               hoveredProduct === 'main' ? 'scale-110 brightness-110' : 'scale-100'
//             }`}
//           />
//           {hoveredProduct === 'main' && (
//             <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
//               <div className="text-white text-center">
//                 <h4 className="font-bold text-lg">{app.title}</h4>
//                 <p className="text-sm">Premium Collection</p>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Small Image */}
//         <div 
//           className="w-1/3 relative overflow-hidden cursor-pointer"
//           onMouseEnter={() => setHoveredProduct('secondary')}
//           onMouseLeave={() => setHoveredProduct(null)}
//         >
//           <img
//             src={app.image2 || app.image}
//             alt={app.alt}
//             className={`w-full h-full object-cover transition-all duration-500 ${
//               hoveredProduct === 'secondary' ? 'scale-110 brightness-110' : 'scale-100'
//             }`}
//           />
//           {hoveredProduct === 'secondary' && (
//             <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
//               <div className="text-white text-center">
//                 <h4 className="font-bold text-sm">{app.title}</h4>
//                 <p className="text-xs">Variant</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DualImageCard;

import React from 'react'

export default function () {
  return (
    <div></div>
  )
}
