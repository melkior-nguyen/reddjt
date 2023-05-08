import React, { useState } from 'react'
import Button from '../Button/Button'

import './contents.css'

function Contents() {
    const [addBtn, setAddBtn] = useState(true)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [tag, setTag] = useState('None')
    const [posts, setPosts] = useState([])

    const tagsText = [
        'None',
        'NSFW',
        'Mood',
        'Quotes',
        'Shitpost']

    const tagColor = {
        'None': 'color1',
        'NSFW': 'color2',
        'Mood': 'color3',
        'Quotes': 'color4',
        'Shitpost': 'color5',
    }

    const [actIndex, setActIndex] = useState(0)

    function handleTag(index, tag) {
        setActIndex(index)
        setTag(tag)
    }

    function handlePostBtn() {
        if (title!=='' && desc!==''){
            posts.push({ title: title, desc: desc, tag: tag })
            setTitle('')
            setDesc('')
        }
        setAddBtn(true)
    }

    return (
        <div className='contents'>
            <div className='contents_container'>
                {posts.map((post, index) => {
                    return (
                        <div className='post' key={index}>
                            <div className='post_title'>{post.title}</div>
                            <div className='post_tag'>
                                <div className={`tag ${tagColor[post.tag]}`}>{post.tag}</div>
                            </div>
                            <div className='post_desc'>{post.desc}</div>
                        </div>
                    )
                })}
            </div>
            <div className='contents_add'>
                {addBtn &&
                    <button className='contents_add-btn' onClick={() => setAddBtn(false)}>+</button>}
            </div>
            {!addBtn &&
                <div className='contents_add-edit'>
                    <div className='add_edit-header'>
                        <Button OnClick={handlePostBtn} btnText='Post' />
                    </div>
                    <div className='add-edit-container'>
                        <label>Title</label>
                        <textarea onChange={(e) => setTitle(e.target.value)} />
                        <label>Descriptions</label>
                        <textarea onChange={(e) => setDesc(e.target.value)} />
                        <label>Tags</label>
                        <div className='tags_container'>
                            {tagsText.map((tag, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={actIndex === index ?
                                            `tag ${tagColor[tag]} active` :
                                            `tag ${tagColor[tag]}`}
                                        onClick={() => handleTag(index, tag)}>
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='add_edit-footer'>
                        <button className='add_edit-close' onClick={() => setAddBtn(true)}>&times;</button>
                    </div>
                </div>}
        </div>
    )
}

export default Contents
