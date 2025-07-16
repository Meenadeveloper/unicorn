import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import FooterTop from '../components/footer/FooterTop'
import Navbar from '../components/navbar/Navbar'
const ErrorPage = () => {
  return (
    <>
      <Navbar transparent={false}/>   

    <section className="error-wrap">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="text-center">
                        <img src={error} className="img-fluid" alt=""/>
                        <p>Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                        <Link className="btn btn-primary px-5" to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterTop bg="theme-bg"/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default ErrorPage
