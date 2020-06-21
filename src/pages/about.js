import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function CTFWriteups() {
    return (
        <Layout>
        <Header headerText="About Me"/>
            <div className="aboutInfo">
                <h2>Hardware</h2>
                <p>
                    <b>Desktop:</b>
                    <ul>
                        <li>Ryzen 5 3600</li>
                        <li>Arctic Freezer 34 eSports Duo</li>
                        <li>MSI B450M Mortar</li>
                        <li>Corsair Vengeance LPX 2x8GB DDR4 3600 CL16-16-16-32 Samsung B-Die</li>
                        <li>EVGA 1080ti FTW3</li>
                        <li>Crucial MX500 2TB SSD</li>
                        <li>EVGA GQ 850W</li>
                        <li>Cooler Master N200</li>
                        <li>Cooler Master MasterKeys Pro L</li>
                        <li>Logitech G305</li>
                        <li>Cooler Master MH752 / Apple AirPods Gen 1</li>
                        <li>27" Acer VG271UP 1440p 144hz IPS</li>
                        <li>24" Acer KG241Q 1080p 75hz TN</li>
                        <li>Oculus Rift CV1 + 2 sensors</li>
                    </ul>
                    <b>Laptop:</b> Lenovo Yoga 730 15" w/ 8550U, GTX 1050 Max-Q, 24GB RAM <br />
                    <b>Pen: </b> Lenovo Active Pen 2 <br />
                    <b>Phone: </b> Pixel 4 XL
                </p>
            </div>


        </Layout>
    )
}