import "../styles/layout.css"
import "../styles/about-us.css"
import "../styles/appointment.css"
import "../styles/contact-us.css"
import "../styles/home.css"
import "../styles/misc.css"
import "../styles/pricing.css"
import { Container } from "../src/components/layout"

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
