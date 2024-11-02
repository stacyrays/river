'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useContactForm } from '../hooks/useContactForm';

export type ContactValues = {
    name: string;
    email: string;
    comments: string;
}

export default function Contact() {
    const initialValues: ContactValues = {
        name: '',
        email: '',
        comments: ''
    }

    const { values, handleChange, onReset, handleSubmit} = useContactForm({initialValues});

    const submitForm = (formValues: ContactValues) => {
        console.log('submit happens');
        console.log('formValues', formValues)
    }
    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <div className="w-1/2 mt-20">
            <form onSubmit={handleSubmit(submitForm)}>
                <Stack spacing={4}>
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                    <TextField id="standard-basic" name="name" label="Name" variant="standard" value={values.name} onChange={handleChange} />
                    <TextField id="standard-basic" name="email" label="Email" variant="standard" value={values.email} onChange={handleChange} />
                    <TextField
                        id="outlined-textarea"
                        name="comments"
                        label="Comments"
                        placeholder="Enter comments"
                        value={values.comments}
                        onChange={handleChange}
                        multiline
                    />
                    {/* <TextField id="filled-basic" label="Name" variant="filled" /> */}
                    <div className="flex items-center justify-end">
                        <Button type="submit" variant="contained" sx={{
                            width: '140px',
                            backgroundColor: 'rgb(245, 158, 11)',
                            borderRadius: 12,
                            boxShadow: 'none', 
                            "&:hover": {
                                bgcolor: "#D97708",
                            },
                        }}>Say Hello</Button>
                    </div>
                </Stack>
            </form>
            </div>
        </div>
    );
}