const mongoose = require('mogoose');
const { Schema, model } = mongoose;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const productSchema = new Schema({
    title: String,
    discount: Number,
    oldPrice: Number,
    newPrice: Number,
    selling: Boolean,
    imgLeave: String,
    imgHover: String,
});

// Include virtuals

// Virtuals in console.log()
productSchema.set('toObject', { virtuals: true });
// Virtuals in JSON
productSchema.set('toJSON', { virtuals: true });

productSchema.plugin(mongooseLeanVirtuals);


const Product = model('Product', productSchema,)
module.exports = Product