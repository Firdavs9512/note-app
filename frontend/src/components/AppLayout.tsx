import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils/classnames";

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<"main">) => {
  return (
    <main className={cn("flex flex-row h-screen", className)} {...props}>
      {children}
    </main>
  );
};

export const Sidebar = ({
  children,
  className,
  ...props
}: ComponentProps<"aside">) => {
  return (
    <aside
      className={cn(
        "w-[250px] mt-10 h-[100vh + 10px] overflow-auto",
        className
      )}
    >
      {children}
    </aside>
  );
};

export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 overflow-auto", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
