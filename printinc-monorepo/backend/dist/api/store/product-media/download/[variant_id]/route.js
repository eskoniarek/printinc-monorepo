"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const product_media_1 = require("../../../../../models/product-media");
const GET = async (req, res) => {
    const variantId = req.params.variant_id;
    if (!variantId) {
        throw new Error("Variant ID is required");
    }
    const ordersService = req.scope.resolve("orderService");
    const orders = await ordersService.list({
        customer_id: req.user.customer_id,
    }, {
        relations: ["items", "items.variant"],
    });
    let variant;
    orders.some((order) => (order.items.some((item) => {
        if (item.variant_id === variantId) {
            variant = item.variant;
            return true;
        }
        return false;
    })));
    if (!variant) {
        throw new Error("Customer hasn't purchased this product.");
    }
    // get the product media and the presigned URL
    const productMediaService = req.scope.resolve("productMediaService");
    const productMedias = await productMediaService.list({
        type: product_media_1.MediaType.MAIN,
        variant_id: variant.id,
    });
    const fileService = req.scope.resolve("fileService");
    res.json({
        url: await fileService.getPresignedDownloadUrl({
            fileKey: productMedias[0].file_key,
            isPrivate: true,
        }),
        name: productMedias[0].name,
        mime_type: productMedias[0].mime_type,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3QtbWVkaWEvZG93bmxvYWQvW3ZhcmlhbnRfaWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLHVFQUErRDtBQUV4RCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0tBQzFDO0lBQ0QsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBRXJDLGNBQWMsQ0FBQyxDQUFBO0lBQ2pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQztRQUN0QyxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO0tBQ2xDLEVBQUU7UUFDRCxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0tBQ3RDLENBQUMsQ0FBQTtJQUVGLElBQUksT0FBdUIsQ0FBQTtJQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDdEIsT0FBTyxJQUFJLENBQUE7U0FDWjtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQTtLQUMzRDtJQUVELDhDQUE4QztJQUM5QyxNQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUUzQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3hCLE1BQU0sYUFBYSxHQUFHLE1BQU0sbUJBQW1CLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksRUFBRSx5QkFBUyxDQUFDLElBQUk7UUFDcEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO0tBQ3ZCLENBQUMsQ0FBQTtJQUVGLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUVuQyxhQUFhLENBQUMsQ0FBQTtJQUVoQixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQzdDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtZQUNsQyxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQzNCLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUN0QyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUF0RFksUUFBQSxHQUFHLE9Bc0RmIn0=