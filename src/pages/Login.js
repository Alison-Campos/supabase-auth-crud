import { useState } from "react";
import { client } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await client.auth.signInWithOtp({
      email: email,
    });

    console.log(error);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@gamil.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
