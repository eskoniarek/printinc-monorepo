"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMediaCreate1698565796042 = void 0;
class ProductMediaCreate1698565796042 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_media" ALTER COLUMN "mime_type" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_media" ADD CONSTRAINT "FK_variant_id" FOREIGN KEY ("variant_id") REFERENCES "product_variant"("id") ON DELETE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_media" ALTER COLUMN "mime_type" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_media" DROP CONSTRAINT "FK_variant_id"`);
    }
}
exports.ProductMediaCreate1698565796042 = ProductMediaCreate1698565796042;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5ODU2NTc5NjA0Mi1Qcm9kdWN0TWVkaWFDcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlncmF0aW9ucy8xNjk4NTY1Nzk2MDQyLVByb2R1Y3RNZWRpYUNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLCtCQUErQjtJQUM3QixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3BDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFBO1FBQzdGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyw0SUFBNEksQ0FBQyxDQUFBO0lBQ3pLLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1FBQzVGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFBO0lBQzFGLENBQUM7Q0FDSjtBQVZMLDBFQVVLIn0=