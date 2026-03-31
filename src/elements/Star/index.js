import React from 'react'
import propsTypes from 'prop-types'
import './index.scss'

// Koreksi: classname -> className (agar sinkron dengan di bawah)
export default function Star ({className, value, height, width, spacing}) {

    const decimals = Number(value) % 1

    const star = [] // Koreksi: start -> star (agar sinkron dengan push)
    let leftPos = 0 // Koreksi: leftpos -> leftPos (case sensitive)

    // Koreksi: - jadi =, kurung kurawal jadi kurung biasa
    for(let index = 0; index < 5 && index < value - decimals; index++) {
        leftPos = leftPos + width // Koreksi: leftPost -> leftPos
        star.push(
            <div className="star" key={`star-${index}`} 
            style={{left: index*width, width: width, height: height, marginRight: spacing}}>
            </div>
        );
    }

    if(decimals > 0 && value <= 5)
        star.push(
            <div
            className="star" 
            key={`starWithDecimal`}
            style={{left: leftPos, width: decimals * width - spacing, height: height}} 
            ></div>
        );

    const starPlaceholder = []
    // Koreksi: kurung kurawal jadi biasa, - jadi =, tambah ;
    for(let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div 
            className="star placeholder" 
            key={`starPlaceholder-${index}`} 
            style={{left: index*width, width: width, height: height, marginRight: spacing}}>
            </div>
        );
    }

    return (
        <>
          <div className={['stars', className].join(" ")} style={{height: height}} >
            {starPlaceholder}
            {star}
          </div>
        </>
    );
}

// Koreksi: propsTypes -> propTypes
Star.propTypes = {
    value: propsTypes.number,
    width: propsTypes.number,
    height: propsTypes.number,
    spacing: propsTypes.number,
}