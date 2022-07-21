import * as React from 'react';
import {section, small, Container, img, Image, Button} from "react-bootstrap";
import HeaderImage from "./headerCoach.jpg";
import coach1 from "./coach1.jpg";
import coach2 from "./coach2.jpg";
import coach3 from "./coach3.jpg";


export default function AboutScreen() {
    return (
        <section className="bg-light">
            <div className="container-fluid d-flex justify-content-center align-items-center w-100" style={{height: 740,backgroundImage: `url(${HeaderImage})`}}>
                <mark className="display-1 text-dark bg-light" style={{position:'absolute', top: '50%', left: '50%', transform: 'Translate(-50%,-50%)'}}>Video Guide / Coaches/ Schedule</mark>
            </div>     
            <section class="ms-5 me-5 bg-white p-5">               
                <div class="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-center">
                                <Image src={coach1} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                            </h3>
                        </div>
                        <div className="col">
                            <h3 className="text-center">
                                <Image src={coach2} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                            </h3>
                        </div>
                        <div className="col">
                            <h3 className="text-center">
                                <Image src={coach3} className="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3 className="text-center">
                                John Doe
                            </h3>
                            <p className="text-center text-muted h6">
                                Coach John has been part of this club for the last 10 years and has been playing waterpolo since he was 12 years old. He is the head coach of the Recreational Program 
                            </p>
                        </div>
                        <div className="col">
                            <h3 className="text-center">
                                Brad Mitt
                            </h3>
                            <p className="text-center text-muted h6">
                                Brad has been coaching U17 and U19 programs for 5 years and in that time has won the club a number of medals. 
                            </p>
                        </div>
                        <div className="col">
                            <h3 className="text-center">
                                Samuel Jack
                            </h3>
                            <p className="text-center text-muted h6">
                                Sam has been coaching the Major League Program for the past 8 years, and prior to joining our coaching team played internationally for 10 years.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className="text-center">
                    How To Play Waterpolo
                </h3>
                <br/>
                <iframe className="rounded mx-auto d-block" width="560" height="315" src="https://www.youtube.com/embed/g63LpPuDaxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
                
            </section>
        </section>
    )
}