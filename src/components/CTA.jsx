import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">
            Need a partner for your project? <br className="sm:block hidden" />
            Let's build it together!
        </p>
        <Link to='/contact' className="btn">
            Contact
        </Link>
    </section>
  )
}

export default CTA