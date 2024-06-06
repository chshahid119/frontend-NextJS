"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import axios from "axios"
import { useRouter } from 'next/navigation'
import { getEmailFromLocalStorage, setEmailToLocalStorage } from "./utils/utils"
import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  });
  
type LoginFormInputs = z.infer<typeof loginSchema>

export function LoginForm() {
    const router = useRouter()

    const [loader, setLoader] = useState<boolean>(false);



    useEffect(() => {
        const email = getEmailFromLocalStorage();
        if (email) {
          router.push('/dashboard', { scroll: false });
        }
    },[])


    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: '',
          password: '',
        },
      });
    
      const onSubmit: SubmitHandler<LoginFormInputs> = async (values) => {
        setLoader(true)
        try {
            const response = await axios.post('http://www.localhost:5000/api/auth/login', values);
            if (response.data && response.data.id) {
                const userId = response.data.id
                setEmailToLocalStorage(userId)
                toast.success('Login Sccessful');
                router.push('/dashboard', { scroll: false })
                setLoader(false)
            }
        } catch (error) {
          toast.error('Something went wrong. Please try again.');
          setLoader(false)
        }
    };
    return (
        <div className="flex items-center justify-center  bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className={`mt-1 block w-full px-3 py-2 border ${form.formState.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      />
                    </FormControl>
                    {form.formState.errors.email && <FormMessage className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        className={`mt-1 block w-full px-3 py-2 border ${form.formState.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      />
                    </FormControl>
                    {form.formState.errors.password && <FormMessage className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {loader ? 'Loading...' : 'Login'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    )
}

