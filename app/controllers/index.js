import Body from '../views/body'
import Lokka from 'lokka'
import Transport from 'lokka-transport-http'
import tree from 'universal-tree'
import { reject } from 'lodash'

const api = new Lokka({
  transport: new Transport(process.env.APP_URL + '/api')
})

export const state = tree({
  todos: []
})

export const index = async (ctx) => {
  const { todos } = await api.query(`{
    todos { _id body }
  }`)
  state.set({ todos })
  ctx.render({ body: Body })
}

export const removeTodo = async (_id) => {
  await api.mutate(`{
    deleteTodo(_id: "${_id}") { _id }
  }`)
  const todos = reject(state.get('todos'), { _id })
  state.set({ todos })
}

export const updateTodo = async (_id, body) => {
  api.mutate(`{
    updateTodo(_id: "${_id}" body: "${body}") { _id body }
  }`)
}

export const addTodo = async (e) => {
  if (e.key !== 'Enter') return
  const { createTodo: todo } = await api.mutate(`{
    createTodo(body: "${e.target.value}") { _id body }
  }`)
  state.select('todos').push(todo)
}

export const toggleCompleted = async (todo) => {
  api.mutate(`{
    updateTodo(_id: "${todo._id}" completed: ${!todo.completed}) { _id }
  }`)
}
