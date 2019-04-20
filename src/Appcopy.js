import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { Input } from 'antd';
import { Modal, Button,Icon } from 'antd';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening: PropTypes.func,
  stopListening:PropTypes.func,
  listening :  PropTypes.bool,
  finalTranscript :PropTypes.string

};

const { TextArea } = Input;

class Dictaphone extends Component {
  constructor(){
    super();
    this.state={
      search:"yes here i am",visible: false,tog:false
    };
  }

  togg=()=> {
    this.setState({
      tog: !this.state.tog
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

update(event){
  this.setState({search:event.target.value});
}

  render() {
      var {transcript,
      resetTranscript,
      startListening,
      stopListening,
      finalTranscript,
      browserSupportsSpeechRecognition} = this.props;
      if (!browserSupportsSpeechRecognition) {
        return null;
      }

      return (
        <div>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Button style={{height:"auto",padding:0}} onClick={this.togg}>
                <div>
                  {this.state.tog
                     ?
                     <Button onClick={startListening} type="loading" style={{zIndex:10,padding:20}}><Icon style={{fontSize:40}} type="bulb" theme="filled" /></Button>
                     :
                     <Button onClick={stopListening} type="bulb" theme="filled" style={{zIndex:10,padding:20}}><Icon style={{fontSize:40}} type="loading" /></Button>
                  }
                </div>
              </Button>

              <p>{transcript}</p>
              <input type="text" defaultValue={transcript} onChange={this.update.bind(this)} style={{width:800,paddingTop:10,position:"relative",float:"left",paddingBottom:10,fontSize:24}} />
            </Modal>
          </div>

        </div>
      );
  }
}

Dictaphone.propTypes = propTypes;

const options = {
  autoStart: false,
  continuous:true
}

export default SpeechRecognition(options)(Dictaphone)


{/*'use strict'
import React, { Component } from 'react'

//-----------------SPEECH RECOGNITION SETUP---------------------


recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'

//------------------------COMPONENT-----------------------------

class Appcopy extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }

    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => recognition.start()

      let finalTranscript = ''
      recognition.onresult = event => {
        let interimTranscript = ''

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript + ' ';
          else interimTranscript += transcript;
        }
        document.getElementById('interim').innerHTML = interimTranscript
        document.getElementById('final').innerHTML = finalTranscript
    }

      } else {
      recognition.end()
      }

}
render() {
  return (
    <div style={container}>
      <button id='microphone-btn' style={button} onClick={this.toggleListen} />
      <div id='interim' style={interim}></div>
      <div id='final' style={final}></div>
    </div>
  )
}
}

export default Appcopy;


//-------------------------CSS------------------------------------

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    width: '60px',
    height: '60px',
    background: 'lightblue',
    borderRadius: '50%',
    margin: '6em 0 2em 0'
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
}

const { container, button, interim, final } = styles
*/}
