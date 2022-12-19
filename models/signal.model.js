const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const signalSchema = new Schema({
  signal: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Bitcoin: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Ethereum: {type: String,required: false,unique: false,trim: false,minlength: 0},
  eur_jpy: {type: String,required: false,unique: false,trim: false,minlength: 0},
  usd_chf: {type: String,required: false,unique: false,trim: false,minlength: 0},
  aud_cad: {type: String,required: false,unique: false,trim: false,minlength: 0},
  eur_usd: {type: String,required: false,unique: false,trim: false,minlength: 0},
  chf_jpy: {type: String,required: false,unique: false,trim: false,minlength: 0},
  WCO: {type: String,required: false,unique: false,trim: false,minlength: 0},
  NG: {type: String,required: false,unique: false,trim: false,minlength: 0},
  BO: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Platinum: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Silver: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Gold: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Signal = mongoose.model("Signal",signalSchema)

module.exports = Signal;


