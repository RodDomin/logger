"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cli_color_1 = __importDefault(require("cli-color"));
var types_1 = require("./types");
var Logger = /** @class */ (function () {
    function Logger(rules) {
        this.date = new Date();
        this.prefix = rules === null || rules === void 0 ? void 0 : rules.prefix;
        this.disabled = rules === null || rules === void 0 ? void 0 : rules.disable;
    }
    Logger.prototype.prepareLog = function (data) {
        var prefix = this.prefix;
        var strPrefix;
        var hours = this.date.getHours();
        var minutes = this.date.getMinutes();
        var date = this.date.getDate();
        var month = this.date.getMonth();
        var year = this.date.getFullYear();
        if (prefix) {
            strPrefix = "[" + prefix + " | " + hours + ":" + minutes + " " + date + "/" + month + "/" + year + "]";
        }
        else {
            strPrefix = "[" + hours + ":" + minutes + " " + date + "/" + month + "/" + year + "]";
        }
        strPrefix += " " + typeof data + ": ";
        return strPrefix;
    };
    Logger.prototype.log = function (data) {
        var _a;
        var index = (_a = this.disabled) === null || _a === void 0 ? void 0 : _a.findIndex((function (value) { return value === types_1.DisableOptionsEnum.log; }));
        if (index !== 1) {
            var initialData = this.prepareLog(data);
            console.log(cli_color_1.default.green(initialData), data);
        }
    };
    Logger.prototype.error = function (err) {
        var _a;
        var index = (_a = this.disabled) === null || _a === void 0 ? void 0 : _a.findIndex((function (value) { return value === types_1.DisableOptionsEnum.error; }));
        if (index !== 1) {
            var prefix = this.prepareLog(err);
            console.log(cli_color_1.default.red(prefix), err);
        }
    };
    Logger.prototype.warn = function (warning) {
        var _a;
        var index = (_a = this.disabled) === null || _a === void 0 ? void 0 : _a.findIndex((function (value) { return value === types_1.DisableOptionsEnum.warn; }));
        if (index !== 1) {
            var prefix = this.prepareLog(warning);
            console.log(cli_color_1.default.yellow(prefix), warning);
        }
    };
    return Logger;
}());
exports.default = Logger;
