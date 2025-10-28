import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Rishab Green Marbles - Premium Natural Stone & Marble Supplier",
  description = "Leading supplier of premium natural stones and marbles. Transform your space with our finest quality marble, granite, and natural stone products. Expert craftsmanship and precision cutting.",
  keywords = "marble supplier, natural stone, granite, premium marble, stone cutting, marble installation, interior design, construction materials",
  image = "/logo.png",
  url = window.location.href,
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rishab Green Marbles",
    "description": description,
    "url": url,
    "logo": `${window.location.origin}${image}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917201000140",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://wa.me/917201000140",
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${window.location.origin}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${window.location.origin}${image}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;