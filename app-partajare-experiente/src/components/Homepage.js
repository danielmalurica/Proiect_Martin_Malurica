import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangePunctPlecare = this.onChangePunctPlecare.bind(this);
    this.onChangePunctSosire = this.onChangePunctSosire.bind(this);
    this.onChangeMijlocTransport = this.onChangeMijlocTransport.bind(this);
    this.onChangeDurataCalatorie = this.onChangeDurataCalatorie.bind(this);
    this.onchangeOraDataPlecare = this.onchangeOraDataPlecare.bind(this);
    this.onChangeGradAglomerare = this.onChangeGradAglomerare.bind(this);
    this.onChangeObservatii=this.onChangeObservatii.bind(this);
    this.onChangeNivelSatisfactie=this.onChangeNivelSatisfactie.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        punctPlecare:'',
        punctSosire:'',
        mijlocTransport:'autobuz',
        oraDataPlecare:new Date(),
        durataCalatorie:0,
        gradAglomerare: 'liber',
        observatii: '',
        nivelSatisfactie: '',
    }
  }

 

  onChangePunctPlecare(event) {
    this.setState({
      punctPlecare: event.target.value
    })
  }

  onChangePunctSosire(event) {
    this.setState({
      punctSosire: event.target.value
    })
  }

   onChangeMijlocTransport(event) {
    this.setState({
      mijlocTransport: event.target.value
    })
  }

  onChangeDurataCalatorie(event) {
    this.setState({
      durataCalatorie: event.target.value
    })
  }

  onchangeOraDataPlecare(date) {
    this.setState({
      date: date
    })
  }

   onChangeGradAglomerare(event) {
    this.setState({
      gradAglomerare: event.target.value
    })
  }

   onChangeObservatii(event) {
    this.setState({
      observatii: event.target.value
    })
  }

   onChangeNivelSatisfactie(event) {
    this.setState({
      nivelSatisfactie: event.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const calatorie = {
      punctPlecare: this.state.punctPlecare,
      punctSosire: this.state.punctSosire,
      mijlocTransport:this.state.mijlocTransport,
      durataCalatorie: this.state.durataCalatorie,
      gradAglomerare:this.state.gradAglomerare,
      oraDataPlecare: this.state.date,
      observatii:this.state.observatii,
      nivelSatisfactie:this.state.nivelSatisfactie,
    }

    console.log(calatorie);

    axios.post('http://localhost:5000/calatorie/add', calatorie)
      .then(res => console.log(res.data));

     window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Introdu datele de mai jos pentru a adauga o calatorie noua:</h3>
      <form onSubmit={this.onSubmit}>
        
       <div>
            <label>Punct Plecare</label>
            <input type='text'  value={this.state.punctPlecare} onChange={this.onChangePunctPlecare} />
        </div>

        <div>
            <label>Punct Sosire</label>
            <input type='text'  value={this.state.punctSosire} onChange={this.onChangePunctSosire} />
        </div>

        <div>
                    <label>Mijloc de transport</label>
                    <select value={this.state.mijlocTransport} onChange={this.onChangeMijlocTransport}>
                        <option value="autobuz">Autobuz</option>
                        <option value="metrou">Metrou</option>
                        <option value="tramvai">Tramvai</option>
                        <option value="tren">Tren</option>
                    </select>
        </div>

        <div className="form-group">
          <label>Ora plecare: </label>
          <div>
            <DatePicker
              selected={this.state.oraDataPlecare}
              onChange={this.onchangeOraDataPlecare}
              showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                
            />
          </div>
        </div>
        <div>
                    <label>Durata calatoriei(in minute)</label>
                    <input type='number'
                    value={this.state.durataCalatorie}
              onChange={this.onChangeDurataCalatorie}
              />
        </div>

         <div>
                    <label>Grad de aglomerare</label>
                    <select value={this.state.gradAglomerare} onChange={this.onChangeGradAglomerare}>
                        <option value="liber">Liber</option>
                        <option value="aglomerat">Aglomerat</option>
                        <option value="foarte">Foarte Aglomerat</option>
                    </select>
                </div>

          <div>
                    <label>Observatii</label>
            <input type='text'  value={this.state.observatii} onChange={this.onChangeObservatii} />
                </div>

        <div>
                    <label>Nivel satisfactie</label>
                     <select value={this.state.nivelSatisfactie} onChange={this.onChangeNivelSatisfactie}>
                         <option value="&#128544;">&#128544;</option>
                        <option value="&#128528;">&#128528;</option>
                        <option value="&#128513;">&#128513;</option>
                     </select>
                   
                    
                </div>
        

        <div className="form-group">
          <input type="submit" value="Adauga calatorie noua" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}