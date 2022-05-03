import { api } from "./api"




export const getLatestArticles = async (quantity: string) => {
    const response = await api.get(`/articles?_limit=${quantity}`);

    return response.data
}

export const getLatest = async (quantity: number) => {
    const response = await api.get(`/articles?_limit=${quantity}`)

    return response.data
} 

export const getNextArticles = async (skip: number) => {
    const response = await api.get(`/articles?_start=${skip}`)

    return response.data
} 

export const getNextNews =  (quantity = "10") => async (skip: number) => {

    const response = await api.get(`/articles?_limit=${quantity}&_start=${skip}`)

    return response.data
}