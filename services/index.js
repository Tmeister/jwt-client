const baseUrl = 'https://incandescent-regret.flywheelsites.com/';
const apiUrl = `${baseUrl}wp-json/jwt-auth/v1/`;

const authenticate = async (username, password) => {
  const body = JSON.stringify({ username, password });
  const response = await fetch(`${apiUrl}token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  });

  const data = await response.json();

  if (response.status !== 200) {
    console.error(`Error: ${data.message}`);
    return false;
  }

  if (data.token) {
    return data.token;
  }

  return false;
};

const whoami = async (token) => {
  const response = await fetch(`${baseUrl}wp-json/wp/v2/users/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (response.status !== 200) {
    console.error(`Error: ${data.message}`);
    return false;
  }

  return data;
};

const verifyToken = async (token) => {
  const response = await fetch(`${apiUrl}token/validate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  if (response.status !== 200) {
    console.error(`Error: ${data.message}`);
    return false;
  }

  return data;
};

export { authenticate, whoami, verifyToken, baseUrl, apiUrl };
