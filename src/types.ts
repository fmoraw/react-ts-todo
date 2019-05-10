export interface Todo {
    readonly id: string
    text: string
    status: string
}

export interface TodoState {
    todos: Array<Todo>
}
