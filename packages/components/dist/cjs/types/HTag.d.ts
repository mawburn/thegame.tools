import { ReactNode } from 'react';
interface HTagProps {
    tag: '1' | '2' | '3' | '4' | '5' | '6';
    children: ReactNode;
    className?: string;
    fade?: boolean;
    noCenter?: boolean;
}
export declare const HTag: ({ tag, children, className, fade, noCenter, }: HTagProps) => JSX.Element;
export {};
