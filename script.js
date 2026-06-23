// ============================================================
//  TRANSLATIONS — FR / EN / ZH
// ============================================================
const translations = {
  fr: {
    page_title: 'Lin Huang Christophe — Portfolio BUT Informatique S4',

    nav_presentation: 'Présentation',
    nav_competences:  'Compétences',
    nav_projets:      'Projets',
    nav_stage:        'Stage',
    nav_objectifs:    'Objectifs',
    nav_contact:      'Contact',
    nav_games:        '🎮 Jeux',

    hero_tag:      'Portfolio S4 — BUT Informatique · IUT Villetaneuse',
    hero_name:     'Lin Huang <span class="accent">Christophe</span>',
    hero_subtitle: 'Développeur Back-End · Automatisation · E-commerce & Logistique',
    hero_cta:      'Découvrir le portfolio',
    hero_cv:       'Télécharger CV',
    hero_code:     '<span class="kw">class</span> <span class="cls">Christophe</span>:\n  formation  = <span class="str">"BUT Informatique S4"</span>\n  école      = <span class="str">"IUT Villetaneuse"</span>\n  ambition   = <span class="str">"Ingénieur Cnam (alternance)"</span>\n  spécialité = <span class="str">"Développement Back-End"</span>\n  passion    = <span class="str">"Automatisation des flux"</span>\n  futur      = <span class="str">"Cybersécurité"</span>',

    s01_title:   'Présentation personnelle',
    s01_sub:     'Parcours · Projet professionnel · Évolution BUT 1 → BUT 2',
    s01_c1_title: 'Mon projet professionnel',
    s01_c1_body:  '<p>Mon orientation vers le développement Back-End découle d\'une appétence concrète pour <strong>l\'automatisation des flux d\'information</strong>, notamment dans les secteurs de l\'e-commerce et de la logistique.</p><p>Durant mon stage, j\'ai mesuré l\'impact direct d\'un code robuste sur des processus critiques : génération automatique de bordereaux d\'expédition, synchronisation des catalogues produits entre marketplaces.</p><p>Mon objectif est d\'intégrer le <strong>diplôme d\'ingénieur Informatique et Systèmes d\'Information du Cnam</strong> en alternance, pour ancrer mes compétences dans une réalité d\'entreprise dès la troisième année.</p>',
    s01_c2_title: 'Pourquoi l\'informatique ?',
    s01_c2_body:  '<p>Ce qui m\'a attiré dans l\'informatique, c\'est la capacité à <strong>transformer un problème complexe en une solution reproductible</strong>. Lorsqu\'une tâche répétitive peut être automatisée, on libère du temps pour des décisions à plus haute valeur ajoutée.</p><p>Cette logique s\'est confirmée dès mes premières SAÉ : j\'y ai trouvé plus d\'intérêt à comprendre <em>pourquoi</em> une architecture fonctionne qu\'à simplement la faire tourner. C\'est cette posture analytique que je cherche à approfondir vers un rôle d\'ingénieur logiciel orienté systèmes.</p>',
    s01_c3_title: 'Qualités personnelles — illustrées par mes projets',
    q1_title: 'Persévérance',
    q1_body:  'La connexion aux API d\'Octopia, Cdiscount et Back Market lors de mon stage a nécessité plusieurs semaines de lecture de documentation, de tests et de corrections d\'erreurs silencieuses. J\'ai tenu jusqu\'à obtenir un pipeline stable en production.',
    q2_title: 'Esprit d\'analyse',
    q2_body:  'Sur Mnémosyne, la modélisation des flux étudiants a exigé d\'analyser des données hétérogènes issues de l\'API ScoDoc et de définir des règles métier cohérentes avant d\'écrire la moindre ligne de code.',
    q3_title: 'Rigueur architecturale',
    q3_body:  'L\'application des patrons de conception — Composite, Strategy, Observer — reflète une volonté de produire un code maintenable, pas seulement fonctionnel.',
    s01_c4_title:   'Évolution BUT 1 → BUT 2 : le cap franchi',
    evo_but1:       'Exercices académiques, algorithmes, bases de données SQL, premiers projets encadrés.',
    evo_but2:       'Solutions déployables en entreprise, architecture MVC, Docker, API tierces, gestion de données réelles.',
    evo_conclusion: 'Ce passage d\'exercices purement académiques à la création de solutions concrètes pour des environnements d\'entreprise constitue la transformation centrale de cette deuxième année. Je ne produis plus du code qui fonctionne en local : je produis du code qui tient en conditions réelles.',

    s02_title: 'Bilan des compétences — SAÉ BUT 2',
    s02_sub:   'Traces d\'apprentissage · Preuves · Perspectives',
    sae_s4_tag: 'SAÉ S4 · Projet universitaire n°2',
    sae_s4_sub: 'Plateforme de suivi des cohortes étudiantes — IUT Villetaneuse',
    sae_s4_ctx_title:    'Contexte & objectif',
    sae_s4_ctx_body:     '<p>Depuis la réforme BUT 2021, l\'IUT Villetaneuse peine à visualiser les flux d\'étudiants entre promotions. Mnémosyne répond à ce besoin via des <strong>diagrammes de Sankey interactifs</strong> connectés à l\'API ScoDoc, permettant de suivre passages, redoublements et abandons.</p>',
    sae_s4_contrib_title: 'Ce que j\'ai apporté',
    sae_s4_contrib_body:  '<li>Architecture MVC Flask avec séparation stricte Controllers / Services / DAO</li><li>Système de règles métier configurables pour qualifier les parcours étudiants</li><li>Export PDF des rapports de cohorte</li><li>Conteneurisation complète via Docker &amp; docker-compose</li><li>Données anonymisées JSON (conformité RGPD)</li>',
    proof_label:   'Preuve de compétence',
    sae_s4_proof:  'La mise en place du diagramme de Sankey illustre ma capacité à <strong>traiter et visualiser des données complexes</strong> : transformer des décisions de jury brutes (ADM, PASD, RED, NAR, ADJ) en flux agrégés cohérents.',
    comp_realiser:   'Réaliser le développement d\'applications',
    comp_optimiser:  'Optimiser des applications informatiques',
    comp_administrer:'Administrer des systèmes informatiques communicants',
    sae_s3_tag:        'SAÉ S3 · Projet universitaire n°1',
    sae_s3_title:      'Mnémosyne — Archive v1',
    sae_s3_sub:        'Première version · Fondations techniques',
    sae_s3_tech_title: 'Compétences techniques acquises',
    sae_s3_tech_body:  '<li>Mise en place de l\'architecture MVC en Python/Flask</li><li>Modélisation de base de données relationnelle (schéma SQL)</li><li>Authentification utilisateur (sessions Flask)</li><li>Consommation d\'une API REST externe (ScoDoc)</li>',
    sae_s3_trans_title:'Compétences transversales',
    sae_s3_trans_body: '<li>Travail en équipe avec versioning Git</li><li>Rédaction de documentation technique</li><li>Gestion des sprints et priorisation des tâches</li>',
    bilan_title:   'Bilan synthétique & perspectives de progression',
    bilan_1_title: 'Ce que je valorise',
    bilan_1_body:  'La capacité à concevoir des architectures propres dès le départ. L\'habitude de séparer les couches métier, données et présentation m\'a évité de nombreuses régressions lors des évolutions de Mnémosyne.',
    bilan_2_title: 'Bonnes pratiques apportées',
    bilan_2_body:  'L\'usage systématique d\'interfaces (DAO Interface) pour abstraire les accès base de données, permettant de basculer de SQLite vers une autre BDD sans toucher aux services métier.',
    bilan_3_title: 'Points à consolider',
    bilan_3_body:  'La couverture par tests automatisés reste insuffisante. Les fichiers de test présents dans la v2 sont un début, mais une stratégie TDD complète s\'imposera en alternance.',

    s03_title: 'Projets',
    s03_sub:   'Réalisations · Code source · Démonstrations',
    proj1_type: 'SAÉ S4 · Universitaire',
    proj1_desc: 'Plateforme Flask de suivi des cohortes étudiantes via diagrammes de Sankey interactifs. Connectée à l\'API ScoDoc, conteneurisée sous Docker, export PDF.',
    proj1_h1: 'architecture stricte', proj1_h2: 'données anonymisées', proj1_h3: 'export rapports',
    proj2_type: 'SAÉ S3 · Universitaire',
    proj2_desc: 'Première version de la plateforme : authentification, consommation API ScoDoc, base de données relationnelle. Fondations techniques de la v2.',
    proj2_h1: 'architecture', proj2_h2: 'ScoDoc intégré', proj2_h3: 'versioning équipe',
    proj3_type: 'Stage · Professionnel',
    proj3_name: 'Automatisation E-commerce',
    proj3_desc: 'Scripts Python d\'automatisation pour la DSI de METM : génération de bordereaux d\'expédition (UPS, Packlink), synchronisation de catalogues avec Octopia, Cdiscount et Back Market.',
    proj3_h1: 'APIs intégrées', proj3_h2: 'traitement en lots', proj3_h3: 'déployé en prod',
    proj_github:      'Voir sur GitHub',
    proj_confidential:'🔒 Code confidentiel',

    s04_title:         'Compétences techniques',
    s04_sub:           'Langages · Frameworks · Outils',
    skills_lang:       'Langages',
    skills_tools:      'Frameworks & Outils',
    skill_advanced:    'Avancé',
    skill_intermediate:'Intermédiaire',
    skill_beginner:    'Débutant',

    s05_title:       'Stage BUT 2 — Découverte du monde professionnel',
    s05_sub:         'DSI de METM · 2 mois · Automatisation e-commerce & logistique',
    stage_co_label:  'Entreprise',
    stage_dept_label:'Contexte',
    stage_dept:      'Startup · Équipe de 5 stagiaires',
    stage_dur_label: 'Durée',
    stage_dur:       '2 mois',
    stage_tech_label:'Technologies',
    stage_c1_title:  'Ce que j\'ai découvert du monde professionnel',
    stage_c1_body:   '<p><strong>METM (Miss &amp; Mister)</strong> est une startup de vente d\'ordinateurs reconditionnés à Rosny-sous-Bois, créée en 2024. L\'équipe était composée exclusivement de stagiaires, avec Alain (gérant) comme maître de stage. Communication mixte : WhatsApp, Discord et présentiel. Aucun Git : le code était centralisé sur un serveur interne via SSH et FileZilla.</p><p>Mes missions concrètes : <strong>scripts Python d\'automatisation</strong> et deux pages du site interne — <em>« Expédition »</em> (génération des bordereaux UPS et Packlink) et <em>« Recherche de bordereaux »</em>.</p><p>Contraintes découvertes :</p><ul class="bullet-list"><li><strong>La robustesse prime sur l\'élégance</strong> : un script qui crashe en production coûte de l\'argent réel.</li><li><strong>Pas de Git → coordination manuelle</strong> : les mises en production se coordonnaient pour éviter les conflits.</li><li><strong>La documentation des API tierces est rarement complète</strong> : décortiquer les specs d\'Octopia ou Packlink a demandé plus de temps que le développement lui-même.</li></ul>',
    stage_c2_title:  'Compétences BUT mobilisées',
    stage_c2_body:   '<div class="competence-block"><h4>Réaliser le développement d\'applications</h4><p>Les scripts Python vont au-delà du simple appel API : gestion des erreurs réseau, retry automatique, logging structuré, et production d\'un rapport d\'exécution lisible par les équipes métier.</p></div><div class="competence-block mt-md"><h4>Optimiser des applications informatiques</h4><p>Face au volume de commandes à traiter, j\'ai identifié des goulots d\'étranglement et mis en place un mécanisme de traitement par lots (<em>batch processing</em>), réduisant significativement le temps d\'exécution et les risques de rate-limiting.</p></div>',
    stage_c3_title:  'Regard critique sur le stage',
    stage_c3_body:   'Ce stage a révélé des frictions réelles. L\'absence de Git a imposé une coordination manuelle des mises en production. Lorsque Tristan, l\'expert BDD de l\'équipe, est parti à mi-stage, j\'ai repris son périmètre (passage de id_product à id_listing, récupération Back Market) : une preuve concrète d\'adaptabilité. J\'ai aussi traversé un « blocage silencieux » de deux jours avant de comprendre qu\'une question bien formulée vaut mieux que deux jours de recherche solitaire. Ces pratiques — revue de code, Git en équipe, CI/CD — sont exactement ce que l\'alternance au Cnam devra m\'apporter.',

    s06_title:        'Objectifs',
    s06_sub:          'Court terme · Moyen terme · Long terme',
    obj_court:        'Court terme',
    obj_moyen:        'Moyen terme',
    obj_long:         'Long terme (10–15 ans)',
    obj1_title:       'Décrocher une alternance BUT 3',
    obj1_body:        'Mon objectif immédiat est de sécuriser un contrat d\'apprentissage pour la troisième année du BUT, dans une entreprise spécialisée en e-commerce, logistique ou solutions B2B.',
    obj_action_label: 'Actions en cours :',
    obj1_action:      'candidatures actives, veille sur les offres d\'alternance Île-de-France, mise à jour du portfolio GitHub.',
    obj2_title:       'Diplôme d\'ingénieur Cnam + premier emploi',
    obj2_body:        'À l\'issue du BUT, intégrer le <strong>diplôme d\'ingénieur Informatique et Systèmes d\'Information du Cnam en alternance</strong>. Premier emploi cible : développeur Back-End dans une équipe produit avec forte composante d\'automatisation.',
    obj3_title:       'Architecte logiciel / Cybersécurité',
    obj3_body:        'Me projeter comme <strong>architecte logiciel ou spécialiste en cybersécurité applicative</strong>. La sécurité des systèmes m\'attire de plus en plus — concevoir des applications robustes et les sécuriser sont deux faces d\'un même métier. Une trajectoire vers CTO ou RSSI dans une structure à taille humaine est cohérente avec ma volonté de rester proche du code tout en ayant un impact stratégique.',

    s07_title:          'Contact',
    s07_sub:            'Recruteurs · Collaborations · Questions',
    contact_email_label:'Email',
    contact_loc_label:  'Localisation',
    contact_loc:        'Île-de-France · Disponible en alternance',
    contact_cv_label:   'CV',
    contact_cv_link:    'Télécharger mon CV (PDF)',
    form_name:    'Nom',
    form_email:   'Email',
    form_message: 'Message',
    form_send:    'Envoyer',

    footer_name: 'Lin Huang Christophe',
    footer_sub:  'BUT Informatique S4 · IUT Villetaneuse · Sorbonne Paris Nord',
    footer_old:  'Ancien portfolio',

    // NAV extra
    nav_home:  'Accueil',
    nav_about: 'À propos',

    // ABOUT PAGE
    about_page_title: 'Lin Huang Christophe — À propos',
    about_hero_tag:   'Portfolio S4 — BUT Informatique · IUT Villetaneuse',
    about_hero_name:  'Lin Huang <span class="accent">Christophe</span> <span class="name-zh">林黄亦凯</span>',
    about_hero_sub:   '20 ans · Rosny-sous-Bois · Développeur Back-End',
    about_back:       '← Retour au portfolio',

    about_form_title: 'Parcours de formation',
    about_form_sub:   'De la STI2D à l\'ingénierie informatique',
    form1_badge:  'En cours',
    form1_period: 'Depuis sept. 2024',
    form1_name:   'BUT Informatique 2ème année',
    form1_desc:   'Spécialité développement back-end. SAÉ portant sur des projets réels (Mnémosyne — plateforme de suivi des cohortes étudiantes). Stage de 2 mois chez METM (Miss & Mister) à Rosny-sous-Bois.',
    form2_period: 'Sept. 2023 — Juil. 2024',
    form2_name:   'Classe Préparatoire — Prépa TSI',
    form2_desc:   'Formation intensive en mathématiques, sciences physiques et sciences de l\'ingénieur (TSI). Expérience formatrice de rigueur et de résistance au stress. Réorientation vers le BUT Informatique pour aligner la formation avec ma passion du développement logiciel.',
    form3_period: '2020 — 2023',
    form3_name:   'Baccalauréat Technologique STI2D',
    form3_desc:   'Filière Systèmes d\'Information et Numérique (SIN). Première immersion dans les systèmes techniques et l\'électronique. Fondations pour l\'orientation informatique.',

    about_exp_title: 'Expériences',
    about_exp_sub:   'Stage informatique · Emploi familial',
    exp1_role:    'Stage en informatique',
    exp1_company: 'METM — Miss & Mister · Rosny-sous-Bois',
    exp1_period:  'Fév. — Mars 2026 · 2 mois',
    exp1_desc:    'Automatisation des processus e-commerce : génération de bordereaux d\'expédition (UPS, Packlink), pages « Expédition » et « Recherche de bordereaux » du site interne, synchronisation avec Octopia, Cdiscount et Back Market. Équipe de 5 stagiaires.',
    exp2_role:    'Livreur & Serveur',
    exp2_company: 'Restaurant Wanobi · Paris 20e',
    exp2_period:  'Depuis 2018 · Emploi familial',
    exp2_desc:    'Expérience développant la rigueur, le sens du service client et la résistance au stress. Compétences transversales directement réinvesties dans les projets en équipe.',

    about_lang_title: 'Langues & Atouts',
    about_lang_h:     'Langues parlées',
    about_atouts_h:   'Atouts personnels',
    lang_fr_level:  'C1 — Avancé',
    lang_zh_level:  'C2 — Langue maternelle',
    lang_en_level:  'B1 — Intermédiaire',
    atout1: '🎯 Patient',
    atout2: '🔍 Curieux',
    atout3: '🧠 Esprit analytique',
    atout4: '💪 Résistance au stress',
    atout5: '🤝 Esprit d\'équipe',
    atout6: '🔁 Persévérance',
    atout7: '⚡ Autonome',

    about_interest_title: 'Centres d\'intérêt',
    about_interest_sub:   'Ce qui me définit en dehors du code',
    int1_title: 'Technologie',
    int1_desc:  'Cybersécurité · IA · Dev Web & Mobile · Réalité Virtuelle · Robotique',
    int2_title: 'Sciences',
    int2_desc:  'Astronomie & Exploration Spatiale · Sciences Physiques · Mathématiques',
    int3_title: 'Histoire',
    int3_desc:  'Histoire des sciences · Histoire culturelle et militaire · Civilisations',
    int4_title: 'Militaire',
    int4_desc:  'Passion d\'enfance pour la stratégie et la tactique. Nourrit ma rigueur et mon sens de l\'organisation.',
    int5_title: 'Lecture',
    int5_desc:  'Lecture numérique — sciences, histoire et romans techniques.',
    int6_title: 'Jeux vidéo',
    int6_desc:  'Un pilier qui m\'a conduit vers l\'informatique. La pensée systémique des jeux de stratégie influence ma façon de concevoir des architectures.',

    // STAGE (updated)
    stage_co:          'METM — Miss & Mister',
    stage_loc_label:   'Lieu',
    stage_period_label:'Période',
    stage_period:      '3 fév. – 30 mars 2026',

    // 4th quality
    q4_title: 'Demander de l\'aide au bon moment',
    q4_body:  'Durant mon stage, j\'ai traversé une période de « blocage silencieux » : deux jours à chercher seul l\'origine d\'un bug BDD sans progresser. En formulant ma question précisément et en sollicitant mon maître de stage, j\'ai débloqué la situation en vingt minutes. Cette expérience a transformé ma façon de travailler : je sais maintenant qu\'un blocage non communiqué coûte plus cher qu\'une question bien posée.',
  },

  // ──────────────────────────────────────────
  en: {
    page_title: 'Lin Huang Christophe — Computer Science Portfolio',

    nav_presentation: 'About',
    nav_competences:  'Skills',
    nav_projets:      'Projects',
    nav_stage:        'Internship',
    nav_objectifs:    'Goals',
    nav_contact:      'Contact',
    nav_games:        '🎮 Games',

    hero_tag:      'S4 Portfolio — BSc Computer Science · IUT Villetaneuse',
    hero_name:     'Lin Huang <span class="accent">Christophe</span>',
    hero_subtitle: 'Back-End Developer · Automation · E-commerce & Logistics',
    hero_cta:      'Explore portfolio',
    hero_cv:       'Download CV',
    hero_code:     '<span class="kw">class</span> <span class="cls">Christophe</span>:\n  degree     = <span class="str">"BSc Computer Science S4"</span>\n  school     = <span class="str">"IUT Villetaneuse"</span>\n  ambition   = <span class="str">"Engineering Degree (Cnam)"</span>\n  specialty  = <span class="str">"Back-End Development"</span>\n  passion    = <span class="str">"Workflow Automation"</span>\n  future     = <span class="str">"Cybersecurity"</span>',

    s01_title:   'About Me',
    s01_sub:     'Background · Career goals · Growth from Year 1 to Year 2',
    s01_c1_title: 'My Career Goal',
    s01_c1_body:  '<p>My focus on Back-End development is no coincidence — it stems from a genuine drive toward <strong>automating information flows</strong>, particularly in e-commerce and logistics.</p><p>During my internship, I directly measured the impact of robust code on critical processes: automated shipping label generation and product catalogue synchronisation across marketplaces.</p><p>My goal is to join the <strong>Cnam Engineering Degree in Information Systems and Computer Science</strong> through a work-study contract, grounding my technical skills in real business environments from year three onward.</p>',
    s01_c2_title: 'Why computer science?',
    s01_c2_body:  '<p>What drew me to computer science is the ability to <strong>transform a complex problem into a reproducible solution</strong>. When a repetitive task can be automated, it frees up time for higher-value decisions.</p><p>This logic was confirmed through my first university projects: I found more interest in understanding <em>why</em> an architecture works than in simply making it run. That analytical stance is what I aim to deepen toward a systems-oriented software engineering role.</p>',
    s01_c3_title: 'Personal qualities — illustrated by my projects',
    q1_title: 'Perseverance',
    q1_body:  'Connecting to the Octopia, Cdiscount and Back Market APIs during my internship required weeks of documentation reading, testing and debugging silent errors. I persisted until achieving a stable production pipeline.',
    q2_title: 'Analytical mindset',
    q2_body:  'On Mnémosyne, modelling student flows required analysing heterogeneous data from the ScoDoc API and defining coherent business rules before writing a single line of code.',
    q3_title: 'Architectural rigour',
    q3_body:  'Applying design patterns — Composite, Strategy, Observer — reflects a commitment to producing maintainable code, not just functional code.',
    s01_c4_title:   'Growth from Year 1 to Year 2',
    evo_but1:       'Academic exercises, algorithms, SQL databases, first supervised projects.',
    evo_but2:       'Enterprise-ready solutions, MVC architecture, Docker, third-party APIs, real data management.',
    evo_conclusion: 'This shift from purely academic exercises to building concrete solutions for enterprise environments is the central transformation of my second year. I no longer write code that runs locally — I write code that holds up in real conditions.',

    s02_title: 'Skills Assessment — Year 2 Projects',
    s02_sub:   'Learning traces · Evidence · Perspectives',
    sae_s4_tag: 'Year 2 Project · University Project #2',
    sae_s4_sub: 'Student cohort tracking platform — IUT Villetaneuse',
    sae_s4_ctx_title:    'Context & goal',
    sae_s4_ctx_body:     '<p>Since the 2021 BUT reform, IUT Villetaneuse has struggled to visualise student flows across cohorts. Mnémosyne addresses this need via <strong>interactive Sankey diagrams</strong> connected to the ScoDoc API, tracking progressions, retakes and dropouts.</p>',
    sae_s4_contrib_title: 'My contributions',
    sae_s4_contrib_body:  '<li>Flask MVC architecture with strict Controllers / Services / DAO separation</li><li>Configurable business rules engine for classifying student paths</li><li>PDF export of cohort reports</li><li>Full containerisation with Docker &amp; docker-compose</li><li>Anonymised JSON data (GDPR compliance)</li>',
    proof_label:   'Proof of competence',
    sae_s4_proof:  'Implementing the Sankey diagram demonstrates my ability to <strong>process and visualise complex data</strong>: converting raw jury decisions (ADM, PASD, RED, NAR, ADJ) into coherent aggregated flows.',
    comp_realiser:   'Application development',
    comp_optimiser:  'Software optimisation',
    comp_administrer:'Networked systems administration',
    sae_s3_tag:        'Year 1 Project · University Project #1',
    sae_s3_title:      'Mnémosyne — Archive v1',
    sae_s3_sub:        'First version · Technical foundations',
    sae_s3_tech_title: 'Technical skills gained',
    sae_s3_tech_body:  '<li>MVC architecture in Python/Flask</li><li>Relational database modelling (SQL schema)</li><li>User authentication (Flask sessions)</li><li>External REST API consumption (ScoDoc)</li>',
    sae_s3_trans_title:'Transferable skills',
    sae_s3_trans_body: '<li>Team collaboration with Git versioning</li><li>Technical documentation writing</li><li>Sprint management and task prioritisation</li>',
    bilan_title:   'Summary & growth perspectives',
    bilan_1_title: 'What I value',
    bilan_1_body:  'The ability to design clean architectures from the start. Separating business, data and presentation layers prevented many regressions as Mnémosyne evolved.',
    bilan_2_title: 'Best practices adopted',
    bilan_2_body:  'Systematic use of DAO interfaces to abstract database access, making it possible to switch from SQLite to another database without touching business services.',
    bilan_3_title: 'Areas to improve',
    bilan_3_body:  'Automated test coverage remains thin. The test files in v2 are a starting point, but a full TDD strategy will be essential during the work-study programme.',

    s03_title: 'Projects',
    s03_sub:   'Achievements · Source code · Demos',
    proj1_type: 'Year 2 · University',
    proj1_desc: 'Flask platform for tracking student cohorts via interactive Sankey diagrams. Connected to ScoDoc API, containerised with Docker, PDF export.',
    proj1_h1: 'strict architecture', proj1_h2: 'anonymised data', proj1_h3: 'report export',
    proj2_type: 'Year 1 · University',
    proj2_desc: 'First version of the platform: authentication, ScoDoc API consumption, relational database. Technical foundation for v2.',
    proj2_h1: 'architecture', proj2_h2: 'ScoDoc integrated', proj2_h3: 'team versioning',
    proj3_type: 'Internship · Professional',
    proj3_name: 'E-commerce Automation',
    proj3_desc: 'Python automation scripts for METM\'s IT department: shipping label generation (UPS, Packlink), product catalogue synchronisation with Octopia, Cdiscount and Back Market.',
    proj3_h1: 'APIs integrated', proj3_h2: 'batch processing', proj3_h3: 'deployed to prod',
    proj_github:      'View on GitHub',
    proj_confidential:'🔒 Confidential code',

    s04_title:         'Technical skills',
    s04_sub:           'Languages · Frameworks · Tools',
    skills_lang:       'Languages',
    skills_tools:      'Frameworks & Tools',
    skill_advanced:    'Advanced',
    skill_intermediate:'Intermediate',
    skill_beginner:    'Beginner',

    s05_title:       'Internship — Discovering the professional world',
    s05_sub:         'METM IT Dept · 2 months · E-commerce & logistics automation',
    stage_co_label:  'Company',
    stage_dept_label:'Context',
    stage_dept:      'Startup · Team of 5 interns',
    stage_dur_label: 'Duration',
    stage_dur:       '2 months',
    stage_tech_label:'Technologies',
    stage_c1_title:  'What I discovered about the professional world',
    stage_c1_body:   '<p><strong>METM (Miss &amp; Mister)</strong> is a startup selling refurbished computers in Rosny-sous-Bois, founded in 2024. The team consisted entirely of interns, each responsible for a distinct scope, with Alain (CEO) as supervisor. Mixed communication: WhatsApp, Discord and in-person. No Git: code was centralised on an internal server via SSH and FileZilla.</p><p>My concrete work: <strong>Python automation scripts</strong> and two pages on the internal website — <em>"Dispatch"</em> (automatic shipping label generation via UPS &amp; Packlink) and <em>"Label Search"</em> (find a label by order number).</p><p>Constraints I discovered:</p><ul class="bullet-list"><li><strong>Robustness over elegance</strong>: a production crash costs real money.</li><li><strong>No Git → manual coordination</strong>: deployments had to be coordinated manually to avoid conflicts.</li><li><strong>Third-party API documentation is rarely complete</strong>: deciphering Octopia or Packlink specs took more time than the coding itself.</li></ul>',
    stage_c2_title:  'Skills applied from the degree',
    stage_c2_body:   '<div class="competence-block"><h4>Application development</h4><p>The Python scripts go beyond simple API calls: network error handling, automatic retry, structured logging and execution reports readable by business teams.</p></div><div class="competence-block mt-md"><h4>Software optimisation</h4><p>Faced with the volume of orders to process, I identified bottlenecks and implemented a batch processing mechanism, significantly reducing execution time and API rate-limiting risks.</p></div>',
    stage_c3_title:  'Critical reflection on the internship',
    stage_c3_body:   'This internship surfaced real friction points. The absence of Git forced manual production coordination. When Tristan, the team\'s database expert, left mid-internship, I took over his scope (switching from id_product to id_listing, retrieving Back Market data) — a concrete test of my adaptability. I also went through a "silent blocking" episode: two days searching alone before realising a well-formulated question beats two days of solo debugging. Code review, Git in a team, CI/CD — exactly what the Cnam work-study programme must bring.',

    s06_title:        'Goals',
    s06_sub:          'Short term · Medium term · Long term',
    obj_court:        'Short term',
    obj_moyen:        'Medium term',
    obj_long:         'Long term (10–15 years)',
    obj1_title:       'Secure a work-study contract for Year 3',
    obj1_body:        'My immediate goal is to secure an apprenticeship for the third year of my degree, ideally with a company specialised in e-commerce, logistics or B2B solutions.',
    obj_action_label: 'Current actions:',
    obj1_action:      'active applications, monitoring work-study offers in Île-de-France, updating GitHub portfolio.',
    obj2_title:       'Cnam Engineering Degree + first job',
    obj2_body:        'After completing my degree, I plan to join the <strong>Cnam Engineering Degree in Information Systems and Computer Science via a work-study contract</strong>. Target first role: Back-End developer in a product team with a strong automation and systems integration focus.',
    obj3_title:       'Software architect / Cybersecurity',
    obj3_body:        'Long term, I see myself as a <strong>software architect or application security specialist</strong>. Cybersecurity interests me more and more — designing robust systems and securing them are two sides of the same craft. A path towards CTO or CISO in a mid-sized company fits my desire to stay close to the code while having a strategic impact.',

    s07_title:          'Contact',
    s07_sub:            'Recruiters · Collaborations · Questions',
    contact_email_label:'Email',
    contact_loc_label:  'Location',
    contact_loc:        'Île-de-France · Available for work-study',
    contact_cv_label:   'CV',
    contact_cv_link:    'Download my CV (PDF)',
    form_name:    'Name',
    form_email:   'Email',
    form_message: 'Message',
    form_send:    'Send',

    footer_name: 'Lin Huang Christophe',
    footer_sub:  'BSc Computer Science S4 · IUT Villetaneuse · Sorbonne Paris Nord',
    footer_old:  'Old portfolio',

    nav_home:  'Home',
    nav_about: 'About',

    about_page_title: 'Lin Huang Christophe — About me',
    about_hero_tag:   'S4 Portfolio — BSc Computer Science · IUT Villetaneuse',
    about_hero_name:  'Lin Huang <span class="accent">Christophe</span> <span class="name-zh">林黄亦凯</span>',
    about_hero_sub:   '20 y/o · Rosny-sous-Bois · Back-End Developer',
    about_back:       '← Back to portfolio',

    about_form_title: 'Education',
    about_form_sub:   'From STI2D to computer engineering',
    form1_badge:  'Current',
    form1_period: 'Since Sept. 2024',
    form1_name:   'BSc Computer Science — Year 2',
    form1_desc:   'Back-end development specialisation. University projects on real use cases (Mnémosyne — student cohort tracking). 2-month internship at METM (Miss & Mister), Rosny-sous-Bois.',
    form2_period: 'Sept. 2023 — Jul. 2024',
    form2_name:   'Preparatory Class — Prépa TSI',
    form2_desc:   'Intensive programme in mathematics, physics and industrial sciences (TSI). A formative experience in rigour and stress management. Redirected towards BSc Computer Science to align with my passion for software development.',
    form3_period: '2020 — 2023',
    form3_name:   'Technology Baccalaureate — STI2D',
    form3_desc:   'Digital Information Systems specialisation. First exposure to technical systems and electronics. Foundation for the computer science path.',

    about_exp_title: 'Experience',
    about_exp_sub:   'IT internship · Family job',
    exp1_role:    'IT Internship',
    exp1_company: 'METM — Miss & Mister · Rosny-sous-Bois',
    exp1_period:  'Feb. — Mar. 2026 · 2 months',
    exp1_desc:    'E-commerce process automation: shipping label generation (UPS, Packlink), "Dispatch" and "Label Search" pages on the internal website, catalogue sync with Octopia, Cdiscount and Back Market. Team of 5 interns.',
    exp2_role:    'Delivery & Waiter',
    exp2_company: 'Restaurant Wanobi · Paris 20e',
    exp2_period:  'Since 2018 · Family job',
    exp2_desc:    'Experience building rigour, customer service and stress management skills in a fast-paced environment. Transferable skills directly applied in team projects.',

    about_lang_title: 'Languages & Strengths',
    about_lang_h:     'Languages',
    about_atouts_h:   'Personal strengths',
    lang_fr_level:  'C1 — Advanced',
    lang_zh_level:  'C2 — Native',
    lang_en_level:  'B1 — Intermediate',
    atout1: '🎯 Patient',
    atout2: '🔍 Curious',
    atout3: '🧠 Analytical mindset',
    atout4: '💪 Stress resistant',
    atout5: '🤝 Team player',
    atout6: '🔁 Perseverance',
    atout7: '⚡ Self-sufficient',

    about_interest_title: 'Interests',
    about_interest_sub:   'What defines me beyond code',
    int1_title: 'Technology',
    int1_desc:  'Cybersecurity · AI · Web & Mobile Dev · Virtual Reality · Robotics',
    int2_title: 'Science',
    int2_desc:  'Astronomy & Space Exploration · Physics · Mathematics',
    int3_title: 'History',
    int3_desc:  'History of science & technology · Cultural & military history · Civilisations',
    int4_title: 'Military',
    int4_desc:  'A childhood passion for strategy and tactics. Fuels my rigour and ability to anticipate risks in projects.',
    int5_title: 'Reading',
    int5_desc:  'Digital reading — science, history and technical novels.',
    int6_title: 'Gaming',
    int6_desc:  'A pillar that led me to computer science. Systemic thinking from strategy games directly influences how I design software architectures.',

    stage_co:          'METM — Miss & Mister',
    stage_loc_label:   'Location',
    stage_period_label:'Period',
    stage_period:      '3 Feb. – 30 Mar. 2026',

    q4_title: 'Knowing when to ask for help',
    q4_body:  'During my internship, I went through a "silent blocking" phase: two days searching alone for a database bug without progress. By formulating my question precisely and asking my supervisor, I resolved it in twenty minutes. This experience changed how I work: I now know that an uncommunicated blocker costs more than a well-formed question.',
  },

  // ──────────────────────────────────────────
  zh: {
    page_title: '林黄亦凯 — 计算机技术学士作品集',

    nav_presentation: '个人介绍',
    nav_competences:  '能力评估',
    nav_projets:      '项目',
    nav_stage:        '实习',
    nav_objectifs:    '职业规划',
    nav_contact:      '联系我',
    nav_games:        '🎮 游戏',

    hero_tag:      'S4 学期作品集 — 计算机技术学士 · 维勒塔纳伊夫理工学院',
    hero_name:     '林黄 <span class="accent">亦凯</span>',
    hero_subtitle: '后端开发工程师 · 流程自动化 · 电商与物流',
    hero_cta:      '浏览作品集',
    hero_cv:       '下载简历',
    hero_code:     '<span class="kw">class</span> <span class="cls">亦凯</span>:\n  学位    = <span class="str">"计算机技术学士 S4"</span>\n  院校    = <span class="str">"维勒塔纳伊夫理工学院"</span>\n  目标    = <span class="str">"工程师文凭（南工大，工读）"</span>\n  专长    = <span class="str">"后端开发"</span>\n  热情    = <span class="str">"流程自动化"</span>\n  未来    = <span class="str">"网络安全"</span>',

    s01_title:   '个人介绍',
    s01_sub:     '学习历程 · 职业目标 · 第一年到第二年的成长',
    s01_c1_title: '我的职业目标',
    s01_c1_body:  '<p>我专注于后端开发并非偶然，这源于我对<strong>信息流自动化</strong>的真实热情，尤其是在电商和物流领域。</p><p>在实习期间，我切身体会到健壮代码对关键业务流程的直接影响：自动化生成运单、跨平台同步商品目录。</p><p>我的目标是通过工读合同攻读<strong>国家工艺与职业学院（Cnam）信息系统与计算机工程师文凭</strong>，从第三年起在企业环境中巩固技术能力。</p>',
    s01_c2_title: '为什么选择计算机？',
    s01_c2_body:  '<p>吸引我进入计算机领域的，是将<strong>复杂问题转化为可复现解决方案</strong>的能力。当一项重复性任务可以自动化时，就能解放时间去做更有价值的决策。</p><p>这一逻辑在我的第一批大学项目中得到了印证：比起让架构运行起来，我更感兴趣的是理解<em>为什么</em>这个架构能工作。这种分析型思维正是我在面向系统的软件工程方向上想要深化的能力。</p>',
    s01_c3_title: '个人品质 — 以项目为证',
    q1_title: '坚持不懈',
    q1_body:  '在实习期间接入 Octopia、Cdiscount 和 Back Market 的 API，需要数周时间阅读文档、反复测试、排查静默错误。我坚持到底，最终在生产环境中实现了稳定的数据管道。',
    q2_title: '分析思维',
    q2_body:  '在 Mnémosyne 项目中，对学生流向的建模需要分析来自 ScoDoc API 的异构数据，并在编写任何一行代码之前先定义清晰的业务规则。',
    q3_title: '架构严谨性',
    q3_body:  '在开发中应用设计模式（组合模式、策略模式、观察者模式），体现了我对编写可维护代码而非仅仅能运行的代码的追求。',
    s01_c4_title:   '从第一年到第二年：跨越的台阶',
    evo_but1:       '学术练习、算法、SQL 数据库、有导师指导的初步项目。',
    evo_but2:       '可部署的企业级解决方案、MVC 架构、Docker、第三方 API、真实数据管理。',
    evo_conclusion: '从纯学术练习到为企业环境构建实际解决方案，这是第二年最核心的转变。我不再只是写在本地能跑的代码，而是写在真实条件下能经受考验的代码。',

    s02_title: '能力评估 — 第二学年项目',
    s02_sub:   '学习记录 · 能力证明 · 成长展望',
    sae_s4_tag: '第四学期 · 大学项目 #2',
    sae_s4_sub: '学生群体追踪平台 — 维勒塔纳伊夫理工学院',
    sae_s4_ctx_title:    '背景与目标',
    sae_s4_ctx_body:     '<p>自 2021 年学制改革以来，维勒塔纳伊夫理工学院难以可视化学生在各届之间的流动情况。Mnémosyne 通过连接 ScoDoc API 的<strong>交互式桑基图</strong>满足这一需求，追踪升级、重修和退学情况。</p>',
    sae_s4_contrib_title: '我的贡献',
    sae_s4_contrib_body:  '<li>Flask MVC 架构，严格分离 Controllers / Services / DAO 层</li><li>可配置业务规则引擎，用于对学生路径进行分类</li><li>群体报告 PDF 导出功能</li><li>基于 Docker 和 docker-compose 的完整容器化部署</li><li>匿名化 JSON 数据（符合 GDPR 要求）</li>',
    proof_label:   '能力证明',
    sae_s4_proof:  '桑基图的实现展示了我<strong>处理和可视化复杂数据</strong>的能力：将原始评审委员会决定（ADM、PASD、RED、NAR、ADJ）转化为连贯的聚合流向。',
    comp_realiser:   '应用开发',
    comp_optimiser:  '软件优化',
    comp_administrer:'网络系统管理',
    sae_s3_tag:        '第三学期 · 大学项目 #1',
    sae_s3_title:      'Mnémosyne — 归档版 v1',
    sae_s3_sub:        '第一版 · 技术基础',
    sae_s3_tech_title: '掌握的技术能力',
    sae_s3_tech_body:  '<li>Python/Flask MVC 架构搭建</li><li>关系型数据库建模（SQL 模式设计）</li><li>用户认证（Flask 会话管理）</li><li>外部 REST API 对接（ScoDoc）</li>',
    sae_s3_trans_title:'综合能力',
    sae_s3_trans_body: '<li>使用 Git 进行团队版本管理</li><li>技术文档撰写</li><li>Sprint 管理与任务优先级排序</li>',
    bilan_title:   '总结与成长展望',
    bilan_1_title: '我所珍视的',
    bilan_1_body:  '从一开始就设计清晰架构的能力。将业务逻辑、数据访问和展示层分离的习惯，在 Mnémosyne 演进过程中避免了大量回归问题。',
    bilan_2_title: '引入的最佳实践',
    bilan_2_body:  '系统性地使用 DAO 接口层来抽象数据库访问，使得在不修改业务服务层的情况下，可以从 SQLite 切换到其他数据库。',
    bilan_3_title: '待加强的方面',
    bilan_3_body:  '自动化测试覆盖率仍然不足。v2 中现有的测试文件只是一个开端，在工读期间需要建立完整的 TDD 策略。',

    s03_title: '项目',
    s03_sub:   '项目成果 · 源代码 · 演示',
    proj1_type: '第四学期 · 大学项目',
    proj1_desc: '基于 Flask 的学生群体追踪平台，通过交互式桑基图可视化学生流向。已接入 ScoDoc API，使用 Docker 容器化，支持 PDF 导出。',
    proj1_h1: '严格架构', proj1_h2: '匿名化数据', proj1_h3: '报告导出',
    proj2_type: '第三学期 · 大学项目',
    proj2_desc: '平台第一版：用户认证、ScoDoc API 对接、关系型数据库。v2 的技术基础。',
    proj2_h1: '架构', proj2_h2: 'ScoDoc 集成', proj2_h3: '团队版本管理',
    proj3_type: '实习 · 企业项目',
    proj3_name: '电商自动化',
    proj3_desc: '为 METM 信息技术部开发的 Python 自动化脚本：生成运输单（UPS、Packlink），与 Octopia、Cdiscount 和 Back Market 同步商品目录。',
    proj3_h1: '已集成 API', proj3_h2: '批量处理', proj3_h3: '已上生产',
    proj_github:      '在 GitHub 查看',
    proj_confidential:'🔒 代码保密',

    s04_title:         '技术能力',
    s04_sub:           '编程语言 · 框架 · 工具',
    skills_lang:       '编程语言',
    skills_tools:      '框架与工具',
    skill_advanced:    '熟练',
    skill_intermediate:'中级',
    skill_beginner:    '入门',

    s05_title:       '实习 — 初探职场',
    s05_sub:         'METM 信息技术部 · 2 个月 · 电商与物流自动化',
    stage_co_label:  '公司',
    stage_dept_label:'部门',
    stage_dept:      '信息技术部（DSI）',
    stage_dur_label: '时长',
    stage_dur:       '2 个月',
    stage_tech_label:'技术栈',
    stage_c1_title:  '我对职场的发现',
    stage_c1_body:   '<p>公司委托我为信息技术部开发<strong>Python 自动化脚本</strong>，用于关键业务流程：生成运输单（UPS、Packlink）、与合作电商平台同步商品目录。</p><p>这段经历让我明白，职场存在大学难以模拟的现实约束：</p><ul class="bullet-list"><li><strong>健壮性优先于优雅性</strong>：一个在生产环境崩溃的脚本会造成真实的经济损失。</li><li><strong>遗留基础设施的制约</strong>：在 Windows 环境和 Alwaysdata 数据库上工作需要特定的适配。</li><li><strong>第三方 API 文档往往不完整</strong>：解读 Octopia 或 Packlink 的规范所花的时间比开发本身还多。</li></ul>',
    stage_c2_title:  '学位中运用的技能',
    stage_c2_body:   '<div class="competence-block"><h4>应用开发</h4><p>Python 脚本不只是简单的 API 调用：包含网络错误处理、自动重试、结构化日志记录，以及生成业务团队可读的执行报告。</p></div><div class="competence-block mt-md"><h4>软件优化</h4><p>面对大批量订单处理的挑战，我识别出瓶颈并引入批量处理机制，显著缩短了执行时间，降低了 API 限流风险。</p></div>',
    stage_c3_title:  '对实习的批判性反思',
    stage_c3_body:   '这次实习坚定了我的方向，同时也暴露了一些不足：我独自在没有系统性代码审查和测试套件的情况下开发脚本。这种独立性培养了我的决策能力，但也凸显了协作实践（代码审查、CI/CD）的重要性——而这正是我在 Cnam 工读项目中期望获得的。',

    s06_title:        '职业规划',
    s06_sub:          '短期 · 中期 · 长期',
    obj_court:        '短期',
    obj_moyen:        '中期',
    obj_long:         '长期（10-15 年）',
    obj1_title:       '获得第三年工读合同',
    obj1_body:        '我的近期目标是为第三学年争取到一份学徒合同，理想对象是专注于电商、物流或 B2B 解决方案的企业。',
    obj_action_label: '当前行动：',
    obj1_action:      '积极投递申请，关注法兰西岛地区工读职位，更新 GitHub 作品集。',
    obj2_title:       'Cnam 工程师文凭 + 首份工作',
    obj2_body:        '完成学士学位后，计划通过工读合同攻读<strong>Cnam 信息系统与计算机工程师文凭</strong>。目标职位：侧重系统集成与自动化的产品团队后端开发工程师。',
    obj3_title:       '软件架构师 / 网络安全',
    obj3_body:        '长期来看，我的定位是<strong>软件架构师或应用安全专家</strong>。网络安全领域越来越吸引我——设计健壮的系统与保障系统安全，本质上是同一件事的两面。在中等规模企业担任技术总监（CTO）或首席信息安全官（CISO）是一条合理的职业路径，与我既深耕代码、又追求战略影响力的愿景相契合。',

    s07_title:          '联系我',
    s07_sub:            '招聘方 · 合作 · 咨询',
    contact_email_label:'电子邮件',
    contact_loc_label:  '所在地',
    contact_loc:        '法兰西岛 · 可接受工读合同',
    contact_cv_label:   '简历',
    contact_cv_link:    '下载我的简历（PDF）',
    form_name:    '姓名',
    form_email:   '电子邮件',
    form_message: '留言',
    form_send:    '发送',

    footer_name: '林黄亦凯',
    footer_sub:  '计算机技术学士 S4 · 维勒塔纳伊夫理工学院 · 索邦大学巴黎北校区',
    footer_old:  '旧版作品集',

    nav_home:  '首页',
    nav_about: '关于我',

    about_page_title: '林黄亦凯 — 关于我',
    about_hero_tag:   'S4 学期作品集 — 计算机技术学士 · 维勒塔纳伊夫理工学院',
    about_hero_name:  '林黄 <span class="accent">亦凯</span> <span class="name-zh">Christophe</span>',
    about_hero_sub:   '20 岁 · 罗西苏博瓦 · 后端开发工程师',
    about_back:       '← 返回作品集',

    about_form_title: '教育经历',
    about_form_sub:   '从 STI2D 到计算机工程',
    form1_badge:  '在读',
    form1_period: '2024 年 9 月至今',
    form1_name:   '计算机技术学士第二年',
    form1_desc:   '专注后端开发方向。参与真实项目 SAÉ（Mnémosyne — 学生群体追踪平台）。在 METM（Miss & Mister）完成 2 个月实习。',
    form2_period: '2023 年 9 月 — 2024 年 7 月',
    form2_name:   '预科班 — TSI 预科',
    form2_desc:   '数学、物理及工业科学强化课程（TSI 方向）。培养了严谨性和抗压能力。为专注软件开发热情而转入计算机技术学士专业。',
    form3_period: '2020 — 2023',
    form3_name:   '技术型高中会考 — STI2D',
    form3_desc:   '数字信息系统（SIN）方向。初步接触技术系统与电子学，为走向计算机方向奠定基础。',

    about_exp_title: '工作经历',
    about_exp_sub:   '信息技术实习 · 家庭餐厅',
    exp1_role:    '信息技术实习',
    exp1_company: 'METM — Miss & Mister · 罗西苏博瓦',
    exp1_period:  '2026 年 2 月 — 3 月 · 2 个月',
    exp1_desc:    '电商流程自动化：生成运输单（UPS、Packlink）、内部网站「发货」与「查询运单」页面开发、与 Octopia、Cdiscount 及 Back Market 数据同步。五人实习生团队协作。',
    exp2_role:    '外卖员 & 服务员',
    exp2_company: '万比餐厅 · 巴黎 20 区',
    exp2_period:  '2018 年至今 · 家庭兼职',
    exp2_desc:    '在高节奏环境中锻炼了严谨性、客户服务意识和抗压能力，这些综合能力直接应用于团队项目中。',

    about_lang_title: '语言与优势',
    about_lang_h:     '语言能力',
    about_atouts_h:   '个人优势',
    lang_fr_level:  'C1 — 高级',
    lang_zh_level:  'C2 — 母语',
    lang_en_level:  'B1 — 中级',
    atout1: '🎯 耐心',
    atout2: '🔍 好奇心强',
    atout3: '🧠 分析思维',
    atout4: '💪 抗压能力强',
    atout5: '🤝 团队协作',
    atout6: '🔁 坚持不懈',
    atout7: '⚡ 自主自立',

    about_interest_title: '兴趣爱好',
    about_interest_sub:   '代码之外定义我的事物',
    int1_title: '技术',
    int1_desc:  '网络安全 · 人工智能 · Web & 移动开发 · 虚拟现实 · 机器人',
    int2_title: '科学',
    int2_desc:  '天文学 & 太空探索 · 物理学 · 数学 · 理论计算机科学',
    int3_title: '历史',
    int3_desc:  '科学技术史 · 文化与军事史 · 文明史',
    int4_title: '军事',
    int4_desc:  '儿时对战略与战术的热情，培养了我的严谨性和组织能力，也帮助我在项目中提前规避风险。',
    int5_title: '阅读',
    int5_desc:  '数字阅读 — 科学、历史与技术类书籍，让我保持思维的活跃与沉静。',
    int6_title: '电子游戏',
    int6_desc:  '引领我走向计算机科学的重要支柱。策略游戏中的系统化思维直接影响了我设计软件架构的方式。',

    stage_co:          'METM — Miss & Mister',
    stage_loc_label:   '地点',
    stage_period_label:'实习时间',
    stage_period:      '2026 年 2 月 3 日 – 3 月 30 日',

    q4_title: '懂得适时求助',
    q4_body:  '实习期间，我经历过一段「沉默阻塞」：独自花费两天排查一个数据库 bug，毫无进展。当我将问题准确表述并向负责人请教后，二十分钟内便解决了问题。这段经历改变了我的工作方式：我深刻认识到，一个没有反馈的阻塞，比一个表述清晰的问题代价更高。',
  }
};

// ============================================================
//  SIMPLIFIED → TRADITIONAL CHINESE CONVERTER
// ============================================================
const s2tMap = {
  '学':'學','计':'計','时':'時','实':'實','习':'習','现':'現','统':'統',
  '软':'軟','体':'體','应':'應','发':'發','开':'開','关':'關','长':'長',
  '国':'國','语':'語','码':'碼','进':'進','验':'驗','数':'數','据':'據',
  '来':'來','为':'為','这':'這','们':'們','从':'從','对':'對','过':'過',
  '图':'圖','项':'項','还':'還','样':'樣','会':'會','场':'場','标':'標',
  '经':'經','总':'總','员':'員','层':'層','录':'錄','务':'務','导':'導',
  '测':'測','试':'試','传':'傳','优':'優','组':'組','联':'聯','师':'師',
  '问':'問','题':'題','网':'網','线':'線','积':'積','极':'極','处':'處',
  '节':'節','历':'歷','与':'與','离':'離','术':'術','获':'獲','维':'維',
  '纳':'納','专':'專','设':'設','个':'個','两':'兩','东':'東','动':'動',
  '将':'將','让':'讓','给':'給','兴':'興','选':'選','择':'擇','协':'協',
  '书':'書','证':'證','变':'變','间':'間','继':'繼','续':'續','级':'級',
  '结':'結','构':'構','后':'後','识':'識','认':'認','类':'類','队':'隊',
  '难':'難','输':'輸','载':'載','读':'讀','权':'權','签':'簽','环':'環',
  '围':'圍','库':'庫','战':'戰','况':'況','综':'綜','绩':'績','础':'礎',
  '块':'塊','虑':'慮','费':'費','购':'購','该':'該','区':'區','带':'帶',
  '递':'遞','针':'針','历':'歷','实':'實','议':'議','备':'備','执':'執',
  '态':'態','话':'話','质':'質','联':'聯','规':'規','划':'劃','响':'響',
  '链':'鏈','值':'值','营':'營','确':'確','击':'擊','协':'協','讨':'討',
  '论':'論','预':'預','义':'義','们':'們','获':'獲','补':'補','观':'觀',
  '词':'詞','词':'詞','视':'視','频':'頻','档':'檔','汉':'漢','华':'華',
};

function toTraditional(str) {
  return str.split('').map(c => s2tMap[c] || c).join('');
}

function buildZhTW(zhObj) {
  const out = {};
  for (const k in zhObj) {
    out[k] = typeof zhObj[k] === 'string' ? toTraditional(zhObj[k]) : zhObj[k];
  }
  return out;
}

// Generate Traditional Chinese from Simplified
translations['zh-tw'] = buildZhTW(translations['zh']);

// ============================================================
//  COLOUR PALETTE — accents + auto-cycle
// ============================================================
const colorPalette = [
  // ── Couleurs principales ──
  { key: 'ciel',    name: 'Ciel',    accent: '#0284c7', accent2: '#38bdf8' }, // défaut
  { key: 'vert',    name: 'Vert',    accent: '#10b981', accent2: '#34d399' },
  { key: 'rouge',   name: 'Rouge',   accent: '#dc2626', accent2: '#f87171' },
  { key: 'or',      name: 'Or',      accent: '#ca8a04', accent2: '#fcd34d' },
  { key: 'marine',  name: 'Marine',  accent: '#1e40af', accent2: '#60a5fa' },
  { key: 'kaki',    name: 'Kaki',    accent: '#15803d', accent2: '#4ade80' },
  { key: 'orange',  name: 'Orange',  accent: '#ea580c', accent2: '#fb923c' },
  { key: 'indigo',  name: 'Indigo',  accent: '#1d4ed8', accent2: '#93c5fd' },
  { key: 'cyan',      name: 'Cyan',      accent: '#06b6d4', accent2: '#67e8f9' },
  { key: 'turquoise', name: 'Turquoise', accent: '#14b8a6', accent2: '#5eead4' },
  // ── 5 couleurs au choix ──
  { key: 'rose',      name: 'Rose',      accent: '#ec4899', accent2: '#f9a8d4' },
  { key: 'mauve',     name: 'Mauve',     accent: '#9333ea', accent2: '#c084fc' },
  { key: 'corail',    name: 'Corail',    accent: '#f43f5e', accent2: '#fda4af' },
  { key: 'emeraude',  name: 'Émeraude',  accent: '#059669', accent2: '#6ee7b7' },
  { key: 'bordeaux',  name: 'Bordeaux',  accent: '#9f1239', accent2: '#fecdd3' },
];

let currentColorIdx  = 0;
let autoCycleTimer   = null;
let autoCycleEnabled = false;
let autoCycleMs      = 20000; // 20s par défaut

function parseInterval(str) {
  str = str.trim().toLowerCase();
  let ms = 0;
  const m = str.match(/(\d+)\s*m/);
  const s = str.match(/(\d+)\s*s/);
  if (m) ms += parseInt(m[1]) * 60000;
  if (s) ms += parseInt(s[1]) * 1000;
  if (!ms) ms = parseInt(str) * 1000 || 20000;
  return Math.max(5000, Math.min(ms, 3600000)); // min 5s, max 1h
}

function applyColor(idx) {
  const c = colorPalette[idx];
  currentColorIdx = idx;
  document.documentElement.style.setProperty('--accent',   c.accent);
  document.documentElement.style.setProperty('--accent-2', c.accent2);
  localStorage.setItem('accentIdx', idx);
  const dot = document.getElementById('colorDot');
  if (dot) dot.style.background = c.accent;
  document.querySelectorAll('.color-swatch').forEach((sw, i) => {
    sw.classList.toggle('swatch-active', i === idx);
  });
}

function startAutoCycle() {
  stopAutoCycle();
  autoCycleTimer = setInterval(() => {
    applyColor((currentColorIdx + 1) % colorPalette.length);
  }, autoCycleMs);
}

function stopAutoCycle() {
  if (autoCycleTimer) { clearInterval(autoCycleTimer); autoCycleTimer = null; }
}

function buildPalette() {
  const popup = document.getElementById('colorPalettePopup');
  if (!popup) return;
  popup.innerHTML = '';

  // Swatches grid
  const grid = document.createElement('div');
  grid.className = 'swatches-grid';
  colorPalette.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'color-swatch' + (i === currentColorIdx ? ' swatch-active' : '');
    btn.style.background = c.accent;
    btn.title = c.name;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      applyColor(i);
    });
    grid.appendChild(btn);
  });
  popup.appendChild(grid);

  // Cycle controls
  const ctrl = document.createElement('div');
  ctrl.className = 'cycle-ctrl';
  ctrl.innerHTML = `
    <label class="cycle-label">
      <input type="checkbox" id="cycleCheck" ${autoCycleEnabled ? 'checked' : ''}>
      <span>🔄 Cycle auto</span>
    </label>
    <input type="text" id="cycleInput" class="cycle-input"
      value="${autoCycleMs >= 60000 ? Math.round(autoCycleMs/60000)+'m' : Math.round(autoCycleMs/1000)+'s'}"
      placeholder="20s" title="ex: 20s, 1m, 1m30s" ${!autoCycleEnabled ? 'disabled' : ''}>
  `;
  ctrl.addEventListener('click', e => e.stopPropagation());
  popup.appendChild(ctrl);

  document.getElementById('cycleCheck').addEventListener('change', e => {
    autoCycleEnabled = e.target.checked;
    localStorage.setItem('cycleEnabled', autoCycleEnabled ? '1' : '0');
    document.getElementById('cycleInput').disabled = !autoCycleEnabled;
    autoCycleEnabled ? startAutoCycle() : stopAutoCycle();
  });

  document.getElementById('cycleInput').addEventListener('change', e => {
    autoCycleMs = parseInterval(e.target.value);
    localStorage.setItem('cycleMs', autoCycleMs);
    const disp = autoCycleMs >= 60000 ? Math.round(autoCycleMs/60000)+'m' : Math.round(autoCycleMs/1000)+'s';
    e.target.value = disp;
    if (autoCycleEnabled) startAutoCycle();
  });
}

function startAutoCycle() {
  if (autoCycleTimer) return;
  autoCycleTimer = setInterval(() => {
    if (!userPicked) {
      applyColor((currentColorIdx + 1) % colorPalette.length, true);
    }
  }, 18000); // toutes les 18 secondes
}

function stopAutoCycle() {
  if (autoCycleTimer) { clearInterval(autoCycleTimer); autoCycleTimer = null; }
}

// ============================================================
//  TYPING EFFECT
// ============================================================
function typeWriter(el, text, speed = 38) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i++];
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// ============================================================
//  I18N ENGINE
// ============================================================
function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'zh-tw' ? 'zh-TW' : lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    // hero subtitle handled separately for typing effect
    if (key === 'hero_subtitle' || key === 'about_hero_sub') return;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  if (t.page_title || t.about_page_title) {
    document.title = t.about_page_title || t.page_title;
    // page_title takes precedence on index.html
    const titleEl = document.querySelector('title[data-i18n="about_page_title"]');
    document.title = titleEl ? (t.about_page_title || t.page_title) : (t.page_title || t.about_page_title);
  }

  localStorage.setItem('lang', lang);

  // Update dropdown display
  const langText = document.getElementById('langCurrentText');
  if (langText) {
    if (lang === 'zh')    langText.textContent = '简';
    else if (lang === 'zh-tw') langText.textContent = '繁';
    else langText.textContent = lang.toUpperCase();
  }
  document.querySelectorAll('.lang-menu-item').forEach(item => {
    item.classList.toggle('active', item.dataset.lang === lang);
  });

  // Typing effect on hero subtitle (index.html or about.html)
  const subtitleEl = document.querySelector('[data-i18n="hero_subtitle"], [data-i18n="about_hero_sub"]');
  if (subtitleEl) {
    const key = subtitleEl.dataset.i18n;
    if (t[key] !== undefined) typeWriter(subtitleEl, t[key]);
  }
}

// ============================================================
//  DARK / LIGHT MODE
// ============================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang     = localStorage.getItem('lang')      || 'fr';
  const savedTheme    = localStorage.getItem('theme')     || 'dark';
  const savedColorIdx = parseInt(localStorage.getItem('accentIdx') || '0', 10);

  applyLang(savedLang);
  applyTheme(savedTheme);

  // Cycle settings (activé par défaut)
  autoCycleEnabled = localStorage.getItem('cycleEnabled') !== '0';
  autoCycleMs      = parseInt(localStorage.getItem('cycleMs') || '20000', 10);
  applyColor(savedColorIdx);
  buildPalette();
  if (autoCycleEnabled) startAutoCycle();

  // ── Language dropdown ──
  const langDropdown   = document.getElementById('langDropdown');
  const langCurrentBtn = document.getElementById('langCurrentBtn');
  const colorPickerWrap = document.getElementById('colorPickerWrap');

  if (langCurrentBtn) {
    langCurrentBtn.addEventListener('click', e => {
      e.stopPropagation();
      langDropdown?.classList.toggle('open');
      colorPickerWrap?.classList.remove('open');
    });
  }
  document.querySelectorAll('.lang-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      applyLang(item.dataset.lang);
      langDropdown?.classList.remove('open');
    });
  });

  // ── Colour picker ──
  const colorPickerBtn = document.getElementById('colorPickerBtn');
  if (colorPickerBtn) {
    colorPickerBtn.addEventListener('click', e => {
      e.stopPropagation();
      colorPickerWrap?.classList.toggle('open');
      langDropdown?.classList.remove('open');
    });
  }

  // Close both on outside click
  document.addEventListener('click', () => {
    langDropdown?.classList.remove('open');
    colorPickerWrap?.classList.remove('open');
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Skill bars: animate on scroll into view
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

  // Nav: highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

  // Scroll reveal for all cards / project cards / objective cards
  const revealTargets = document.querySelectorAll(
    '.section .card, .project-card, .proj-card, .objective-card, .skills-col, .stage-intro, .tl-item, .interest-card'
  );
  revealTargets.forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 3) * 0.08}s`;
    }
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// Inject active nav link style
const style = document.createElement('style');
style.textContent = '.nav-links a.active, .nav-links a.nav-active { color: var(--text); }';
document.head.appendChild(style);
