import React from 'react';
import f from './floatingSel.module_1.scss'

function FloatingSel1() {


    return (
            <div>



                <div className={f.floating_form}>
                    <div className={f.floating_label}>
                    <input className={f.floating_input} type="text" placeholder=" "/>
                    <span className={f.highlight}></span>
                    <label>Text</label>
                    </div>


                    <div className={f.floating_label}>
                    <select className={f.floating_select} onclick="this.setAttribute('value', this.value);" value="">
                        <option value=""></option>
                        <option value="1">Alabama</option>
                        <option value="2">Boston</option>
                        <option value="3">Ohaio</option>
                        <option value="4">New York</option>
                        <option value="5">Washington</option>
                    </select>
                    <span className={f.highlight}></span>
                    <label>Select</label>
                    </div>


                </div>



            </div>
            );
          
          
          }
          
export default FloatingSel1;