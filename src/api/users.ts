
const TWITTER_API_DOMAIN = 'http://localhost:4004';

type User = {
    name: string;
    email: string;
    password: string;
    created_at: Date;
}

async function transformUser(response: Response): Promise<User> {
  const body = await response.json();
  const user = {
    ...body,
    created_at: new Date(body.created_at),
  };
  return user;
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  try {
  const response: Response = await fetch(`${TWITTER_API_DOMAIN}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user: { name, email, password }}),
  });
  const user = await transformUser(response);

  return user
  } catch (error) {
    throw new Error('Error creating user');
  }
}
