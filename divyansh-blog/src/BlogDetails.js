import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {blogs :blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <h2> Loading... </h2> }
            {error && <h2> { error } </h2> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>
                        <p>{ blog.body }</p>
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
        );
}
 
export default BlogDetails;