import React from 'react';

// Unified Person schema data for Dr. Liyan Massaband
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://drliyanmassaband.com/#person",
  "name": "Dr. Liyan Massaband",
  "givenName": "Liyan",
  "familyName": "Massaband",
  "additionalName": "Dr. Liyan Massaband, D.M.D., M.P.H.",
  "honorificSuffix": "D.M.D., M.P.H.",
  "jobTitle": "Dentist & Oral Implant Specialist",
  "description": "Dr. Liyan Massaband, D.M.D., M.P.H., is an elite general, cosmetic, and reconstructive dentist in California. Combining physiological science degrees from the University of Arizona, a Master of Public Health from USC, and a Doctorate of Dental Medicine from Midwestern University, she has placed over 1,000+ dental implants and specializes in biological All-on-X restorations.",
  "url": "https://drliyanmassaband.com/",
  "telephone": "818-555-0144",
  "email": "info@drliyanmassaband.com",
  "gender": "Female",
  "knowsAbout": [
    "Dental Implants",
    "All-on-X Full Arch Restoration",
    "Cosmetic Dentistry",
    "Implantology",
    "Osseointegration",
    "Oral-Systemic Medicine",
    "Bone Grafting",
    "Public Health Dentistry"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Midwestern University College of Dental Medicine",
      "location": {
        "@type": "PostalAddress",
        "addressLocality": "Glendale",
        "addressRegion": "AZ"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of Southern California (USC)",
      "location": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of Arizona",
      "location": {
        "@type": "PostalAddress",
        "addressLocality": "Tucson",
        "addressRegion": "AZ"
      }
    }
  ],
  "affiliation": [
    {
      "@type": "MedicalOrganization",
      "name": "Magnolia Dentistry",
      "url": "https://www.magnoliadentistry.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1923 W Magnolia Blvd",
        "addressLocality": "Burbank",
        "addressRegion": "CA",
        "postalCode": "91506",
        "addressCountry": "US"
      }
    },
    {
      "@type": "MedicalOrganization",
      "name": "ConfiDental Beverly Hills",
      "url": "https://confidentalbeverlyhills.com/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9401 Wilshire Blvd, Suite 1050",
        "addressLocality": "Beverly Hills",
        "addressRegion": "CA",
        "postalCode": "90212",
        "addressCountry": "US"
      }
    }
  ],
  "sameAs": [
    "https://www.instagram.com/drliyanmassaband/",
    "https://www.zocdoc.com/dentist/liyan-massaband-dmd-mph-314420",
    "https://npiregistry.cms.hhs.gov/provider-view/1346588407"
  ]
};

// Dentist / Clinic Location schema data
export const BURBANK_DENTIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://drliyanmassaband.com/#burbank-dentist",
  "name": "Dr. Liyan Massaband - Magnolia Dentistry (Burbank)",
  "telephone": "818-555-0144",
  "email": "info@drliyanmassaband.com",
  "url": "https://drliyanmassaband.com/locations/burbank/",
  "priceRange": "$$$",
  "logo": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200",
  "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  "description": "Advanced biological dental implants and full-arch restorative procedures performed by Dr. Liyan Massaband at Magnolia Dentistry in Burbank. Over 1,000+ successfully placed dental implants.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1923 W Magnolia Blvd",
    "addressLocality": "Burbank",
    "addressRegion": "CA",
    "postalCode": "91506",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.16782,
    "longitude": -118.33413
  },
  "employee": {
    "@type": "Person",
    "@id": "https://drliyanmassaband.com/#person"
  },
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "medicalSpecialty": "CosmeticDentistry",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

export const BEVERLY_HILLS_DENTIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://drliyanmassaband.com/#beverly-hills-dentist",
  "name": "Dr. Liyan Massaband - ConfiDental Beverly Hills",
  "telephone": "310-555-0190",
  "email": "info@drliyanmassaband.com",
  "url": "https://drliyanmassaband.com/locations/beverly-hills/",
  "priceRange": "$$$",
  "logo": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200",
  "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  "description": "Elite high-esthetic cosmetic dentistry and biological dental implant therapy, including full-mouth All-on-X restorations, provided by Dr. Liyan Massaband in Beverly Hills. 1,000+ implants placed.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9401 Wilshire Blvd, Suite 1050",
    "addressLocality": "Beverly Hills",
    "addressRegion": "CA",
    "postalCode": "90212",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.06734,
    "longitude": -118.39756
  },
  "employee": {
    "@type": "Person",
    "@id": "https://drliyanmassaband.com/#person"
  },
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "medicalSpecialty": "CosmeticDentistry",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

// Generates FAQPage schema dynamically from questions and answers
export const getFaqSchema = (faqs: { q: string; a: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};

interface JsonLdProps {
  schema: Record<string, any> | Record<string, any>[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};
