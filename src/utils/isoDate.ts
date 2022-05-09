export const idealDateFormat = (date:string) => {
    if(date) {
        return new Date(date).toISOString().split("T")[0]
    }
    return null
}