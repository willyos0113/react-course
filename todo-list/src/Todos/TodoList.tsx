import { FC, JSX } from "react";
import { Priority, TodoItem } from "./TodoItem";
import { getTodoItems, TodoItemModel } from "./utils/getTodoItems";

export const TodoList: FC = () => {
  // 3. 從資料源取得資料
  const itemsLst: TodoItemModel[] = getTodoItems(10);

  // 4. 判斷 "高、中、低優先" 共3個組別
  const itemsToRender = (priorityLevel: Priority): JSX.Element[] => {
    return itemsLst
      .filter((item) => item.priority === priorityLevel)
      .map((item) => <TodoItem {...item} />);
  };

  // 5. 判斷 "標題" 文字
  const titleToRender = (priorityLevel: Priority): string => {
    return priorityLevel === Priority.HIGH
      ? "HIGH"
      : priorityLevel === Priority.MEDIUM
      ? "MEDIUM"
      : priorityLevel === Priority.LOW
      ? "LOW"
      : "ERROR";
  };

  // 6. 迭代 Priority 渲染 高、中、低優先 共3個組別
  const levelGroupToRender = Object.values(Priority)
    .filter((prior) => typeof prior === "number")
    .map((level) => (
      <>
        <p className="title is-4">{titleToRender(level)}</p>
        <div className="columns is-multiline">{itemsToRender(level)}</div>
        <hr className="has-background-grey-lighter my-4"></hr>
      </>
    ));

  return (
    <>
      {/* 某一優先順序的 todo-list */}
      {levelGroupToRender}
    </>
  );
};
