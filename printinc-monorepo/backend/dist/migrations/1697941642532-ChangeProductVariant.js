"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class changeProductVariant1697941642532 {
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE \"product_variant\"" +
            " ADD COLUMN \"product_medias\" text");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE \"product_variant\" DROP COLUMN \"product_medias\"");
    }
}
exports.default = changeProductVariant1697941642532;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5Nzk0MTY0MjUzMi1DaGFuZ2VQcm9kdWN0VmFyaWFudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE2OTc5NDE2NDI1MzItQ2hhbmdlUHJvZHVjdFZhcmlhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLGlDQUFpQztJQUMvQixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3hDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDdkIsaUNBQWlDO1lBQ2pDLHFDQUFxQyxDQUNwQyxDQUFBO0lBQ0QsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDMUMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUN2QixnRUFBZ0UsQ0FDL0QsQ0FBQTtJQUNELENBQUM7Q0FDRDtBQUVELGtCQUFlLGlDQUFpQyxDQUFBIn0=