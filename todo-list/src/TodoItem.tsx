import type { FC } from "react";

interface Props {
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
}
export const TodoItem: FC<Props> = ({ title, content, priority, resolved }) => {
  return (
    <>
      <div className="column is-3">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">{title}</p>
            <button className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div className="card-content">
            <div className="content">
              {content}
              <br />
              <button>優先程度: {priority}</button>
              <button>解決與否: {resolved}</button>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              儲存
            </a>
            <a href="#" className="card-footer-item">
              編輯
            </a>
            <a href="#" className="card-footer-item">
              刪除
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};
