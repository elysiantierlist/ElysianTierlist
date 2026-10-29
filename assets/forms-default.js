// Domande predefinite. Se nell'area staff (Domande) salvi delle modifiche, valgono quelle del database.
// Questo file serve come punto di partenza e come ripristino.
window.ELY_DEFAULT = {
 "common": {
  "q": [
   {
    "t": "sec",
    "it": "Informazioni base",
    "en": "Basic information"
   },
   {
    "id": "ign",
    "t": "text",
    "max": 32,
    "req": 1,
    "it": "IGN / nickname in gioco",
    "en": "IGN / in-game nickname"
   },
   {
    "id": "tz",
    "t": "text",
    "max": 60,
    "req": 1,
    "it": "Fuso orario",
    "en": "Timezone",
    "hi": {
     "it": "Es. Europe/Rome (UTC+1)",
     "en": "E.g. Europe/Rome (UTC+1)"
    }
   },
   {
    "id": "age",
    "t": "number",
    "min": 14,
    "max": 99,
    "req": 1,
    "it": "Quanti anni hai?",
    "en": "How old are you?",
    "hi": {
     "it": "Minimo 14 anni.",
     "en": "Minimum 14 years old."
    }
   },
   {
    "id": "intro",
    "t": "area",
    "max": 2500,
    "w": 100,
    "req": 1,
    "it": "Presentati",
    "en": "Introduce yourself",
    "hi": {
     "it": "Risposta aperta, minimo 100 parole. Parlaci di te, dei tuoi interessi, del tuo carattere e del modo in cui ti comporti all'interno di una community.",
     "en": "Open answer, minimum 100 words. Tell us about yourself, your interests, your personality and how you behave inside a community."
    }
   },
   {
    "id": "why",
    "t": "area",
    "max": 1500,
    "req": 1,
    "it": "Perché desideri diventare staffer di questa tier list?",
    "en": "Why do you want to become a staff member of this tier list?"
   }
  ]
 },
 "roles": [
  {
   "id": "supporter",
   "ico": "💜",
   "it": {
    "n": "Supporter",
    "d": "Aiuta la community e fai parte dello staff della tier list."
   },
   "en": {
    "n": "Supporter",
    "d": "Help the community and join the tier list staff."
   },
   "q": [
    {
     "t": "sec",
     "it": "Domande Supporter",
     "en": "Supporter questions"
    },
    {
     "id": "s1",
     "t": "radio",
     "req": 1,
     "it": "Hai già ricoperto ruoli di moderazione?",
     "en": "Have you held moderation roles before?",
     "o": {
      "it": [
       "Sì, attualmente",
       "Sì, in passato",
       "No, ma conosco il funzionamento di uno staff",
       "No, sarebbe la mia prima esperienza"
      ],
      "en": [
       "Yes, currently",
       "Yes, in the past",
       "No, but I know how a staff team works",
       "No, this would be my first experience"
      ]
     },
     "showIf": [
      0,
      1
     ],
     "x": {
      "it": "Se hai risposto sì, descrivi brevemente ruolo, responsabilità e motivo per cui lo hai lasciato.",
      "en": "If you answered yes, briefly describe the role, your responsibilities and why you left."
     }
    },
    {
     "id": "s2",
     "t": "radio",
     "req": 1,
     "it": "Quanto tempo puoi dedicare mediamente al server?",
     "en": "How much time can you dedicate to the server on average?",
     "o": {
      "it": [
       "Meno di 3 ore a settimana",
       "3-6 ore a settimana",
       "7-10 ore a settimana",
       "11-15 ore a settimana",
       "Più di 15 ore a settimana"
      ],
      "en": [
       "Less than 3 hours a week",
       "3-6 hours a week",
       "7-10 hours a week",
       "11-15 hours a week",
       "More than 15 hours a week"
      ]
     },
     "x": {
      "it": "Aggiungi giorni e fasce orarie indicative.",
      "en": "Add approximate days and time slots."
     }
    },
    {
     "id": "s3",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quali caratteristiche dovrebbe avere un buon moderatore?",
     "en": "What qualities should a good moderator have?",
     "hi": {
      "it": "Indica almeno quattro caratteristiche e motivale.",
      "en": "List at least four qualities and explain why."
     }
    },
    {
     "id": "s4",
     "t": "area",
     "max": 1200,
     "req": 1,
     "it": "Qual è un tuo difetto che potrebbe influenzare il lavoro nello staff?",
     "en": "What is a flaw of yours that could affect your work in the staff team?",
     "hi": {
      "it": "Spiega anche come cercheresti di gestirlo.",
      "en": "Also explain how you would try to manage it."
     }
    },
    {
     "id": "s5",
     "t": "check",
     "req": 1,
     "it": "Quali modalità PvP conosci meglio?",
     "en": "Which PvP gamemodes do you know best?",
     "o": [
      "NoDebuff",
      "Debuff",
      "BuildUHC",
      "Classic",
      "Sumo",
      "Boxing",
      "Gapple",
      "Axe",
      "Sword",
      "Crystal",
      "SMP",
      "Altro"
     ],
     "otherIdx": 11,
     "x": {
      "it": "Indica anche le versioni in cui giochi prevalentemente.",
      "en": "Also state the versions you mainly play on."
     },
     "xPre": "Versioni"
    },
    {
     "id": "s6",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "In una tier list competitiva, quali elementi rendono credibile un risultato?",
     "en": "In a competitive tier list, what makes a result credible?"
    },
    {
     "id": "s7",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un tester è amico stretto di uno dei due giocatori. Come gestiresti la situazione?",
     "en": "A tester is a close friend of one of the two players. How would you handle the situation?"
    },
    {
     "id": "s8",
     "t": "radio",
     "req": 1,
     "it": "Due giocatori contestano il risultato di un test e pubblicano versioni opposte. Qual è la prima cosa da fare?",
     "en": "Two players dispute the result of a test and publish opposing versions. What is the first thing to do?",
     "o": {
      "it": [
       "Scegliere la versione del giocatore più conosciuto",
       "Raccogliere separatamente prove e testimonianze",
       "Annullare immediatamente il test",
       "Lasciare decidere alla community tramite reazioni",
       "Punire entrambi per aver discusso"
      ],
      "en": [
       "Pick the version of the better-known player",
       "Collect evidence and testimonies separately",
       "Immediately cancel the test",
       "Let the community decide through reactions",
       "Punish both for arguing"
      ]
     },
     "x": {
      "it": "Motiva la risposta.",
      "en": "Explain your answer."
     }
    },
    {
     "id": "s9",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un giocatore molto forte sostiene di meritare un'eccezione alle procedure della tier list. Come rispondi?",
     "en": "A very strong player claims they deserve an exception to the tier list procedures. How do you respond?"
    },
    {
     "id": "s10",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Noti un comportamento insolito durante un test, ma le prove non sono ancora sufficienti. Come procedi?",
     "en": "You notice unusual behavior during a test, but the evidence is not yet sufficient. How do you proceed?"
    },
    {
     "id": "s11",
     "t": "radio",
     "req": 1,
     "it": "Quale principio dovrebbe guidare l'applicazione delle sanzioni?",
     "en": "Which principle should guide the application of sanctions?",
     "o": {
      "it": [
       "Punire più severamente gli utenti antipatici",
       "Valutare regola, gravità, contesto, precedenti e prove",
       "Applicare sempre la sanzione massima",
       "Decidere in base all'opinione della chat",
       "Proteggere gli utenti più conosciuti"
      ],
      "en": [
       "Punish unlikeable users more harshly",
       "Assess the rule, severity, context, history and evidence",
       "Always apply the maximum sanction",
       "Decide based on the chat's opinion",
       "Protect the better-known users"
      ]
     },
     "x": {
      "it": "Motiva la risposta.",
      "en": "Explain your answer."
     }
    },
    {
     "id": "s12",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente pubblica senza consenso informazioni che potrebbero identificare o localizzare un'altra persona. Cosa fai?",
     "en": "A user posts, without consent, information that could identify or locate another person. What do you do?"
    },
    {
     "id": "s13",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un membro minaccia di rendere pubbliche informazioni private se non ottiene un rank migliore. Come gestisci il caso?",
     "en": "A member threatens to make private information public unless they get a better rank. How do you handle the case?"
    },
    {
     "id": "s14",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "In chat viene pubblicato un messaggio che promette vantaggi in cambio di denaro, account o beni digitali. Qual è la procedura corretta?",
     "en": "A message is posted in chat promising benefits in exchange for money, accounts or digital goods. What is the correct procedure?"
    },
    {
     "id": "s15",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente invita i membri a contattarlo in privato per un'offerta sospetta. Non ha ancora concluso alcuno scambio visibile. Cosa fai?",
     "en": "A user invites members to contact them privately for a suspicious offer. No visible exchange has taken place yet. What do you do?"
    },
    {
     "id": "s16",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un membro invia un file o un collegamento sospetto sostenendo che serva per verificare il risultato di un test. Come intervieni?",
     "en": "A member sends a suspicious file or link claiming it is needed to verify a test result. How do you intervene?"
    },
    {
     "id": "s17",
     "t": "radio",
     "req": 1,
     "it": "Un utente ammette in chat di aver aggirato una precedente sanzione usando un altro account. Qual è la risposta più corretta?",
     "en": "A user admits in chat to having bypassed a previous sanction using another account. What is the most correct response?",
     "o": {
      "it": [
       "Ignorarlo perché il nuovo account non ha ancora infranto altre regole",
       "Verificare gli elementi disponibili e applicare la procedura del server",
       "Esporre pubblicamente tutti i dati raccolti",
       "Punire chiunque abbia parlato con lui",
       "Chiedergli la password per controllare l'account"
      ],
      "en": [
       "Ignore it because the new account has not broken any other rules yet",
       "Check the available evidence and apply the server's procedure",
       "Publicly expose all the data collected",
       "Punish anyone who talked to them",
       "Ask for their password to check the account"
      ]
     }
    },
    {
     "id": "s18",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Ricevi una segnalazione grave, ma le prove contengono informazioni private della persona coinvolta. Come le gestisci?",
     "en": "You receive a serious report, but the evidence contains private information of the person involved. How do you handle it?"
    },
    {
     "id": "s19",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un tuo amico infrange una regola e ti chiede di non registrare l'accaduto. Cosa fai?",
     "en": "A friend of yours breaks a rule and asks you not to record it. What do you do?"
    },
    {
     "id": "s20",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un altro moderatore applica una sanzione che ritieni sproporzionata. Come ti comporti?",
     "en": "Another moderator applies a sanction you consider disproportionate. How do you act?"
    },
    {
     "id": "s21",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un membro provoca ripetutamente gli altri con messaggi apparentemente innocui presi singolarmente. Come valuti il caso?",
     "en": "A member repeatedly provokes others with messages that seem harmless taken individually. How do you assess the case?"
    },
    {
     "id": "s22",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quando una questione dovrebbe essere inoltrata agli amministratori o segnalata direttamente a Discord?",
     "en": "When should an issue be escalated to the administrators or reported directly to Discord?"
    },
    {
     "id": "s23",
     "t": "area",
     "max": 3000,
     "w": 120,
     "req": 1,
     "it": "Durante un test nasce una discussione: un partecipante accusa l'altro, gli spettatori iniziano a insultarsi e un tuo amico ti scrive in privato chiedendoti di favorire una parte. Descrivi in ordine tutte le tue azioni.",
     "en": "During a test an argument breaks out: one participant accuses the other, spectators start insulting each other and a friend of yours messages you privately asking you to favour one side. Describe all your actions in order.",
     "hi": {
      "it": "Risposta aperta, minimo 120 parole.",
      "en": "Open answer, minimum 120 words."
     }
    },
    {
     "t": "sec",
     "it": "Dichiarazioni finali",
     "en": "Final statements"
    },
    {
     "id": "confirm",
     "t": "conf",
     "req": 1,
     "it": "Dichiarazioni finali",
     "en": "Final statements",
     "items": [
      {
       "it": "Ho almeno 14 anni e soddisfo l'età minima richiesta da Discord nel mio Paese.",
       "en": "I am at least 14 years old and meet the minimum age required by Discord in my country."
      },
      {
       "it": "Ho risposto personalmente e con sincerità.",
       "en": "I answered personally and honestly."
      },
      {
       "it": "Accetto che il ruolo possa essere revocato in caso di abuso dei permessi.",
       "en": "I accept that the role may be revoked in case of abuse of permissions."
      },
      {
       "it": "Mi impegno a rispettare la riservatezza dei canali staff.",
       "en": "I commit to respecting the confidentiality of staff channels."
      },
      {
       "it": "Mi impegno a rispettare regolamento, Termini di servizio e Linee guida di Discord.",
       "en": "I commit to following the rules, and Discord's Terms of Service and Community Guidelines."
      },
      {
       "it": "Accetto di dichiarare eventuali conflitti d'interesse.",
       "en": "I agree to disclose any conflicts of interest."
      },
      {
       "it": "Comprendo che lo staff non deve chiedere password, codici di accesso o informazioni private non necessarie.",
       "en": "I understand that staff must never ask for passwords, access codes or unnecessary private information."
      }
     ]
    }
   ]
  },
  {
   "id": "ss",
   "ico": "🛡️",
   "tag": "SS",
   "it": {
    "n": "SS Verified",
    "d": "Screenshare e controlli anti-cheat verificati."
   },
   "en": {
    "n": "SS Verified",
    "d": "Verified screensharing and anti-cheat checks."
   },
   "q": [
    {
     "t": "sec",
     "it": "Domande SS Verified",
     "en": "SS Verified questions"
    },
    {
     "id": "q1",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Quali strumenti e software impieghi abitualmente durante un controllo Screenshare?",
     "en": "Which tools and software do you usually use during a Screenshare check?",
     "hi": {
      "it": "Risposta aperta: elenca i tool principali specificando per ciascuno la relativa funzione.",
      "en": "Open answer: list the main tools, specifying the function of each."
     }
    },
    {
     "id": "q2",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Quali sono le differenze strutturali e operative tra Ghost Client, Injection Client ed External Client?",
     "en": "What are the structural and operational differences between Ghost Client, Injection Client and External Client?",
     "hi": {
      "it": "Risposta aperta: descrivi il funzionamento di ciascuna tipologia e fornisci almeno un esempio concreto per ognuna.",
      "en": "Open answer: describe how each type works and give at least one concrete example for each."
     }
    },
    {
     "id": "q3",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Cos'è il BAM (Background Activity Moderator) e quali informazioni chiave permette di ricavare durante una verifica?",
     "en": "What is BAM (Background Activity Moderator) and what key information does it let you obtain during a check?"
    },
    {
     "id": "q4",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Durante l'analisi, non trovi tracce nella cartella %temp%. Come procedi per individuare un eventuale cheat in formato .jar?",
     "en": "During the analysis you find no traces in the %temp% folder. How do you proceed to find a possible cheat in .jar format?",
     "hi": {
      "it": "Risposta aperta: descrivi i passaggi di ricerca e gli strumenti utilizzati.",
      "en": "Open answer: describe the search steps and the tools used."
     }
    },
    {
     "id": "q5",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Quali metodologie conosci per l'iniezione/avvio di un file .dll e quali tracce o strumenti permettono di rilevarne l'esecuzione?",
     "en": "Which methods do you know for injecting/launching a .dll file, and which traces or tools allow you to detect its execution?"
    },
    {
     "id": "q6",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Come procedi per identificare, analizzare ed eventualmente recuperare file che sono stati eliminati dall'utente?",
     "en": "How do you identify, analyze and possibly recover files that the user has deleted?"
    },
    {
     "id": "q7",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Qual è la procedura corretta per determinare l'esatta data e ora dell'ultimo avvio del sistema operativo?",
     "en": "What is the correct procedure to determine the exact date and time of the last operating system boot?"
    },
    {
     "id": "q8",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "In che modo è possibile rilevare se l'orario del sistema è stato modificato manualmente o alterato di recente?",
     "en": "How can you detect whether the system time has been manually changed or recently altered?"
    },
    {
     "id": "q9",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Che cos'è un \"replace\" nel contesto dello Screenshare e attraverso quali indicatori o verifiche lo si individua?",
     "en": "What is a \"replace\" in the context of Screenshare and through which indicators or checks is it detected?"
    },
    {
     "id": "q10",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Come individui eventuali cheat, script o strumenti malevoli che non si presentano sotto forma di file eseguibili standard (.exe)?",
     "en": "How do you identify cheats, scripts or malicious tools that do not come as standard executable files (.exe)?"
    },
    {
     "id": "q11",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Qual è la procedura per identificare le periferiche collegate al sistema e rilevare l'eventuale presenza di macro o software di terze parti legati ad esse?",
     "en": "What is the procedure to identify the devices connected to the system and detect the possible presence of macros or third-party software tied to them?"
    },
    {
     "id": "q12",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Incontrando un file .exe che non si avvia o genera errore, come verifichi se si tratta di un file innocuo (legit) o di un tentativo di occultamento/cheat?",
     "en": "When you come across an .exe file that does not start or throws an error, how do you check whether it is harmless (legit) or an attempt at concealment/cheating?"
    },
    {
     "id": "q13",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Quali azioni intraprendi se individui traccia dell'avvio di un file .exe che non risulta più presente sul disco del computer?",
     "en": "What actions do you take if you find a trace of an .exe file being launched that is no longer present on the computer's disk?"
    },
    {
     "id": "q14",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Noti che l'ultimo file .pf generato nella cartella Prefetch risale a più di un'ora prima dell'inizio dello Screenshare. Come interpreti il dato e come procedi?",
     "en": "You notice that the last .pf file generated in the Prefetch folder dates back more than an hour before the start of the Screenshare. How do you interpret this and how do you proceed?"
    },
    {
     "id": "q15",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Quali elementi ti permettono di capire se l'utente ha scaricato, inserito o rimosso una mod mentre lo Screenshare era già in corso?",
     "en": "Which elements let you tell whether the user downloaded, inserted or removed a mod while the Screenshare was already in progress?"
    }
   ]
  },
  {
   "id": "dev",
   "ico": "💻",
   "tag": "DEV",
   "it": {
    "n": "Developer",
    "d": "Plugin, bot, sito e strumenti per la tierlist."
   },
   "en": {
    "n": "Developer",
    "d": "Plugins, bots, website and tools for the tierlist."
   },
   "q": [
    {
     "t": "sec",
     "it": "Domande Developer",
     "en": "Developer questions"
    },
    {
     "id": "q1",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Perché vorresti entrare nel team Developer di Elysian Tierlist?",
     "en": "Why would you like to join the Developer team of Elysian Tierlist?"
    },
    {
     "id": "q2",
     "t": "text",
     "max": 200,
     "req": 1,
     "it": "Con quali linguaggi e tecnologie lavori?",
     "en": "Which languages and technologies do you work with?",
     "hi": {
      "it": "Es. Java, JavaScript, Python, SQL, Discord.js…",
      "en": "E.g. Java, JavaScript, Python, SQL, Discord.js…"
     }
    },
    {
     "id": "q3",
     "t": "radio",
     "req": 1,
     "it": "Quanto ti consideri esperto?",
     "en": "How experienced do you consider yourself?",
     "o": {
      "it": [
       "Principiante (meno di 1 anno)",
       "Intermedio (1-3 anni)",
       "Avanzato (più di 3 anni)"
      ],
      "en": [
       "Beginner (less than 1 year)",
       "Intermediate (1-3 years)",
       "Advanced (more than 3 years)"
      ]
     }
    },
    {
     "id": "q4",
     "t": "url",
     "max": 250,
     "it": "Link GitHub o portfolio",
     "en": "GitHub or portfolio link",
     "hi": {
      "it": "Facoltativo, ma molto consigliato.",
      "en": "Optional, but strongly recommended."
     }
    },
    {
     "id": "q5",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Descrivi 2 o 3 progetti che hai realizzato e il tuo ruolo in ciascuno.",
     "en": "Describe 2 or 3 projects you have built and your role in each."
    },
    {
     "id": "q6",
     "t": "check",
     "req": 1,
     "it": "Quali ambiti sai gestire?",
     "en": "Which areas can you handle?",
     "o": {
      "it": [
       "Plugin Minecraft (Java)",
       "Bot Discord",
       "Sito web (frontend)",
       "Backend e API",
       "Database",
       "Grafica e UI",
       "Hosting e server",
       "Altro"
      ],
      "en": [
       "Minecraft plugins (Java)",
       "Discord bots",
       "Website (frontend)",
       "Backend and APIs",
       "Databases",
       "Graphics and UI",
       "Hosting and servers",
       "Other"
      ]
     },
     "otherIdx": 7
    },
    {
     "id": "q7",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come proteggeresti un sistema che gestisce dati degli utenti (ID Discord, nickname, candidature)?",
     "en": "How would you protect a system that handles user data (Discord IDs, nicknames, applications)?"
    },
    {
     "id": "q8",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come gestisci token, chiavi API, webhook e password all'interno di un progetto?",
     "en": "How do you handle tokens, API keys, webhooks and passwords inside a project?"
    },
    {
     "id": "q9",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Il sistema di classifica mostra tier sbagliati in produzione. Descrivi in ordine come procedi.",
     "en": "The ranking system shows wrong tiers in production. Describe in order how you proceed."
    },
    {
     "id": "q10",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un amico staff ti chiede di modificare a mano il tier di un giocatore nel database. Cosa fai?",
     "en": "A staff friend asks you to manually change a player's tier in the database. What do you do?"
    },
    {
     "id": "q11",
     "t": "radio",
     "req": 1,
     "it": "Hai esperienza di lavoro in team con Git e code review?",
     "en": "Do you have experience working in a team with Git and code review?",
     "o": {
      "it": [
       "Sì, regolarmente",
       "Qualche volta",
       "No, solo progetti personali"
      ],
      "en": [
       "Yes, regularly",
       "Sometimes",
       "No, only personal projects"
      ]
     },
     "x": {
      "it": "Descrivi brevemente come lavori quando collabori con altri.",
      "en": "Briefly describe how you work when collaborating with others."
     }
    },
    {
     "id": "q12",
     "t": "radio",
     "req": 1,
     "it": "Quanto tempo puoi dedicare mediamente al progetto?",
     "en": "How much time can you dedicate to the project on average?",
     "o": {
      "it": [
       "Meno di 3 ore a settimana",
       "3-6 ore a settimana",
       "7-10 ore a settimana",
       "11-15 ore a settimana",
       "Più di 15 ore a settimana"
      ],
      "en": [
       "Less than 3 hours a week",
       "3-6 hours a week",
       "7-10 hours a week",
       "11-15 hours a week",
       "More than 15 hours a week"
      ]
     },
     "x": {
      "it": "Aggiungi giorni e fasce orarie indicative.",
      "en": "Add approximate days and time slots."
     }
    },
    {
     "id": "q13",
     "t": "area",
     "max": 1500,
     "it": "Cosa miglioreresti nel sito, nel sistema di candidature o nella tierlist?",
     "en": "What would you improve in the website, the application system or the tier list?",
     "hi": {
      "it": "Facoltativo.",
      "en": "Optional."
     }
    },
    {
     "t": "sec",
     "it": "Dichiarazioni finali",
     "en": "Final statements"
    },
    {
     "id": "confirm",
     "t": "conf",
     "req": 1,
     "it": "Dichiarazioni finali",
     "en": "Final statements",
     "items": [
      {
       "it": "Ho almeno 14 anni e soddisfo l'età minima richiesta da Discord nel mio Paese.",
       "en": "I am at least 14 years old and meet the minimum age required by Discord in my country."
      },
      {
       "it": "Ho scritto, o ho il diritto di usare, tutto il codice che consegnerò, senza copiare lavori altrui.",
       "en": "I wrote, or have the right to use, all the code I will deliver, without copying other people's work."
      },
      {
       "it": "Mi impegno a non accedere, copiare o diffondere dati degli utenti o informazioni dei canali riservati (NDA).",
       "en": "I commit not to access, copy or share user data or information from the reserved channels (NDA)."
      },
      {
       "it": "Accetto che gli accessi possano essere revocati in caso di abuso dei permessi.",
       "en": "I accept that access may be revoked in case of abuse of permissions."
      },
      {
       "it": "Confermo di aver risposto in modo sincero e personale.",
       "en": "I confirm that I answered honestly and personally."
      }
     ]
    }
   ]
  },
  {
   "id": "t17",
   "ico": "⚔️",
   "tag": "1.7",
   "it": {
    "n": "Verified Tester 1.7",
    "d": "Testa i giocatori nelle modalità della 1.7."
   },
   "en": {
    "n": "Verified Tester 1.7",
    "d": "Test players in the 1.7 gamemodes."
   },
   "q": [
    {
     "t": "sec",
     "it": "Domande Verified Tester 1.7",
     "en": "Verified Tester 1.7 questions"
    },
    {
     "id": "q1",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Perché vorresti diventare un Verified-Tester per questa tier list?",
     "en": "Why would you like to become a Verified Tester for this tier list?"
    },
    {
     "id": "q2",
     "t": "radio",
     "two": 1,
     "req": 1,
     "it": "Quale modalità principale desideri testare?",
     "en": "Which main gamemode do you want to test?",
     "o": [
      "Bedfight",
      "Block Fight",
      "Bedwars",
      "Boxing",
      "Sumo",
      "No-Debuff",
      "UHC 1.7+",
      "Topfight",
      "Battlerush",
      "Pearlfight",
      "Bridge",
      "Spleef",
      "Fireball-fight",
      "Classic",
      "Build UHC",
      "Emerald Rush"
     ]
    },
    {
     "id": "q3",
     "t": "radio",
     "two": 1,
     "req": 1,
     "it": "Qual è attualmente il tuo tier personale nella modalità scelta sopra?",
     "en": "What is your current personal tier in the gamemode chosen above?",
     "o": [
      "B+",
      "A-",
      "A",
      "A+",
      "S-",
      "S",
      "S+"
     ]
    },
    {
     "id": "q4",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Descrivi la modalità che hai scelto nella domanda 2 durante lo svolgimento di un tier test ufficiale.",
     "en": "Describe the gamemode you chose in question 2 as it is run during an official tier test.",
     "hi": {
      "it": "Risposta aperta. Spiega come si svolge concretamente il test, le fasi principali e cosa osservi attentamente.",
      "en": "Open answer. Explain how the test is actually carried out, the main phases and what you pay close attention to."
     }
    },
    {
     "id": "q5",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quali sono le regole fondamentali e i divieti principali validi durante i test della modalità scelta?",
     "en": "What are the fundamental rules and main prohibitions during tests of the chosen gamemode?"
    },
    {
     "id": "q6",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Spiega nel dettaglio le principali tecniche e meccaniche di combattimento utilizzate in questa modalità (es. blockhit, w-tap, s-tap, aim, spacing, click methods).",
     "en": "Explain in detail the main combat techniques and mechanics used in this gamemode (e.g. blockhit, w-tap, s-tap, aim, spacing, click methods)."
    },
    {
     "id": "q7",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come si differenzia la gestione del combattimento e del ritmo di gioco nella versione 1.7+ rispetto ad altre versioni?",
     "en": "How does combat handling and game rhythm in version 1.7+ differ from other versions?"
    },
    {
     "id": "q8",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Durante un test noti che un giocatore sta eseguendo movimenti o colpi anomali (es. portata o velocità sospetta). Qual è la procedura tecnica corretta da seguire?",
     "en": "During a test you notice a player performing abnormal movements or hits (e.g. suspicious reach or speed). What is the correct technical procedure to follow?"
    },
    {
     "id": "q9",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quali sono i criteri di valutazione personali e oggettivi che adotti per decidere se un player merita un tier superiore o inferiore nella tua modalità?",
     "en": "What personal and objective evaluation criteria do you use to decide whether a player deserves a higher or lower tier in your gamemode?"
    },
    {
     "id": "q10",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un giocatore sostiene di aver perso il test unicamente a causa del ping o di un leggero lag. Come analizzi la situazione senza farti condizionare?",
     "en": "A player claims they lost the test solely because of ping or slight lag. How do you analyze the situation without being swayed?"
    },
    {
     "id": "q11",
     "t": "radio",
     "req": 1,
     "it": "Un tester è amico stretto di uno dei due contendenti in un test importante. Come va gestita la situazione per garantire assoluta trasparenza?",
     "en": "A tester is a close friend of one of the two contenders in an important test. How should the situation be handled to guarantee absolute transparency?",
     "o": {
      "it": [
       "Lasciare fare al tester amico tanto è affidabile",
       "Sostituire immediatamente il tester con un altro membro dello staff neutrale",
       "Far decidere ai giocatori se accettare il tester",
       "Annullare definitivamente la richiesta di test"
      ],
      "en": [
       "Let the friend tester proceed, he is reliable anyway",
       "Immediately replace the tester with another neutral staff member",
       "Let the players decide whether to accept the tester",
       "Permanently cancel the test request"
      ]
     },
     "x": {
      "it": "Motiva brevemente la risposta.",
      "en": "Briefly explain your answer."
     }
    },
    {
     "id": "q12",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Due giocatori contestano il risultato di un test pubblicato e forniscono versioni completamente opposte dei fatti. Quale azione intraprendi per prima?",
     "en": "Two players dispute the result of a published test and give completely opposite versions of the facts. What action do you take first?"
    },
    {
     "id": "q13",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un player molto noto e influente nella community ti scrive in privato chiedendoti di alzarlo di tier \"di favore\", promettendo sponsorizzazioni. Come reagisci?",
     "en": "A very well-known and influential player in the community messages you privately asking you to raise their tier \"as a favor\", promising sponsorships. How do you react?"
    },
    {
     "id": "q14",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come applichi concretamente il principio dell'imparzialità quando devi valutare un giocatore con cui hai avuto discussioni o antipatie in passato?",
     "en": "How do you concretely apply the principle of impartiality when you must evaluate a player you have had arguments or dislike with in the past?"
    },
    {
     "id": "q15",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente minaccia di diffondere screenshot manipolati dei canali staff riservati (NDA) se non gli viene assegnato il tier S+. Come procedi?",
     "en": "A user threatens to spread manipulated screenshots of the reserved staff channels (NDA) unless they are given tier S+. How do you proceed?"
    },
    {
     "id": "q16",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Noti che un collega tester sta palesemente favorendo i propri amici durante i test di gruppo. Qual è il comportamento corretto da parte tua?",
     "en": "You notice that a fellow tester is blatantly favoring their own friends during group tests. What is the correct behavior on your part?"
    },
    {
     "id": "q17",
     "t": "area",
     "max": 3000,
     "w": 100,
     "req": 1,
     "it": "Durante un test nasce una forte discussione con insulti tra i due partecipanti. Descrivi in ordine cronologico tutte le tue azioni per sedare la situazione.",
     "en": "During a test a heated argument with insults breaks out between the two participants. Describe in chronological order all your actions to calm the situation.",
     "hi": {
      "it": "Risposta aperta (minimo 100 parole).",
      "en": "Open answer (minimum 100 words)."
     }
    },
    {
     "id": "q18",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un giocatore insiste nel voler rigiocare un test perso perché \"non era concentrato\". Come gestisci la richiesta nel rispetto del regolamento?",
     "en": "A player insists on replaying a lost test because \"they were not focused\". How do you handle the request in line with the rules?"
    },
    {
     "id": "q19",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come definisci il concetto di NDA (Non-Disclosure Agreement) applicato ai canali riservati dello staff e perché la segretezza è vitale?",
     "en": "How do you define the concept of NDA (Non-Disclosure Agreement) applied to reserved staff channels, and why is secrecy vital?"
    },
    {
     "id": "q20",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente richiede informazioni dettagliate sui criteri interni di voto discussi nei canali segreti dello staff. Cosa gli rispondi?",
     "en": "A user asks for detailed information about the internal voting criteria discussed in the secret staff channels. What do you answer?"
    },
    {
     "id": "q21",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quale comportamento è severamente vietato riguardo ai dati personali o alle informazioni sensibili degli utenti all'interno della community?",
     "en": "Which behavior is strictly forbidden regarding users' personal data or sensitive information within the community?"
    },
    {
     "id": "q22",
     "t": "radio",
     "req": 1,
     "it": "Se un utente viola palesemente le linee guida globali di Discord all'interno del server, oltre a sanzionarlo internamente, cosa bisogna fare?",
     "en": "If a user clearly violates Discord's global guidelines within the server, besides sanctioning them internally, what must be done?",
     "o": {
      "it": [
       "Ignorare la cosa perché riguarda solo Discord",
       "Segnalare direttamente la violazione agli strumenti di supporto/trust & safety di Discord",
       "Chiedere scusa all'utente",
       "Pubblicare i suoi dati in chat pubblica"
      ],
      "en": [
       "Ignore it because it only concerns Discord",
       "Report the violation directly to Discord's support / trust & safety tools",
       "Apologize to the user",
       "Publish their data in public chat"
      ]
     },
     "x": {
      "it": "Motiva la risposta.",
      "en": "Explain your answer."
     }
    },
    {
     "id": "q23",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un membro dello staff ti chiede di rivelargli il voto espresso da un altro tester in segreto. Come ti comporti?",
     "en": "A staff member asks you to reveal the vote another tester cast in secret. How do you behave?"
    },
    {
     "t": "sec",
     "it": "Conferme finali",
     "en": "Final confirmations"
    },
    {
     "id": "confirm",
     "t": "conf",
     "req": 1,
     "it": "Conferme finali",
     "en": "Final confirmations",
     "items": [
      {
       "it": "Ho almeno 14 anni e rispetto i requisiti di età di Discord.",
       "en": "I am at least 14 years old and meet Discord's age requirements."
      },
      {
       "it": "Conosco perfettamente l'italiano e possiedo un livello di inglese almeno A2/B1.",
       "en": "I know Italian perfectly and have an English level of at least A2/B1."
      },
      {
       "it": "Possiedo una conoscenza approfondita del PvP 1.7+ e della modalità scelta.",
       "en": "I have in-depth knowledge of 1.7+ PvP and of the chosen gamemode."
      },
      {
       "it": "Accetto di mantenere la totale segretezza dei canali riservati (NDA).",
       "en": "I agree to keep the reserved channels completely confidential (NDA)."
      },
      {
       "it": "Confermo di essere imparziale e di aver risposto in modo sincero e personale.",
       "en": "I confirm that I am impartial and that I answered honestly and personally."
      }
     ]
    }
   ]
  },
  {
   "id": "t19",
   "ico": "🗡️",
   "tag": "1.9+",
   "it": {
    "n": "Verified Tester 1.9+",
    "d": "Testa i giocatori nelle modalità della 1.9+."
   },
   "en": {
    "n": "Verified Tester 1.9+",
    "d": "Test players in the 1.9+ gamemodes."
   },
   "q": [
    {
     "t": "sec",
     "it": "Domande Verified Tester 1.9+",
     "en": "Verified Tester 1.9+ questions"
    },
    {
     "id": "q1",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Perché vorresti diventare un Verified-Tester per questa tier list?",
     "en": "Why would you like to become a Verified Tester for this tier list?"
    },
    {
     "id": "q2",
     "t": "radio",
     "two": 1,
     "req": 1,
     "it": "Quale modalità principale desideri testare?",
     "en": "Which main gamemode do you want to test?",
     "o": [
      "Crystal",
      "Sword",
      "Axe",
      "Mace",
      "Pot",
      "Netherite Pot",
      "SMP",
      "UHC"
     ]
    },
    {
     "id": "q3",
     "t": "radio",
     "two": 1,
     "req": 1,
     "it": "Qual è attualmente il tuo tier personale nella modalità scelta sopra?",
     "en": "What is your current personal tier in the gamemode chosen above?",
     "o": [
      "B+",
      "A-",
      "A",
      "A+",
      "S-",
      "S",
      "S+"
     ]
    },
    {
     "id": "q4",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Descrivi la modalità che hai scelto nella domanda 2 durante lo svolgimento di un tier test ufficiale.",
     "en": "Describe the gamemode you chose in question 2 as it is run during an official tier test.",
     "hi": {
      "it": "Risposta aperta. Spiega come si svolge concretamente il test, le fasi principali e cosa osservi attentamente.",
      "en": "Open answer. Explain how the test is actually carried out, the main phases and what you pay close attention to."
     }
    },
    {
     "id": "q5",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quali sono le regole fondamentali e i divieti principali validi durante i test della modalità scelta?",
     "en": "What are the fundamental rules and main prohibitions during tests of the chosen gamemode?"
    },
    {
     "id": "q6",
     "t": "area",
     "max": 2000,
     "req": 1,
     "it": "Spiega nel dettaglio le principali tecniche e meccaniche di combattimento utilizzate in questa modalità (es. timing del cooldown, sweep, critical hit, gestione dello scudo e disabilitazione con l'ascia, posizionamento dei cristalli, spacing, strafing).",
     "en": "Explain in detail the main combat techniques and mechanics used in this gamemode (e.g. cooldown timing, sweep attacks, critical hits, shield handling and axe disabling, crystal placement, spacing, strafing)."
    },
    {
     "id": "q7",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come si differenzia la gestione del combattimento e del ritmo di gioco nella versione 1.9+ rispetto alla 1.7/1.8?",
     "en": "How does combat handling and game rhythm in version 1.9+ differ from 1.7/1.8?"
    },
    {
     "id": "q8",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Durante un test noti che un giocatore sta eseguendo movimenti o colpi anomali (es. portata sospetta, cooldown ignorato, piazzamenti di cristalli o cambi di oggetto innaturalmente rapidi). Qual è la procedura tecnica corretta da seguire?",
     "en": "During a test you notice a player performing abnormal movements or hits (e.g. suspicious reach, ignored cooldown, unnaturally fast crystal placements or item swaps). What is the correct technical procedure to follow?"
    },
    {
     "id": "q9",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quali sono i criteri di valutazione personali e oggettivi che adotti per decidere se un player merita un tier superiore o inferiore nella tua modalità?",
     "en": "What personal and objective evaluation criteria do you use to decide whether a player deserves a higher or lower tier in your gamemode?"
    },
    {
     "id": "q10",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un giocatore sostiene di aver perso il test unicamente a causa del ping o di un leggero lag. Come analizzi la situazione senza farti condizionare?",
     "en": "A player claims they lost the test solely because of ping or slight lag. How do you analyze the situation without being swayed?"
    },
    {
     "id": "q11",
     "t": "radio",
     "req": 1,
     "it": "Un tester è amico stretto di uno dei due contendenti in un test importante. Come va gestita la situazione per garantire assoluta trasparenza?",
     "en": "A tester is a close friend of one of the two contenders in an important test. How should the situation be handled to guarantee absolute transparency?",
     "o": {
      "it": [
       "Lasciare fare al tester amico tanto è affidabile",
       "Sostituire immediatamente il tester con un altro membro dello staff neutrale",
       "Far decidere ai giocatori se accettare il tester",
       "Annullare definitivamente la richiesta di test"
      ],
      "en": [
       "Let the friend tester proceed, he is reliable anyway",
       "Immediately replace the tester with another neutral staff member",
       "Let the players decide whether to accept the tester",
       "Permanently cancel the test request"
      ]
     },
     "x": {
      "it": "Motiva brevemente la risposta.",
      "en": "Briefly explain your answer."
     }
    },
    {
     "id": "q12",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Due giocatori contestano il risultato di un test pubblicato e forniscono versioni completamente opposte dei fatti. Quale azione intraprendi per prima?",
     "en": "Two players dispute the result of a published test and give completely opposite versions of the facts. What action do you take first?"
    },
    {
     "id": "q13",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un player molto noto e influente nella community ti scrive in privato chiedendoti di alzarlo di tier \"di favore\", promettendo sponsorizzazioni. Come reagisci?",
     "en": "A very well-known and influential player in the community messages you privately asking you to raise their tier \"as a favor\", promising sponsorships. How do you react?"
    },
    {
     "id": "q14",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come applichi concretamente il principio dell'imparzialità quando devi valutare un giocatore con cui hai avuto discussioni o antipatie in passato?",
     "en": "How do you concretely apply the principle of impartiality when you must evaluate a player you have had arguments or dislike with in the past?"
    },
    {
     "id": "q15",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente minaccia di diffondere screenshot manipolati dei canali staff riservati (NDA) se non gli viene assegnato il tier S+. Come procedi?",
     "en": "A user threatens to spread manipulated screenshots of the reserved staff channels (NDA) unless they are given tier S+. How do you proceed?"
    },
    {
     "id": "q16",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Noti che un collega tester sta palesemente favorendo i propri amici durante i test di gruppo. Qual è il comportamento corretto da parte tua?",
     "en": "You notice that a fellow tester is blatantly favoring their own friends during group tests. What is the correct behavior on your part?"
    },
    {
     "id": "q17",
     "t": "area",
     "max": 3000,
     "w": 100,
     "req": 1,
     "it": "Durante un test nasce una forte discussione con insulti tra i due partecipanti. Descrivi in ordine cronologico tutte le tue azioni per sedare la situazione.",
     "en": "During a test a heated argument with insults breaks out between the two participants. Describe in chronological order all your actions to calm the situation.",
     "hi": {
      "it": "Risposta aperta (minimo 100 parole).",
      "en": "Open answer (minimum 100 words)."
     }
    },
    {
     "id": "q18",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un giocatore insiste nel voler rigiocare un test perso perché \"non era concentrato\". Come gestisci la richiesta nel rispetto del regolamento?",
     "en": "A player insists on replaying a lost test because \"they were not focused\". How do you handle the request in line with the rules?"
    },
    {
     "id": "q19",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Come definisci il concetto di NDA (Non-Disclosure Agreement) applicato ai canali riservati dello staff e perché la segretezza è vitale?",
     "en": "How do you define the concept of NDA (Non-Disclosure Agreement) applied to reserved staff channels, and why is secrecy vital?"
    },
    {
     "id": "q20",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un utente richiede informazioni dettagliate sui criteri interni di voto discussi nei canali segreti dello staff. Cosa gli rispondi?",
     "en": "A user asks for detailed information about the internal voting criteria discussed in the secret staff channels. What do you answer?"
    },
    {
     "id": "q21",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Quale comportamento è severamente vietato riguardo ai dati personali o alle informazioni sensibili degli utenti all'interno della community?",
     "en": "Which behavior is strictly forbidden regarding users' personal data or sensitive information within the community?"
    },
    {
     "id": "q22",
     "t": "radio",
     "req": 1,
     "it": "Se un utente viola palesemente le linee guida globali di Discord all'interno del server, oltre a sanzionarlo internamente, cosa bisogna fare?",
     "en": "If a user clearly violates Discord's global guidelines within the server, besides sanctioning them internally, what must be done?",
     "o": {
      "it": [
       "Ignorare la cosa perché riguarda solo Discord",
       "Segnalare direttamente la violazione agli strumenti di supporto/trust & safety di Discord",
       "Chiedere scusa all'utente",
       "Pubblicare i suoi dati in chat pubblica"
      ],
      "en": [
       "Ignore it because it only concerns Discord",
       "Report the violation directly to Discord's support / trust & safety tools",
       "Apologize to the user",
       "Publish their data in public chat"
      ]
     },
     "x": {
      "it": "Motiva la risposta.",
      "en": "Explain your answer."
     }
    },
    {
     "id": "q23",
     "t": "area",
     "max": 1500,
     "req": 1,
     "it": "Un membro dello staff ti chiede di rivelargli il voto espresso da un altro tester in segreto. Come ti comporti?",
     "en": "A staff member asks you to reveal the vote another tester cast in secret. How do you behave?"
    },
    {
     "t": "sec",
     "it": "Conferme finali",
     "en": "Final confirmations"
    },
    {
     "id": "confirm",
     "t": "conf",
     "req": 1,
     "it": "Conferme finali",
     "en": "Final confirmations",
     "items": [
      {
       "it": "Ho almeno 14 anni e rispetto i requisiti di età di Discord.",
       "en": "I am at least 14 years old and meet Discord's age requirements."
      },
      {
       "it": "Conosco perfettamente l'italiano e possiedo un livello di inglese almeno A2/B1.",
       "en": "I know Italian perfectly and have an English level of at least A2/B1."
      },
      {
       "it": "Possiedo una conoscenza approfondita del PvP 1.9+ e della modalità scelta.",
       "en": "I have in-depth knowledge of 1.9+ PvP and of the chosen gamemode."
      },
      {
       "it": "Accetto di mantenere la totale segretezza dei canali riservati (NDA).",
       "en": "I agree to keep the reserved channels completely confidential (NDA)."
      },
      {
       "it": "Confermo di essere imparziale e di aver risposto in modo sincero e personale.",
       "en": "I confirm that I am impartial and that I answered honestly and personally."
      }
     ]
    }
   ]
  }
 ]
};
