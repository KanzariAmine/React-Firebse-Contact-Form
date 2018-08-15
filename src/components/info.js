import React from 'react'

function Info(props){
  return(
    <div className="company-info">
        <h3>Contact</h3>
        <ul>
          <li><i className="fa fa-road"></i> 44 Something st</li>
          <li><i className="fa fa-phone"></i> (216) 555-5555</li>
          <li><i className="fa fa-envelope"></i> test@acme.test</li>
        </ul>
      </div>
  );
}
export default Info;