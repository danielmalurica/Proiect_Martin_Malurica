import { Button } from 'bootstrap';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';



 const Calatorie=props=>(
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
      <Link to={"/edit/"+props.calatorie._id}>Editare</Link> | <a href="#" onClick={() => {  }}>Stergere</a>
    </td>
    </tr>
) 

class ListaCalatorii extends Component {
   constructor(props){
       super(props);

       

       this.state={calatorie:[]};

   }

   componentDidMount(){
       axios.get('http://localhost:5000/calatorie')
       .then(response=>{
           this.setState({calatorie:response.data})
       })
       .catch((error)=>{
           console.log(error);
       })
   }

   deteleCalatorie(id){
       axios.delete('http://localhost:5000/calatorie'+id)
       .then(res=>console.log(res.data));

       this.setState({
           calatorie:this.state.calatorie.filter(el=>el._id!==id)
       })
   }

         calatoriiList(){
       return this.state.calatorie.map(currentcalatorie=>{
           return <Calatorie calatorie={currentcalatorie} deleteCalatorie={this.deleteCalatorie} key={currentcalatorie._id}/>;
       })
   } 

   render(){
       return(
           <div>
               <h3>Calatorii</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Punct Plecare</th>
              <th>Punct Sosire</th>
              <th>Mijloc de Transport</th>
              <th>Data si Ora</th>
              <th>Durata</th>
              <th>Grad Aglomerare</th>
              <th>Observatii</th>
              <th>Nivel Satisfactie</th>
            </tr>
          </thead>
          <tbody>
            { this.calatoriiList() }
          </tbody>
        </table>
           </div>
       )
   }

}

export default ListaCalatorii;
