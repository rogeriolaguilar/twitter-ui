
export default function Signin() {
  return (
      <form action="/users" method="post">
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
  )
}