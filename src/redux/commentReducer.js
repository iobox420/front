const initialState = []

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export const commentReducerAC = (text, id) => ({
  type: 'TEXT-FIELD-DATA-ADD',
  id: id,
  payload: text,
})

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEXT-FIELD-DATA-ADD': {
      let newState = state.filter((currentEl, i, arr) => {
        if (currentEl.id !== action.id) {
          return true
        }
      })
      let result = [
        ...newState,
        {
          id: action.id,
          text: action.payload,
        },
      ]
      return result
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    default:
      return state
  }
}
