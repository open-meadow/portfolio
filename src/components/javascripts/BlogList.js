import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import "../styles/BlogList.css";

const posts = require.context("../../posts", false, /\.md$/);
const matter = require('gray-matter');
window.Buffer = Buffer;

export const BlogList = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            const results = await Promise.all(
                posts.keys().map(async (filename) => {
                    const url = posts(filename)
                    const response = await fetch(url)
                    const markdown = await response.text()
                    const parsedMD = matter(markdown)
            
                    console.log("MATTER: ", parsedMD)
                    // blogData.push(parsedMD.data)
                    return parsedMD.data
                })
            );

            setBlogData(results);
        }

        loadPosts();
    }, [])


    return (
        <div className="blog-list">
            <h2>Blog</h2>
            <p>Right now, this is a simple section. I want to make a blog where I can write and share things.</p>
            <hr />
            {blogData.map((blog, index) => (
                <div key={blog.id} className="blog-list-element">
                    <h4><a href="/">{blog.title}</a></h4>
                    <p>{blog.excerptText}</p>
                </div>
            ))}
            {/* {console.log(blogData)} */}
        </div>
    )
}