import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("interactive-press inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border px-4 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      primary: "border-ink bg-ink text-paper-raised hover:bg-ink-raised dark-band:border-paper-raised dark-band:bg-paper-raised dark-band:text-ink",
      secondary: "border-ink bg-transparent text-ink hover:bg-paper-dim dark-band:border-paper-raised dark-band:text-paper-raised dark-band:hover:bg-hairline-dark",
      link: "h-auto border-transparent px-0 text-signal-blue",
    },
  },
  defaultVariants: { variant: "primary" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props}/>;
});
Button.displayName = "Button";
export { Button, buttonVariants };
