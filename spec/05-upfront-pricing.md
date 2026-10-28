# 05 Upfront pricing and quote calculator (P2)

**Reference:** YourMechanic. **Status:** built; prices live in `prices` in content.js (empty until the owner supplies them).

## Requirements
- Phase 1: "Starting from" prices on selected service cards (e.g. periodic service by car size, AC gas recharge) with a note that final price depends on the car and parts.
- Phase 2: quote form (make, model, service or symptom) that returns an indicative range from a static price table in `content.js`, plus "Get exact quote on WhatsApp".
- No price shown without owner approval; show "Ask for quote" where none is given.

## Open questions
- Which services have fixed or starting prices, and per car segment?

## Details needed for an approximate quote (implemented in `src/quoteConfig.js`)
- **Always:** service, what exactly (the type), car make, model, fuel type. Optional: year, km driven, note.
- **Per service (optional extras):**
  - Periodic: km since last service, oil preference.
  - AC: symptom.
  - Body: dent / scratch / repaint / full paint / rust, number of panels, insurance claim.
  - Tyres: new / alignment / rotation / puncture, tyre size, count, brand.
  - Battery: replace / check / jump start, current battery Ah.
  - Engine: diagnosis / repair / transmission / exhaust, symptom.
  - Brakes and steering: pads / discs / steering / suspension, front or rear, symptom.
  - Detailing: package, car size.
  - Insurance: renewal / claim / new, expiry, current insurer.
- **Pricing hook:** `quotePrices['<service>.<type>']` in `quoteConfig.js` (empty until the owner supplies prices). Real prices will also vary by car segment (hatchback / sedan / SUV) and fuel; add a segment lookup per model once the owner gives a price list.
