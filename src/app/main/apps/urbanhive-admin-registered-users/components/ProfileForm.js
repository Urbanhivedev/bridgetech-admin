import React, { useState, useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "./controls/Controls";
import { useForm, Form } from './useForm';
import { TextField,InputLabel, MenuItem, Select } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import * as employeeService from "./employeeService";



const genderItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const type = [
    { id: 'technical', title: 'Technical' },
    { id: 'non-technical', title: 'Non-Technical' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'no',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

const initialTValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function ProfileForm() {

    const nodeRef = useRef(null);
    
    function handleChangeNew(){
        console.log('changed');
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
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
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <p>This information will be displayed publicly so be careful with what you share.</p><br/>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                <Controls.Input
                        name="fullName"
                        label="Write an Intro about yourself!"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                        rows={5}
                        rowsMax={10}
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={4}>
                <Controls.Select
                        name="departmentId"
                        label="What SkillSet do you have?"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                </Grid>
                <Grid item xs={6}>
                <Controls.Input
                        label="Country / City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                <Controls.Input
                        label="What skillset do you need?"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                <Controls.RadioGroup
                        name="gender"
                        label="Are you technical?"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                </Grid>
                <Grid item xs={4}>
                <Controls.RadioGroup
                        name="gender"
                        label="What are you looking for?"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={type}
                    />
                </Grid>
                </Grid>
                <br/>
        <Divider>
            <Chip label="😉 | 🔃" />
        </Divider>
            <Box 
                display="flex" 
                alignItems="center"
                justifyContent="center"
            >
                <div>
                <Controls.Button
                    type="submit"
                    text="Submit" />
                <Controls.Button
                    text="Reset"
                    color="default"
                    onClick={resetForm} />
                </div>
                </Box>
        </Form>
    )
}
