import { Post } from '@/models/models';

// The key which will store all my objects in the local storage
const STORAGE_KEY = 'posts';

const getStoredPosts: () => Post[] = () => {
  return Object.values(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
}

const savePost = (post: Post) => {
  const posts: Post[] = getStoredPosts();
  posts.push(post);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

const storePosts = (posts: Post[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export { getStoredPosts, savePost, storePosts };
