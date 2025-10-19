import React, {useEffect, useState} from 'react'
import Postservices from '../appWrite/config'
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Postservices.getAllPost().then((posts) => {
          if (posts) {
            setPosts(posts.rows);
          }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 text-center">
                <Container>
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-3xl font-bold mb-3">Welcome to the Blog</h1>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">Sign in to explore posts or create your own stories.</p>
                        <Link to="/login" className="inline-block px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium">Login</Link>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
