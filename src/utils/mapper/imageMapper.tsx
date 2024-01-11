import { LogoSVG } from "../../../assets/img/svg/LogoSVG";
import { Settings } from "react-native";
import { SettingsSVG } from "../../../assets/img/svg/SettingsSVG";
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
