import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

import React from "react";
import Pad from "./components/Pad.jsx";
function App() {
    /*
    const [padArr, setPadArr] = React.useState(pads);

    function toggle(id){
        console.log(id)
        setPadArr(prevArr => prevArr.map(pad => {
            return pad.id === id ? {...pad, on : !pad.on} : pad
        }))
    }

    const mappedArr = padArr.map((obj) => {
        return (
            <Pad color = {obj.color} key = {obj.id} id = {obj.id} on = {obj.on} toggle={toggle} />
        )
    })

     */


    return (

    <>
        <Header />
        <Main />
    </>
       /*
        <main>
            <div className="pad-container">
                {mappedArr}
            </div>

        </main>
        */
    )
}

export default App
