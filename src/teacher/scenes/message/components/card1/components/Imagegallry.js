import React, { Component } from 'react'
import {Button} from 'antd';
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

class Imagegallry extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <div>
          <Button onClick={this.toggleGallery} style={{height:"2px",width:"2px",paddingLeft:"0px"}}>
              <div >
                  <img src="https://cdn.dribbble.com/users/2138960/screenshots/4346699/1.png" alt="Avatar" style={{width:"80px",height:"80px",borderRadius: "50%"}}/>
                  <b><p style={{paddingTop:10,paddingLeft:5}}>Answer File</p></b>
              </div>
          </Button>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery} />
      </div>
    )
  }
}

export default Imagegallry;
