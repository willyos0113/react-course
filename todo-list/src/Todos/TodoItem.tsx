import { FC } from "react";

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  title: string;
  content: string;
  priority: Priority;
  resolved: boolean;
}

export const TodoItem: FC<Props> = ({ title, content, priority, resolved }) => {
  const switchClasses = (priority: Priority, resolved: boolean): string => {
    // 1. 判斷解決則變灰色
    if (resolved === true) return "is-grey";
    // 2. 判斷高、中、低優先對應顏色
    switch (priority) {
      case Priority.LOW:
        return "is-info";
      case Priority.MEDIUM:
        return "is-warning";
      case Priority.HIGH:
        return "is-danger";
    }
  };

  return (
    <>
      {/* 每張 todo-item 的外型 */}
      <div className="column is-3">
        <article className={`message ${switchClasses(priority, resolved)}`}>
          <div className="message-header">
            <p>{title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            <p>{content}</p>
          </div>
        </article>
      </div>
    </>
  );
};
