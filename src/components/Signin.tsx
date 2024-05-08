import { createUser } from "../api/users";

export default function Signin() {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;


    const user = await createUser(name, email, password);
    console.log(user);
    console.log(user.created_at.toISOString())
  };

  return (
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
  )
}