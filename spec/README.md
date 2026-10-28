# Feature specs

Prioritised backlog of additional website requirements. Each file is one feature.
Items already on the site (sticky click-to-call header, Google reviews/rating,
location map and directions, brand logos) are intentionally excluded.

| Prio | Spec | Why this order |
|------|------|----------------|
| P0 | [01-online-booking.md](01-online-booking.md) | Direct conversion driver; no owner data needed |
| P1 | [02-symptom-based-services.md](02-symptom-based-services.md) | Helps non-technical visitors and local SEO; content only |
| P1 | [03-warranty-and-certifications.md](03-warranty-and-certifications.md) | Removes risk; blocked on owner confirming facts |
| P2 | [04-process-and-digital-inspection.md](04-process-and-digital-inspection.md) | Builds trust; low effort, but must match real practice |
| P2 | [05-upfront-pricing.md](05-upfront-pricing.md) | High value but needs owner price data |
| P3 | [06-convenience-amenities.md](06-convenience-amenities.md) | Nice-to-have; needs owner confirmation |

General rules for all specs: copy goes in `src/content.js` in both English and
Marathi; never claim anything (warranty, certification, amenities, prices) the
owner has not confirmed; mark unconfirmed items `[CONFIRM WITH OWNER]`.
