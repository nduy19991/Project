import React, { useState } from "react";
import Styles from "./CardCommon.module.css"

const CardCommon: React.FC<IPropsCardCommon> = (props) => {

    const { discount, selling, imgHover, imgLeave, title, oldPirce, newPrice } = props

    const [imgUrl, setImageUrl] = useState(imgLeave);

    const handleMouseOver = () => {
        setImageUrl(imgHover);
    };

    const handleMouseLeave = () => {
        setImageUrl(imgLeave);
    };

    return (
        <div className={Styles.product}>
            <div className={Styles.bg_image}>
                <div className={Styles.image}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={Styles.discount}>
                        {discount ?? <span>{discount}</span>}
                    </div>
                    <div>
                        {selling ? <div className={Styles.selling}>selling fast</div> : null}
                    </div>
                </div>
            </div>
            <div className={Styles.title}>
            {title ?? <div>{title}</div>}
            </div>
            <span className={Styles.old_price}>
            {oldPirce ?? <span>{oldPirce}</span>}
            </span>
            <span className={Styles.new_price}>
            {newPrice ?? <span>{newPrice}</span>}
            </span>
            
        </div>
    )
};
export default CardCommon