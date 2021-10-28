// import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {


    // const [name,setName] = useState('Divyansh')

    // const handleClick = () =>{
    //     // console.log('Hello Ninjas',e.target)
    //     setName('Mehul');
    // }
    // const handleClickAgain = (name,e) =>{
    //     console.log('Hello '+name,e.target);
    // }
    // const [name,setName] = useState('mario')

        const { blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    
    // const handleDelete= (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog)
    // }
    

    return ( 
        <div className="Home">
        {error && <div> { error } </div>}
        {isPending && <div>Loading....</div>}
          {blogs && <BlogList blogs={blogs} title = "All Blogs!"/>}
           {/* <button onClick={() => setName('divyansh')}>Change Name</button> */}
           {/* <p>{name}</p> */}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!" /> */}
            {/* <p>My name is {name}</p>
            <button onClick={handleClick}> click Me</button>
            <button onClick={(e) => handleClickAgain('divyansh',e)}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;