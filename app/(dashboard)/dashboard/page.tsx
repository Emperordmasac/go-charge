import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import {
  CircularProgressUsers,
  CircularProgressRepairmen,
  CircularProgressEnergy,
} from "@/components/ui/circular-progress";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  return (
    <div className="">
      {/* overview card component */}
      <Card>
        <CardHeader className="">
          <CardTitle className="text-[20px] font-medium mb-5">
            Overview
          </CardTitle>
          <CardContent className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
            {/* 1 */}
            <CardContent className="flex space-x-2 items-center border-r">
              <Icons.users className="-mt-6" />
              <div>
                <div className="text-[64px] font-bold">1340</div>
                <p className="text-[16px] text-muted-foreground">users</p>
              </div>
            </CardContent>
            {/* 2 */}
            <CardContent className="flex space-x-2 items-center border-r">
              <Icons.energy className="-mt-6" />
              <div>
                <div className="text-[64px] font-bold">500</div>
                <p className="text-[16px] text-muted-foreground">
                  Energy Stations
                </p>
              </div>
            </CardContent>
            {/* 3 */}
            <CardContent className="flex space-x-2 items-center">
              <Icons.repairmen className="-mt-6" />
              <div>
                <div className="text-[64px] font-bold">50</div>
                <p className="text-[16px] text-muted-foreground">Repairmen</p>
              </div>
            </CardContent>
          </CardContent>
        </CardHeader>
      </Card>
      {/* 2nd card-component */}
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-3 mt-[20px] w-[90%]">
        {/* 1st card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[20px] font-medium">Users</CardTitle>
            <Link href="" className="text-[#EF895F] text-[16px] font-medium">
              See all
            </Link>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-between">
            <CircularProgressUsers value={85} />
            <CardContent className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 mt-20">
              <CardContent className="flex items-center ">
                <div className="flex items-center ">
                  <Icons.dot fill="#EF895F" className="mt-[-1.5rem] " />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">1062</div>
                    <p className="text-xs text-muted-foreground mt-2">Active</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="flex items-center border-l">
                <div className="flex items-center ">
                  <Icons.dot
                    fill="#EF895F"
                    className="mt-[-1.5rem] opacity-10"
                  />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">188</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      InActive
                    </p>
                  </div>
                </div>
              </CardContent>
            </CardContent>
          </CardContent>
        </Card>
        {/* 2nd card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[20px] font-medium">
              Energy Dealers
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-between">
            <CircularProgressEnergy value={85} />
            <CardContent className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 mt-20">
              <CardContent className="flex items-center ">
                <div className="flex items-center ">
                  <Icons.dot fill="#2478EC" className="mt-[-1.5rem] " />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">1062</div>
                    <p className="text-xs text-muted-foreground mt-2">Active</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="flex items-center border-l">
                <div className="flex items-center ">
                  <Icons.dot
                    fill="#2478EC"
                    className="mt-[-1.5rem] opacity-10"
                  />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">188</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      InActive
                    </p>
                  </div>
                </div>
              </CardContent>
            </CardContent>
          </CardContent>
        </Card>
        {/* 3rd card card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[20px] font-medium">Repairmen</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-between">
            <CircularProgressRepairmen value={85} />
            <CardContent className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 mt-20">
              <CardContent className="flex items-center ">
                <div className="flex items-center ">
                  <Icons.dot fill="#21C107" className="mt-[-1.5rem] " />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">1062</div>
                    <p className="text-xs text-muted-foreground mt-2">Active</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="flex items-center border-l">
                <div className="flex items-center ">
                  <Icons.dot
                    fill="#21C107"
                    className="mt-[-1.5rem] opacity-10"
                  />
                  <div className="ml-1">
                    <div className="text-2xl font-bold">188</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      InActive
                    </p>
                  </div>
                </div>
              </CardContent>
            </CardContent>
          </CardContent>
        </Card>
      </div>

      {/* 3rd card component */}
      <Card className="w-[40%] mt-[20px] mb-[51px]">
        <CardHeader>
          <CardTitle className="text-[20px] font-[600] mb-[20px]">
            Assigned Tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* 1st */}
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[16px] font-[400] text-[#757886]">
                Checked up on all stations
              </CardTitle>
              <Icons.arrowRight />
            </CardHeader>
          </Card>
          {/* 2nd */}
          <Card className="flex flex-col space-y-10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[16px] font-[400] text-[#757886]">
                Create your first job
              </CardTitle>
              <Icons.lock />
            </CardHeader>
          </Card>
          {/* 3rd */}
          <Card className="flex flex-col space-y-10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[16px] font-[400] text-[#757886]">
                Advertise a job
              </CardTitle>
              <Icons.lock />
            </CardHeader>
          </Card>
          {/* special */}
          <Card className="flex flex-col space-y-10 bg-[#198E56] w-[80%]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-[16px] font-[400] text-[#fff]">
                Generate coupon code
              </CardTitle>
              <Icons.checkIcon />
            </CardHeader>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
