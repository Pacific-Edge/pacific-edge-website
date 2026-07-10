import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The one CTA button component for the whole site — 4 variants, no more.
 * `tone` only affects `variant="transparent"`: it picks whether the button
 * sits on a light (white) or dark (midnight) background, since a transparent
 * button's border/text color has to contrast with whatever's behind it.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-pill font-ui font-medium transition-[background-color,color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-midnight-900/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        black: "bg-midnight-900 text-white-50 border border-transparent hover:bg-midnight-800",
        white: "bg-white-50 text-midnight-900 border border-transparent hover:bg-white-100",
        transparent: "bg-transparent border-[1.5px]",
        blue:
          "text-white-50 border border-transparent bg-gradient-to-r from-electric-700 to-electric-500 hover:from-electric-900 hover:to-electric-700",
      },
      tone: {
        dark: "",
        light: "",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        default: "px-7 py-3.5 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    compoundVariants: [
      {
        variant: "transparent",
        tone: "dark",
        class: "border-midnight-900 text-midnight-900 hover:bg-midnight-900 hover:text-white-50",
      },
      {
        variant: "transparent",
        tone: "light",
        class: "border-white-50/30 text-white-50 hover:border-white-50/60 hover:bg-white-50/10",
      },
    ],
    defaultVariants: {
      variant: "black",
      tone: "dark",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, tone, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, tone, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
