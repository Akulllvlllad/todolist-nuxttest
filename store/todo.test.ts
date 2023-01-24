import { setActivePinia, createPinia } from "pinia";
import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";

import { useTodoStore } from "./todo";
import { ITodo } from "./todo.interface";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("create a store", () => {
    expect(store).toBeDefined();
  });
  test("init whith empty items", () => {
    expect(store.items).toStrictEqual([]);
  });
  
});
