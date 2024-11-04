'use server';
import { ContactValues } from './page'

export const submitData = async (data: ContactValues) => {
    console.log('data', data);
  
    const response = await fetch('https://script.google.com/macros/s/AKfycbwWRGG5lWo-4rB-DnlfiUEcWuIwBTFVLbikU-uGrR0/dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('response', response);
  
    if (!response.ok) {
      throw new Error('Failed to submit data');
    }
  
    return response.json();
  }