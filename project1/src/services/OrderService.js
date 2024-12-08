import axios from "axios";
const REST_API_BASE_URL='http://localhost:8081/api/orders';


export const createOrder = (order) => axios.post(REST_API_BASE_URL,order);
export const listOrders = () => axios.get(REST_API_BASE_URL);