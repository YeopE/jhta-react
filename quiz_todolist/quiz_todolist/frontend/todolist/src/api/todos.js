import axios from 'axios';

const server = 'http://localhost:8080';
export const todosEnrollment = async (todos) => {
	const data = await axios.post(`${server}/todolist`, todos).then((res) => {
		console.log(res);
		return res.data;
	});
	return data;
};

export const todoList = async () => {
	const data = await axios.get(`${server}/todolist`).then((res) => {
		console.log(res);
		return res.data;
	});
	console.log(data);
	return data;
};

export const todoUpdate = async (todo) => {
	const res = await axios.put(`${server}/todolist`, todo);
	return res.data;
};

export const todoDelete = async (id) => {
	const res = await axios.delete(`${server}/todolist/${id}`);
	return res.data;
};

export const memberLogin=async(param)=>{
	const params = new URLSearchParams();
	params.append("userid",param.userid);
	params.append("password",param.password);
	console.log("params",params);
	const resp = await axios.post(`${server}/login`,params);
	return resp.data;
}
