export type ITodo = {
  _id: string;
  title: string;
  done: boolean;
  _createAt: Date;
  _updateAt: Date;
};

export type ITodoState = {
  items: ITodo[] ;
};

export type ITodoUpadate = {
  title?: string;
  dine?: string;
};

export type IAddTodo = Pick<ITodo, "title">;
