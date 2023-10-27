export interface TagProps {
    name: string
}

export interface ShowMoreProps{
    pageNumber: number,
    isNext: boolean,
    setLimit: (limit:number)=>void
}