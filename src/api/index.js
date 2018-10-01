export async function getTodos() {
  return sendRequest('https://todo-backend-golang-stdlib.herokuapp.com/todos');
}

export async function addTodo(title) {
  return sendRequest('https://todo-backend-golang-stdlib.herokuapp.com/todos', 'POST', { title });
}

export async function removeTodo(url) {
  return sendRequest(url, 'DELETE');
}

export async function patchTodo(todo) {
  return sendRequest(todo.url, 'PATCH', todo);
}

export async function sendRequest(url, method = 'GET', body) {
  try {
    const response = await fetch(
      url,
      {
        method,
        credentials: 'same-origin',
        headers: new Headers({
          Accept: 'application/json',
        }),
        body: body ? JSON.stringify(body) : undefined,
      },
    );

    if (response.status.toString().startsWith('2')) {
      if (response.status === 204) {
        return response;
      }
      return response.json();
    } else {
      throw response;
    }
  } catch (error) {
    console.error('Something went wrong', error);
    throw error;
  }
}
