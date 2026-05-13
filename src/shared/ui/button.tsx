import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

type ButtonAsButton = CustomButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
  };

type ButtonAsLink = CustomButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string | LinkProps["href"];
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const fullClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={fullClassName} {...(linkProps as any)}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      className={fullClassName}
      {...(buttonProps as any)}
      type={buttonProps.type || "button"}
    >
      {children}
    </button>
  );
};
