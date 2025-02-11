export const Login = async (name, email) => {
  const url = 'https://frontend-take-home-service.fetch.com/auth/login';
  const options = {
    method: 'POST',
    credentials: 'include', // ✅ Ensures cookies/auth headers are included
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name, // ✅ Double-check if this should be "username"
      email: email,
    }),
  };
  try {
    const resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const contentType = resp.headers.get('content-type');
    console.log('response status >>>:', resp.status);
    return resp.status;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getDogs = async () => {
  const url2 = 'https://frontend-take-home-service.fetch.com/dogs/breeds';
  const options = {
    method: 'GET',
    credentials: 'include', // ✅ Ensures cookies/auth headers are included
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(url2, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
