import Header from "../../components/templates/Header/Header"
import SliderHome from "../../components/organisms/SliderHome/SliderHome"
import Participate from "../../components/organisms/Participate/Participate"

const Home = () => {
  return (
    <div>
      <main>
        <section>
          <SliderHome />
        </section>
        <section>
          <Participate />
        </section>
      </main>
    </div>
  )
}

export default Home