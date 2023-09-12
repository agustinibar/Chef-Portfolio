import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactMain } from './ContactMain';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xzblvzze");
    if (state.succeeded) {
        return <p>Message sent!</p>;
    }
  return (
    <>  
        <Header/>
        <ContactMain/>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto py-10 px-4">
            <label htmlFor="name" className="block text-gray-700">Nombre</label>
            <input
            id="name"
            type="text"
            name="name"
            className="border border-gray-300 rounded-md p-2 w-full"
            />
            <ValidationError 
            prefix="Nombre" 
            field="name"
            errors={state.errors}
            />
        
            <label htmlFor="phone" className="block mt-4 text-gray-700">Teléfono</label>
            <input
            id="phone"
            type="tel"
            name="phone"
            className="border border-gray-300 rounded-md p-2 w-full"
            />
            <ValidationError 
            prefix="Teléfono" 
            field="phone"
            errors={state.errors}
            />
        
            <label htmlFor="email" className="block mt-4 text-gray-700">Email Address</label>
            <input
            id="email"
            type="email" 
            name="email"
            className="border border-gray-300 rounded-md p-2 w-full"
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        
            <label htmlFor="message" className="block mt-4 text-gray-700">Mensaje</label>
            <textarea
            id="message"
            name="message"
            className="border border-gray-300 rounded-md p-2 w-full"
            />
            <ValidationError 
            prefix="Mensaje" 
            field="message"
            errors={state.errors}
            />
        
            <button 
            type="submit" 
            className="bg-Soft-red text-white rounded-md px-4 py-2 mt-4"
            disabled={state.submitting}
            >
            Submit
            </button>
        </form>  
        <Footer/>
    </>
  )
};

