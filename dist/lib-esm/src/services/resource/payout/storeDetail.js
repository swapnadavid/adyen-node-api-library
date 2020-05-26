var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Resource from "../../resource";
import Client from "../../../client";
var StoreDetail = (function (_super) {
    __extends(StoreDetail, _super);
    function StoreDetail(service) {
        return _super.call(this, service, service.client.config.endpoint + "/pal/servlet/Payout/" + Client.API_VERSION + "/storeDetail") || this;
    }
    return StoreDetail;
}(Resource));
export default StoreDetail;
//# sourceMappingURL=storeDetail.js.map