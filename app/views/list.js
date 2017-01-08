import veact from 'veact'
import { assign } from 'lodash'
import { state, removeTodo, updateTodo, toggleCompleted } from '../controllers'
import { type } from './styles'

const view = veact()

const { ul, li, div, button, input } = view.els()

view.styles({
  li: assign(type('body'), {
    border: '1px solid #eee',
    margin: '10px 0',
    padding: '10px'
  }),
  ul: {
    listStyle: 'none'
  },
  x: assign(type('body'), {
    float: 'right'
  })
})

view.render(() =>
  div(
    ul('.ul',
      state.get('todos').map((todo) =>
        li('.li',
          input({
            type: 'checkbox',
            onClick: () => toggleCompleted(todo)
          }),
          input({
            defaultValue: todo.body,
            onChange: (e) => updateTodo(todo._id, e.target.value)
          }),
          button('.x', {
            onClick: () => removeTodo(todo._id)
          }, 'X')))))
)

export default view()
