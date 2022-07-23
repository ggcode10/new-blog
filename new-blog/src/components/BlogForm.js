import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const BlogForm = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () => {
        axios.post('http://localhost:3000/posts', {
            title,
            body
        }).then(() => {
            history.push('/blogs')
        })
    }
    return (
        <div>
            <h1>Create a blog post</h1>
            <div className='mb-3'>
                <label className='form-lable'>Title</label>
                <input className='form-control'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-lable'>Body</label>
                <textarea
                    className='form-control'
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                    rows="20"
                />
            </div>
            <button
                onClick={onSubmit}
                className='btn btn-primary'
            >Post</button>
        </div>
    )
};

export default BlogForm;