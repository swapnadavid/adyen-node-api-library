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



export class POIProfile {
    'genericProfile'?: POIProfile.GenericProfileEnum;
    'serviceProfiles'?: Array<POIProfile.ServiceProfilesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "genericProfile",
            "baseName": "GenericProfile",
            "type": "POIProfile.GenericProfileEnum"
        },
        {
            "name": "serviceProfiles",
            "baseName": "ServiceProfiles",
            "type": "Array<POIProfile.ServiceProfilesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return POIProfile.attributeTypeMap;
    }
}

export namespace POIProfile {
    export enum GenericProfileEnum {
        Basic = <any> 'Basic',
        Extended = <any> 'Extended',
        Standard = <any> 'Standard'
    }
    export enum ServiceProfilesEnum {
        Batch = <any> 'Batch',
        CardReader = <any> 'CardReader',
        Communication = <any> 'Communication',
        Loyalty = <any> 'Loyalty',
        OneTimeRes = <any> 'OneTimeRes',
        PIN = <any> 'PIN',
        Reservation = <any> 'Reservation',
        Sound = <any> 'Sound',
        StoredValue = <any> 'StoredValue',
        Synchro = <any> 'Synchro'
    }
}
