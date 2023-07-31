import Card from "../UI/Card";
import { useState,useContext } from "react";
import candyCxt from '../Store/candy-context'
const CandyForm = () => {
  const [candyName, setCandyName] = useState('');
  const [candyDesc, setCandyDesc] = useState('');
  const [candyPrice, setCandyPrice] = useState('');
  
  const context = useContext(candyCxt)
  
  const submitHandler =(e)=>{
    e.preventDefault()
    const item ={
        name:candyName,
        desc:candyDesc,
        price:candyPrice
    }
    context.addItem(item)
    setCandyName('')
    setCandyDesc('')
    setCandyPrice('')
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={candyName}
          onChange={(e) => setCandyName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          value={candyDesc}
          onChange={(e) => setCandyDesc(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          min={1}
          max={10}
          value={candyPrice}
          onChange={(e) => setCandyPrice(e.target.value)}
        />
        <button>Add </button>
      </form>
    </Card>
  );
};

export default CandyForm;
