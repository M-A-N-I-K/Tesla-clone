import React from 'react'
import "./Image.css"

function Image({ imgUrl, modelName, desc }) {
    return (
        <div className='image' style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100vh',
            position: "relative"
        }}>
            <div className="container">
                <h1 className='container__modelName'>{modelName}</h1>
                <a href="http://">{desc}</a>
            </div>
            <div className="btn">
                <button className='btn__buyNow' style={{ padding: "10px 97px" }}>Buy Now</button>
                <button className='btn__custom'>Custom Order</button>
            </div>

        </div>
    )
}

export default Image
