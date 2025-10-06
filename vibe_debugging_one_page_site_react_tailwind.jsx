import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Zap,
  Shield,
  Gauge,
  Calendar,
  Mail,
  ArrowRight,
  ExternalLink,
  Hammer,
  Wrench,
  Cpu,
  Database,
  Cloud,
  Lock,
  LineChart,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ---------- Helper data ----------
const doraData = [
  { metric: "Deploys/wk", Baseline: 2, Target: 8 },
  { metric: "Lead time (hrs)", Baseline: 36, Target: 6 },
  { metric: "MTTR (hrs)", Baseline: 12, Target: 2 },
  { metric: "Change fail %", Baseline: 35, Target: 10 },
];

const checklistItems = [
  "Flaky or slow CI—reruns fix it sometimes",
  "No tracing across services or jobs",
  "We don’t track SLOs or error budgets",
  "Rollbacks are manual / risky",
  "Secrets once leaked (or might be)",
  "Schema changes occasionally cause outages",
  "Alarming is noisy or missing golden signals",
  "Auth/session code is fragile or copy‑pasted",
  "High cloud bill surprises w/ no owner",
  "Test suite is slow or red most days",
  "Deploys bunch features w/ big blast radius",
  "No clear ADRs; decisions live in Slack",
];

const resources = [
  { name: "OpenTelemetry", href: "https://opentelemetry.io/" },
  { name: "DORA & DevOps Research", href: "https://cloud.google.com/devops" },
  { name: "AWS Well‑Architected", href: "https://aws.amazon.com/architecture/well-architected/" },
  { name: "OWASP ASVS", href: "https://owasp.org/www-project-application-security-verification-standard/" },
  { name: "Spectral (OpenAPI linter)", href: "https://github.com/stoplightio/spectral" },
  { name: "TruffleHog (secret scanning)", href: "https://github.com/trufflesecurity/trufflehog" },
  { name: "Node Best Practices", href: "https://github.com/goldbergyoni/nodebestpractices" },
  { name: "typescript‑eslint", href: "https://typescript-eslint.io/" },
  { name: "PostgreSQL docs (TLS)", href: "https://www.postgresql.org/docs/current/ssl-tcp.html" },
  { name: "oneNDA (mutual NDA)", href: "https://onenda.org/" },
];

// ---------- UI atoms ----------
const Section = ({ id, title, kicker, children }: any) => (
  <section id={id} className="py-20">
    <div className="mx-auto max-w-7xl px-6">
      {kicker && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-sky-600">
          {kicker}
        </p>
      )}
      {title && (
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur ${className}`}>
    {children}
  </div>
);

// ---------- Main component ----------
export default function VibeDebuggingSite() {
  const [checked, setChecked] = useState<boolean[]>(
    Array(checklistItems.length).fill(false)
  );

  const issues = checked.filter(Boolean).length;
  const total = checklistItems.length;
  const riskPct = Math.round((issues / total) * 100);

  const riskLabel = useMemo(() => {
    if (riskPct >= 66) return "High";
    if (riskPct >= 33) return "Medium";
    return "Low";
  }, [riskPct]);

  const mail = "hello@vibedebugging.ai"; // ← change me
  const booking = "https://cal.com/your-handle/vibe-debugging"; // ← change me

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white">
              VB
            </span>
            <span className="text-slate-900">Vibe Debugging</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#offers" className="text-sm text-slate-600 hover:text-slate-900">Offers</a>
            <a href="#process" className="text-sm text-slate-600 hover:text-slate-900">Process</a>
            <a href="#score" className="text-sm text-slate-600 hover:text-slate-900">Vibe Score</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={booking}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <Calendar className="h-4 w-4" /> Book a 20‑min call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-700">Senior/Staff Full‑stack Consulting</div>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Ship fast <span className="text-sky-700">without the weird vibes</span>.
            </h1>
            <p className="mb-6 text-lg text-slate-600">
              I stabilize and accelerate codebases built too quickly with AI scaffolding. Outcome‑focused audits, targeted refactors, and guardrails so your team moves confidently.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={booking} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                <Zap className="h-4 w-4" /> Get a fit call
              </a>
              <a href="#offers" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                See offers <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold">Common vibes I fix</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 md:grid-cols-2">
                {[
                  "Flaky tests & mystery alerts",
                  "Deploy fear & manual rollbacks",
                  "Slow requests / p95 regressions",
                  "Copy‑pasted auth / fragile sessions",
                  "Cloud cost surprises",
                  "Schema drift & risky migrations",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-2xl font-bold text-slate-900">→ 2x</div>
                  <div className="text-xs text-slate-500">Deploy frequency</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <div className="text-2xl font-bold text-slate-900">↓ 50%</div>
                  <div className="text-xs text-slate-500">MTTR within 30 days</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Offers */}
      <Section id="offers" kicker="Productized services" title="Pick your path to calmer delivery">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              <Hammer className="h-4 w-4" /> Firebreak Triage
            </div>
            <p className="mb-3 text-sm text-slate-600">1 week · $10–15k</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-sky-600"/>Stabilize P0s, establish SLOs & alarms</li>
              <li className="flex gap-2"><Wrench className="mt-0.5 h-4 w-4 text-sky-600"/>Rollback plan, on‑call runbook, pager policy</li>
              <li className="flex gap-2"><LineChart className="mt-0.5 h-4 w-4 text-sky-600"/>Day‑5 report: top risks, 30‑day plan</li>
            </ul>
            <a href={booking} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline">Start Firebreak <ArrowRight className="h-4 w-4"/></a>
          </Card>

          <Card>
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              <Gauge className="h-4 w-4" /> Codebase Audit & Roadmap
            </div>
            <p className="mb-3 text-sm text-slate-600">2 weeks · $18–25k</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><Cpu className="mt-0.5 h-4 w-4 text-sky-600"/>OTel tracing & dashboards across Node/Python</li>
              <li className="flex gap-2"><Lock className="mt-0.5 h-4 w-4 text-sky-600"/>ASVS spot‑check, AWS Well‑Architected, PG hardening</li>
              <li className="flex gap-2"><Wrench className="mt-0.5 h-4 w-4 text-sky-600"/>ESLint/TS, Pytest/Ruff, Spectral, TruffleHog in CI</li>
              <li className="flex gap-2"><LineChart className="mt-0.5 h-4 w-4 text-sky-600"/>30/60/90 plan with costed backlog</li>
            </ul>
            <a href={booking} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline">Book audit <ArrowRight className="h-4 w-4"/></a>
          </Card>

          <Card>
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              <Cloud className="h-4 w-4" /> Modernization Sprint
            </div>
            <p className="mb-3 text-sm text-slate-600">4–6 weeks · $40–75k</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><Database className="mt-0.5 h-4 w-4 text-sky-600"/>Perf/auth/data model refactors</li>
              <li className="flex gap-2"><Cloud className="mt-0.5 h-4 w-4 text-sky-600"/>AWS infra fixes, CI/CD hardening, blue/green/canary</li>
              <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-sky-600"/>Rollback strategy, seed test suite, runbooks</li>
            </ul>
            <a href={booking} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline">Discuss sprint <ArrowRight className="h-4 w-4"/></a>
          </Card>

          <Card>
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              <Calendar className="h-4 w-4" /> Advisory Retainer
            </div>
            <p className="mb-3 text-sm text-slate-600">$6–12k/mo · 2–4 hrs/wk</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><LineChart className="mt-0.5 h-4 w-4 text-sky-600"/>Architecture reviews & roadmap sanity checks</li>
              <li className="flex gap-2"><Shield className="mt-0.5 h-4 w-4 text-sky-600"/>Incident postmortems & risk burn‑down</li>
              <li className="flex gap-2"><Wrench className="mt-0.5 h-4 w-4 text-sky-600"/>Hiring help for senior/Staff ICs</li>
            </ul>
            <a href={booking} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline">Hold a slot <ArrowRight className="h-4 w-4"/></a>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" kicker="How we work" title="Diagnose → Stabilize → Guardrail">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-slate-900">
              <Gauge className="h-5 w-5 text-sky-700"/> <strong>1) Diagnose</strong>
            </div>
            <p className="text-sm text-slate-600">Rapid baselining: OTel traces, DORA Four Keys, SLOs. Security pass (ASVS), AWS Well‑Architected, PG checks.</p>
          </Card>
          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-slate-900">
              <Shield className="h-5 w-5 text-sky-700"/> <strong>2) Stabilize</strong>
            </div>
            <p className="text-sm text-slate-600">Fix top risks, harden CI/CD, rollback/canary, establish clean on‑call, reduce MTTR, speed up deploys.</p>
          </Card>
          <Card>
            <div className="mb-2 inline-flex items-center gap-2 text-slate-900">
              <Wrench className="h-5 w-5 text-sky-700"/> <strong>3) Guardrail</strong>
            </div>
            <p className="text-sm text-slate-600">ADRs, templates, ownership, and minimal rules in code/infra so the team moves fast without regressions.</p>
          </Card>
        </div>
      </Section>

      {/* DORA snapshot chart */}
      <Section kicker="Outcomes" title="Typical 30‑day snapshot">
        <Card>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={doraData}>
                <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Baseline" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Target" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Section>

      {/* Vibe Score */}
      <Section id="score" kicker="Self‑assessment" title="Check your Vibe Score in 60 seconds">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="mb-4 text-sm text-slate-600">
              Tick anything that sounds familiar. Your score updates live.
            </div>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {checklistItems.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <input
                    id={`c-${i}`}
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                    checked={checked[i]}
                    onChange={(e) => {
                      const next = [...checked];
                      next[i] = e.target.checked;
                      setChecked(next);
                    }}
                  />
                  <label htmlFor={`c-${i}`} className="cursor-pointer text-sm text-slate-700">
                    {text}
                  </label>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Your score</div>
            <div className="mb-2 text-4xl font-extrabold text-slate-900">{riskPct}%</div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold">
              <AlertTriangle className={`h-4 w-4 ${riskLabel === "High" ? "text-rose-600" : riskLabel === "Medium" ? "text-amber-600" : "text-emerald-600"}`} />
              <span>{riskLabel} risk</span>
            </div>
            <p className="mb-4 text-sm text-slate-600">
              {riskLabel === "Low"
                ? "Nice! Let’s add a few guardrails and raise deploy frequency."
                : riskLabel === "Medium"
                ? "You’ll benefit from a 1‑week Firebreak to stabilize and a 30‑day plan."
                : "We should start with Firebreak immediately—then a 2‑week Audit & Roadmap."}
            </p>
            <a href={booking} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              <Calendar className="h-4 w-4"/> Book a 20‑min fit call
            </a>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section id="about" kicker="About" title="Senior/Staff full‑stack. Node · TypeScript · Python · Postgres · AWS">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm text-slate-700">
              I help teams that moved fast with AI scaffolding stabilize, speed up, and regain confidence. I combine pragmatic refactoring with strong platform and reliability practices so you can ship features without firefighting.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-sky-600"/> Node.js / TypeScript</li>
              <li className="flex items-center gap-2"><Cpu className="h-4 w-4 text-sky-600"/> Python</li>
              <li className="flex items-center gap-2"><Database className="h-4 w-4 text-sky-600"/> PostgreSQL</li>
              <li className="flex items-center gap-2"><Cloud className="h-4 w-4 text-sky-600"/> AWS</li>
              <li className="flex items-center gap-2"><LineChart className="h-4 w-4 text-sky-600"/> OpenTelemetry</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-sky-600"/> SRE & DORA practices</li>
            </ul>
          </Card>
          <Card>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Implementation playbook includes</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> OTel tracing + dashboards across hot paths</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> SLOs + golden signals + clean paging policy</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> CI hardening, test parallelism, secrets scanning</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> DB migration safety & rollback strategy</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> ADRs & PR templates with acceptance criteria</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Resources */}
      <Section kicker="For engineering leaders" title="Resources I rely on">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 hover:border-sky-200 hover:bg-sky-50"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 group-hover:text-sky-700">{r.name}</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-sky-700"/>
              </div>
              <div className="mt-1 text-xs text-slate-500">Opens in new tab</div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" kicker="Get started" title="Let’s fix the vibes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <p className="mb-4 text-sm text-slate-700">
              Send over a sentence on your stack and which outcomes matter most (deploy frequency, MTTR, performance, cost). I’ll confirm fit and propose the right time‑boxed option.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={booking} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                <Calendar className="h-4 w-4"/> Book a 20‑min fit call
              </a>
              <a href={`mailto:${mail}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                <Mail className="h-4 w-4"/> {mail}
              </a>
            </div>
          </Card>
          <Card>
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Paperwork</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> Mutual NDA available (oneNDA)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> Standard MSA/SOW with outcome‑based pricing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-600"/> Remote‑first across US time zones</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white">VB</span>
              Vibe Debugging
            </div>
            <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Vibe Debugging. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#offers">Offers</a>
            <a className="text-slate-600 hover:text-slate-900" href="#process">Process</a>
            <a className="text-slate-600 hover:text-slate-900" href="#score">Vibe Score</a>
            <a className="text-slate-600 hover:text-slate-900" href="#about">About</a>
            <a className="text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
            <a className="text-slate-600 hover:text-slate-900" href="https://onenda.org/" target="_blank" rel="noreferrer">oneNDA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
