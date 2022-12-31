import React from 'react'
import "./Image.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from 'react-reveal/Fade';
function Image({ imgUrl, modelName, desc, rightButton }) {
    return (
        <div className='image' style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100vh',
            width: '100vw',
        }}>
            <Fade bottom>

                <div className="container">
                    <h1 className='container__modelName'>{modelName}</h1>
                    <a href="http://" >{desc}</a>
                </div>
            </Fade>
            <div className="container2">
                <Fade bottom>
                    <div className="btn">
                        <button className='btn__buyNow' style={{ padding: "10px 97px" }}>Buy Now</button>
                        {rightButton && <button className='btn__custom'>{rightButton}</button>}
                    </div>
                    <ExpandMoreIcon className='icon' />
                </Fade>
            </div>

        </div>
    )
}

export default Image
