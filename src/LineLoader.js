import LoadingContext from './LoadingContext'
import React, {useContext} from 'react'
const LineLoader = ({color, w, h}) => {
    const {sf} = useContext(LoadingContext)
    const style = {
        background : color,
        position : 'absolute',
        width : `${w * sf}px`, 
        top : `${2 * h / 7}px`,
        height : `${h / 50}px`, 
        left : `${0}px`
    }
    return (
      <div style = {style}>
      </div>
    )
}

export default LineLoader 