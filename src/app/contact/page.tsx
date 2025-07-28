"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users,
  Star,
  CheckCircle,
  Heart,
  BookOpen,
  Target,
  Calculator,
  PenTool
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "(555) 123-4567",
    color: "from-blue-500 to-blue-600",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    value: "info@cdacademy.com",
    color: "from-indigo-500 to-indigo-600",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come see our learning center",
    value: "123 Education St, Learning City, LC 12345",
    color: "from-green-500 to-green-600",
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "We&apos;re here when you need us",
    value: "Mon-Fri: 8AM-8PM, Sat: 9AM-5PM",
    color: "from-purple-500 to-purple-600",
    action: "Schedule Session",
  },
];

const quickActions = [
  {
    title: "Free Assessment",
    description: "Get a personalized learning plan",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    href: "/contact",
  },
  {
    title: "Trial Session",
    description: "Experience our teaching style",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
    href: "/contact",
  },
  {
    title: "Study Resources",
    description: "Access free practice materials",
    icon: BookOpen,
    color: "from-green-500 to-green-600",
    href: "/resources",
  },
  {
    title: "Success Stories",
    description: "See how we&apos;ve helped others",
    icon: Star,
    color: "from-purple-500 to-purple-600",
    href: "/about",
  },
];

const subjects = [
  { name: "Math Tutoring", icon: Calculator, color: "from-blue-500 to-blue-600" },
  { name: "Reading & Writing", icon: PenTool, color: "from-indigo-500 to-indigo-600" },
  { name: "SAT/ACT Prep", icon: Target, color: "from-green-500 to-green-600" },
  { name: "High School Support", icon: BookOpen, color: "from-purple-500 to-purple-600" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    studentGrade: "",
    interests: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for your message! We&apos;ll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          preferredContact: "email",
          studentGrade: "",
          interests: [],
        });
      } else {
        toast.error("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            Let&apos;s Start Your Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Ready to transform your academic future? We&apos;re here to help you succeed. 
            <span className="font-semibold text-blue-600"> Let&apos;s start the conversation!</span>
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Quick Actions</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Choose the best way to get started with CD Academy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-blue-900">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">{action.description}</CardDescription>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href={action.href}>{action.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="order-2 lg:order-1">
          <Card className="gradient-card border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Send className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Tell us about your academic goals and we&apos;ll create a personalized plan for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Name *</label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-900 mb-2 block">Student Grade</label>
                    <select
                      value={formData.studentGrade}
                      onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Grade</option>
                      <option value="elementary">Elementary (K-5)</option>
                      <option value="middle">Middle School (6-8)</option>
                      <option value="high">High School (9-12)</option>
                      <option value="college">College</option>
                      <option value="adult">Adult Learner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Areas of Interest</label>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subject) => {
                      const Icon = subject.icon;
                      const isSelected = formData.interests.includes(subject.name);
                      return (
                        <button
                          key={subject.name}
                          type="button"
                          onClick={() => handleInterestToggle(subject.name)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-2 ${
                            isSelected
                              ? `border-blue-500 bg-blue-50 text-blue-700`
                              : `border-gray-200 hover:border-blue-300 text-gray-700`
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center`}>
                            <Icon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium">{subject.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Message *</label>
                  <Textarea
                    placeholder="Tell us about your academic goals, challenges, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="text-blue-600"
                      />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="text-blue-600"
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />
                  We&apos;ll respond within 24 hours
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="order-1 lg:order-2">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="gradient-card border-0 animate-fade-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 mb-2">{info.description}</p>
                        <p className="text-blue-900 font-medium">{info.value}</p>
                        <Button variant="outline" size="sm" className="mt-3 border-blue-200 text-blue-700 hover:bg-blue-50">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Map Placeholder */}
          <Card className="gradient-card border-0 mt-8">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm opacity-75">123 Education St, Learning City, LC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="mt-20 py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            Common Questions
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Quick answers to help you get started with CD Academy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">How do I get started?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Simply fill out our contact form or call us to schedule a free initial assessment. We&apos;ll create a personalized learning plan for you.
              </p>
            </CardContent>
          </Card>
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">What are your rates?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our rates vary by program and tutor experience, typically ranging from $40-70 per hour. We offer package discounts and flexible payment options.
              </p>
            </CardContent>
          </Card>
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Do you offer online tutoring?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Yes! We offer both in-person and online tutoring sessions. Our online platform provides the same quality experience as in-person sessions.
              </p>
            </CardContent>
          </Card>
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Can I try before committing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Absolutely! We offer a free trial session so you can experience our teaching style and see if we&apos;re the right fit for your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 