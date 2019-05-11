import { connect } from "react-redux"
import { Todo, TodoState } from "../types";
import { reduxForm, reset } from "redux-form";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "../setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo } from '../todoActions';

const formName = 'todoForm';

const FormComponent = reduxForm<any, any>({
    form: formName,
  })(TodoListComponent);
  
const mapStateToProps = function(state: any) {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchTodos: () => dispatch(fetchRequestFindTodos()),
        onSubmit: (todo: any) => dispatch(fetchRequestCreateTodo(todo)).then(() => dispatch(reset(formName))),
        addTodo: (todo: Todo) => dispatch(fetchRequestCreateTodo(todo))
    }
}

interface DispatchToProps {
    fetchTodos: () => void
    addTodo: (todo : Todo) => void
}

export default connect<TodoState, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(FormComponent)
