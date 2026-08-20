"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Loader2, LogIn, AlertCircle } from "lucide-react";
import DemoLoginButton from "@/components/auth/DemoLoginButton";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");

  const router = useRouter();

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    setGlobalError("");

    try {
      const { error } = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setGlobalError(error.message);
        toast.error(error.message);
        return;
      }

      toast.success("Welcome back!");
      router.push("/");
    } catch (err) {
      setGlobalError("Something went wrong.");
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-fill Demo Credentials
  const handleAutoFillDemo = () => {
    setValue("email", "developer@notepilot.ai", { shouldValidate: true });
    setValue("password", "sandboxSecretPass123", { shouldValidate: true });
    toast.success("Demo credentials loaded!");
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-slate-950 px-4 py-12 md:py-20 relative overflow-hidden">

      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* মূল গ্লাস সাইবার কার্ড */}
      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/80 space-y-6">

        {/* ─── HEADING & SUBHEADING ─── */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Welcome Back</h1>
          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed font-medium">
            Sign in to your NotePilot AI account to access your notes, AI summaries, and personalized recommendations.
          </p>
        </div>

        {/* ─── GLOBAL SERVER/AUTH ERROR NOTIFICATION ─── */}
        {globalError && (
          <div className="p-4 bg-rose-950/40 border border-rose-500/30 rounded-2xl text-rose-300 text-xs font-bold flex items-start gap-2.5 backdrop-blur-md animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="leading-relaxed">{globalError}</span>
          </div>
        )}

        {/* ─── GOOGLE THIRD PARTY SIGN IN ─── */}
        <GoogleLoginButton isLoading={isLoading} />

        {/* OR Separator Component */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-slate-800/80"></div>
          <span className="flex-shrink mx-4 text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">OR</span>
          <div className="flex-grow border-t border-slate-800/80"></div>
        </div>

        {/* ─── NATIVE PRIMARY FORM ─── */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email Field Group */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="text"
                disabled={isLoading}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm font-medium transition-all focus:outline-none ${errors.email
                    ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
                    : "border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50"
                  }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] font-bold text-rose-400 pl-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field Group */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-[11px] font-bold text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                disabled={isLoading}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-10 py-3 rounded-xl border bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm font-medium transition-all focus:outline-none ${errors.password
                    ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
                    : "border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50"
                  }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                disabled={isLoading}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] font-bold text-rose-400 pl-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-400/30 text-white hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 shadow-lg shadow-cyan-500/20 transition-all duration-300 cursor-pointer active:scale-[0.99] select-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <LogIn className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Sandbox Trigger Divider */}
        <div className="pt-2">
          <DemoLoginButton onFillDemo={handleAutoFillDemo} isLoading={isLoading} text="Use Demo Account" />
        </div>

        {/* Bottom Registration Text */}
        <p className="text-center text-xs text-slate-400 font-medium">
          Don't have an account?{" "}
          <a href="/register" className="font-bold text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}