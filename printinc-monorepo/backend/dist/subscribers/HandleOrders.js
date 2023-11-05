"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HandleOrderSubscribers {
    constructor({ eventBusService, sendgridService, orderService, fileService, productMediaService, // Add this line
     }) {
        this.handleOrderPlaced = async (data) => {
            const order = await this.orderService_.retrieve(data.id, {
                relations: [
                    "items",
                    "items.variant",
                    "customer"
                ],
            });
            // find product medias in the order
            const urls = [];
            for (const item of order.items) {
                const productMedias = await this.productMediaService_.list({
                    variant_id: item.variant_id
                });
                await Promise.all(productMedias.map(async (productMedia) => {
                    // get the download URL from the file service
                    const downloadUrl = await this.fileService_.getPresignedDownloadUrl({
                        fileKey: productMedia.file_key,
                        isPrivate: true,
                    });
                    urls.push(downloadUrl);
                }));
            }
            if (urls.length) {
                console.log('Digital Products URLs:', urls);
                // Prepare items in the format required by your SendGrid template
                const itemDetails = order.items.map((item) => ({
                    quantity: item.quantity,
                    price: (item.unit_price / 100).toFixed(2), // Assuming unit_price is in cents
                }));
                // Send an email through SendGrid
                await this.sendGridService_.sendEmail({
                    templateId: "d-8b2d29402c67414fb7293a26f7992c65",
                    from: "support@printinc.shop",
                    to: order.customer.email,
                    dynamic_template_data: {
                        customer: {
                            first_name: order.customer.first_name,
                        },
                        items: itemDetails,
                        total: order.total,
                        billing_address: order.billing_address,
                        downloadUrl: urls[0], // If only one URL is expected, use urls[0]
                    },
                });
            }
        };
        this.sendGridService_ = sendgridService;
        this.orderService_ = orderService;
        this.fileService_ = fileService;
        this.productMediaService_ = productMediaService; // Add this line
        eventBusService.subscribe("order.placed", this.handleOrderPlaced);
    }
}
exports.default = HandleOrderSubscribers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlT3JkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N1YnNjcmliZXJzL0hhbmRsZU9yZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVFLE1BQU0sc0JBQXNCO0lBTTFCLFlBQVksRUFDVixlQUFlLEVBQ2YsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsbUJBQW1CLEVBQUcsZ0JBQWdCO01BQ2pCO1FBV3ZCLHNCQUFpQixHQUFHLEtBQUssRUFDdkIsSUFBeUIsRUFDekIsRUFBRTtZQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDdkQsU0FBUyxFQUFFO29CQUNULE9BQU87b0JBQ1AsZUFBZTtvQkFDZixVQUFVO2lCQUNYO2FBQ0YsQ0FBQyxDQUFBO1lBRUYsbUNBQW1DO1lBQ25DLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUNmLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDOUIsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO29CQUN6RCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQzVCLENBQUMsQ0FBQztnQkFFSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ2YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUU7b0JBQ3ZDLDZDQUE2QztvQkFDN0MsTUFBTSxXQUFXLEdBQUcsTUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDeEMsT0FBTyxFQUFFLFlBQVksQ0FBQyxRQUFRO3dCQUM5QixTQUFTLEVBQUUsSUFBSTtxQkFDaEIsQ0FBQyxDQUFBO29CQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ3hCLENBQUMsQ0FBQyxDQUNILENBQUE7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxpRUFBaUU7Z0JBQ2pFLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtDQUFrQztpQkFDOUUsQ0FBQyxDQUFDLENBQUM7Z0JBRUosaUNBQWlDO2dCQUNqQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLFVBQVUsRUFBRSxvQ0FBb0M7b0JBQ2hELElBQUksRUFBRSx1QkFBdUI7b0JBQzdCLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQ3hCLHFCQUFxQixFQUFFO3dCQUNyQixRQUFRLEVBQUU7NEJBQ1IsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVTt5QkFDdEM7d0JBQ0QsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSzt3QkFDbEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO3dCQUN0QyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLDJDQUEyQztxQkFDbEU7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUE7UUFqRUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQTtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQTtRQUMvQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUEsQ0FBRSxnQkFBZ0I7UUFDakUsZUFBZSxDQUFDLFNBQVMsQ0FDdkIsY0FBYyxFQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQTtJQUNILENBQUM7Q0EwREY7QUFFRCxrQkFBZSxzQkFBc0IsQ0FBQyJ9