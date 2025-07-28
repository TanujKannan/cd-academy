import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Target, BookOpen, TrendingUp, Award, Users, Clock, Brain } from "lucide-react";

const mathLevels = [
  {
    level: "Elementary Math",
    icon: Calculator,
    description: "Build strong foundational skills in basic mathematics",
    topics: ["Addition & Subtraction", "Multiplication & Division", "Fractions & Decimals", "Geometry Basics", "Problem Solving"],
    price: "$40/hour",
    color: "from-blue-500 to-blue-600",
    grade: "K-5",
  },
  {
    level: "Pre-Algebra",
    icon: Target,
    description: "Prepare for algebra with essential mathematical concepts",
    topics: ["Integers & Rational Numbers", "Equations & Inequalities", "Proportions & Percentages", "Geometry", "Data Analysis"],
    price: "$45/hour",
    color: "from-indigo-500 to-indigo-600",
    grade: "6-8",
  },
  {
    level: "Algebra I",
    icon: TrendingUp,
    description: "Master linear equations, functions, and algebraic thinking",
    topics: ["Linear Equations", "Functions & Relations", "Systems of Equations", "Polynomials", "Quadratic Functions"],
    price: "$50/hour",
    color: "from-blue-600 to-blue-700",
    grade: "8-9",
  },
  {
    level: "Algebra II",
    icon: Award,
    description: "Advanced algebraic concepts and problem-solving strategies",
    topics: ["Complex Numbers", "Polynomial Functions", "Rational Functions", "Exponential & Logarithmic", "Conic Sections"],
    price: "$55/hour",
    color: "from-indigo-600 to-indigo-700",
    grade: "10-11",
  },
  {
    level: "Geometry",
    icon: Brain,
    description: "Develop spatial reasoning and geometric proof skills",
    topics: ["Lines & Angles", "Triangles & Polygons", "Circles", "Transformations", "Coordinate Geometry"],
    price: "$50/hour",
    color: "from-blue-500 to-blue-600",
    grade: "9-10",
  },
  {
    level: "Trigonometry & Pre-Calculus",
    icon: Calculator,
    description: "Advanced mathematical concepts for college preparation",
    topics: ["Trigonometric Functions", "Trigonometric Identities", "Complex Numbers", "Vectors", "Matrices"],
    price: "$60/hour",
    color: "from-indigo-500 to-indigo-600",
    grade: "11-12",
  },
];

const specializedPrograms = [
  {
    name: "Math Competition Prep",
    description: "Prepare for math competitions and advanced problem-solving",
    features: ["Competition strategies", "Advanced problem-solving", "Speed techniques", "Proof writing"],
    duration: "Ongoing",
    price: "$65/hour",
  },
  {
    name: "Calculus Preparation",
    description: "Get ready for college calculus with comprehensive pre-calculus review",
    features: ["Function analysis", "Limits & continuity", "Derivatives intro", "Integration basics"],
    duration: "3-6 months",
    price: "$70/hour",
  },
  {
    name: "Math Anxiety Support",
    description: "Specialized help for students struggling with math confidence",
    features: ["Confidence building", "Stress management", "Visual learning", "Step-by-step guidance"],
    duration: "Ongoing",
    price: "$50/hour",
  },
  {
    name: "Summer Math Bridge",
    description: "Prevent summer learning loss and prepare for the next grade",
    features: ["Grade-level review", "Next year preview", "Practice problems", "Progress tracking"],
    duration: "8 weeks",
    price: "$45/hour",
  },
];

const teachingMethods = [
  {
    method: "Visual Learning",
    description: "Use diagrams, graphs, and visual aids to understand concepts",
    benefits: ["Better retention", "Easier understanding", "Reduced anxiety", "Improved memory"],
  },
  {
    method: "Step-by-Step Approach",
    description: "Break down complex problems into manageable steps",
    benefits: ["Clear progression", "Reduced confusion", "Builds confidence", "Systematic thinking"],
  },
  {
    method: "Real-World Applications",
    description: "Connect mathematical concepts to everyday situations",
    benefits: ["Practical understanding", "Increased motivation", "Better retention", "Relevance"],
  },
  {
    method: "Practice & Repetition",
    description: "Reinforce learning through targeted practice and review",
    benefits: ["Mastery of concepts", "Improved speed", "Better accuracy", "Long-term retention"],
  },
];

const successMetrics = [
  { metric: "Average Grade Improvement", value: "2+ letter grades", icon: TrendingUp },
  { metric: "Confidence Boost", value: "95%", icon: Award },
  { metric: "Students Helped", value: "300+", icon: Users },
  { metric: "Years Experience", value: "12+", icon: Clock },
];

export default function MathPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Math Tutoring Services
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Expert math instruction from elementary through advanced levels, designed to build confidence and mastery in mathematics.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Math Success</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Proven results in math education and student achievement.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={metric.metric} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.metric}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Math Levels Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Math Levels We Cover</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Comprehensive math instruction for all levels and abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card key={level.level} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${level.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-blue-900">{level.level}</CardTitle>
                        <div className="text-xs text-blue-600 font-medium">{level.grade}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{level.price}</div>
                  </div>
                  <CardDescription className="text-gray-600">{level.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-blue-900 mb-3">Topics Covered:</h4>
                  <div className="space-y-1 mb-4">
                    {level.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        <span className="text-xs text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Teaching Approach</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Proven methods that make math accessible and enjoyable for all students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachingMethods.map((method, index) => (
            <Card key={method.method} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">{method.method}</CardTitle>
                <CardDescription className="text-gray-600">{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-blue-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Specialized Math Programs</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Targeted programs for specific math needs and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializedPrograms.map((program, index) => (
            <Card key={program.name} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl text-blue-900">{program.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{program.price}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-blue-900 mb-3">Program Features:</h4>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero text-white rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative z-10 text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Master Math?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Join hundreds of students who have transformed their math skills and built lasting confidence in mathematics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold transition-all duration-300">
              <Link href="/resources/practice">Practice Materials</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 