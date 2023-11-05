import * as Primitives from "@radix-ui/react-switch";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
declare const switchVariants: (props?: ({
    size?: "base" | "small" | null | undefined;
} & ({
    class: import("clsx").ClassValue;
    className?: undefined;
} | {
    class?: undefined;
    className: import("clsx").ClassValue;
} | {
    class?: undefined;
    className?: undefined;
})) | undefined) => string;
interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<typeof Primitives.Root>, "asChild">, VariantProps<typeof switchVariants> {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
