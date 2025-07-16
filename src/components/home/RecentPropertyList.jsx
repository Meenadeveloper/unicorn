import React from 'react'
import { propertyData } from '../../data/data';
import RecentPropertyGrid from './RecentPropertyGrid';

const RecentPropertyList = ({border}) => {
  return (
     <div className="row justify-content-center g-4">
        {propertyData.slice(0,6).map((item,index)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <RecentPropertyGrid item={item} border={border}/>
                </div>
            )
        })}
    </div>
  )
}

export default RecentPropertyList