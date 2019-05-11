import { connect } from "react-redux"
import { Todo } from "../types";
import { reduxForm, reset } from "redux-form";
import TodoListComponent from "./TodoList"
import { ApplicationState } from "../setupMiddleware";
import { fetchRequestFindTodos, fetchRequestCreateTodo, fetchRequestUpdateTodo } from '../todoActions';

const formName = 'todoForm';

const validate = (values: any) => {
    const errors: any = {}
    if (!values.text) {
        errors.text = 'Bitte ausfüllen'
    } else if (values.text.length > 40) {
        errors.text = 'Text ist zu lang.'
    }
    return errors
}

interface ReduxFormData {
    form: string
    validate: () => void
}

const FormComponent = reduxForm<ReduxFormData, DispatchToProps & MapStateToProps & any>({
    form: formName,
    validate
  })(TodoListComponent);
  
const mapStateToProps = function(state: ApplicationState) {
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

interface MapStateToProps {
    todos: Todo[]
}

interface DispatchToProps {
    fetchTodos: () => void
    setTodoDone: (todo: Todo) => void
    onSubmit: (todo : Todo) => void
}

export default connect<MapStateToProps, DispatchToProps, {}, ApplicationState>(mapStateToProps, mapDispatchToProps)(FormComponent)
