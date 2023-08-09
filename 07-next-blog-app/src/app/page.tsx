'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from '@/models/models';
import { storePosts, getStoredPosts } from "../../utils/storageFunctions";

const getPosts = async(): Promise<Post[]> => {
  const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: Post[] = await response.json();

  return Object.values(posts);
}

export default function Home() {
  const [ allPosts, setAllPosts ] = useState<Post[]>([]);
  const postStyle = {
    // Styles for individual posts to appear as a grid of posts
    width: '400px',
    height: '250px',
  }

  // To set the initial render of the posts to the screen
  useEffect(() => {
    const storedPosts = getStoredPosts();

    if (storedPosts && storedPosts.length > 0) {
      setAllPosts(storedPosts);
    } else {
      getPosts().then((posts: Post[]) => {
        setAllPosts(posts);
        storePosts(posts);
      })
    }
  }, []);

  return (
    <div className='mt-4'>
      <h3 className='h3 ps-5 mb-3'>Posts</h3>
      {
        allPosts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          <div className='container d-flex justify-content-center flex-wrap gap-3'>
            {
              allPosts.map((post: Post) => (
                <div key={ post.id } className='card' style={ postStyle }>
                  <div className='card-body'>
                    <Link style={{ cursor: 'pointer' }} href={ `/post/${ post.id }` }>
                      <h5 className='card-title' style={{ fontSize: '18px' }}>{ post.title }</h5>
                    </Link>
                    <p className='card-text text-black' style={{ cursor: 'grab' }}>{ post.body }</p>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
