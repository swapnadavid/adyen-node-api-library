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


import { LoyaltyAccountStatus } from './loyaltyAccountStatus';
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';

export class PaymentAccountStatus {
    'currency'?: string;
    'currentBalance'?: number;
    'loyaltyAccountStatus'?: LoyaltyAccountStatus;
    'paymentAcquirerData'?: PaymentAcquirerData;
    'paymentInstrumentData'?: PaymentInstrumentData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "currentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "loyaltyAccountStatus",
            "baseName": "LoyaltyAccountStatus",
            "type": "LoyaltyAccountStatus"
        },
        {
            "name": "paymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAccountStatus.attributeTypeMap;
    }
}

