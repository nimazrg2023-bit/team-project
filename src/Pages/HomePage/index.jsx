import { Link } from "react-router-dom"
import Header from "../../components/partial/Header/Header"
import FlashSales from "./Components/Flash-Sales"
import Categories from "./Components/Categories"
import ThisMonth from "./Components/This-Month"
import Categories2 from "./Components/Categories2"
import OurProducts from "./Components/Our-Products"
import Featured from "./Components/Featured"
import Services from "./Components/Services"
import Footer from "../../components/partial/Footer/Footer"
import Head from "./Components/Header"


export default function HomePage() {
    return (
        <div>

            <Head />
            
            <FlashSales />

            <Categories />

            <ThisMonth />

            <Categories2 />

            <OurProducts />

            <Featured />

            <Services />


        </div>

    )
}