import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Markdown from 'react-markdown';

import Navigation from "../components/javascripts/Navigation";

import "../components/styles/Blog.scss";

export const BlogPage = () => {
    const [post, setPost] = useState("");

    const location = useLocation();
    // console.log("LOCATION: ", location);

    const title = location.state.md.title;
    const excerptText = location.state.md.excerptText;
    const content = location.state.md.content;
    // const fileUrl = location.state.md.fileUrl;
    
    useEffect(() => {
        setPost(content);
    }, [content])

    return(
        <>
            <Navigation />
            <div className="blog">
                <h1>{title}</h1>
                <p>{excerptText}</p>
                <hr/>
                <Markdown>{post}</Markdown>
            </div>
        </>
    )
}