import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, Calculator, BookOpen, PenTool, Target, Clock, Award, Users } from "lucide-react";

const coreSubjects = [
  {
    subject: "Mathematics",
    icon: Calculator,
    description: "Comprehensive math support from Algebra to Calculus",
    topics: ["Algebra I & II", "Geometry", "Trigonometry", "Pre-Calculus", "Calculus"],
    price: "$50/hour",
    color: "from-blue-500 to-blue-600",
  },
  {
    subject: "English & Literature",
    icon: BookOpen,
    description: "Develop strong reading, writing, and analytical skills",
    topics: ["Essay Writing", "Literature Analysis", "Grammar & Vocabulary", "Reading Comprehension", "Creative Writing"],
    price: "$45/hour",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    subject: "Science",
    icon: Award,
    description: "Master scientific concepts and laboratory skills",
    topics: ["Biology", "Chemistry", "Physics", "Environmental Science", "Lab Reports"],
    price: "$50/hour",
    color: "from-blue-600 to-blue-700",
  },
  {
    subject: "History & Social Studies",
    icon: PenTool,
    description: "Understand historical events and develop critical thinking",
    topics: ["World History", "U.S. History", "Government", "Economics", "Research Papers"],
    price: "$45/hour",
    color: "from-indigo-600 to-indigo-700",
  },
];

const studySkills = [
  {
    title: "Time Management",
    description: "Learn to balance academics, activities, and personal time effectively",
    skills: ["Creating study schedules", "Prioritizing assignments", "Setting realistic goals", "Avoiding procrastination"],
  },
  {
    title: "Note-Taking Strategies",
    description: "Master effective note-taking methods for better retention",
    skills: ["Cornell Method", "Mind Mapping", "Digital note-taking", "Review techniques"],
  },
  {
    title: "Test Preparation",
    description: "Develop strategies for various types of exams and assessments",
    skills: ["Multiple choice strategies", "Essay exam techniques", "Stress management", "Review methods"],
  },
  {
    title: "Research & Writing",
    description: "Build essential research and academic writing skills",
    skills: ["Source evaluation", "Citation methods", "Thesis development", "Argument construction"],
  },
];

const programs = [
  {
    name: "Freshman Success Program",
    description: "Help 9th graders transition smoothly to high school",
    features: ["Study skills foundation", "Core subject support", "Organization skills", "Goal setting"],
    duration: "Full academic year",
    price: "$1,200/semester",
  },
  {
    name: "Sophomore Enhancement",
    description: "Build on freshman year success and prepare for advanced courses",
    features: ["Advanced subject prep", "Test-taking strategies", "College planning intro", "Leadership development"],
    duration: "Full academic year",
    price: "$1,400/semester",
  },
  {
    name: "Junior Year Excellence",
    description: "Critical year preparation for college applications and standardized tests",
    features: ["SAT/ACT prep", "College research", "Advanced coursework", "Application planning"],
    duration: "Full academic year",
    price: "$1,600/semester",
  },
  {
    name: "Senior Year Success",
    description: "Final preparation for college applications and graduation",
    features: ["Application assistance", "Essay writing", "Financial aid guidance", "College transition prep"],
    duration: "Full academic year",
    price: "$1,800/semester",
  },
];

export default function HighSchoolPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            High School Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Comprehensive academic support to help high school students excel in their studies and prepare for college success.
          </p>
        </div>
      </section>

      {/* Core Subjects Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Core Subject Support</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Expert tutoring in all major high school subjects with personalized learning plans.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreSubjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <Card key={subject.subject} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-blue-900">{subject.subject}</CardTitle>
                        <CardDescription className="text-gray-600">{subject.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{subject.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-blue-900 mb-3">Topics Covered:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Study Skills Section */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Study Skills Development</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Build essential academic skills that will serve you throughout high school and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studySkills.map((skill, index) => (
            <Card key={skill.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">{skill.title}</CardTitle>
                <CardDescription className="text-gray-600">{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.skills.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Year-Specific Programs */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Year-Specific Programs</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Tailored programs designed for each year of high school with specific goals and outcomes.
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Excel in High School?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Start your journey to academic success with personalized high school preparation programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold transition-all duration-300">
              <Link href="/services">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 