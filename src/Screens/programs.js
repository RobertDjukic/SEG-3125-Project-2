import * as React from 'react';
import {section, small, Container, img, Image, Button} from "react-bootstrap";
import HeaderImage from "./header_practice.jpg";

export default function AboutScreen() {
    return (
        <div>
            <section className="bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center w-100" style={{height: 740,backgroundImage: `url(${HeaderImage})`}}>
                    <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Programs</mark>
                </div>
            <section class="ms-5 me-5 mt-2">
                    <div class="container-fluid">
                        <div className="row bg-white mt-3 px-3">
                            <div class="col-4 text-center bg-light my-3">
                                    <h2 className="text-purple p-3">
                                        U17 and U19 Competitive Programs
                                    </h2>
                            </div>
                            <div class="col-8">
                                <div class="container-fluid bg-light m-3 me-5">
                                    <small className="text-muted h6">
                                    Our U17 and U19 athletes train to compete in the National Championship League (NCL). 
                                    <br/>
                                    <br/>
                                    This is a competitive program
                                    <br/>
                                    <br/>
                                    This program includes four weekly practices, one optional high-performance practice (at no additional cost), a number of National Capital Water Polo League (NCWPL) games. 
                                    <br/>
                                    <br/>
                                    New players are welcome throughout the year.
                                    <br/>
                                    <br/>
                                    The price for the programs are $200 and $300 respectively
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="row bg-white mt-5 px-3">
                            <div class="col-4 text-center bg-light my-3">
                                    <h2 className="text-purple p-3">
                                        Major League
                                    </h2>
                            </div>
                            <div class="col-8">
                                <div class="container-fluid bg-light m-3">
                                    <small className="text-muted h6">
                                    Our major league teams compete in their own National Championship. Which is the most competitive waterpolo competition in Canada.
                                    <br/>
                                    <br/>
                                    This is a competitive program
                                    <br/>
                                    <br/>
                                    This program includes four weekly practices, one optional high-performance practice (at no additional cost), a number of National Capital Water Polo League (NCWPL) games. 
                                    <br/>
                                    <br/>
                                    New players are welcome throughout the year.
                                    <br/>
                                    <br/>
                                    The price for the program is $300
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="row bg-white mt-5 px-3">
                            <div class="col-4 text-center bg-light my-3">
                                    <h2 className="text-purple p-3">
                                        Recreational League
                                    </h2>
                            </div>
                            <div class="col-8">
                                <div class="container-fluid bg-light m-3">
                                    <small className="text-muted h6">
                                    The recreational league is perfect for people who are new to the sport.                                     <br/>
                                    <br/>
                                    We will teach you the basics and offer lots of chances to compete against people of a similar skill as you.                                    <br/>
                                    <br/>
                                    This program is non-competitive and we welcome new players throughout the year.                                    
                                    <br/>
                                    <br/>
                                    The price for the program is $150
                                    </small>
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