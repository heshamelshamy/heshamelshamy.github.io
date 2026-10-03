/**
 * ==============================================================================
 * PORTFOLIO TRANSLATIONS CONFIGURATION
 * Hesham Elshamy — M.Sc. Bauingenieurwesen / BIM Consultant
 * Languages supported: German (Default), English, Arabic (RTL)
 * 
 * PLACEHOLDER GUIDE:
 * You can easily customize or update any text by modifying the values below.
 * Look for the explicit placeholders such as:
 * [INSERT_GERMAN_HERO_HEADLINE], [INSERT_ARABIC_ABOUT_TEXT], etc.
 * ==============================================================================
 */

const portfolioTranslations = {
  // ============================================================================
  // 🇩🇪 GERMAN VERSION (DEFAULT - TARGET AUDIENCE: ENGINEERING FIRMS IN GERMANY)
  // ============================================================================
  de: {
    // Page Metadata
    meta: {
      title: "Hesham Elshamy | M.Sc. Bauingenieurwesen · BIM-Modellierer & Verkehrsplanung",
      description: "Freiberuflicher Bauingenieur & BIM-Modellierer (M.Sc. Note 1,3) für Ingenieurbüros in Deutschland. Spezialisiert auf HOAI LP 2–5, RE-2012, RASt 06, RStO und Dynamo-Automatisierung."
    },

    // Navigation Bar
    nav: {
      brandTitle: "Hesham Elshamy",
      brandSubtitle: "M.Sc. Bauingenieurwesen · BIM Consultant",
      about: "Über mich",
      services: "Leistungen",
      experience: "Berufserfahrung",
      skills: "Software & Skills",
      contact: "Kontakt",
      contactCta: "Projekt anfragen"
    },

    // Hero Section
    hero: {
      statusBadge: "Verfügbar für freiberufliche B2B-Projekte",
      /* [INSERT_GERMAN_HERO_HEADLINE] */
      headline: "HESHAM ELSHAMY | M.Sc. Bauingenieurwesen",
      /* [INSERT_GERMAN_HERO_SUBHEADLINE] */
      subheadline: "BIM-Modellierer & Freiberuflicher Ingenieur für Verkehrsanlagenplanung.",
      /* [INSERT_GERMAN_HERO_DESCRIPTION] */
      description: "Ihr zuverlässiger B2B-Freelance-Partner für intelligente Straßenplanung, BIM-Methodik und Prozessautomatisierung zur Unterstützung von Ingenieurbüros in Deutschland.",
      /* [INSERT_GERMAN_HERO_CTA] */
      ctaPrimary: "Verfügbar für freiberufliche Projekte – Jetzt Kontakt aufnehmen",
      ctaSecondary: "Kompetenzen & Leistungen",
      badgeStandards: "HOAI LP 2–5 · RE-2012 · RASt 06 · RStO",
      badgeBim: "BIM LOD 100–300 & Dynamo-Skripte",
      badgeGrade: "M.Sc. Note 1,3 · TU Duisburg-Essen",
      visualCaption: "Parametrisches BIM-Infrastrukturmodell (VESTRA & Civil 3D)"
    },

    // About Me Section
    about: {
      sectionTag: "Profil & Qualifikation",
      title: "Präzision im deutschen Planungskontext",
      subtitle: "B2B-Unterstützung für Ingenieurbüros und Generalplaner",
      /* [INSERT_GERMAN_ABOUT_TEXT] */
      bioP1: "Als spezialisierter Bauingenieur (M.Sc. Infrastruktur und Umwelt, Note 1,3 – Universität Duisburg-Essen) unterstütze ich Ingenieurbüros bei der Bewältigung komplexer Infrastrukturprojekte. Ich verfüge über fundierte Erfahrung in der Objektplanung von Verkehrsanlagen (LP 2–5 nach HOAI) sowie in der Erstellung RE-2012-konformer Entwurfsunterlagen.",
      bioP2: "Mein Ansatz verbindet tiefgreifendes Fachwissen in deutschen Richtlinien (RASt 06, RStO 12/24) mit maßgeschneiderten Automatisierungstools, um Projekte effizienter, präziser und termingerecht zu realisieren.",
      stat1Number: "1,3",
      stat1Label: "M.Sc. Abschlussnote (TU Duisburg-Essen)",
      stat2Number: "LP 2–5",
      stat2Label: "Objektplanung nach HOAI & RE-2012",
      stat3Number: "B2B",
      stat3Label: "Freiberufliche Zuarbeit für Ingenieurbüros",
      cardLocationTitle: "Standort & Verfügbarkeit",
      cardLocationText: "Dortmund, NRW · Bundesweit Remote / Hybrid einsatzbereit",
      cardEducationTitle: "Akademischer Werdegang",
      cardEducationText: "M.Sc. Infrastruktur & Umwelt (Deutschlandstipendium) · B.Sc. mit Auszeichnung",
      btnLinkedIn: "LinkedIn Profil",
      btnContact: "Direkt kontaktieren"
    },

    // Services Section
    services: {
      sectionTag: "Leistungen & Expertise",
      title: "Ingenieurlösungen mit messbarem Mehrwert",
      subtitle: "Fachkompetenz für anspruchsvolle Straßen-, Entwässerungs- und BIM-Projekte",
      
      // Service 1
      /* [INSERT_GERMAN_SERVICE_1] */
      s1Title: "Komplexe Straßenaufteilung & Barrierefreiheit",
      s1Desc: "Neugestaltung urbaner Straßenräume bei stark limitierenden Zwangspunkten (Bestandsbebauung). Ich sichere die normgerechte Anpassung der Gehwegbreiten unter strikter Einhaltung der Querneigungsgrenzwerte zur Gewährleistung der Barrierefreiheit.",
      s1Tags: ["RASt 06", "Barrierefreiheit", "Gehwegbreiten", "Zwangspunkte"],

      // Service 2
      /* [INSERT_GERMAN_SERVICE_2] */
      s2Title: "Prozessautomatisierung mit Dynamo",
      s2Desc: "Beschleunigung der Projektlaufzeiten durch Skripting. Entwicklung maßgeschneiderter Dynamo-Skripte (z. B. zur automatisierten Umbenennung von Leitungen in Abhängigkeit vom jeweiligen Startschacht), was bei großen Kanalnetzen zu einer enormen Zeitersparnis führt.",
      s2Tags: ["Dynamo Civil 3D", "Python-Skripte", "Automatisierung", "Effizienzsteigerung"],

      // Service 3
      /* [INSERT_GERMAN_SERVICE_3] */
      s3Title: "Präzise Erläuterungsberichte & Technische Dokumentation",
      s3Desc: "Verfassen von Richtlinien-konformen Berichten. Ich lege höchsten Wert auf exakte technische Formulierungen (z. B. rechtssichere Dokumentation von Ausnahmen wie „Abweichend von den vorliegenden Regelbauzeichnungen“ sowie präzise Maßangaben wie „2,00 m“). Bei unvermeidbaren Zwangspunkten erarbeite ich in enger Abstimmung mit dem Bauherrn sichere Alternativlösungen (z.B. Anwendung von Feuerwehr-Richtlinien).",
      s3Tags: ["RE-2012 konform", "Erläuterungsberichte", "Rechtssicherheit", "Baulastträger-Abstimmung"],

      // Service 4
      /* [INSERT_GERMAN_SERVICE_4] */
      s4Title: "BIM-Modellierung (LOD 100–300)",
      s4Desc: "Detaillierte 3D-Profilkörper und Trassierung mit AutoCAD Civil 3D und VESTRA INFRAVISION. Koordinierte Fachmodelle für Verkehrswege und Entwässerungsnetze inklusive IFC-Datenübergabe und Kollisionsprüfung.",
      s4Tags: ["AutoCAD Civil 3D", "VESTRA INFRAVISION", "LOD 100–300", "IFC & ISO 19650"]
    },

    // Work Experience Section
    experience: {
      sectionTag: "Beruflicher Werdegang",
      title: "Praxiserfahrung im deutschen Infrastrukturbau",
      subtitle: "Stationen in renommierten Ingenieurunternehmen und Behörden",
      
      // Exp 1
      exp1Date: "10.2023 – Heute",
      exp1Role: "BIM Modellierer / Projektingenieur Straßen- und Entwässerungsplanung",
      exp1Company: "Bramey.Bünermann Ingenieure GmbH, Dortmund",
      exp1Desc: "BIM-Modellierung von Verkehrs- und Entwässerungsanlagen, Planung von Straßen- und Radwegeinfrastruktur, Koordination von Fachmodellen und Erstellung prüffähiger Planungsunterlagen.",

      // Exp 2
      exp2Date: "04.2023 – 10.2023",
      exp2Role: "Projektingenieur Straßenplanung",
      exp2Company: "Autobahn GmbH des Bundes · NL Westfalen, Außenstelle Hagen",
      exp2Desc: "Bearbeitung von Straßenentwürfen im hochbelasteten Autobahnnetz, Erstellung von Grunderwerbsplänen und -verzeichnissen, Abstimmung mit internen und externen Fachdisziplinen.",

      // Exp 3
      exp3Date: "10.2021 – 04.2023",
      exp3Role: "Werkstudent (Planung Verkehrsanlagen)",
      exp3Company: "Brilon Bondzio Weiser GmbH, Bochum",
      exp3Desc: "Unterstützung bei der Planung komplexer Knotenpunkte und Kreisverkehre, detaillierte Massen- und Mengenermittlung, Bearbeitung technischer Planunterlagen.",

      // Exp 4
      exp4Date: "2016 – 2018",
      exp4Role: "Projektingenieur Straßenplanung & Bauleiter",
      exp4Company: "ECG Engineering Consultants Group & Prof. Ahmed Mohamady",
      exp4Desc: "Umfassende Infrastruktur- und Erschließungsprojekte in Ägypten und Saudi-Arabien, Trassierungsentwürfe, Mengenermittlung sowie Leitung von Baumaßnahmen vor Ort."
    },

    // Skills & Software Section
    skills: {
      sectionTag: "Kompetenzen & Werkzeuge",
      title: "Software & Technische Fähigkeiten",
      subtitle: "Spezialisierte Fachsoftware für Verkehrsanlagen, Entwässerung und BIM-Koordinierung",
      catExpert: "Expertenniveau (Täglicher Praxiseinsatz)",
      catAdvanced: "Fortgeschritten (Projektbezogen)",
      catLanguages: "Sprachkompetenz",
      langArabic: "Arabisch",
      langArabicLevel: "Muttersprache",
      langGerman: "Deutsch",
      langGermanLevel: "Sehr gut (Verhandlungssicher / C1)",
      langEnglish: "Englisch",
      langEnglishLevel: "Gut (Fließend im Fachkontext)",
      certificationsTitle: "Richtlinien & Standards:",
      standardsList: "HOAI (LP 2–5) · RE-2012 · RASt 06 · RStO 12/24 · RAL · RIN · DIN 18040 (Barrierefreiheit) · ISO 19650 (BIM)"
    },

    // Contact & Footer Section
    contact: {
      sectionTag: "Kontakt aufnehmen",
      title: "Lassen Sie uns Ihr nächstes Projekt gemeinsam realisieren",
      subtitle: "Ich stehe deutschen Ingenieurbüros als zuverlässiger freiberuflicher Partner für Entwurfsplanung, BIM und Automatisierung zur Verfügung.",
      emailLabel: "E-Mail-Adresse",
      emailValue: "heshamelshamy2000@gmail.com",
      phoneLabel: "Telefon",
      phoneValue: "+49 178 2362766",
      locationLabel: "Standort",
      locationValue: "Dortmund, Nordrhein-Westfalen, Deutschland",
      copyEmailBtn: "E-Mail kopieren",
      copiedNotice: "In Zwischenablage kopiert!",
      openMailClient: "E-Mail schreiben",
      linkedInTitle: "Vernetzung auf LinkedIn",
      availabilityNotice: "Kurzfristig verfügbar für Projektunterstützung (Remote / NRW)",
      legalLink: "Impressum",
      privacyLink: "Datenschutz"
    },

    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten.",
      tagline: "Freiberufliche Verkehrs- und BIM-Planung nach deutschen Standards."
    },

    // Legal Modal
    legal: {
      title: "Impressum & Rechtliche Hinweise",
      providerTitle: "Angaben gemäß § 5 DDG (ehem. TMG)",
      name: "Hesham Elshamy (M.Sc. Bauingenieurwesen)",
      address: "Overhoffstraße 177, 44149 Dortmund, Deutschland",
      contact: "E-Mail: heshamelshamy2000@gmail.com | Tel: +49 178 2362766",
      responsible: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Hesham Elshamy",
      disclaimer: "Die auf dieser Portfolio-Website dargestellten Inhalte dienen der beruflichen Präsentation freiberuflicher Ingenieur- und Beratungsleistungen.",
      closeBtn: "Schließen"
    }
  },

  // ============================================================================
  // 🇬🇧 ENGLISH VERSION
  // ============================================================================
  en: {
    meta: {
      title: "Hesham Elshamy | M.Sc. Civil Engineer · BIM Modeler & Infrastructure Consultant",
      description: "Independent B2B Civil Engineer and BIM Consultant (M.Sc. Grade 1.3) supporting engineering firms in Germany. Specialized in HOAI 2–5, RE-2012, RASt 06, and Dynamo automation."
    },

    nav: {
      brandTitle: "Hesham Elshamy",
      brandSubtitle: "M.Sc. Civil Engineer · BIM Consultant",
      about: "About Me",
      services: "Services",
      experience: "Experience",
      skills: "Skills & Software",
      contact: "Contact",
      contactCta: "Inquire Project"
    },

    hero: {
      statusBadge: "Available for freelance B2B projects",
      /* [INSERT_ENGLISH_HERO_HEADLINE] */
      headline: "Hesham Elshamy | M.Sc. Civil Engineer",
      /* [INSERT_ENGLISH_HERO_SUBHEADLINE] */
      subheadline: "BIM Modeler & Freelance Infrastructure Design Consultant.",
      /* [INSERT_ENGLISH_HERO_DESCRIPTION] */
      description: "Your reliable B2B freelance partner for intelligent road design, BIM implementation, and workflow automation for engineering firms in Germany.",
      /* [INSERT_ENGLISH_HERO_CTA] */
      ctaPrimary: "Available for freelance projects – Contact Me",
      ctaSecondary: "Explore Services & Solutions",
      badgeStandards: "HOAI Phases 2–5 · RE-2012 · RASt 06 · RStO",
      badgeBim: "BIM LOD 100–300 & Dynamo Automation",
      badgeGrade: "M.Sc. Grade 1.3 (Distinction) · Duisburg-Essen",
      visualCaption: "Parametric BIM Infrastructure Model (VESTRA & Civil 3D)"
    },

    about: {
      sectionTag: "Profile & Qualifications",
      title: "Engineering Precision Aligned with German Standards",
      subtitle: "B2B partnership for engineering offices and general planners",
      /* [INSERT_ENGLISH_ABOUT_TEXT] */
      bioP1: "As a highly specialized Civil Engineer holding a Master's degree in Infrastructure and Environment (Grade: 1.3, University of Duisburg-Essen), I provide independent B2B consulting to engineering firms. I have extensive experience in the objective planning of transportation facilities (HOAI phases 2–5) and generating RE-2012 compliant design documents.",
      bioP2: "I bridge the gap between strict German engineering standards (RASt 06, RStO 12/24) and modern BIM workflows, utilizing automation to deliver projects faster and with maximum precision.",
      stat1Number: "1.3",
      stat1Label: "Master's Degree Grade (Top Honors)",
      stat2Number: "HOAI 2–5",
      stat2Label: "Design Phases & RE-2012 Documentation",
      stat3Number: "B2B",
      stat3Label: "Freelance Consultant for Engineering Firms",
      cardLocationTitle: "Location & Mobility",
      cardLocationText: "Dortmund, NRW · Nationwide Remote & Hybrid Consultation",
      cardEducationTitle: "Academic Background",
      cardEducationText: "M.Sc. Infrastructure & Environment (Deutschlandstipendium) · B.Sc. with Honors",
      btnLinkedIn: "LinkedIn Profile",
      btnContact: "Get in Touch"
    },

    services: {
      sectionTag: "Services & Engineering Solutions",
      title: "High-Impact Engineering Solutions",
      subtitle: "Domain expertise for complex road design, drainage networks, and BIM workflows",
      
      // Service 1
      /* [INSERT_ENGLISH_SERVICE_1] */
      s1Title: "Urban Reallocation & Accessibility",
      s1Desc: "Resolving complex spatial challenges in urban street reallocation (Straßenaufteilung). I ensure the strict maintenance of cross-slope limits for accessibility (Barrierefreiheit) while adapting sidewalk widths around fixed historical building constraints.",
      s1Tags: ["RASt 06", "Accessibility", "Sidewalk Geometry", "Spatial Constraints"],

      // Service 2
      /* [INSERT_ENGLISH_SERVICE_2] */
      s2Title: "Workflow Automation (Dynamo)",
      s2Desc: "Accelerating delivery through custom scripting. I developed custom Dynamo scripts that automatically rename pipes (Leitungen) dynamically based on their starting manholes (Schächte), eliminating hours of manual data entry in large-scale drainage networks.",
      s2Tags: ["Dynamo Civil 3D", "Python Scripting", "Process Automation", "Efficiency Gains"],

      // Service 3
      /* [INSERT_ENGLISH_SERVICE_3] */
      s3Title: "Technical Documentation (Erläuterungsbericht)",
      s3Desc: "Drafting highly precise engineering reports. I ensure legally and technically compliant specifications (including exact phrasing for exceptions such as \"Abweichend von den vorliegenden Regelbauzeichnungen\" and standard formatting like \"2,00 m\"). When standard codes conflict with unavoidable project constraints, I negotiate and apply safe alternative standards (e.g., fire apparatus access codes) in agreement with clients.",
      s3Tags: ["RE-2012 Compliant", "Technical Reports", "Legal Certainty", "Stakeholder Alignment"],

      // Service 4
      /* [INSERT_ENGLISH_SERVICE_4] */
      s4Title: "Infrastructure BIM Modeling (LOD 100–300)",
      s4Desc: "Delivering high-quality 3D corridor models and alignment geometry using AutoCAD Civil 3D and VESTRA INFRAVISION. Coordinated multi-discipline infrastructure models with IFC data exchange and clash detection.",
      s4Tags: ["AutoCAD Civil 3D", "VESTRA INFRAVISION", "LOD 100–300", "IFC & ISO 19650"]
    },

    experience: {
      sectionTag: "Career History",
      title: "Proven Track Record in German Infrastructure",
      subtitle: "Experience across consulting engineering firms and federal roadway agencies",
      
      exp1Date: "Oct 2023 – Present",
      exp1Role: "BIM Modeler / Road & Drainage Project Engineer",
      exp1Company: "Bramey.Bünermann Ingenieure GmbH, Dortmund",
      exp1Desc: "BIM modeling of transport and drainage infrastructure, bicycle and pedestrian facility planning, coordination of disciplinary models, and production of verified engineering design submissions.",

      exp2Date: "Apr 2023 – Oct 2023",
      exp2Role: "Road Design Project Engineer",
      exp2Company: "Autobahn GmbH des Bundes · Westfalen Branch, Hagen",
      exp2Desc: "Engineering design for high-traffic federal highway sections, preparation of land acquisition plans and registers (Grunderwerb), and technical coordination with internal and external authorities.",

      exp3Date: "Oct 2021 – Apr 2023",
      exp3Role: "Planning Assistant (Working Student)",
      exp3Company: "Brilon Bondzio Weiser GmbH, Bochum",
      exp3Desc: "Support in intersection and roundabout geometric design, comprehensive quantity take-offs, and technical drawing preparation.",

      exp4Date: "2016 – 2018",
      exp4Role: "Road Design Engineer & Site Manager",
      exp4Company: "ECG Engineering Consultants Group & Prof. Ahmed Mohamady",
      exp4Desc: "Large-scale infrastructure and master plan developments in Egypt and Saudi Arabia, horizontal/vertical alignment design, earthwork computations, and on-site construction supervision."
    },

    skills: {
      sectionTag: "Tools & Proficiency",
      title: "Software & Technical Capabilities",
      subtitle: "Specialized engineering software for transportation design, drainage, and BIM management",
      catExpert: "Expert Level (Daily Production Work)",
      catAdvanced: "Advanced (Project Applications)",
      catLanguages: "Languages",
      langArabic: "Arabic",
      langArabicLevel: "Native Speaker",
      langGerman: "German",
      langGermanLevel: "Very Good (Professional C1 / Technical)",
      langEnglish: "English",
      langEnglishLevel: "Good (Fluent Professional Working)",
      certificationsTitle: "Key Standards & Guidelines:",
      standardsList: "HOAI (Phases 2–5) · RE-2012 · RASt 06 · RStO 12/24 · RAL · RIN · DIN 18040 (Accessibility) · ISO 19650 (BIM)"
    },

    contact: {
      sectionTag: "Get in Touch",
      title: "Let's Collaborate on Your Next Infrastructure Project",
      subtitle: "Available to support German engineering consultancies as an agile freelance partner for design, BIM, and automated modeling.",
      emailLabel: "Email Address",
      emailValue: "heshamelshamy2000@gmail.com",
      phoneLabel: "Phone",
      phoneValue: "+49 178 2362766",
      locationLabel: "Location",
      locationValue: "Dortmund, North Rhine-Westphalia, Germany",
      copyEmailBtn: "Copy Email",
      copiedNotice: "Copied to clipboard!",
      openMailClient: "Compose Email",
      linkedInTitle: "Connect on LinkedIn",
      availabilityNotice: "Immediately available for project engagement (Remote / On-site NRW)",
      legalLink: "Legal Notice (Impressum)",
      privacyLink: "Privacy Policy"
    },

    footer: {
      rights: "All rights reserved.",
      tagline: "Freelance Infrastructure Design & BIM Consulting conforming to German standards."
    },

    legal: {
      title: "Legal Notice (Impressum)",
      providerTitle: "Information pursuant to § 5 DDG (Germany)",
      name: "Hesham Elshamy (M.Sc. Civil Engineering)",
      address: "Overhoffstraße 177, 44149 Dortmund, Germany",
      contact: "Email: heshamelshamy2000@gmail.com | Phone: +49 178 2362766",
      responsible: "Responsible for content: Hesham Elshamy",
      disclaimer: "The contents of this portfolio website serve for professional presentation of freelance engineering and consulting services.",
      closeBtn: "Close"
    }
  },

  // ============================================================================
  // 🇪🇬 ARABIC VERSION (RTL LAYOUT - CAIRO FONT - DIR="RTL")
  // ============================================================================
  ar: {
    meta: {
      title: "هشام الشامي | M.Sc. Bauingenieurwesen · مستشار BIM وهندسة الطرق",
      description: "مهندس مدني حر واستشاري نمذجة معلومات البناء (BIM) وتصميم الطرق للمكاتب الهندسية في ألمانيا. ماجستير بتقدير امتياز (1.3) من جامعة دويسبورغ-إيسن، وخبرة في معايير HOAI و RE-2012."
    },

    nav: {
      brandTitle: "هشام الشامي",
      brandSubtitle: "M.Sc. Bauingenieurwesen · مستشار BIM",
      about: "من أنا",
      services: "الخدمات الهندسية",
      experience: "الخبرات العملية",
      skills: "المهارات والبرامج",
      contact: "اتصل بي",
      contactCta: "طلب مشروع"
    },

    hero: {
      statusBadge: "متاح للمشاريع والتعاقدات الحرة (B2B)",
      /* [INSERT_ARABIC_HERO_HEADLINE] */
      headline: "هشام الشامي | M.Sc. Bauingenieurwesen",
      /* [INSERT_ARABIC_HERO_SUBHEADLINE] */
      subheadline: "مستشار نمذجة معلومات البناء (BIM) ومهندس تخطيط طرق وبنية تحتية (Freiberufler).",
      /* [INSERT_ARABIC_HERO_DESCRIPTION] */
      description: "شريكك الهندسي المستقل لتقديم حلول تصميم طرق ذكية، أتمتة العمليات، ونمذجة (BIM) عالية الدقة للمكاتب الهندسية في ألمانيا.",
      /* [INSERT_ARABIC_HERO_CTA] */
      ctaPrimary: "تواصل معي لمشروعك القادم (Kontakt aufnehmen)",
      ctaSecondary: "استعراض الخدمات والحلول",
      badgeStandards: "HOAI LP 2–5 · RE-2012 · RASt 06 · RStO",
      badgeBim: "نمذجة BIM LOD 100–300 وأتمتة Dynamo",
      badgeGrade: "ماجستير بامتياز 1.3 · جامعة دويسبورغ-إيسن",
      visualCaption: "نموذج BIM بارامتري لمشروع بنية تحتية (VESTRA & Civil 3D)"
    },

    about: {
      sectionTag: "نبذة مهنية ومؤهلات",
      title: "دقة هندسية ملتزمة بالمعايير الألمانية الصارمة",
      subtitle: "دعم هندسي احترافي (B2B) للمكاتب الاستشارية في ألمانيا",
      /* [INSERT_ARABIC_ABOUT_TEXT] */
      bioP1: "مهندس مدني متخصص في تصميم البنية التحتية وتخطيط الطرق، حاصل على درجة الماجستير في الهندسة المدنية (تخصص البنية التحتية والبيئة) من جامعة دويسبورغ-إيسن بتقدير امتياز (1.3). أمتلك خبرة عملية واسعة في تخطيط مرافق النقل عبر كافة المراحل (LP 2–5 nach HOAI) وإعداد مستندات التصميم المتوافقة مع معايير RE-2012.",
      bioP2: "أقدم خدماتي كمهندس حر (B2B) لدعم المكاتب الهندسية الألمانية، حيث أجمع بين الفهم العميق للأكواد الهندسية (مثل RASt 06 و RStO 12/24) وتطوير أدوات الأتمتة التي تسرع وتيرة العمل وتقلل الأخطاء.",
      stat1Number: "1.3",
      stat1Label: "معدل الماجستير (امتياز مع مرتبة الشرف)",
      stat2Number: "LP 2–5",
      stat2Label: "مراحل التصميم الهندسي HOAI ومعايير RE-2012",
      stat3Number: "B2B",
      stat3Label: "تعاقدات حرة واستشارات للمكاتب الهندسية",
      cardLocationTitle: "الموقع ونطاق العمل",
      cardLocationText: "دورتموند، شمال الراين · عمل عن بُعد وحضوري في عموم ألمانيا",
      cardEducationTitle: "المسار الأكاديمي",
      cardEducationText: "ماجستير البنية التحتية والبيئة (منحة التفوق Deutschlandstipendium) · بكالوريوس بامتياز",
      btnLinkedIn: "حساب LinkedIn",
      btnContact: "تواصل مباشر"
    },

    services: {
      sectionTag: "الخدمات والحلول الهندسية",
      title: "حلول هندسية ذات قيمة ملموسة",
      subtitle: "خبرات تخصصية في تخطيط الطرق، شبكات التصريف ونمذجة BIM",
      
      // Service 1
      /* [INSERT_ARABIC_SERVICE_1] */
      s1Title: "إعادة التخطيط الحضري والوصولية (Straßenaufteilung & Barrierefreiheit)",
      s1Desc: "تصميم عمليات إعادة توزيع للمساحات في الشوارع الحضرية المعقدة. أمتلك القدرة على موازنة تغيير عروض الأرصفة مع الالتزام الصارم بحدود الميول العرضية لضمان الوصولية، مع الاحترام الكامل للنقاط الثابتة للمباني المجاورة.",
      s1Tags: ["معايير RASt 06", "الوصولية الشاملة", "عروض الأرصفة", "محددات الموقع"],

      // Service 2
      /* [INSERT_ARABIC_SERVICE_2] */
      s2Title: "أتمتة العمليات باستخدام Dynamo",
      s2Desc: "تسريع دورة عمل المشاريع من خلال الأتمتة. قمت بتطوير نصوص برمجية مخصصة تقوم بإعادة تسمية خطوط الأنابيب (Leitungen) تلقائياً بناءً على غرف التفتيش (Schächte) المرتبطة بها، مما يوفر ساعات من العمل اليدوي في مشاريع البنية التحتية الضخمة.",
      s2Tags: ["Dynamo Civil 3D", "سكربتات Python", "أتمتة العمليات", "توفير الوقت والدقة"],

      // Service 3
      /* [INSERT_ARABIC_SERVICE_3] */
      s3Title: "التقارير الهندسية والصياغة الفنية (Erläuterungsbericht)",
      s3Desc: "إعداد تقارير هندسية دقيقة ومطابقة للأكواد. أتميز بالصياغة الفنية والقانونية الدقيقة لمواصفات التنفيذ وتوثيق الاستثناءات بأسلوب احترافي (مثل استخدام صيغة \"Abweichend von den vorliegenden Regelbauzeichnungen\" وكتابة الأبعاد بالصيغة القياسية \"2,00 m\"). في حالات التعارض الحتمي، أقوم بالتنسيق مع الجهات المالكة لتطبيق أكواد بديلة آمنة (مثل مسارات سيارات الإطفاء).",
      s3Tags: ["معايير RE-2012", "تقارير توضيحية", "صياغة قانونية وفنية", "تنسيق الجهات المسؤولة"],

      // Service 4
      /* [INSERT_ARABIC_SERVICE_4] */
      s4Title: "نمذجة معلومات البناء (BIM LOD 100–300)",
      s4Desc: "إنشاء نماذج دقيقة (LOD 100-300) باستخدام VESTRA INFRAVISION و AutoCAD Civil 3D. نماذج مجسمة ثلاثية الأبعاد متكاملة لشبكات الطرق وتصريف المياه مع دعم صيغ التبادل IFC وفحص التصادمات.",
      s4Tags: ["AutoCAD Civil 3D", "VESTRA INFRAVISION", "LOD 100–300", "معايير ISO 19650"]
    },

    experience: {
      sectionTag: "الخبرات العملية",
      title: "خبرة متراكمة في قطاع البنية التحتية بألمانيا",
      subtitle: "محطات مهنية لدى كبرى المكاتب الاستشارية والهيئات الحكومية",
      
      exp1Date: "10.2023 – حتى الآن",
      exp1Role: "مهندس تصميم نماذج BIM / مهندس مشاريع طرق وتصريف",
      exp1Company: "Bramey.Bünermann Ingenieure GmbH, Dortmund",
      exp1Desc: "تصميم طرق وشبكات تصريف، تخطيط مسارات المشاة والدراجات، التنسيق بين نماذج التخصصات المختلفة وإعداد المخططات التنفيذية المتوافقة مع الكود الألماني.",

      exp2Date: "04.2023 – 10.2023",
      exp2Role: "مهندس مشاريع تخطيط طرق",
      exp2Company: "Autobahn GmbH des Bundes · NL Westfalen, Hagen",
      exp2Desc: "إعداد خطط وسجلات الاستحواذ على الأراضي (Grunderwerb)، وتصميم عناصر شبكة الطرق السريعة الفيدرالية والتنسيق مع الجهات الحكومية والبيئية.",

      exp3Date: "10.2021 – 04.2023",
      exp3Role: "مساعد هندسي للتخطيط (Werkstudent)",
      exp3Company: "Brilon Bondzio Weiser GmbH, Bochum",
      exp3Desc: "تصميم التقاطعات والدوّارات وحساب الكميات وإعداد المستندات الفنية لتخطيط شبكات المرور والنقل.",

      exp4Date: "2016 – 2018",
      exp4Role: "مهندس تخطيط طرق ومرور / مدير موقع",
      exp4Company: "ECG Engineering Consultants Group ومكتب أ.د. أحمد محمدي",
      exp4Desc: "مشاريع بنية تحتية ومخططات عمرانية كبرى في مصر والمملكة العربية السعودية، تخطيط مسارات الطرق، حساب كميات الحفر والردم والإشراف الميداني على التنفيذ."
    },

    skills: {
      sectionTag: "المهارات والأدوات",
      title: "البرمجيات والكفاءات التقنية",
      subtitle: "برمجيات هندسية متخصصة في تخطيط النقل وتصريف المياه ونمذجة BIM",
      catExpert: "مستوى خبير (استخدام مهني يومي)",
      catAdvanced: "مستوى متقدم (تطبيق في المشاريع)",
      catLanguages: "اللغات",
      langArabic: "العربية",
      langArabicLevel: "اللغة الأم",
      langGerman: "الألمانية",
      langGermanLevel: "جيد جداً (C1 - تعامل مهني وتقني كامل)",
      langEnglish: "الإنجليزية",
      langEnglishLevel: "جيد (طلاقة مهنية في بيئة العمل)",
      certificationsTitle: "المعايير والأكواد المعتمدة:",
      standardsList: "HOAI (LP 2–5) · RE-2012 · RASt 06 · RStO 12/24 · RAL · RIN · DIN 18040 (الوصولية) · ISO 19650 (BIM)"
    },

    contact: {
      sectionTag: "تواصل معي",
      title: "لنبدأ العمل معاً في مشروعك الهندسي القادم",
      subtitle: "مستعد لدعم المكاتب الاستشارية الألمانية كشريك هندسي حر موثوق في تصميم الطرق، نمذجة BIM، وأتمتة العمليات.",
      emailLabel: "البريد الإلكتروني",
      emailValue: "heshamelshamy2000@gmail.com",
      phoneLabel: "الهاتف",
      phoneValue: "+49 178 2362766",
      locationLabel: "المقر الرئيسي",
      locationValue: "دورتموند، شمال الراين-وستفاليا، ألمانيا",
      copyEmailBtn: "نسخ البريد الإلكتروني",
      copiedNotice: "تم النسخ بنجاح!",
      openMailClient: "إرسال رسالة",
      linkedInTitle: "التواصل عبر LinkedIn",
      availabilityNotice: "متاح فوراً لبدء العمل في المشاريع (عن بُعد / حضوري في NRW)",
      legalLink: "بيانات الموقع (Impressum)",
      privacyLink: "سياسة الخصوصية"
    },

    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "استشارات هندسية حرة ونمذجة BIM وفق المعايير الألمانية المعتمدة."
    },

    legal: {
      title: "البيانات القانونية (Impressum)",
      providerTitle: "معلومات وفقاً للمادة 5 من قانون الخدمات الرقمية الألماني (DDG)",
      name: "هشام الشامي (M.Sc. Bauingenieurwesen)",
      address: "Overhoffstraße 177, 44149 Dortmund, Germany",
      contact: "البريد: heshamelshamy2000@gmail.com | هاتف: 2362766 178 49+",
      responsible: "المسؤول عن المحتوى: هشام الشامي",
      disclaimer: "محتويات هذا الموقع مخصصة لعرض الخدمات المهنية والاستشارية المستقلة في مجال الهندسة المدنية.",
      closeBtn: "إغلاق"
    }
  }
};

// Make accessible globally
if (typeof window !== 'undefined') {
  window.portfolioTranslations = portfolioTranslations;
}
