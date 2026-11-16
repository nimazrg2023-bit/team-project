import { Route, Routes } from "react-router-dom";
import Layout from "./components/partial";
import HomePage from "./Pages/HomePage";
import Whishlist from "./Pages/wishlist";
import Details from "./Pages/Detail";
import Contact from "./Pages/contacts";

export default function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whishlist" element={<Whishlist />} />
        <Route path="/Detail/:id" element={<Details />} />
        <Route path="/contacts" element={<Contact />} />


      </Routes>
    </Layout>

  )
}