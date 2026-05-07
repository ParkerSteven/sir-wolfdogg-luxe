import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle } from "@/components/Section";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign Up — Sir Wolfdogg" }] }),
  component: Signup,
});

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Section>
      <SectionTitle eyebrow="New Member" title="Create Your Account" sub="Join Sir Wolfdogg and get instant access to content, book updates, and member-only offers." />
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-gold/20 bg-background/80 p-10 shadow-elegant">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-[0.2em] text-muted-foreground block">Full Name</label>
            <div className="flex items-center gap-3 rounded-2xl border border-gold/15 bg-card px-4 py-3">
              <User className="h-4 w-4 text-gold" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

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
                placeholder="Create a password"
                className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <button type="submit" className="btn-gold w-full justify-center">
            Create Account <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already registered? <Link to="/login" className="text-gold hover:underline">Sign in here</Link>.
        </p>
      </div>
    </Section>
  );
}
