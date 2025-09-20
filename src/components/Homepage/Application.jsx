import React from "react";

export default function Application() {
  const steps = [
    {
      title: "Consultation",
      description: "We discuss your project requirements and provide expert advice",
      image: "https://img.icons8.com/ios-filled/100/0E5543/conference-call.png",
    },
    {
      title: "Site Survey",
      description: "Our team visits your location for precise measurements",
      image: "https://img.icons8.com/ios-filled/100/0E5543/inspection.png",
    },
    {
      title: "Sourcing Of Stone",
      description: "We select the finest quality marble from our extensive collection",
      image: "https://img.icons8.com/ios-filled/100/0E5543/rocks.png",
    },
    {
      title: "Fabrication & Finishing",
      description: "Precision cutting and polishing to meet your specifications",
      image: "https://img.icons8.com/ios-filled/100/0E5543/machine.png",
    },
    {
      title: "Fitting",
      description: "Professional installation by our experienced craftsmen",
      image: "https://img.icons8.com/ios-filled/100/0E5543/worker-male.png",
    },
    {
      title: "Offcuts",
      description: "Eco-friendly disposal or creative reuse of leftover materials",
      image: "https://img.icons8.com/ios-filled/100/0E5543/recycle.png",
    },
  ];

  return (
    <section
      className="py-10 sm:py-14 md:py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.britannica.com/39/102039-159-6297CA22/Marble-quarry-Carrara-Italy.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl sm:max-w-3xl mx-auto">
            From consultation to completion, we ensure a seamless experience with quality craftsmanship at every step
          </p>
        </div>

        <div className="relative">
          {/* Center timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-1 bg-white/60"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-5 sm:p-6 bg-white/90 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Step Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 relative z-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>

                {/* Connector for mobile */}
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
