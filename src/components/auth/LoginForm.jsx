"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Loader2, LogIn, AlertCircle } from "lucide-react";
import GoogleLoginButton from "./GoogleLoginButton";
import DemoLoginButton from "./DemoLoginButton";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Form Submit Handler
    const onSubmit = async (data) => {
        setIsLoading(true);
        setGlobalError("");

        // Simulate API Network Latency Layer
        setTimeout(() => {
            setIsLoading(false);
            // To simulate an error state, uncomment the line below:
            // setGlobalError("Invalid cryptographic node credentials. Please check your data layer.");
            alert(`Form validated successfully! Payload transmitted.\nEmail: ${data.email}`);
        }, 2000);
    };

    // Auto-fill Demo Credentials
    const handleAutoFillDemo = () => {
        setValue("email", "developer@notepilot.ai", { shouldValidate: true });
        setValue("password", "sandboxSecretPass123", { shouldValidate: true });
    };

    return (
        <div className="space-y-6">
            {/* ─── GLOBAL SERVER/AUTH ERROR NOTIFICATION ─── */}
            {globalError && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs font-bold flex items-start gap-2.5 animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                    <span className="leading-relaxed">{globalError}</span>
                </div>
            )}

            {/* ─── GOOGLE THIRD PARTY SIGN IN ─── */}
            <GoogleLoginButton
                onClick={() => alert("Redirecting to Google OAuth Layer...")}
                isLoading={isLoading}
            />

            {/* OR Separator Component */}
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink mx-4 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">OR TRANSMIT SIGNAL</span>
                <div className="flex-grow border-t border-slate-100"></div>
            </div>

            {/* ─── NATIVE PRIMARY FORM ─── */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Email Field Group */}
                <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block">
                        Email Identity
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <Mail className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            disabled={isLoading}
                            placeholder="name@domain.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-medium transition-colors focus:outline-none focus:bg-white ${errors.email
                                    ? "border-rose-400 focus:border-rose-500"
                                    : "border-slate-200 focus:border-blue-500"
                                }`}
                            {...register("email", {
                                required: "Email identifier payload is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    value: "Invalid identity path syntax format",
                                },
                            })}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-[11px] font-bold text-rose-600 pl-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Password Field Group */}
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                            Secret Keyphrase
                        </label>
                        <a href="#" className="text-[11px] font-bold text-blue-600 hover:underline">
                            Forgot?
                        </a>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            disabled={isLoading}
                            placeholder="••••••••••••"
                            className={`w-full pl-10 pr-10 py-3 rounded-xl border bg-slate-50/50 text-sm font-medium transition-colors focus:outline-none focus:bg-white ${errors.password
                                    ? "border-rose-400 focus:border-rose-500"
                                    : "border-slate-200 focus:border-blue-500"
                                }`}
                            {...register("password", {
                                required: "Cryptographic credential validation is required",
                                minLength: {
                                    value: 6,
                                    message: "Keyphrase layers must exceed 6 matrix parameters",
                                },
                            })}
                        />
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-[11px] font-bold text-rose-600 pl-1">{errors.password.message}</p>
                    )}
                </div>

                {/* Submit Core Signal Trigger Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 disabled:bg-slate-400 shadow-md transition-all duration-300 cursor-pointer active:scale-[0.99] select-none"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Verifying Block Data...</span>
                        </>
                    ) : (
                        <>
                            <span>Authorize Network Access</span>
                            <LogIn className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>

            {/* Sandbox Trigger Divider */}
            <div className="pt-2">
                <DemoLoginButton onFillDemo={handleAutoFillDemo} isLoading={isLoading} />
            </div>
        </div>
    );
}