import { Badge } from "@/components/ui/badge"

export function Technologies() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "React Query",
    "GraphQL",
    "Jest",
    "Testing Library",
    "Playwright",
    "Vitest",
    "Webpack",
    "Vite",
    "Turbopack",
    "ESLint",
  ]

  return (
    <section id="tecnologias" className="py-20 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Stack Tecnológico
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Trabalhamos com as tecnologias mais modernas do ecossistema React.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm px-4 py-2 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-card border border-border/40 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Especialização em React</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossa equipe é formada por desenvolvedores certificados e especializados em React, com experiência
                comprovada em projetos de grande escala para empresas nacionais e internacionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos-nos sempre atualizados com as últimas tendências e melhores práticas do ecossistema React,
                garantindo que seu projeto utilize as tecnologias mais adequadas e modernas.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 lg:h-64 lg:w-64">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
                <div
                  className="absolute inset-4 rounded-full bg-primary/30 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute inset-8 rounded-full bg-primary/40 flex items-center justify-center">
                  <svg className="h-24 w-24 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.86-.372-.64-.71-1.29-1.018-1.946.372.64.71 1.29 1.018 1.946zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.372-.64-.71-1.29-1.018-1.946-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.372.64.71 1.29 1.018 1.946zM12 12.004c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.372-.64-.71-1.29-1.018-1.946-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.372.64.71 1.29 1.018 1.946zM8.365 12.004c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.278-.96-.645-1.957-1.1-2.98-.278-.96-.645-1.957-1.1-2.98zm0 0"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
