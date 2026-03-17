import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Simple mock login page — NOT secure, for demo only */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "student@gmail.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div
        className="w-full max-w-sm rounded-xl bg-card p-8 flex flex-col gap-5"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <h1 className="text-2xl font-bold text-foreground text-center">Login Page</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-border bg-muted px-3.5 py-2.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground transition-all duration-150 focus:border-primary focus:bg-background focus:outline-none focus:ring-[3px] focus:ring-primary/10"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-border bg-muted px-3.5 py-2.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground transition-all duration-150 focus:border-primary focus:bg-background focus:outline-none focus:ring-[3px] focus:ring-primary/10"
        />

        <button
          onClick={handleLogin}
          className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-100 hover:opacity-90 active:scale-[0.98]"
        >
          Login
        </button>
      </div>
    </main>
  );
}
