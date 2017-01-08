import { model, string, boolean } from 'mojol'

const todo = model('Todo', {
  body: string().max(150),
  completed: boolean()
})

export default [todo]
