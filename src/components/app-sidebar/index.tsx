import React from 'react';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
} from '../ui/sidebar';

export function AppSidebar() {
	return (
		<>
			{/* <aside className="flex flex-col gap-6 overflow-auto border-r border-zinc-200 px-5 py-8">
        <Logo />
        <Input.Root>
          <Input.Prefix>
            <LuSearch className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            className="w-full text-zinc-900 placeholder-zinc-600"
            placeholder="search"
          />
        </Input.Root>

        <nav className="space-x-0.5">
          <NavItem title="Home" icon={LuHome} />
          <NavItem title="Dashboard" icon={LuBarChart} />
          <NavItem title="Projects" icon={LuSquareSlash} />
          <NavItem title="Tasks" icon={LuCheckSquare} />
          <NavItem title="Reporting" icon={LuFlag} />
          <NavItem title="Users" icon={LuUsers} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LuLifeBuoy} />
            <NavItem title="Settings" icon={LuCog} />
          </nav>
          <UserSpaceWidget />
          <div className="h-px bg-zinc-200" />
          <Profile />
        </div>
      </aside> */}
			<Sidebar>
				<SidebarHeader>Pizza</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>test</SidebarGroupLabel>
						<SidebarContent>test</SidebarContent>
					</SidebarGroup>
					<SidebarGroup />
				</SidebarContent>
				<SidebarFooter />
			</Sidebar>
		</>
	);
}
