import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Download, Calculator, BookOpen, PenTool, GraduationCap } from "lucide-react";

const practiceMaterials = [
  {
    category: "SAT Practice",
    materials: [
      {
        title: "SAT Math Practice Tests",
        description: "Complete math sections with detailed solutions and explanations.",
        type: "PDF",
        size: "4.2 MB",
        pages: "45 pages",
        icon: Calculator,
      },
      {
        title: "SAT Reading Comprehension",
        description: "Practice passages with questions and answer explanations.",
        type: "PDF",
        size: "3.8 MB",
        pages: "38 pages",
        icon: BookOpen,
      },
      {
        title: "SAT Writing & Language",
        description: "Grammar and usage practice with detailed explanations.",
        type: "PDF",
        size: "2.9 MB",
        pages: "32 pages",
        icon: PenTool,
      },
    ]
  },
  {
    category: "ACT Practice",
    materials: [
      {
        title: "ACT Math Practice",
        description: "Comprehensive math practice with step-by-step solutions.",
        type: "PDF",
        size: "5.1 MB",
        pages: "52 pages",
        icon: Calculator,
      },
      {
        title: "ACT English Practice",
        description: "Grammar, punctuation, and style practice questions.",
        type: "PDF",
        size: "3.5 MB",
        pages: "41 pages",
        icon: PenTool,
      },
      {
        title: "ACT Science Practice",
        description: "Data interpretation and scientific reasoning practice.",
        type: "PDF",
        size: "4.7 MB",
        pages: "48 pages",
        icon: BookOpen,
      },
    ]
  },
  {
    category: "Subject-Specific Practice",
    materials: [
      {
        title: "Algebra I Practice Problems",
        description: "Comprehensive algebra practice with solutions.",
        type: "PDF",
        size: "3.2 MB",
        pages: "35 pages",
        icon: Calculator,
      },
      {
        title: "Geometry Practice Tests",
        description: "Geometry problems with detailed explanations.",
        type: "PDF",
        size: "4.0 MB",
        pages: "42 pages",
        icon: Calculator,
      },
      {
        title: "Essay Writing Prompts",
        description: "Practice prompts with sample essays and feedback.",
        type: "PDF",
        size: "2.5 MB",
        pages: "28 pages",
        icon: PenTool,
      },
    ]
  }
];

const studyGuides = [
  {
    title: "Complete SAT Study Guide",
    description: "Comprehensive guide covering all SAT sections with strategies and practice questions.",
    type: "PDF",
    size: "8.5 MB",
    pages: "120 pages",
  },
  {
    title: "ACT Prep Manual",
    description: "Complete ACT preparation guide with practice tests and strategies.",
    type: "PDF",
    size: "7.2 MB",
    pages: "95 pages",
  },
  {
    title: "Math Formula Sheet",
    description: "Essential formulas for algebra, geometry, and trigonometry.",
    type: "PDF",
    size: "1.8 MB",
    pages: "15 pages",
  },
  {
    title: "Essay Writing Guide",
    description: "Step-by-step guide to writing effective academic essays.",
    type: "PDF",
    size: "3.1 MB",
    pages: "25 pages",
  },
];

export default function PracticePage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Practice Materials</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Access our comprehensive collection of practice tests, study guides, and educational resources.
        </p>
      </div>

      {/* Study Guides Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Study Guides</h2>
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
                      <CardDescription>{guide.type} • {guide.size} • {guide.pages}</CardDescription>
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

      {/* Practice Materials by Category */}
      {practiceMaterials.map((category) => (
        <section key={category.category} className="mb-20">
          <h2 className="text-2xl font-bold mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.materials.map((material) => {
              const Icon = material.icon;
              return (
                <Card key={material.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <CardDescription>{material.type} • {material.size} • {material.pages}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{material.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      ))}

      {/* Additional Resources */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Practice?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Our tutors can create custom practice materials tailored to your specific needs and learning goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Schedule a Session</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resources/study-tips">Study Tips</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 