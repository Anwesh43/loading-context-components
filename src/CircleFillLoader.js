import LoadingContext from './LoadingContext'
import React, {useContext} from 'react'
const CircleFillLoader = ({w, h}) => {
    const {sf} = useContext(LoadingContext)
    const size = Math.min(w, h) * 0.2 * sf 
    const style = {
        width : `${size}px`,
        height : `${size}px`,
        position: 'absolute', 
        left : `${w / 2}px`,
        top : `${2 * h / 3}px`,
        borderRadius: '50%'
    }
    return (
        <div style = {style}>
        </div>
    )
}

export default CircleFillLoader 