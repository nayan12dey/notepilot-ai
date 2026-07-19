"use client";

import React from "react";
// আপনার দেওয়া এক্সাম্পল অনুযায়ী সঠিক কম্পোনেন্টগুলো ইমপোর্ট করা হলো
import { Label, ListBox, Select, Description } from "@heroui/react";
import { AlertCircle, ChevronDown, Check } from "lucide-react";

export default function PrioritySelect({ register, errors, isDisabled }) {
    const priorities = [
        { id: "Low", name: "Low" },
        { id: "Medium", name: "Medium" },
        { id: "High", name: "High" },
    ];

    return (
        <div className="w-full flex flex-col">
            {/* 
        React Hook Form এর সাথে সঠিক ম্যাপিং এর জন্য 
        Select এর native name প্রোপস এবং register অ্যাডজাস্ট করা হলো 
      */}
            <Select
                className="w-full"
                isDisabled={isDisabled}
                {...register("priority", { required: "Please select a priority level" })}
            >
                <Label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5 block">
                    Priority Level
                </Label>

                {/* Trigger/Dropdown Button wrapper styled using Tailwind */}
                <Select.Trigger
                    className={`w-full flex items-center justify-between px-3.5 h-12 rounded-xl bg-transparent border text-sm transition-all text-left outline-none
            ${!!errors.priority
                            ? "border-danger text-danger focus:border-danger"
                            : "border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600"
                        }`}
                >
                    <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                        <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0" />
                        <Select.Value placeholder="Select priority" />
                    </div>
                    <Select.Indicator>
                        <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform ui-expanded:rotate-180" />
                    </Select.Indicator>
                </Select.Trigger>

                {/* Dropdown Popover and List Selection menu */}
                <Select.Popover className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden mt-1 p-1 z-50">
                    <ListBox className="outline-none space-y-0.5">
                        {priorities.map((item) => (
                            <ListBox.Item
                                key={item.id}
                                id={item.id}
                                textValue={item.name}
                                className="flex items-center justify-between px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/60 outline-none select-none focus:bg-zinc-50 dark:focus:bg-zinc-800/60 transition-colors"
                            >
                                <span>{item.name}</span>
                                {/* সিলেক্টেড আইটেমের টিক মার্ক আইকন */}
                                <ListBox.ItemIndicator>
                                    <Check className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
                                </ListBox.ItemIndicator>
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </Select.Popover>

                {/* ভ্যালিডেশন এরর মেসেজ অথবা হেল্পার টেক্সট শো করার লজিক */}
                {errors.priority ? (
                    <p className="text-xs text-danger mt-1.5 font-medium">{errors.priority?.message}</p>
                ) : (
                    <Description className="text-[11px] text-zinc-400 mt-1">
                        Assign the processing emergency tier for this note.
                    </Description>
                )}
            </Select>
        </div>
    );
}