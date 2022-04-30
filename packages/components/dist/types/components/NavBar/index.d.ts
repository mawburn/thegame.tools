import { ReactNode } from 'react';
interface Links {
    url: string;
    render: ReactNode;
    className?: string;
}
export interface NavBarProps {
    links: Links[];
    subText?: string;
    className?: string;
}
export declare const NavBar: ({ links, subText, className }: NavBarProps) => JSX.Element;
export {};
