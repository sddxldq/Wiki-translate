import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setterm] = useState('Liverpool')
    const [debouncedTerm,setdebouncedterm] = useState(term)
    const [results,setresults] =useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncedterm(term)
        },1000);
        
        return () => {
            clearTimeout(timer)
        }
    }, [term])

    useEffect(() => {
        const search = async ()=>{
            const{ data }= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: "query",
                    list: "search",
                    origin: "*",
                    srsearch: debouncedTerm,
                    format: "json",
                }
            })
            setresults(data.query.search)
            }
            if (debouncedTerm){
                search();
            }
    }, [debouncedTerm])

    const renderedresults = results.map((result)=>{
            return(
                <div key={result.pageid} className='item'>
                    <div className='right floated content'>
                        <a 
                            className='ui button'
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >
                            go
                        </a>
                    </div>
                    
                    <div className = 'content'>
                        <div className='header'>{result.title}</div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                    
                </div>
            )
        })


    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search term</label>
                    <input
                        className='input'
                        value={term}
                        onChange= {(e)=>{setterm(e.target.value)}}
                    />
                </div>
            </div>
            <ul className="ui celled list">{renderedresults}</ul>
        </div>
    )
}

export default Search
