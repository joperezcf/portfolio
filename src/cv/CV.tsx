import type { ReactNode } from 'react'
import { en } from '../i18n/en'
import { educationData, projects, roles, skillGroups } from '../data/profile'

const contacts = [
  { label: 'emailplus360@gmail.com', href: 'mailto:emailplus360@gmail.com' },
  { label: 'joseorlando.dev', href: 'https://joseorlando.dev' },
  { label: 'linkedin.com/in/joperezcf', href: 'https://www.linkedin.com/in/joperezcf' },
  { label: 'github.com/joperezcf', href: 'https://github.com/joperezcf' },
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section grid gap-x-6 gap-y-2 border-t border-slate-200 pt-3 mt-3 sm:grid-cols-[1.25in_1fr]">
      <h2 className="text-[10.5pt] font-semibold text-cyan-700">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function Entry({ title, org, orgUrl, meta, date, children }: {
  title: string
  org: string
  orgUrl?: string
  meta?: string
  date: string
  children?: ReactNode
}) {
  return (
    <article className="cv-section [&+&]:mt-3.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold text-slate-900">
          {title}, {orgUrl ? <a href={orgUrl} className="text-slate-900">{org}</a> : org}
        </h3>
        <p className="tabular-nums text-slate-500">{date}</p>
      </div>
      {meta && <p className="text-slate-500">{meta}</p>}
      {children}
    </article>
  )
}

export default function CV() {
  return (
    <main className="cv-page mx-auto bg-white shadow-xl sm:my-8 print:my-0">
      <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-l-4 border-cyan-600 pl-4">
        <div>
          <h1 className="text-[26pt] font-bold leading-none tracking-tight text-slate-900">Jose Orlando</h1>
          <p className="mt-1.5 text-[12pt] font-medium text-slate-600">Software Engineer, Miami, FL</p>
        </div>
        <ul className="text-right text-slate-600 max-sm:text-left">
          {contacts.map(c => (
            <li key={c.href}>
              <a href={c.href} className="hover:text-cyan-700">{c.label}</a>
            </li>
          ))}
        </ul>
      </header>

      <Section title="Summary">
        <p>
          Software engineer with 10+ years of experience, focused on frontend development for fintech.
          At Payabli I build embedded payment widgets, merchant dashboards and reporting interfaces,
          working across React and TypeScript on the frontend and .NET with PostgreSQL on the backend.
        </p>
      </Section>

      <Section title={en.experience.title}>
        {roles.map(r => (
          <Entry
            key={r.company}
            title={r.role}
            org={r.company}
            orgUrl={r.url}
            meta={`${r.location}. ${r.description}`}
            date={`${r.startDate} – ${r.endDate ?? en.experience.present}`}
          >
            <ul className="mt-1 list-disc space-y-0.5 pl-4 marker:text-cyan-600">
              {r.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </Entry>
        ))}
      </Section>

      <Section title="Skills">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          {skillGroups.map(g => (
            <div key={g.key} className="contents">
              <dt className="font-medium text-slate-900">
                {en.skills.categories[g.key as keyof typeof en.skills.categories]}
              </dt>
              <dd>{g.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title={en.projects.title}>
        <ul className="space-y-1">
          {projects.map(p => (
            <li key={p.github}>
              <a href={p.live ?? p.github} className="font-semibold text-slate-900">{p.titleEn}</a>
              <span className="text-slate-500"> ({p.stack.join(', ')})</span>
              <span>. {p.cvSummary}.</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={en.education.title}>
        <ul className="space-y-0.5">
          {educationData.map(e => {
            const name = e.degree.replace(/^Bachelor's — /, "Bachelor's in ").replace(/^Certificate — /, '')
            return (
              <li key={e.degree} className="grid grid-cols-[1fr_auto] gap-x-4">
                <span>
                  <span className={e.type === 'degree' ? 'font-semibold text-slate-900' : 'text-slate-900'}>
                    {e.verifyUrl ? <a href={e.verifyUrl}>{name}</a> : name}
                  </span>
                  <span className="text-slate-500">, {e.institution}</span>
                </span>
                <span className="tabular-nums text-slate-500">{e.period}</span>
              </li>
            )
          })}
        </ul>
      </Section>
    </main>
  )
}
