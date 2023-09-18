//funcion para hacer peticiones
import axios from "axios";

const tasksApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v3/tasks"
})

export const getAllTasks = () =>  tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}/`)

export const createTask = (task) => tasksApi.post("/", task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);