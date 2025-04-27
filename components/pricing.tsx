import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Startup",
      price: "$5,000",
      description: "Perfect for early-stage startups with defined project requirements.",
      features: [
        "Custom software development",
        "Up to 2 developers",
        "Weekly progress reports",
        "2 rounds of revisions",
        "30-day support after delivery",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: "$12,000",
      description: "Ideal for growing companies needing comprehensive development services.",
      features: [
        "Full-stack development",
        "Up to 4 developers",
        "Dedicated project manager",
        "Unlimited revisions",
        "3 months of support",
        "CI/CD implementation",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale enterprise projects and ongoing development.",
      features: [
        "End-to-end development",
        "Dedicated team",
        "Technical architecture design",
        "24/7 priority support",
        "Long-term maintenance",
        "Regular security audits",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transparent pricing with no hidden fees. Select the plan that best fits your project needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl border p-6 shadow-sm transition-all hover:shadow-md ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="mb-4 space-y-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href="#book-call">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
