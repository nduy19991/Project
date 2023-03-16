import numeral from "numeral";
import "numeral/locales/en-gb";
import React, { useState } from "react";
import Styles from "./CardCommon.module.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

numeral.locale("en-gb");

const CardCommon: React.FC<IPropsCardCommon> = (props) => {

    const { discount, selling, imgHover, imgLeave, title, price, total } = props

    const [imgUrl, setImageUrl] = useState(true);

    const tradeImgUrl = () => {
        setImageUrl(!imgUrl)
    }

    const [isShowLike, setIsShowLike] = useState(true);

    const handleClick = () => {
        setIsShowLike(!isShowLike)
    }

    const formattedDiscount = discount
    ? numeral(- discount / parseFloat("100") ).format("%")
    : null;

    const formattedoldPrice = price
    ? numeral(price).format("$0,0")
    : null;

    const formattednewPrice = total
    ? numeral(total).format("$0,0")
    : null;

    return (
        <div className={Styles.product}>
            <div className={Styles.image}
                    style={{ backgroundImage: `url(${imgUrl ? imgLeave : imgHover})`}}
                    onMouseOver={tradeImgUrl}
                    onMouseLeave={tradeImgUrl}
                >
                    <div className={Styles.discount}>
                        {formattedDiscount ?? <span>{formattedDiscount}</span>}
                    </div>
                    <div>
                        {selling ? <div className={Styles.selling}>selling fast</div> : null}
                    </div>
                    <div className={Styles.like}>
                    <button className={Styles.btn_like} onClick={handleClick}>
                    {isShowLike ? <AiOutlineHeart className={Styles.heart}/> 
                    : <AiFillHeart className={Styles.heart}/>}
                    </button>
                    </div>
            </div>
            <div className={Styles.title}>
                {title ?? <div>{title}</div>}
            </div>
            <span className={Styles.old_price}>
                {discount ? <span>{formattedoldPrice}</span> : null}
            </span>
            <span className={Styles.new_price}>
                {formattednewPrice ?? <span>{formattednewPrice}</span>}
            </span>

        </div>
    )
};
export default CardCommon