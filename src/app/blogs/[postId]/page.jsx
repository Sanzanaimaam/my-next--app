import React from 'react';
const blogsData = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    author: "John Doe",
    category: "JavaScript",
    date: "2026-09-10",
    description: "Learn the basics of JavaScript and how to start building interactive web applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 2,
    title: "Why Learn React?",
    author: "Sarah Smith",
    category: "React",
    date: "2026-09-12",
    description: "Discover why React is one of the most popular libraries for building modern user interfaces.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "Understanding Tailwind CSS",
    author: "Alex Johnson",
    category: "CSS",
    date: "2026-09-14",
    description: "Explore how Tailwind CSS helps developers create beautiful and responsive websites quickly.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    author: "Emily Brown",
    category: "TypeScript",
    date: "2026-09-16",
    description: "Learn how TypeScript adds static typing to JavaScript and makes large projects easier to maintain.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 5,
    title: "Building Your First Web App",
    author: "Michael Wilson",
    category: "Web Development",
    date: "2026-09-18",
    description: "A beginner-friendly guide to building your first modern web application from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const PostDetailPage =async ({params}) => {
    const {postId}= await params
    const post = blogsData.find(blogData=> blogData.id===parseInt(postId))

    return (
        <div>
            <h2>Post detail: {postId}</h2>
            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>by {post.author}</p>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;