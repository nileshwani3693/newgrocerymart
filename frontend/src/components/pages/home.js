import React from "react";
import CategoryMenu from './Home extras/CategoryMenu'
import Footer from './Home extras/Footer'
import Slider from './Home extras/Slider'
import Search from "./Search";

export function Home() {
    return (

        <div>
            <aside id='aside'> <Search /></aside>
            <Slider />
            <CategoryMenu />

            <Footer />
        </div>

    )

}