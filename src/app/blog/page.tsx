import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 Effective Study Techniques for Better Academic Performance",
    description: "Learn science-backed methods to improve your study efficiency and retention.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    category: "Study Tips",
    readTime: "5 min read",
  },
  {
    title: "Understanding the New SAT Digital Format",
    description: "Everything you need to know about the changes to the SAT and how to prepare.",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Test Prep",
    readTime: "8 min read",
  },
  {
    title: "How to Choose the Right College: A Comprehensive Guide",
    description: "Key factors to consider when selecting the perfect college for your future.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    category: "College Planning",
    readTime: "10 min read",
  },
  {
    title: "Managing Test Anxiety: Tips from Education Experts",
    description: "Practical strategies to overcome anxiety and perform your best on test day.",
    author: "Dr. Sarah Johnson",
    date: "March 8, 2024",
    category: "Student Wellness",
    readTime: "6 min read",
  },
  {
    title: "The Power of Active Learning in Mathematics",
    description: "How engaging actively with math concepts leads to better understanding.",
    author: "Michael Chen",
    date: "March 5, 2024",
    category: "Mathematics",
    readTime: "7 min read",
  },
  {
    title: "Writing College Essays That Stand Out",
    description: "Expert advice on crafting compelling college application essays.",
    author: "Emily Rodriguez",
    date: "March 3, 2024",
    category: "College Applications",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">CD Academy Blog</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Insights, tips, and strategies for academic success from our expert educators.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-primary/5 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
            <Link
              key={category}
              href="#"
              className="px-4 py-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 