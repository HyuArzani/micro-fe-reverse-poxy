const getUserPage = async (page: string, abortController: any = null) => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
      method: 'get',
      signal: abortController.signal,
    });
    return response.json().then((res) => res);
  } catch (error: any) {
    const err = error.response ? error.response.data : error;
    return Promise.reject(err);
  }
};

const testService = {
  getUserPage,
};

export default testService;
