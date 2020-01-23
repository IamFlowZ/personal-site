import React, {useState, useEffect} from 'react'
import {FaHeart, FaShare, FaCaretDown} from 'react-icons/fa'
import './post.css'

function Post({item}) {
    console.log(item)
    return (
        <>
            <div className="postTitle">
                <h2>{item.title}</h2>
                <h3>{item.date}</h3>
            </div>
            <p className="postBody">{item.body}</p>
            <p style={{textAlign: "center", paddingTop:"10px"}}>read more</p>
            <div style={{display:"flex", justifyContent: "center"}}>
                <FaCaretDown />
            </div>
            <div className="shareIcons">
                <FaHeart /><FaShare/>
            </div>
            
        </>
    )
}

const thing = {
    title: "hello",
    date: "1/1/2020",
    body: "is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for."
}

function PostLoader() {
    return (
        <div className="idk">
            <Post item={thing}/>
        </div>
    )
}

export default PostLoader