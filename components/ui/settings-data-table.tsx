"use client";

import avatar from "@/public/images/sample-avatar.png";
import Image from "next/image";

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

export type Settings = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const settingsColumns: ColumnDef<Settings>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-[12px] text-[#000] pl-[56px]">NAME</div>,
    cell: ({ row }) => {
      const value = row.getValue("name") as string;
      return (
        <div className="flex justify-center items-center gap-[5px]">
          <Image src={avatar} alt="a" width="30" height="30" />
          <div className="text-[#000000] text-[14px] font-medium">{value}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-[12px] text-[#000]">EMAIL</div>,
    cell: ({ row }) => {
      const value = row.getValue("email") as string;
      return (
        <div className="text-[#8692A6] text-[14px] font-medium">{value}</div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-[12px] text-[#000]">Role</div>,
    cell: ({ row }) => {
      const value = row.getValue("role") as string;
      return <div className="text-[#000] text-[14px] font-medium">{value}</div>;
    },
  },
];

//-- a <DataTable /> component to render our table.

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any[];
}

export function SettingsDataTable<TData, TValue>({
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
                  <TableHead className="bg-[#8692A614]" key={header.id}>
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
