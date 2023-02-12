import { ISettings } from './ISettings';
export class SettingsModel implements ISettings {
    
    constructor(settings?: string) {
        if (settings) {
            const temporalObject: ISettings = JSON.parse(settings);
            this.language = temporalObject.language
        }
    }

    language: string|undefined;
}