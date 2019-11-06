import React, { useState } from 'react';
import f from './floatingSel.module.scss'

const loadContext = React.createContext()

function FloatingSel() {
    const [loadText, setLoadText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        e.target.setAttribute("selectedvalue", e.target.value)
        console.log(e.target.value)
    };

    const handleClick = (e) => {
        e.preventDefault()
        var lb = document.getElementById ("selectId");
        lb.options.length = 0;

        let vLoaded = e.target.getAttribute("loaded")
        vLoaded = (vLoaded === "1" ? "" : "1")
        console.log(e.target.getAttribute("loaded"))

        e.target.setAttribute("loaded", vLoaded)
        if(vLoaded){
            document.getElementById("loaderId").style.display='block';
        }else{
            document.getElementById("loaderId").style.display='none';
        }

    };

    
    return (
        <loadContext.Provider value={[loadText, setLoadText]}>
            <div>
                <br/>
                <br/>
                <br/>

            <div className={f.floating_form}>
                <div className={f.floating_label}>
                    <input className={f.floating_input} type="text" placeholder=" " />
                    <span className={f.highlight}></span>
                    <label>Text</label>
                </div>


                <div className={f.floating_label}>
                    <select id="selectId" loaded="" className={f.floating_select} 
                        onClick={e => handleClick(e)} 
                        onChange={e => handleChange(e)} 
                        selectedvalue="">
                   </select>
                    <span className={f.highlight}></span>
                    <label>Select</label>
                    <div className={f.parentloader}>
                    <div id="loaderId" className={f.loader}></div>
                    </div>
                </div>


                    
            </div>

            <br/>

            </div>

            </loadContext.Provider>
            );
          
          
          }
          
export default FloatingSel;