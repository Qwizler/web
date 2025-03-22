import { AppSidebar } from "@/components/AppSidebar";
import { SiteHeader } from "@/components/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children, name }: { children: React.ReactNode, name: string }) {
	return <>
		<SidebarProvider>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader name={name} />
				{children}
			</SidebarInset>
		</SidebarProvider>

	</>
}
