import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import './MainCards.css'
import {getPost} from '../../Services/PostService'

function MainCards() {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const [noPost, setNoPost] = useState(false)


    window.onscroll = () =>{
        
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(!noPost) {
                fetchPosts(page)
            }
            
        }
    }

    const fetchPosts = (page) => {
        setLoading(true);
        getPost(page)
        .then(
            response => {
                if(response.data.length !== 0){
                    let newPost = posts.concat(response.data)
                    setPosts(newPost)
                    setPage((prevPage) => prevPage + 1)
                }
                else {
                    setNoPost(true)
                }
                
        })
        .catch(e=> console.log(e.message))
        .finally(()=> setLoading(false))
    }
    
    useEffect(()=> {
        fetchPosts(page);
    },[])


    return (
    
        <div className="main-container">
            { loading? <div>Loading....</div> : null }
            { noPost?  <div>No More posts to display </div> : null }
            {
                posts.map(post => 
                    <Cards 
                        id={post.id} 
                        title={post.title} 
                        body={post.title} 
                    />)

            }
        </div>
    )
}

export default MainCards
