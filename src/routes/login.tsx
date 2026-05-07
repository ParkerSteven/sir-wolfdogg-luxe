import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/Section";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Sir Wolfdogg" }] }),
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Section>
      <SectionTitle eyebrow="Member Access" title="Login" sub="Access your Sir Wolfdogg account to manage orders, downloads, and exclusive content." />
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-gold/20 bg-background/80 p-10 shadow-elegant">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.2em] text-muted-foreground block">Email</label>
            <div className="flex items-center gap-3 rounded-2xl border border-gold/15 bg-card px-4 py-3">
              <Mail className="h-4 w-4 text-gold" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.2em] text-muted-foreground block">Password</label>
            <div className="flex items-center gap-3 rounded-2xl border border-gold/15 bg-card px-4 py-3">
              <Lock className="h-4 w-4 text-gold" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <button type="submit" className="btn-gold w-full justify-center">
            Sign In <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          New here? <Link to="/signup" className="text-gold hover:underline">Create an account</Link> and unlock exclusive updates.
        </p>
      </div>
    </Section>
  );
}
