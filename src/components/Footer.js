import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const {t} = useTranslation();

    return  <footer>

        <div class="p-5 bg-dark text-white">
            <div class="container-fluid">
                <div class="row">
                    <div class="text-center col-sm-12 col-md-6">
                        <p class="me-auto">
                            {t("footer1")}
                            <br/>
                            {t("footer2")}
                            <br/>
                            {t("footer3")}
                            <br/>
                            {t("footer4")}
                        </p>
                    </div>
                    <div class="text-center col-sm-12 col-md-6" >
                        <p class="ms-auto">
                            {t("footer5")}
                            <br/>
                            {t("footer6")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
                   

    </footer>
}
