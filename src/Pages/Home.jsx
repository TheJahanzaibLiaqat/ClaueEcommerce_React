import Header from "../components/Header"
import Blog from "../components/Blog"
import Banner from "../components/Banner"
import Products from "../components/Products"
import Seller from "../components/Seller"
import Trending from "../components/Trending"
import Insta from "../components/Insta"
import Footer from "../components/Footer"
import End from "../components/End"



const Home = () => {
  return (
    <div>
      <Header />
    <Banner />
    <Products />
    <Trending />
    <Seller />
    <Blog />
    <Insta />
    <Footer />
    <End />
    </div>
  )
}

export default Home
