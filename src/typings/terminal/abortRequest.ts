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


import { DisplayOutput } from './displayOutput';
import { MessageReference } from './messageReference';

export class AbortRequest {
    'abortReason': string;
    'displayOutput'?: DisplayOutput;
    'messageReference': MessageReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "abortReason",
            "baseName": "AbortReason",
            "type": "string"
        },
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        }    ];

    static getAttributeTypeMap() {
        return AbortRequest.attributeTypeMap;
    }
}

