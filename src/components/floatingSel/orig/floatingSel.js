import React from 'react';
import f from './floatingSel.module.scss'
import cn from 'classnames';

function FloatingSel() {


    return (
            <div>


            <div className={f.floating_form}>
                <div className={f.floating_label}>
                    <input className={f.floating_input} type="text" placeholder=" " />
                    <span className={f.highlight}>AAA</span>
                    <label>Text</label>
                </div>

                <div className={f.floating_label}>
                    <input className={f.floating_input}  onClick={e => (e.target.type = 'time') } placeholder=" " />
                    <span className={f.highlight}></span>
                    <label>Time</label>
                </div>
 
                <div className={f.floating_label}>
                    <input className={f.floating_input} onClick={e => (e.target.type = 'date') } placeholder=" " />
                    <span className={f.highlight}></span>
                    <label>Date</label>
                </div>
                
                <div className={f.floating_label}>
                    <input className={f.floating_input} type="password" placeholder=" " />
                    <span className={f.highlight}></span>
                    <label>Password</label>
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

                <div className={f.floating_label}>
                    <textarea className={cn(f.floating_input,f.floating_textarea)} placeholder=" "></textarea>
                    <span className={f.highlight}></span>
                    <label>Textarea</label>
                </div>

           
            </div>
            </div>
            );
          
          
          }
          
export default FloatingSel;