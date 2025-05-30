import { FC } from "react";
import { Props, Priority, TodoItem } from "./TodoItem";

export interface PropsLst {
  propsLst: Props[];
}

export const TodoList: FC<PropsLst> = ({ propsLst }) => {
  // 3. 分為 "高、中、低優先" 共3組
  const highPriorityItems = propsLst.filter(
    (item) => item.priority === Priority.HIGH
  );
  const mediumPriorityItems = propsLst.filter(
    (item) => item.priority === Priority.MEDIUM
  );
  const lowPriorityItems = propsLst.filter(
    (item) => item.priority === Priority.LOW
  );

  return (
    <>
      {/* 高優先 todo-item */}
      <p className="title is-4">HIGH</p>
      <div className="columns is-multiline">
        {highPriorityItems.map((props: Props) => (
          <TodoItem
            title={props.title}
            content={props.content}
            priority={props.priority}
            resolved={props.resolved}
          />
        ))}
      </div>
      <hr className="has-background-grey-lighter my-4"></hr>
      {/* 中優先 todo-item */}
      <p className="title is-4">MEDIUM</p>
      <div className="columns is-multiline">
        {mediumPriorityItems.map((props: Props) => (
          <TodoItem
            title={props.title}
            content={props.content}
            priority={props.priority}
            resolved={props.resolved}
          />
        ))}
      </div>
      <hr className="has-background-grey-lighter my-4"></hr>
      {/* 低優先 todo-item */}
      <p className="title is-4">LOW</p>
      <div className="columns is-multiline">
        {lowPriorityItems.map((props: Props) => (
          <TodoItem
            title={props.title}
            content={props.content}
            priority={props.priority}
            resolved={props.resolved}
          />
        ))}
      </div>
    </>
  );
};
