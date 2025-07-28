import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, TrendingUp, Users, Award, Clock, BookOpen, Target, Brain, Calendar, FileText, Download, Calculator, PenTool, GraduationCap, MapPin, DollarSign, Send, MessageSquare, Heart, Zap, Rocket, Trophy, Lightbulb, Bookmark, Play, Pause, FastForward } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Custom study plans tailored to your learning style and goals",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Experienced educators who make learning fun and engaging",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of significant score improvements and academic success",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Award,
    title: "Flexible Scheduling",
    description: "Sessions that fit your busy schedule and learning pace",
    color: "from-indigo-600 to-indigo-700",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    grade: "High School Senior",
    content: "CD Academy helped me boost my SAT score by 200 points! The tutors are amazing.",
    rating: 5,
    improvement: "+200 SAT points",
    avatar: "SM",
  },
  {
    name: "Michael T.",
    grade: "College Freshman",
    content: "My daughter's confidence in math has improved tremendously since starting with CD Academy.",
    rating: 5,
    improvement: "A+ in Calculus",
    avatar: "MT",
  },
  {
    name: "Emma L.",
    grade: "High School Junior",
    content: "The writing program transformed my essays. I got into my dream college!",
    rating: 5,
    improvement: "Accepted to UCLA",
    avatar: "EL",
  },
];

const quickStats = [
  { number: "500+", label: "Students Helped", icon: Users, color: "from-blue-500 to-blue-600" },
  { number: "95%", label: "Success Rate", icon: Trophy, color: "from-indigo-500 to-indigo-600" },
  { number: "15+", label: "Years Experience", icon: Clock, color: "from-blue-600 to-blue-700" },
  { number: "200+", label: "Score Improvement", icon: TrendingUp, color: "from-indigo-600 to-indigo-700" },
];

const studyTips = [
  {
    title: "Active Learning",
    description: "Engage with material through practice and discussion",
    icon: Brain,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Regular Practice",
    description: "Consistent study sessions build lasting knowledge",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Goal Setting",
    description: "Clear objectives keep you motivated and focused",
    icon: Target,
    color: "from-purple-500 to-purple-600",
  },
];

export default function HomePage() {
  return (
    <div className="py-12">
      {/* Hero Section with Enhanced Animation */}
      <section className="text-center mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-300/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-indigo-300/20 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in-left">
            <Zap className="h-4 w-4" />
            Transform Your Academic Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
            Unlock Your
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Academic Potential
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-[800px] mx-auto leading-relaxed mb-8">
            Expert tutoring that makes learning exciting and achievable. 
            <span className="font-semibold text-blue-600"> Join hundreds of successful students!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Rocket className="mr-2 h-5 w-5" />
              <Link href="/contact">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Play className="mr-2 h-5 w-5" />
              <Link href="/services">Explore Programs</Link>
            </Button>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="h-4 w-4" />
            Why Students Love CD Academy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Why Choose CD Academy?</h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            We make learning exciting, engaging, and effective for every student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-3`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Interactive Study Tips Section */}
      <section className="mb-20 py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bookmark className="h-4 w-4" />
            Pro Study Tips
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Study Smarter, Not Harder</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Learn the strategies that top students use to excel academically.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studyTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={tip.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${tip.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-blue-900">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{tip.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Student Success Stories
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Real results from real students who transformed their academic journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-blue-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{testimonial.grade}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  {testimonial.improvement}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 gradient-hero text-white rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Enhanced animated elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="relative z-10 text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            Join the CD Academy Family
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform
            <span className="block">Your Future?</span>
          </h2>
          <p className="text-xl max-w-[600px] mx-auto text-blue-100 leading-relaxed">
            Take the first step towards academic excellence. Our expert tutors are ready to guide you to success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Send className="mr-2 h-5 w-5" />
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <MessageSquare className="mr-2 h-5 w-5" />
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Free initial assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Flexible scheduling</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
