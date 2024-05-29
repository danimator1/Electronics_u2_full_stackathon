const { Schema } = require('mongoose');

const BrandSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Brand', BrandSchema);