import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Buffer } from "buffer";
import "../styles/BlogList.css";

const posts = require.context("../../posts", false, /\.md$/);
const matter = require('@11ty/gray-matter');

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
            
                    // console.log("MATTER: ", parsedMD)
                    // blogData.push(parsedMD.data)
                    const returnMD = {...parsedMD.data, content: parsedMD.content, fileUrl: url}

                    // return parsedMD.data
                    return returnMD;
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
                    <h4>{blog.date}</h4>
                    <div>
                        <h4><Link to={`/blog/${blog.url}`} state={{ md: blog }}>{blog.title}</Link></h4>
                        <p>{blog.excerptText}</p>
                    </div>
                </div>
            ))}
            {/* {console.log(blogData)} */}
        </div>
    )
}