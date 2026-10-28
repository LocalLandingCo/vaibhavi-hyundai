// ─────────────────────────────────────────────────────────────
//  ALL SITE COPY LIVES HERE.  Edit text in this one file.
//  - `business`  : facts shared by both languages (phone, address, hours…)
//  - `content.en`: English copy
//  - `content.mr`: Marathi copy (मराठी)
//  Keep the two languages in the same order/structure.
//  Anything marked [CONFIRM WITH OWNER] must be verified before going live.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'VAIBHAVI HYUNDAI',
  altName: 'Vaibhavi Automotive Phaltan',
  phoneDisplay: '+91 86988 32126',
  phoneTel: '+918698832126',
  whatsappNumber: '918698832126', // digits only, for wa.me
  addressLines: ['Lonand–Phaltan Road, Tambmal', 'Phaltan, Maharashtra 415523'],
  lat: 18.00235,
  lng: 74.40725,
  placeId: 'ChIJSThzOkmlwzsRAAAA0E-cBn4',
  rating: '4.8',
  // Day numbers follow JavaScript's Date.getDay(): 0 = Sunday … 6 = Saturday
  closedDay: 2, // Tuesday
}

// Links derived from the facts above (no API keys needed).
export const links = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}&destination_place_id=${business.placeId}`,
  mapEmbed: `https://maps.google.com/maps?q=${business.lat},${business.lng}&z=16&output=embed`,
  // TODO: if this link doesn't open the reviews panel for you, paste the
  // "Share → Copy link" URL from the Google Business Profile here instead.
  googleReviews: `https://search.google.com/local/reviews?placeid=${business.placeId}`,
}

export const content = {
  // ───────────────────────── ENGLISH ─────────────────────────
  en: {
    meta: { langName: 'English' },
    ui: {
      call: 'Call',
      callNow: 'Call now',
      whatsapp: 'WhatsApp',
      whatsappUs: 'WhatsApp us',
      toggleTo: 'मराठी',
      toggleLabel: 'Switch language to Marathi',
      logoSub: 'Multi-brand car service · Phaltan',
      menu: 'Menu',
      expand: 'Show services',
      collapse: 'Hide services',
      askAbout: 'Ask about this on WhatsApp',
    },
    nav: [
      { id: 'book', label: 'Book' },
      { id: 'services', label: 'Services' },
      { id: 'brands', label: 'Brands' },
      { id: 'why', label: 'Why us' },
      { id: 'reviews', label: 'Reviews' },
      { id: 'visit', label: 'Visit' },
      { id: 'enquiry', label: 'Enquiry' },
    ],
    hero: {
      openBadge: 'Open 24 hours · 6 days a week',
      title: 'Multi-brand car service in Phaltan',
      subtitle:
        'From oil change to denting & painting, tyres to insurance help: every car need under one roof, on the Lonand–Phaltan Road in Tambmal.',
      ctaCall: 'Call +91 86988 32126',
      ctaWhatsapp: 'WhatsApp us',
      ctaBook: 'Book a service',
      note: 'Tuesday closed.',
      waMessage: 'Hello, I want to book a car service. Please share details.',
    },
    trust: [
      { big: '4.8★', small: 'on Google' },
      { big: 'Multi-brand', small: 'We service many makes' },
      { big: 'One roof', small: 'All car needs in one place' },
      { big: 'Tue closed', small: 'Open 24 hours on other days' },
    ],
    services: {
      title: 'Everything your car needs',
      subtitle: 'Tap a card to see what we do. Not listed? Just ask us.',
      items: [
        {
          id: 'periodic',
          title: 'Periodic service',
          blurb: 'Keep your car healthy with regular service.',
          list: [
            'Oil change',
            'Oil filter and air filter replacement',
            'Battery water check and top-up',
            'Check of all lights',
            'Tune-up',
            'General inspection',
            'Temperature check',
            'Car wash',
          ],
          note: 'ऑइल, ऑइल फिल्टर, एअर फिल्टर बदलणे, बॅटरी पाणी चेक करणे/भरणे, गाडीचे सर्व लाईट चेक करणे, गाडी वॉशिंग करणे.',
        },
        {
          id: 'ac',
          title: 'Car AC',
          blurb: 'Cool cabin, clean air.',
          list: [
            'AC gas recharge',
            'AC service',
            'Cooling coil replacement',
            'AC filter replacement',
            'Cabin air filter replacement',
          ],
          note: 'केबिन एअर फिल्टर बदलणे',
        },
        {
          id: 'body',
          title: 'Denting, painting & body',
          blurb: 'Dents, scratches and rust sorted out.',
          list: [
            'Denting',
            'Painting',
            'Rust repair',
            'Body and trim repair',
            'Glass',
            'Side mirrors',
          ],
        },
        {
          id: 'tyres',
          title: 'Tyres & wheels',
          blurb: 'Smooth, safe and balanced ride.',
          list: [
            'Tyres',
            'Tyre rotation',
            'Tyre pressure testing',
            'Air pump',
            'Wheel alignment and balancing',
          ],
        },
        {
          id: 'battery',
          title: 'Battery & electrical',
          blurb: 'Starts first time, lights up bright.',
          list: [
            'Battery check',
            'Battery replacement',
            'Electrical work',
            'Lighting',
            'Headlight restoration',
          ],
        },
        {
          id: 'engine',
          title: 'Engine, transmission & exhaust',
          blurb: 'Diagnosis and repair for the heart of your car.',
          list: [
            'Engine repair',
            'Check-engine light diagnostics',
            'Drivetrain',
            'Transmission repair and replacement',
            'Exhaust',
          ],
        },
        {
          id: 'brakes',
          title: 'Brakes, steering & suspension',
          blurb: 'Stop, steer and ride with confidence.',
          list: [
            'Brake repair and replacement',
            'Steering repair and replacement',
            'Suspension repair and replacement',
          ],
        },
        {
          id: 'detailing',
          title: 'Detailing & interior',
          blurb: 'Make it look and feel new again.',
          list: [
            'Auto detailing',
            'Waxing',
            'Rubbing and polish',
            'Vacuuming',
            'Interior cleaning',
            'Upholstery restoration',
          ],
        },
        {
          id: 'insurance',
          title: 'Car insurance assistance',
          blurb: 'Help with your car insurance, at the same place.',
          list: ['Car insurance assistance'],
        },
      ],
    },
    // Warranty / certification badges. Leave `items` EMPTY until the owner confirms
    // real terms; the strip stays hidden. Example item: { big: '...', small: '...' }
    assurance: { items: [] },
    symptoms: {
      title: "What's wrong with your car?",
      subtitle: 'Not sure what you need? Tap a problem to see the matching service, or message us about it.',
      viewService: 'See service',
      waMessage: 'Hello, my car has this problem: ',
      groups: [
        {
          title: 'Routine maintenance',
          items: [
            { text: 'Car due for regular service', service: 'periodic' },
            { text: 'Weak battery or hard to start', service: 'battery' },
            { text: 'Tyres worn or pressure keeps dropping', service: 'tyres' },
          ],
        },
        {
          title: 'Diagnostics and repairs',
          items: [
            { text: 'Squeaking or weak brakes', service: 'brakes' },
            { text: 'Check-engine light is on', service: 'engine' },
            { text: 'AC not cooling', service: 'ac' },
            { text: 'Car pulls to one side or vibrates', service: 'tyres' },
            { text: 'Rough ride or steering feels loose', service: 'brakes' },
            { text: 'Strange engine noise or smoke', service: 'engine' },
          ],
        },
        {
          title: 'Body and paint',
          items: [
            { text: 'Dents or scratches', service: 'body' },
            { text: 'Rust patches', service: 'body' },
            { text: 'Dull paint or dirty interior', service: 'detailing' },
          ],
        },
      ],
    },
    brands: {
      title: 'Brands we service',
      subtitle: 'We are an independent multi-brand centre, so we are not tied to one make.',
      featured: [
        { name: 'Hyundai', models: ['i10', 'i20', 'Venue', 'Creta', 'Verna'], note: 'Hyundai models we service include these.' },
        { name: 'Kia', models: ['Seltos', 'Sonet', 'Carens', 'Carnival'], note: 'Kia models we service include these.' },
      ],
      moreTitle: 'Other makes',
      moreText: 'Driving a different make or model? Message us the car name and we will confirm.',
      cta: 'Ask about your car',
      waMessage: 'Hello, can you service my car? Make and model: ',
    },
    why: {
      title: 'Why car owners pick us',
      points: [
        {
          title: 'Fast, prompt service',
          text: 'Customers mention quick turnaround and no long waiting.',
        },
        {
          title: 'On-the-spot help',
          text: 'Got a problem right now? We try to help quickly, on the spot.',
        },
        {
          title: 'Every car need, one roof',
          text: 'Service, denting & painting, tyres, battery, polish, interior and insurance help, all in one place.',
        },
        {
          title: 'Open 24 hours, 6 days',
          text: 'Open round the clock from Monday to Sunday, except Tuesday.',
        },
      ],
      cta: 'Talk to us on WhatsApp',
      waMessage: 'Hello, I would like to know more about your services.',
    },
    gallery: {
      title: 'Inside the workshop',
      subtitle: 'Real photos of our workshop and work are coming soon.',
      // TODO: replace placeholders with original photos from the owner.
      // Put files in public/photos/ and set `src` to e.g. 'photos/workshop-1.jpg'.
      items: [
        { label: 'Workshop floor', src: 'photos/placeholder.svg' },
        { label: 'Our team', src: 'photos/placeholder.svg' },
        { label: 'Before: paint & dent', src: 'photos/placeholder.svg' },
        { label: 'After: paint & dent', src: 'photos/placeholder.svg' },
        { label: 'Interior detailing', src: 'photos/placeholder.svg' },
        { label: 'Wheel alignment bay', src: 'photos/placeholder.svg' },
      ],
      placeholderTag: 'Photo coming soon',
      cta: 'Visit us and see for yourself',
    },
    reviews: {
      title: 'What customers say',
      subtitle: 'Real reviews from our Google profile.',
      items: [
        {
          name: 'Rudra Travelsplash',
          date: 'Jan 2024',
          // TODO: paste the exact review text from Google if you want a word-for-word quote.
          text: 'Thanks Ravi sir. Fast and prompt servicing, and quick on-the-spot help.',
        },
        {
          name: 'Balkrushna Nale',
          date: 'Aug 2023',
          text: 'खूप चांगली सर्वीस',
          translation: 'Very good service',
        },
        { name: 'Pramodji Saste', date: 'Feb 2023', text: 'Good' },
      ],
      overall: '4.8 on Google',
      overallNote: 'Based on a small number of reviews.',
      readAll: 'Read all on Google',
      cta: 'Book your service',
    },
    offers: {
      title: 'Offers',
      // [CONFIRM WITH OWNER] — replace with the current offer, dates and terms.
      placeholderTitle: 'New offers coming soon',
      placeholderText:
        '[CONFIRM WITH OWNER] Current offer details go here. Ask us on WhatsApp what is running right now.',
      cta: 'Ask about current offers',
      waMessage: 'Hello, are there any offers on car service right now?',
    },
    visit: {
      title: 'Visit us in Tambmal, Phaltan',
      hoursTitle: 'Opening hours',
      open24: 'Open 24 hours',
      closed: 'Closed',
      today: 'Today',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      addressTitle: 'Address',
      directions: 'Get directions',
      mapTitle: 'Map showing Vaibhavi Hyundai, Tambmal, Phaltan',
      callCta: 'Call before you come',
    },
    booking: {
      title: 'Book a service',
      subtitle: 'Pick a service, date and drop-off time. We confirm on WhatsApp.',
      service: 'Service',
      servicePick: 'Choose a service',
      date: 'Date',
      window: 'Drop-off time',
      windows: [
        { id: 'morning', label: 'Morning (6 am – 12 pm)' },
        { id: 'afternoon', label: 'Afternoon (12 – 4 pm)' },
        { id: 'evening', label: 'Evening (4 – 8 pm)' },
        { id: 'night', label: 'Night (8 pm – 6 am)' },
      ],
      name: 'Your name',
      phone: 'Mobile number',
      phonePh: '10-digit number',
      car: 'Car make and model',
      carPh: 'e.g. Hyundai Creta',
      submit: 'Request booking on WhatsApp',
      callInstead: 'Or call us instead',
      hint: 'WhatsApp opens with your booking request ready. Press send, we confirm the slot.',
      errors: {
        required: 'Please fill in every field.',
        phone: 'Please enter a valid 10-digit mobile number.',
        closed: 'We are closed on Tuesdays. Please pick another day.',
        past: 'Please pick today or a later date.',
      },
      msg: {
        hello: 'Hello Vaibhavi Hyundai, I would like to book a service.',
        service: 'Service',
        date: 'Date',
        window: 'Drop-off time',
        name: 'Name',
        phone: 'Mobile',
        car: 'Car',
      },
    },
    enquiry: {
      title: 'Send an enquiry on WhatsApp',
      subtitle: 'Fill this in and WhatsApp opens with your message ready. No sign-up.',
      name: 'Your name',
      carModel: 'Car make and model',
      carModelPh: 'e.g. Kia Seltos',
      service: 'Service needed',
      servicePick: 'Choose a service',
      serviceOther: 'Something else',
      message: 'Message (optional)',
      messagePh: 'Tell us what is wrong or what you need',
      submit: 'Open WhatsApp',
      hint: 'This opens the WhatsApp app or web with your message. You press send.',
      required: 'Please enter your name and car model.',
      msg: {
        hello: 'Hello Vaibhavi Hyundai,',
        name: 'Name',
        car: 'Car',
        service: 'Service',
        note: 'Message',
      },
    },
    footer: {
      addressTitle: 'Address',
      contactTitle: 'Contact',
      hoursLine: 'Open 24 hours, Mon, Wed–Sun. Tuesday closed.',
      disclaimer: 'Independent multi-brand service centre.',
      topLink: 'Back to top',
    },
    floatingWa: 'WhatsApp',
  },

  // ───────────────────────── मराठी ─────────────────────────
  mr: {
    meta: { langName: 'मराठी' },
    ui: {
      call: 'कॉल करा',
      callNow: 'आत्ताच कॉल करा',
      whatsapp: 'व्हॉट्सॲप',
      whatsappUs: 'व्हॉट्सॲपवर मेसेज करा',
      toggleTo: 'EN',
      toggleLabel: 'भाषा इंग्रजी करा',
      logoSub: 'मल्टी-ब्रँड कार सर्विस · फलटण',
      menu: 'मेनू',
      expand: 'सेवा पाहा',
      collapse: 'सेवा लपवा',
      askAbout: 'याबद्दल व्हॉट्सॲपवर विचारा',
    },
    nav: [
      { id: 'book', label: 'बुकिंग' },
      { id: 'services', label: 'सेवा' },
      { id: 'brands', label: 'ब्रँड' },
      { id: 'why', label: 'आम्हीच का' },
      { id: 'reviews', label: 'रिव्ह्यू' },
      { id: 'visit', label: 'भेट द्या' },
      { id: 'enquiry', label: 'चौकशी' },
    ],
    hero: {
      openBadge: '२४ तास खुले · आठवड्यातून ६ दिवस',
      title: 'फलटणमध्ये मल्टी-ब्रँड कार सर्विस',
      subtitle:
        'ऑइल चेंजपासून डेंटिंग-पेंटिंगपर्यंत, टायरपासून इन्शुरन्सपर्यंत: गाडीची प्रत्येक गरज एकाच छताखाली. लोणंद–फलटण रोड, तांबमाळ.',
      ctaCall: 'कॉल करा +91 86988 32126',
      ctaWhatsapp: 'व्हॉट्सॲपवर मेसेज करा',
      ctaBook: 'सर्विस बुक करा',
      note: 'मंगळवारी बंद.',
      waMessage: 'नमस्कार, मला गाडीची सर्विस बुक करायची आहे. कृपया माहिती द्या.',
    },
    trust: [
      { big: '४.८★', small: 'Google वर' },
      { big: 'मल्टी-ब्रँड', small: 'अनेक कंपन्यांच्या गाड्या' },
      { big: 'एकाच छताखाली', small: 'गाडीच्या सर्व गरजा' },
      { big: 'मंगळवार बंद', small: 'इतर दिवशी २४ तास खुले' },
    ],
    services: {
      title: 'तुमच्या गाडीला लागणारी प्रत्येक सेवा',
      subtitle: 'कार्डवर टॅप करून सेवा पाहा. यादीत नसेल तर आम्हाला विचारा.',
      items: [
        {
          id: 'periodic',
          title: 'पिरियॉडिक सर्विस',
          blurb: 'नियमित सर्विसने गाडी ठणठणीत ठेवा.',
          list: [
            'ऑइल बदलणे',
            'ऑइल फिल्टर व एअर फिल्टर बदलणे',
            'बॅटरी पाणी चेक करणे/भरणे',
            'गाडीचे सर्व लाईट चेक करणे',
            'ट्यून-अप',
            'सर्वसाधारण तपासणी',
            'तापमान तपासणी',
            'गाडी वॉशिंग करणे',
          ],
          note: 'ऑइल, ऑइल फिल्टर, एअर फिल्टर बदलणे, बॅटरी पाणी चेक करणे/भरणे, गाडीचे सर्व लाईट चेक करणे, गाडी वॉशिंग करणे.',
        },
        {
          id: 'ac',
          title: 'कार एसी',
          blurb: 'थंडगार केबिन, स्वच्छ हवा.',
          list: [
            'एसी गॅस रिचार्ज',
            'एसी सर्विस',
            'कूलिंग कॉइल बदलणे',
            'एसी फिल्टर बदलणे',
            'केबिन एअर फिल्टर बदलणे',
          ],
          note: 'केबिन एअर फिल्टर बदलणे',
        },
        {
          id: 'body',
          title: 'डेंटिंग, पेंटिंग व बॉडी',
          blurb: 'गाडीवरचे डेंट, स्क्रॅच आणि गंज दूर करा.',
          list: [
            'डेंटिंग',
            'पेंटिंग',
            'गंज (रस्ट) दुरुस्ती',
            'बॉडी व ट्रिम दुरुस्ती',
            'काच',
            'साईड मिरर',
          ],
        },
        {
          id: 'tyres',
          title: 'टायर व चाके',
          blurb: 'गुळगुळीत, सुरक्षित आणि संतुलित प्रवास.',
          list: [
            'टायर',
            'टायर रोटेशन',
            'टायर प्रेशर तपासणी',
            'एअर पंप',
            'व्हील अलाइनमेंट व बॅलन्सिंग',
          ],
        },
        {
          id: 'battery',
          title: 'बॅटरी व इलेक्ट्रिकल',
          blurb: 'पहिल्या किकलाच सुरू, लाईट एकदम झकास.',
          list: [
            'बॅटरी तपासणी',
            'बॅटरी बदलणे',
            'इलेक्ट्रिकल काम',
            'लाईटिंग',
            'हेडलाईट रिस्टोरेशन',
          ],
        },
        {
          id: 'engine',
          title: 'इंजिन, ट्रान्समिशन व एक्झॉस्ट',
          blurb: 'गाडीच्या हृदयाची तपासणी आणि दुरुस्ती.',
          list: [
            'इंजिन दुरुस्ती',
            'चेक-इंजिन लाईट डायग्नोस्टिक्स',
            'ड्राईव्हट्रेन',
            'ट्रान्समिशन दुरुस्ती व बदलणे',
            'एक्झॉस्ट',
          ],
        },
        {
          id: 'brakes',
          title: 'ब्रेक, स्टिअरिंग व सस्पेन्शन',
          blurb: 'विश्वासाने थांबा, वळा आणि चालवा.',
          list: [
            'ब्रेक दुरुस्ती व बदलणे',
            'स्टिअरिंग दुरुस्ती व बदलणे',
            'सस्पेन्शन दुरुस्ती व बदलणे',
          ],
        },
        {
          id: 'detailing',
          title: 'डिटेलिंग व इंटिरिअर',
          blurb: 'गाडी पुन्हा नव्यासारखी चकचकीत.',
          list: [
            'ऑटो डिटेलिंग',
            'वॅक्सिंग',
            'रबिंग व पॉलिश',
            'व्हॅक्यूमिंग',
            'इंटिरिअर क्लिनिंग',
            'अपहोल्स्ट्री (सीट) रिस्टोरेशन',
          ],
        },
        {
          id: 'insurance',
          title: 'कार इन्शुरन्स मदत',
          blurb: 'गाडीच्या इन्शुरन्ससाठी मदत, त्याच ठिकाणी.',
          list: ['कार इन्शुरन्स मदत'],
        },
      ],
    },
    // Warranty / certification badges. Leave `items` EMPTY until the owner confirms
    // real terms; the strip stays hidden. Example item: { big: '...', small: '...' }
    assurance: { items: [] },
    symptoms: {
      title: 'तुमच्या गाडीत काय अडचण आहे?',
      subtitle: 'नक्की काय हवे ते माहीत नाही? अडचणीवर टॅप करा, योग्य सेवा दिसेल, किंवा आम्हाला मेसेज करा.',
      viewService: 'सेवा पहा',
      waMessage: 'नमस्कार, माझ्या गाडीत ही अडचण आहे: ',
      groups: [
        {
          title: 'नियमित देखभाल',
          items: [
            { text: 'गाडीची नियमित सर्विस बाकी आहे', service: 'periodic' },
            { text: 'बॅटरी कमजोर किंवा गाडी सुरू होत नाही', service: 'battery' },
            { text: 'टायर झिजले किंवा हवा कमी होते', service: 'tyres' },
          ],
        },
        {
          title: 'तपासणी आणि दुरुस्ती',
          items: [
            { text: 'ब्रेकचा आवाज येतो किंवा ब्रेक कमजोर आहेत', service: 'brakes' },
            { text: 'चेक-इंजिन लाईट लागला आहे', service: 'engine' },
            { text: 'एसी थंड होत नाही', service: 'ac' },
            { text: 'गाडी एका बाजूला ओढते किंवा कंपन होते', service: 'tyres' },
            { text: 'राईड खडबडीत किंवा स्टीअरिंग सैल वाटते', service: 'brakes' },
            { text: 'इंजिनमधून विचित्र आवाज किंवा धूर', service: 'engine' },
          ],
        },
        {
          title: 'बॉडी आणि पेंट',
          items: [
            { text: 'डेंट किंवा ओरखडे', service: 'body' },
            { text: 'गंज लागला आहे', service: 'body' },
            { text: 'पेंट फिका किंवा आतून गाडी अस्वच्छ', service: 'detailing' },
          ],
        },
      ],
    },
    brands: {
      title: 'आम्ही सर्विस करत असलेले ब्रँड',
      subtitle: 'आम्ही स्वतंत्र मल्टी-ब्रँड सेंटर आहोत, त्यामुळे एकाच कंपनीपुरते मर्यादित नाही.',
      featured: [
        { name: 'Hyundai', models: ['i10', 'i20', 'Venue', 'Creta', 'Verna'], note: 'आम्ही सर्विस करत असलेल्या Hyundai मॉडेलमध्ये ही नावे येतात.' },
        { name: 'Kia', models: ['Seltos', 'Sonet', 'Carens', 'Carnival'], note: 'आम्ही सर्विस करत असलेल्या Kia मॉडेलमध्ये ही नावे येतात.' },
      ],
      moreTitle: 'इतर कंपन्या',
      moreText: 'तुमची गाडी वेगळ्या कंपनीची आहे? गाडीचे नाव पाठवा, आम्ही कळवू.',
      cta: 'तुमच्या गाडीबद्दल विचारा',
      waMessage: 'नमस्कार, तुम्ही माझ्या गाडीची सर्विस कराल का? कंपनी व मॉडेल: ',
    },
    why: {
      title: 'गाडीमालक आम्हाला का निवडतात',
      points: [
        {
          title: 'जलद, तत्पर सर्विस',
          text: 'ग्राहक सांगतात की काम पटकन होते, फार वाट पाहावी लागत नाही.',
        },
        {
          title: 'जागेवरच मदत',
          text: 'आत्ता अडचण आहे? आम्ही लगेच, जागेवर मदत करण्याचा प्रयत्न करतो.',
        },
        {
          title: 'गाडीची प्रत्येक गरज, एकाच छताखाली',
          text: 'सर्विस, डेंटिंग-पेंटिंग, टायर, बॅटरी, पॉलिश, इंटिरिअर आणि इन्शुरन्स मदत, सर्व एकाच ठिकाणी.',
        },
        {
          title: '२४ तास खुले, आठवड्यात ६ दिवस',
          text: 'मंगळवार वगळता सोमवार ते रविवार दिवसरात्र खुले.',
        },
      ],
      cta: 'व्हॉट्सॲपवर बोला',
      waMessage: 'नमस्कार, मला तुमच्या सेवांबद्दल अधिक माहिती हवी आहे.',
    },
    gallery: {
      title: 'आमच्या वर्कशॉपमध्ये एक नजर',
      subtitle: 'वर्कशॉप आणि कामाचे खरे फोटो लवकरच येत आहेत.',
      items: [
        { label: 'वर्कशॉप', src: 'photos/placeholder.svg' },
        { label: 'आमची टीम', src: 'photos/placeholder.svg' },
        { label: 'आधी: पेंट व डेंट', src: 'photos/placeholder.svg' },
        { label: 'नंतर: पेंट व डेंट', src: 'photos/placeholder.svg' },
        { label: 'इंटिरिअर डिटेलिंग', src: 'photos/placeholder.svg' },
        { label: 'व्हील अलाइनमेंट बे', src: 'photos/placeholder.svg' },
      ],
      placeholderTag: 'फोटो लवकरच',
      cta: 'प्रत्यक्ष येऊन पाहा',
    },
    reviews: {
      title: 'ग्राहक काय म्हणतात',
      subtitle: 'आमच्या Google प्रोफाईलवरील खरे रिव्ह्यू.',
      items: [
        {
          name: 'Rudra Travelsplash',
          date: 'जाने. २०२४',
          text: 'Thanks Ravi sir. Fast and prompt servicing, and quick on-the-spot help.',
          translation: 'धन्यवाद रवी सर. जलद व तत्पर सर्विस आणि जागेवरच पटकन मदत.',
        },
        {
          name: 'Balkrushna Nale',
          date: 'ऑग. २०२३',
          text: 'खूप चांगली सर्वीस',
        },
        {
          name: 'Pramodji Saste',
          date: 'फेब्रु. २०२३',
          text: 'Good',
          translation: 'चांगले',
        },
      ],
      overall: 'Google वर ४.८',
      overallNote: 'मर्यादित संख्येतील रिव्ह्यूवर आधारित.',
      readAll: 'Google वर सर्व वाचा',
      cta: 'सर्विस बुक करा',
    },
    offers: {
      title: 'ऑफर्स',
      placeholderTitle: 'नवीन ऑफर्स लवकरच',
      placeholderText:
        '[CONFIRM WITH OWNER] सध्याच्या ऑफरची माहिती इथे येईल. आत्ता कोणती ऑफर सुरू आहे ते व्हॉट्सॲपवर विचारा.',
      cta: 'सध्याच्या ऑफर्सबद्दल विचारा',
      waMessage: 'नमस्कार, सध्या कार सर्विसवर काही ऑफर आहे का?',
    },
    visit: {
      title: 'तांबमाळ, फलटण येथे भेट द्या',
      hoursTitle: 'वेळ',
      open24: '२४ तास खुले',
      closed: 'बंद',
      today: 'आज',
      days: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
      addressTitle: 'पत्ता',
      directions: 'रस्ता दाखवा',
      mapTitle: 'तांबमाळ, फलटण येथील वैभवी ह्युंदाईचा नकाशा',
      callCta: 'येण्यापूर्वी कॉल करा',
    },
    booking: {
      title: 'सर्विस बुक करा',
      subtitle: 'सेवा, तारीख आणि गाडी आणण्याची वेळ निवडा. आम्ही व्हॉट्सॲपवर कन्फर्म करू.',
      service: 'सेवा',
      servicePick: 'सेवा निवडा',
      date: 'तारीख',
      window: 'गाडी आणण्याची वेळ',
      windows: [
        { id: 'morning', label: 'सकाळ (सकाळी ६ – दुपारी १२)' },
        { id: 'afternoon', label: 'दुपार (दुपारी १२ – ४)' },
        { id: 'evening', label: 'संध्याकाळ (४ – रात्री ८)' },
        { id: 'night', label: 'रात्र (रात्री ८ – पहाटे ६)' },
      ],
      name: 'तुमचे नाव',
      phone: 'मोबाइल नंबर',
      phonePh: '१० अंकी नंबर',
      car: 'गाडीची कंपनी व मॉडेल',
      carPh: 'उदा. Hyundai Creta',
      submit: 'व्हॉट्सॲपवर बुकिंग पाठवा',
      callInstead: 'किंवा कॉल करा',
      hint: 'तुमची बुकिंग विनंती तयार होऊन व्हॉट्सॲप उघडेल. सेंड दाबा, आम्ही वेळ कन्फर्म करू.',
      errors: {
        required: 'कृपया सर्व माहिती भरा.',
        phone: 'कृपया वैध १० अंकी मोबाइल नंबर लिहा.',
        closed: 'मंगळवारी आम्ही बंद असतो. कृपया दुसरा दिवस निवडा.',
        past: 'कृपया आजची किंवा पुढील तारीख निवडा.',
      },
      msg: {
        hello: 'नमस्कार वैभवी ह्युंदाई, मला सर्विस बुक करायची आहे.',
        service: 'सेवा',
        date: 'तारीख',
        window: 'गाडी आणण्याची वेळ',
        name: 'नाव',
        phone: 'मोबाइल',
        car: 'गाडी',
      },
    },
    enquiry: {
      title: 'व्हॉट्सॲपवर चौकशी पाठवा',
      subtitle: 'हे भरा, तुमचा मेसेज तयार होऊन व्हॉट्सॲप उघडेल. साइन-अप नको.',
      name: 'तुमचे नाव',
      carModel: 'गाडीची कंपनी व मॉडेल',
      carModelPh: 'उदा. Kia Seltos',
      service: 'हवी असलेली सेवा',
      servicePick: 'सेवा निवडा',
      serviceOther: 'इतर',
      message: 'संदेश (ऐच्छिक)',
      messagePh: 'काय अडचण आहे किंवा काय हवे ते सांगा',
      submit: 'व्हॉट्सॲप उघडा',
      hint: 'यामुळे व्हॉट्सॲप ॲप किंवा वेबवर तुमचा मेसेज उघडेल. तुम्ही फक्त सेंड दाबा.',
      required: 'कृपया तुमचे नाव आणि गाडीचे मॉडेल लिहा.',
      msg: {
        hello: 'नमस्कार वैभवी ह्युंदाई,',
        name: 'नाव',
        car: 'गाडी',
        service: 'सेवा',
        note: 'संदेश',
      },
    },
    footer: {
      addressTitle: 'पत्ता',
      contactTitle: 'संपर्क',
      hoursLine: '२४ तास खुले: सोम, बुध–रवि. मंगळवार बंद.',
      disclaimer: 'स्वतंत्र मल्टी-ब्रँड सर्विस सेंटर. (Independent multi-brand service centre.)',
      topLink: 'वर जा',
    },
    floatingWa: 'व्हॉट्सॲप',
  },
}
