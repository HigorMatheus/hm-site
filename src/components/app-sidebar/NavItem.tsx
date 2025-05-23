import { ChevronDownIcon } from 'lucide-react';
import { ElementType } from 'react';
// import { LuChevronDown } from 'react-icons/lu';

interface NavItemProps {
	title: string;
	icon: ElementType;
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
	return (
		<a
			className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
			href=""
		>
			<Icon className="h-5 w-5 text-zinc-500" />
			<span className="font-medium text-zinc-700 group-hover:text-violet-500">
				{title}
			</span>
			<ChevronDownIcon className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-violet-300" />
		</a>
	);
}
