/// <reference types="react" />
import { FC, ReactNode } from 'react';

declare const baseConfig: {
    imgBucket: string;
    twitter: string;
    instagram: string;
    homepage: string;
    coreSite: string;
};

interface FooterProps {
    borderColor?: string;
    footerClasses?: string;
    sectionClasses?: string;
}
declare const Footer: FC<FooterProps>;

declare const Github: () => JSX.Element;

declare const rollOnTable: <T>(array: T[]) => T;

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

export { Footer, Github, KeyValue, TableGenerator, baseConfig, rollOnTable, useKey };
