import { useEffect, useState } from "react";
import { Meal } from "../types/Meal";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getMenuItems } from "../services/MenuService";

export default function Rice() {
    const [data, setData] = useState<Meal[]>([]);
    useEffect(() => {
        getMenuItems('Rice').then(
            items => {setData(items)}
        )
    })
  return (
        <Table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{textAlign: "right"}}>Price</th>
                    </tr>
                </thead>
                {data.map((data) => {
                    return (
                        <tbody key={data._id}>
                            <tr key={data._id}>
                                <td>{data.name}</td>
                                <td style={{textAlign: "right"}}>{data.price}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
  );
};
