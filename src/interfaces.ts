export interface ITodo {
    title: string,
    id: number,
    completed:boolean
}
export interface IState{
    people: {
    name: string,
    age: number,
    url: string,
    note?: string,
    id:number
    }[]
}