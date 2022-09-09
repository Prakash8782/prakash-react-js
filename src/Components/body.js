import './body.css';
import{useState} from 'react';
import Food from './food';
import Form from './form';

function Body(props){
    var foodlist=[
        {
          name:"Sree Nambee Cafe",
          item:"Briyani",
          price:200,
          offer:10
        },
        {
          name:"Noon Arabian Grill",
          item:"Briyani",
          price:150,
          offer:20
        }
      ]
      const [foods,setfoods]=useState([...foodlist]);
      function updateFoods(newFoods){
        setfoods([...foods,newFoods])
      }
    return(
        <div className='container'>
            <Form add={updateFoods}></Form>
            <div className='wrapper'>
                {/* <Food img={props.foods[0].img} name={props.foods[0].name} price={props.foods[0].price} offer={props.foods[0].offer}></Food> */}
            {foods.map((food) =>{
                return(
                    <Food key={Math.random()} name={food.name} item={food.item} price={food.price} offer={food.offer}></Food>
                )
            })}
            </div>
        </div>
    )
}
export default Body;