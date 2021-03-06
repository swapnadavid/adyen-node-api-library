/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AnyType } from './anyType';
import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { MenuEntry } from './menuEntry';
import { OutputContent } from './outputContent';

export class DisplayOutput {
    'device': DeviceType;
    'infoQualify': InfoQualifyType;
    'menuEntry'?: Array<MenuEntry>;
    'minimumDisplayTime'?: number;
    'outputContent': OutputContent;
    'outputSignature'?: AnyType;
    'responseRequiredFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "infoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "menuEntry",
            "baseName": "MenuEntry",
            "type": "Array<MenuEntry>"
        },
        {
            "name": "minimumDisplayTime",
            "baseName": "MinimumDisplayTime",
            "type": "number"
        },
        {
            "name": "outputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "outputSignature",
            "baseName": "OutputSignature",
            "type": "AnyType"
        },
        {
            "name": "responseRequiredFlag",
            "baseName": "ResponseRequiredFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DisplayOutput.attributeTypeMap;
    }
}

