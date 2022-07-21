import * as React from 'react';
import {section, tab, Tab, Tabs, form, Form, small, Container, img, Image, Button, Accordion, FloatingLabel} from "react-bootstrap";
import HeaderImage from "./header_5.jpeg";
import MultipleDatePicker from 'react-multiple-datepicker'

export default function AboutScreen() {

    const [program, setProgram] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    var flag = false;
    var counter = 0;

    
    const handleClick = event => {
        event.preventDefault();
        if(program.trim().length !== 0){
            counter++;
        }
        if(name.trim().length !== 0){
            counter++;
        }
        if(counter === 2){
            flag = true;
        }
        
    };

    return (
        <div>
            <section className="bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center w-100" style={{height: 740,backgroundImage: `url(${HeaderImage})`}}>
                    <mark className="display-1 text-dark bg-light d-flex justify-content-center d-flex align-items-center" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Registration</mark>
                </div> 
                <section class="ms-5 me-5 pt-5 bg-white">

                    <Tabs defaultActiveKey="Step 1" id="fill-tab-example" className="nav-pills mb-3" fill
                        >
                        <Tab eventKey="Step 1" title="Step 1">
                            <h1 className="text-center">
                                Select your program:
                            </h1>
                            <div className="d-flex justify-content-center">
                                *
                                <div className="form-group col-sm-4 mt-3">
                                    <select onSelect={e => {window.localStorage.setItem('program', e.target.value)}} className="form-control" id="setProgram">
                                        <option>Reacreational Program : $150</option>
                                        <option>U17 Program : $200</option>
                                        <option>U19 Program : $300</option>
                                        <option>Major League Program : $300</option>
                                    </select>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Step 2" title="Step 2">
                            <h1 className="text-center">
                                Choose your availability:
                            </h1>
                            <br/>
                           <h3 className="text-center text-muted">
                                Select the dates for the practices you want to attend
                            </h3>
                            <br/>
                            <p className="text-center text-muted">Click the box below to select the dates</p>
                            <div className="text-center">
                                <MultipleDatePicker />
                            </div>
                            <br/><br/>
                            <h3 className="text-center">
                                Schedule
                            </h3>
                            <br/>
                            <div class="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <p className="text-muted h6">
                                            Recreational Program:
                                            <br/>
                                            <br/>
                                            Monday's 6:00 pm - 7:00 pm
                                            <br/>
                                            Tuesday's 6:00 pm - 7:00 pm       
                                            <br/>
                                            Thursday's 6:00 pm - 7:00 pm
                                            <br/>
                                            Saturday's 3:00 pm - 4:00 pm
                                        </p>   
                                    </div>
                                    <div className="col">
                                        <p className="text-muted h6">
                                            U17 Program:
                                            <br/>
                                            <br/>
                                            Monday's 7:00 pm - 8:15 pm
                                            <br/>
                                            Tuesday's 7:00 pm - 8:15 pm       
                                            <br/>
                                            Thursday's 7:00 pm - 8:15 pm
                                            <br/>
                                            Saturday's 9:00 am - 11:00 am
                                            <br/>
                                            Sunday's 9:00 am - 11:00 am
                                        </p>  
                                    </div>
                                    <div className="col">
                                        <p className="text-muted h6">
                                            U19 Program:
                                            <br/>
                                            <br/>
                                            Monday's 8:15pm - 10:00 pm
                                            <br/>
                                            Tuesday's 8:15 pm - 10:00 pm       
                                            <br/>
                                            Wednesdays 6:00 pm - 8:00 pm
                                            <br/>
                                            Thursday's 8:15 pm - 10:00 pm
                                            <br/>
                                            Friday's 6:00 pm - 8:00 pm
                                            <br/>
                                            Saturday's 11:00 am - 1:00 pm
                                            <br/>
                                            Sunday's 11:00 am - 1:00 pm
                                        </p>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-muted h6">
                                            Major League Program:
                                            <br/>
                                            <br/>
                                            Monday's 8:15pm - 10:00 pm (Combined with U19)
                                            <br/>
                                            Tuesday's 8:15 pm - 10:00 pm (Combined with U19)       
                                            <br/>
                                            Thursday's 8:15 pm - 10:00 pm (Combined with U19)
                                            <br/>
                                            Friday's 8:00 pm - 10:00 pm 
                                            <br/>
                                            Saturday's 6:00 pm - 8:00 pm

                                        </p>  
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Step 3" title="Step 3">
                            <h1 className="text-center">
                               Personal Information:
                            </h1>
                            <div className="text-center m-5">
                                <div class="d-flex flex-column">
                                    <p className="d-flex justify-content-start">*</p>
                                    <input type="text" onInput={e => {setName(e.target.value)}} aria-label="Description" placeholder="Full Name (First, Last)" className="form-control"></input>    
                                </div>   
                                <br/>
                                <div class="d-flex flex-column">
                                    <p className="d-flex justify-content-start">*</p>
                                    <input type="text" onInput={e => {setEmail(e.target.value)}} aria-label="Description" placeholder="Email (user@email.com)" className="form-control"></input>    
                                </div>
                                <br/>
                                <div class="d-flex flex-column">
                                    <p className="d-flex justify-content-start">*</p>
                                    <input type="text" onInput={e => {setPhone(e.target.value)}} aria-label="Description" placeholder="Phone Number (555-555-5555)" className="form-control"></input>    
                                </div>
                                <br/>
                                <div class="d-flex flex-column">
                                    <p className="d-flex justify-content-start">*</p>
                                    <input type="text" onInput={e => {setAddress(e.target.value)}} aria-label="Description" placeholder="Address (125 Loremipsum Ave, K2B 5X8)" className="form-control"></input>    
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Step 4" title="Step 4">
                            <div class="container p-0">
                                <div class="card px-4">
                                    <p class="h8 py-3">Payment Details</p>
                                    <div class="row gx-3">
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">* Person Name</p>
                                                <input class="form-control mb-3" type="text" placeholder="Full Name" value=""></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">* Card Number</p>
                                                <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">* Expiry</p>
                                                <input class="form-control mb-3" type="text" placeholder="MM/YYYY"></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">* CVV/CVC</p>
                                                <input class="form-control mb-3 pt-2 " type="password" placeholder="***"></input>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    
                    
                    <div className="d-flex justify-content-end me-4 mt-4">
                        <button type="submit" className="btn btn-primary ms-2" data-enchanter="finish" data-bs-toggle="modal" data-bs-target="#modal1" onClick={handleClick}>Finish</button>
                    </div>
                    <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content ">
                            <div className="modal-header">
                              <h5 className="modal-title text-center" id="exampleModalLabel">Appointment Confirmed</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              {(name) ? "You are registered": "You are not registered"}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                    </div>

                    <br/>
                    <br/>

                </section>
            </section>
            
        </div>
        
    )
}
