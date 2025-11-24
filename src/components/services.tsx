import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, Smartphone, LayoutGrid } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Layers,
      title: "Desenvolvimento React",
      description:
        "Criamos aplicações React escaláveis e performáticas usando as melhores práticas e arquiteturas modernas.",
    },
    {
      icon: Zap,
      title: "Next.js & SSR",
      description:
        "Implementamos soluções com Next.js para SEO otimizado, renderização server-side e performance excepcional.",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description:
        "Desenvolvemos PWAs que funcionam offline e proporcionam experiência nativa em qualquer dispositivo.",
    },
    {
      icon: LayoutGrid,
      title: "Design Systems",
      description:
        "Construímos componentes reutilizáveis e design systems completos para manter consistência em larga escala.",
    },
  ]

  return (
    <section id="servicos" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Oferecemos soluções completas em desenvolvimento React para empresas de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-card border-border/40 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
