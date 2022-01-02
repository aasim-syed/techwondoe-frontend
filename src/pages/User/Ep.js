import React from 'react'
import TechwondoeForm from "./EpForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import styled from "styled-components"
const useStyles = makeStyles(theme => ({
    pageContent: {
        marginLeft: theme.spacing(-40),
        marginTop: theme.spacing(60),
        paddingLeft: theme.spacing(11),
        paddingTop: theme.spacing(1),
        background:'rgba(0,0,15,0.7)',
        color:'white',
        backdropFilter:' saturate(200%) blur(30px)',
        borderRadius:'30px',
    
    
    
    }
}))

export default function TechwondoeForm1() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New user"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper1 className={classes.pageContent}>
                <TechwondoeForm />
            </Paper1>
        </>
    )
} 
const Paper1 = styled(Paper)`
:hover{
    box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px pink inset;
}
@media(max-width:600px){
    
    margin-left:-160px;
    
    bottom:0px;
}


`;

