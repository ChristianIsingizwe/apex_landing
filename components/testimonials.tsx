import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The team at DevGenius delivered our project ahead of schedule and exceeded our expectations in terms of quality and performance.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with this team has been a game-changer for our startup. Their technical expertise and commitment to our vision helped us launch successfully.",
      author: "Michael Chen",
      role: "Founder, InnovateLabs",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their attention to detail and ability to translate our requirements into elegant solutions made all the difference in our product development.",
      author: "Elena Rodriguez",
      role: "Product Manager, SoftSolutions",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-center text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex flex-col items-center pt-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <h4 className="mt-2 font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
