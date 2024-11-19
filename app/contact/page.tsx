'use client'
import * as React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).email(),
    message: z.string().min(1),
    // date: z.date().optional(),
});

export type ContactValues = z.infer<typeof contactFormSchema>;

export default function Contact() {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
      } = useForm<ContactValues>({
        defaultValues: {
          email: "test@email.com",
        },
        resolver: zodResolver(contactFormSchema),
      });

    const onSubmit: SubmitHandler<ContactValues> = async (data) => {
        // const result = contactFormSchema.safeParse(data);
        try {
            const dataToSend = {
                ...data,
                date: new Date(),
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await fetch('http://localhost:3000/api/contacts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });
            return response;
        } catch (error) {
            console.log('error', error);
            setError("root", {
                message: "This email is already taken",
            });
        }
      };

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            {/* {status === 'success' && (
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
            )} */}
            <div className="w-1/2 mt-20">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                    <input {...register("name")} type="text" placeholder="Name" className='bg-[#EFEFEF] rounded-lg p-2 mb-3' />
                    {errors.name && (
                        <div className="text-red-500">{errors.name.message}</div>
                    )}
                    <input {...register("email")} type="text" placeholder="Email" className='bg-[#EFEFEF] rounded-lg p-2 mb-3' />
                        {errors.email && (
                            <div className="text-red-500">{errors.email.message}</div>
                        )}
                    <input {...register("message")} type="text" placeholder="Message" className='bg-[#EFEFEF] rounded-lg p-2 mb-3' />
                    {errors.message && (
                        <div className="text-red-500">{errors.message.message}</div>
                    )}
                    <button disabled={isSubmitting} type="submit" className="rounded-full bg-amber-500 transition-colors flex items-center justify-center hover:bg-amber-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-44">
                        {isSubmitting ? "Loading..." : "Submit"}
                    </button>
                    {errors.root && <div className="text-red-500">{errors.root.message}</div>}
            </form>
            </div>
        </div>
    );
}