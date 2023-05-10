import React       from 'react';
import ReactDOM    from 'react-dom';
import Reflux       from 'reflux';
import Config      from 'appConfig';
import PostStore   from 'stores/posts';
import SearchStore from 'stores/search';
import PostView    from 'views/posts/view';
import Loader      from 'components/loader';
import Actions      from 'actions';

export default class List extends Reflux.Component {
    constructor(props) {
        super(props);

        this.stores = [PostStore, SearchStore];
        this.state = {
			page: 1,
		};
    }

	componentWillMount() {
        console.log(this.state);
		// this.searchUnsubscribe = SearchStore.listen(this.onSearch);
		// this.getNextPage();
	}
	componentDidMount() {
        console.log(this.state);
		var ele = ReactDOM.findDOMNode(this).parentNode
		,   style
		;
		while (ele) {
			style = window.getComputedStyle(ele);

			if (style.overflow.length ||
				style.overflowY.length || 
				/body/i.test(ele.nodeName)
			) {
				this.scrollParent = ele;
				break;
			} else {
				ele = ele.parentNode;
            }
		}
		this.scrollParent.addEventListener('scroll', this.onScroll);
	}
	componentWillUnmount() {
		// this.searchUnsubscribe();
		this.scrollParent.removeEventListener('scroll', this.onScroll);
	}
	onSearch(search) {
		this.setState({
			page: 1,
			search: search
		});
		this.getNextPage();
	}
	onScroll(e) {
		var scrollEle  = this.scrollParent
		,   scrollDiff = Math.abs(scrollEle.scrollHeight - (scrollEle.scrollTop + scrollEle.clientHeight))
		;

		if (!this.state.loading && !this.state.hitmax && scrollDiff < 100) {
			this.getNextPage();
		}
	}
	getNextPage() {
		this.setState({
			loading: true
		});
		Actions.getPostsByPage(
			this.state.page,
			Object.assign({}, this.state.search ? {q: this.state.search} : {}, this.props)
        )
		// ).then(function (results) {
		// 	var data = results.results;

		// 	// make sure we put the data in the correct location in the array
		// 	// if many results resolved at once trust the request data for start and end
		// 	// instead of some internal state
		// 	Array.prototype.splice.apply(this.state.posts, [results.start, results.end].concat(data));

		// 	// user may navigate away - changing state would cause a warning
		// 	// so, check if we're mounted when this promise resolves
		// 	data && this.setState({
		// 		loading: false,
		// 		hitmax: data.length === 0 || data.length < Config.pageSize,
		// 		page: this.state.page+1
		// 	});
		// }.bind(this), function (err) {});
	}
	render() {
		var postsUI = this.state.posts.map(function (post) {
			return <PostView key={post.id} post={post} mode="summary"/>;
		});

		return (
			<div className="post-list">
				<ul>
					{postsUI}
				</ul>
				{this.state.hitmax && !this.state.loading ? 
					(
						<div className="total-posts-msg">
							showing { this.state.posts.length } posts
						</div>
					) : ''
				}
				{this.state.loading ? <Loader inline={true} /> : ''}
			</div>
		);
	}
  }
