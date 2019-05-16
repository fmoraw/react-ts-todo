import { connect } from "react-redux"
import { Todo, TodoState } from "./types";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "./setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo, fetchRequestUpdateTodo, TodoActions } from './todoActions';
import { Dispatch } from "react";

const mapStateToProps = function(state: ApplicationState): MapStateToProps {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>): DispatchToProps => {
    return {
        setTodoDone: (todo: Todo) => dispatch(fetchRequestUpdateTodo(todo)),
        fetchTodos: () => dispatch(fetchRequestFindTodos()),
        onSubmit: (todo: Todo) => dispatch(fetchRequestCreateTodo(todo)),
    }
}

interface MapStateToProps {
    todos: Todo[]
}

interface DispatchToProps {
    fetchTodos: () => void
    setTodoDone: (todo: Todo) => void
    onSubmit: (todo : Todo) => void
}

export default connect<MapStateToProps, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(TodoListComponent)
