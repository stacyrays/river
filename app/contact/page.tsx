'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useContactForm from '../hooks/useContactForm';
import { submitData } from './SubmitData';

export type ContactValues = {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const initialValues: ContactValues = {
        name: '',
        email: '',
        message: ''
    }

    React.useEffect(() => {
        let response;
        let contacts;
        (async () => {
            response = await fetch('http://localhost:3000/api/contacts');
            contacts = await response.json();
            console.log('contacts', contacts)
        }
        )();
    }, []);

    const { values, handleChange, onReset, handleSubmit} = useContactForm({initialValues});

    const submitForm = async (formValues: ContactValues) => {
        console.log('submit happens');
        console.log('formValues', formValues)
        // submitData(formValues);
        
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxHUVN2ZX4irCLU7ljjeItfc1-9Uzl3gr0oMkjKyyyULRpRcwfj7J4VWaxHN2CFOFQ/exec', {
                redirect: "follow",
                method: 'POST',
                mode: 'no-cors',
                // cache: "no-cache",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                // body: JSON.stringify(formValues),
                // @ts-ignore
                body: JSON.stringify(formValues),
                // body: {name: 'Jon', email: 'jon@gmail.com', message: 'ehyyy'},
            });
            // console.log('response', response.json());
            // const responseJson = await response.json();
            // console.log('responseJson', responseJson);
        
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
        
            return response;
        } catch (error) {
            console.log("error", error);
            throw new Error('Failed to submit data');
            // console.error(error); // Handle error
        }
        
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
                        name="message"
                        label="Message"
                        placeholder="Enter message"
                        value={values.message}
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