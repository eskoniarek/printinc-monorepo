"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const product_media_1 = require("../models/product-media");
const utils_1 = require("@medusajs/utils");
class ProductMediaService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.productVariantService_ =
            container.productVariantService;
    }
    checkVariantInRelations(relations) {
        const variantsRelationIndex = relations.indexOf("variant");
        const isVariantsEnabled = variantsRelationIndex !== -1;
        if (isVariantsEnabled) {
            relations.splice(variantsRelationIndex, 1);
        }
        return [relations, isVariantsEnabled];
    }
    async listAndCount(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const productMediaRepo = this.activeManager_.getRepository(product_media_1.ProductMedia);
        const [relations, isVariantsEnabled,] = this.checkVariantInRelations(config.relations || []);
        config.relations = relations;
        const query = (0, medusa_1.buildQuery)(selector, config);
        const [productMedias, count,] = await productMediaRepo.findAndCount(query);
        if (isVariantsEnabled) {
            // retrieve product variants
            await Promise.all(productMedias.map(async (media, index) => {
                productMedias[index].variant =
                    await this.retrieveVariantByMedia(media);
            }));
        }
        return [productMedias, count];
    }
    async list(selector, config = {
        skip: 0,
        take: 20,
        relations: [],
    }) {
        const [productMedias] = await this.listAndCount(selector, config);
        return productMedias;
    }
    async retrieve(id, config) {
        const productMediaRepo = this.activeManager_.getRepository(product_media_1.ProductMedia);
        const query = (0, medusa_1.buildQuery)({
            id,
        }, config);
        const productMedia = await productMediaRepo.findOne(query);
        if (!productMedia) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "ProductMedia was not found");
        }
        if (config.relations.includes("variant")) {
            productMedia.variant = await this.retrieveVariantByMedia(productMedia);
        }
        return productMedia;
    }
    async retrieveVariantByMedia(productMedia) {
        return await this.productVariantService_.retrieve(productMedia.variant_id, {
            relations: ["product"],
        });
    }
    async create(data) {
        return this.atomicPhase_(async (manager) => {
            const productMediaRepo = manager.getRepository(product_media_1.ProductMedia);
            const productMedia = productMediaRepo.create(data);
            const result = await productMediaRepo.save(productMedia);
            return result;
        });
    }
    async update(id, data) {
        return await this.atomicPhase_(async (manager) => {
            const productMediaRepo = manager.getRepository(product_media_1.ProductMedia);
            const productMedia = await this.retrieve(id);
            Object.assign(productMedia, data);
            return await productMediaRepo.save(productMedia);
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (manager) => {
            const productMediaRepo = manager.getRepository(product_media_1.ProductMedia);
            const productMedia = await this.retrieve(id);
            await productMediaRepo.remove([productMedia]);
        });
    }
}
exports.default = ProductMediaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1tZWRpYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LW1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBTTJCO0FBQ3pCLDJEQUFzRDtBQUN0RCwyQ0FBNkM7QUFNN0MsTUFBTSxtQkFBb0IsU0FBUSwrQkFBc0I7SUFHdEQsWUFBWSxTQUErQjtRQUN6QyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQjtZQUN6QixTQUFTLENBQUMscUJBQXFCLENBQUE7SUFDbkMsQ0FBQztJQUVPLHVCQUF1QixDQUM3QixTQUFtQjtRQUVuQixNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDMUQsTUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUN0RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0M7UUFFRCxPQUFPLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQ2hCLFFBQWlDLEVBQ2pDLFNBQW1DO1FBQ2pDLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtLQUNkO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDeEQsNEJBQVksQ0FDYixDQUFBO1FBRUQsTUFBTSxDQUNKLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQzlCLE1BQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUN2QixDQUFBO1FBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFFNUIsTUFB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