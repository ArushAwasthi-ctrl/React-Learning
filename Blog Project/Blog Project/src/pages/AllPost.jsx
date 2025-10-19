import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import Postservices from '../appWrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      Postservices.AllPosts([]).then((posts) => {
        if (posts) {
          setPosts(posts.rows);
        }
      })
    }, [])

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

export default AllPosts
