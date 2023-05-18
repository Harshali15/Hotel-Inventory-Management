import { InjectionToken } from "@angular/core";
// import { AppConfig } from "./appConfig.interface";
import { environment } from "src/environments/environment";
import { AppConfig } from "./appconfig.interface";

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint  //now you have to do it only once, not impoart everywhere
}