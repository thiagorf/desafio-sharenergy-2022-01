import { QueryParams } from "../shared/types";
import { api } from "./api"


export const getTotalCount = async () => {
    const response = await api.get("/articles/count");

    return response.data;
}

export const getContent = async (params?: QueryParams) => {
    const response = await api.get("/articles", {
        params
    })

    return response.data;
}

export const getContentCount = async (params?: QueryParams) => {
    const getAllPossibleMatchesParams = {
        ...params,
        _limit: "15000"
    } 

    const response = await api.get("/articles", {
        params: getAllPossibleMatchesParams
    })

    return response.data.length;
}

export const getContentBy = async (id: string) => {
    const response = await api.get(`/articles/${id}`)

    return response.data
}
