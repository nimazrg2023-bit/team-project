import Footer from "./Footer/Footer";
import Header from "./Header/Header";


export default function Layout({children}) {
    return(
        <div className="w-full">
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}