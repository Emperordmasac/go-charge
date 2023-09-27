import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
import { DashboardNav } from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { UserAccountNav } from "@/components/user-account-nav";
import { Search } from "@/components/search";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="w-full mx-auto px-8 flex h-16 items-center justify-betwwen py-4">
          <MainNav items={dashboardConfig.sidebarNav} />
          <div>
            <Search className="ml-[148px]" />
          </div>

          {/* <UserAccountNav user={{}} /> */}
        </div>
      </header>

      {/* <div className="w-full mx-auto px-8 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex border-r">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>

        <main className="flex w-full flex-1 flex-col overflow-hidden pt-8">
          {children}
        </main>
      </div> */}

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
