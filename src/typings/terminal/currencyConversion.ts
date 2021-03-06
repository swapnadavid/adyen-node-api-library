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


import { Amount } from './amount';

export class CurrencyConversion {
    'commission'?: number;
    'convertedAmount': Amount;
    'customerApprovedFlag'?: boolean;
    'declaration'?: string;
    'markup'?: number;
    'rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commission",
            "baseName": "Commission",
            "type": "number"
        },
        {
            "name": "convertedAmount",
            "baseName": "ConvertedAmount",
            "type": "Amount"
        },
        {
            "name": "customerApprovedFlag",
            "baseName": "CustomerApprovedFlag",
            "type": "boolean"
        },
        {
            "name": "declaration",
            "baseName": "Declaration",
            "type": "string"
        },
        {
            "name": "markup",
            "baseName": "Markup",
            "type": "number"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CurrencyConversion.attributeTypeMap;
    }
}

