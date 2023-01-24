import { defineStore } from "pinia";
import { ITodoState, ITodo, IAddTodo, ITodoUpadate } from "./todo.interface";
import { v4 as uuid } from "uuid";

export const useTodoStore = defineStore("todoStore", {
  state: (): ITodoState => ({
    items: [],
  }),

  getters: {
    getById: (state: ITodoState) => (id: string) => {
      return state.items?.find((item) => item._id === id);
    },
    getOrderedTodos: (state: ITodoState) => {
      return state.items?.sort(
        (a: ITodo, b: ITodo) =>
          a._createAt.getMilliseconds() - b._createAt.getMilliseconds()
      );
    },
  },
  actions: {
    add(partialTodo: IAddTodo) {
      const todo: ITodo = {
        _id: uuid(),
        done: false,
        _createAt: new Date(),
        _updateAt: new Date(),
        ...partialTodo,
      };
      this.items.push(todo);
    },

    remove(id: string) {
      this.items = this.items.filter((todo) => todo._id !== id);
    },

    update(id: string, update: ITodoUpadate) {
      const index = this.items.findIndex((item) => item._id === id);
      this.items[index] = {
        ...this.items[index],
        ...update,
        _updateAt: new Date(),
      };
    },
  },
});
