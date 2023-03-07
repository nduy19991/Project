import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import Styles from "./Product.module.css";
import prd1 from "../../../images/prd/prd1.png"
import prd2 from "../../../images/prd/prd2.png"
import prd3 from "../../../images/prd/prd3.png"
import prd4 from "../../../images/prd/prd4.png"
import prdd1 from "../../../images/prd/prdd1.png"
import prdd2 from "../../../images/prd/prdd2.png"
import prdd3 from "../../../images/prd/prdd3.png"
import prdd4 from "../../../images/prd/prdd4.png"

const ProductPage : React.FC = () => {
    return(
        <div>
            <CardCommon
            discount="-10%"
            imgLeave={prd1}
            imgHover={prdd1}
            selling={true}
            />
            <CardCommon
            discount="-15%"
            imgLeave={prd2}
            imgHover={prdd2}
            selling={false}
            title="TFNC Bridesmaid draped satin maxi dress in sage green"
            oldPirce="£104.40"
            newPrice="£94.60"
            />
        </div>
    )
};
export default ProductPage