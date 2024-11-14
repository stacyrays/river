'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import useContactForm from '../hooks/useContactForm';
import { submitData } from './SubmitData';

export type ContactValues = {
    name: string;
    email: string;
    message: string;
    date: Date;
}

export default function Contact() {
    const [status, setStatus] = React.useState<"success" | "error" | "info" | "warning">('info');

    const initialValues: ContactValues = {
        name: '',
        email: '',
        message: '',
        date: new Date(),
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
        console.log('formValues', formValues)
        if (!formValues.name || !formValues.email || !formValues.message) {
            setStatus('error');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/api/contacts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(formValues),
            });
            console.log('response', response.json());
            // const responseJson = await response.json();
            // console.log('responseJson', responseJson);
        
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
            onReset();
            setStatus('success');
            return response;
        } catch (error) {
            setStatus('error');
            throw new Error('Failed to submit data');
            // console.error(error); // Handle error
        }
        
    }
    return (
        <div className="w-screen flex flex-col items-center justify-center">
            {status === 'success' && (
                <Alert
                    variant="filled"
                    severity={status}
                    sx={{
                        backgroundColor: '#4caf50',
                        marginTop: '20px',
                    }}
                    onClose={() => setStatus('info')}
                >
                    Your message has been sent successfully.
                </Alert>
            )}
            {status === 'error' && (
                <Alert
                    variant="filled"
                    severity={status}
                    sx={{
                        backgroundColor: '#f44336',
                        marginTop: '20px',
                    }}
                    onClose={() => setStatus('info')}
                >
                    Form submission failed. All fields required.
                </Alert>
            )}
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