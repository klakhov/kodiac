import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import Moment from 'moment';
import Actions from 'actions';
import PostStore from 'stores/posts';
import UserStore from 'stores/users';
import Session from 'stores/sessionContext';
import Loader from 'components/loader';

let dateFormat = 'MM/DD/YYYY HH:mm:ss';

export default class View extends Reflux.Component {
    constructor(props) {
        super(props);
        this.stores = [UserStore, Session];
    }
    componentWillMount() {
        if (this.state.post) {
        } else {
            // get post from query params
            this.getPost();
        }
    }
    getUserFromPost(post) {
        this.state.users.find((user) => user.id === post.user);
    }
    getPost() {
        // if (this.isMounted()) {
        //     this.setState({ loading: true });
        // } else {
        //     this.state.loading = true;
        // }

        Actions.getPost(this.props.params.postId)
            .then(function (data) {
                //this.state.posts = this.state.posts.concat(data);
                this.setState({
                    loading: false,
                    post: data
                });
            }.bind(this));
    }
    render() {
        if (this.state.loading) { return <Loader />; }
        var post = this.state.post
            , user = this.getUserFromPost(post)
            , name = user.firstName && user.lastName ?
                user.firstName + ' ' + user.lastName :
                user.firstName ?
                    user.firstName :
                    user.username
            ;

        return this.props.mode === 'summary' ? (
            // SUMMARY / LIST VIEW
            <li className="post-view-summary">
                <aside>
                    <img className="profile-img small" src={user.profileImageData} />
                    <div className="post-metadata">
                        <strong>{post.title}</strong>
                        <span className="user-name">{name}</span>
                        <em>{Moment(post.date, 'x').format(dateFormat)}</em>
                    </div>
                </aside>
                <summary>{post.summary}</summary>
                &nbsp;
                <Link to={`/posts/${post.id}`}>read more</Link>
                {
                    user.id === this.state.session.id ? (
                        <div>
                            <Link to={`/posts/${post.id}/edit`}>
                                <button>edit post</button>
                            </Link>
                        </div>
                    ) : ''
                }
            </li>
        ) : (
            // FULL POST VIEW
            <div className="post-view-full">

                <div className="post-view-container">
                    <h2>
                        <img className="profile-img" src={user.profileImageData} />
                        <div className="post-metadata">
                            <strong>{post.title}</strong>
                            <span className="user-name">{name}</span>
                            <em>{Moment(post.date, 'x').format(dateFormat)}</em>
                        </div>
                    </h2>
                    <section className="post-body" dangerouslySetInnerHTML={{ __html: post.body }}>
                    </section>
                </div>
            </div>

        );
    }
}

