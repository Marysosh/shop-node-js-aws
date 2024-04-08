import { productsList } from "../../constants/products";

export const getProductsList = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        productsList,
        null,
        2
      ),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  catch(e) {
    console.error(e);
    return {
      statusCode: 500,
      error: e,
    }
  }
};
