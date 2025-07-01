import React, { useEffect } from 'react';

const SEO = ({
  title = "Richmark Foundation - Empowering Nigerian Communities",
  description = "Richmark Foundation is dedicated to empowering Nigerian communities through health, education, human rights, and sustainable development initiatives.",
  keywords = "Nigeria foundation, charity, health, education, human rights, community development, Lagos, donation",
  image = "/richmark.jpg",
  url = "https://richmarkfoundation.org.ng"
}) => {
  const fullTitle = title.includes('Richmark Foundation') ? title : `${title} | Richmark Foundation`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Richmark Foundation');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured data
    let structuredData = document.querySelector('#structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NGO",
      "name": "Richmark Foundation",
      "description": description,
      "url": url,
      "logo": image,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15 Ademola Adetokunbo Street",
        "addressLocality": "Victoria Island",
        "addressRegion": "Lagos",
        "addressCountry": "Nigeria"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-901-234-5678",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    });
  }, [fullTitle, description, keywords, image, url]);

  return null; // This component doesn't render anything visible
};

export default SEO;
