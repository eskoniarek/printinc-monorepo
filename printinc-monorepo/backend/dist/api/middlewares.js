"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const medusa_1 = require("@medusajs/medusa");
exports.config = {
    routes: [
        {
            matcher: "/store/product-media/download/*",
            middlewares: [(0, medusa_1.requireCustomerAuthentication)()],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUcyQjtBQUdaLFFBQUEsTUFBTSxHQUFzQjtJQUN2QyxNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsV0FBVyxFQUFFLENBQUMsSUFBQSxzQ0FBNkIsR0FBRSxDQUFDO1NBQy9DO0tBQ0Y7Q0FDRixDQUFBIn0=