import { productsList } from "../../constants/products";

export const getProductById = async (event) => {
  try {
    const product = productsList.find(product => product.id === event.pathParameters.productId);

    if (!product) {
      throw new Error(`Product not found`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(
        { product },
        null,
        2
      ),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }

  catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      body: e.message,
    }
  }
};
