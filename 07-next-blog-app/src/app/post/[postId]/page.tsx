'use client';

import { Post } from "@/models/models";
import { getStoredPosts } from "../../../../utils/storageFunctions";

interface PageProps {
  params: { postId: string };
}

export default function Page({ params: { postId } }: PageProps) {
  const allPosts: Post[] = getStoredPosts();
  const currentPost: Post | undefined = allPosts.find((post) => post.id === Number(postId))

  console.log(currentPost);
  return (
    <div className='container mt-5'>
      <h1 className='text-black'>{ currentPost?.title }</h1>
      <p className='lead mt-3'>{ currentPost?.body }</p>
    </div>
  )
}
