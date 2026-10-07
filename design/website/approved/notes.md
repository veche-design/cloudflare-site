# veche.design website: approved design (V2)

Exported from Claude Design on 2026-10-05. Reference material only; production UI lives in `/src`.

Open `index.html` in a browser. Pages link to each other via the top nav. `support.js` is the prototype runtime; it is not meant to be ported.

## Pages → routes

| File | Route | Notes |
|---|---|---|
| index.html | `/` | Hero (2 buttons), Why validate (placeholder, to be reworked), We help build (6 tiles), How we work, Partners, Contact |
| scout.html | `/scout` (new) | Narrow hero; tag-based search (6 oval category fields, colored tag panels, Compare to Rhine Main toggle, SCOUT button); results: 5 benchmark cards, gap banner, Google Maps embed (Rhine Main), comparison dot matrix (full / ½ / ¼ / empty) |
| database.html | `/database` (replaces Finance) | Narrow hero; filter tags (multi-select, cards animate); 11 project cards; click opens side panel with full detail (Herbal Pharmacy only) |
| test.html | `/test` | Narrow hero; 4 USPs; Herbal Pharmacy programme with modules 00–06 (collapsible, coach avatar per module, investor logo placeholders in 06); CTA "Apply for the validation programme" |

Nav order: Home · SCOUT · DATABASE · TEST.

## Open items / placeholders

- Forms and buttons without destination: Apply now (test), document downloads (database), Explore funding removed.
- Coach photos (test, 7 grey circles) and investor logos (test module 06) to be supplied.
- Herbal Pharmacy figures (revenue, jobs, investment) and descriptions are drafts.
- Why validate section on home: only the 80% stat and one failure reason are real; reasons 2–3 to follow.
- Scout search returns the Herbal Pharmacy demo for any query.
- Image credit: assets/stadtteilkueche-diana-djeddi.jpg © Diana Djeddi (shown on Neighbourhood Kitchens and Gastro Social Projects).
