import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, FormControl, Button } from 'react-bootstrap'
export default function Calculator() {
    const [val, setval] = useState("")
    const clear=()=>{
        try {
            setval("")
        } catch (error) {
            
        }
    }
    const rslt=()=>{
        try {
           setval(eval(val)) 
        } catch (error) {
            
        }
    }
    return (

        <div>
            <h5 className='text-center mt-3 pt-5'>CALCULATOR</h5>
            <div className='container d-flex justify-content-center mt-5'>
                <div className='row '>
                    <div className='col-lg-12'>
                        <Card style={{paddingBottom:"2em",border:"solid 2px black"}} className='w-100' >
                            <Card.Body className='mb-3'>
                                <FormControl type="text" className='text-center shadow' value={val} />
                            </Card.Body>
                            <div className='conatiner'>
                                <div className='row'>

                                    <div className='col-lg-3'>

                                        <Button variant="outline-dark" value="7" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 mb-3  w-75 '>7</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark"value="8" onClick={(e)=>setval(val+e.target.value)} className='  ms-2  w-75'>8</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="9" onClick={(e)=>setval(val+e.target.value)} className='  ms-2 w-75'>9</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="" onClick={clear} className='  w-75'>c</Button>
                                    </div>

                                </div>
                                <div className='row'>

                                    <div className='col-lg-3'>

                                        <Button variant="outline-dark" value="4" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 mb-2 w-75'>4</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="5" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>5</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark"  value="6" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>6</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="+" onClick={(e)=>setval(val+e.target.value)} className=' w-75'>+</Button>
                                    </div>

                                </div>
                                <div className='row'>

                                    <div className='col-lg-3'>

                                        <Button variant="outline-dark" value="1" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 mb-2 w-75'>1</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="2" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>2</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="3" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>3</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark"value="-" onClick={(e)=>setval(val+e.target.value)} className='  w-75'>-</Button>
                                    </div>

                                </div>
                                <div className='row'>

                                    <div className='col-lg-3'>

                                        <Button variant="outline-dark" value="0" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>0</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="/" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>/</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="*" onClick={(e)=>setval(val+e.target.value)} className=' ms-2 w-75'>*</Button>
                                    </div>
                                    <div className='col-lg-3'>
                                        <Button variant="outline-dark" value="=" onClick={rslt} className='  w-75'>=</Button>
                                    </div>

                                </div>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>

        </div>

    )
}
