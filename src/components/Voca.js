import React from "react";
import { useSelector } from "react-redux"


function Voca() {

    const data = useSelector((state) => state.vocas.list);
  
    

    return (
        <div>
            <h1>수정하기</h1>
    <ul className="card">
        <li style={{
            listStyle : "none",
            border : "10px solid black",
            textAlign : "left",
            maxWidth : "400px",
            minHeight : "250px",
            margin: "30px"
        }} key={1}>

            <h1>{data[0].title}</h1>
            <span>페이지</span>
            <p>의미</p>
            <div>예시</div>
            <div>예시</div>

        </li>
    </ul>
    </div>
)}

export default Voca;