/// <reference types="react" />
import { ReactNode } from 'react';

declare const rollOnTable: <T>(array: T[]) => T;

declare const Github: () => JSX.Element;

interface HTagProps {
    tag: '1' | '2' | '3' | '4' | '5' | '6';
    children: ReactNode;
    className?: string;
    fade?: boolean;
    noCenter?: boolean;
}
declare const HTag: ({ tag, children, className, fade, noCenter, }: HTagProps) => JSX.Element;

export { Github, HTag, rollOnTable };
