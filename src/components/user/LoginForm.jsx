import {Link} from "react-router-dom";
// import useForm from "../../hooks/useForm";

export default function LoginForm() {
  return (
    <>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
      <Link to="/signup">Register</Link>
    </>
  );
}
