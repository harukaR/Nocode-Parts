import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const addStyles = [
    {
      id: 1,
      value: "font-weight",
      click: (e) =>
        setAddClass01(e.currentTarget.id === "1" ? !AddClass01 : AddClass01)
    },
    {
      id: 2,
      value: "text-align",
      click: (e) =>
        setAddClass02(e.currentTarget.id === "2" ? !AddClass02 : AddClass02)
    },
    {
      id: 3,
      value: "color",
      click: (e) =>
        setAddClass03(e.currentTarget.id === "3" ? !AddClass03 : AddClass03)
    },
    {
      id: 4,
      value: "font-style",
      click: (e) =>
        setAddClass04(e.currentTarget.id === "4" ? !AddClass04 : AddClass04)
    },
    {
      id: 5,
      value: "text-decoration",
      click: (e) =>
        setAddClass05(e.currentTarget.id === "5" ? !AddClass05 : AddClass05)
    },
    {
      id: 6,
      value: "background-color",
      click: (e) =>
        setAddClass06(e.currentTarget.id === "6" ? !AddClass06 : AddClass06)
    },
    {
      id: 7,
      value: "line-height",
      click: (e) =>
        setAddClass07(e.currentTarget.id === "7" ? !AddClass07 : AddClass07)
    },
    {
      id: 8,
      value: "letter-spacing",
      click: (e) =>
        setAddClass08(e.currentTarget.id === "8" ? !AddClass08 : AddClass08)
    },
    {
      id: 9,
      value: "writing-mode",
      click: (e) =>
        setAddClass09(e.currentTarget.id === "9" ? !AddClass09 : AddClass09)
    },
    {
      id: 10,
      value: "link",
      click: (e) =>
        setAddClass09(e.currentTarget.id === "9" ? !AddClass09 : AddClass09)
    }
  ];

  //クラス付与用のstate
  const [AddClass01, setAddClass01] = useState(false);
  const [AddClass02, setAddClass02] = useState(false);
  const [AddClass03, setAddClass03] = useState(false);
  const [AddClass04, setAddClass04] = useState(false);
  const [AddClass05, setAddClass05] = useState(false);
  const [AddClass06, setAddClass06] = useState(false);
  const [AddClass07, setAddClass07] = useState(false);
  const [AddClass08, setAddClass08] = useState(false);
  const [AddClass09, setAddClass09] = useState(false);
  const [AddClass10, setAddClass10] = useState(false);

  // ドラックで選択した要素にspanを挿入する関数
  const eleRef = useRef(null);

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    let newText = eleRef.current.innerHTML;
    newText = newText.replace(
      selectedText,
      `<span class="${AddClass01 ? `${addStyles[0].value}" ` : ""}${
        AddClass02 ? `${addStyles[1].value}" ` : ""
      }${AddClass03 ? `${addStyles[2].value}" ` : ""}${
        AddClass04 ? `${addStyles[3].value}" ` : ""
      }${AddClass05 ? `${addStyles[4].value}" ` : ""}${
        AddClass06 ? `${addStyles[5].value}" ` : ""
      }${AddClass07 ? `${addStyles[6].value}" ` : ""}${
        AddClass08 ? `${addStyles[7].value}" ` : ""
      }${AddClass09 ? `${addStyles[8].value}" ` : ""}${
        AddClass10 ? `${addStyles[9].value}" ` : ""
      }">${selectedText}</span>`
    );
    console.log(newText); //確認用
    eleRef.current.innerHTML = newText;
  };

  return (
    <>
      <div className="App" ref={eleRef} onMouseUp={handleMouseUp}>
        <p>クラス付与改良版</p>
      </div>
      {addStyles.map((item, i) => {
        return (
          <button key={item.id} onClick={item.click} id={item.id}>
            {item.value}
          </button>
        );
      })}
    </>
  );
}
