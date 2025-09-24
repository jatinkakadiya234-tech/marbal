import React from 'react';

export default function AdvicePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0E5543' }}>
      {/* Added extra spacing above header */}
      <div className="pt-20"></div>
      
      {/* Header Section - Moved Down */}
      <header className="pt-8 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F2E1C5' }}>
          Marble Care Guide
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#F2E1C5', opacity: 0.9 }}>
          Learn how to properly maintain and protect your marble surfaces to preserve their natural beauty for years to come.
        </p>
      </header>

      {/* Rest of your content remains the same */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-2xl mb-12 border-4" style={{ borderColor: '#F2E1C5' }}>
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1758&q=80" 
            alt="Beautiful marble countertop" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Introduction */}
        <section className="rounded-xl p-6 mb-8 border-2" style={{ backgroundColor: '#0E5543', borderColor: '#F2E1C5', color: '#F2E1C5' }}>
          <h2 className="text-2xl font-semibold mb-4">Why Marble Needs Special Care</h2>
          <p className="mb-4 opacity-90">
            Marble is a beautiful natural stone that adds elegance to any space. However, it's also porous and susceptible to staining, etching, and scratching if not properly maintained.
          </p>
          <p className="opacity-90">
            With the right care routine, you can keep your marble surfaces looking pristine while protecting your investment.
          </p>
        </section>

        {/* Care Tips Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Daily Cleaning */}
          <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: '#F2E1C5', backgroundColor: '#0E5543' }}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Cleaning marble surface" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6" style={{ color: '#F2E1C5' }}>
              <h3 className="text-xl font-semibold mb-3">Daily Cleaning</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Use a soft, damp cloth or mop with pH-neutral cleaner</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Wipe up spills immediately to prevent staining</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Avoid vinegar, lemon juice, or abrasive cleaners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Dry surfaces after cleaning to prevent water spots</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Protection & Prevention */}
          <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: '#F2E1C5', backgroundColor: '#0E5543' }}>
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1730&q=80" 
                alt="Marble protection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6" style={{ color: '#F2E1C5' }}>
              <h3 className="text-xl font-semibold mb-3">Protection & Prevention</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Apply sealant every 6-12 months for stain resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Use coasters under glasses and trivets under hot items</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Avoid placing acidic foods directly on marble</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1" style={{ color: '#F2E1C5' }}>•</span>
                  <span>Use placemats or tablecloths for added protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <section className="rounded-xl p-6 mb-8 border-2" style={{ borderColor: '#F2E1C5', backgroundColor: '#0E5543', color: '#F2E1C5' }}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Marble Care: Do's & Don'ts</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#F2E1C5' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Do's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Clean spills immediately with a soft cloth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Use coasters and placemats regularly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Dust mop or vacuum regularly to remove abrasive particles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Use pH-neutral cleaners specifically designed for marble</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Reseal your marble periodically as recommended</span>
                </li>
              </ul>
            </div>
            
            {/* Don'ts */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#F2E1C5' }}>
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Don'ts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Don't use vinegar, lemon juice, or acidic cleaners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Don't use abrasive pads or harsh scrub brushes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Don't place hot items directly on the surface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Don't use generic household cleaners on marble</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Don't allow spills to sit for extended periods</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Care */}
        <section className="rounded-xl p-6 mb-8 border-2" style={{ borderColor: '#F2E1C5', backgroundColor: '#0E5543', color: '#F2E1C5' }}>
          <h2 className="text-2xl font-semibold mb-4">When to Seek Professional Help</h2>
          <p className="mb-4 opacity-90">
            While regular maintenance can be done at home, some marble issues require professional attention:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span>Deep stains that don't respond to home treatments</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span>Significant etching or surface damage</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span>Cracks or chips that need repair</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span>Professional sealing for high-traffic areas</span>
            </li>
          </ul>
        </section>

        {/* Additional Tips */}
        <section className="rounded-xl p-6 border-2" style={{ borderColor: '#F2E1C5', backgroundColor: '#0E5543', color: '#F2E1C5' }}>
          <h2 className="text-2xl font-semibold mb-4 text-center">Quick Marble Care Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🧽</div>
              <h3 className="font-semibold mb-2">Gentle Cleaning</h3>
              <p className="text-sm opacity-90">Use soft cloths and mild cleaners only</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-2">Regular Sealing</h3>
              <p className="text-sm opacity-90">Protect with sealant every 6-12 months</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚫</div>
              <h3 className="font-semibold mb-2">Avoid Acids</h3>
              <p className="text-sm opacity-90">Keep acidic substances away from marble</p>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}