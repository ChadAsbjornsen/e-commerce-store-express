const { productCategoryMap } = require("../../common/models/Product");
const { productPriceUnits } = require("../../config");
module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    category: {
      type: "string",
      enum: Object.keys(productCategoryMap)
    },
    image: {
      type: "string",
    },
    price: {
      type: "number",
    },
    priceUnit: {
      type: "string",
      enum: Object.values(productPriceUnits),
    },
  },
  required: ["name", "description", "image", "price", "category"],
  additionalProperties: false,
};
