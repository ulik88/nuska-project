import React from 'react'
import { AboutSVG } from "../../../assets/img/svg/AboutSVG";
import { MoonSVG } from "../../../assets/img/svg/MoonSVG";
import { FAQSVG } from "../../../assets/img/svg/FAQSVG";
import { LanguageSVG } from "../../../assets/img/svg/LanguageSVG";
import { LogoutSVG } from "../../../assets/img/svg/LogoutSVG";


export const mapImagesSVG = (settings: string): JSX.Element | null => {
    console.log('Received settings:', settings);

    switch (settings) {
        case "Sprachen":
            return <LanguageSVG />;
        case "Dark Mode":
            return <FAQSVG />;
        case "FAQ":
            return <MoonSVG />;
        case "Abmelden":
            return <LogoutSVG />;
        case "Über Uns":
            return <AboutSVG />;
        default:
            return null;
    }
};

export const mapImagesPNG = (onboarding: any) => {
    switch (onboarding) {
        case '1':
            return require('../../../assets/img/splash_2.png');
        case '2':
            return require('../../../assets/img/splash_3.png');
        case '3':
            return require('../../../assets/img/splash_4.png');
        default:
            return "";
    }
};