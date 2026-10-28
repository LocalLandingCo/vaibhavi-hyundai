// What we ask for each service before giving a quote.
//   types : "What exactly do you need?" (required). Each type can get its own price.
//   fields: extra questions that change the price for that service (all optional).
// Field kinds: 'select' (options) or 'text' (ph = placeholder).
// Keep en and mr in the same order; ids are shared and used for prices.

// Starting prices in rupees, keyed "<service id>.<type id>". Leave EMPTY until the
// owner confirms real prices; options without a price show "Ask for quote".
// Example: 'periodic.basic': 1999
export const quotePrices = {}

const o = (id, label) => ({ id, label })

export const quoteConfig = {
  en: {
    periodic: {
      types: [
        o('basic', 'Basic service (oil + filters)'),
        o('full', 'Full service'),
        o('oil', 'Oil change only'),
        o('wash', 'Wash and vacuum'),
      ],
      fields: [
        { id: 'lastKm', label: 'Kilometres since last service', kind: 'text', ph: 'e.g. 10,000' },
        { id: 'oil', label: 'Oil preference', kind: 'select', options: ['Not sure', 'Semi-synthetic', 'Fully synthetic'] },
      ],
    },
    ac: {
      types: [
        o('gas', 'AC gas refill'),
        o('service', 'AC full service'),
        o('cooling', 'Not cooling / repair'),
        o('filter', 'Cabin filter replacement'),
      ],
      fields: [
        { id: 'issue', label: 'What is the AC doing?', kind: 'select', options: ['Not cooling', 'Weak cooling', 'Bad smell', 'Noise', 'Just a service'] },
      ],
    },
    body: {
      types: [
        o('dent', 'Dent repair'),
        o('scratch', 'Scratch / paint touch-up'),
        o('panel', 'Panel repaint'),
        o('full', 'Full body paint'),
        o('rust', 'Rust repair'),
      ],
      fields: [
        { id: 'panels', label: 'How many panels?', kind: 'select', options: ['1', '2', '3 to 4', '5 or more', 'Not sure'] },
        { id: 'claim', label: 'Insurance claim?', kind: 'select', options: ['No', 'Yes', 'Not sure'] },
      ],
    },
    tyres: {
      types: [
        o('new', 'New tyres'),
        o('align', 'Wheel alignment and balancing'),
        o('rotate', 'Tyre rotation'),
        o('puncture', 'Puncture / repair'),
      ],
      fields: [
        { id: 'size', label: 'Tyre size (printed on the tyre side)', kind: 'text', ph: 'e.g. 195/65 R15' },
        { id: 'count', label: 'How many tyres?', kind: 'select', options: ['1', '2', '4', '5 (with spare)'] },
        { id: 'brand', label: 'Preferred brand', kind: 'text', ph: 'Any / MRF / CEAT...' },
      ],
    },
    battery: {
      types: [o('replace', 'New battery'), o('check', 'Battery check / charge'), o('jump', 'Jump start')],
      fields: [
        { id: 'current', label: 'Current battery brand / Ah (if known)', kind: 'text', ph: 'e.g. Exide 45 Ah' },
      ],
    },
    engine: {
      types: [
        o('diag', 'Diagnosis (check-engine light, noise, smoke)'),
        o('repair', 'Engine repair'),
        o('trans', 'Transmission / clutch'),
        o('exhaust', 'Exhaust'),
      ],
      fields: [
        { id: 'symptom', label: 'What are you noticing?', kind: 'text', ph: 'e.g. warning light, jerking, smoke' },
      ],
    },
    brakes: {
      types: [
        o('pads', 'Brake pads'),
        o('discs', 'Brake discs / rotors'),
        o('steering', 'Steering repair'),
        o('suspension', 'Suspension repair'),
      ],
      fields: [
        { id: 'where', label: 'Which side?', kind: 'select', options: ['Front', 'Rear', 'Both', 'Not sure'] },
        { id: 'symptom', label: 'What are you noticing?', kind: 'text', ph: 'e.g. squeaking, vibration' },
      ],
    },
    detailing: {
      types: [
        o('wash', 'Wash and vacuum'),
        o('polish', 'Rubbing and polish'),
        o('interior', 'Interior deep clean'),
        o('full', 'Full detailing package'),
      ],
      fields: [{ id: 'body', label: 'Car size', kind: 'select', options: ['Hatchback', 'Sedan', 'SUV / MUV'] }],
    },
    insurance: {
      types: [o('renewal', 'Policy renewal'), o('claim', 'Claim assistance'), o('new', 'New policy')],
      fields: [
        { id: 'expiry', label: 'Current policy expiry (if any)', kind: 'text', ph: 'e.g. March 2026' },
        { id: 'insurer', label: 'Current insurer', kind: 'text', ph: 'e.g. ICICI Lombard' },
      ],
    },
  },

  mr: {
    periodic: {
      types: [
        o('basic', 'बेसिक सर्विस (ऑइल + फिल्टर)'),
        o('full', 'फुल सर्विस'),
        o('oil', 'फक्त ऑइल चेंज'),
        o('wash', 'वॉश आणि व्हॅक्यूम'),
      ],
      fields: [
        { id: 'lastKm', label: 'मागील सर्विसनंतर किती किमी?', kind: 'text', ph: 'उदा. १०,०००' },
        { id: 'oil', label: 'ऑइलची पसंती', kind: 'select', options: ['माहीत नाही', 'सेमी-सिंथेटिक', 'फुली सिंथेटिक'] },
      ],
    },
    ac: {
      types: [
        o('gas', 'एसी गॅस भरणे'),
        o('service', 'एसी फुल सर्विस'),
        o('cooling', 'थंड होत नाही / दुरुस्ती'),
        o('filter', 'केबिन फिल्टर बदलणे'),
      ],
      fields: [
        { id: 'issue', label: 'एसीमध्ये काय अडचण आहे?', kind: 'select', options: ['थंड होत नाही', 'कमी थंड', 'दुर्गंधी', 'आवाज', 'फक्त सर्विस'] },
      ],
    },
    body: {
      types: [
        o('dent', 'डेंट दुरुस्ती'),
        o('scratch', 'ओरखडे / पेंट टच-अप'),
        o('panel', 'पॅनल रीपेंट'),
        o('full', 'पूर्ण गाडी पेंट'),
        o('rust', 'गंज दुरुस्ती'),
      ],
      fields: [
        { id: 'panels', label: 'किती पॅनल?', kind: 'select', options: ['१', '२', '३ ते ४', '५ किंवा जास्त', 'माहीत नाही'] },
        { id: 'claim', label: 'इन्शुरन्स क्लेम आहे का?', kind: 'select', options: ['नाही', 'हो', 'माहीत नाही'] },
      ],
    },
    tyres: {
      types: [
        o('new', 'नवीन टायर'),
        o('align', 'व्हील अलाइनमेंट आणि बॅलन्सिंग'),
        o('rotate', 'टायर रोटेशन'),
        o('puncture', 'पंक्चर / दुरुस्ती'),
      ],
      fields: [
        { id: 'size', label: 'टायरचा साइज (टायरच्या बाजूला लिहिलेला)', kind: 'text', ph: 'उदा. 195/65 R15' },
        { id: 'count', label: 'किती टायर?', kind: 'select', options: ['१', '२', '४', '५ (स्टेपनीसह)'] },
        { id: 'brand', label: 'आवडता ब्रँड', kind: 'text', ph: 'कोणताही / MRF / CEAT...' },
      ],
    },
    battery: {
      types: [o('replace', 'नवीन बॅटरी'), o('check', 'बॅटरी तपासणी / चार्जिंग'), o('jump', 'जंप स्टार्ट')],
      fields: [
        { id: 'current', label: 'सध्याची बॅटरी ब्रँड / Ah (माहीत असल्यास)', kind: 'text', ph: 'उदा. Exide 45 Ah' },
      ],
    },
    engine: {
      types: [
        o('diag', 'तपासणी (चेक-इंजिन लाईट, आवाज, धूर)'),
        o('repair', 'इंजिन दुरुस्ती'),
        o('trans', 'ट्रान्समिशन / क्लच'),
        o('exhaust', 'एक्झॉस्ट'),
      ],
      fields: [
        { id: 'symptom', label: 'तुम्हाला काय जाणवते?', kind: 'text', ph: 'उदा. वॉर्निंग लाईट, झटके, धूर' },
      ],
    },
    brakes: {
      types: [
        o('pads', 'ब्रेक पॅड'),
        o('discs', 'ब्रेक डिस्क'),
        o('steering', 'स्टीअरिंग दुरुस्ती'),
        o('suspension', 'सस्पेन्शन दुरुस्ती'),
      ],
      fields: [
        { id: 'where', label: 'कोणती बाजू?', kind: 'select', options: ['पुढची', 'मागची', 'दोन्ही', 'माहीत नाही'] },
        { id: 'symptom', label: 'तुम्हाला काय जाणवते?', kind: 'text', ph: 'उदा. आवाज, कंपन' },
      ],
    },
    detailing: {
      types: [
        o('wash', 'वॉश आणि व्हॅक्यूम'),
        o('polish', 'रबिंग आणि पॉलिश'),
        o('interior', 'इंटिरियर डीप क्लीन'),
        o('full', 'फुल डिटेलिंग पॅकेज'),
      ],
      fields: [{ id: 'body', label: 'गाडीचा आकार', kind: 'select', options: ['हॅचबॅक', 'सेडान', 'SUV / MUV'] }],
    },
    insurance: {
      types: [o('renewal', 'पॉलिसी रिन्यूअल'), o('claim', 'क्लेम मदत'), o('new', 'नवीन पॉलिसी')],
      fields: [
        { id: 'expiry', label: 'सध्याच्या पॉलिसीची मुदत (असल्यास)', kind: 'text', ph: 'उदा. मार्च २०२६' },
        { id: 'insurer', label: 'सध्याची विमा कंपनी', kind: 'text', ph: 'उदा. ICICI Lombard' },
      ],
    },
  },
}
