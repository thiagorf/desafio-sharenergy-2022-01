import React from "react"

export interface NewsResponse {
    id:	number
    featured: boolean
    title:string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
}

export interface FormProps {
    formData: SearchParams,
    setFormData: React.Dispatch<React.SetStateAction<SearchParams>>
}

export interface QueryParams extends SearchParams {
    _limit: string;
    _start: number;
}

export interface SearchParams extends DateRangeParams{
    title_contains: string | null
}

export interface DateRangeParams {
    publishedAt_lte: string |null,
    publishedAt_gte: string | null
}