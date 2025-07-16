import { Link } from 'react-router-dom';

import { blogData } from '../../data/data'
const BlogPost = () => {
  return (
    <>
     <div className="row justify-content-center g-4">
        {blogData.slice(0,3).map((item,index)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                    <div className="blog-wrap-grid h-100 shadow">
                        <div className="blog-thumb">
                            <Link to={`/blog-detail/${item.id}`}><img src={item.image} className="img-fluid" alt="" /></Link>
                        </div>
                        <div className="blog-info">
                            <span className="post-date label bg-primary text-light"><i className="ti-calendar"></i>{item.date}</span>
                        </div>
                        <div className="blog-body">
                            <h4 className="bl-title"><Link to={`/blog-detail/${item.id}`}>{item.title}</Link></h4>
                            <p>{item.desc} </p>
                            <Link to={`/blog-detail/${item.id}`} className="text-primary fw-medium">Continue<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            )
        })}      
    </div>
    
    </>
  )
}

export default BlogPost