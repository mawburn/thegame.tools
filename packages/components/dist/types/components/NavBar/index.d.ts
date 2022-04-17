import { ReactNode } from 'react';
interface Links {
    url: string;
    render: ReactNode;
    className?: string;
}
export interface NavBarProps {
    links: Links[];
}
export declare const NavBar: ({ links }: NavBarProps) => JSX.Element;
export {};
