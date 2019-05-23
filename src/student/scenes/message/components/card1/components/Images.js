import React, { Component } from 'react'
import {Button,Tooltip} from 'antd';
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
          <Tooltip title="📝 Image file Avalable">
            <div >
                <i className="fas fa-image" style={{fontSize:60,paddingLeft:25,color:"#CAEBF2"}}></i>
                <b><p style={{paddingTop:10,paddingLeft:20}}>Answer File</p></b>
            </div>
         </Tooltip>

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
