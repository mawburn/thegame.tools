/// <reference types="react" />
import { FC, ReactNode } from 'react';

interface FooterProps {
    footerClasses?: string;
    sectionClasses?: string;
    borderTop?: boolean;
}
declare const Footer: FC<FooterProps>;

declare const Github: () => JSX.Element;

interface SponsoredByProps {
    className?: string;
}
declare const SponsoredBy: ({ className }: SponsoredByProps) => JSX.Element;

interface TableGeneratorProps {
    list: ReactNode[];
    sectionClasses?: string | string[];
}
declare const TableGenerator: ({ list, sectionClasses }: TableGeneratorProps) => JSX.Element | null;

interface HTagProps {
    tag: '1' | '2' | '3' | '4' | '5' | '6';
    children: ReactNode;
    className?: string;
    fade?: boolean;
    noCenter?: boolean;
}
declare const HTag: ({ tag, children, className, fade, noCenter, }: HTagProps) => JSX.Element;

interface Links {
    url: string;
    render: ReactNode;
    className?: string;
}
interface NavBarProps {
    links: Links[];
    subText?: string;
    className?: string;
}
declare const NavBar: ({ links, subText, className }: NavBarProps) => JSX.Element;

declare const baseConfig: {
    imgBucket: string;
    twitter: string;
    instagram: string;
    homepage: string;
    coreSite: string;
};

declare const randomInt: (min: number, max: number) => number;

declare const rollOnTable: <T>(array: T[]) => T;

declare const useKey: <T>(list?: T[] | undefined) => (place: number) => string;

declare const isBrowser: () => boolean;

export { Footer, Github, HTag, NavBar, SponsoredBy, TableGenerator, baseConfig, isBrowser, randomInt, rollOnTable, useKey };
