import React from 'react';
import './Trending.css';
import {Link,withRouter } from "react-router-dom";
import {Button} from 'antd';

class Trending extends React.Component {

  handle=()=>{
    this.props.history.push({pathname:'/yes'});
  }


  render(){
    return(
        <div class="wrapper">
        <div className="scrollbar4" id="style-1">
           <div className="force-overflow">

          <section class="main-container" >
            <div class="location" id="home">
                <h1 id="home" style={{paddingTop:0}}>Popular on Traduate</h1>
                <div class="box">
                  <Button onClick={this.handle} style={{width:"auto",height:"auto"}}><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></Button>
                  <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>

                  <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
                  <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>

                </div>
            </div>


            <h1 id="myList">Trending Now</h1>
            <div class="box">
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>
            </div>

            <h1 id="tvShows">TV Shows</h1>
            <div class="box">
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>
            </div>


            <h1 id="movies">Blockbuster Action & Adventure</h1>
            <div class="box">
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>

            </div>

            <h1 id="originals">Traduate Originals</h1>
            <div class="box">
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5570301/mountain_house-1200-x-1600.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5654255/hometown3_2x.png?raw=true" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/1803663/screenshots/5477792/1600-final_2x.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/345970/screenshots/4951425/shot_5.png" alt=""/></a>
              <a href=""><img src="https://cdn.dribbble.com/users/772985/screenshots/5101317/6.jpg" alt=""/></a>

            </div>
          </section>


          </div></div>

        </div>
    );
  }
}
export default withRouter(Trending);
