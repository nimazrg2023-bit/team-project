import { Route, Routes } from "react-router-dom";
import Layout from "./components/partial";
import HomePage from "./Pages/HomePage";
import Whishlist from "./Pages/wishlist";
import Details from "./Pages/Detail";

export default function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whishlist" element={<Whishlist />} />
        <Route path="/Detail/:id" element={<Details />} />

      </Routes>
    </Layout>

  )
}