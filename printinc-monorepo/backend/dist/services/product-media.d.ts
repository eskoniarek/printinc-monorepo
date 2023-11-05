import { FindConfig, ProductVariantService, Selector, TransactionBaseService } from "@medusajs/medusa";
import { ProductMedia } from "../models/product-media";
type InjectedDependencies = {
    productVariantService: ProductVariantService;
};
declare class ProductMediaService extends TransactionBaseService {
    protected productVariantService_: ProductVariantService;
    constructor(container: InjectedDependencies);
    private checkVariantInRelations;
    listAndCount(selector?: Selector<ProductMedia>, config?: FindConfig<ProductMedia>): Promise<[ProductMedia[], number]>;
    list(selector?: Selector<ProductMedia>, config?: FindConfig<ProductMedia>): Promise<ProductMedia[]>;
    retrieve(id: string, config?: FindConfig<ProductMedia>): Promise<ProductMedia>;
    retrieveVariantByMedia(productMedia: ProductMedia): Promise<import("@medusajs/medusa").ProductVariant>;
    create(data: Pick<ProductMedia, "name" | "file_key" | "variant_id" | "type">): Promise<ProductMedia>;
    update(id: string, data: Omit<Partial<ProductMedia>, "id">): Promise<ProductMedia>;
    delete(id: string): Promise<void>;
}
export default ProductMediaService;
