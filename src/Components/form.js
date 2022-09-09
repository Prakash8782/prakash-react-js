import { useState } from 'react';
import './form.css';


function Form(props) {
    
    const [newdatas , setDatas] = useState()


    const itemhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,item:event.target.value}
        })

    }
    const offerhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,offer:event.target.value}
        })

    }
    const resthandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,name:event.target.value}
        })
    
    }
    const pricehandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,price:event.target.value}
        })

    }
    const submithandle = (event)=>{
        event.preventDefault();
        props.add(newdatas)
        setDatas({
        name:'',
        item:'',
        price:'',
        offer:''})     
    }
    

    return(
        <div>
            <div className="form-items">
                <fieldset>
                <form onSubmit={submithandle}>
                <label>Restaurant name:</label>
                <input type="text" placeholder="Enter Restaurant" value={newdatas.name} onChange={resthandle}></input><br/>
                <label>Item name:</label>
                <input type="text" placeholder="Enter item" value={newdatas.item} onChange={itemhandle}></input><br/>
                <label>Price:</label>
                <input type="number" placeholder="Enter price" value={newdatas.price} onChange={pricehandle}></input><br/>
                <label>Offer:</label>
                <input type="number" placeholder="Enter Offer" value={newdatas.offer} onChange={offerhandle}></input><br/>
                <input type={"submit"}></input>
                </form>
                </fieldset>
            </div>
        </div>
    );
}

export default Form;
