import { Link } from 'react-router-dom'
import './Card.css'



const Card = ({ item: { title, image, id } }) => {

    return (
        <>
            <div className="el-wrapper" data-aos="zoom-in" >
                <div className="box-up">
                    <img className="img" width='500px' src={image} alt="" />
                    <div className="img-info">
                        <div className="info-inner">
                            <span className="p-name">{title}</span>
                        </div>
                    </div>
                </div>

                <div className="box-down">
                    <div className="h-bg">
                        <div className="h-bg-inner"></div>
                    </div>

                    <Link to={`details/${id}`} className='cart'>
                        <span className="add-to-cart">
                            <span className="txt">Details</span>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card