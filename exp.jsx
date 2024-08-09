import React,{useState} from "react"
function Tracker(){
    const [list,addList]=useState([])
    const [text,setText]=useState("")
    const [amount,setAmount]=useState("")
    const [income,setIncome]=useState("0")
    const [expense,setExp]=useState("0")
    const [bcolor,setcolor]=useState("")
    const handleText=(e)=>{
        setText(e.target.value)
    }
    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }
    const removeTask=(index)=>{
        addList(list.filter((_,i)=> i!=index))
    }
    const addtoList=()=>{
        if(text.trim()&&amount.trim()!==""){
           const listVal={
                    valtext: text,
                    valamount: amount,
                    }
            if(amount[0]=="+"||amount[0]=="-"){
            addList(l => [...l,listVal])}
        }
        if(amount[0]=="+"){
            setIncome(i => i.concat(amount))
            setAmount("")
            setText("")
        }
        else if(amount[0]=="-"){
            setExp(e => e.concat(amount.replace("-","+")))
            setAmount("")
            setText("")
        }
        else{
            setAmount("")
            setText("")
        }
    }
    return(
        <div className="container">
            <div className="tracker">
                <h2>Expense Tracker</h2>

                <div className="balance">
                    <h4>YOUR BALANCE</h4><p className="numbers"><strong>&#8377;{eval(income)-eval(expense)}</strong></p>
                </div>
                <div className="values">
                    <h3>INCOME<p className="numbers" style={{color: "green"}}>&#8377;{eval(income)}</p></h3>
                    <div className="hr-v"></div>
                    <h3>EXPENSE<p className="numbers"style={{color: "red"}}>&#8377;{eval(expense)}</p></h3>
                </div>
                <h4>History<p className="comment">(Click to delete history)</p><hr /></h4>
                <div className="history">
                <ul>
                {list.map((list,index)=>
                    <li key={index} id="li" onClick={()=>removeTask(index)} style={{ borderRight: list.valamount >= 0 ? '5px solid green' : '5px solid red' }}>
                        <span className="firstval">{list.valtext}</span><span className="lastval">{list.valamount}</span>
                    </li>
                )}
                </ul>
                </div>
                <h4>Add New Transaction<hr /></h4>
                <div className="transact">
                    <p className="tr-p">Text</p><input type="text" value={text} onChange={handleText} placeholder="Enter text..."/>
                    <p className="tr-p">Amount</p><p className="comment">(negative-Expense, positive-Income)</p><input type="text" value={amount} onChange={handleAmount}placeholder="Enter amount..."/><br /><br />
                </div>
                <button onClick={addtoList}>Add Transaction</button>
            </div>
        </div>
        )
}
export default Tracker