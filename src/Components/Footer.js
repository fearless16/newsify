import React from 'react'
import '../CSS/footer.css'

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer">
            <p>This website is designed for project purpose only. Links to connect are below</p>
            <p><b>Designed and developed by Prajwal Bairagi</b></p>
          
        </div>
        <div className="icons-container">  
        <a href = 'https://www.instagram.com/aflatoon_bairagi/' target = '_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
        <a href = 'https://twitter.com/bairagipajju'><i className="fab fa-twitter" target = '_blank' rel="noreferrer"></i></a>
        <a href = 'https://www.linkedin.com/in/prajwal-bairagi-765a19194/' target = '_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
        </div>
    )
}

export default Footer
