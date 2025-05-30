import _ from "lodash";

export interface TodoItemModel {
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
  createdAt: number;
  lastModifiedAt: number;
}

// 取得一個 [TodoItemModel, TodoItemModel, ...] 型態
// 每個 TodoItemModel 型態包含每個 todo 事項的所有欄位
export const getTodoItems = (n: number): TodoItemModel[] =>
  _.range(n).map((i) => {
    const t = Date.now();
    return {
      title: `title ${i}`,
      content: `content ${i} `.repeat(10),
      priority: i % 3,
      resolved: !(i % 7),
      createdAt: t,
      lastModifiedAt: t,
    };
  });
