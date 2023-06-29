import { useState } from "react"

function Calculator(){
    const [answer, setAnswer] = useState('answer')
    const [num1, setNum1] =useState('')
    const [num2, setNum2] =useState('')
    const [operator, setOperator] = useState('')
    const handleOperation = (event) => {
        event.preventDefault()
        switch (operator){
            case '+':
                setAnswer(parseInt(num1)+parseInt(num2))
            break;
            case '-':
                setAnswer(parseInt(num1)-parseInt(num2))
            break;
            case '*':
                setAnswer(parseInt(num1)*parseInt(num2))
            break;
            case '/':
                setAnswer(parseInt(num1)/parseInt(num2))
            break;
        }
    }
    return(
        <form onSubmit={handleOperation}>
        <label>First Number:</label>
        <input type="text" key="num1" onChange={(e) => setNum1(e.target.value)}></input>
        <label>Operators:</label>
        <input list="Operators" onChange={(e) => setOperator(e.target.value)}></input>
        <datalist id="Operators">
            <option value='+'></option>
            <option value='-'></option>
            <option value='*'></option>
            <option value='/'></option>
        </datalist>
        <label>Second Number:</label>
        <input type="text" key="num2" onChange={(e) => setNum2(e.target.value)}></input>
        <button onClick={()=>setAnswer('this is the answer')}>=</button>
        <p>{answer}</p>
        </form>
    )
}
export default Calculator