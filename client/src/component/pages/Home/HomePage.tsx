import React from "react";
import TaskBar from "../../common/TaskBar/TaskBar";
import ProductPage from "../Product/ProductPage";

const HomePage: React.FC = () => {
    return(
        <div>
            <TaskBar/>
            <ProductPage/>
        </div>
    )
}

export default HomePage