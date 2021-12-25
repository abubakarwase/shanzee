var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var toySchema = mongoose.Schema({
  name: String,
  price: Number,
});
var Toy = mongoose.model("Toy", toySchema);

function validateToy(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Toy = Toy;
module.exports.validate = validateToy;
