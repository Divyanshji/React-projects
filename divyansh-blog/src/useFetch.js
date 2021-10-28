import { useEffect , useState } from 'react'

const useFetch = (url) =>{
    
    const [blogs,setBlogs] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res =>
                {
                    if(!res.ok){
                        throw Error('Could not fetch data from That Resource')
                    }
                  return  res.json()
                })
                .then(data =>{
                    // console.log(data)
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(e => {
                    console.log(e.message)
                    setError(e.message)
                    setIsPending(false)
                });
                // return () => console.log('Cleanup');
        // console.log('use Effect WOrked')
        // console.log(name)
    },[url]);

    return { blogs, isPending, error}
}

export default useFetch;
// START JSON SERVER COMMAND
//  npx json-server --watch .\data\db.json --port 8000