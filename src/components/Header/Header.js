import React, {useContext } from 'react'

import './header.css'
import Button from '../Button/Button'

import {Context} from '../../App'


function Header({ setIsEdit }) {
    const {info} = useContext(Context)

    return (
        <div className='header' style={{ backgroundColor: info.theme, backgroundImage: 'linear-gradient(to bottom, transparent 25%, black 100%' }}>
            <div className='header_info'>
                <div className='header_info-edit'>
                    <Button OnClick={() => setIsEdit(true)} btnText='Edit' />
                </div>
                <img
                    src={info.url}
                    alt=''
                    className='header_info-img'
                />
                <div className='header_info-username'>{info.name}</div>
                <div className='header_info-age'>{info.age} Year Old</div>
                <div className='header_info-about'>{info.about}</div>
            </div>
        </div>
    )
}

export default Header   
