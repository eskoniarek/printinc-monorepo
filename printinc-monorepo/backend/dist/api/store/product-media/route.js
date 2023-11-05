"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const product_media_1 = require("../../../models/product-media");
const GET = async (req, res) => {
    const productMediaService = req.scope.resolve("productMediaService");
    // omitting pagination for simplicity
    const [productMedias, count,] = await productMediaService.listAndCount({
        type: product_media_1.MediaType.PREVIEW,
        ...(req.query),
    }, {
        relations: ["variant"],
    });
    res.json({
        product_medias: productMedias,
        count,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3QtbWVkaWEvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUUsaUVBQXlEO0FBRWxELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBRTNDLHFCQUFxQixDQUFDLENBQUE7SUFDeEIscUNBQXFDO0lBQ3JDLE1BQU0sQ0FDSixhQUFhLEVBQ2IsS0FBSyxFQUNOLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxFQUFFLHlCQUFTLENBQUMsT0FBTztRQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztLQUNmLEVBQUU7UUFDRCxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDdkIsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLGNBQWMsRUFBRSxhQUFhO1FBQzdCLEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUF0QlksUUFBQSxHQUFHLE9Bc0JmIn0=