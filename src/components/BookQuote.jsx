import { useState } from 'react'
import Section from './Section'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import { business } from '../content'
import { quoteConfig, quotePrices } from '../quoteConfig'
import { telLink, waLink, kmTag } from '../lib/helpers'

const OTHER = 'other'
const EMPTY = {
  serviceId: '', typeId: '', make: '', model: '', fuel: '', year: '', km: '', note: '',
  extra: {}, date: '', window: '', name: '', phone: '',
}

// Local YYYY-MM-DD (toISOString would shift the date in IST).
function toYmd(d) {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

// One form for both jobs. No backend: it builds a wa.me message. Mode "quote" asks what
// exactly is needed and the car; mode "book" also needs a date, drop-off window, name and
// phone. Per-service questions live in quoteConfig.js; prices only show once the owner
// fills quotePrices.
export default function BookQuote({ t, lang }) {
  const q = t.quote
  const b = t.booking
  const c = t.bookQuote
  const today = toYmd(new Date())
  const [mode, setMode] = useState('quote')
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')
  const booking = mode === 'book'

  const set = (key) => (ev) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }))
    setError('')
  }
  const setExtra = (id) => (ev) => setForm((f) => ({ ...f, extra: { ...f.extra, [id]: ev.target.value } }))
  const pickService = (ev) => setForm((f) => ({ ...f, serviceId: ev.target.value, typeId: '', extra: {} }))

  const isOther = form.serviceId === OTHER
  const service = t.services.items.find((s) => s.id === form.serviceId)
  const cfg = service ? quoteConfig[lang]?.[service.id] : undefined
  const type = cfg?.types.find((x) => x.id === form.typeId)
  const price = service && type ? quotePrices[`${service.id}.${type.id}`] : undefined

  function onSubmit(ev) {
    ev.preventDefault()
    if ((!service && !isOther) || (cfg && !type) || !form.make.trim() || !form.model.trim() || !form.fuel) {
      return setError(q.required)
    }

    const lines = [booking ? b.msg.hello : q.msg.hello, `${q.msg.service}: ${service ? service.title : b.serviceOther}`]
    if (type) lines.push(`${q.msg.type}: ${type.label}`)
    lines.push(`${q.msg.car}: ${form.make.trim()} ${form.model.trim()}`, `${q.msg.fuel}: ${form.fuel}`)
    if (!booking && form.year.trim()) lines.push(`${q.msg.year}: ${form.year.trim()}`)
    if (form.km.trim()) lines.push(`${q.msg.km}: ${form.km.trim()}`)
    if (cfg && type) {
      cfg.fields.filter((f) => form.extra[f.id]?.trim()).forEach((f) => lines.push(`${f.label}: ${form.extra[f.id].trim()}`))
    }

    if (booking) {
      if (!form.date || !form.window || !form.name.trim() || !form.phone.trim()) return setError(b.errors.required)
      const phone = form.phone.replace(/[\s+-]/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
      if (!/^[6-9]\d{9}$/.test(phone)) return setError(b.errors.phone)
      if (form.date < today) return setError(b.errors.past)
      const [y, m, d] = form.date.split('-').map(Number)
      if (new Date(y, m - 1, d).getDay() === business.closedDay) return setError(b.errors.closed)
      const win = b.windows.find((w) => w.id === form.window)?.label ?? form.window
      lines.push(`${b.msg.date}: ${d}/${m}/${y}`, `${b.msg.window}: ${win}`, `${b.msg.name}: ${form.name.trim()}`, `${b.msg.phone}: ${phone}`)
    } else if (form.name.trim()) {
      lines.push(`${b.msg.name}: ${form.name.trim()}`)
    }

    if (!booking && form.note.trim()) lines.push(`${q.msg.note}: ${form.note.trim()}`)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const field =
    'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-ink placeholder-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30'
  const label = 'block text-sm font-semibold text-slate-700'
  const heading = 'text-sm font-bold uppercase tracking-wide text-brand-700'
  const tab = (active) =>
    `flex-1 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors ${
      active ? 'bg-brand-700 text-white shadow' : 'text-slate-700 hover:bg-slate-100'
    }`

  let step = 0
  const num = () => `${++step}. `

  return (
    <Section id="book" km={kmTag(t, 3)} title={c.title} subtitle={c.subtitle} tone="soft">
      <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div role="tablist" aria-label={c.title} className="flex gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1 sm:max-w-md">
          <button type="button" role="tab" aria-selected={!booking} onClick={() => setMode('quote')} className={tab(!booking)}>
            {c.modeQuote}
          </button>
          <button type="button" role="tab" aria-selected={booking} onClick={() => setMode('book')} className={tab(booking)}>
            {c.modeBook}
          </button>
        </div>

        <div>
          <h3 className={heading}>{num()}{q.service}</h3>
          <div className="mt-2 grid gap-4 md:grid-cols-2">
            <label className={label}>
              {q.service}
              <select value={form.serviceId} onChange={pickService} className={field}>
                <option value="">{q.servicePick}</option>
                {t.services.items.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value={OTHER}>{b.serviceOther}</option>
              </select>
            </label>
            {cfg && (
              <label className={label}>
                {q.type}
                <select value={form.typeId} onChange={set('typeId')} className={field}>
                  <option value="">{q.typePick}</option>
                  {cfg.types.map((x) => (
                    <option key={x.id} value={x.id}>
                      {x.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        </div>

        <div>
          <h3 className={heading}>{num()}{q.yourCar}</h3>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <label className={label}>
              {q.make}
              <input type="text" value={form.make} onChange={set('make')} placeholder={q.makePh} className={field} />
            </label>
            <label className={label}>
              {q.model}
              <input type="text" value={form.model} onChange={set('model')} placeholder={q.modelPh} className={field} />
            </label>
            <label className={label}>
              {q.fuel}
              <select value={form.fuel} onChange={set('fuel')} className={field}>
                <option value="">{q.fuelPick}</option>
                {q.fuels.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>
            {!booking && (
              <label className={label}>
                {q.year}
                <input type="text" inputMode="numeric" value={form.year} onChange={set('year')} placeholder={q.yearPh} className={field} />
              </label>
            )}
            <label className={label}>
              {q.km}
              <input type="text" inputMode="numeric" value={form.km} onChange={set('km')} placeholder={q.kmPh} className={field} />
            </label>
          </div>
        </div>

        {type && cfg.fields.length > 0 && (
          <div>
            <h3 className={heading}>{num()}{q.extra}</h3>
            <div className="mt-2 grid gap-4 md:grid-cols-3">
              {cfg.fields.map((f) => (
                <label key={f.id} className={label}>
                  {f.label}
                  {f.kind === 'select' ? (
                    <select value={form.extra[f.id] ?? ''} onChange={setExtra(f.id)} className={field}>
                      <option value="">{q.select}</option>
                      {f.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input type="text" value={form.extra[f.id] ?? ''} onChange={setExtra(f.id)} placeholder={f.ph} className={field} />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        {booking && (
          <div>
            <h3 className={heading}>{num()}{c.slot}</h3>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
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
              <label className={label}>
                {b.name}
                <input type="text" value={form.name} onChange={set('name')} autoComplete="name" className={field} />
              </label>
              <label className={label}>
                {b.phone}
                <input type="tel" inputMode="numeric" value={form.phone} onChange={set('phone')} placeholder={b.phonePh} autoComplete="tel" className={field} />
              </label>
            </div>
          </div>
        )}

        {!booking && (
          <label className={label}>
            {q.note}
            <textarea rows={2} value={form.note} onChange={set('note')} placeholder={q.notePh} className={field} />
          </label>
        )}

        {(type || isOther) && (
          <p className="rounded-lg bg-brand-50 p-3 text-sm text-brand-900" aria-live="polite">
            {price != null ? (
              <>
                <strong>
                  {q.from} ₹{price.toLocaleString('en-IN')}
                </strong>
                . {q.priceNote}
              </>
            ) : (
              <strong>{q.askQuote}</strong>
            )}
          </p>
        )}

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
            <WhatsAppIcon /> {booking ? b.submit : q.submit}
          </button>
          <a href={telLink} className="inline-flex items-center justify-center gap-2 font-semibold text-brand-800 hover:underline">
            <PhoneIcon width={18} height={18} /> {b.callInstead}
          </a>
        </div>
        <p className="text-xs text-slate-500">{booking ? b.hint : c.quoteHint}</p>
      </form>
    </Section>
  )
}
