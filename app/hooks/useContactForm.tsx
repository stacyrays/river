import { useState, ChangeEvent, FormEvent } from 'react';
import { ContactValues } from '../contact/page';

const useContactForm = ({initialValues}: {initialValues: ContactValues}) => {
    const [values, setValues] = useState(initialValues);
    console.log('values', values);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange happens');
        const {name, value} = e.target;
        console.log('name', name);
        console.log('value', value);
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
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await axios.post('YOUR_GOOGLE_APPS_SCRIPT_URL', formData);
    //       console.log(response.data); // Handle success
    //     } catch (error) {
    //       console.error(error); // Handle error
    //     }
    //   };

    return {
        values,
        handleChange,
        onReset,
        handleSubmit
    }
}

export default useContactForm;