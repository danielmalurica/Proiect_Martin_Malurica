const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calatorieSchema = new Schema({
    user: { type: String, required: true },
    punctPlecare: { type: String, required: true },
    punctSosire: { type: String, required: true },
    mijlocTransport: { type: String, required: true },
    oraDataPlecare: { type: Date, required: true },
    durataCalatorie: { type: Number, required: true },
    gradAglomerare: { type: Number, required: true },
    observatii: { type: String, required: true },
    nivelSatisfactie: { type: Number, required: true },
    
}, {
    timestamps: true,
});

const Calatorie = mongoose.model('Calatorie', calatorieSchema);

module.exports = Calatorie;