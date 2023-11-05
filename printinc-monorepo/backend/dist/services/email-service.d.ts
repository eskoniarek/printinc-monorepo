import { TransactionBaseService } from "@medusajs/medusa";
declare class EmailService extends TransactionBaseService {
    private readonly sendgridService;
    constructor(container: any);
    sendOrderConfirmationEmail(order: any, downloadLink: string): Promise<void>;
}
export default EmailService;
