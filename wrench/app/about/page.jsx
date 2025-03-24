import Image from "next/image";
import MainLayout from "../components/layout/MainLayout";
import { CheckCircle, Calendar } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/golfr.jpg"
          alt="repair shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          About Wrench Customs
        </h1>
        <p className="text-xl max-w-2xl">
          Professional auto repair services with over 15 years of experience. We
          are dedicated to providing quality service and customer satisfaction.
        </p>
      </div>
    </section>
  );
};

const CompanyStory = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[#2596be] font-medium mb-2">OUR STORY</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            A Legacy of Quality Auto Repair
          </h3>
          <p className="text-gray-600 mb-6">
            Founded in 2008, Wrench Customs Auto Repair began as a small
            family-owned shop with a simple mission: to provide honest, reliable
            auto repair services at fair prices. What started as a two-person
            operation has grown into a full-service auto repair centre with a
            team of certified mechanics and state-of-the-art equipment.
          </p>
          <p className="text-gray-600 mb-8">
            Our founders, Mike and Dave, brought over 20 years of combined
            experience to the business. Their commitment to quality workmanship
            and exceptional customer service has been the foundation of our
            success. Today, we continue to uphold these values as we serve our
            community with pride.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle
                className="text-[#2596be] mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold">Quality Service</h4>
                <p className="text-gray-600 text-sm">
                  We use only the highest quality parts and tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className="text-[#2596be] mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold">Expert Technicians</h4>
                <p className="text-gray-600 text-sm">
                  Our mechanics are certified and experienced.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className="text-[#2596be] mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold">Customer Satisfaction</h4>
                <p className="text-gray-600 text-sm">
                  Your satisfaction is our top priority.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle
                className="text-[#2596be] mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold">Fair Pricing</h4>
                <p className="text-gray-600 text-sm">
                  Transparent pricing with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/img/beamer.jpg"
            alt="Auto mechanic working on car"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">
            OUR MISSION & VISION
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Driving Excellence in Auto Repair
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-gray-600 mb-6">
              To provide exceptional auto repair services that exceed customer
              expectations through technical expertise, honest communication,
              and a commitment to quality. We strive to build long-lasting
              relationships with our customers based on trust and reliability.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Deliver honest and transparent service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Provide accurate diagnostics and repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Ensure customer satisfaction with every service</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
            <p className="text-gray-600 mb-6">
              To be the most trusted auto repair service in our community, known
              for our integrity, expertise, and exceptional customer care. We
              aim to continuously evolve with advancing automotive technology
              while maintaining our core values of honesty and quality
              workmanship.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Lead the industry in customer satisfaction</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Embrace new technologies and techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#2596be] mt-1 flex-shrink-0"
                  size={18}
                />
                <span>Build a reputation for excellence in our community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, position, bio, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-80">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-1">{name}</h4>
        <p className="text-[#2596be] mb-4">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mike Johnson",
      position: "Founder & Master Mechanic",
      bio: "With over 20 years of experience, Mike founded Wrench Customs with a vision to provide honest and reliable auto repair services.",
      image: "/img/mike-johnson.jpg",
    },
    {
      id: 2,
      name: "Dave Williams",
      position: "Co-Founder & Service Manager",
      bio: "Dave oversees all service operations, ensuring that every vehicle receives the highest quality care and attention to detail.",
      image: "/img/davewilliams.jpg",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      position: "Lead Diagnostic Technician",
      bio: "Sarah specialises in complex diagnostics and electrical systems, bringing cutting-edge technical expertise to our team.",
      image: "/img/sarahthompson.jpg",
    },
    {
      id: 4,
      name: "Robert Chen",
      position: "Certified Mechanic",
      bio: "Robert is an ASE-certified mechanic with specialised training in European and luxury vehicles.",
      image: "/img/robertchen.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">OUR TEAM</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of certified mechanics and automotive experts are dedicated
            to providing the highest quality service for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              position={member.position}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MilestoneItem = ({ year, title, description }) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#2596be] rounded-full flex items-center justify-center text-white font-bold">
          {year}
        </div>
        <div className="w-0.5 h-full bg-gray-200 mt-4"></div>
      </div>
      <div className="pb-12">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MilestonesSection = () => {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description:
        "Wrench Customs Auto Repair was founded by Mike Johnson and Dave Williams with a small garage and big dreams.",
    },
    {
      year: "2012",
      title: "Expansion to New Location",
      description:
        "Due to growing demand, we moved to a larger facility with more service bays and added new team members.",
    },
    {
      year: "2015",
      title: "ASE Certified Team",
      description:
        "Our entire technical team achieved ASE certification, demonstrating our commitment to professional excellence.",
    },
    {
      year: "2018",
      title: "Advanced Diagnostic Equipment",
      description:
        "We invested in state-of-the-art diagnostic equipment to better serve modern vehicles with complex systems.",
    },
    {
      year: "2020",
      title: "Community Service Award",
      description:
        "Recognised by the local chamber of commerce for our contributions to the community and exceptional service.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Implemented new digital systems for appointment scheduling, customer communication, and service tracking.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">OUR JOURNEY</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Key Milestones
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our journey from a small garage to a full-service auto repair center
            has been marked by continuous growth and improvement.
          </p>
        </div>

        <div className="mt-16">
          {milestones.map((milestone, index) => (
            <MilestoneItem
              key={index}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We take pride in our work and the relationships we build with our
            customers. Here's what they have to say about us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-300 italic mb-6">
              "Wrench Customs has been servicing my vehicles for years. Their
              attention to detail and honest approach keeps me coming back. I
              wouldn't trust my car with anyone else."
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/img/beamer.jpg"
                  alt="John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">John Smith</h4>
                <p className="text-gray-400 text-sm">Loyal Customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-300 italic mb-6">
              "After trying several mechanics in town, I finally found Dynamic
              Duo. They diagnosed and fixed an issue that had been plaguing my
              car for months. Professional, fast, and fairly priced."
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/img/golfr.jpg"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-400 text-sm">New Customer</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-300 italic mb-6">
              "As a business owner with a fleet of vehicles, I need reliable
              service. Wrench Customs has never let me down. They work with our
              schedule and keep our vehicles running smoothly."
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/img/ramp.jpg"
                  alt="Michael Davis"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Michael Davis</h4>
                <p className="text-gray-400 text-sm">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <TeamSection />
      <MilestonesSection />
      <TestimonialSection />
    </MainLayout>
  );
}
