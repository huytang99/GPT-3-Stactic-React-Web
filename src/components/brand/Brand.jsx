import React from 'react'
import './brand.css'
import { google, slack ,atlassian, shopify, dropbox} from './imports'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div className="">
                <img src={google} alt="google"></img>
            </div>
            <div className="">
                <img src={slack} alt="slack"></img>
            </div>
            <div className="">
                <img src={atlassian} alt="atlassian"></img>
            </div>
            <div className="">
                <img src={dropbox} alt="dropbox"></img>
            </div>
            <div className="">
                <img src={shopify} alt="shopify"></img>
            </div>
        </div>
    )
}

export default Brand
