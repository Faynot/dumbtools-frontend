import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

interface ButtonAsButtonProps
  extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLinkProps
  extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string | LinkProps["href"];
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const fullClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={fullClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={fullClassName} {...buttonProps}>
      {children}
    </button>
  );
};
