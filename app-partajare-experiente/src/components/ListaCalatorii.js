import { Button } from 'bootstrap';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';



/* const Calatorie=props=>(
    <tr>
        <td>{props.calatorie.punctPlecare}</td>
        <td>{props.calatorie.punctSosire}</td>
    </tr>
) */

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

  /*  calatoriiList(){
       return this.state.calatorie.map(currentcalatorie=>{
           return <Calatorie calatorie={currentcalatorie} deleteCalatorie={this.deleteCalatorie} key={currentcalatorie._id}/>;
       })
   } */

   render(){
       return(
           <div>

           </div>
       )
   }

}

export default ListaCalatorii;
