import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
    return (
        <div>
            <div >
                <QRCode
                className="qr"
                    size={230}
                    
                    value={"https://www.google.com/"}
                    level={'L'}
                     />
            </div>
        </div>
    )
}

export default QR