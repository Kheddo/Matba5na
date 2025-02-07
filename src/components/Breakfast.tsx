import fakeData from "../data/Breakfast.json";
import { useMemo } from "react";
import { Column, useTable } from "react-table";
import { Meal } from "../types/Meal";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Breakfast() {
    const data = useMemo(() => fakeData, []);
    const columns = useMemo<Column<Meal>[]>(() => [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Price",
        accessor: "price",
    },
], []);

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});
  return (
    <div className="Breakfast">
        <div className="container">
            <Table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  );
};
