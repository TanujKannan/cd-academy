import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Download, BookOpen, Calendar, Brain, GraduationCap } from "lucide-react";

const studyGuides = [
  {
    title: "SAT Preparation Guide",
    description: "Comprehensive guide covering all SAT sections with practice questions.",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    title: "ACT Study Materials",
    description: "Complete ACT prep materials with strategies and practice tests.",
    type: "PDF",
    size: "3.1 MB",
  },
  {
    title: "Math Formula Sheet",
    description: "Essential formulas for algebra, geometry, and trigonometry.",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Essay Writing Guide",
    description: "Step-by-step guide to writing effective academic essays.",
    type: "PDF",
    size: "1.8 MB",
  },
];

const resources = [
  {
    icon: Calendar,
    title: "Test Dates & Deadlines",
    description: "Important dates for SAT, ACT, and other standardized tests.",
    link: "/resources/test-dates",
  },
  {
    icon: Brain,
    title: "Study Strategies",
    description: "Effective learning techniques and time management tips.",
    link: "/resources/study-tips",
  },
  {
    icon: BookOpen,
    title: "Practice Tests",
    description: "Full-length practice exams with detailed explanations.",
    link: "/resources/practice-tests",
  },
  {
    icon: GraduationCap,
    title: "College Planning",
    description: "Resources for college research and application process.",
    link: "/resources/college-planning",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Access our collection of study materials, practice tests, and educational resources.
        </p>
      </div>

      {/* Study Guides Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Downloadable Study Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyGuides.map((guide) => (
            <Card key={guide.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.type} • {guide.size}</CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{guide.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.title} className="relative group">
                <Link href={resource.link}>
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {resource.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
          Subscribe to our newsletter to receive the latest study materials, test prep tips, and educational resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Subscribe Now</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Visit Our Blog</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 