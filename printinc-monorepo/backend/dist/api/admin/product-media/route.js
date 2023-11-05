"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const product_media_1 = require("../../../models/product-media");
const GET = async (req, res) => {
    const productMediaService = req.scope.resolve("productMediaService");
    // omitting pagination for simplicity
    const [productMedias, count] = await productMediaService
        .listAndCount({
        type: product_media_1.MediaType.MAIN,
    }, {
        relations: ["variant"],
    });
    res.json({
        product_medias: productMedias,
        count,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    // validation omitted for simplicity
    const { variant_id, file_key, type = "main", name, mime_type, } = req.body;
    const productMediaService = req.scope.resolve("productMediaService");
    const productMedia = await productMediaService.create({
        variant_id,
        file_key,
        type,
        name,
    });
    res.json({
        product_media: productMedia,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3QtbWVkaWEvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUUsaUVBQXlEO0FBRWxELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBRTNDLHFCQUFxQixDQUFDLENBQUE7SUFDeEIscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxtQkFBbUI7U0FDckQsWUFBWSxDQUFDO1FBQ1osSUFBSSxFQUFFLHlCQUFTLENBQUMsSUFBSTtLQUNyQixFQUFFO1FBQ0QsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO0tBQ3ZCLENBQ0YsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxjQUFjLEVBQUUsYUFBYTtRQUM3QixLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBcEJZLFFBQUEsR0FBRyxPQW9CZjtBQUVNLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLG9DQUFvQztJQUNwQyxNQUFNLEVBQ0osVUFBVSxFQUNWLFFBQVEsRUFDUixJQUFJLEdBQUcsTUFBTSxFQUNiLElBQUksRUFDSixTQUFTLEdBQ1YsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBRVosTUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FFM0MscUJBQXFCLENBQUMsQ0FBQTtJQUN4QixNQUFNLFlBQVksR0FBRyxNQUFNLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxVQUFVO1FBQ1YsUUFBUTtRQUNSLElBQUk7UUFDSixJQUFJO0tBQ0wsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLGFBQWEsRUFBRSxZQUFZO0tBQzVCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQTFCWSxRQUFBLElBQUksUUEwQmhCIn0=