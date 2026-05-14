import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkVariant = "primary" | "secondary" | "outline";

interface LinkBaseProps {
  children: ReactNode;
  variant?: LinkVariant;
  className?: string;
}

type LinkProps = LinkBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
  NextLinkProps;

export const Link = ({ children, href, ...props }: LinkProps) => {
  const isStringHref = typeof href === "string";
  const isExternal =
    isStringHref &&
    (href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:"));

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
};
