import { connect } from "react-redux"
import { Todo } from "./types";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "./setupMiddleware";
import { fetchRequestFindTodos, fetchRequestUpdateTodo } from './todoActions';

// Step 2-1: wrap component with reduxForm
// Step 2-2: add form Name
// Step 2-3: add validation for the form
// Step 2-4: add onSubmit function -> createTodo
// Step 2-4: reset form after submitting
  
const mapStateToProps = function(state: ApplicationState) {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setTodoDone: (todo: Todo) => dispatch(fetchRequestUpdateTodo(todo)),
        fetchTodos: () => dispatch(fetchRequestFindTodos()),
    }
}

interface MapStateToProps {
    todos: Todo[]
}

interface DispatchToProps {
    fetchTodos: () => void
    setTodoDone: (todo: Todo) => void
}

export default connect<MapStateToProps, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(TodoListComponent)
