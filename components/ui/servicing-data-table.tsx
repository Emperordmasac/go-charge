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

//-- define our columns.
//-- Columns are where you define the core of what your table will look like.
//-- They define the data that will be displayed, how it will be formatted, sorted and filtered.

export type Payment = {
  id: string;
  name: number;
  status: "active" | "inactive" | "accepted" | "declined" | "pending";
  email: string;
  phoneNumber: string;
  rating: number;
  lastlogin: string;
};

export const servicingcolumns: ColumnDef<Payment>[] = [
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
            status === "active"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#21C1071A] text-[#21C107] w-fit"
              : status === "inactive"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#EB43351A] text-[#EB4335] w-fit"
              : status === "accepted"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#21C1071A] text-[#21C107] w-fit"
              : status === "declined"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#8A8A8F1A] text-[#8A8A8F] w-fit"
              : status === "pending"
              ? "py-[5px] px-[10px] rounded-[10px] bg-[#F79E1B1A] text-[#F79E1B] w-fit"
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
    accessorKey: "vehicleName",
    header: "VEHICLE NAME",
    cell: ({ row }) => {
      const value = row.getValue("vehicleName") as string;
      return <div className="text-[#8692A6]">{value}</div>;
    },
  },
  {
    accessorKey: "rating",
    header: "RATING",
  },
  {
    accessorKey: "servicingStatus",
    header: "SERVICE STATUS",
    cell: ({ row }) => {
      const value = row.getValue("servicingStatus") as string;
      return (
        <div
          className={`${
            value === "complete"
              ? "text-[#21C107]"
              : value === "N/A"
              ? "text-[#8A8A8F]"
              : value === "ongoing"
              ? "text-[#F79E1B]"
              : ""
          }`}
        >
          {value}
        </div>
      );
    },
  },
];

//-- a <DataTable /> component to render our table.

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any[];
}

export function ServicingDataTable<TData, TValue>({
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
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
