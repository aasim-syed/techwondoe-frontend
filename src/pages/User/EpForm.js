import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as eeService from "../../services/eService";
import styled from "styled-components"

const genderItems = [
    { id: 'male', title: 'Male♂️👨🚹' },
    { id: 'female', title: 'Female🚺♀️👧' },
    { id: 'other', title: 'Other🏳️‍🌈💞💗' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    Hireopt: '',
    Bday: new Date(),
    isPermanent: false,
    password:'',
    confirmpassword:'',
}

export default function UserForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required.🙄😒"
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid.🙄😒"
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.🙄😒"
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required.🙄😒"
        if('password' in fieldValues)
            temp.password = fieldValues.password.length > 0 ? "" : "This field is required.🙄😕😒"
        if('confirmpassword' in fieldValues == 'password' in fieldValues )
            temp.confirmpassword = fieldValues.confirmpassword == fieldValues.password  ? "" : "PASSWORDS DONT MATCH!🙄😒"
        if('isPermanent' in fieldValues  )
            temp.isPermanent = fieldValues.isPermanent != false ? "" : "HOL'UP CHECK OUT TnC🤚"
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            eeService.insertUser(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>FORM THAT I HAVE NEVER MADE BEFORE✨🎊!</Title>
            <Grid container>
                <Grid item xs={6}>
                <Steps>STEP-1✨😊</Steps>
                <H>FULL NAME</H>
                    <Controls.Input
                        name="fullName"
                        label="Full Name😉"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <H>Email</H>
                    <Controls.Input
                        label="Email📧💌✉️"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <H>MOBILE NO.📱</H>
                    <Controls.Input
                        label="Mobile📱"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <H>CITY🏙️🌆</H>
                    <Controls.Input
                        label="City🌆🏙️"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Steps>STEP-2✨😊</Steps>
                    <Hr className='style-seven'/>
                    <Secret>
                        well🙄,just move around to fill it up!😊
                    </Secret>
                    <Controls.Rec onChange={handleInputChange}/> 
                    
                        
                </Grid>
                
                <Grid item xs={6}>
                <Steps>STEP-3🤗✨</Steps>
                <H>PASSWORD🔑</H>
                    <Controls.Input
                        type="password"
                        label="Password🔑"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    <H> CONFIRM IT🕵️</H>
                    <Controls.Input
                        type="password"
                        label="Confirm-password🔑"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleInputChange}
                        error={errors.confirmpassword}
                    />
                    <Hr className='style-seven'/>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="Hireopt"
                        label="WILL I BE HIRED?😖😰😱"
                        value={values.Hireopt}
                        onChange={handleInputChange}
                        options={eeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="BDAY"
                        label="BIRTH DATE🥳🥳"
                        value={values.Bday}
                        onChange={handleInputChange}
                    />
                    
                    <Steps>STEP-4✨😊</Steps>
                    <Hr className='style-seven'/>
                    <Controls.Checkbox
                    name="isPermanent"
                    label="I AGREE WITH TERMS AND CONDITIONS😉"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                    error={errors.isPermanent}                        required = "true"
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                        <Hr className='style-seven'/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

const H =styled.h3`


background: rgba(204, 45, 207, 0.29);
border-radius: 1px;
width:130px;
font-family:Poppins;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(204, 45, 207, 0.69);
:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}
`;
const Steps =styled.h3`



border-radius: 1px;
width:130px;
color:aqua;
font-family:Poppins;
background:
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);

:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}
`;
const Title = styled.h1`


background: rgba(36, 35, 35, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
border: 1px solid rgba(36, 35, 35, 1);

width:600px;
margin-top:-50px;
margin-left:25%;
font-family:Poppins;

:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}
@media(max-width:600px){
    margin-left:-10px;
    width:400px;
    margin-top:100px;

}


`;
// Controls.Rec
const Cr = styled(Controls.Rec)`

margin-left:30px;
@media(max-width:600px){
    width:11100px;
}

`;
const Secret = styled.h3`


display:none;
@media (max-width:600px){
    display:inline;
/* From https://css.glass */
background: rgba(204, 45, 207, 0.29);
border-radius: 1px;
color:black;
width:130px;
font-family:Poppins;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(204, 45, 207, 0.69);
:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}

}

`;
const Hr = styled.hr`


    overflow: visible; /* For IE */
    height: 30px;
    margin-left:10px;
    border-style: solid;
    border-color: blue;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    width:620px;
    @media(max-width:800px){
        display:none;
    }
:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: purple;
    border-width: 0 0 1px 0;
    border-radius: 20px;
    @media(max-width:800px){
        display:none;
    }
}`;
