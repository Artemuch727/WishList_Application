import axios from 'axios';

const api = {
	// get all user lists from DB
	getAllListsFromDB: () => {
    return axios.get('/api/lists');
	},

	addNewListToDB: (list) => {
		return axios.post('/api/lists', {
				      list: list
				    });
	},

	deleteListFromDB: (list) => {
		return	axios({
			  method: 'delete',
			  url: `/api/lists`,
			  params: {
			    list: list
			  }
			})
	},

	// get items from selected list from DB
	getListItemsFromDB: (listId) => {
		return axios.get('/api/items',{
	    params: {
	      list: listId
	    }
  	});
	},

	searchItemsByTitle: (searchQuery) => {
		return axios.get('/api/items',{
			params: {
				searchQuery: searchQuery
			}
		});
	},

	deleteListItemFromDB: (itemId) => {
		return axios({
			  method: 'delete',
			  url: `/api/items`,
			  params: {
			    item: itemId
			  }
			})
	},

	moveListItemFromDB: (itemId, listId) => {
		return axios({
				method: 'put',
				url: `/api/items`,
				params: {
					item: itemId,
					list: listId
				}
			})
	},

	changeListIteminDB: (itemId, newInfo) => {
		return axios({
				method: 'put',
				url: `/api/items`,
				params: {
					item: itemId,
					newInfo: newInfo
				}
			})
	},
};

export default api;
