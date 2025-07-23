import React from "react";

const areasOfImpact = [
  {
    title: "Healing Hands & Healthy Communities",
    subtitle: "Medical & Health",
    icon: "🩺",
    color: "border-[#228B22]",
    bgColor: "bg-green-50",
    iconBg: "bg-[#228B22]",
    initiatives: [
      {
        name: "Reaching the Unreached",
        description: "Bringing critical medical outreach programs directly to doorsteps, villages, and forgotten corners, because distance should never decide destiny."
      },
      {
        name: "Seeing Clearly, Acting Swiftly",
        description: "Providing essential diagnostic investigations and assessments – turning fear of the unknown into a pathway for care."
      },
      {
        name: "Medicines Where They Matter",
        description: "Ensuring life-saving pharmaceutical supplies reach the hands that need them most, bridging the gap between scarcity and survival."
      },
      {
        name: "Standing Against the Shadow",
        description: "Offering focused support and cancer-based interventions – bringing hope, early detection, and compassionate care to those facing this formidable challenge."
      },
      {
        name: "Knowledge as Prevention",
        description: "Empowering communities through vital health education seminars, turning information into action for lasting well-being."
      },
      {
        name: "Stronger Together",
        description: "Forging deep partnerships with hospitals, clinics, and health institutions to amplify our reach and expertise, ensuring no one fights illness alone."
      }
    ]
  },
  {
    title: "Unlocking Potential",
    subtitle: "Education",
    icon: "📚",
    color: "border-[#FFA500]",
    bgColor: "bg-orange-50",
    iconBg: "bg-[#FFA500]",
    description: "Investing in minds and spirits, providing access to quality education that ignites curiosity, builds confidence, and equips the next generation to break cycles of poverty and shape their own futures. We believe every child deserves the light of learning."
  },
  {
    title: "The Gift of Life",
    subtitle: "Blood Donation Drives",
    icon: "🩸",
    color: "border-red-500",
    bgColor: "bg-red-50",
    iconBg: "bg-red-500",
    description: "Mobilizing communities to give the most precious gift – blood. Each drive is a lifeline, connecting the generosity of donors directly to patients fighting for survival in emergencies and ongoing treatments. We turn compassion into circulating hope."
  },
  {
    title: "Dignity Defended",
    subtitle: "Human Rights",
    icon: "⚖️",
    color: "border-purple-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-600",
    description: "Championing the inherent worth of every person. We actively work to protect fundamental rights, advocate for justice, empower the marginalized, and ensure every voice is heard and respected. Dignity is non-negotiable."
  },
  {
    title: "Building Livelihoods",
    subtitle: "Vocational Skills Training",
    icon: "🔧",
    color: "border-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-600",
    description: "Equipping youth and adults with practical, vocational skills trainings that open doors to sustainable income and self-reliance. We don't just teach trades; we forge pathways out of dependency and into dignified futures."
  },
  {
    title: "Foundations for Tomorrow",
    subtitle: "Infrastructural Development & Essential Services",
    icon: "🏗️",
    color: "border-gray-600",
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-600",
    description: "Laying the physical groundwork for thriving communities. We focus on infrastructural development – clean water, sanitation, safe community spaces – and provide essential general services that form the bedrock of health, safety, and opportunity. Strong foundations nurture strong futures."
  }
];

const FocusAreas = () => {
  return (
    <section className="w-full py-20 px-4 md:px-20 bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-center text-[#228B22] mb-6 tracking-tight">
          Richmark Foundation: Our Areas of Impact
        </h1>
        <p className="text-center font-body text-gray-700 max-w-4xl mx-auto mb-8 text-lg leading-relaxed tracking-wide">
          We don't just see needs; we hear the cries behind them. Guided by our core values, we channel our passion and partnerships into these vital areas:
        </p>
      </div>

      {/* Areas of Impact */}
      <div className="max-w-7xl mx-auto space-y-12">
        {areasOfImpact.map((area, index) => (
          <div
            key={index}
            className={`${area.bgColor} rounded-2xl p-8 border-l-6 ${area.color} shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className={`w-16 h-16 ${area.iconBg} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <span className="text-2xl text-white">{area.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-2 tracking-tight">
                    {area.title}
                  </h2>
                  <p className="text-lg font-accent font-medium text-gray-600 uppercase tracking-wider">
                    {area.subtitle}
                  </p>
                </div>

                {/* Health section with detailed initiatives */}
                {area.initiatives ? (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {area.initiatives.map((initiative, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                          <h4 className="font-serif font-semibold text-gray-800 mb-2 text-sm">
                            {initiative.name}:
                          </h4>
                          <p className="font-body text-gray-700 text-sm leading-relaxed">
                            {initiative.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Other areas with single description */
                  <p className="font-body text-gray-700 leading-relaxed text-lg tracking-wide">
                    {area.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;
