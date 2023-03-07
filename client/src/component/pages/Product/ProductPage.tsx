import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
import Styles from "./ProductPage.module.css";
import prd1 from "../../../images/prd/prd1.png"
import prd2 from "../../../images/prd/prd2.png"
import prd3 from "../../../images/prd/prd3.png"
import prd4 from "../../../images/prd/prd4.png"
import prd5 from "../../../images/prd/prd5.png"
import prdd1 from "../../../images/prd/prdd1.png"
import prdd2 from "../../../images/prd/prdd2.png"
import prdd3 from "../../../images/prd/prdd3.png"
import prdd4 from "../../../images/prd/prdd4.png"
import prdd5 from "../../../images/prd/prdd5.png"

const ProductPage: React.FC = () => {
    return (
        <div className={Styles.bg_product}>
            <div className={Styles.product}>
                <CardCommon
                    discount="-10%"
                    imgLeave={prd1}
                    imgHover={prdd1}
                    selling={true}
                    title="Forever New bubble sleeve organza mini dress in apricot floral"
                    oldPirce="£244.80"
                    newPrice="£193.50"
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
                <CardCommon
                    discount="-15%"
                    imgLeave={prd3}
                    imgHover={prdd3}
                    title="ASOS DESIGN tie back pleated sleeve midi dress in pink with red embroidery"
                    oldPirce="£90.90"
                    newPrice="£74.60"
                    selling={true}
                />
                <CardCommon
                    discount="-18%"
                    imgLeave={prd4}
                    imgHover={prdd4}
                    title="ASOS DESIGN Mix & Match tux suit in black"
                    oldPirce="£84.60"
                    newPrice="£69.50"
                    selling={true}
                />
                <CardCommon
                    discount="-12%"
                    imgLeave={prd5}
                    imgHover={prdd5}
                    selling={false}
                    title="ASOS DESIGN wedding super skinny suit jacket in dark green wool blend twill"
                    oldPirce="£244.80"
                    newPrice="£193.50"
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
                <CardCommon
                    discount="-15%"
                    imgLeave={prd3}
                    imgHover={prdd3}
                    title="ASOS DESIGN tie back pleated sleeve midi dress in pink with red embroidery"
                    oldPirce="£90.90"
                    newPrice="£74.60"
                    selling={true}
                />
                <CardCommon
                    discount="-15%"
                    imgLeave={prd4}
                    imgHover={prdd4}
                    title="ASOS DESIGN Mix & Match tux suit in black"
                    oldPirce="£184.30"
                    newPrice="£165.10"
                    selling={false}
                />
            </div>
        </div>
    )
};
export default ProductPage