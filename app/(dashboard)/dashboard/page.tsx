import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <h1>Well i am here...</h1>
    </DashboardShell>
  );
}
