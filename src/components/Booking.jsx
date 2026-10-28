import { useState } from 'react'
import Section from './Section'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import { business } from '../content'
import { telLink, waLink } from '../lib/helpers'

// Local YYYY-MM-DD (toISOString would shift the date in IST).
function toYmd(d) {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

// No backend: build a wa.me link with the booking request prefilled.
export default function Booking({ t }) {
  const b = t.booking
  const today = toYmd(new Date())
  const [form, setForm] = useState({ service: '', date: '', window: '', name: '', phone: '', car: '' })
  const [error, setError] = useState('')

  const set = (key) => (ev) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }))
    setError('')
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (Object.values(form).some((v) => !v.trim())) return setError(b.errors.required)
    const phone = form.phone.replace(/[\s+-]/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
    if (!/^[6-9]\d{9}$/.test(phone)) return setError(b.errors.phone)
    if (form.date < today) return setError(b.errors.past)
    const [y, m, d] = form.date.split('-').map(Number)
    if (new Date(y, m - 1, d).getDay() === business.closedDay) return setError(b.errors.closed)

    const win = b.windows.find((w) => w.id === form.window)?.label ?? form.window
    const lines = [
      b.msg.hello,
      `${b.msg.service}: ${form.service}`,
      `${b.msg.date}: ${d}/${m}/${y}`,
      `${b.msg.window}: ${win}`,
      `${b.msg.name}: ${form.name.trim()}`,
      `${b.msg.phone}: ${phone}`,
      `${b.msg.car}: ${form.car.trim()}`,
    ]
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const field =
    'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-ink placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30'
  const label = 'block text-sm font-semibold text-slate-700'

  return (
    <Section id="book" title={b.title} subtitle={b.subtitle}>
      <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <div className="grid gap-4 md:grid-cols-3">
          <label className={label}>
            {b.service}
            <select value={form.service} onChange={set('service')} className={field}>
              <option value="">{b.servicePick}</option>
              {t.services.items.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label className={label}>
            {b.date}
            <input type="date" min={today} value={form.date} onChange={set('date')} className={field} />
          </label>
          <label className={label}>
            {b.window}
            <select value={form.window} onChange={set('window')} className={field}>
              <option value="">—</option>
              {b.windows.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className={label}>
            {b.name}
            <input type="text" value={form.name} onChange={set('name')} autoComplete="name" className={field} />
          </label>
          <label className={label}>
            {b.phone}
            <input
              type="tel"
              inputMode="numeric"
              value={form.phone}
              onChange={set('phone')}
              placeholder={b.phonePh}
              autoComplete="tel"
              className={field}
            />
          </label>
          <label className={label}>
            {b.car}
            <input type="text" value={form.car} onChange={set('car')} placeholder={b.carPh} className={field} />
          </label>
        </div>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-base font-bold text-white hover:bg-wa-dark"
          >
            <WhatsAppIcon /> {b.submit}
          </button>
          <a href={telLink} className="inline-flex items-center justify-center gap-2 font-semibold text-brand-800 hover:underline">
            <PhoneIcon width={18} height={18} /> {b.callInstead}
          </a>
        </div>
        <p className="text-xs text-slate-500">{b.hint}</p>
      </form>
    </Section>
  )
}
