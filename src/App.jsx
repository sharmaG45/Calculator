import React,{useState} from 'react';
import './index.css';



function App() {
    const [value,setValue]= useState('');

    return (
        <>
            <section className='sec'>
        <h3>CALCULATOR</h3>
            <div className="container">
                <form action="">
                <div className="box-child-1">
                    <input type="text" id='num-1' value={value} />
            </div>
                <div className="box">
                    <input type="button" value="AC" onClick={e=> setValue('')} />
                    <input type="button" value="DE" onClick={e=> setValue(value.slice(0,-1))} />
                    <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className="box">
                    <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="X" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className="box">
                    <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className="box">
                    <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className="box">
                    <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="%" onClick={e => setValue(value + e.target.value)}/>
                    <input type="button" value="=" onClick={e=>setValue(eval(value))} />
                </div>
                </form>
            </div>
        </section>
        <hr />
        <footer>
            <p>Copyright @Shubham</p>
        </footer>
        </>
    )
}
export default App;