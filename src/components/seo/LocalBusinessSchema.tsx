import React from "react";
import { siteConfig } from "@/config/site";

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/gallery/565123458_1240238891457994_3695900658646377638_n.jpg`,
    logo: `${siteConfig.url}/images/gallery/LOGO.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.475853,
      longitude: 121.015215,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    priceRange: "₱120 - ₱1,200",
    currenciesAccepted: "PHP",
    paymentAccepted: "Cash, GCash, Bank Transfer",
    hasMap: "https://maps.google.com/?q=91+Saudi+Arabia+St+Paranaque",
    sameAs: [siteConfig.socials.facebook, siteConfig.socials.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
