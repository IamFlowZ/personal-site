import React from 'react'
import ReactMarkdown from 'react-markdown'
import './post.css'

function Post({item}) {
    return (
        <li>
            <div className="postTitle">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
            </div>
            <div className="postBody">
                <ReactMarkdown  source={item.body}/>
            </div>
            <p style={{textAlign: "center", paddingTop:"10px"}}>read more</p>
            <div style={{display:"flex", justifyContent: "center"}}>
                
            </div>
        </li>
    )
}

const thing = {
    title: "hello",
    date: "1/1/2020",
    body: ` # Probably\nis it me your \nlooking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.
    is it me your looking for.is it me your looking for.is it me your looking for.is it me your looking for.`
}

const things = [thing, thing, thing, thing]

function PostLoader() {
    return (
        <ul className="idk">
            {things.map(thing => <Post item={thing}/>)}
            
        </ul>
    )
}

export default PostLoader