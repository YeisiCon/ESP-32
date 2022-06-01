import React, { useEffect, useState } from "react"

const App = () =>{
    const [ Info, setInfo] = useState({ infoESP32:  [], requestStatus: [] });
    useEffect(() =>{
        fetch('http://192.168.0.247:80/esp')
        .then(response => response.json())
        .then(data => setInfo(data))
    },  []);
    console.log(Info)
    return Info;
}


export default App;