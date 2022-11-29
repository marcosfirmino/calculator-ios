import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

export default function Calculator() {
  const [num,setNum] = useState(0)
  const [oldnum,setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function inputNum(e) {
    var input = e.target.value
    if(num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear(e) {
    setNum(0)
  }

  function percentage() {
    setNum(num / 100)
  }

  function changeSign() {
    if(num > 0) {
      setNum(- num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandle(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {
    if(operator === "/") {
      setNum(oldnum / num)
    } else if(operator === "X") {
      setNum(oldnum * num)
    } else if(operator === "-") {
      setNum(oldnum - num)
    } else if(operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num))
    }
  }

  return (
    <>
      <Box m={5}/>
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={5}/>
          <h1 className='result'>{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage} className=''>%</button>
          <button onClick={operatorHandle} value={"/"} className='secondary'>/</button>
          <button onClick={inputNum} value={7} className='primary'>7</button>
          <button onClick={inputNum} value={8} className='primary'>8</button>
          <button onClick={inputNum} value={9} className='primary'>9</button>
          <button onClick={operatorHandle} value={"X"} className='secondary'>X</button>
          <button onClick={inputNum} value={4} className='primary'>4</button>
          <button onClick={inputNum} value={5} className='primary'>5</button>
          <button onClick={inputNum} value={6} className='primary'>6</button>
          <button onClick={operatorHandle} value={"-"} className='secondary'>-</button>
          <button onClick={inputNum} value={1} className='primary'>1</button>
          <button onClick={inputNum} value={2} className='primary'>2</button>
          <button onClick={inputNum} value={3} className='primary'>3</button>
          <button onClick={operatorHandle} value={"+"} className='secondary'>+</button>
          <button id="btnZero" onClick={inputNum} value={0} className='primary'>0</button>
          <button onClick={inputNum} value={"."} className='primary'>,</button>
          <button onClick={calculate} className='secondary'>=</button>
        </div>
      </Container>
    </>
  )
}