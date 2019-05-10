import { connect } from "react-redux"
import { Todo, TodoState } from "../types";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "../setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo } from '../todoActions';

const mapStateToProps = function(state: any) {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchTodos: () => dispatch(fetchRequestFindTodos()),
        addTodo: (todo: Todo) => dispatch(fetchRequestCreateTodo(todo))
    }
}

interface DispatchToProps {
    fetchTodos: () => void
    addTodo: (todo : Todo) => void
}

export default connect<TodoState, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(TodoListComponent)
