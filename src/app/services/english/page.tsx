import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, PenTool, Target, TrendingUp, Award, Users, Clock, Brain } from "lucide-react";

const englishServices = [
  {
    service: "Reading Comprehension",
    icon: BookOpen,
    description: "Develop critical reading skills and analytical thinking",
    topics: ["Main idea identification", "Inference skills", "Vocabulary building", "Text analysis", "Speed reading"],
    price: "$45/hour",
    color: "from-blue-500 to-blue-600",
    levels: ["Elementary", "Middle School", "High School", "College Prep"],
  },
  {
    service: "Essay Writing",
    icon: PenTool,
    description: "Master the art of persuasive and analytical writing",
    topics: ["Thesis development", "Argument construction", "Evidence integration", "Organization", "Revision techniques"],
    price: "$50/hour",
    color: "from-indigo-500 to-indigo-600",
    levels: ["High School", "College Prep", "College Level", "Advanced"],
  },
  {
    service: "Grammar & Mechanics",
    icon: Target,
    description: "Build strong foundational language skills",
    topics: ["Parts of speech", "Sentence structure", "Punctuation", "Common errors", "Style improvement"],
    price: "$40/hour",
    color: "from-blue-600 to-blue-700",
    levels: ["All Levels", "ESL Support", "Test Prep", "Professional"],
  },
  {
    service: "Literature Analysis",
    icon: Brain,
    description: "Deep dive into literary works and critical thinking",
    topics: ["Theme analysis", "Character development", "Symbolism", "Literary devices", "Contextual understanding"],
    price: "$50/hour",
    color: "from-indigo-600 to-indigo-700",
    levels: ["High School", "AP Literature", "College Level", "Advanced"],
  },
  {
    service: "Creative Writing",
    icon: TrendingUp,
    description: "Unlock creativity and develop unique writing voice",
    topics: ["Story development", "Character creation", "Dialogue writing", "Descriptive language", "Genre exploration"],
    price: "$45/hour",
    color: "from-blue-500 to-blue-600",
    levels: ["Middle School", "High School", "College", "Adult"],
  },
  {
    service: "College Application Essays",
    icon: Award,
    description: "Craft compelling personal statements and supplemental essays",
    topics: ["Personal statement", "Supplemental essays", "Activity descriptions", "Interview prep", "Application strategy"],
    price: "$60/hour",
    color: "from-indigo-500 to-indigo-600",
    levels: ["High School Seniors", "Transfer Students", "Graduate School"],
  },
];

const specializedPrograms = [
  {
    name: "SAT/ACT Reading & Writing",
    description: "Targeted preparation for standardized test English sections",
    features: ["Test-specific strategies", "Practice passages", "Time management", "Score improvement"],
    duration: "3-6 months",
    price: "$55/hour",
  },
  {
    name: "AP English Literature",
    description: "Advanced placement preparation for college-level literature",
    features: ["Text analysis", "Essay writing", "Multiple choice strategies", "AP exam prep"],
    duration: "Full academic year",
    price: "$60/hour",
  },
  {
    name: "ESL Support",
    description: "English language support for non-native speakers",
    features: ["Grammar fundamentals", "Pronunciation", "Conversation practice", "Academic writing"],
    duration: "Ongoing",
    price: "$45/hour",
  },
  {
    name: "Writing Portfolio Development",
    description: "Build a strong writing portfolio for college applications",
    features: ["Diverse writing samples", "Revision guidance", "Portfolio organization", "Submission prep"],
    duration: "6-12 months",
    price: "$50/hour",
  },
];

const writingProcess = [
  {
    stage: "Prewriting",
    description: "Brainstorming, research, and planning your writing",
    activities: ["Topic selection", "Research methods", "Outline creation", "Thesis development"],
  },
  {
    stage: "Drafting",
    description: "Creating the initial version of your piece",
    activities: ["Free writing", "Structure building", "Evidence integration", "Voice development"],
  },
  {
    stage: "Revision",
    description: "Improving content, organization, and clarity",
    activities: ["Content review", "Structure analysis", "Clarity improvement", "Coherence check"],
  },
  {
    stage: "Editing",
    description: "Polishing grammar, mechanics, and style",
    activities: ["Grammar check", "Spelling review", "Style refinement", "Final polish"],
  },
];

const successMetrics = [
  { metric: "Average Score Improvement", value: "150+ points", icon: TrendingUp },
  { metric: "College Acceptance Rate", value: "98%", icon: Award },
  { metric: "Students Helped", value: "400+", icon: Users },
  { metric: "Years Experience", value: "10+", icon: Clock },
];

export default function EnglishPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Reading & Writing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Expert instruction in reading comprehension, writing skills, and literary analysis to help students excel in English and beyond.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our English Success</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Proven results in reading, writing, and literary analysis.
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

      {/* English Services Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our English Services</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Comprehensive reading and writing instruction for all levels and abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {englishServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.service} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-blue-900">{service.service}</CardTitle>
                        <div className="text-xs text-blue-600 font-medium">{service.levels.join(", ")}</div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{service.price}</div>
                  </div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-blue-900 mb-3">Topics Covered:</h4>
                  <div className="space-y-1 mb-4">
                    {service.topics.map((topic, topicIndex) => (
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

      {/* Writing Process */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Writing Process</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            A systematic approach to developing strong writing skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {writingProcess.map((stage, index) => (
            <Card key={stage.stage} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <CardTitle className="text-lg text-blue-900">{stage.stage}</CardTitle>
                <CardDescription className="text-gray-600">{stage.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2">
                  {stage.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-xs text-gray-700">{activity}</span>
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Specialized Programs</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Targeted programs for specific English and writing needs.
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Master Reading & Writing?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Join hundreds of students who have developed strong literacy skills and achieved academic success through our English programs.
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