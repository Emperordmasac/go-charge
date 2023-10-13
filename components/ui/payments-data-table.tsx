"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//-- define our columns.
//-- Columns are where you define the core of what your table will look like.
//-- They define the data that will be displayed, how it will be formatted, sorted and filtered.

export type Payment = {
  id: number;
  name: string;
  status: "cleared" | "uncleared";
  phoneNumber: string;
  paymentFor: string;
  amount: number;
  dueDate: string;
};

export const paymentsColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-[12px] text-[#000]">NAME</div>,
    cell: ({ row }) => {
      const value = row.getValue("name") as string;
      return <div className="text-[#8692A6]">{value}</div>;
    },
  },

  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div
          className={`${
            status === "cleared"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#21C1071A] text-[#21C107] w-fit"
              : status === "uncleared"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#EB43351A] text-[#EB4335] w-fit"
              : ""
          }`}
        >
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "PHONE NUMBER",
    cell: ({ row }) => {
      const value = row.getValue("phoneNumber") as string;
      return <div className="text-[#8692A6]">{value}</div>;
    },
  },
  {
    accessorKey: "paymentFor",
    header: "PAYMENT FOR",
    cell: ({ row }) => {
      const emailValue = row.getValue("paymentFor") as string;
      return <div className="text-[#8692A6]">{emailValue}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => {
      const value = row.getValue("amount") as string;
      return <div className="text-[#221F1E]">#{value}</div>;
    },
  },
  {
    accessorKey: "dueDate",
    header: "DUE DATE",
    cell: ({ row }) => {
      const value = row.getValue("dueDate") as string;
      return <div className="text-[#8692A6]">{value}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <div className="bg-[#EB43351A] rounded-[70px] py-[6px] px-[15px]">
                <MoreHorizontal className="text-[#EF895F] h-4 w-4 " />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

//-- a <DataTable /> component to render our table.

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any[];
}

export function PaymentsDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="cursor-pointer" key={cell.id}>
                    <Dialog>
                      <DialogTrigger>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Payment Details</DialogTitle>
                        </DialogHeader>
                        <div className="flex justify-between px-5">
                          <div>
                            <h2 className="text-[##757886] mb-5">
                              Sender
                              <span className="text-sm text-[#000] block mt-1">
                                Abu-Ekpeshie Emmanuel
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Receiver
                              <span className="text-sm text-[#000] block mt-1">
                                Total Energies
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Anount
                              <span className="text-sm text-[#000] block mt-1">
                                #3500.00
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Status
                              <span className="text-sm block mt-1 py-[5px] px-[10px] rounded-[10px] bg-[#21C1071A] text-[#21C107] w-fit">
                                cleared
                              </span>
                            </h2>
                          </div>
                          <div>
                            <h2 className="text-[##757886] mb-5">
                              Phone Number
                              <span className="text-sm text-[#000] block mt-1">
                                08123456789
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Sender
                              <span className="text-sm text-[#000] block mt-1">
                                08123456789
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Payment for
                              <span className="text-sm text-[#000] block mt-1">
                                Servicing
                              </span>
                            </h2>
                            <h2 className="text-[##757886] mb-5">
                              Due Date
                              <span className="text-sm text-[#000] block mt-1">
                                28/05/21
                              </span>
                            </h2>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
