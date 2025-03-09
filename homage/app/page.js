import Navigation from "./components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container text-center fade-in">
          <h1 className="text-6xl font-semibold mb-6">Innovation Reimagined</h1>
          <p className="text-xl text-secondary-color mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of design and functionality
          </p>
          <button className="hero-button">Explore Now</button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-semibold mb-6">
                Crafted with Precision
              </h2>
              <p className="text-secondary-color mb-8">
                Every detail matters. We've carefully designed every aspect to
                deliver an exceptional experience that stands out from the
                ordinary.
              </p>
              <button className="hero-button">Learn More</button>
            </div>
            <div className="relative h-[400px] fade-in">
              <Image
                src="/product-feature.svg"
                alt="Product Feature"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-4xl font-semibold mb-16 fade-in">
            Innovation at Every Level
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Design",
                description:
                  "Beautiful aesthetics meet intuitive functionality",
              },
              {
                title: "Premium Quality",
                description:
                  "Crafted with the finest materials and attention to detail",
              },
              {
                title: "Future Ready",
                description: "Built for today, designed for tomorrow",
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 fade-in">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-secondary-color">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-black text-white">
        <div className="container text-center fade-in">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of design and technology
          </p>
          <button className="hero-button bg-white text-black hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
