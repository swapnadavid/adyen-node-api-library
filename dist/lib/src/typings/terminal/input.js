"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var Input = (function () {
    function Input() {
    }
    Input.getAttributeTypeMap = function () {
        return Input.attributeTypeMap;
    };
    Input.discriminator = undefined;
    Input.attributeTypeMap = [
        {
            "name": "confirmedFlag",
            "baseName": "ConfirmedFlag",
            "type": "boolean"
        },
        {
            "name": "digitInput",
            "baseName": "DigitInput",
            "type": "string"
        },
        {
            "name": "functionKey",
            "baseName": "FunctionKey",
            "type": "string"
        },
        {
            "name": "inputCommand",
            "baseName": "InputCommand",
            "type": "InputCommandType"
        },
        {
            "name": "menuEntryNumber",
            "baseName": "MenuEntryNumber",
            "type": "number"
        },
        {
            "name": "password",
            "baseName": "Password",
            "type": "ContentInformation"
        },
        {
            "name": "textInput",
            "baseName": "TextInput",
            "type": "string"
        }
    ];
    return Input;
}());
exports.Input = Input;
//# sourceMappingURL=input.js.map