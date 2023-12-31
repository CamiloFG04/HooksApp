import { PropTypes } from 'prop-types'
import { useForm } from '../../hooks/useForm'
export const TodoAdd = ({onNewTodo}) => {
    const {description,onInputChange, onResetForm} = useForm({
        description: '',
    })
    const onFormSubmit = (event) => {
        event.preventDefault()
        if(description.length <= 1) return
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }
        onNewTodo(newTodo)
        onResetForm()
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Agregar tarea"
            name='description'
            value={description}
            onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
            Agregar
        </button>
    </form>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}
