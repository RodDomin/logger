import { Rules, DisableOptions } from './types';
declare class Logger {
    prefix?: string;
    disabled?: DisableOptions[];
    date: Date;
    constructor(rules?: Rules);
    private prepareLog;
    log(data: any): void;
    error(err: Error): void;
    warn(warning: any): void;
}
export default Logger;
