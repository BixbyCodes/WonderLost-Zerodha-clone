const {model} =require("mongoose");
const {PositionsSchema} = require("../schemas/PositionsSchema");
const PositionsModel = new model("position",PositionsSchema);
//holding yahi naam bn jayega baad me
module.exports ={ PositionsModel };