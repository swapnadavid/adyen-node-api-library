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

export class CardReaderAPDURequest {
    'aPDUClass': AnyType;
    'aPDUData'?: AnyType;
    'aPDUExpectedLength'?: AnyType;
    'aPDUInstruction': AnyType;
    'aPDUPar1': AnyType;
    'aPDUPar2': AnyType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aPDUClass",
            "baseName": "APDUClass",
            "type": "AnyType"
        },
        {
            "name": "aPDUData",
            "baseName": "APDUData",
            "type": "AnyType"
        },
        {
            "name": "aPDUExpectedLength",
            "baseName": "APDUExpectedLength",
            "type": "AnyType"
        },
        {
            "name": "aPDUInstruction",
            "baseName": "APDUInstruction",
            "type": "AnyType"
        },
        {
            "name": "aPDUPar1",
            "baseName": "APDUPar1",
            "type": "AnyType"
        },
        {
            "name": "aPDUPar2",
            "baseName": "APDUPar2",
            "type": "AnyType"
        }    ];

    static getAttributeTypeMap() {
        return CardReaderAPDURequest.attributeTypeMap;
    }
}

