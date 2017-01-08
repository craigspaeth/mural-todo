import veact from 'veact'
import { assign } from 'lodash'
import { addTodo } from '../controllers'
import { type } from './styles'
import List from './list'

const view = veact()

const { div, h1, list, input } = view.els({ list: List })

view.styles({
  h1: assign(type('header'), {
    textAlign: 'center',
    margin: '20px 0'
  }),
  container: {
    width: '600px',
    margin: 'auto'
  },
  input: assign(type('body'), {
    width: '100%',
    border: '1px solid #eee',
    padding: '10px',
    display: 'block'
  })
})

view.render(() =>
  div('.container',
    h1('.h1', 'Todos'),
    input('.input', {
      placeholder: 'Add a todo',
      onKeyUp: addTodo
    }),
    list())
)

export default view()
