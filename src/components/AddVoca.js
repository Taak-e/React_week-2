import React, { useEffect, useRef } from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { addVocaFB } from "../redux/modules/vocas";


function AddVoca () {

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    
    useEffect (() => {
        input1.current.focus();
    }, []);

    const dispatch = useDispatch();

    
    let histroy = useHistory();

    const addVocaList = () => {
        
        let ab = input1.current.value;
        let cd = input2.current.value;
        let ef = input3.current.value; 
        let gh = input4.current.value;
        let ij = input5.current.value;
        // {ab, cd, ef, gh, ij}
        console.log(ab,cd,ef,gh,ij);
        let dictionary = {
            title: ab, pro: cd, jus: ef, ex1: gh, ex2: ij
        };
        
        dispatch(addVocaFB(dictionary));
        // dispatch(createVoca(dictionary));
        histroy.goBack();
        };

    return(
        <div>
            <div style={{
                listStyle : "none",
                border : "10px solid black",
                textAlign : "left",
                maxWidth : "400px",
                minHeight : "250px",
                margin: "30px"
            }}>
                
                <input type="text" ref={input1}/>
                <input type="text" ref={input2}/>
                <input type="text" ref={input3}/>
                <input type="text" ref={input4}/>
                <input type="text" ref={input5}/>
                <button onClick={addVocaList}>
                    등록하기</button>
        </div>
    </div>
    )}

export default AddVoca;