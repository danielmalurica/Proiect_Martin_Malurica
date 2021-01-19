import React, { Component } from 'react'

class Homepage extends React.Component {

    state={
        punctPlecare:'',
        punctSosire:'',
        mijlocTransport:'autobuz',
        oraPlecare:new Date(),
        durataCalatorie:0,
        gradAglomerare: 'liber',
        observatii: '',
        nivelSatisfactie: '',
    }

     handlePunctPlecare = (event) =>{
    this.setState({
        punctPlecare:event.target.value
    })}
    handlePunctSosire =(event)=>{
    this.setState({
        punctSosire:event.target.value
     })}

    handleMijlocTranspor=(event)=>{
        this.setState({
            mijlocTransport:event.target.value
        })}

    handleGradAglomerare=(event)=>{
        this.setState({
            gradAglomerare:event.target.value
        })}

    handleObservatii=(event)=>{
        this.setState({
            observatii:event.target.value
        })}
   
    
 
    render() {
        return (
            <form>
                <div>
                    <label>Punct Plecare</label>
                    <input type='text' onChange={this.handlePunctPlecare} />
                </div>
                <div>
                    <label>Punct Sosire</label>
                    <input type='text' onChange={this.handlePunctSosire} />
                </div>
                <div>
                    <label>Mijloc de transport</label>
                    <select value={this.state.mijlocTransport} onChange={this.handleMijlocTranspor}>
                        <option value="autobuz">Autobuz</option>
                        <option value="metrou">Metrou</option>
                        <option value="tramvai">Tramvai</option>
                        <option value="taxi">Taxi</option>
                    </select>
                </div>
                <div>
                    <label>Ora plecare</label>
                    <input type="datetime-local" id="ora-plecare"
                value="2021-01-01T12:00"
                min="2018-06-07T00:00" max="2021-12-12T00:00"/>
                </div>
                <div>
                    <label>Durata calatoriei</label>
                    <input type='number'/>
                    <label>Minute</label>
                </div>

                 <div>
                    <label>Grad de aglomerare</label>
                    <select value={this.state.gradAglomerare} onChange={this.handleGradAglomerare}>
                        <option value="liber">Liber</option>
                        <option value="aglomerat">Aglomerat</option>
                        <option value="foarte">Foarte Aglomerat</option>
                    </select>
                </div>

                <div>
                    <label>Observatii</label>
                    <input type='text' size="50"  onChange={this.handleObservatii} />
                </div>
            <button type="submit">Salvare informatii</button>
            </form>
        )
    }
}

export default Homepage
