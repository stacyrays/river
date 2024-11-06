import * as React from 'react';
import {styles} from '../helpers/tailwindstyles';

interface Post {
    _id: string;
    name: string;
    date: string;
    description: string;
    image: string;
    src: string;
    width: string;
    height: string;
    title: string;
 }

 type Posts = Post[];

const Services: React.FC<Posts> = async () => {
    const response = await fetch('http://localhost:3000/api/blog');
    const posts: Posts = await response.json();
    console.log('posts', posts)
    return (
        <div className={styles.componentContainer}>
            <div className={styles.subComponentContainer}>
                <h1 className={styles.h1}>Services</h1>
                <p>Contrary to popular belief...</p>
                <div className={styles.innerContent}>
                    <h2 className={styles.h3}>Favorite Meditation Videos</h2>
                    <iframe 
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/W19PdslW7iw?si=Q7YMXo-XGkDUaapx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div>
                    <h2>Blog Posts</h2>
                    <ul>
                        {posts?.map((post: Post) => (
                            <li key={post._id}>
                                <h2>{post.title}</h2>
                                <h3>{post.description}</h3>
                                <p>{post.src}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;