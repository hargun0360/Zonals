import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
    return (
        <div>
            <div >
                <QRCode
                    size={280}
                    style={{ height: "300px", Width: "300px" }}
                    value={"https://www.google.com/"}
                    level={'L'}
                     />
            </div>
        </div>
    )
}

export default QR