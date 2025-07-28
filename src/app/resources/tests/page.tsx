import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Calculator, BookOpen, PenTool, Calendar, CheckCircle } from "lucide-react";

const testInfo = [
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "A standardized test widely used for college admissions in the United States.",
    sections: [
      { name: "Math", time: "80 minutes", questions: "58 questions", icon: Calculator },
      { name: "Reading", time: "65 minutes", questions: "52 questions", icon: BookOpen },
      { name: "Writing & Language", time: "35 minutes", questions: "44 questions", icon: PenTool },
    ],
    scoring: "400-1600 scale",
    duration: "3 hours",
    registration: "Online through College Board",
    cost: "$60",
    dates: "Multiple dates throughout the year",
    features: [
      "Digital format",
      "Adaptive testing",
      "Calculator allowed on math section",
      "No penalty for wrong answers"
    ]
  },
  {
    name: "ACT",
    fullName: "American College Testing",
    description: "A standardized test for high school achievement and college admissions.",
    sections: [
      { name: "Math", time: "60 minutes", questions: "60 questions", icon: Calculator },
      { name: "English", time: "45 minutes", questions: "75 questions", icon: PenTool },
      { name: "Reading", time: "35 minutes", questions: "40 questions", icon: BookOpen },
      { name: "Science", time: "35 minutes", questions: "40 questions", icon: BookOpen },
    ],
    scoring: "1-36 scale",
    duration: "2 hours 55 minutes",
    registration: "Online through ACT",
    cost: "$68",
    dates: "Multiple dates throughout the year",
    features: [
      "Paper-based format",
      "Science section included",
      "Optional writing test",
      "Calculator allowed on math section"
    ]
  },
  {
    name: "PSAT",
    fullName: "Preliminary SAT",
    description: "A practice test for the SAT that also serves as the National Merit Scholarship Qualifying Test.",
    sections: [
      { name: "Math", time: "70 minutes", questions: "48 questions", icon: Calculator },
      { name: "Reading", time: "60 minutes", questions: "47 questions", icon: BookOpen },
      { name: "Writing & Language", time: "35 minutes", questions: "44 questions", icon: PenTool },
    ],
    scoring: "320-1520 scale",
    duration: "2 hours 45 minutes",
    registration: "Through your high school",
    cost: "$18",
    dates: "October (annually)",
    features: [
      "Practice for SAT",
      "National Merit Scholarship qualification",
      "Digital format",
      "No penalty for wrong answers"
    ]
  }
];

const testDates = [
  {
    test: "SAT",
    upcomingDates: [
      { date: "August 24, 2024", registration: "July 26, 2024" },
      { date: "October 5, 2024", registration: "September 6, 2024" },
      { date: "November 2, 2024", registration: "October 4, 2024" },
      { date: "December 7, 2024", registration: "November 8, 2024" },
    ]
  },
  {
    test: "ACT",
    upcomingDates: [
      { date: "September 14, 2024", registration: "August 9, 2024" },
      { date: "October 26, 2024", registration: "September 20, 2024" },
      { date: "December 14, 2024", registration: "November 8, 2024" },
      { date: "February 8, 2025", registration: "January 3, 2025" },
    ]
  }
];

export default function TestsPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Test Information</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Comprehensive information about standardized tests, registration deadlines, and test dates.
        </p>
      </div>

      {/* Test Information Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Test Overview</h2>
        <div className="space-y-8">
          {testInfo.map((test) => (
            <Card key={test.name}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{test.name}</span>
                  </div>
                  <div>
                    <CardTitle>{test.fullName}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Sections</h4>
                    <ul className="space-y-2">
                      {test.sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <li key={section.name} className="flex items-center gap-2 text-sm">
                            <Icon className="h-4 w-4 text-primary" />
                            <span>{section.name}</span>
                            <span className="text-muted-foreground">({section.time})</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scoring</h4>
                    <p className="text-sm">{test.scoring}</p>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-sm">{test.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Registration</h4>
                    <p className="text-sm">{test.registration}</p>
                    <h4 className="font-semibold">Cost</h4>
                    <p className="text-sm">{test.cost}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features</h4>
                    <ul className="space-y-1">
                      {test.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Test Dates Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Upcoming Test Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testDates.map((test) => (
            <Card key={test.test}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {test.test} Test Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {test.upcomingDates.map((date, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Test Date: {date.date}</p>
                        <p className="text-sm text-muted-foreground">Registration Deadline: {date.registration}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Register
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Preparing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Our expert tutors can help you prepare for any standardized test with personalized study plans and practice materials.
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