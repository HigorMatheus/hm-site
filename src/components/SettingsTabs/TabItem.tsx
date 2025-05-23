'use client';

import * as Tabs from '@radix-ui/react-tabs';
// import { motion } from 'framer-motion';
export interface TabItemProps {
	value: string;
	title: string;
	isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
	return (
		<Tabs.Trigger
			value={value}
			className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
		>
			<span className="group-focus:right-violet-400 group-focus:right-2">
				{title}
			</span>
			{/* {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )} */}
		</Tabs.Trigger>
	);
}
