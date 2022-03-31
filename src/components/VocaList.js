import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { deleteVocaFB } from "../redux/modules/vocas";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';


function VocaList({ props }) {

    const data = useSelector((state) => state.vocas.list);

    const dispatch = useDispatch();

    console.log(data)


    return (
        <>
    <Container maxWidth="xl">
        <div className="vocaList">
                <Grid container spacing={3}
                                direction="row-reverse"
                                justifyContent="center"
                                alignItems="flex-start">
                    {data.map((vCard, index) => (
                      
                      <Card style={{
                        minWidth: '450px',
                        margin: '20px',
                        padding: '10px',
                        backgroundColor: '#ECEFF1'}} key={index} variant="outlined">
                      <CardContent>
                        <Grid 
                         container
                         direction="column"
                         justifyContent="flex-start"
                         alignItems="flex-start">
                        <Typography style={{margin:"10px"}} variant="h5" component="h2">
                        {vCard.title}
                        </Typography>
                        <Typography style={{margin:"10px"}} color="textSecondary">
                        {vCard.pro}
                        </Typography>
                        <Typography style={{margin:"10px"}} variant="body2" component="p">
                        {vCard.jus}
                        </Typography>
                        <Typography style={{margin:"5px 10px"}} color="primary" variant="body2" component="p">
                        {vCard.ex1}
                        </Typography>
                        <Typography style={{margin:"5px 10px"}} color="primary" variant="body2" component="p">
                        {vCard.ex2}
                        </Typography>
                        </Grid>
                      </CardContent>
                      <CardActions>
                      <Button onClick={() => {
                                dispatch(deleteVocaFB(vCard.id));
                            }}><DeleteForeverIcon /></Button>
                      </CardActions>
                    </Card>     

                    ))}
                    </Grid>
        </div>
    </Container>
    </>
    )
}

export default VocaList;