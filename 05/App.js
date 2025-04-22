import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      {/* Ex.7 根據組件分解圖，規劃 layout */}
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form() {
  // Ex.12 透過綁定狀態變數，操控表單元素的值
  // (1) 定義狀態變數
  const [description, setdescription] = useState("TEST");

  // Ex.11 點擊 <button> ADD 送出表單資料
  // (3) React 的事件函數，調用時會自動帶入事件參數 e
  function handleSubmit(e) {
    // (2) 送出資料時，防止頁面重新載入
    e.preventDefault();
    console.log(e);
  }

  return (
    // Ex.11
    // (1) 監聽 submit 事件
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* Ex.10 連續渲染20個 <option> */}
      <select>
        {/* (1) Array.from() 建立一個 array 包含元素1~20 */}
        {/* (2) xxx.map() 來連續渲染20個 <option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          // (3) 連續渲染的元素，記得加 key
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Ex.12 */}
      {/* (2) 綁定狀態變數到 input 的值 */}
      {/* (3) onChange 事件監聽，文字一有變動就改變狀態變數 */}
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* Ex.8 利用 map() 來依序渲染每個 item */}
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item: { id, description, quantity, packed } }) {
  return (
    <li>
      {/* Ex.9 將 item 物件的屬性值，以 JSX 寫入標籤 */}
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {id} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
