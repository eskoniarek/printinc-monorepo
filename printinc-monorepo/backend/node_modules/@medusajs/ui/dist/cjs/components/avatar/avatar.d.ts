import * as Primitives from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const avatarVariants: (props?: ({
    variant?: "squared" | "rounded" | null | undefined;
    size?: "base" | "large" | null | undefined;
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
interface AvatarProps extends Omit<React.ComponentPropsWithoutRef<typeof Primitives.Root>, "asChild" | "children" | "size">, VariantProps<typeof avatarVariants> {
    src?: string;
    fallback: string;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
export { Avatar };
