import React from 'react';
import {Avatar} from 'antd';

class Dailyranking extends React.Component {

  render(){
    return(
      <div>

          <div className="container21">
             <div className="container211"><b><p>Daily Ranking</p></b></div>
             <div className="container212"><b><i className="fa fa-bolt" aria-hidden="true"></i></b></div>
          </div>

          <div className="container22">
              <div className="dailylistitem">
                  <div className="top1">
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" />
                  </div>
                  <div className="top2">
                     <p>Ankit Sharma</p>
                  </div>
                  <div className="top3">
                     <b><p>4500</p></b>
                  </div>
              </div>
              <div className="dailylistitem">
                  <div className="top1">
                    <Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c088176414139.5c696b3a86452.jpg" />
                  </div>
                  <div className="top2">
                     <p>Jitender Bhati</p>
                  </div>
                  <div className="top3">
                     <b><p>2500</p></b>
                  </div>
              </div>
              <div className="dailylistitem">
                  <div className="top1">
                    <Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca54a636488325.571e82a33b526.jpg" />
                  </div>
                  <div className="top2">
                     <p>Rohan Shrivastava</p>
                  </div>
                  <div className="top3">
                     <b><p>2300</p></b>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}
export default Dailyranking;
