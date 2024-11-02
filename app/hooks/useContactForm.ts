import { useState, ChangeEvent, FormEvent } from 'react';
import { ContactValues } from '../contact/page';

export const useContactForm = ({initialValues}: {initialValues: ContactValues}) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange happens');
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    };

    const onReset = () => {
        setValues(initialValues);
    };

    const handleSubmit = (callback: (formValues: ContactValues) => void) => (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback(values);
    }

    return {
        values,
        handleChange,
        onReset,
        handleSubmit
    }
}