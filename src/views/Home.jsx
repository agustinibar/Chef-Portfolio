import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { About } from "../components/About";
import { TestimonialContainer } from "../components/TestimonialContainer";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
      <Header/>
      <Main />
      <About />
      <TestimonialContainer />
      <Footer/>
    </main>
  )
}
