/// <reference types="react" />
import { FC } from 'react';

declare const config: {
    imgBucket: string;
};

interface FooterProps {
    borderColor?: string;
    footerClasses?: string;
    sectionClasses?: string;
}
declare const Footer: FC<FooterProps>;

declare const Github: () => JSX.Element;

declare const rollOnTable: <T>(array: T[]) => T;

export { Footer, Github, config as baseConfig, rollOnTable };
