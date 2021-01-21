import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Calatorie = props => (
    <tr>
        <td>{props.calatorie.punctPlecare}</td>
        <td>{props.calatorie.punctSosire}</td>
        <td>{props.calatorie.mijlocTransport}</td>
        <td>{props.calatorie.oraDataPlecare}</td>
        <td>{props.calatorie.durataCalatorie}</td>
        <td>{props.calatorie.gradAglomerare}</td>
        <td>{props.calatorie.observatii}</td>
        <td>{props.calatorie.nivelSatisfactie}</td>
        <td>
            <Link to={"/edit/" + props.calatorie._id}>Editare</Link> | <a href="#" onClick={() => { props.deleteCalatorie(props.calatorie._id) }}>Ștergere</a>
        </td>
    </tr>
)

class ListaCalatorii extends Component {
    constructor(props) {
        super(props);
        this.state = { calatorie: [] };
         this.deleteCalatorie = this.deleteCalatorie.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/calatorie')
            .then(response => {
                this.setState({ calatorie: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

     deleteCalatorie(id) {
    axios.delete('http://localhost:5000/calatorie/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      calatorie: this.state.calatorie.filter(el => el._id !== id)
    })
  }

    calatoriiList() {
        return this.state.calatorie.map(currentcalatorie => {
            return <Calatorie calatorie={currentcalatorie} deleteCalatorie={this.deleteCalatorie} key={currentcalatorie._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Călătorii</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Punct Plecare</th>
                            <th>Punct Sosire</th>
                            <th>Mijloc de Transport</th>
                            <th>Data și Ora</th>
                            <th>Durata</th>
                            <th>Grad Aglomerare</th>
                            <th>Observații</th>
                            <th>Nivel Satisfacție</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.calatoriiList()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ListaCalatorii;
