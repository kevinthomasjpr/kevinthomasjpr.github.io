/*
 * All text on the site, in English and German.
 * Edit wording here; the layout lives in index.html and css/style.css.
 * Every fact comes from the candidate profile. Do not add numbers that are not in it.
 * Tip: use a non-breaking space between a number and its unit (69.1 %) so they never split across lines.
 */
window.SITE_CONTENT = {
  links: {
    email: "kevin.thomas.jpr@gmail.com",
    linkedin: "https://www.linkedin.com/in/kevin-thomas-j",
    github: "https://github.com/jkevinthomas4321"
  },

  en: {
    ui: {
      title: "Kevin Thomas James Paul Raj · Engineering Student",
      cvFile: "",
      brand: { role: "Testing · Data Analysis · Simulation" },
      nav: { work: "Work", why: "Why me", info: "Info", cv: "CV", lang: "Switch to German" },
      hero: {
        kicker: "B.E. Mechanical Engineering · M.Sc. student at TU Berlin",
        title: "Engineering student with a curiosity for developing <em>better products with data and AI.</em>",
        sub: "Based in Berlin. I collect and analyse data, understand and model how systems behave, and use the results to support engineering design decisions.",
        cta1: "See projects",
        cta2: "Download CV",
        status: "Open to working-student and Master’s thesis positions"
      },
      chart: {
        file: "plant_2 / daily_output",
        tag: "case study",
        expected: "Expected output",
        measured: "Measured output",
        note: "Inverters switching off together at midday: about 90 % of the loss",
        caption: "Schematic of the Plant 2 finding: expected vs. measured output on a sunny day.",
        kpi1v: "69.1 %", kpi1l: "Performance ratio, Plant 2 (Plant 1: 88.1 %)",
        kpi2v: "EUR 581k", kpi2l: "per year at stake",
        kpi3v: "R² 0.94", kpi3l: "Model check on unseen days (Plant 1)"
      },
      work: {
        title: "Selected work",
        sub: "Personal projects. Open a card for the full story: the question, the method and what came out of it."
      },
      card: { open: "Read case study" },
      sheet: {
        back: "Back", overview: "The question", approach: "How I did it",
        results: "Results", findings: "Findings", stack: "Tools",
        note: "Note", code: "View the code on GitHub"
      },
      info: {
        title: "Info",
        aboutTitle: "About",
        about: "I am an M.Sc. student in Process, Energy and Environmental Systems Engineering at TU Berlin and hold a bachelor’s degree in Mechanical Engineering. Before my Master’s, I spent two years in Quality Assurance at Mitsogo Technologies, validating a software product against its expected behaviour and analysing customer data to find the root causes of issues. Today I combine data analysis in Python and SQL with system modelling in MATLAB, Simulink and Simscape. My approach is the same in every project: define the question, check the data, model the system and explain the cause. I am looking for a working-student position or a Master’s thesis where these skills support real engineering decisions.",
        approachTitle: "How I work",
        expTitle: "Experience & education",
        skillsTitle: "Skills",
        langTitle: "Languages",
        certTitle: "Certifications",
        pubTitle: "Publications",
        verify: "Verify"
      },
      contact: {
        title: "Let’s <em>talk.</em>",
        sub: "I’m looking for a working-student position or a Master’s thesis where I work with data from real machines, plants and test rigs.",
        email: "Email me",
        permit: "Based in Berlin · Student residence permit valid until 2029"
      },
      footer: { made: "Built with plain HTML, CSS and JavaScript." },
      why: {
        title: "Why <em>me</em>",
        hint: "Five reasons to work with me. Peel off a note to see each one.",
        see: "See why",
        reset: "Stick them back",
        noteLabel: "Reveal reason",
        peel: "Click to peel",
        peelTouch: "Tap to peel",
        lookingLabel: "What I’m looking for:",
        looking: "a curious team where I can <em>learn as much as possible</em>, working on real systems."
      },
      mail: { subject: "Contact via your website", nothing: "No email app opened?", copy: "Copy address", copied: "Copied", gmail: "Open in Gmail" },
      viz: { inverters: "44 inverters", load: "heat load", speed: "pump speed", limit: "45 °C limit", margin: "margin", time: "fast-charge time" }
    },

    reasons: [
      { n: "01", icon: "path", word: "Independent", target: "work",
        proof: "I started five projects on my own and took each one from the first question to a published result on GitHub." },
      { n: "02", icon: "search", word: "Curious", target: "solar",
        proof: "I don’t stop at “it underperforms”. In my solar analysis I traced about 90 % of a plant’s loss to one cause: inverters switching off together at midday." },
      { n: "03", icon: "bulb", word: "Creative & hands‑on", target: "vocab",
        proof: "I like turning ideas into things people can use: a German vocabulary game I built from scratch and later rebuilt with Claude Code, a jet engine assembly in PTC Creo, and a 3D-printed pill-reminder prototype built as a team." },
      { n: "04", icon: "check", word: "Engineering mindset", target: "ev",
        proof: "I check before I trust. Validation caught a 10× scaling error in solar data and a Kelvin/Celsius bug that first put my EV battery at 315 °C." },
      { n: "05", icon: "case", word: "Industry experience", target: "exp:mitsogo",
        proof: "Two years in Quality Assurance at a software company, with deadlines, a team and real customer data, and a promotion to the core root-cause analysis team." }
    ],

    approach: [
      { n: "01", t: "Question first", d: "Define what “performing as expected” means before touching the data, then write one query or test per question." },
      { n: "02", t: "Model & validate", d: "Build a physics-based model and check it against hand calculations and data it has not seen." },
      { n: "03", t: "Find the cause", d: "Trace each deviation back to a root cause and turn it into a recommended action with a number attached." }
    ],

    timeline: [
      {
        period: "2024 – now", title: "M.Sc. Process, Energy and Environmental Systems Engineering",
        org: "TU Berlin", place: "Berlin",
        points: ["Thermodynamics, heat transfer, dynamic modelling in MATLAB/Simulink/Simscape, data science for energy system modelling, refrigeration."]
      },
      {
        id: "mitsogo", period: "2022 – 2024", title: "Software Engineer, Quality Assurance",
        org: "Mitsogo Technologies", place: "Chennai, India",
        points: [
          "Learned the mobile device management product end to end and turned features under development into flowcharts and visual maps, making them easier for the team to understand and test.",
          "Built and automated data-driven validation pipelines that compare system behaviour against expected performance.",
          "Promoted to the core root-cause analysis team: mapped the links between features and analysed customer data to show which features caused the most issues.",
          "Compared new feature versions and competitor products to identify improvements, and improved the onboarding material so new team members could learn the product more easily."
        ]
      },
      {
        period: "2022", title: "Research Assistant",
        org: "SSN College of Engineering", place: "Chennai, India",
        points: ["Experimental testing and analysis for two peer-reviewed papers on shape memory alloys."]
      },
      {
        period: "2018 – 2022", title: "B.E. Mechanical Engineering",
        org: "SSN College of Engineering", place: "Chennai, India",
        points: [
          "CGPA 9.35/10.",
          "Industrial training at Faurecia India (production workflow analysis) and Flowserve India Controls."
        ]
      }
    ],

    skills: [
      { name: "Data & analysis", items: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "matplotlib", "SQL", "PostgreSQL", "Power BI", "Tableau", "Excel"] },
      { name: "Modelling & simulation", items: ["MATLAB", "Simulink", "Simscape", "System identification", "Model validation", "Time-series analysis"] },
      { name: "Engineering & CAD", items: ["Heat transfer", "Thermodynamics", "SolidWorks", "PTC Creo", "Root-cause analysis"] },
      { name: "Tools", items: ["Git", "pytest", "Jira", "ClickUp", "Power Apps", "Claude Code"] }
    ],

    languages: [
      { name: "German", level: "B2" },
      { name: "English", level: "C1 (IELTS)" },
      { name: "Tamil", level: "Native" }
    ],

    projects: [
      {
        id: "solar",
        title: "Solar + Battery Performance Monitor",
        meta: "Personal project · Oct 2026",
        tagline: "Two 33 MWp solar plants, 44 inverters and 34 Li-ion cells: from raw operating data to a root cause worth EUR 581k a year.",
        tags: ["Python", "PostgreSQL", "SQL", "scikit-learn", "Power BI"],
        overview: "Plant 2 reached a performance ratio of 69 % while its sister plant reached 88 %. The goal: find out why, put a number on it and recommend what to do, using only the operating data.",
        approach: [
          "Defined the questions first, then wrote one query per question.",
          "Loaded 136,476 inverter readings (15-minute data) into PostgreSQL and validated them: missing intervals, frozen sensors, impossible values, scaling errors, counter integrity. Suspect data was flagged, not deleted.",
          "Built a physics-based expected-output model from irradiance and module temperature and cross-checked it with a regression on unseen days (R² 0.94 for Plant 1).",
          "Quantified downtime, underperformance and clipping losses in MWh and EUR per year, then traced the causes with a 5-Why analysis.",
          "Estimated battery state of health, fade trends and end of life on NASA aging data, and built a Power BI dashboard."
        ],
        results: [
          { v: "69.1 % vs 88.1 %", l: "Performance ratio, Plant 2 vs Plant 1" },
          { v: "EUR 581k", l: "per year at stake at Plant 2" },
          { v: "≈ 90 %", l: "of the loss from inverters switching off together at midday" },
          { v: "470 MWh", l: "of overstated downtime prevented by data validation" }
        ],
        findings: [
          "Data validation caught a 10x DC power scaling error at Plant 1.",
          "Six inverters (four at Plant 2, two at Plant 1) ran at a constant 81–97 % of their neighbours: disconnected strings, found from data alone.",
          "Heat costs about 9 % of the energy; the temperature coefficient (−0.49 %/°C, Plant 1) was estimated from the data."
        ],
        note: "Built on public Kaggle and NASA datasets. Root causes are inferred from operating data, not confirmed on site.",
        repo: "https://github.com/jkevinthomas4321/Solar_Battery_Performance_Monitor"
      },
      {
        id: "cooling",
        title: "CPU Liquid Cooling Optimizer",
        meta: "Personal project · Aug 2026, ongoing",
        tagline: "A Simscape cooling loop driven from Python: 96 simulations to find the lowest-power pump speed that keeps the chip safe.",
        tags: ["MATLAB", "Simulink", "Simscape", "Python", "pytest"],
        overview: "A pump at full speed wastes energy; a pump that runs too slowly lets the chip overheat. The question: for each heat load, what is the slowest pump speed that is still thermally safe?",
        approach: [
          "Modelled the loop in Simscape: pump, coolant loop, cold plate and CPU thermal mass.",
          "Validated the governing relationships against hand calculations.",
          "Wrote a Python package that drives the model through the MATLAB Engine: 12 heat loads (40–500 W) × 8 pump speeds, with a 95 °C CPU limit.",
          "Analysed the sweep with pandas and matplotlib and covered the code with pytest."
        ],
        results: [
          { v: "96", l: "simulation runs, fully automated" },
          { v: "12 × 8", l: "heat loads × pump speeds" },
          { v: "200×+", l: "rise in pump power needed to stay safe, from 40–150 W to 450 W heat load" }
        ],
        findings: [],
        note: "Heat load is constant per run; time-varying workloads are planned. The Python code was restructured with Claude Code, as disclosed in the README.",
        repo: "https://github.com/jkevinthomas4321/CPU-cooling-optimizer"
      },
      {
        id: "ev",
        title: "EV Battery Thermal Model",
        meta: "Personal project · Aug – Sep 2026",
        tagline: "How hot does a Tesla Model 3 pack get during a real fast charge, and how close does it come to the 45 °C limit?",
        tags: ["MATLAB", "Simulink", "Simscape"],
        overview: "Fast charging pushes high currents through the pack, and the resistive heat has to go somewhere. I modelled the pack’s thermal response to a real fast-charging curve.",
        approach: [
          "Built a lumped-capacitance thermal network in Simscape.",
          "Drove it with a digitised real Tesla V3 Supercharger curve (250 kW), converted to a time-varying I²R heat source.",
          "Swept the charge rate from 0.5× to 2.0× to find where the 45 °C limit is crossed.",
          "Ran a sensitivity study on specific heat capacity and internal resistance (±20 %).",
          "Validated the model with zero-input and step-response checks and hand calculations."
        ],
        results: [
          { v: "42.10 °C", l: "peak pack temperature on the real charging curve" },
          { v: "1.08×", l: "charge rate at which the 45 °C limit is crossed" },
          { v: "≈ 13 °C", l: "swing from the specific-heat assumption, more than double a ±20 % resistance error" }
        ],
        findings: [
          "A Kelvin/Celsius unit bug, which first gave a pack temperature of 315 °C, was caught because it did not match the hand-calculated range of about 20–45 °C."
        ],
        note: "Passive air cooling and a fixed nominal voltage are assumed. The pack’s specific heat is not publicly sourced, so two literature values were tested.",
        repo: "https://github.com/jkevinthomas4321/EV-battery-thermal-behavior-during-fast-charging"
      },
      {
        id: "vocab",
        title: "Wortschatz: German Vocabulary Game",
        meta: "Personal project · 2025, rebuilt Oct 2026",
        tagline: "A vocabulary game where a word only enters your diary once you have proven you know it. Built from scratch in Streamlit, then rebuilt with Claude Code.",
        tags: ["Python", "pandas", "NiceGUI", "pytest", "Claude Code"],
        overview: "While learning German I wanted a game that rewards proof, not effort. I built the first version from scratch in Streamlit in 2025. In 2026 I rebuilt it with Claude Code on NiceGUI: the same game logic, in a more interactive interface with its own learning statistics.",
        approach: [
          "Designed the rules: a word enters the diary only after every question about it is answered correctly. Missed words wait in a second-chance list until a re-test is passed.",
          "Four modes (Learn, Test, Second chance, Diary) with flip cards and typed answers in both directions. Nouns need their article, verbs their three forms.",
          "Every answer is logged, and a Progress page analyses the log with pandas, with 95 % confidence intervals and plain-language findings.",
          "For the rebuild, the game rules live in one small module with no interface code, so they are tested without a browser."
        ],
        results: [
          { v: "195", l: "automated tests, including a simulated browser playing the real app" },
          { v: "515", l: "common German words in the bundled word list" },
          { v: "4", l: "game modes: Learn, Test, Second chance, Diary" }
        ],
        findings: [],
        note: "Runs locally on your own computer. The 2026 version was designed and implemented with Claude Code, as stated in the README. The first Streamlit version is kept on its own branch.",
        repo: "https://github.com/jkevinthomas4321/My_German_Vocab_Game"
      },
      {
        id: "cad",
        title: "Jet Engine CAD Assembly",
        meta: "Personal project · Sep 2025",
        tagline: "Engine components and their assembly architecture, modelled in PTC Creo to understand how a complex machine fits together.",
        tags: ["PTC Creo", "CAD", "Assembly"],
        overview: "Reading about a jet engine is one thing; deciding where every part sits is another. I modelled the engine components and assembled them to understand the architecture of a complex mechanical system.",
        approach: [
          "Modelled the individual engine components in PTC Creo.",
          "Built the assembly and its architecture from those parts.",
          "Published the assembly together with other Creo parts and assemblies."
        ],
        results: [],
        findings: [],
        note: "",
        repo: "https://github.com/jkevinthomas4321/CAD_Designs"
      }
    ]
  },

  de: {
    ui: {
      title: "Kevin Thomas James Paul Raj · Ingenieurstudent",
      cvFile: "",
      brand: { role: "Test · Datenanalyse · Simulation" },
      nav: { work: "Projekte", why: "Warum ich", info: "Info", cv: "Lebenslauf", lang: "Auf Englisch umschalten" },
      hero: {
        kicker: "B.E. Maschinenbau · M.Sc.-Student an der TU Berlin",
        title: "Ingenieurstudent mit Neugier darauf, <em>mit Daten und KI bessere Produkte</em> zu entwickeln.",
        sub: "Wohnhaft in Berlin. Ich erhebe und analysiere Daten, verstehe und modelliere das Verhalten von Systemen und unterstütze mit den Ergebnissen technische Designentscheidungen.",
        cta1: "Projekte ansehen",
        cta2: "Lebenslauf herunterladen",
        status: "Offen für Werkstudentenstellen und Masterarbeiten"
      },
      chart: {
        file: "anlage_2 / tagesertrag",
        tag: "Fallstudie",
        expected: "Erwartete Leistung",
        measured: "Gemessene Leistung",
        note: "Gleichzeitige Abschaltung der Wechselrichter zur Mittagszeit: rund 90 % des Verlusts",
        caption: "Schema des Befunds in Anlage 2: erwartete und gemessene Leistung an einem sonnigen Tag.",
        kpi1v: "69,1 %", kpi1l: "Performance Ratio, Anlage 2 (Anlage 1: 88,1 %)",
        kpi2v: "581 Tsd. €", kpi2l: "Verlustpotenzial pro Jahr",
        kpi3v: "R² 0,94", kpi3l: "Modellprüfung an unbekannten Tagen (Anlage 1)"
      },
      work: {
        title: "Ausgewählte Projekte",
        sub: "Eigene Projekte. Öffnen Sie eine Karte für die ganze Geschichte: die Frage, die Methode und das Ergebnis."
      },
      card: { open: "Zur Fallstudie" },
      sheet: {
        back: "Zurück", overview: "Die Frage", approach: "Vorgehen",
        results: "Ergebnisse", findings: "Befunde", stack: "Werkzeuge",
        note: "Hinweis", code: "Code auf GitHub ansehen"
      },
      info: {
        title: "Info",
        aboutTitle: "Über mich",
        about: "Ich studiere im Master Process, Energy and Environmental Systems Engineering an der TU Berlin und habe einen Bachelor in Maschinenbau. Vor dem Master war ich zwei Jahre in der Qualitätssicherung bei Mitsogo Technologies: Ich habe ein Softwareprodukt gegen sein erwartetes Verhalten validiert und Kundendaten ausgewertet, um die Ursachen von Fehlern zu finden. Heute verbinde ich Datenanalyse in Python und SQL mit Systemmodellierung in MATLAB, Simulink und Simscape. Mein Vorgehen ist in jedem Projekt gleich: die Frage klären, die Daten prüfen, das System modellieren und die Ursache erklären. Ich suche eine Werkstudentenstelle oder eine Masterarbeit, in der diese Fähigkeiten echte technische Entscheidungen unterstützen.",
        approachTitle: "Wie ich arbeite",
        expTitle: "Erfahrung & Ausbildung",
        skillsTitle: "Kenntnisse",
        langTitle: "Sprachen",
        certTitle: "Zertifikate",
        pubTitle: "Veröffentlichungen",
        verify: "Prüfen"
      },
      contact: {
        title: "Lassen Sie uns <em>sprechen.</em>",
        sub: "Ich suche eine Werkstudentenstelle oder eine Masterarbeit, in der ich mit Daten echter Maschinen, Anlagen und Prüfstände arbeite.",
        email: "E-Mail schreiben",
        permit: "Wohnhaft in Berlin · Aufenthaltserlaubnis zum Studium bis 2029"
      },
      footer: { made: "Gebaut mit HTML, CSS und JavaScript." },
      why: {
        title: "Warum <em>ich</em>",
        hint: "Fünf Gründe, mit mir zu arbeiten. Ziehen Sie einen Zettel ab, um ihn zu sehen.",
        see: "Beleg ansehen",
        reset: "Zettel wieder aufkleben",
        noteLabel: "Grund aufdecken",
        peel: "Zum Abziehen klicken",
        peelTouch: "Zum Abziehen tippen",
        lookingLabel: "Was ich suche:",
        looking: "ein neugieriges Team, in dem ich <em>so viel wie möglich lernen</em> kann, an echten Systemen."
      },
      mail: { subject: "Kontakt über Ihre Website", nothing: "Kein E-Mail-Programm geöffnet?", copy: "Adresse kopieren", copied: "Kopiert", gmail: "In Gmail öffnen" },
      viz: { inverters: "44 Wechselrichter", load: "Wärmelast", speed: "Pumpendrehzahl", limit: "Grenze 45 °C", margin: "Abstand", time: "Ladezeit" }
    },

    reasons: [
      { n: "01", icon: "path", word: "Selbstständig", target: "work",
        proof: "Ich habe fünf Projekte aus eigenem Antrieb begonnen und jedes von der ersten Frage bis zum veröffentlichten Ergebnis auf GitHub umgesetzt." },
      { n: "02", icon: "search", word: "Neugierig", target: "solar",
        proof: "Bei „läuft schlechter“ höre ich nicht auf. In meiner Solaranalyse habe ich rund 90 % des Verlusts einer Anlage auf eine Ursache zurückgeführt: Wechselrichter, die mittags gleichzeitig abschalten." },
      { n: "03", icon: "bulb", word: "Kreativ & praktisch", target: "vocab",
        proof: "Ich mache aus Ideen gern etwas Nutzbares: ein Deutsch-Vokabelspiel, von Grund auf gebaut und später mit Claude Code neu aufgebaut, eine Triebwerksbaugruppe in PTC Creo und einen 3D-gedruckten Prototyp einer Tablettenerinnerung, im Team gebaut." },
      { n: "04", icon: "check", word: "Ingenieursdenken", target: "ev",
        proof: "Ich prüfe, bevor ich vertraue. Die Validierung fand einen Skalierungsfehler um den Faktor 10 in Solardaten und einen Kelvin/Celsius-Fehler, durch den meine EV-Batterie zuerst 315 °C erreichte." },
      { n: "05", icon: "case", word: "Industrieerfahrung", target: "exp:mitsogo",
        proof: "Zwei Jahre Qualitätssicherung in einem Softwareunternehmen, mit Deadlines, Team und echten Kundendaten, und eine Beförderung ins Kernteam für Ursachenanalyse." }
    ],

    approach: [
      { n: "01", t: "Erst die Frage", d: "Festlegen, was „läuft wie erwartet“ bedeutet, bevor ich die Daten anfasse, und dann pro Frage eine Abfrage oder einen Test schreiben." },
      { n: "02", t: "Modellieren & validieren", d: "Ein physikalisches Modell aufbauen und gegen Handrechnungen und unbekannte Daten prüfen." },
      { n: "03", t: "Ursache finden", d: "Jede Abweichung auf ihre Ursache zurückführen und daraus eine bezifferte Maßnahme ableiten." }
    ],

    timeline: [
      {
        period: "seit 2024", title: "M.Sc. Process, Energy and Environmental Systems Engineering",
        org: "TU Berlin", place: "Berlin",
        points: ["Thermodynamik, Wärmeübertragung, dynamische Modellierung in MATLAB/Simulink/Simscape, Data Science für die Energiesystemmodellierung, Kältetechnik."]
      },
      {
        id: "mitsogo", period: "2022 – 2024", title: "Software Engineer, Qualitätssicherung",
        org: "Mitsogo Technologies", place: "Chennai, Indien",
        points: [
          "Das Mobile-Device-Management-Produkt vollständig erarbeitet und Funktionen in der Entwicklung als Flussdiagramme und visuelle Übersichten aufbereitet, damit das Team sie leichter verstehen und testen konnte.",
          "Datengetriebene Validierungspipelines aufgebaut und automatisiert, die das Systemverhalten mit der erwarteten Leistung vergleichen.",
          "Beförderung ins Kernteam für Ursachenanalyse: Zusammenhänge zwischen Funktionen abgebildet und Kundendaten ausgewertet, um zu zeigen, welche Funktionen die meisten Fehler verursachen.",
          "Neue Funktionsversionen und Konkurrenzprodukte verglichen, um Verbesserungen zu finden, und die Einarbeitungsunterlagen verbessert, damit neue Teammitglieder das Produkt leichter lernen konnten."
        ]
      },
      {
        period: "2022", title: "Forschungsassistent",
        org: "SSN College of Engineering", place: "Chennai, Indien",
        points: ["Experimentelle Versuche und Auswertung für zwei begutachtete Veröffentlichungen zu Formgedächtnislegierungen."]
      },
      {
        period: "2018 – 2022", title: "B.E. Maschinenbau",
        org: "SSN College of Engineering", place: "Chennai, Indien",
        points: [
          "Gesamtnote 9,35/10.",
          "Industriepraktika bei Faurecia India (Analyse von Produktionsabläufen) und Flowserve India Controls."
        ]
      }
    ],

    skills: [
      { name: "Daten & Analyse", items: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "matplotlib", "SQL", "PostgreSQL", "Power BI", "Tableau", "Excel"] },
      { name: "Modellierung & Simulation", items: ["MATLAB", "Simulink", "Simscape", "Systemidentifikation", "Modellvalidierung", "Zeitreihenanalyse"] },
      { name: "Konstruktion & Grundlagen", items: ["Wärmeübertragung", "Thermodynamik", "SolidWorks", "PTC Creo", "Ursachenanalyse"] },
      { name: "Werkzeuge", items: ["Git", "pytest", "Jira", "ClickUp", "Power Apps", "Claude Code"] }
    ],

    languages: [
      { name: "Deutsch", level: "B2" },
      { name: "Englisch", level: "C1 (IELTS)" },
      { name: "Tamil", level: "Muttersprache" }
    ],

    projects: [
      {
        id: "solar",
        title: "Solar + Battery Performance Monitor",
        meta: "Eigenes Projekt · Okt. 2026",
        tagline: "Zwei Solarparks mit je 33 MWp, 44 Wechselrichter und 34 Li-Ionen-Zellen: von rohen Betriebsdaten zu einer Ursache im Wert von 581 Tsd. € pro Jahr.",
        tags: ["Python", "PostgreSQL", "SQL", "scikit-learn", "Power BI"],
        overview: "Anlage 2 erreichte eine Performance Ratio von 69 %, die baugleiche Schwesteranlage 88 %. Ziel: herausfinden warum, den Verlust beziffern und eine Maßnahme empfehlen, allein auf Basis der Betriebsdaten.",
        approach: [
          "Zuerst die Fragen definiert, dann pro Frage eine Abfrage geschrieben.",
          "136.476 Wechselrichter-Messwerte (15-Minuten-Daten) in PostgreSQL geladen und validiert: fehlende Intervalle, eingefrorene Sensoren, unmögliche Werte, Skalierungsfehler, Zählerplausibilität. Auffällige Daten wurden markiert, nicht gelöscht.",
          "Ein physikalisches Modell der erwarteten Leistung aus Einstrahlung und Modultemperatur aufgebaut und mit einer Regression an unbekannten Tagen gegengeprüft (R² 0,94 für Anlage 1).",
          "Verluste durch Ausfälle, Minderleistung und Clipping in MWh und € pro Jahr beziffert und die Ursachen mit einer 5-Why-Analyse verfolgt.",
          "Batterie-Gesundheitszustand (SoH), Alterungsverlauf und Lebensende anhand von NASA-Alterungsdaten geschätzt und ein Power-BI-Dashboard gebaut."
        ],
        results: [
          { v: "69,1 % vs. 88,1 %", l: "Performance Ratio, Anlage 2 vs. Anlage 1" },
          { v: "581 Tsd. €", l: "Verlustpotenzial pro Jahr in Anlage 2" },
          { v: "≈ 90 %", l: "des Verlusts durch gleichzeitige Abschaltung der Wechselrichter zur Mittagszeit" },
          { v: "470 MWh", l: "überschätzte Ausfallzeit durch Datenvalidierung vermieden" }
        ],
        findings: [
          "Die Datenvalidierung deckte in Anlage 1 einen Skalierungsfehler der DC-Leistung um den Faktor 10 auf.",
          "Sechs Wechselrichter (vier in Anlage 2, zwei in Anlage 1) liefen konstant bei 81–97 % ihrer Nachbarn: getrennte Strings, allein aus den Daten erkannt.",
          "Wärme kostet rund 9 % der Energie; der Temperaturkoeffizient (−0,49 %/°C, Anlage 1) wurde aus den Daten geschätzt."
        ],
        note: "Basiert auf öffentlichen Kaggle- und NASA-Datensätzen. Die Ursachen sind aus Betriebsdaten abgeleitet, nicht vor Ort bestätigt.",
        repo: "https://github.com/jkevinthomas4321/Solar_Battery_Performance_Monitor"
      },
      {
        id: "cooling",
        title: "CPU Liquid Cooling Optimizer",
        meta: "Eigenes Projekt · Aug. 2026, laufend",
        tagline: "Ein Simscape-Kühlkreislauf, gesteuert aus Python: 96 Simulationen, um die sparsamste Pumpendrehzahl zu finden, die den Chip sicher kühlt.",
        tags: ["MATLAB", "Simulink", "Simscape", "Python", "pytest"],
        overview: "Eine Pumpe auf voller Drehzahl verschwendet Energie, eine zu langsame lässt den Chip überhitzen. Die Frage: Welche ist für jede Wärmelast die niedrigste Drehzahl, die thermisch noch sicher ist?",
        approach: [
          "Den Kreislauf in Simscape modelliert: Pumpe, Kühlmittelkreislauf, Kühlplatte und thermische Masse der CPU.",
          "Die maßgeblichen Zusammenhänge mit Handrechnungen validiert.",
          "Ein Python-Paket geschrieben, das das Modell über die MATLAB Engine steuert: 12 Wärmelasten (40–500 W) × 8 Pumpendrehzahlen, mit 95 °C als CPU-Grenze.",
          "Den Parameter-Sweep mit pandas und matplotlib ausgewertet und den Code mit pytest abgesichert."
        ],
        results: [
          { v: "96", l: "Simulationsläufe, vollständig automatisiert" },
          { v: "12 × 8", l: "Wärmelasten × Pumpendrehzahlen" },
          { v: "200×+", l: "Anstieg der nötigen Pumpenleistung, von 40–150 W auf 450 W Wärmelast" }
        ],
        findings: [],
        note: "Die Wärmelast ist pro Lauf konstant; zeitlich veränderliche Lasten sind geplant. Der Python-Code wurde mit Claude Code umstrukturiert, wie im README angegeben.",
        repo: "https://github.com/jkevinthomas4321/CPU-cooling-optimizer"
      },
      {
        id: "ev",
        title: "EV Battery Thermal Model",
        meta: "Eigenes Projekt · Aug. – Sep. 2026",
        tagline: "Wie heiß wird das Batteriepack eines Tesla Model 3 bei einer echten Schnellladung, und wie nah kommt es an die Grenze von 45 °C?",
        tags: ["MATLAB", "Simulink", "Simscape"],
        overview: "Schnellladen treibt hohe Ströme durch das Pack, und die Verlustwärme muss irgendwohin. Ich habe das thermische Verhalten des Packs für eine reale Schnellladekurve modelliert.",
        approach: [
          "Ein thermisches Netzwerk mit konzentrierten Kapazitäten in Simscape aufgebaut.",
          "Mit einer digitalisierten realen Ladekurve eines Tesla V3 Superchargers (250 kW) als zeitabhängige I²R-Wärmequelle angeregt.",
          "Die Laderate von 0,5× bis 2,0× variiert, um zu finden, wo die Grenze von 45 °C überschritten wird.",
          "Eine Sensitivitätsstudie zu spezifischer Wärmekapazität und Innenwiderstand (±20 %) durchgeführt.",
          "Das Modell mit Nulleingangs- und Sprungantwort-Tests sowie Handrechnungen validiert."
        ],
        results: [
          { v: "42,10 °C", l: "Spitzentemperatur des Packs bei der realen Ladekurve" },
          { v: "1,08×", l: "Laderate, ab der die Grenze von 45 °C überschritten wird" },
          { v: "≈ 13 °C", l: "Spanne durch die Annahme zur Wärmekapazität, mehr als doppelt so viel wie ±20 % Widerstandsfehler" }
        ],
        findings: [
          "Ein Kelvin/Celsius-Fehler, der zuerst eine Packtemperatur von 315 °C ergab, fiel auf, weil er nicht zum handgerechneten Bereich von etwa 20–45 °C passte."
        ],
        note: "Angenommen sind passive Luftkühlung und eine feste Nennspannung. Die Wärmekapazität des Packs ist nicht öffentlich belegt, daher wurden zwei Literaturwerte getestet.",
        repo: "https://github.com/jkevinthomas4321/EV-battery-thermal-behavior-during-fast-charging"
      },
      {
        id: "vocab",
        title: "Wortschatz: Deutsch-Vokabelspiel",
        meta: "Eigenes Projekt · 2025, neu gebaut Okt. 2026",
        tagline: "Ein Vokabelspiel, in dem ein Wort erst ins Tagebuch kommt, wenn Sie bewiesen haben, dass Sie es können. Von Grund auf in Streamlit gebaut, dann mit Claude Code neu aufgebaut.",
        tags: ["Python", "pandas", "NiceGUI", "pytest", "Claude Code"],
        overview: "Beim Deutschlernen wollte ich ein Spiel, das Können belohnt, nicht Aufwand. Die erste Version habe ich 2025 von Grund auf in Streamlit gebaut. 2026 habe ich sie mit Claude Code auf NiceGUI neu aufgebaut: dieselbe Spiellogik, in einer interaktiveren Oberfläche mit eigener Lernstatistik.",
        approach: [
          "Die Regeln entworfen: Ein Wort kommt erst ins Tagebuch, wenn jede Frage dazu richtig beantwortet ist. Verpasste Wörter warten in einer Liste für die zweite Chance, bis ein Wiederholungstest bestanden ist.",
          "Vier Modi (Lernen, Test, Zweite Chance, Tagebuch) mit Lernkarten und getippten Antworten in beide Richtungen. Nomen brauchen ihren Artikel, Verben ihre drei Formen.",
          "Jede Antwort wird protokolliert, und eine Fortschrittsseite wertet das Protokoll mit pandas aus, mit 95- %-Konfidenzintervallen und verständlichen Befunden.",
          "Beim Neuaufbau liegen die Spielregeln in einem kleinen Modul ohne Oberflächencode, damit sie ohne Browser getestet werden."
        ],
        results: [
          { v: "195", l: "automatisierte Tests, auch mit einem simulierten Browser, der die echte App spielt" },
          { v: "515", l: "häufige deutsche Wörter in der mitgelieferten Wortliste" },
          { v: "4", l: "Spielmodi: Lernen, Test, Zweite Chance, Tagebuch" }
        ],
        findings: [],
        note: "Läuft lokal auf dem eigenen Computer. Die Version von 2026 wurde mit Claude Code entworfen und umgesetzt, wie im README angegeben. Die erste Streamlit-Version liegt in einem eigenen Branch.",
        repo: "https://github.com/jkevinthomas4321/My_German_Vocab_Game"
      },
      {
        id: "cad",
        title: "Jet Engine CAD Assembly",
        meta: "Eigenes Projekt · Sep. 2025",
        tagline: "Triebwerkskomponenten und ihre Baugruppenstruktur, in PTC Creo modelliert, um zu verstehen, wie eine komplexe Maschine zusammenpasst.",
        tags: ["PTC Creo", "CAD", "Baugruppe"],
        overview: "Über ein Strahltriebwerk zu lesen ist das eine, für jedes Teil zu entscheiden, wo es sitzt, das andere. Ich habe die Komponenten modelliert und zusammengebaut, um die Architektur eines komplexen mechanischen Systems zu verstehen.",
        approach: [
          "Die einzelnen Triebwerkskomponenten in PTC Creo modelliert.",
          "Daraus die Baugruppe und ihre Struktur aufgebaut.",
          "Die Baugruppe zusammen mit weiteren Creo-Teilen und -Baugruppen veröffentlicht."
        ],
        results: [],
        findings: [],
        note: "",
        repo: "https://github.com/jkevinthomas4321/CAD_Designs"
      }
    ]
  },

  /* Same in both languages */
  certifications: [
    { name: "SOLIDWORKS Certified Associate (CSWA)", year: "2026", url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ALTRMWKS4C" },
    { name: "SOLIDWORKS Additive Manufacturing Associate", year: "2026", url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9NK56MC7GH" }
  ],
  publications: [
    {
      title: "Effect of Ni and Mn additions on the damping characteristics of Cu-Al-Fe based High Temperature Shape Memory Alloys",
      venue: "Journal of Alloys and Compounds, 924 (2022)",
      url: "https://doi.org/10.1016/j.jallcom.2022.166258"
    },
    {
      title: "An experimental analysis on the influence of CO2 laser machining parameters on a copper-based shape memory alloy",
      venue: "Optics & Laser Technology, 153 (2022)",
      url: "https://doi.org/10.1016/j.optlastec.2022.108210"
    }
  ]
};
