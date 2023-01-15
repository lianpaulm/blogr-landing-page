import Header from "./components/Header"
import Hero from "./components/Hero"
import ShowcaseOne from "./components/ShowcaseOne"
import ShowcaseTwo from "./components/ShowcaseTwo"
import ShowcaseThree from "./components/ShowcaseThree"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <ShowcaseOne/>
        <ShowcaseTwo/>
        <ShowcaseThree/>
        <Footer/>
      </main>
    </>
  )
}

export default App
