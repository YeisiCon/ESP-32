import Head from 'next/head'
import { Card, Typography, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import { fetchRequest } from "../public/src/provider/fetch.provider";
import btnRelayStyle from '../public/src/styles/btnRelayStyle';
import textCard from '../public/src/styles/textCard';

const Home = () => {
  const [relay, setRelay] = useState(null);
  
  const [info, setInfo] = useState({ relay1: null, relay2: null, infoRelay:{}, status: false });

  const requestControl = async (value) => {
    if (!relay) {
      alert('Seleccione un relay ');
      return;
    }
    const { infoRelay } = await fetchRequest(`relay?relay=${relay}&valueOnOff=${value}`, { method: 'GET' });
    const newInfo = { ...info };
    switch (infoRelay.requestedRelay) {
      case '1':
        newInfo.relay1 = parseInt(infoRelay.relayStatus);
        break;
      case '2':
        newInfo.relay2 = parseInt(infoRelay.relayStatus);
        break;
      default:
        break;
    }
    newInfo.status = true;
    setInfo({
      ...newInfo, 
      infoRelay
    })
    
  }
  useEffect(()=>{

  },[info.status])


  return (
    <div>
      <Card style={{ width: '50%', margin: 32, color: '#FCFCFC', height: '90%' }}>
        <Typography variant="h4" style={{ color: '#0E0E2C', marginLeft: '5%', marginTop: 10 }}>
          CONTROLADORA
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
          <div style={textCard.containerButton}>
            <Button style={
              relay == '1' ?
                btnRelayStyle.buttonAction :
                btnRelayStyle.button}
              variant="contained"
              onClick={() => setRelay(1)} >
              Relay 1
            </Button>
            <Button style={
              relay == '2' ?
                btnRelayStyle.buttonAction :
                btnRelayStyle.button}
              variant="contained"
              onClick={() => setRelay(2)}>
              Relay 2
            </Button>
            <div style={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }} >
              <Button style={
                (relay && relay == 1 && info.relay1 == 0)?
                  btnRelayStyle.btnOnActive :
                  relay && relay == 2 && info.relay2 == 0 ?
                    btnRelayStyle.btnOnActive :
                    btnRelayStyle.btnOn}
                variant="outlined"
                onClick={() => requestControl(0)} >
                Activar
              </Button>

              <Button
                variant="outlined"
                color="error"
                style={
                  (relay && relay == 1 && info.relay1 == 1) ||  relay && relay == 1  && info.relay1 == null  ?
                    btnRelayStyle.btnOffActive : 
                    (relay && relay == 2 && info.relay2 == 1) || relay && relay == 2  && info.relay2 == null  ?
                      btnRelayStyle.btnOffActive :
                      btnRelayStyle.btnOff
                    }
                onClick={() => requestControl(1)} >
                apagar
              </Button>
            </div>
          </div>
          <div style={textCard.containerText} >
          {info.status  ?
            <div style={textCard.textIndex}>
              <div style={textCard.containerRFID} >
                <Typography style={textCard.textIndex}>
                  Info relay:
                </Typography>
                <Typography >
                  {info.infoRelay.requestedRelay}
                </Typography>
              </div>
              <div style={textCard.containerRFID} >
                <Typography style={textCard.textIndex}>
                  Relay value:
                </Typography>
                <Typography >
                  {info.infoRelay.requestedValue}
                </Typography>
              </div>
              <div style={textCard.containerRFID}>
                <Typography style={textCard.textIndex}>
                  Relay status:
                </Typography>
                <Typography >
                  {info.infoRelay.relayStatus}
                </Typography>
              </div>
            </div>
            : <h1>Error</h1> }
          </div>
        </div>
      </Card>
    </div>
  )
}
export default Home;