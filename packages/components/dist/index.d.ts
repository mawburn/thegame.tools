/// <reference types="react" />
declare const rollOnTable: <T>(array: T[]) => T;

declare const Github: () => JSX.Element;

interface LogoProps {
    size: number;
    fullLogo?: boolean;
    alt?: string;
    priority?: boolean;
}
declare const Logo: ({ size, fullLogo, alt, priority, }: LogoProps) => JSX.Element;

export { Github, Logo, rollOnTable };
