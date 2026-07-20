import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The one shared button for the whole site — three variants (light / dark /
 * mint), each a swipe-fill hover: a full-bleed panel slides in from the left
 * on hover and the label color flips to match. Same radius (--radius), same
 * motion, everywhere — see `.btn` / `.btn-light` / `.btn-dark` / `.btn-mint`
 * in styles/legacy.css for the raw-markup equivalent used across ported pages.
 */
const buttonVariants = cva(
  "btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] font-body font-semibold cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-ink",
  {
    variants: {
      variant: {
        // white fill, black ink — swipes to black fill, white ink
        light: "btn-light",
        // black fill, white ink — swipes to white fill, black ink
        dark: "btn-dark",
        // mint fill, dark ink — swipes to white fill, mint ink
        mint: "btn-mint",
      },
      size: {
        sm: "px-5 py-2.5 text-[13px]",
        default: "px-[30px] py-[15px] text-[15px]",
        lg: "px-11 py-[18px] text-base",
      },
    },
    defaultVariants: {
      variant: "mint",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
