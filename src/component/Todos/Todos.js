import React,{Component} from 'react';
import {db} from '../../firebase'; 

export default class Todos extends Component{


    state={
        items:[]


    }

    componentDidMount(){
        db.collection('todos').get().then((snapshots) =>{
            this.setState({ 
                items:snapshots.docs.map(doc =>{
                    console.log(doc.data());


                })


            })


        })


    }


    render(){
return(


    <div>





        </div>





)








}




}