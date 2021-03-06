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


import { ResultType } from './resultType';

export class Response {
    'additionalResponse'?: string;
    'errorCondition'?: Response.ErrorConditionEnum;
    'result': ResultType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalResponse",
            "baseName": "AdditionalResponse",
            "type": "string"
        },
        {
            "name": "errorCondition",
            "baseName": "ErrorCondition",
            "type": "Response.ErrorConditionEnum"
        },
        {
            "name": "result",
            "baseName": "Result",
            "type": "ResultType"
        }    ];

    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }
}

export namespace Response {
    export enum ErrorConditionEnum {
        Aborted = <any> 'Aborted',
        Busy = <any> 'Busy',
        Cancel = <any> 'Cancel',
        DeviceOut = <any> 'DeviceOut',
        InProgress = <any> 'InProgress',
        InsertedCard = <any> 'InsertedCard',
        InvalidCard = <any> 'InvalidCard',
        LoggedOut = <any> 'LoggedOut',
        MessageFormat = <any> 'MessageFormat',
        NotAllowed = <any> 'NotAllowed',
        NotFound = <any> 'NotFound',
        PaymentRestriction = <any> 'PaymentRestriction',
        Refusal = <any> 'Refusal',
        UnavailableDevice = <any> 'UnavailableDevice',
        UnavailableService = <any> 'UnavailableService',
        UnreachableHost = <any> 'UnreachableHost',
        WrongPIN = <any> 'WrongPIN'
    }
}
