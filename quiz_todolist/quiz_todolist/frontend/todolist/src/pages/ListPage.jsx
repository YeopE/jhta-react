import { useEffect, useState } from 'react';
import { todoDelete, todoList, todoUpdate } from '../api/todos';

const ListPage = () => {
	const [todos, setTodos] = useState([]);

	const getTodolist = () => {
		todoList().then((data) => {
			setTodos([...data]);
		});
	};
	useEffect(() => {
		getTodolist();
	}, []);

	const toggleCompleted = async (targetTodo) => {
		const updated = { ...targetTodo, completed: !targetTodo.completed };
		console.log(`완료 상태 변경: ${targetTodo.completed} → ${updated.completed}`);
		const result = await todoUpdate(updated);
		if (result === 'success') {
			const newList = todos.map((t) => (t.id === updated.id ? updated : t));
			setTodos(newList);
		} else {
			alert('서버 저장 실패');
		}
	};

	const deleteTodo = async (id) => {
		const confirmed = window.confirm('정말 삭제하시겠습니까?');
		if (!confirmed) return;

		const result = await todoDelete(id);
		if (result === 'success') {
			setTodos(todos.filter((t) => t.id !== id));
		} else {
			alert('삭제 실패');
		}
	};

	return (
		<div>
			<h1>TodoList</h1>
			<table>
				<thead>
					<tr>
						<th>할일</th>
						<th>날짜</th>
						<th>완료</th>
						<th>삭제</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((t) => {
						return (
							<tr key={t.id}>
								<td>{t.task}</td>
								<td>{t.date}</td>
								<td>
									<input type='checkbox' checked={t.completed} onChange={() => toggleCompleted(t)} />
								</td>
								<td>
									<button onClick={() => deleteTodo(t.id)}>삭제</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default ListPage;
