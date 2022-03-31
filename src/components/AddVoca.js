import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { addVocaFB } from "../redux/modules/vocas";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        histroy.goBack();
        
        };

    return(
        <div style={{margin:"auto"}}>
            <Container maxWidth="sm">
                <div style={{
                    border : "10px solid black",
                    borderRadius : "35px",
                    minHeight : "450px",
                    margin:"auto"
                }}>
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                    
                    <TextField style={{margin: "10px"}} inputRef={input1}
                    id="standard-textarea"
                    label="단어명"
                    placeholder=""
                    multiline
                    />

                    <TextField style={{margin: "10px"}}  inputRef={input2}
                    id="standard-textarea"
                    label="발음"
                    placeholder=""
                    multiline
                    />
                    
                    <TextField style={{margin: "10px"}} inputRef={input3}
                    id="standard-textarea"
                    label="의미"
                    placeholder=""
                    multiline
                    />
                    
                    <TextField style={{margin: "10px"}} inputRef={input4}
                    id="standard-multiline-static"
                    label="첫번째 예문"
                    multiline
                    rows={4}
                    defaultValue=""
                    />

                    <TextField style={{margin: "10px"}} inputRef={input5}
                    id="standard-multiline-static"
                    label="두번째 예문"
                    multiline
                    rows={4}
                    defaultValue=""
                    />
                    
               
                    <Button style={{margin: "30px"}} 
                    onClick={addVocaList} variant="contained" size="medium" color="primary" >
                        추가하기
                    </Button>

                </Grid>
        </div>
            </Container>
    </div>
    )}

export default AddVoca;