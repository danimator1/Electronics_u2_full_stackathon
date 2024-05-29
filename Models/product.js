const { Schema } = require('mongoose');

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: true },
    image: { type: URL, required: true, }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);