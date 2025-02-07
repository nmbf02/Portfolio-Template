import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    );
}

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export function CardContent({ className, ...props }: CardContentProps) {
    return <div className={cn("p-4", className)} {...props} />;
}

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

export function CardFooter({ className, ...props }: CardFooterProps) {
    return (
        <div className={cn("flex items-center p-4 pt-0", className)} {...props} />
    );
}
