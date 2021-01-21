import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AdaugaCalatorie extends Component {

  constructor(props) {
    super(props);

    this.onChangePunctPlecare = this.onChangePunctPlecare.bind(this);
    this.onChangePunctSosire = this.onChangePunctSosire.bind(this);
    this.onChangeMijlocTransport = this.onChangeMijlocTransport.bind(this);
    this.onChangeDurataCalatorie = this.onChangeDurataCalatorie.bind(this);
    this.onChangeOraDataPlecare = this.onChangeOraDataPlecare.bind(this);
    this.onChangeGradAglomerare = this.onChangeGradAglomerare.bind(this);
    this.onChangeObservatii = this.onChangeObservatii.bind(this);
    this.onChangeNivelSatisfactie = this.onChangeNivelSatisfactie.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //initializare 
    this.state = {
      punctPlecare: '',
      punctSosire: '',
      mijlocTransport: '',
      oraDataPlecare: new Date(),
      durataCalatorie: 1,
      gradAglomerare: 'Liber',
      observatii: '-',
      nivelSatisfactie: '',
    }
  }

  //setteri
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

  onChangeOraDataPlecare(date) {
    this.setState({
      oraDataPlecare: date
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

  //event Submit
  onSubmit(e) {
    e.preventDefault();

    const calatorie = {
      punctPlecare: this.state.punctPlecare,
      punctSosire: this.state.punctSosire,
      mijlocTransport: this.state.mijlocTransport,
      durataCalatorie: this.state.durataCalatorie,
      gradAglomerare: this.state.gradAglomerare,
      oraDataPlecare: this.state.oraDataPlecare,
      observatii: this.state.observatii,
      nivelSatisfactie: this.state.nivelSatisfactie,
    }

    console.log(calatorie);

    axios.post('http://localhost:5000/calatorie/add', calatorie)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {


    return (
      <div className="addCalatorieForm">
        <h3>Introduceți datele de mai jos pentru a adăuga o călătorie nouă:</h3>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
            <tr>
              <td><label>Punct Plecare</label></td>
              <td><input type='text' value={this.state.punctPlecare} onChange={this.onChangePunctPlecare} /></td>
            </tr>
            <tr>
              <td><label>Punct Sosire</label></td>
              <td><input type='text' value={this.state.punctSosire} onChange={this.onChangePunctSosire} /></td>
            </tr>
            <tr>
              <td><label>Mijloc de transport</label></td>
              <td>
                <select value={this.state.mijlocTransport} onChange={this.onChangeMijlocTransport}>
                  <option value="Autobuz">Autobuz</option>
                  <option value="Metrou">Metrou</option>
                  <option value="Tramvai">Tramvai</option>
                  <option value="Tren">Tren</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Oră plecare: </label></td>
              <td>
                <DatePicker selected={this.state.oraDataPlecare}
                  onChange={ this.onChangeOraDataPlecare}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd HH:mm"
                  />
              </td>
            </tr>
            <tr>
              <td><label>Durată călătorie (minute)</label></td>
              <td>
                <input type='number' value={this.state.durataCalatorie} onChange={this.onChangeDurataCalatorie}>
                </input>
              </td>
            </tr>
            <tr>
              <td><label>Grad de aglomerare</label></td>
              <td>
                <select value={this.state.gradAglomerare} onChange={this.onChangeGradAglomerare}>
                  <option value="Liber">Liber</option>
                  <option value="Aglomerat">Aglomerat</option>
                  <option value="Foarte Aglomerat">Foarte Aglomerat</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Observații</label></td>
              <td><input type='text' value={this.state.observatii} onChange={this.onChangeObservatii} /></td>
            </tr>
            <tr>
              <td><label>Nivel satisfacție</label></td>
              <td>
                <select value={this.state.nivelSatisfactie} onChange={this.onChangeNivelSatisfactie}>
                  <option value="" selected disabled hidden>Alege o opțiune</option>
                  <option value="&#128544;">&#128544;</option>
                  <option value="&#128528;">&#128528;</option>
                  <option value="&#128513;">&#128513;</option>
                </select>
              </td>
            </tr>
            </tbody>
            
          </table>
          <div>
            <input type="submit" value="Adaugă călătorie"  />
          </div>
        </form>
      </div>
    )
  };
}

