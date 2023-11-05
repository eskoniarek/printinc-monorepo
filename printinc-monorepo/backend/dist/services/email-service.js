"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
class EmailService extends medusa_1.TransactionBaseService {
    constructor(container) {
        super(container);
        this.sendgridService = container.resolve("sendgridService");
    }
    async sendOrderConfirmationEmail(order, downloadLink) {
        // Assuming the customer's name is stored in the order object as order.customerName
        const customerName = order.customerName || "Customer";
        const sendOptions = {
            templateId: "d-8b2d29402c67414fb7293a26f7992c65",
            from: "PrintInc <support@printinc.shop>",
            to: order.email,
            subject: `Order Confirmation: ${order.id}`,
            dynamic_template_data: {
                customerName: customerName,
                downloadLink: downloadLink,
                predefinedLink: "Your predefined link"
            },
        };
        try {
            await this.sendgridService.sendEmail(sendOptions);
        }
        catch (error) {
            console.error("Sendgrid Error:", error);
            throw new Error("Failed to send order confirmation email");
        }
    }
}
exports.default = EmailService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9lbWFpbC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTBEO0FBSzFELE1BQU0sWUFBYSxTQUFRLCtCQUFzQjtJQUcvQyxZQUFZLFNBQVM7UUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxLQUFLLENBQUMsMEJBQTBCLENBQUMsS0FBVSxFQUFFLFlBQW9CO1FBQy9ELG1GQUFtRjtRQUNuRixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBQztRQUV0RCxNQUFNLFdBQVcsR0FBRztZQUNsQixVQUFVLEVBQUUsb0NBQW9DO1lBQ2hELElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2YsT0FBTyxFQUFFLHVCQUF1QixLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzFDLHFCQUFxQixFQUFFO2dCQUNyQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLGNBQWMsRUFBRSxzQkFBc0I7YUFDdkM7U0FDRixDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkQ7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztDQUNGO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=