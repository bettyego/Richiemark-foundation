import React, { useEffect } from 'react';

const SEO = ({
  title = "Richmark Humanitarian Foundation - Empowering Nigerian Communities",
  description = "Richmark Humanitarian Foundation is dedicated to empowering Nigerian communities through health, education, human rights, and sustainable development initiatives.",
  keywords = "Nigeria foundation, charity, health, education, human rights, community development, Abuja, Abia, donation, humanitarian",
  image = "/richiemark.jpg",
  url = "https://richmarkfoundation.com"
}) => {
  const fullTitle = title.includes('Richmark') ? title : `${title} | Richmark Humanitarian Foundation`;

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
    updateMetaTag('author', 'Richmark Humanitarian Foundation');
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
      "name": "Richmark Humanitarian Foundation",
      "description": description,
      "url": url,
      "logo": image,
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Head Office",
          "streetAddress": "No 71 Nouakchott street, Suit 6 ground floor, wuse zone 1",
          "addressLocality": "Wuse Zone 1",
          "addressRegion": "FCT, Abuja",
          "addressCountry": "Nigeria"
        },
        {
          "@type": "PostalAddress",
          "name": "Branch Office",
          "streetAddress": "160 Faulks road Aba",
          "addressLocality": "Aba",
          "addressRegion": "Abia state",
          "addressCountry": "Nigeria"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "09110549719",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "07042034473",
          "contactType": "WhatsApp",
          "availableLanguage": "English"
        }
      ]
    });
  }, [fullTitle, description, keywords, image, url]);

  return null; // This component doesn't render anything visible
};

export default SEO;
