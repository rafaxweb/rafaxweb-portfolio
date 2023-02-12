import { SettingsModel } from './../models/SettingsModel';
export class SettingsRepository {

    public static addElement(setting: string) : void {
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
}