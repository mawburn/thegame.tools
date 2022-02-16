import { ReactNode } from 'react';
interface TableGeneratorProps {
    list: ReactNode[];
    sectionClasses?: string | string[];
}
export declare const TableGenerator: ({ list, sectionClasses }: TableGeneratorProps) => JSX.Element | null;
export {};
