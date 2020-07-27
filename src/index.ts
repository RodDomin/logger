import clc from 'cli-color';
import { Rules, DisableOptions, DisableOptionsEnum } from './types';

class Logger {
  prefix?: string;
  disabled?: DisableOptions[];
  date = new Date();

  constructor(rules?: Rules) {
    this.prefix = rules?.prefix;
    this.disabled = rules?.disable;
  }

  private prepareLog(data: any): string {
    const { prefix } = this;
    let strPrefix;

    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    const date = this.date.getDate();
    const month = this.date.getMonth();
    const year = this.date.getFullYear();

    if (prefix) {
      strPrefix = `[${prefix} | ${hours}:${minutes} ${date}/${month}/${year}]`;

    } else {
      strPrefix = `[${hours}:${minutes} ${date}/${month}/${year}]`;
    }

    strPrefix += ` ${typeof data}: `;

    return strPrefix;
  }

  log(data: any): void {
    const index = this.disabled?.findIndex(((value: any) => value === DisableOptionsEnum.log));

    if (
      index !== 1
    ) {
      const initialData = this.prepareLog(data);

      console.log(
        clc.green(
          initialData,
        ),
        data
      );
    }
  }

  error(err: Error) {
    const index = this.disabled?.findIndex(((value: any) => value === DisableOptionsEnum.error));

    if (
      index !== 1
    ) {
      const prefix = this.prepareLog(err);

      console.log(
        clc.red(
          prefix
        ),
        err
      );
    }
  }

  warn(warning: any) {
    const index = this.disabled?.findIndex(((value: any) => value === DisableOptionsEnum.warn));

    if (
      index !== 1
    ) {
      const prefix = this.prepareLog(warning);

      console.log(
        clc.yellow(
          prefix
        ),
        warning
      );
    }

  }
}

export default Logger;
