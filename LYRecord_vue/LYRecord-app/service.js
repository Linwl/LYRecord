// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function() {
	let ret = '';
	ret = uni.getStorageSync(USERS_KEY);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);
}

const addUser = function(userInfo) {
	let users = getUsers();
	users.push({
		account: userInfo.account,
		password: userInfo.password
	});
	uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const httpRequest = function(url, params, callback, failfunc,reqmethod='GET') {
	uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: params,
		method: reqmethod,
		header: {
			'content-type': 'application/json ' //自定义请求头信息
		},
		success: (res) => {
			console.log(res.data);
			callback(res.data)
		},
		fail: (res) => {
			console.log(res.data);
			failfunc()
		}
	});
}

export default {
	getUsers,
	addUser,
	http_get
}
