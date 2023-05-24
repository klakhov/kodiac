import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Moment from 'moment';
let dateFormat = 'MM/DD/YYYY HH:mm:ss';

function Post(props) {
    const { post } = props;

    if(!post) {
        return null;
    }
    const { id, summary, title } = post;

    return (
        <div className="post-view-full">
            <div className="post-view-container">
                <h2>
                    <div className="post-metadata">
                        <strong>{post.title}</strong>
                        <em>{Moment(post.date, 'x').format(dateFormat)}</em>
                    </div>
                </h2>
                <section className="post-body" dangerouslySetInnerHTML={{ __html: post.body }}>
                </section>
            </div>
        </div>
    )
}

export default Post;