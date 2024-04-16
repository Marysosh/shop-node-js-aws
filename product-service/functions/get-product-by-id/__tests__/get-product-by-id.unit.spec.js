import { getProductById } from "../get-product-by-id";
import { productsList } from "../../../constants/products";

const product1 = productsList[0];
describe("getProductById", () => {
    it("should return product info", async () => {
        const { statusCode, body } = await getProductById({pathParameters: {productId: product1.id}});
        
        expect(statusCode).toBe(200);
        expect(body).toBe( JSON.stringify(
            { product: product1 },
            null,
            2
        ));
    });

    it("should return Product not found error", async () => {
        const { statusCode, body } = await getProductById({pathParameters: {productId: "notExisting"}});

        expect(statusCode).toBe(500);
        expect(body).toBe("Product not found");
    });
});
