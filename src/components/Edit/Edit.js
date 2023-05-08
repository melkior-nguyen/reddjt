import React, { useState, useContext } from 'react'

import './edit.css'
import '../Button/Button'
import Button from '../Button/Button'
import Input from '../InputField/Input'

import {Context} from '../../App'



function Edit({ setIsEdit }) {
    const avaUrls = [
        'https://i.redd.it/snoovatar/snoo_assets/runways/QjOuJeJtIa0_Asset_328.png',
        'https://i.redd.it/snoovatar/snoo_assets/runways/faN1gr3xZhY_Asset_327.png',
        'https://i.redd.it/snoovatar/snoo_assets/runways/z_s0p8PEc9g_Asset_324.png',
        'https://i.redd.it/snoovatar/snoo_assets/runways/AEAIwIimM8k_Asset_323.png',
        'https://i.redd.it/snoovatar/snoo_assets/runways/hkyRl6nH9hI_avatar_33723289.jpg',
        'https://i.redd.it/snoovatar/snoo_assets/runways/eEbab7KcTPw_avatar_116631991.jpg',
        'https://i.redd.it/snoovatar/avatars/basic/5c09702a-4fba-404a-8e31-866b2926313e.png',
        'https://i.redd.it/snoovatar/avatars/basic/c236c52d-90f0-4668-98b8-2a94a5a0439f.png',
        'https://i.redd.it/snoovatar/avatars/basic/d789cf27-226a-435b-85b9-3d17aa015758.png',
        'https://i.redd.it/snoovatar/avatars/basic/7c0953dd-d831-490f-8b53-b088293cded8.png',
        'https://i.redd.it/snoovatar/avatars/basic/97569a11-ead5-4f7a-bd96-363853612961.png',
        'https://i.redd.it/snoovatar/avatars/basic/c236c52d-90f0-4668-98b8-2a94a5a0439f.png'
    ]
    const [name, setName] = useState('Melkior-Nguyen')
    const [age, setAge] = useState('26')
    const [about, setAbout] = useState('')
    const [url, seturl] = useState('https://i.redd.it/snoovatar/snoo_assets/runways/QjOuJeJtIa0_Asset_328.png')
    const [theme, setTheme] = useState('red')

    const [active, setActive] = useState()

    const { setInfo } = useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()
        setIsEdit(false)
        setInfo({ name, age, about, url, theme })
    }

    function handleImg(e, index) {
        seturl(e.target.src)
        setActive(index)
    }


    return (
        <form className='edit_form' onSubmit={handleSubmit}>
            <div className='edit'>
                <div className='edit_save'>
                    <Button btnText='Save' />
                </div>
                <div className='edit_input-container'>
                    <Input
                        labelText='Display Name'
                        type='text'
                        placeholder='Melkior-Nguyen'
                        setData={setName}
                    />

                    <Input
                        labelText='Age'
                        type='number'
                        placeholder='26'
                        setData={setAge}
                    />

                    <Input
                        labelText='About'
                        inputArea
                        setData={setAbout}
                    />

                    <label>Profile Picture</label>
                    <div className='edit_input-imgs'>
                        {avaUrls.map((avaUrl, index) => {
                            return (
                                <div className='edit_input-img ' key={index}>
                                    <img
                                        src={avaUrl}
                                        alt=''
                                        key={index}
                                        className={active === index ? 'active' : ''}
                                        onClick={(e) => handleImg(e, index)}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    <div className='edit_input-themes'>
                        <Input
                            labelText='Theme'
                            type='color'
                            setData={setTheme}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Edit
