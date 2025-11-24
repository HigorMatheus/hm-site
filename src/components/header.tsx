'use client';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
							{/* <svg
								className="h-6 w-6 text-primary-foreground"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg> */}
							<img
								src="https://github.com/higormatheus.png"
								alt="Higor Matheus"
								className="rounded-lg"
							/>
						</div>
						<span className="text-xl font-bold text-foreground">
							Higor Matheus
						</span>
					</a>
				</div>

				<div className="hidden lg:flex lg:gap-x-8">
					<a
						href="#servicos"
						className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
					>
						Serviços
					</a>
					<a
						href="#tecnologias"
						className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
					>
						Tecnologias
					</a>
					<a
						href="#projetos"
						className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
					>
						Projetos
					</a>
					<a
						href="#sobre"
						className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors"
					>
						Sobre
					</a>
				</div>

				<div className="flex flex-1 items-center justify-end gap-x-4">
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>
							setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
						}
						className="h-9 w-9"
					>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Alternar tema</span>
					</Button>
					{/* <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
            Entrar
          </Button> */}
					{/* <Button size="sm">Começar Projeto</Button> */}
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className="sr-only">Abrir menu</span>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</nav>

			{mobileMenuOpen && (
				<div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
					<div className="space-y-1 px-6 pb-6 pt-4">
						<a
							href="#servicos"
							className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
						>
							Serviços
						</a>
						<a
							href="#tecnologias"
							className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
						>
							Tecnologias
						</a>
						<a
							href="#projetos"
							className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
						>
							Projetos
						</a>
						<a
							href="#sobre"
							className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
						>
							Sobre
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
