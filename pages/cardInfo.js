import * as React from 'react';
import { Typography, CardContent, Card } from '@mui/material/';
import card from '../public/images/rectangle.png';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { fetchRequest } from '../public/src/provider/fetch.provider';
import textCard from '../public/src/styles/textCard'



const cardInfo = () => {

  const [info, setInfo] = useState({ infoCardRFID: {}, lastCardReadTime: (''), value: false });
  const { infoCardRFID, lastCardReadTime } = info;

  const requestCardInfo = async () => {
    const { infoCardRFID, lastCardReadTime } = await fetchRequest('card?lastcard', { method: 'GET' });
    setInfo({
      infoCardRFID: { ...infoCardRFID },
      lastCardReadTime: (lastCardReadTime),
      status: true
    })
  }
  useEffect(() => {
    requestCardInfo();
  }, [info.status])


  return (
    <div>
      <Card style={{ width: '50%', margin: 32, color: '#FCFCFC', height: '90%' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems:'center' }}>
          <div style={{ width: '60%', marginTop: '4.5%', alignItems:'center' }} >
            <Image src={card} sx={{ width: 15, height: 450 }}
              variant="quilted" />
          </div>
          <div style={{
             width: '60%',
             fontSize: 4,
             alignContent: 'center',
             alignItems: 'center',
             color:'#6F6F82',
             lineHeight : 2
              }}>
            <div key={1} style={textCard.containerRFID}  >
              <div style={textCard.containerRFID}>
                <Typography style={textCard.textIndex}>
                  Code hex:</Typography>
                <Typography>{infoCardRFID.codeHEX}</Typography>
              </div>
              <div style={textCard.containerRFID}>
                <Typography style={textCard.textIndex}>
                  Code dec: </Typography>
                <Typography>{infoCardRFID.codeDecimal}</Typography>
              </div>
            </div>

            <div style={textCard.containerRFID} >
              <div style={textCard.containerRFID}>
                <Typography style={textCard.textIndex}>
                  Type card:</Typography>
                <Typography>{infoCardRFID.typeCard}</Typography>
              </div>

              <div style={textCard.containerRFID}>
                <Typography style={textCard.textIndex}>
                  Read time:
                </Typography>
                <Typography>
                  {lastCardReadTime}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>

      </Card>
    </div >
  );
}
export default cardInfo;