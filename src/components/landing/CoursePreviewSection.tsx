import { Clock, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coursePreviews, type CoursePreview } from "@/data/courses";

function CourseCard({ course }: { course: CoursePreview }) {
  const levelColors = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="cyber-card p-6 flex flex-col h-full relative">
      {/* Badge */}
      {course.badge && (
        <div className="absolute -top-3 right-4">
          <Badge
            variant="default"
            className="bg-primary text-primary-foreground"
          >
            {course.badge}
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2 py-1 rounded border ${levelColors[course.level]}`}>
            {course.level}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold">{course.title}</h3>
        <p className="text-sm text-muted-foreground">{course.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {course.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {course.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <GraduationCap className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <div>
          <span className="text-2xl font-bold">${course.price}</span>
          <span className="text-sm text-muted-foreground ml-1">USD</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="group"
          onClick={() => {
            document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join Waitlist
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

export function CoursePreviewSection() {
  return (
    <section className="py-20 md:py-32 relative" id="courses">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section-label">[ COURSES ]</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Practical <span className="text-primary">Training</span> That Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Courses designed by practitioners, for practitioners. No fluff, just the skills
            you need to advance your career.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coursePreviews.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All courses are in development. Join the waitlist to get notified when they launch
            and receive early-bird pricing.
          </p>
          <Button
            size="lg"
            className="cyber-button"
            onClick={() => {
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
