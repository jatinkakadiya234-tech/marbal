import React, { Suspense, lazy } from "react";
import WorldMap from "./WorldMap";
import SEO from "../Helper/SEO";

// Lazy load components
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const CategorySelector = lazy(() => import("./CategorySelector"));
const FeaturedCollections = lazy(() => import("./OurCraft"));
const Productcollection = lazy(() => import("./Productcollection"));
const Application = lazy(() => import("./Application"));
const CuttingProcessSection = lazy(() => import("./CuttingProcessSection"));
const Testimonials = lazy(() => import("./Testimonials"));

const Homepage = () => {
  return (
    <>
      <SEO 
        title="Rishab Green Marbles - Premium Natural Stone & Marble Supplier"
        description="Leading supplier of premium natural stones and marbles in India. Transform your space with our finest quality marble, granite, and natural stone products. Expert craftsmanship and precision cutting services."
        keywords="marble supplier India, natural stone, granite, premium marble, stone cutting, marble installation, interior design, construction materials, Rishab Green Marbles"
      />
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Categories...</div>}>
        <CategorySelector />
      </Suspense>

      {/* Uncomment if needed */}
      {/* <Suspense fallback={<div>Loading Featured Collections...</div>}>
        <FeaturedCollections />
      </Suspense> */}

      <Suspense fallback={<div>Loading Products...</div>}>
        <Productcollection />
      </Suspense>

      {/* <Suspense fallback={<div>Loading Application...</div>}>
        <Application />
      </Suspense> */}

      <Suspense fallback={<div>Loading Cutting Process...</div>}>
        <CuttingProcessSection />
      </Suspense>

      {/* <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense> */}

      <Suspense fallback={<div>Loading Map...</div>}>
        <WorldMap/>
      </Suspense>
    </>
  );
};

export default Homepage;
