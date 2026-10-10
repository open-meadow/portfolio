import { BlogList } from "../components/javascripts/BlogList"
import { Disclaimer } from "../components/javascripts/Disclaimer.tsx"
import Navigation from "../components/javascripts/Navigation"

export const BlogListPage = () => {
    return (
        <>
            <Navigation/>
            <BlogList/>
            <Disclaimer/>
        </>
    )
}