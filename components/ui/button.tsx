import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The shared CTA button for the whole site — ports the old site's
 * `.btn-primary` / `.btn-ghost` / `.btn-calc` classes into one component.
 * Sharp-ish corners (--radius-btn), flat mint fill, hairline outline — no glow.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-body font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-ink",
  {
    variants: {
      variant: {
        // mint fill, dark ink — primary CTA
        primary:
          "bg-accent text-on-accent border border-transparent hover:bg-accent-bright hover:-translate-y-0.5",
        // hairline outline — secondary
        ghost:
          "bg-transparent text-text border border-border hover:border-accent hover:text-accent-ink",
        // mint tint — savings-calculator CTA
        calc:
          "text-accent-ink bg-[color-mix(in_oklab,var(--color-accent)_14%,transparent)] border border-[color-mix(in_oklab,var(--color-accent-ink)_38%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-accent)_24%,transparent)] hover:border-[color-mix(in_oklab,var(--color-accent-ink)_60%,transparent)] hover:-translate-y-0.5",
      },
      size: {
        sm: "px-5 py-2.5 text-[13px]",
        default: "px-[30px] py-[15px] text-[15px]",
        lg: "px-11 py-[18px] text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
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
