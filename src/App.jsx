import HomePage from "./Pages/HomePage";

export default function App() {
  return (
  
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </Layout>
    
  )
}