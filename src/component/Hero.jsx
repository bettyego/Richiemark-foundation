import React, { useState, useEffect } from "react";
import { Heart, Users, BookOpen, Shield, Droplets, Home } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Lives. Enriching Futures.",
      subtitle: "Health & Medical Care",
      description: "Providing accessible healthcare and medical support to Nigerian communities in need.",
      icon: Heart,
      gradient: "from-green-600 via-[#228B22] to-emerald-700",
      image: "/richm1.jpg"
    },
    {
      title: "Building Stronger Communities",
      subtitle: "Education & Development",
      description: "Creating educational opportunities and sustainable development across Nigeria.",
      icon: BookOpen,
      gradient: "from-blue-600 via-[#228B22] to-teal-700",
      image: "/hel.webp"
    },
    {
      title: "Protecting Human Rights",
      subtitle: "Justice & Advocacy",
      description: "Defending human dignity and promoting justice for all Nigerians.",
      icon: Shield,
      gradient: "from-purple-600 via-[#228B22] to-indigo-700",
      image: "/richm3.jpg"
    },
    {
      title: "Community Development",
      subtitle: "Building Together",
      description: "Strengthening communities through collaborative development and sustainable initiatives.",
      icon: Users,
      gradient: "from-orange-600 via-[#FFA500] to-yellow-600",
      image: "/richm4.jpg"
    },
    {
      title: "Emergency Response",
      subtitle: "When Help is Needed",
      description: "Rapid response and relief services for communities facing emergencies and disasters.",
      icon: Shield,
      gradient: "from-red-600 via-[#228B22] to-pink-700",
      image: "/richm5.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section id="main-content" className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000`}>
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFA500]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-[#FFA500]/25 rounded-full animate-pulse"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Text Content */}
          <div className="text-white space-y-8 fade-in">
            {/* Icon Badge */}
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <IconComponent className="w-6 h-6 text-[#FFA500]" />
              <span className="text-sm font-semibold tracking-wide">{currentSlideData.subtitle}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-white">{currentSlideData.title.split('.')[0]}.</span>
              <span className="block text-[#FFA500] mt-2">{currentSlideData.title.split('.')[1]}.</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              {currentSlideData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/donate"
                className="group bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
                Donate Now
              </a>
              <a
                href="/volunteer"
                className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFA500]">10,000+</div>
                <div className="text-sm text-white/80">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFA500]">50+</div>
                <div className="text-sm text-white/80">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFA500]">25+</div>
                <div className="text-sm text-white/80">Programs</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src={currentSlideData.image}
                alt="Richmark Foundation Impact"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Health Care</div>
                  <div className="text-sm text-gray-600">5,000+ Treated</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Education</div>
                  <div className="text-sm text-gray-600">2,500+ Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#FFA500] w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
