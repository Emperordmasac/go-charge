import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { NotificationNav } from "@/components/user-account-nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background px-8 py-4">
        <div className="w-full flex items-center">
          <div className="w-[20%]">
            <MainNav items={dashboardConfig.sidebarNav} />
          </div>
          <div className="w-[80%] ">
            <div className="flex justify-between">
              <Search />
              <NotificationNav user={{}} />
            </div>
          </div>
        </div>
        {/* <div className="w-full mx-auto px-8 flex h-16 items-center justify-betwwen py-4">
          <MainNav items={dashboardConfig.sidebarNav} />
          <div className="flex justify-between  bg-black">
            <Search className="ml-[148px]" />
            <UserAccountNav user={{}} />
          </div>
        </div> */}
      </header>
      <div className="w-full mx-auto px-8 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <div className="border-r">
          <aside className="hidden w-[200px] flex-col md:flex ">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>
        </div>
        <main className="flex w-full flex-1 flex-col overflow-hidden pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
