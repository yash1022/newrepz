import React from 'react';

export default function Buttons(props) {

function to_gray()
{
    document.body.style.backgroundColor ='gray'
}

function to_black()
 {
     document.body.style.backgroundColor ='black'
 }

 function to_green()
 {
     document.body.style.backgroundColor ='green'
 }

    return (
        <>
            {props.mode === 'dark' && (
                <div className='color-btn'>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked onClick={to_gray} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">GRAY</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  onClick={to_black}/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">BLACK</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={to_green} />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">GREEN</label>
                    </div>
                </div>
            )}
        </>
    )
}
