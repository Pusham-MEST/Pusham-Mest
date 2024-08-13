import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [postArea, setPostArea] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postTime, setPostTime] = useState('');
  const [postDescription, setPostDescription] = useState('');

  useEffect(() => {
    // Fetch all posts
    const fetchPosts = async () => {
      const response = await fetch('https://api/v1/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    const response = await fetch('https://api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newPost }),
    });
    if (response.ok) {
      const createdPost = await response.json();
      setPosts([...posts, createdPost]);
      setNewPost('');
    }
  };

  const handleDeletePost = async (id) => {
    const response = await fetch(`https://api/v1/posts/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-white">Create Post</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">Deleted Post</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">All Posts</a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Create New Post */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <input
              type="text"
              value={postArea}
              onChange={(e) => setPostArea(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter Area"
            />
            <input
              type="text"
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter Date"
            />
            <input
              type="text"
              value={postTime}
              onChange={(e) => setPostTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter Time"
            />
            <input
              type="text"
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter Description"
            />
            <button
              onClick={handleCreatePost}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Create Post
            </button>
          </div>

          {/* All Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
            <h2 className="text-xl font-semibold mb-4">All Posts</h2>
            <ul className="space-y-4">
              {posts.map(post => (
                <li key={post.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span>{post.content}</span>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
