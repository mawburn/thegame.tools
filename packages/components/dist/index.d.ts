import { FC, ReactNode } from 'react';

declare const baseConfig: {
    imgBucket: string;
    twitter: string;
    instagram: string;
    homepage: string;
    coreSite: string;
};

interface FooterProps {
    footerClasses?: string;
    sectionClasses?: string;
    borderTop?: boolean;
}
declare const Footer: FC<FooterProps>;

declare const Github: () => JSX.Element;

declare const randomInt: (min: number, max: number) => number;

declare const rollOnTable: <T>(array: T[]) => T;

interface SponsoredByProps {
    className?: string;
}
declare const SponsoredBy: ({ className }: SponsoredByProps) => JSX.Element;

interface TableGeneratorProps {
    list: ReactNode[];
    sectionClasses?: string | string[];
}
declare const TableGenerator: ({ list, sectionClasses }: TableGeneratorProps) => JSX.Element | null;

declare const useKey: <T>(list?: T[] | undefined) => (place: number) => string;

declare type KeyValue = {
    name: string;
    value: any;
};

export { Footer, Github, KeyValue, SponsoredBy, TableGenerator, baseConfig, randomInt, rollOnTable, useKey };
