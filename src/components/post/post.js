import React, {useState, useEffect} from 'react'
import './post.css'

function Post({item}) {
    console.log(item)
    return (
        <>
            <h2>{item.title}</h2>
            <p style={{height: "201px"}}>{item.body}</p>
        </>
    )
}

const thing = {
    title: "hello",
    body: "is it me your looking for"
}

function PostLoader() {
    return (
        <div id="idk">
            <Post item={thing}/>
        </div>
    )
}

export default PostLoader