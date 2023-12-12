import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year,setYear] = useState(0);
  const [result, setResult] = useState(0);
  const [isPrincipal, setIsPrincipal] = useState(true);
  const [isInterest, setIsInterest] = useState(true);
  const [isYear, setIsYear] = useState(true);
  console.log(principal)
  const calculateInterest = (e) => {
    e.preventDefault();
    const result = (principal*interest*year)/100;
    console.log('Total interest = Rs.', result);
    setResult(result);
  }
  const handleReset = () => {
    setPrincipal(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }
  const validate = (e) => {
    const{name, value} = e.target;
    
    //console.log(name, value);
    if(name === 'principalValue'){
      
      setPrincipal(value);
      let res = (!!value.match(/^[0-9]+$/));
      //console.log(res);
      if(res === true) {
        setIsPrincipal(true)
      } else {
        setIsPrincipal(false)
      }
    } else if (name === 'interestField'){
      setInterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true){
        setIsInterest(true)
      } else {
        setIsInterest(false)
      }
    } else {
      setYear(value);
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true){
        setIsYear(true)
      } else {
        setIsYear(false)
      }
    }
  }
  //console.log('=====PRINCIPAL AMOUNT=====',principal);
  return (
    <>

    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{backgroundColor:'white',
         height:'90vh'}}>
          <div className='bg-light p-5 rounded' style={{width:'500px'}}>
          <h1 style={{color:'lightcoral', textAlign:'center'}}>Simple Interest App</h1>
          <p style={{textAlign:'center'}}>Calculate Simple Interest Easily</p>
          <div style={{padding:'30px', height:'150px', textAlign:'center'}} className='bg-warning mt-3 rounded '>
            <h2><b>&#8377;{result}</b></h2>
            <p>Total simple interest</p>

          </div>
          <div>
          <form action='' className='mt-3' onSubmit={calculateInterest}>
            
            <TextField className='w-100' id="outlined-basic" label="Principal Amount" variant="outlined" 
             value = {principal} 
             name = 'principalValue' 
             onChange={(e) => validate(e)}/>
             {
              !isPrincipal &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
             }
            <TextField className='w-100 mt-2' id="outlined-basic" label="Annual Interest Rate" variant="outlined" 
             value = {interest} 
             name = 'interestField' 
             onChange={(e) => validate(e)}/>
             {
              !isInterest &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
             }
            <TextField className='w-100 mt-2' id="outlined-basic" label="Year" variant="outlined" 
             value = {year} 
             name = 'totalYear' 
             onChange={(e) => validate(e)}/>
             {
              !isYear &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
             }
             <Stack direction="row" spacing={2} className='mt-3'>
           <button disabled = {isPrincipal && isInterest && isYear ? false : true} type='submit' variant='contained' className='bg-success' style={{height:'50px',width:'200px',color:'white'}}>Calculate</button>
           <button onClick='handleReset' variant='contained' className='bg-success' style={{height:'50px',width:'200px', color:'white'}}>Reset</button>

          </Stack>
          </form>
          
          </div>
          
          </div>
    

    </div>
          
    
    
    </>
  );
}

export default App;
