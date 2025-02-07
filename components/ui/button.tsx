import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "icon";
    className?: string;
}

export function Button({
                           variant = "default",
                           size = "default",
                           className,
                           ...props
                       }: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50";
    let variantClasses = "";
    if (variant === "default") {
        variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
    } else if (variant === "outline") {
        variantClasses = "border border-input hover:bg-accent hover:text-accent-foreground";
    } else if (variant === "ghost") {
        variantClasses = "hover:bg-accent hover:text-accent-foreground";
    }

    let sizeClasses = "";
    if (size === "default") {
        sizeClasses = "h-10 py-2 px-4";
    } else if (size === "icon") {
        sizeClasses = "h-10 w-10";
    }

    return (
        <button
            className={cn(baseClasses, variantClasses, sizeClasses, className)}
            {...props}
        />
    );
}
