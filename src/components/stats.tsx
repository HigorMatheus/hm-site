export function Stats() {
	const stats = [
		{ value: '2+', label: 'Anos de', company: 'Experiência React' },
		{ value: '100%', label: 'Comprometimento', company: 'com Qualidade' },
		{ value: '24h', label: 'Tempo de', company: 'Resposta' },
		{ value: 'Next.js', label: 'Framework', company: 'Preferido' },
	];

	return (
		<section className="py-16 lg:py-24 border-y border-border/40">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div key={index} className="flex flex-col items-center text-center">
							<div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
								{stat.value}
							</div>
							<div className="text-sm font-semibold text-muted-foreground mb-1">
								{stat.label}
							</div>
							<div className="text-xs text-muted-foreground">
								{stat.company}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
