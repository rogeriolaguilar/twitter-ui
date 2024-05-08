
export default function Login() {
  return (
      <form action="/login" method="post">
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
  )
}