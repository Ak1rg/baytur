import { AboutUs } from "./components/aboutUs/AboutUs"
import { Discount } from "./components/discount/Discount"
import { Footer } from "./components/footer/Footer"
import { MainSwiper } from "./components/mainSwiper/MainSwiper"
import { Offers } from "./components/offers/Offers"
import { Specifics } from "./components/specifics/Specifics"

export const App = () => {
  return (
    <>
      <MainSwiper/>
      <Specifics/>
      <AboutUs/>
      <Discount/>
      <Offers/>
      <Footer/>
    </>
  )
}
