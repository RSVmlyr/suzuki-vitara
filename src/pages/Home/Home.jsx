import SliderHome from "../../components/organisms/SliderHome/SliderHome"
import Participate from "../../components/organisms/Participate/Participate"
import FormInscription from "../../components/molecules/FormInscription/FormInscription"
import './Home.scss'

const Home = () => {
  return (
    <div>
        <section>
          <SliderHome />
        </section>
        <section>
          <Participate />
        </section>
        <section>
          <FormInscription />
        </section>
    </div>
  )
}

export default Home