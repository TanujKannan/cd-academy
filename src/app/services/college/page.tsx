import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Calculator, BookOpen, PenTool, Clock, Award, TrendingUp, Users } from "lucide-react";

const testPrep = [
  {
    test: "SAT Preparation",
    icon: Target,
    description: "Comprehensive SAT prep with proven strategies and practice materials",
    sections: [
      { name: "Math", time: "80 minutes", topics: ["Algebra", "Geometry", "Advanced Math"], icon: Calculator },
      { name: "Reading", time: "65 minutes", topics: ["Literature", "History", "Science"], icon: BookOpen },
      { name: "Writing & Language", time: "35 minutes", topics: ["Grammar", "Usage", "Rhetoric"], icon: PenTool },
    ],
    price: "$60/hour",
    color: "from-blue-500 to-blue-600",
    features: ["Full-length practice tests", "Section-specific strategies", "Score improvement tracking", "College application guidance"],
  },
  {
    test: "ACT Preparation",
    icon: Award,
    description: "Expert ACT tutoring covering all four sections with science focus",
    sections: [
      { name: "Math", time: "60 minutes", topics: ["Pre-Algebra", "Elementary Algebra", "Geometry"], icon: Calculator },
      { name: "English", time: "45 minutes", topics: ["Usage/Mechanics", "Rhetorical Skills"], icon: PenTool },
      { name: "Reading", time: "35 minutes", topics: ["Prose Fiction", "Social Studies", "Humanities"], icon: BookOpen },
      { name: "Science", time: "35 minutes", topics: ["Data Representation", "Research Summaries", "Conflicting Viewpoints"], icon: Award },
    ],
    price: "$60/hour",
    color: "from-indigo-500 to-indigo-600",
    features: ["Science section expertise", "Data interpretation skills", "Time management strategies", "Score optimization"],
  },
  {
    test: "PSAT/NMSQT",
    icon: TrendingUp,
    description: "Prepare for the PSAT and qualify for National Merit Scholarships",
    sections: [
      { name: "Math", time: "70 minutes", topics: ["Algebra", "Geometry", "Problem Solving"], icon: Calculator },
      { name: "Reading", time: "60 minutes", topics: ["Literature", "History", "Science"], icon: BookOpen },
      { name: "Writing & Language", time: "35 minutes", topics: ["Grammar", "Usage", "Style"], icon: PenTool },
    ],
    price: "$50/hour",
    color: "from-blue-600 to-blue-700",
    features: ["National Merit qualification", "SAT preparation foundation", "Scholarship opportunities", "Early college planning"],
  },
];

const programs = [
  {
    name: "Individual Test Prep",
    description: "One-on-one tutoring tailored to your specific needs and goals",
    features: ["Personalized study plan", "Flexible scheduling", "Progress monitoring", "Unlimited practice materials"],
    duration: "3-6 months",
    price: "$60/hour",
  },
  {
    name: "Small Group Classes",
    description: "Learn with peers in an interactive, collaborative environment",
    features: ["Group of 4-6 students", "Structured curriculum", "Peer learning", "Cost-effective"],
    duration: "12 weeks",
    price: "$40/hour",
  },
  {
    name: "Intensive Boot Camp",
    description: "Accelerated preparation for students with limited time",
    features: ["Daily sessions", "Comprehensive review", "Mock exams", "Quick results"],
    duration: "2-4 weeks",
    price: "$80/hour",
  },
  {
    name: "College Application Package",
    description: "Complete support from test prep to application submission",
    features: ["Test preparation", "Essay writing", "Application guidance", "Interview prep"],
    duration: "6-12 months",
    price: "$2,500 total",
  },
];

const successMetrics = [
  { metric: "Average Score Increase", value: "200+ points", icon: TrendingUp },
  { metric: "Success Rate", value: "95%", icon: Award },
  { metric: "Students Helped", value: "500+", icon: Users },
  { metric: "Years Experience", value: "15+", icon: Clock },
];

export default function CollegePage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            College Entrance Exam Prep
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Expert preparation for SAT, ACT, and PSAT with proven strategies to maximize your scores and college admission chances.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Track Record</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Proven results that speak for themselves.
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

      {/* Test Preparation Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Test Preparation Programs</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Comprehensive preparation for all major college entrance exams.
          </p>
        </div>
        <div className="space-y-8">
          {testPrep.map((test, index) => {
            const Icon = test.icon;
            return (
              <Card key={test.test} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${test.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-blue-900">{test.test}</CardTitle>
                        <CardDescription className="text-gray-600 text-base">{test.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">{test.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4">Test Sections:</h4>
                      <div className="space-y-4">
                        {test.sections.map((section, sectionIndex) => {
                          const SectionIcon = section.icon;
                          return (
                            <div key={sectionIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <SectionIcon className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-blue-900">{section.name}</div>
                                <div className="text-sm text-gray-600">{section.time}</div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {section.topics.join(", ")}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4">Program Features:</h4>
                      <ul className="space-y-2">
                        {test.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Program Options */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Program Options</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Choose the program that best fits your schedule and learning style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Ace Your College Exams?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Join hundreds of students who have achieved their target scores and gained admission to their dream colleges.
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