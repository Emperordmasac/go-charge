import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PaymentsTableData } from "@/config/data-table";
import {
  paymentsColumns,
  PaymentsDataTable,
} from "@/components/ui/payments-data-table";

export const metadata = {
  title: "Actors",
};

export default async function PaymentsPage() {
  return (
    <div className="">
      <h1 className="text-[#000] text-[36px] font-semibold">Payments</h1>
      <div className="mt-[25px] w-[100vw] ">
        <PaymentsContent />
        <div className=" py-10">
          <PaymentsDataTable
            columns={paymentsColumns}
            data={PaymentsTableData}
          />
        </div>
      </div>
    </div>
  );
}

const PaymentsContent = () => {
  return (
    <div className="mt-[47px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto text-[14px] py-[25px] mr-[20px]"
          >
            Users
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="ml-auto text-[14px] py-[25px]">
            Cleared
            <Icons.chevronDown className="ml-[78px] h-4 w-4 text-[#0F0627]-foreground" />
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
