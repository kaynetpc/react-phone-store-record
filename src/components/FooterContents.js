import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterContents() {
    return (
        <div className="container-fluid footer pb-0 text-center align-content-center text-capitalize">
            <div className="text-center">
                <Link to="./">
                   <h4>kaynet phone store record </h4>
                </Link>
                <p className="text-center">copyright 2020 kaynetpc inc</p>
            </div>
            
        </div>
    )
}
