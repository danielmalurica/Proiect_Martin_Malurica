const router = require('express').Router();
let Calatorie = require('../models/calatorie.model');

router.route('/').get((req, res) => {
    Calatorie.find()
        .then(calatorie => res.json(calatorie))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Adaugare calatorie
router.route('/add').post((req, res) => {
    const punctPlecare = req.body.punctPlecare;
    const punctSosire = req.body.punctSosire;
    const mijlocTransport = req.body.mijlocTransport;
    const oraDataPlecare = Date.parse(req.body.oraDataPlecare);
    const durataCalatorie = Number(req.body.durataCalatorie);
    const gradAglomerare = req.body.gradAglomerare;
    const observatii = req.body.observatii;
    const nivelSatisfactie =req.body.nivelSatisfactie;

    //Creare obiect cu atribute primite
    const newCalatorie = new Calatorie({
        punctPlecare,
        punctSosire,
        mijlocTransport,
        oraDataPlecare,
        durataCalatorie,
        gradAglomerare,
        observatii,
        nivelSatisfactie,
    });


    newCalatorie.save()
        .then(() => res.json('Calatorie adaugata!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Afisare calatorie
router.route('/:id').get((req, res) => {
    Calatorie.findById(req.params.id)
        .then(calatorie => res.json(calatorie))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Stergere calatorie
router.route('/:id').delete((req, res) => {
    Calatorie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Calatorie stearsa!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Modificare calatorie
router.route('/update/:id').post((req, res) => {
    Calatorie.findById(req.params.id)
        .then(calatorie => {
            calatorie.punctPlecare = req.body.punctPlecare;
            calatorie.punctSosire = req.body.punctSosire;
            calatorie.mijlocTransport = req.body.mijlocTransport;
            calatorie.oraDataPlecare = Date.parse(req.body.oraDataPlecare);
            calatorie.durataCalatorie = Number(req.body.durataCalatorie);
            calatorie.gradAglomerare = req.body.gradAglomerare;
            calatorie.observatii = req.body.observatii;
            calatorie.nivelSatisfactie = req.body.nivelSatisfactie;

            calatorie.save()
                .then(() => res.json('Calatorie modificata!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;