import {Link} from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <form action="">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
      <Link to="/signup">Register</Link>
    </>
  );
}
