import React from "react"
import "./thingsUsed.css"

class ThingsUsed extends React.Component {
    render() {
        return (
            <div className="thingsInfo">
                <h2>Hardware</h2>
                <p>
                    <strong>Desktop:</strong>
                    <ul>
                        <li><b>CPU:</b> Ryzen 5 3600</li>
                        <li><b>Cooler:</b> Arctic Freezer 34 eSports Duo</li>
                        <li><b>Motherboard :</b> MSI B450M Mortar</li>
                        <li><b>RAM:</b> Corsair Vengeance LPX 2x8GB DDR4 3600 CL16-16-16-32 Samsung B-Die</li>
                        <li><b>GPU:</b> EVGA 1080ti FTW3</li>
                        <li><b>SSD:</b> Crucial MX500 2TB SSD</li>
                        <li><b>PSU:</b> EVGA GQ 850W</li>
                        <li><b>Case:</b> Cooler Master N200 </li>
                        <li><b>Keyboard:</b> Cooler Master MasterKeys Pro L</li>
                        <li><b>Mouse:</b> Logitech G305</li>
                        <li><b>Controller:</b> Xbox One Wireless Controller</li>
                        <li><b>Audio:</b> Cooler Master MH752 / Apple AirPods Gen 1</li>
                        <li><b>Main Monitor:</b> 27" Acer VG271UP 1440p 144hz IPS</li>
                        <li><b>Secondary Monitor:</b> 24" Acer KG241Q 1080p 75hz TN</li>
                        <li><b>VR:</b> Oculus Rift CV1 + 2 sensors</li>
                    </ul>
                    <strong>Laptop:</strong> Lenovo Yoga 730 15" w/ 8550U, GTX 1050 4GB, 24GB RAM <br />
                    <strong>Pen: </strong> Lenovo Active Pen 2 <br />
                    <strong>Phone: </strong> Pixel 4 XL <br />
                </p>
                <h2>Software</h2>
                <p>
                    <b>OS:</b> Windows 10, Manjaro (btw I use arch) <br />
                    <b>Editor:</b> VS Code
                </p>
            </div>
        )
    }
}

export default ThingsUsed;