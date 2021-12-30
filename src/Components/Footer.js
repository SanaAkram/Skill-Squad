import React, { Component } from 'react'
import '../Components/Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div>
                 <div id="footer">
                 
                 <img src={require('../Components/assets/images/white.png').default} alt='SkillSquad' className="footer-img" />
                 <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SkillSquad | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
 
            
         </div>
            </div>
        )
    }
}
