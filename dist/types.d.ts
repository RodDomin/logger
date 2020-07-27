export interface Rules {
    disable?: DisableOptions[];
    prefix?: string;
}
export declare type DisableOptions = 'warn' | 'error' | 'log';
export declare enum DisableOptionsEnum {
    warn = "warn",
    error = "error",
    log = "log"
}
