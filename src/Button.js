import React, {useContext} from 'react'
import LoadingContext from './LoadingContext'
const Button = ({w, h}) => {
    const {start} = useContext(LoadingContext)
    const style = {
        position : 'absolute',
        top: `${h / 40}px`,
        left : `${w / 2}px`,
    }

    return <button onClick = {start}>
      start
      </button>
}