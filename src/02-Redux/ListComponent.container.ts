import { connect } from "react-redux"
import { Todo, TodoState } from "./types";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "./setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo, fetchRequestUpdateTodo, TodoActions } from './todoActions';
import { Dispatch } from "react";

const mapStateToProps = function(state: ApplicationState): MapStateToProps {
    return {
        // add todos as a property and get the todos from the state
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>): DispatchToProps => {
    return {
        setTodoDone: (todo: Todo) => dispatch(fetchRequestUpdateTodo(todo)),
        fetchTodos: () => {},
        // add fetchTodos as a property and dispatch requestFindTodos
        // add onSubmit as a property and dispatch fetchRequestCreateTodo
        onSubmit: () => {}
    }
}

interface MapStateToProps {
   // add the todos type
}

interface DispatchToProps {
    // add fetchTodos as a type
    fetchTodos: any
    // add onSubmit as a type
    onSubmit: any
    setTodoDone: (todo: Todo) => void
}

export default connect<MapStateToProps, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(TodoListComponent)
