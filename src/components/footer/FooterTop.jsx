import { Link } from 'react-router-dom'

const FooterTop = ({bg}) => {
  return (
    <>
    <section className={`call-to-act-wrap ${bg}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="call-to-act">
                            <div className="call-to-act-head">
                                <h3>Want to Buy a Property?</h3>
                                <span>We'll help you to grow yourgrowth.</span>
                            </div>
                            <Link to="#" className="btn btn-call-to-act">SignUp Today</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FooterTop