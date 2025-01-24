"use dom"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Logo from '@/components/logo';

import "@/global.css"
import { TLoginRequest } from '../../types/login';
import { Form } from '@heroui/react';
import { z } from "zod";
import { formatFieldErrors } from '@/functions/utils';

const createLoginFormSchema = z.object({
    email: z.string()
        .min(1, { message: "Please give email." })
        .email({ message: "Please give valid email." }),
    password: z.string().min(4, {
        message: "Please give at least 4 character length for password",
    }),
});


export default function LoginWrapper({
    onLogin
}: {
    onLogin: (data: TLoginRequest) => void
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const data = createLoginFormSchema.safeParse(
            Object.fromEntries(new FormData(e.currentTarget).entries()),
        );

        if (!data.success) {
            const fieldErrors = formatFieldErrors(data.error.formErrors.fieldErrors);
            console.log("data: ", fieldErrors)
            setFieldErrors(fieldErrors);
            return;
        }

        onLogin(data.data)

    };

    return (
        <div className="min-h-screen bg-gradient-to-br w-full from-blue-100 to-purple-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-full max-w-full lg:max-w-md rounded-2xl shadow-xl p-8"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <Logo />
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className='-mt-5'
                    >
                        <p className="text-gray-600">Sign in to continue to your account</p>
                    </motion.div>
                </motion.div>

                <Form
                    onSubmit={handleSubmit}
                    validationErrors={fieldErrors}
                    className="space-y-6 mt-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className='w-full'
                    >
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>
                        {fieldErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className='w-full'
                    >
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {fieldErrors.password && (
                            <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
                        )}
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 bg-blue-600 text-white rounded-lg font-medium ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                    >
                        {isLoading ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                            />
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </Form>
            </motion.div>
        </div>
    );
}