import { connect } from "react-redux"
import { Todo, TodoState } from "../types";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "../setupMiddleware";
import { fetchRequestFindTodos } from '../todoActions';

const mapStateToProps = function(state: any) {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchTodos: () => dispatch(fetchRequestFindTodos())
    }
}

interface DispatchToProps {
    fetchTodos: () => void
}

export default connect<TodoState, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(TodoListComponent)
