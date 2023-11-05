"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const POST = async (req, res) => {
    const emailService = req.scope.resolve("emailService");
    const order = req.body.order;
    const downloadLink = req.body.downloadLink;
    try {
        await emailService.sendOrderConfirmationEmail(order, downloadLink);
        res.status(200).json({ message: "Email sent successfully" });
    }
    catch (error) {
        console.error("Failed to send email:", error);
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2VtYWlsL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNwRSxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM3QixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUUzQyxJQUFJO1FBQ0YsTUFBTSxZQUFZLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztLQUM5RDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDakY7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLElBQUksUUFZZiJ9