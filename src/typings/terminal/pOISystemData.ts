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
import { POISoftware } from './pOISoftware';
import { POIStatus } from './pOIStatus';
import { POITerminalData } from './pOITerminalData';

export class POISystemData {
    'dateTime': { [key: string]: AnyType; };
    'pOISoftware': POISoftware;
    'pOIStatus'?: POIStatus;
    'pOITerminalData'?: POITerminalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dateTime",
            "baseName": "DateTime",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "pOISoftware",
            "baseName": "POISoftware",
            "type": "POISoftware"
        },
        {
            "name": "pOIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        },
        {
            "name": "pOITerminalData",
            "baseName": "POITerminalData",
            "type": "POITerminalData"
        }    ];

    static getAttributeTypeMap() {
        return POISystemData.attributeTypeMap;
    }
}

