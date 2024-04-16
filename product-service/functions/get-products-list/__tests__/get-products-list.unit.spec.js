import { getProductsList } from "../get-products-list";
import { productsList } from "../../../constants/products";

describe("getProductsList", () => {
    it("should return products list", async () => {
        const { statusCode, body } = await getProductsList();

        expect(statusCode).toBe(200);
        expect(body).toBe(JSON.stringify({ products: productsList }, null, 2));
    });
});