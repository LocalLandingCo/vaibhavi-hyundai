import { useState } from 'react'
import Section from './Section'
import { WhatsAppIcon } from './Icons'
import { waLink } from '../lib/helpers'

// No backend: on submit we build a wa.me link with a prefilled message and open it.
export default function EnquiryForm({ t }) {
  const e = t.enquiry
  const [form, setForm] = useState({ name: '', car: '', service: '', note: '' })
  const [error, setError] = useState('')

  const set = (key) => (ev) => setForm((f) => ({ ...f, [key]: ev.target.value }))

  function onSubmit(ev) {
    ev.preventDefault()
    if (!form.name.trim() || !form.car.trim()) {
      setError(e.required)
      return
    }
    setError('')
    const lines = [
      e.msg.hello,
      `${e.msg.name}: ${form.name.trim()}`,
      `${e.msg.car}: ${form.car.trim()}`,
      form.service ? `${e.msg.service}: ${form.service}` : '',
      form.note.trim() ? `${e.msg.note}: ${form.note.trim()}` : '',
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const field =
    'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-ink placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30'

  return (
    <Section id="enquiry" title={e.title} subtitle={e.subtitle}>
      <form onSubmit={onSubmit} noValidate className="max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-700">
            {e.name}
            <input type="text" value={form.name} onChange={set('name')} autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {e.carModel}
            <input
              type="text"
              value={form.car}
              onChange={set('car')}
              placeholder={e.carModelPh}
              className={field}
            />
          </label>
        </div>

        <label className="block text-sm font-semibold text-slate-700">
          {e.service}
          <select value={form.service} onChange={set('service')} className={field}>
            <option value="">{e.servicePick}</option>
            {t.services.items.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value={e.serviceOther}>{e.serviceOther}</option>
          </select>
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          {e.message}
          <textarea
            rows={4}
            value={form.note}
            onChange={set('note')}
            placeholder={e.messagePh}
            className={field}
          />
        </label>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-base font-bold text-white hover:bg-wa-dark sm:w-auto"
        >
          <WhatsAppIcon /> {e.submit}
        </button>
        <p className="text-xs text-slate-500">{e.hint}</p>
      </form>
    </Section>
  )
}
