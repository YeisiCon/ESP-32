import CardStyle from "../public/src/styles/CardStyle";
import { Typography, Card } from "@mui/material";
import Image from 'next/image';
import esp32 from '../public/images/Esp32.png';
import { fetchRequest } from "../public/src/provider/fetch.provider";
import { useEffect, useState } from "react";
import textCard from "../public/src/styles/textCard";

const espInfo = () => {
  const [info, setInfo] = useState({ infoESP32: {}, status: false });

  const requestEspInfo = async () => {
    const { infoESP32 } = await fetchRequest('esp', { method: 'GET' });
    setInfo({
      infoESP32: { ...infoESP32 },
      status: true
    })
    
  }

  useEffect(() => {
    requestEspInfo();
  }, [info.status])

  return (
    <div>
      <Card style={{ width: '50%', margin: 32, color: '#FCFCFC', height: '90%' }}>
        <Typography variant="h4"
          style={{ color: '#0E0E2C', marginLeft: '5%', marginTop: 10 }}>
          ESP32
        </Typography>
        <div style={CardStyle.containerEsp}>
          <div style={{ Height: '80%', width: '60%', marginLeft: 32 }}>
            {
              Object.entries(info.infoESP32).map(([key, value]) => (
                <div key={key} style={{ flexDirection: 'row', display: 'flex' }}>
                  <Typography  style={textCard.textIndex}>
                  {key}:
                  </Typography>
                  <Typography color={'#6F6F82'}>
                    {value}</Typography>
                </div>
              ))
            }
          </div>
          <div style={{ width: '30%', marginRight: '5%', }} >
            <Image
              src={esp32}
            />
          </div>
        </div>
      </Card>
    </div >
  )
}
export default espInfo;
