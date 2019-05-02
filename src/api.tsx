import {Todo} from "./types"

export class ApiClient {

    private dispatchBackendUrl = process.env.REACT_APP_TOURS_API
    private transportOrderBackendUrl = process.env.REACT_APP_TRANSPORT_ORDERS_API

    public createToDo = (todo: Todo): Promise<{}> => {
        const url = new URL(`${this.dispatchBackendUrl}/todo/${todo.id}`)

        const requestInit = {
            body: JSON.stringify(todo),
            headers: { "Content-Type": "application/json" },
            method: "PUT",
        }
        return this.authorizedFetch(url, requestInit)
    }

    // public getTodos = (): Promise<Todo[]> => {

    // }

    private authorizedFetch = (url: URL, requestInit: RequestInit): Promise<Response> => {

        const accessToken = "";

        const newRequestInit = {
            ...requestInit,
            headers: {
                ...(requestInit.headers || {}),
                Authorization: `Bearer ${accessToken}`,
            },
        }
        return fetch(url.href, newRequestInit).then((response) => {
            if (response.ok) {
                return Promise.resolve(response)
            } else {
                return Promise.reject({})
            }
        })
    }

}

export default new ApiClient()
