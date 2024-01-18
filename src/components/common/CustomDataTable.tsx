import { useEffect, useState } from "react";
import { useTable, useSortBy, HeaderGroup, Column, Row } from "react-table";
import Image from "next/image";

interface AdminTableProps {
  columns: Column[];
  data: any[];
  rowCustomize?: any[];
  isLoading?: boolean;
}

const AdminTable: React.FC<AdminTableProps> = ({
  columns,
  data,
  rowCustomize = [],
  isLoading = true,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="rounded-lg overflow-hidden">
      <div>
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-black-light-300 font-sans"
        >
          <thead className="bg-black-light-200 text-white">
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={idx}
                  >
                    <div className="flex items-center justify-between py-4 pl-4 text-left font-medium tracking-wider gap-1 ">
                      <span>{column.render("Header")}</span>
                      <div className="pr-4 border-r border-solid border-black-light-300">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <Image
                              src={"/assets/img/arrow-down.svg"}
                              width={24}
                              height={24}
                              alt="arrow-up"
                            />
                          ) : (
                            <Image
                              src={"/assets/img/arrow-down.svg"}
                              width={24}
                              height={24}
                              alt="arrow-down"
                              className="rotate-180"
                            />
                          )
                        ) : (
                          <>
                            <Image
                              src={"/assets/img/arrow-down.svg"}
                              width={24}
                              height={24}
                              alt="arrow-down"
                              className="rotate-180"
                            />
                            <Image
                              src={"/assets/img/arrow-down.svg"}
                              width={24}
                              height={24}
                              alt="arrow-down"
                              className="mt-[-15px]"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="divide-y divide-black-light-300 bg-black-light-100 text-black-300"
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) =>
                  headerGroups.map((headerGroup, idx) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="p-4"
                      key={idx}
                    >
                      {headerGroup.headers.map((column, idx) => (
                        <th
                          className="p-4 text-left text-xs font-normal"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          key={idx}
                        >
                          <div className="flex items-center justify-between">
                            <div className="w-full h-4 bg-gray-600 animate-pulse"></div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))
                )
              : rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={i}
                      className="cursor-pointer "
                    >
                      {row.cells.map((cell, idx) => {
                        const rowItem = rowCustomize.find(
                          (item) => item.rownum === idx
                        );
                        if (rowItem) {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={idx}
                              className="p-4 whitespace-nowrap"
                            >
                              <rowItem.component data={row.original} />
                            </td>
                          );
                        } else {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={idx}
                              className="p-4 whitespace-nowrap text-black-300 font-normal text-paragraph3"
                            >
                              {cell.value}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
