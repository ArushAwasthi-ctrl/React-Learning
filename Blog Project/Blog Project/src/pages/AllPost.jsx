import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import Postservices from '../appWrite/config'
import { useSelector } from 'react-redux'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const status = useSelector((state) => state.auth.status)

    useEffect(() => {
      Postservices.getAllPost().then((res) => {
        if (res && Array.isArray(res.documents)) {
          setPosts(res.documents)
        } else {
          setPosts([])
        }
      })
    }, [status])

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
