import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Moment from 'moment';
let dateFormat = 'MM/DD/YYYY HH:mm:ss';

function Post(props) {
    const { post } = props;
    const users = useSelector((state) => state.users.users);
    const user = users.find((user) => user.id === post.user)
    const loggedUser = useSelector((state) => state.users.loggedUser);
    const { id, summary, title } = post;
    return (
        <li className="post-view-summary">
            <aside>
                <img className="profile-img small" src={user.profileImageData} />
                <div className="post-metadata">
                    <strong>{title}</strong>
                    <span className="user-name">{user.name}</span>
                    <em>{Moment(post.date, 'x').format(dateFormat)}</em>
                </div>
            </aside>
            <summary>{summary}</summary>
            &nbsp;
            <Link to={`/posts/${id}`}>read more</Link>
            {
                user?.id === loggedUser?.id ? (
                    <div>
                        <Link to={`/posts/${id}/edit`}>
                            <button>edit post</button>
                        </Link>
                    </div>
                ) : null
            }
        </li>
    )
}

export default Post;