import React from "react";

const focusAreas = [
  {
    title: "Health",
    icon: "🩺",
    description:
      "We promote accessible and quality healthcare through medical outreach programs, health education seminars, free screenings, and partnerships with local clinics. Our goal is to improve wellness in underserved communities.",
  },
  {
    title: "Education",
    icon: "📚",
    description:
      "Education is a powerful tool for change. We provide school supplies, scholarships, mentorship, and vocational training to children and youth in need. We also support adult literacy programs and teacher empowerment.",
  },
  {
    title: "Human Rights",
    icon: "⚖️",
    description:
      "We advocate for the protection of human rights, including child protection, women's rights, and access to justice. Through workshops and campaigns, we promote awareness, equality, and legal aid services.",
  },
  {
    title: "Blood Donation Drives",
    icon: "🩸",
    description:
      "Our life-saving blood donation drives connect donors with hospitals and emergency responders. We organize awareness campaigns and partner with health institutions to address blood shortages in critical times.",
  },
  {
    title: "General Services",
    icon: "🌍",
    description:
      "We offer community-based services including food distribution, clothing drives, shelter support, and environmental initiatives. Our holistic approach addresses diverse needs to uplift and stabilize communities.",
  },
];

const FocusAreas = () => {
  return (
    <section className="w-full py-20 px-4 md:px-20 bg-white">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">
          Our Focus Areas
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At Richmark Foundation, we are committed to creating lasting change by addressing key
          areas affecting our communities. Learn more about our core areas of impact.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {focusAreas.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FocusAreas;
