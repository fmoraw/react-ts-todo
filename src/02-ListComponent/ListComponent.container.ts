import { connect } from "react-redux"
import { Todo, TodoState } from "../types";
import { reduxForm, reset } from "redux-form";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "../setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo, fetchRequestUpdateTodo } from '../todoActions';

const formName = 'todoForm';

const FormComponent = reduxForm<any, any>({
    form: formName,
    initialValues: {
        status: 'active'
    }
  })(TodoListComponent);
  
const mapStateToProps = function(state: any) {
    return {
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setTodoDone: (todo: Todo) => dispatch(fetchRequestUpdateTodo(todo)),
        fetchTodos: () => dispatch(fetchRequestFindTodos()),
        onSubmit: (todo: Todo) => dispatch(fetchRequestCreateTodo(todo)).then(() => dispatch(reset(formName))),
    }
}

interface DispatchToProps {
    fetchTodos: () => void
    onSubmit: (todo : Todo) => void
}

export default connect<TodoState, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(FormComponent)
