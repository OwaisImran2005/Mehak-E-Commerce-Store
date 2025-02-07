import React from "react";
import Fs from "../fragrances/page";
import Bs from "../bodysprays/page";
import As from "../attars/page";
import BackToTopButton from "../back2top";

const Shop = () => {
    return (

        <div>



            <div>
               


                <Fs />

            </div>
            <div>
                
                <Bs />
            </div>

            <div>
               
                <As />
            </div>
            <BackToTopButton />


        </div>

    );
};

export default Shop;