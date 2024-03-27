// Служебные переменные
import parseURL from "../functions/parseURL";

const result = parseURL(process.env.SERVER_URL);
export const API_URL = result;
