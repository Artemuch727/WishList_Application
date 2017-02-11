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

	// deleteSelectedItemFromDB: (itemId) => {
	// 	return axios.post('/api/items/' + itemId);
	// },

	// moveSelectedItemFromDB: (itemId, listId) => {
	// 	axios.put(`/api/items/${  itemId}`)
	// },
	//
	// addUserIntoDB: (user) => {
	// 		return axios.get('/api/users/uid').then((response) => {
	// 			let newId = 1, maxId = 0;
	// 			console.log('get last uid');
	// 			console.log(response);
	// 			if (response.data.length > 0){
	// 				maxId = response.data[0].id;
	// 				newId = ++maxId;
	// 			} else {
	// 				newId = 1;
	// 			}
	// 			return newId;
	// 		}).then((newId)=>{
	// 			axios.post('/api/users', {
	// 	      id: newId,
	// 				fio: user.fio,
	// 				birthDate: user.birthDate,
	// 				address: user.contacts.address,
	// 				city: user.contacts.city,
	// 				phone: user.contacts.phone
	// 	    });
	// 		});
	// 	},
	//
	// editSelectedUserFromDB: (id, user) => {
	//  return axios.put('/api/users', {
	// 		params: {
	// 			id: id,
	// 			userData: user
	// 		}
	// 	});
	// },
	//
	// deleteUserFromDB: (uid) => {
	// 	return axios.post('/api/users/'+uid);
	// 	}
};

export default api;
