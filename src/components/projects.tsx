import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, checkout e painel admin desenvolvida em Next.js.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo de analytics em tempo real com visualizações de dados complexas.",
      image: "/analytics-dashboard-dark-theme.png",
      tags: ["React", "D3.js", "WebSocket"],
    },
    {
      title: "Social Media App",
      description: "Aplicação social com feed em tempo real, chat e notificações push.",
      image: "/social-media-feed-interface.jpg",
      tags: ["React", "Firebase", "PWA"],
    },
  ]

  return (
    <section id="projetos" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Projetos em Destaque
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border/40 hover:border-primary/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
