import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  asChild?: boolean;
}

export function Button({ variant = "primary", size = "sm", className = "", asChild, ...props }: ButtonProps) {
  const base = "font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg",
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
