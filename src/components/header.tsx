"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  PenTool, 
  Target, 
  Users, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Zap,
  Rocket
} from "lucide-react";

const services = [
  {
    title: "High School Prep",
    description: "Comprehensive support for all high school subjects",
    href: "/services/high-school",
    icon: GraduationCap,
    features: ["Core subjects", "Study skills", "Year-specific programs", "College prep"],
  },
  {
    title: "College Entrance Exams",
    description: "Expert preparation for SAT, ACT, and PSAT",
    href: "/services/college",
    icon: Target,
    features: ["SAT prep", "ACT prep", "PSAT prep", "Score improvement"],
  },
  {
    title: "Math Tutoring",
    description: "From elementary to advanced mathematics",
    href: "/services/math",
    icon: Calculator,
    features: ["All levels", "Visual learning", "Problem solving", "Competition prep"],
  },
  {
    title: "Reading & Writing",
    description: "Develop strong literacy and composition skills",
    href: "/services/english",
    icon: PenTool,
    features: ["Essay writing", "Literature analysis", "Grammar", "College essays"],
  },
];

const resources = [
  {
    title: "Study Tips",
    description: "Proven strategies for academic success",
    href: "/resources/study-tips",
    icon: BookOpen,
  },
  {
    title: "Practice Materials",
    description: "Downloadable study guides and worksheets",
    href: "/resources/practice",
    icon: Target,
  },
  {
    title: "Test Information",
    description: "Everything you need to know about exams",
    href: "/resources/tests",
    icon: Calendar,
  },
  {
    title: "College Planning",
    description: "Guidance for your college journey",
    href: "/resources/college-planning",
    icon: GraduationCap,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">CD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
              CD Academy
            </span>
            <span className="text-xs text-gray-500 font-medium">Transform Your Future</span>
          </div>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200">
                <BookOpen className="mr-2 h-4 w-4" />
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow-xl border border-blue-100">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      Academic Programs
                    </h3>
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="group block p-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {service.features.map((feature, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      Free Resources
                    </h3>
                    {resources.map((resource) => {
                      const Icon = resource.icon;
                      return (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className="group block p-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Rocket className="h-4 w-4 text-blue-600" />
                        <span className="font-semibold text-blue-900">Quick Start Guide</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        New to CD Academy? Get started with our free assessment and personalized plan.
                      </p>
                      <Link href="/contact">
                        <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                          Get Free Assessment
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200">
                  <Users className="mr-2 h-4 w-4" />
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="text-blue-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-200">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="sm" className="text-blue-900 hover:text-blue-700 hover:bg-blue-50">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>Mon-Fri 8AM-8PM</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>(555) 123-4567</span>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Rocket className="mr-2 h-4 w-4" />
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 