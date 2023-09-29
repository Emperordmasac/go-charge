import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  UserTableData,
  EnergyDealerTableData,
  RepairmenTableData,
} from "@/config/data-table";
import {
  UserDataTable,
  userDataColumns,
} from "@/components/ui/user-data-table";
import {
  energycolumns,
  EnergyDataTable,
} from "@/components/ui/energy-data-table";
import {
  repairmenDataColumns,
  RepairmenDataTable,
} from "@/components/ui/repairmen-data-table";

export const metadata = {
  title: "Actors",
};

export default async function ActorsPage() {
  return (
    <div className="">
      <h1 className="text-[#000] text-[36px] font-semibold">Actors</h1>
      <div className="mt-[25px] w-[100vw] ">
        <Tabs defaultValue="user" className="">
          <TabsList className="border-b pb-[4px] w-[100%] -ml-[14px]">
            <TabsTrigger className="text-[#221F1E] text-[18px]" value="user">
              User
              <span className="ml-[5px] text-[14px] text-[#fff] rounded-[30px] px-[9.5px] py-[3px] bg-[#221F1E]">
                1250
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="text-[#221F1E] text-[18px]"
              value="energyDealer"
            >
              Energy Dealer
              <span className="ml-[5px] text-[14px] text-[#fff] rounded-[30px] px-[9.5px] py-[3px] bg-[#221F1E]">
                1250
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="text-[#221F1E] text-[18px]"
              value="repairmen"
            >
              Repairmen
              <span className="ml-[5px] text-[14px] text-[#fff] rounded-[30px] px-[9.5px] py-[3px] bg-[#221F1E]">
                1250
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user">
            <UserContent />
            <div className=" py-10">
              <UserDataTable columns={userDataColumns} data={UserTableData} />
            </div>
          </TabsContent>
          <TabsContent value="energyDealer">
            <EnergyDealersContent />
            <div className=" py-10">
              <EnergyDataTable
                columns={energycolumns}
                data={EnergyDealerTableData}
              />
            </div>
          </TabsContent>
          <TabsContent value="repairmen">
            <RepairmenContent />
            <div className=" py-10">
              <RepairmenDataTable
                columns={repairmenDataColumns}
                data={RepairmenTableData}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export const UserContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto text-[14px] py-[25px] mr-[20px]"
          >
            Active
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Last Login
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};

export const EnergyDealersContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto text-[14px] py-[25px] mr-[20px]"
          >
            All status
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Last Login
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};

export const RepairmenContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto text-[14px] py-[25px] mr-[20px]"
          >
            All status
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Last Login
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
