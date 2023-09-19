import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export const metadata = {
  title: "Requests",
};

export default async function RequestsPage() {
  return (
    <div className="">
      <h1 className="text-[#000] text-[36px] font-semibold">Requests</h1>
      <div className="mt-[25px] w-[100vw] ">
        <Tabs defaultValue="charging" className="">
          <TabsList className="border-b pb-[10px] w-[100%] -ml-[14px]">
            <TabsTrigger
              className="text-[#221F1E] text-[18px]"
              value="charging"
            >
              Charging
              <span className="ml-[5px] text-[#fff] rounded-[30px] px-[9.5px] py-[3px] bg-[#221F1E]">
                1250
              </span>
            </TabsTrigger>
            <TabsTrigger
              className="text-[#221F1E] text-[18px]"
              value="servicing"
            >
              Servicing
              <span className="ml-[5px] text-[#fff] rounded-[30px] px-[9.5px] py-[3px] bg-[#221F1E]">
                1250
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="charging">
            <ChargingContent />
          </TabsContent>
          <TabsContent value="servicing">
            <ServicingContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export const ChargingContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            All Status
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger className="ml-[20px]" asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Last Login
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};

export const ServicingContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            All requests
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger className="ml-[20px]" asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Last Login
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
