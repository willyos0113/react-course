import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <>
      <div className="section">
        <div className="columns">
          <TodoItem
            title={"完成 Node.js 網站架構設計"}
            content={
              "設計並搭建網站的基本架構，包括設定 Express 框架，路由配置，以及基本的錯誤處理機制。"
            }
            priority={3}
            resolved={false}
          />
          <TodoItem
            title={"學習 TypeScript 類型系統"}
            content={
              "深入了解 TypeScript 的類型系統，特別是泛型、接口和型別定義文件 (.d.ts) 的使用。"
            }
            priority={2}
            resolved={false}
          />
          <TodoItem
            title={"優化網站前端性能"}
            content={
              "分析並優化網站的加載速度，進行圖片壓縮、懶加載（lazy loading）等優化操作，提升用戶體驗。"
            }
            priority={1}
            resolved={true}
          />
        </div>
      </div>
    </>
  );
};
