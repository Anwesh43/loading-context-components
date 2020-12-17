import Button from './Button'
import CircleFillLoader from './CircleFillLoader'
import LineLoader from './LineLoader'
import React from 'react'

const Layout = ({w, h}) => {
    return (
        <div>
            <Button w = {w} h = {h}/>
            <CircleFillLoader w = {w} h = {h}/>
            <LineLoader w = {w} h = {h}/>
        </div>
    )
}

export default Layout 