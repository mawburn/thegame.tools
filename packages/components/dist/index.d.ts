/// <reference types="react" />
interface FooterProps {
    borderColor?: string;
    footerClasses?: string;
    sectionClasses?: string;
}
declare const Footer: ({ borderColor, footerClasses, sectionClasses, }: FooterProps) => JSX.Element;

declare const Github: () => JSX.Element;

declare const rollOnTable: <T>(array: T[]) => T;

export { Footer, Github, rollOnTable };
