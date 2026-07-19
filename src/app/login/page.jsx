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

  const router = useRouter()

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
  // const onSubmit = async (data) => {
  //   setIsLoading(true);
  //   setGlobalError("");

  //   // Simulate API Network Latency Layer
  //   setTimeout(() => {
  //     setIsLoading(false);

  //     // লাইভ API-এর মতো এরর ও সাকসেস হ্যান্ডলিংয়ের উদাহরণ:
  //     const hasError = false; // টেস্ট করার জন্য এটিকে true করতে পারেন

  //     if (hasError) {
  //       const errorMsg = "Invalid email or password. Please try again.";
  //       setGlobalError(errorMsg);
  //       toast.error(errorMsg);
  //     } else {
  //       toast.success("Welcome back! Signed in successfully.");
  //     }
  //   }, 2000);
  // };

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
    // ফুল-স্ক্রিন ব্যাকগ্রাউন্ড এবং উপর-নিচে নিখুঁত স্পেসিং (Padding Y) দেওয়ার জন্য বাইরের এই কন্টেইনারটি যুক্ত করা হয়েছে
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-slate-50/50 px-4 py-12 md:py-20">

      {/* মূল লগইন কার্ড */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40 space-y-6">

        {/* ─── HEADING & SUBHEADING ─── */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Sign in to your NotePilot AI account to access your notes, AI summaries, and personalized recommendations.
          </p>
        </div>

        {/* ─── GLOBAL SERVER/AUTH ERROR NOTIFICATION ─── */}
        {globalError && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs font-bold flex items-start gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
            <span className="leading-relaxed">{globalError}</span>
          </div>
        )}

        {/* ─── GOOGLE THIRD PARTY SIGN IN ─── */}
        <GoogleLoginButton
          onClick={() => toast.loading("Redirecting to Google...", { id: "google-auth", duration: 2000 })}
          isLoading={isLoading}
          text="Continue with Google"
        />

        {/* OR Separator Component */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-slate-100"></div>
          <span className="flex-shrink mx-4 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">OR</span>
          <div className="flex-grow border-t border-slate-100"></div>
        </div>

        {/* ─── NATIVE PRIMARY FORM ─── */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email Field Group */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="text"
                disabled={isLoading}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-sm font-medium transition-colors focus:outline-none focus:bg-white ${errors.email
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-blue-500"
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
              <p className="text-[11px] font-bold text-rose-600 pl-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field Group */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                Password
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
                placeholder="Enter your password"
                className={`w-full pl-10 pr-10 py-3 rounded-xl border bg-slate-50/50 text-sm font-medium transition-colors focus:outline-none focus:bg-white ${errors.password
                  ? "border-rose-400 focus:border-rose-500"
                  : "border-slate-200 focus:border-blue-500"
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
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] font-bold text-rose-600 pl-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 disabled:bg-slate-400 shadow-md transition-all duration-300 cursor-pointer active:scale-[0.99] select-none"
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
        <p className="text-center text-xs text-slate-500">
          Don't have an account?{" "}
          <a href="/register" className="font-bold text-blue-600 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}