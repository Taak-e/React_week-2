import React from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteVocaFB} from "../redux/modules/vocas";

function VocaList ({props}) {

    const data = useSelector((state) => state.vocas.list);
    
    const dispatch = useDispatch();
 
    console.log(data)
    
    
    return(
        <div>
        <ul className="card">
            
            {data.map((vCard, index) => (

                <li key={index} style={{

                    listStyle : "none",
                    border : "10px solid black",
                    textAlign : "left",
                    maxWidth : "400px",
                    minHeight : "250px",
                    margin: "30px"
                }} >
                    <h1>{vCard.title}</h1>
                    <span>{vCard.pro}</span>
                    <p>{vCard.jus}</p>
                    <div>{vCard.ex1}</div>
                    <div>{vCard.ex2}</div>
                    <button>체크</button>
                    {/* <button onClick={() =>
                        
                        hist.push("/voca/"+index)}>수정하기</button> */}
                    <button onClick={() => {
                           dispatch(deleteVocaFB(vCard.id));
                    }}>삭제</button>
                </li>

            ))}
                       
        </ul>

        <Link to="/addVoca"><button>추가하기</button></Link>
        </div>
    )}

export default VocaList;