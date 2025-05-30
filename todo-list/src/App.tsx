import "bulma/css/bulma.min.css";
import { TodoList } from "./Todos/TodoList";
import { Props } from "./Todos/TodoItem";
import { getTodoItems, TodoItemModel } from "./Todos/utils/getTodoItems";

export const App = () => {
  const models: TodoItemModel[] = getTodoItems(10);
  let propsLst: Props[] = [];
  // 4. TodoItemModel 型態中，只有4個欄位匹配 Props 型態，需要轉換為 Props 型態
  models.forEach((item) => {
    propsLst.push({
      title: item.title,
      content: item.content,
      priority: item.priority,
      resolved: item.resolved,
    });
  });

  return (
    <>
      <TodoList propsLst={propsLst} />
    </>
  );
};
