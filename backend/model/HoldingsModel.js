const {model} =require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");
const HoldingsModel = new model("holding",HoldingsSchema);
//holding yahi naam bn jayega baad me
module.exports ={ HoldingsModel };