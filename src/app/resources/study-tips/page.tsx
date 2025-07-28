import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, BookOpen, Target, Brain, Calendar, CheckCircle } from "lucide-react";

const studyTechniques = [
  {
    icon: Clock,
    title: "Pomodoro Technique",
    description: "Work in focused 25-minute intervals with 5-minute breaks to maintain concentration.",
    steps: [
      "Set a timer for 25 minutes",
      "Focus on one task until the timer rings",
      "Take a 5-minute break",
      "After 4 sessions, take a longer 15-30 minute break"
    ]
  },
  {
    icon: BookOpen,
    title: "Active Reading",
    description: "Engage with the material through highlighting, note-taking, and questioning.",
    steps: [
      "Preview the material before reading",
      "Ask questions while reading",
      "Take notes in your own words",
      "Summarize key points after each section"
    ]
  },
  {
    icon: Target,
    title: "Spaced Repetition",
    description: "Review material at increasing intervals to strengthen memory retention.",
    steps: [
      "Review new material within 24 hours",
      "Review again after 3 days",
      "Review after 1 week",
      "Continue with longer intervals"
    ]
  },
  {
    icon: Brain,
    title: "Mind Mapping",
    description: "Create visual diagrams to connect concepts and improve understanding.",
    steps: [
      "Start with a central topic",
      "Branch out with related concepts",
      "Use colors and images",
      "Review and expand regularly"
    ]
  }
];

const timeManagement = [
  {
    title: "Create a Study Schedule",
    description: "Plan your study sessions in advance and stick to a consistent routine.",
    tips: [
      "Set specific study times each day",
      "Include breaks and rest periods",
      "Prioritize difficult subjects during peak energy hours",
      "Review and adjust your schedule weekly"
    ]
  },
  {
    title: "Use a Planner or Digital Calendar",
    description: "Keep track of assignments, deadlines, and study sessions.",
    tips: [
      "Record all important dates and deadlines",
      "Set reminders for upcoming tests",
      "Block out dedicated study time",
      "Review your schedule daily"
    ]
  },
  {
    title: "Eliminate Distractions",
    description: "Create an environment conducive to focused studying.",
    tips: [
      "Find a quiet, well-lit study space",
      "Turn off phone notifications",
      "Use website blockers if needed",
      "Let family/roommates know your study times"
    ]
  }
];

export default function StudyTipsPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Study Tips & Strategies</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Master effective study techniques and time management strategies to maximize your academic performance.
        </p>
      </div>

      {/* Study Techniques Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Proven Study Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studyTechniques.map((technique) => {
            const Icon = technique.icon;
            return (
              <Card key={technique.title}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{technique.title}</CardTitle>
                  </div>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">How to implement:</h4>
                  <ol className="space-y-2">
                    {technique.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Time Management Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Time Management Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeManagement.map((strategy) => (
            <Card key={strategy.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {strategy.title}
                </CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {strategy.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Our expert tutors can help you develop personalized study strategies tailored to your learning style.
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