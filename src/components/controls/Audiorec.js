import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import styled from 'styled-components';


class Audiorec extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (
      <div>
        <Ar
          state={recordState}
          onStop={this.onStop}
          backgroundColor='rgba(60,30,110,0.8)'
          backdropFilter='saturate(180%) blur(30px)'
          
        />
        <Audio
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></Audio>
        <MuiButton style={{backgroundColor:'lightgreen',borderRadius:'12px',fontFamily:'Inter',padding:'7px',fontSize:'15px'}} id='record' onClick={this.start}>
          Start 🎙️🎤
        </MuiButton>
        <MuiButton 
          style={{backgroundColor:'yellow',borderRadius:'12px',fontFamily:'Inter',padding:'9px',fontSize:'15px'}} id='pause' 
            onClick={this.pause} variant='outlined'>
              Pause⏯️⏸️               
        </MuiButton>
        <MuiButton style={{backgroundColor:'red',borderRadius:'12px',fontFamily:'Inter',padding:'11px',color:'darkpurple',fontSize:'17px'}} id='stop' onClick={this.stop}>
          Stop🤚⏹️
        </MuiButton>
      </div>
    )
  }
}

export default Audiorec

// export default Audiorec

const Audio = styled.audio`
border-radius:20px;
padding:15px;
background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
@media(max-width:600px){
  background: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  width:130px;
}
`;
const Ar = styled(AudioReactRecorder)`
@media(max-width:600px){
 display:none;
}

`;