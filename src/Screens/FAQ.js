import * as React from 'react';
import {section, small, Container, img, Image, Button, Accordion} from "react-bootstrap";
import HeaderImage from "./header_3.jpg";


export default function AboutScreen() {

    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    return (
        <div>
            <section className="bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center w-100" style={{height: 740,backgroundImage: `url(${HeaderImage})`}}>
                    <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Frequently Asked Questions</mark>
                </div> 
                <section class="ms-5 me-5 pt-5 bg-white">
                    <div class="accordion " id="FaqAccordion">
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Q : I don't want to play competitively but I also don't want to play in the recreational league. Is there something in the middle?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                   a : In a situation like this we suggest you join the competitive league anyway as there is oppurtunity to play without being overly competitive.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    Q : Who will be coaching me?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : Each coach focuses on one program. So it depends on which program you register for. You can find more on this on the "About" page.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    Q : How many practices does each program have per week?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : Each program has a different amount of practices per week. This info can be found on the "Programs" page.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item ms-5 me-5">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                    Q : How much do the programs cost?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#FaqAccordion">
                                <div class="accordion-body">
                                    A : On the "Programs" page you will find a desciption of each program we offer and in the description you will also find the price of the program.
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <h3 className="text-center">
                        Ask us a question or leave a comment!
                    </h3>
                    <br/>

                    <div className="me-5 ms-5 row">
                        <div className="col">
                            *<input type="text" onInput={e => {setEmail(e.target.value)}} aria-label="Description" placeholder="Email (user@email.com)" className="form-control"></input>    
                        </div>
                        <div className="col"></div>
                    </div>
                    <br/>
                    <div className="me-5 ms-5 row">
                        *<input type="text" onInput={e => {setDescription(e.target.value)}} aria-label="Description" placeholder="Enter your question/comment" className="form-control px-4 py-3"></input>
                    </div>

                    <br/>

                    <button type="submit" className=" ms-5 btn btn-primary ms-2" data-enchanter="finish" data-bs-toggle="modal" data-bs-target="#modal1">Submit</button>

                    <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title text-center" id="exampleModalLabel">{(email, description) ? "Successfully Submitted": "Unseccessful Submission"}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            {(email, description) ? "Your question / comment was successfully submited to our support team. Expect a response within the next 2 business days": "You must fill in the email and question inputs to submit"}
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