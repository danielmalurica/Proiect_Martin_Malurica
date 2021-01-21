const mongoose = require('mongoose');
//Model pentru baza de date
const Schema = mongoose.Schema;

const calatorieSchema = new Schema({
    punctPlecare: { type: String, required: true },
    punctSosire: { type: String, required: true },
    mijlocTransport: { type: String, required: true },
    oraDataPlecare: { type: Date, required: true },
    durataCalatorie: { type: Number, required: true },
    gradAglomerare: { type: String, required: true },
    observatii: { type: String, required: true },
    nivelSatisfactie: { type: String, required: true },

}, {
    timestamps: true,
});

const Calatorie = mongoose.model('Calatorie', calatorieSchema);

module.exports = Calatorie;