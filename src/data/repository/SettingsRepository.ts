import { SettingsModel } from './../models/SettingsModel';
export class SettingsRepository {

    public static addElement(setting: SettingsModel) : void {
        localStorage.setItem("Settings", JSON.stringify(setting));
    }

    public static getElement() : SettingsModel {

        const settings: string|null = localStorage.getItem("Settings");
        if (settings !== null)  {
            const obj: SettingsModel = JSON.parse(settings);
            return obj;
        }
        return new SettingsModel();
    }

    public static getLanguage(): string|undefined {
        const settings = this.getElement();
        return settings.language;
    }
}