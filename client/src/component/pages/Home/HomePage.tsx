import React from "react";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import ProductPage from "../Product/ProductPage";

const HomePage: React.FC = () => {
    return(
        <div>
            <NavBarLayout/>
            <ProductPage/>
        </div>
    )
}

export default HomePage