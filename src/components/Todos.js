import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
})

export const getAllTodos = async ()=> await axiosInstance.get('/todo')
export const getTodoById = async (id)=> await axiosInstance.get(`/todo/${id}`)
export const addTodo = async (data)=> await axiosInstance.post('/todo', data)
export const updateTodo = async (id, data)=> await axiosInstance.put('/todo/${id}', data)
export const deleteTodo = async (id)=> await axiosInstance.delete('/todo/${id}')