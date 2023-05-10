import Reflux  from 'reflux';
import Actions from 'actions';

export default class SearchStore extends Reflux.Store {
    constructor() {
        super();
        this.listenToMany(Actions);
        this.state = {
            query: '',
        }
    }
	onSearch(search) {
		this.setState({query: search});
	}
}
