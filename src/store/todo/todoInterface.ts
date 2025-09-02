
export interface ITodo {
    id: number,
    title: string,
    status: "Done" | "Loading";
}

export type TodoStateType = ITodo[];
