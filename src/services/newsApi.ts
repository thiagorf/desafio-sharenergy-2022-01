import { api } from "./api"


export const getTotalCount = async () => {
    const response = await api.get("/articles/count");

    return response.data;
}

export const getTotalSearchCount = async (text: string) => {
    const response = await api.get(`/articles?title_contains=${text}&_limit=15000`)

    return response.data.length;
}


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

export const getNextNewsMatch = (quantity = "10", text: string) =>async (skip: number) => {
    const response = await api.get(`/articles?_limit=${quantity}&_start=${skip}&title_contains=${text}`)

    return response.data
}

export const searchForArticle = async (text: string) => {
    const response = await api.get(`/articles?title_contains=${text}`)

    return response.data
}