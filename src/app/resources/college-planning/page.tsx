import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Calendar, FileText, GraduationCap, MapPin, DollarSign, Users, CheckCircle } from "lucide-react";

const planningSteps = [
  {
    step: 1,
    title: "Research Colleges",
    description: "Identify schools that match your academic interests, career goals, and personal preferences.",
    icon: Search,
    tasks: [
      "Create a list of potential colleges",
      "Research academic programs and majors",
      "Consider location, size, and campus culture",
      "Review admission requirements and deadlines"
    ]
  },
  {
    step: 2,
    title: "Prepare for Standardized Tests",
    description: "Take the SAT, ACT, or other required tests and aim for your target scores.",
    icon: FileText,
    tasks: [
      "Register for SAT/ACT exams",
      "Create a study schedule",
      "Take practice tests regularly",
      "Consider retaking if needed"
    ]
  },
  {
    step: 3,
    title: "Build Your Application",
    description: "Develop a strong application including essays, activities, and recommendations.",
    icon: GraduationCap,
    tasks: [
      "Write compelling personal essays",
      "Participate in meaningful extracurricular activities",
      "Secure strong letters of recommendation",
      "Maintain strong academic performance"
    ]
  },
  {
    step: 4,
    title: "Apply to Colleges",
    description: "Submit applications through Common App, Coalition, or individual school portals.",
    icon: Calendar,
    tasks: [
      "Complete the Common Application",
      "Write supplemental essays",
      "Submit all required materials",
      "Track application status"
    ]
  }
];

const collegeResources = [
  {
    category: "Application Platforms",
    resources: [
      {
        name: "Common Application",
        description: "Apply to multiple colleges with one application.",
        url: "https://www.commonapp.org",
        icon: FileText,
      },
      {
        name: "Coalition Application",
        description: "Another platform for college applications.",
        url: "https://www.coalitionforcollegeaccess.org",
        icon: FileText,
      },
      {
        name: "College Board",
        description: "SAT registration and college search tools.",
        url: "https://www.collegeboard.org",
        icon: Search,
      },
    ]
  },
  {
    category: "Financial Aid",
    resources: [
      {
        name: "FAFSA",
        description: "Free Application for Federal Student Aid.",
        url: "https://fafsa.gov",
        icon: DollarSign,
      },
      {
        name: "CSS Profile",
        description: "College Scholarship Service Profile for institutional aid.",
        url: "https://cssprofile.collegeboard.org",
        icon: DollarSign,
      },
      {
        name: "Scholarship Search",
        description: "Find scholarships and grants for college.",
        url: "https://www.fastweb.com",
        icon: DollarSign,
      },
    ]
  },
  {
    category: "College Research",
    resources: [
      {
        name: "U.S. News College Rankings",
        description: "Comprehensive college rankings and information.",
        url: "https://www.usnews.com/best-colleges",
        icon: Search,
      },
      {
        name: "College Navigator",
        description: "Official college search tool from the Department of Education.",
        url: "https://nces.ed.gov/collegenavigator",
        icon: Search,
      },
      {
        name: "Niche",
        description: "Student reviews and college information.",
        url: "https://www.niche.com",
        icon: Users,
      },
    ]
  }
];

const timeline = [
  {
    period: "Junior Year (Fall)",
    tasks: [
      "Take PSAT/NMSQT",
      "Research colleges and majors",
      "Start preparing for SAT/ACT",
      "Begin building extracurricular activities"
    ]
  },
  {
    period: "Junior Year (Spring)",
    tasks: [
      "Take SAT/ACT for the first time",
      "Visit colleges of interest",
      "Start thinking about essay topics",
      "Ask teachers for letters of recommendation"
    ]
  },
  {
    period: "Senior Year (Summer)",
    tasks: [
      "Finalize college list",
      "Write personal statement",
      "Complete Common App activities section",
      "Request letters of recommendation"
    ]
  },
  {
    period: "Senior Year (Fall)",
    tasks: [
      "Submit early decision/early action applications",
      "Complete remaining applications",
      "Submit financial aid applications",
      "Take additional tests if needed"
    ]
  }
];

export default function CollegePlanningPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">College Planning Resources</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive guidance for college research, applications, and financial aid planning.
        </p>
      </div>

      {/* Planning Steps Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">College Application Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planningSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle>{step.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Tasks:</h4>
                  <ul className="space-y-2">
                    {step.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Application Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((period) => (
            <Card key={period.period}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {period.period}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {period.tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Helpful Resources</h2>
        <div className="space-y-8">
          {collegeResources.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.resources.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={resource.name}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-base">{resource.name}</CardTitle>
                        </div>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Our college planning experts can help you navigate the application process and find the perfect college fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resources/practice">Practice Materials</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 