import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, BookOpen, PenTool, GraduationCap, Target, Users, Clock, Award } from "lucide-react";

const services = [
  {
    category: "High School Preparation",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    services: [
      {
        title: "Core Subject Tutoring",
        description: "Comprehensive support in Math, Science, English, and History",
        features: ["Personalized lesson plans", "Regular progress assessments", "Homework help", "Test preparation"],
        price: "$45/hour",
      },
      {
        title: "Study Skills Development",
        description: "Learn effective study techniques and time management",
        features: ["Note-taking strategies", "Memory techniques", "Organization skills", "Test-taking strategies"],
        price: "$40/hour",
      },
    ]
  },
  {
    category: "College Entrance Exams",
    icon: Target,
    color: "from-indigo-500 to-indigo-600",
    services: [
      {
        title: "SAT Preparation",
        description: "Comprehensive SAT prep with practice tests and strategies",
        features: ["Full-length practice tests", "Section-specific strategies", "Score improvement tracking", "College application guidance"],
        price: "$60/hour",
      },
      {
        title: "ACT Preparation",
        description: "Expert ACT tutoring covering all four sections",
        features: ["Math & Science strategies", "English & Reading techniques", "Practice test analysis", "Score optimization"],
        price: "$60/hour",
      },
    ]
  },
  {
    category: "Subject-Specific Tutoring",
    icon: Calculator,
    color: "from-blue-600 to-blue-700",
    services: [
      {
        title: "Mathematics",
        description: "From basic algebra to advanced calculus",
        features: ["Algebra I & II", "Geometry", "Trigonometry", "Calculus"],
        price: "$50/hour",
      },
      {
        title: "Reading & Writing",
        description: "Develop strong literacy and composition skills",
        features: ["Reading comprehension", "Essay writing", "Grammar & vocabulary", "Literature analysis"],
        price: "$45/hour",
      },
    ]
  },
  {
    category: "Specialized Programs",
    icon: Award,
    color: "from-indigo-600 to-indigo-700",
    services: [
      {
        title: "Gifted & Talented",
        description: "Advanced programs for high-achieving students",
        features: ["Accelerated learning", "Enrichment activities", "Competition prep", "Advanced placement"],
        price: "$65/hour",
      },
      {
        title: "Learning Support",
        description: "Specialized support for students with learning differences",
        features: ["Individualized instruction", "Multi-sensory approaches", "Accommodation strategies", "Progress monitoring"],
        price: "$55/hour",
      },
    ]
  }
];

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Experienced educators with proven track records",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "In-person and online sessions available",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Customized learning strategies for each student",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of significant score improvements",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Comprehensive tutoring and coaching services designed to help students achieve their academic goals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-blue-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-16">
        {services.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <div className="text-center mb-12">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={service.title} className="gradient-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${(categoryIndex * 0.2) + (serviceIndex * 0.1)}s`}}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      </div>
                      <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 gradient-hero text-white rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative z-10 text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Schedule a free consultation to discuss your academic goals and create a personalized learning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold transition-all duration-300">
              <Link href="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 