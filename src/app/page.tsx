'use client';

import { useRef, useState } from 'react';

import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { Stats } from '@/components/stats';
import { Technologies } from '@/components/technologies';
import { cn } from '@/lib/utils';

export default function Home() {
	// const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

	// const handleButtonHover = () => {
	//   const newX = Math.random() * (window.innerWidth - 100); // Limitando a largura
	//   const newY = Math.random() * (window.innerHeight - 50); // Limitando a altura
	//   setButtonPosition({ x: newX, y: newY });
	// };

	return (
		<div className="relative flex items-center justify-center">
			<Header />
			<Hero />
			<Stats />
			<Services />
			<Technologies />
			<Projects />
			<CTA />
			<Footer />
			{/* <div>
        <div className="mb-10 rounded bg-gray-400 p-3">
          <h1> Vamos para o Koynonia? </h1>
          <div className="mt-4 flex w-full justify-around">
            <a className={buttonVariants({})} href="/koynonya-02-08.jpeg">
              Sim
            </a>
            <button
              className={cn(buttonVariants(), 'absolute', {
                relative: !buttonPosition.x,
              })}
              onMouseEnter={handleButtonHover}
              onClick={handleButtonHover}
              style={{
                left: `${buttonPosition.x}px`,
                top: `${buttonPosition.y}px`,
              }}
            >
              Não
            </button>
          </div>
        </div>
      </div> */}
			<div className="">Desenvolvido por Higor Matheus</div>
		</div>
	);
	// return (
	//   <>
	//     <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
	//     <SettingsTabs />
	//     <div className="mx-auto mt-6 flex w-full max-w-5xl flex-col overflow-y-scroll">
	//       <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
	//         <div className="space-y-1">
	//           <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
	//           <span className="text-sm text-zinc-500">
	//             Update your photo and personal details here.
	//           </span>
	//         </div>
	//         <div className="flex items-center gap-2">
	//           <Button type="button" variant="outline">
	//             Cancel
	//           </Button>
	//           <Button type="submit" form="settings">
	//             Save
	//           </Button>
	//         </div>
	//       </div>
	//       <form
	//         id="settings"
	//         className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
	//       >
	//         <div className="grid grid-cols-form gap-3">
	//           <label
	//             htmlFor="firstName"
	//             className="text-sm font-medium text-zinc-700"
	//           >
	//             Name
	//           </label>
	//           <div className="grid grid-cols-2 gap-6">
	//             <Input.Root>
	//               <Input.Control id="firstName" className="w-full" />
	//             </Input.Root>
	//             <Input.Root>
	//               <Input.Control id="lastName" className="w-full" />
	//             </Input.Root>
	//           </div>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label
	//             htmlFor="email"
	//             className="text-sm font-medium text-zinc-700"
	//           >
	//             E-mail
	//           </label>

	//           <Input.Root>
	//             <Input.Prefix>
	//               <LuMail className="h-5 w-5 text-zinc-500" />
	//             </Input.Prefix>
	//             <Input.Control id="email" type="email" className="w-full" />
	//           </Input.Root>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label
	//             htmlFor="email"
	//             className="text-sm font-medium text-zinc-700 "
	//           >
	//             Your photo
	//             <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
	//               This will be displayed on your profile.
	//             </span>
	//           </label>

	//           <FileInput.Root className="flex items-start gap-5">
	//             <FileInput.ImagePreview />
	//             <FileInput.Trigger />
	//             <FileInput.Control />
	//           </FileInput.Root>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label htmlFor="role" className="text-sm font-medium text-zinc-700">
	//             Role
	//           </label>

	//           <Input.Root>
	//             <Input.Control id="role" className="w-full" />
	//           </Input.Root>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label
	//             htmlFor="country"
	//             className="text-sm font-medium text-zinc-700"
	//           >
	//             Country
	//           </label>

	//           <Select placeholder="Select a country...">
	//             <SelectItem value="br" text="Brasil" />
	//             <SelectItem value="us" text="United State" />
	//           </Select>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label
	//             htmlFor="timezone"
	//             className="text-sm font-medium text-zinc-700"
	//           >
	//             Timezone
	//           </label>

	//           <Select placeholder="Select a timezone...">
	//             <SelectItem value="br" text="Brasil" />
	//             <SelectItem value="us" text="United State" />
	//           </Select>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label htmlFor="bio" className="text-sm font-medium text-zinc-700 ">
	//             Bio
	//             <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
	//               Write a short introduction.
	//             </span>
	//           </label>

	//           <div className="space-y-3">
	//             <div className="grid grid-cols-2 gap-3">
	//               <Select placeholder="" defaultValue="normal">
	//                 <SelectItem value="normal" text="Normal text" />
	//                 <SelectItem value="md" text="Markdown" />
	//               </Select>
	//               <div className="fex items-center gap-1">
	//                 <Button variant="ghost" type="button">
	//                   <LuBold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
	//                 </Button>
	//                 <Button variant="ghost" type="button">
	//                   <LuItalic
	//                     className="h-4 w-4 text-zinc-500"
	//                     strokeWidth={3}
	//                   />
	//                 </Button>
	//                 <Button variant="ghost" type="button">
	//                   <LuLink className="h-4 w-4 text-zinc-500" strokeWidth={3} />
	//                 </Button>
	//                 <Button variant="ghost" type="button">
	//                   <LuList className="h-4 w-4 text-zinc-500" strokeWidth={3} />
	//                 </Button>
	//                 <Button variant="ghost" type="button">
	//                   <LuListOrdered
	//                     className="h-4 w-4 text-zinc-500"
	//                     strokeWidth={3}
	//                   />
	//                 </Button>
	//               </div>
	//             </div>
	//             <Textarea
	//               id="bio"
	//               defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
	//             />
	//           </div>
	//         </div>
	//         <div className="grid grid-cols-form gap-3 pt-5">
	//           <label htmlFor="bio" className="text-sm font-medium text-zinc-700 ">
	//             Portfolio projects
	//             <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
	//               Share a few snippets of your work.
	//             </span>
	//           </label>

	//           <FileInput.Root>
	//             <FileInput.Trigger />
	//             <FileInput.Control multiple />
	//             <FileInput.FileList />
	//           </FileInput.Root>
	//         </div>
	//         <div className="flex items-center justify-end gap-2 pt-5">
	//           <Button type="button" variant="outline">
	//             Cancel
	//           </Button>
	//           <Button type="submit" form="settings">
	//             Save
	//           </Button>
	//         </div>
	//       </form>
	//     </div>
	//   </>
	// );
}
