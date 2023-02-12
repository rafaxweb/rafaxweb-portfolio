import { SettingsModel } from './../data/models/SettingsModel';
import { SettingsRepository } from './../data/repository/SettingsRepository';

export const OnPageLoad = () => {
    SetLanguage();
}

const SetLanguage = () => {

    if (SettingsRepository.getLanguage() === undefined) {
        
        const settings = new SettingsModel();
        
        if (window.navigator.language.toLowerCase().includes("es")) {
            settings.language = "ES";

        } else {
            settings.language = "EN";
        }

        SettingsRepository.addElement(settings);
    }
}