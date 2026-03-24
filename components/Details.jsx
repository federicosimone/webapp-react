import style from './Details.module.css'
import backgroundImg from '../src/assets/interstellar_bg.jpg'

function Details(props) {
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '50rem'
            }}>
                <div className="container">
                    <h1>{props.title}</h1>
                    <p>{props.abstract}</p>
                </div>
            </div >
        </>
    )
}

export default Details;