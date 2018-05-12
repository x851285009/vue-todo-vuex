import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL_TODOS,
  DELETE_COMPLETE_TODOS
} from './mutation-types'
export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  }
}