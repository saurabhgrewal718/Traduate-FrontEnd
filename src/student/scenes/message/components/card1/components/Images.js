import React, { Component } from 'react'
import {Button} from 'antd';
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "http://localhost:5000/profileImage.jpg",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}];

class Imagegallry extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false,photo:[] };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened,
      photo: [`http://localhost:5000/${this.props.image}`]
    }));
  }

  render () {
    console.log(this.props);
    return (
      <div>
          <Button onClick={this.toggleGallery} style={{height:"2px",width:"2px",paddingLeft:"0px"}}>
              <div >
                  <img src="https://cdn.dribbble.com/users/614757/screenshots/1889202/dribbble_problem-solved.gif" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                  <b><p style={{paddingTop:10,paddingLeft:5}}>Answer File</p></b>
              </div>
          </Button>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={this.state.photo}
            onClose={this.toggleGallery} />
      </div>
    )
  }
}

export default Imagegallry;
