import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("interactive-press inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "border-ink bg-ink text-paper-raised hover:bg-ink-raised",
      primary: "button-primary border-ink bg-ink text-paper-raised hover:bg-ink-raised",
      outline: "border-ink bg-transparent text-ink hover:bg-paper-dim",
      secondary: "button-secondary border-ink bg-transparent text-ink hover:bg-paper-dim",
      destructive: "border-signal-red bg-signal-red text-paper-raised",
      ghost: "border-transparent bg-transparent text-ink hover:bg-paper-dim",
      link: "h-auto border-transparent px-0 text-signal-blue",
    },
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8",
      icon: "size-10 p-0",
    },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}/>;
});
Button.displayName = "Button";
export { Button, buttonVariants };
