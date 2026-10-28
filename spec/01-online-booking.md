# 01 Instant online booking and service scheduler (P0)

**Reference:** Meineke. **Status:** not started.

## Goal
Let a visitor pick a service, date and drop-off window in a few taps, near the top of the page.

## Requirements
- Compact booking card in or directly below the hero: service (dropdown from `services.items`), date (today onward, Tuesday disabled as closed day), drop-off window (Morning / Afternoon / Evening / Night, since the shop is open 24 hours), name, phone, car make/model.
- No backend exists: on submit, open a prefilled WhatsApp message (reuse `waLink`) and offer a "Call instead" fallback. Reuse the existing enquiry form validation.
- Add "Book a service" to the nav and a header/hero CTA.
- Fully bilingual; mobile-first; accessible labels and error messages.

## Acceptance
- Booking can be completed in 4 taps or fewer on mobile plus the typed phone/name.
- Selecting Tuesday is blocked with a clear message.
- The WhatsApp message contains service, date, window, car and name.

## Open questions
- Is a real booking backend (calendar, SMS confirmation) wanted later?
- Are drop-off windows acceptable as listed?
