import React, { Component } from 'react'

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state={
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
 
    
    handlePunctPlecare = (event) =>{
    this.setState({
        punctPlecare:event.target.value
    })}
    handlePunctSosire =(event)=>{
    this.setState({
        punctSosire:event.target.value
     })}

    handleMijlocTransport=(event)=>{
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
    handleNivelSatisfactie=(event)=>{
        this.setState({
            nivelSatisfactie:event.target.value
        })}
   
    
    render() {
        return (
            <form class="addCalatorie">
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
                    <select value={this.state.mijlocTransport} onChange={this.handleMijlocTransport}>
                        <option value="autobuz">Autobuz</option>
                        <option value="metrou">Metrou</option>
                        <option value="tramvai">Tramvai</option>
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
                    <input type='number'/>minute
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
                    <label>Nivel satisfactie</label>
                    <button type="button">&#128544;</button>
                    <button type="button">&#128528;</button>
                    <button type="button">&#128513;</button>
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
