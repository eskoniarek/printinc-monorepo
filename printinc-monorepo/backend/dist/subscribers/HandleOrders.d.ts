import { AbstractFileService, EventBusService, OrderService } from "@medusajs/medusa";
import ProductMediaService from "../services/product-media";
type InjectedDependencies = {
    eventBusService: EventBusService;
    sendgridService: any;
    orderService: OrderService;
    fileService: AbstractFileService;
    productMediaService: ProductMediaService;
};
declare class HandleOrderSubscribers {
    protected readonly orderService_: OrderService;
    protected sendGridService_: any;
    protected readonly fileService_: AbstractFileService;
    protected readonly productMediaService_: ProductMediaService;
    constructor({ eventBusService, sendgridService, orderService, fileService, productMediaService, }: InjectedDependencies);
    handleOrderPlaced: (data: Record<string, any>) => Promise<void>;
}
export default HandleOrderSubscribers;
