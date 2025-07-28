import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Target, Award, Heart, GraduationCap, BookOpen, Star, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Lead Tutor",
    bio: "PhD in Education with 15+ years of experience in academic coaching and test preparation.",
    expertise: ["SAT/ACT Prep", "College Counseling", "Math Education"],
    avatar: "SJ",
    experience: "15+ years",
  },
  {
    name: "Michael Chen",
    role: "Senior Math Tutor",
    bio: "Master's in Mathematics with a passion for making complex concepts accessible to all students.",
    expertise: ["Advanced Mathematics", "Calculus", "Statistics"],
    avatar: "MC",
    experience: "12+ years",
  },
  {
    name: "Emily Rodriguez",
    role: "English & Literature Specialist",
    bio: "Former high school English teacher with expertise in essay writing and literary analysis.",
    expertise: ["Essay Writing", "Literature Analysis", "Reading Comprehension"],
    avatar: "ER",
    experience: "10+ years",
  },
  {
    name: "David Thompson",
    role: "Science & Test Prep Expert",
    bio: "Specializes in science education and standardized test preparation with proven results.",
    expertise: ["Biology", "Chemistry", "ACT Science"],
    avatar: "DT",
    experience: "8+ years",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our teaching methods to student outcomes.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We care deeply about each student's success and provide personalized support.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with students, parents, and schools to ensure academic success.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously improve our methods and stay current with educational best practices.",
    color: "from-indigo-600 to-indigo-700",
  },
];

const achievements = [
  { number: "500+", label: "Students Helped", icon: Users },
  { number: "95%", label: "Success Rate", icon: Target },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "4.9", label: "Average Rating", icon: Star },
];

const mission = {
  title: "Our Mission",
  description: "To empower students with the knowledge, skills, and confidence they need to achieve their academic goals and unlock their full potential.",
  goals: [
    "Provide personalized learning experiences tailored to each student's needs",
    "Build strong foundational skills that support lifelong learning",
    "Foster confidence and self-efficacy in academic pursuits",
    "Prepare students for success in higher education and beyond",
  ],
};

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            About CD Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Dedicated to transforming academic potential into exceptional achievement through personalized education and expert guidance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900">{mission.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {mission.description}
            </p>
            <ul className="space-y-3">
              {mission.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="gradient-card border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe every student has unique potential. Our personalized approach combines proven teaching methods with innovative technology to create the most effective learning experience for each individual.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            The principles that guide everything we do at CD Academy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20 py-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Numbers that reflect our commitment to student success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.label} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Experienced educators dedicated to your academic success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{member.avatar}</span>
                </div>
                <CardTitle className="text-lg text-blue-900">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                <div className="text-xs text-gray-500">{member.experience} experience</div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-500">
                      • {skill}
                    </div>
                  ))}
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Work With Us?</h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100">
            Join hundreds of students who have achieved their academic goals with CD Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold transition-all duration-300">
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 