import axios from "axios";
import { Meal } from "../types/Meal";

const URL = "http://localhost:3000/menu/";

export async function getMenuItems (type: string) : Promise<Meal[]>{
    const response = await axios.get(URL + type);
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}