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


import { IdentificationType } from './identificationType';

export class LoyaltyAccountId {
    'entryMode': Array<LoyaltyAccountId.EntryModeEnum>;
    'identificationSupport'?: LoyaltyAccountId.IdentificationSupportEnum;
    'identificationType': IdentificationType;
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<LoyaltyAccountId.EntryModeEnum>"
        },
        {
            "name": "identificationSupport",
            "baseName": "IdentificationSupport",
            "type": "LoyaltyAccountId.IdentificationSupportEnum"
        },
        {
            "name": "identificationType",
            "baseName": "IdentificationType",
            "type": "IdentificationType"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAccountId.attributeTypeMap;
    }
}

export namespace LoyaltyAccountId {
    export enum EntryModeEnum {
        Contactless = <any> 'Contactless',
        File = <any> 'File',
        ICC = <any> 'ICC',
        Keyed = <any> 'Keyed',
        MagStripe = <any> 'MagStripe',
        Manual = <any> 'Manual',
        Mobile = <any> 'Mobile',
        RFID = <any> 'RFID',
        Scanned = <any> 'Scanned',
        SynchronousICC = <any> 'SynchronousICC',
        Tapped = <any> 'Tapped'
    }
    export enum IdentificationSupportEnum {
        HybridCard = <any> 'HybridCard',
        LinkedCard = <any> 'LinkedCard',
        LoyaltyCard = <any> 'LoyaltyCard',
        NoCard = <any> 'NoCard'
    }
}
