import { DashboardShell } from "@/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <div className="container">
      <Card>
        <CardHeader className="">
          <CardTitle className="text-sm font-medium mb-5">Overview</CardTitle>
          <CardContent className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {/* 1 */}
            <CardContent className="flex space-x-2 items-center border-r">
              <Icons.users />
              <div>
                <div className="text-2xl font-bold">1340</div>
                <p className="text-xs text-muted-foreground">users</p>
              </div>
            </CardContent>
            {/* 2 */}
            <CardContent className="flex space-x-2 items-center border-r">
              <Icons.energy />
              <div>
                <div className="text-2xl font-bold">500</div>
                <p className="text-xs text-muted-foreground">Energy Stations</p>
              </div>
            </CardContent>
            {/* 3 */}
            <CardContent className="flex space-x-2 items-center">
              <Icons.repairmen />
              <div>
                <div className="text-2xl font-bold">50</div>
                <p className="text-xs text-muted-foreground">Repairmen</p>
              </div>
            </CardContent>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
