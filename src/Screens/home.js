import * as React from 'react';
import {section, small, Container, img, Image, Button} from "react-bootstrap";
import HeaderImage from "./headerImage.jpg";
import program from "./ProgramsImg.jpg";
import coach from "./CoachImg.jpg";
import faq from "./FAQImg.jpg";
import register from "./RegisterImg.jpeg";
import { useTranslation } from "react-i18next";
import {Link } from 'react-router-dom';

export default function AboutScreen() {
    
    const {t} = useTranslation();

    return (
        <div>
            <section className="bg-light">
                <div className="container-fluid d-flex justify-content-center align-items-center w-100" style={{height: 740,backgroundImage: `url(${HeaderImage})`}}>
                    <mark className="display-1 text-dark bg-light" >{t("Title")}</mark>
                </div>
                <section class="ms-5 me-5 mt-2">
                    <div class="container-fluid">
                        <div className="row">
                            <div class="col p-3  bg-white text-center">
                                <Link to={'/Programs'}><Image src={program} className="img-fluid rounded mx-auto d-block" alt="Responsive image" style={{height: '300px'}}/></Link>
                                <h3>{t("home_programs")}</h3>
                                <h3 className="text-muted">{t("home_programs2")}</h3>
                            </div>
                            <div class="col p-3 ms-3 bg-white text-center">
                                <Link to={'/About'}><Image src={coach} className="img-fluid rounded mx-auto d-block" alt="Responsive image" style={{height: '300px'}}/></Link>
                                <h3>{t("home_about")}</h3>
                                <h3 className="text-muted">{t("home_about2")}</h3>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div class="col p-3  bg-white text-center">
                                <Link to={'/FAQ'}><Image src={faq} className="img-fluid rounded mx-auto d-block" alt="Responsive image" style={{height: '300px'}}/></Link>
                                <h3>{t("home_faq")}</h3>
                                <h3 className="text-muted">{t("home_faq2")}</h3>
                            </div>
                            <div class="col p-3 ms-3 bg-white text-center">
                                <Link to={'/Registration'}><Image src={register} className="img-fluid rounded mx-auto d-block" alt="Responsive image" style={{height: '300px'}}/></Link>
                                <h3>{t("home_register")}</h3>
                                <h3 className="text-muted">{t("home_register2")}</h3>
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