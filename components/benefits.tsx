import { Code, Clock, Award, Globe, Zap, GitBranch } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Expert Development",
      description: "Our team of skilled engineers delivers clean, maintainable code that scales with your business.",
    },
    {
      icon: <Clock className="h-10 w-10 text-cyan-500" />,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines without compromising on quality or features.",
    },
    {
      icon: <Award className="h-10 w-10 text-purple-500" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure your product is reliable and robust.",
    },
    {
      icon: <Globe className="h-10 w-10 text-cyan-500" />,
      title: "Remote Collaboration",
      description: "Our distributed team works seamlessly across time zones to provide continuous progress.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Rapid Iteration",
      description: "We employ agile methodologies to quickly adapt to changing requirements and feedback.",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-cyan-500" />,
      title: "Open Source Contribution",
      description: "We actively contribute to the developer community through open source projects.",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits of Working With Us</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We bring a unique combination of expertise, dedication, and innovation to every project.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-muted p-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-center text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
