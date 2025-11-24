import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Code2 className="h-4 w-4" />
            Especialistas em React
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
            Desenvolvemos aplicações React de <span className="text-primary">alta performance</span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance max-w-3xl mx-auto">
            Transformamos suas ideias em aplicações web modernas e escaláveis usando React, Next.js e as melhores
            práticas de desenvolvimento frontend.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 group">
              Começar Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              Ver Portfólio
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>$ npx create-react-app@latest</span>
          </div>
        </div>
      </div>
    </section>
  )
}
