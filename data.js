// Management Nieuwsoverzicht — Eneco in Huis
// Dit bestand wordt elke ochtend automatisch bijgewerkt door de geplande taak.
// GitHub verbinding getest op: 2026-02-28 12:03

const briefsData = [
  {
    date: "2026-03-13",
    dateFormatted: "Thursday 13 March 2026",
    samenvatting: "Eneco Group's new CEO Martijn Hagens (ex-Vattenfall) took office March 1 — the reorganization deadline (350 jobs) is now 18 days away. The TTF gas price holds at €50/MWh (+57% since Feb) as Iran's Hormuz blockade escalates. The Dutch heat pump market dropped 30% in 2024 (125k units) but the 2026 hybrid mandate and €511M ISDE budget create a recovery runway. Competitor consolidation accelerates: Feenstra-Breman territorial partnership and Quatt's $32M raise signal the market is maturing. ECB rate decision March 19 may unlock renovation financing. Technician shortage (250k+ by 2026) remains EiH's binding constraint.",
    kpis: [
      { label: "TTF Gas Price", value: "€50/MWh", sub: "+57% since Feb — Hormuz escalation", trend: "negative" },
      { label: "Heat Pump Market", value: "125k units", sub: "-30% in 2024; hybrid mandate 2026", trend: "negative" },
      { label: "ISDE Budget 2026", value: "€511M", sub: "Extended to 2031 — €1,025 base amount", trend: "positive" },
      { label: "Reorg Deadline", value: "18 days", sub: "350 jobs — deadline March 31, 2026", trend: "negative" }
    ],
    sections: [
      {
        title: "Eneco Group & Leadership",
        icon: "🏢",
        items: [
          {
            title: "New CEO Martijn Hagens starts at Eneco — former Vattenfall NV CEO brings energy market expertise",
            sentiment: "neutral",
            body: "Martijn Hagens, previously Senior VP at Vattenfall and CEO of Vattenfall NV, took office as Eneco CEO on March 1, 2026. He succeeds Kees Jan Rameau, who stays as COO for Integrated Energy & Assets. Hagens' Vattenfall background signals emphasis on energy markets and sustainable heating solutions. For Eneco in Huis — a separate BV with its own P&L but Eneco as sole shareholder — the new CEO's strategic priorities will directly influence whether EiH continues as a subsidiary, is scaled up, or potentially divested.",
            actie: "Director Schoon to schedule bilateral with CEO Hagens to establish EiH's strategic value proposition within the new Eneco leadership structure.",
            actieType: "Strategie",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/"
          },
          {
            title: "Reorganization deadline March 31: 350 positions — 18 days remaining",
            sentiment: "negative",
            body: "The Eneco reorganization (announced December 2024, driven by rising costs and declining heat pump/EV demand) reaches its deadline on March 31. Eneco expects to resolve most through natural attrition and reducing external hires. Eneco in Huis is a separate legal entity with 250 employees but relies on shared Eneco services. Internal uncertainty can damage recruitment and retention of scarce certified technicians — the company's most critical resource.",
            actie: "Communicate clear internal message to all 250 EiH employees before March 31 on what the reorganization means (and doesn't mean) for EiH. Coordinate with HR lead Kirstin Hartwijk.",
            actieType: "HR",
            sourceUrl: "https://nos.nl/l/2547675"
          }
        ]
      },
      {
        title: "Energy Market & Geopolitics",
        icon: "⚡",
        items: [
          {
            title: "TTF gas at €50/MWh — Iran's Hormuz blockade disrupts 20% of global oil supply",
            sentiment: "negative",
            body: "The TTF gas price holds at approximately €50.27/MWh as of March 12, up 57% since late February. Iran has expanded its Strait of Hormuz closure, attacking commercial vessels including US-flagged ships. War-risk premiums for tanker transits have doubled. For EiH's 100,000+ maintenance pool customers on gas boilers, this translates to significantly higher heating costs — a direct trigger for heat pump conversion conversations.",
            actie: "Launch targeted outreach to ServiceGemak® customers with highest estimated gas consumption. Use the gas price spike as a conversation starter for hybrid heat pump advisory.",
            actieType: "Marketing",
            sourceUrl: "https://www.investing.com/commodities/dutch-ttf-gas-c1-futures"
          },
          {
            title: "Consumer energy bills expected 4% lower in 2026 despite gas tax increases — mixed signal for conversion urgency",
            sentiment: "neutral",
            body: "ACM reports households will pay approximately 4% less for energy in 2026 due to lower wholesale rates, despite higher network tariffs (+€25/year) and increased gas taxes. Energy spending drops from 4.4% to 4.1% of disposable income. However, the current Hormuz crisis may reverse this trend in Q2. The gap between gas and electricity taxation continues to widen — structurally favoring electrification.",
            actie: null,
            actieType: null,
            sourceUrl: "https://www.acm.nl/en/publications/acm-households-pay-25-euros-year-more-2026-network-tariffs-natural-gas-and-electricity"
          }
        ]
      },
      {
        title: "Heat Pump Market & Innovation",
        icon: "🔥",
        items: [
          {
            title: "Dutch heat pump market dropped 30% in 2024 (125k units) — but 2026 hybrid mandate triggers recovery",
            sentiment: "negative",
            body: "New heat pump installations fell from 179,000 in 2023 to 125,000 in 2024, a 30% decline driven by policy uncertainty (cancelled gas boiler ban, net metering phase-out). The installed base now totals 752,000 units / 6.9 GW. However, the 2026 hybrid heat pump replacement mandate and strong ISDE subsidies create recovery conditions. EiH's Whspr silent heat pump pilot (~20 units installed) could unlock the dense urban segment that standard heat pumps cannot serve.",
            actie: "Accelerate Whspr pilot evaluation. Model demand scenarios based on hybrid mandate activation and current ISDE subsidy uptake rates.",
            actieType: "Strategie",
            sourceUrl: "https://warmte-pompen.nl/kabinet-verlengt-isde-subsidie-na-positieve-evaluatie-511-miljoen-euro-budget-in-2026/"
          },
          {
            title: "ISDE 2026: €511M budget extended to 2031 — heat pump subsidy starts at €1,025 from first kW",
            sentiment: "positive",
            body: "The Dutch government extended the ISDE subsidy following positive evaluation. The 2026 budget is €511M (down from €550M in 2025). Key change: the variable €225/kW now applies from the first kW (previously from the second). New: €400 ventilation subsidy when combined with insulation. All EiH heat pump models (Intergas Xtend, Remeha Elga Ace, Vaillant aroTHERM) are ISDE-eligible — correct subsidy communication in sales is critical.",
            actie: "Update all quotation tools, website pricing, and sales scripts with new ISDE amounts immediately. Train sales engineers on the new ventilation combo subsidy.",
            actieType: "Operaties",
            sourceUrl: "https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026"
          }
        ]
      },
      {
        title: "Competitive Landscape",
        icon: "🎯",
        items: [
          {
            title: "Feenstra and Breman form territorial partnership — market consolidation accelerating",
            sentiment: "negative",
            body: "Feenstra (owned by Vattenfall, 800k+ households) and Breman Installatiegroep (450k homes) have established an operational partnership dividing service territories by postal code. This creates a formidable combined footprint. Meanwhile, Quatt — an Amsterdam-based heat pump startup — closed a $32.3M Series A, funding AI-driven heat pump optimization with 7,500+ installations. The market is consolidating around scale players while tech-enabled newcomers capture the innovation narrative.",
            actie: "Conduct competitive analysis of Feenstra-Breman territorial coverage vs. EiH service area. Identify postal code gaps where EiH can capture market share. Evaluate Quatt's smart technology as potential differentiator risk.",
            actieType: "Strategie",
            sourceUrl: "https://tracxn.com/d/companies/quatt/__IXu1vVk_eElBC9mAc1kQ053k3QlGFQ38ojzgd8jzSGI"
          }
        ]
      },
      {
        title: "Housing Market & Customer Base",
        icon: "🏠",
        items: [
          {
            title: "Median house price crosses €500k — market tight with 395,000 home structural shortage",
            sentiment: "positive",
            body: "NVM data shows median sale price exceeding €500,000 with 3.9% YoY growth. Rabobank forecasts 4.8% for 2026. The structural shortage of 395,000 homes persists. Transaction volume: ~227,000 expected in 2026 (down from 239,000 record in 2025). The landlord sell-off wave (rent controls) continues until June 2026. Each existing home transaction is an installation moment — buyers typically encounter aging heating systems.",
            actie: "Develop realtor partnership program targeting high-transaction postal codes. Create 'new home, new heating' package for buyers of existing homes.",
            actieType: "Marketing",
            sourceUrl: "https://www.rabobank.com/knowledge/d011508452-dutch-housing-market-quarterly-no-signs-of-cooling-even-as-supply-grows"
          },
          {
            title: "ECB rate decision March 19 — potential rate cuts would boost renovation financing",
            sentiment: "neutral",
            body: "The ECB's March 18-19 meeting will announce rate decisions on March 19. 85% of economists expect rates unchanged through 2026, but if euro appreciation continues, a mid-2026 rate cut becomes more likely. Stable or lower rates support mortgage refinancing and home renovation lending — a direct enabler for customers financing heat pump installations through their mortgage.",
            actie: null,
            actieType: null,
            sourceUrl: "https://global.morningstar.com/en-gb/economy/key-interest-rate-decision-dates-2026"
          }
        ]
      },
      {
        title: "HR & Workforce",
        icon: "👷",
        items: [
          {
            title: "Netherlands facing 250,000+ skilled worker shortage by 2026 — HVAC technicians among most critical",
            sentiment: "negative",
            body: "The Netherlands expects a skilled worker deficit exceeding 250,000 by 2026. HVAC technicians and electricians are among the top shortage fields through 2030+. Retiring experienced technicians outnumber newcomers, and knowledge transfer is slow. EiH's 300 daily customer visits require a fully staffed field workforce — every vacancy directly reduces revenue capacity. The company's internal Bedrijfsschool (training academy) is a strategic moat that most competitors lack.",
            actie: "Scale Bedrijfsschool intake. Launch 'career switcher' campaign targeting adjacent trades (plumbers, automotive). Partner with ROC institutions for structured apprenticeship pipeline.",
            actieType: "HR",
            sourceUrl: "https://www.trinamics.nl/en/blog/top-10-trends-in-technical-professions-in-the-netherlands-2026/"
          }
        ]
      }
    ],
    priorities: [
      "Leadership: Director Schoon to establish strategic positioning with new CEO Hagens — demonstrate EiH's value to Eneco before reorg dust settles.",
      "HR: Internal clarity on reorganization impact for all 250 employees before March 31 deadline.",
      "Strategy: Competitive response to Feenstra-Breman partnership — identify and defend key service territories.",
      "Marketing: Gas price spike conversion campaign targeting 100k+ ServiceGemak® maintenance customers.",
      "Operations: ISDE tools and quotations updated with 2026 amounts; Whspr pilot evaluation report by end-March."
    ]
  },
  {
    date: "2026-03-11",
    dateFormatted: "woensdag 11 maart 2026",
    samenvatting: "De reorganisatie van moederbedrijf Eneco bereikt op 31 maart haar deadline (350 banen) — directe afstemming over impact op Eneco in Huis is urgent. Tegelijk pioniert Eneco in Huis als eersten met een stille warmtepomp (Whspr), die geschikt is voor dichtbebouwde wijken — een potentieel nieuwe markt. De TTF-gasprijs blijft hoog (€49/MWh gemiddeld, piek €56) en consumentengas kost €1,39/m³, wat de urgentie bij klanten voor hybride warmtepompen versterkt. ISDE loopt tot 2031 met €511 mln budget; per 2029 wordt de hybride warmtepomp de minimale norm bij ketelvervanging. Arbeidsmarktdruk blijft kritisch: sectorbreed 120.000 technici nodig tot 2030.",
    kpis: [
      { label: "TTF Gasprijs", value: "€49/MWh", sub: "Gem. maart; piek €56/MWh — Hormuz-naschok", trend: "negative" },
      { label: "Consumentengas", value: "€1,39/m³", sub: "Stijgend t.o.v. vorige week — druk op huishoudens", trend: "negative" },
      { label: "ISDE Budget 2026", value: "€511 mln", sub: "Beschikbaar t/m 2031 — nieuw startbedrag €1.025", trend: "positive" },
      { label: "WP-norm verplicht", value: "2029", sub: "Hybride WP minimale norm bij ketelvervanging", trend: "positive" }
    ],
    sections: [
      {
        title: "Eneco Concern & Leiderschap",
        icon: "🏢",
        items: [
          {
            title: "Nieuwe CEO Eneco: Martijn Hagens per 1 maart aangetreden — Management Board hervormd",
            sentiment: "neutral",
            body: "Martijn Hagens is per 1 maart 2026 aangetreden als de nieuwe CEO van Eneco. Tegelijk is de samenstelling van de Management Board aangepast: de functie van COO-A is vervallen. Dit markeert een nieuwe leiderschapsfase voor het concern. Voor Eneco in Huis — opgericht december 2025 als zelfstandige dochter — is het van belang de relatie en afstemming met de nieuwe CEO-structuur tijdig te verankeren.",
            actie: "Directeur Diederick Schoon plant bilateraal met nieuwe CEO Hagens over strategie en positie van Eneco in Huis binnen het concern.",
            actieType: "Strategie"
          },
          {
            title: "Reorg-deadline 31 maart: 350 banen — impact op Eneco in Huis nog niet gecommuniceerd",
            sentiment: "negative",
            body: "De reorganisatie van Eneco (aankondiging december 2024) bereikt eind maart haar officiële deadline. Oorzaken waren stijgende loon- en materiaalkosten en een dalende warmtepomp- en EV-vraag. Eneco verwacht het grootste deel op te vangen via natuurlijk verloop, tijdelijke contracten en automatisering. Eneco in Huis is een aparte BV maar maakt gebruik van gedeelde Eneco-diensten; concrete doorwerking op de 250 EiH-medewerkers is nog niet geclarificeerd.",
            actie: "Concrete helderheid verschaffen aan eigen medewerkers vóór 31 maart over wat de reorg wel/niet raakt voor EiH. Interne communicatielijn met EiH-HR (Kirstin Hartwijk) en Eneco-directie opstellen.",
            actieType: "HR"
          }
        ]
      },
      {
        title: "Productinnovatie",
        icon: "💡",
        items: [
          {
            title: "Eneco in Huis installeert stille Whspr warmtepompen in dichtbebouwde wijken — nieuwe marktkans",
            sentiment: "positive",
            body: "Eneco en Whspr zijn een pilot gestart met een innovatieve stille warmtepomp die specifiek geschikt is voor dichtbebouwde woonwijken. Eneco in Huis heeft al circa 20 units bij klanten thuis geïnstalleerd. De meeste standaard warmtepompen zijn te lawaaierig voor rijwoningen en appartementen in stedelijk gebied — een segment dat tot nu toe grotendeels buiten bereik bleef. De stille warmtepomp kan zelfs in een hoek van de tuin worden geplaatst zonder geluidsoverlast voor buren.",
            actie: "Resultaten van de 20 pilotinstallaties evalueren en succescase uitwerken. Commercieel rollout-plan voorbereiden voor stedelijke marktsegmenten die tot nu toe moeilijk bereikbaar waren.",
            actieType: "Innovatie"
          }
        ]
      },
      {
        title: "Energiemarkt & Klanturgentie",
        icon: "⚡",
        items: [
          {
            title: "TTF gemiddeld €49/MWh in maart — hoge gasprijzen versterken businesscase warmtepomp structureel",
            sentiment: "negative",
            body: "Na de piek van €56/MWh als gevolg van de Iran/Hormuz-crisis begin maart ligt de TTF-gasprijs nog steeds hoog op gemiddeld €49/MWh. De consumentenprijs voor gas bedraagt per 11 maart €1,39/m³ — significant hoger dan een jaar geleden. Klanten met een CV-ketel ondervinden direct hogere stookkosten. Een hybride warmtepomp van Eneco in Huis reduceert de gasafhankelijkheid en biedt prijszekerheid — exact het gesprek dat klanten nu voeren.",
            actie: "Activeer conversiecampagne op bestaande CV-ketelklanten in het 100.000+ onderhoudspoolbestand met hoge gasrekening als aanleiding voor een warmtepompadviesgesprek.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "ISDE Subsidies & Beleid",
        icon: "🔥",
        items: [
          {
            title: "ISDE 2026: €511 mln budget, nieuw startbedrag €1.025 — offertetools bijwerken",
            sentiment: "neutral",
            body: "Het ISDE-budget voor 2026 is vastgesteld op €511 mln voor warmtepompen, zonneboilers, isolatie en warmtenetten. Voor lucht-waterwarmtepompen is het startbedrag gewijzigd: €1.025 (was €1.250) maar de subsidiabele variabele component (€225/kW) telt nu al vanaf de eerste kW — in plaats van de tweede. De ISDE loopt door tot 2031. Eneco in Huis verkoopt ISDE-subsidiabele warmtepompen (o.a. Intergas Xtend, Remeha Elga Ace, Vaillant aroTHERM) — correcte ISDE-communicatie in de sales funnel is essentieel.",
            actie: "Offertetools en klantcommunicatie per direct updaten met nieuwe ISDE-bedragen. Controleer of de subsidiabele modellen in het warmtepomp-assortiment correct zijn geconfigureerd in het verkoopsysteem.",
            actieType: "Operaties"
          },
          {
            title: "Hybride warmtepomp wordt minimale norm bij ketelvervanging per 2029 — 3 jaar runway",
            sentiment: "positive",
            body: "De eerdere verplichting per 2026 is in het coalitieakkoord van mei 2024 geschrapt. In het meest recente beleid (begin 2026) is vastgelegd dat slimme hybride warmtepompen per 2029 de minimale norm worden bij CV-ketelvervanging in bestaande bouw. Eneco in Huis verkoopt nu al uitsluitend 'hybrid ready' CV-ketels (Intergas, Remeha) én hybride warmtepompen — ideaal gepositioneerd. De 2029-norm creëert een goed voorspelbare vraagpiek.",
            actie: "Gebruik de 2029-deadline in klantcommunicatie als urgentieframe: 'Vervang nu en profiteer van lagere ISDE-subsidie en installatiemogelijkheid vóór de drukte.' Plan installatiescaling voor 2028-2029.",
            actieType: "Strategie"
          }
        ]
      },
      {
        title: "Woningmarkt & Klantenbase",
        icon: "🏠",
        items: [
          {
            title: "CBS: meer bestaande koopwoningen verkocht in jan 2026, minder nieuwbouw — netto meer vervangingsmoment",
            sentiment: "positive",
            body: "CBS rapporteert voor begin 2026 meer transacties in bestaande koopwoningen maar minder nieuwbouwoplevering. Rabobank voorspelt een gemiddelde prijsstijging van 6,6% voor 2026; ABN AMRO rekent op 3%. Het totaal verwacht verkopen is 223.000 (vs. 239.000 in recordjaar 2025). Elke woningtransactie is een potentieel installatiemoment voor Eneco in Huis — zeker bij verouderde CV-installaties in bestaande woningen.",
            actie: "Versterk samenwerking met makelaars en hypotheekadviseurs voor koppeling 'koopmomenten aan installatiemomenten'. Overweeg een referal-programma met regionale makelaars.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "HR & Arbeidsmarkt",
        icon: "👷",
        items: [
          {
            title: "Branchebreed tekort 120.000 technici tot 2030 — EiH Bedrijfsschool is strategisch voordeel",
            sentiment: "negative",
            body: "Wij Techniek prognosticeert dat de installatiebranche tot 2030 meer dan 120.000 nieuwe technici nodig heeft. Werkloosheid in de sector blijft laag (3,8%), vacatures stijgen. Eneco in Huis zoekt permanent installatiemonteurs voor CV-ketels en warmtepompen, storingen/onderhoud, en elektrotechniek — en heeft bewust een eigen Bedrijfsschool opgezet. Met 300 klantbezoeken per dag is monteursbeschikbaarheid de operationele bottleneck van de groei.",
            actie: "Versterk zij-instromerprogramma via de EiH Bedrijfsschool. Overweeg samenwerking met ROC's voor stageplaatsen. Zet gerichte wervingscampagne op, ook voor MBO-technici die willen omscholen naar warmtepomptechnologie.",
            actieType: "HR"
          }
        ]
      }
    ],
    priorities: [
      "Leiderschap: Directeur Schoon stemt nieuwe concernpositie af met CEO Martijn Hagens — voor 31 maart.",
      "HR: Interne duidelijkheid over reorg-impact voor EiH-medewerkers communiceren vóór 31 maart deadline.",
      "Innovatie: Whspr pilot-resultaten evalueren en commercieel rollout-plan stedelijke markt voorbereiden.",
      "Marketing: Conversiecampagne activeren op 100k+ onderhoudspoolklanten met hoge gasrekening als trigger.",
      "Operaties: ISDE-tools en offertes updaten met nieuwe bedragen; hybride WP 2029-planning opstarten."
    ]
  },
  {
    date: "2026-03-09",
    dateFormatted: "maandag 9 maart 2026",
    samenvatting: "De Iran-blokkade van de Straat van Hormuz heeft de TTF-gasprijs doen exploderen naar €54/MWh (+80% t.o.v. begin maart). Dit creëert acute kansen én risico's voor Eneco in Huis: verwarmingsalternatieven worden urgenter, maar inkoopkosten stijgen. De Eneco-reorganisatie (350 banen, deadline 31 maart) vraagt interne helderheid over impact op EiH. De woningmarkt blijft sterk (+6,6% Rabobank), het ISDE-budget is €509 mln, en de NHG-financieringsruimte biedt een concrete verkoophaak voor warmtepompen.",
    kpis: [
      { label: "TTF Gasprijs", value: "€54/MWh", sub: "+80% t.o.v. begin maart — Hormuz-crisis", trend: "negative" },
      { label: "Consumentengas", value: "€1,45/m³", sub: "Oplopend; mogelijk €1,90 bij langere blokkade", trend: "negative" },
      { label: "Woningprijsstijging", value: "+6,6%", sub: "Rabobank-prognose 2026 — markt blijft sterk", trend: "positive" },
      { label: "ISDE Budget 2026", value: "€509 mln", sub: "Beschikbaar voor warmtepompen bestaande bouw", trend: "positive" }
    ],
    sections: [
      {
        title: "Energiemarkt & Geopolitiek",
        icon: "⚡",
        items: [
          {
            title: "TTF gasprijs explodeert naar €54/MWh door Iran-blokkade Straat van Hormuz",
            sentiment: "negative",
            body: "Iran heeft de Straat van Hormuz geblokkeerd, de meest cruciale energievaarroute ter wereld. De TTF-gasprijs sloot op 3 maart op bijna €54/MWh — een stijging van 80% t.o.v. begin maart. Analisten waarschuwen dat bij een blokkade langer dan twee weken de prijs kan oplopen tot €90/MWh. Voor consumenten betekent dit een gasprijs richting €1,45/m³, mogelijk €1,90/m³.",
            actie: "Monitor dagelijks de TTF-ontwikkeling; stel scenarioplan op voor klantcommunicatie bij gasprijs boven €70/MWh — kans om warmtepomp-urgentie actief te communiceren.",
            actieType: "Strategie"
          },
          {
            title: "Energieleveranciers halen vaste contracten tijdelijk van de markt",
            sentiment: "negative",
            body: "Diverse leveranciers bieden tijdelijk geen vaste energiecontracten meer aan vanwege de marktvolatiliteit. Vattenfall biedt als eerste weer een 1-jarig contract aan voor nieuwe klanten. Consumenten zoeken actief naar zekerheid — ook over verwarmingskosten op lange termijn.",
            actie: "Communiceer actief aan klanten dat een warmtepomp minder blootstelling geeft aan gasvolatiliteit. Gebruik de marktonzekerheid als conversieargument in offertes.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "Eneco Organisatie",
        icon: "🏢",
        items: [
          {
            title: "Eneco-reorganisatie: deadline 350 banen voor 31 maart nadert — impact EiH onduidelijk",
            sentiment: "negative",
            body: "De door Eneco aangekondigde reorganisatie (350 banen, december 2024) nadert zijn deadline: eind maart 2026. Oorzaken: gestegen loon- en materiaalkosten en dalende warmtepomp- en EV-vraag. De directe impact op Eneco in Huis en haar 200 monteurs is nog niet gecommuniceerd.",
            actie: "Breng in kaart welke impact de Eneco-reorganisatie heeft op EiH qua capaciteit, budget en centrale services. Stem urgentie af met Eneco-directie.",
            actieType: "HR"
          }
        ]
      },
      {
        title: "Woningmarkt & Groeikansen",
        icon: "🏠",
        items: [
          {
            title: "Woningprijzen stijgen 6,6% in 2026 — hypotheekrente stabiliseert op 3,6–3,8%",
            sentiment: "positive",
            body: "Rabobank voorspelt 6,6% prijsstijging voor 2026. ABN AMRO en ING rekenen op 3–4%. Hypotheekrente (NHG, 10 jaar) stabiliseert op 3,63–3,85%. Woningtekort van 390.000 units drijft aanhoudende transactievolumes — elk koopmoment is een installatiemoment voor Eneco in Huis.",
            actie: null,
            actieType: null
          },
          {
            title: "Nieuwbouw gasverbod creëert structurele warmtepomp-pijplijn",
            sentiment: "positive",
            body: "In alle nieuwbouwprojecten geldt een verbod op gasaansluitingen. Elke nieuwe woning betekent een warmtepomp-installatie. Dit biedt Eneco in Huis een structurele, subsidie-onafhankelijke afzetmarkt, los van marktsentiment of consumentenurgentie.",
            actie: "Verdiep samenwerking met projectontwikkelaars en woningcorporaties voor preferente positie in nieuwbouwcontracten.",
            actieType: "Strategie"
          }
        ]
      },
      {
        title: "Warmtepompen & ISDE",
        icon: "🔥",
        items: [
          {
            title: "ISDE 2026: €509 mln budget, lager startbedrag (€1.025), nieuwe ventilatieregelingen",
            sentiment: "neutral",
            body: "Voor 2026 is €509 mln ISDE-budget beschikbaar voor warmtepompen in bestaande bouw. Startbedrag lucht-waterwarmtepompen daalt naar €1.025 (was €1.250). Variabele component: €225/kW vanaf de eerste kW. Nieuw: ook subsidie voor energiezuinige ventilatie gecombineerd met isolatie.",
            actie: "Klantcommunicatie en offertetools bijwerken op nieuwe ISDE-bedragen; combinatiepakket ventilatie + warmtepomp uitwerken als premium-aanbod.",
            actieType: "Operaties"
          },
          {
            title: "Iran-crisis kan warmtepompvraag snel doen opveren — installatieklaar zijn is cruciaal",
            sentiment: "neutral",
            body: "De warmtepompverkoop daalde in 2024 met 14%. De huidige Hormuz-crisis drijft de urgentie voor alternatieven op gas omhoog. Als de blokkade aanhoudt, kan de vraag naar warmtepompen snel omslaan. Eneco in Huis moet klaar staan voor een snelle vraagpiek.",
            actie: "Sluit raamcontracten met leveranciers voor warmtepomp-uitrusting; zorg dat installatiecapaciteit snel opgeschaald kan worden.",
            actieType: "Operaties"
          }
        ]
      },
      {
        title: "HR & Arbeidsmarkt",
        icon: "👷",
        items: [
          {
            title: "Sectorbreed tekort 120.000 technici tot 2030 — nu extra kritisch door reorganisatieonzekerheid",
            sentiment: "negative",
            body: "Wij Techniek prognosticeert een tekort van 120.000 vakmensen in de installatiebranche tot 2030. Gecombineerd met de Eneco-reorganisatie en de mogelijke vraagpiek door de Hormuz-crisis is personeelsplanning het meest kritieke operationele risico voor Eneco in Huis.",
            actie: "Sluit zij-instromerprogramma's en ROC-partnerschappen prioritair af voor eind Q1 2026. Zekerstellen dat geen eigen monteurs vertrekken door reorganisatieonzekerheid.",
            actieType: "HR"
          }
        ]
      },
      {
        title: "Financiën & Macro",
        icon: "📊",
        items: [
          {
            title: "Hormuz-blokkade drijft ook olie en materiaalkosten op — margedruk voor installateurs",
            sentiment: "negative",
            body: "De blokkade treft niet alleen gas maar ook olie. Analisten waarschuwen voor brede inflatoire druk op brandstof, transport en materialen. Dit kan de inkoopkosten voor installatiemateriaal opdrijven en marges onder druk zetten voor het lopend kwartaal.",
            actie: "Doorlichting inkoop- en materiaalcontracten op prijsbinding; overweeg voorraadbuffer voor kritische componenten.",
            actieType: "Financiën"
          },
          {
            title: "NHG-grens met energiebonus €498.200 — warmtepomp meefinancierbaar via hypotheek",
            sentiment: "positive",
            body: "Via de NHG kunnen kopers woningen financieren tot €498.200 als energiebesparende voorzieningen worden meegenomen. Dit biedt een concrete financieringsroute voor warmtepompinstallaties via de hypotheek — een verkoopargument dat aansluit op het koopmoment.",
            actie: "NHG-combinatiefinanciering als standaard USP opnemen in alle warmtepomp-offertes en verkoopgesprekken.",
            actieType: "Financiën"
          }
        ]
      }
    ],
    priorities: [
      "Strategie: Scenario-plan Iran-crisis: communiceer warmtepomp als buffer tegen gasprijs-volatiliteit aan klanten.",
      "HR: Zeker stellen dat Eneco-reorganisatie geen negatieve impact heeft op EiH-monteursbestand; urgente afstemming directie.",
      "Operaties: Installatie-upscale-plan activeren voor mogelijke vraagpiek warmtepompen Q2 2026.",
      "Financiën: Materiaalinkoop doorlichten op Hormuz-inflatoire druk; voorraadbuffers overwegen.",
      "Marketing: Conversiecampagne op bestaande CV-ketelklanten — gebruik gasprijscrisis als urgentie voor warmtepomp."
    ]
  },
  {
    date: "2026-03-01",
    dateFormatted: "zondag 1 maart 2026",
    samenvatting: "De TTF-gasprijs beweegt in maart terug richting €30/MWh na een tijdelijke daling begin 2026. De woningmarkt overschrijdt voor het eerst de grens van €500.000 gemiddeld (NVM Q4 2025), met meer aanbod en vlottere doorstroom. Eneco's target van 60.000 hybride warmtepompen per jaar na 2027 vereist directe opschaling van capaciteit en personeel. ETS-2 maakt gas structureel duurder na 2027 — een window of opportunity om klanten nu te binden.",
    kpis: [
      { label: "TTF Gasprijs", value: "€30/MWh", sub: "Stijging t.o.v. jan; gem. 2026 ~€30", trend: "neutral" },
      { label: "Gem. woningprijs", value: "€502.000", sub: "+3,9% YoY — eerste keer boven €500k", trend: "positive" },
      { label: "WP-target 2027", value: "60.000", sub: "Eneco hybride warmtepompen/jaar", trend: "positive" },
      { label: "Gem. verkooptijd", value: "28 dagen", sub: "NVM Q4 2025 — markt blijft snel", trend: "neutral" }
    ],
    sections: [
      {
        title: "Strategie & Marktpositie",
        icon: "🎯",
        items: [
          {
            title: "Eneco zet in op 60.000 hybride warmtepompen per jaar vanaf 2027",
            sentiment: "positive",
            body: "Eneco publiceert haar target van 60.000 hybride warmtepompinstallaties per jaar na 2027, oplopend van 45.000 in 2025. Eneco in Huis is als uitvoerend installatiebedrijf direct verantwoordelijk voor dit target. Dit vereist significante opschaling van installatie- en servicecapaciteit.",
            actie: "Beoordeel of personeels- en materiaalplanning aansluit op de opschaling naar 60.000 WP/jaar richting 2027.",
            actieType: "Strategie"
          },
          {
            title: "ETS-2 maakt gas duurder na 2027 — nu klanten binden loont",
            sentiment: "positive",
            body: "Het Europese emissiehandelssysteem ETS-2 treedt na 2027 in werking voor de gebouwde omgeving. Gas wordt structureel duurder, wat de businesscase voor hybride warmtepompen versterkt. De huidige relatief lage gasprijzen bieden ruimte om klanten te informeren en te binden vóór de urgentie toeneemt.",
            actie: "Ontwikkel een campagne die klanten nu al laat profiteren van een hybride installatie, vóór ETS-2 de druk vergroot.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "Energiemarkt & Beleid",
        icon: "⚡",
        items: [
          {
            title: "TTF-gasprijs stijgt terug naar €30/MWh — zomerverwachting €26",
            sentiment: "neutral",
            body: "Na de daling begin 2026 beweegt de TTF richting €30/MWh voor het maart-contract. Analisten verwachten een zomergemiddelde van €26/MWh en een jaargemiddelde van €30. Hogere gasprijzen versterken de warmtepomp-businesscase voor de tweede helft van 2026.",
            actie: "Pas tariefstelling en marge-aannames aan op TTF-verwachting €26–30/MWh voor rest van 2026.",
            actieType: "Financiën"
          },
          {
            title: "Energiebelasting op gas omhoog, op stroom omlaag — elektrificatie aantrekkelijker",
            sentiment: "positive",
            body: "De Nederlandse overheid heeft de energiebelasting op gas verhoogd en op elektriciteit verlaagd in 2026. Consumenten met een hoog gasverbruik worden financieel steeds harder geraakt — een structurele koers richting elektrificatie.",
            actie: "Gebruik de belastingvergelijking gas vs. elektriciteit als concreet verkoopargument in offertegesprekken.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "Woningmarkt & Groeikansen",
        icon: "🏠",
        items: [
          {
            title: "Eerste gemiddelde woningprijs boven €500.000 — 47.600 transacties in Q4",
            sentiment: "positive",
            body: "NVM rapporteert voor Q4 2025 een gemiddelde transactieprijs van €502.000 — voor het eerst boven €500k. Er werden ruim 47.600 woningen verkocht (+11% YoY). In januari 2026 lag de prijs op €493.875 (+5,4% YoY). Meer transacties betekent direct meer vervangingsvraag voor CV-ketels en boilers.",
            actie: null,
            actieType: null
          },
          {
            title: "Starters vrijgesteld van overdrachtsbelasting tot €555.000",
            sentiment: "positive",
            body: "Starters tussen 18 en 34 jaar betalen in 2026 geen overdrachtsbelasting bij aankoop van een woning tot €555.000. Dit vergroot de groep actieve starters significant — zij kopen vaak woningen met verouderde installaties.",
            actie: "Lanceer een starterscampagne: 'nieuwe woning, nieuwe installatie' — sluit aan op koopmomenten van starters.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "Operaties & Service",
        icon: "🔧",
        items: [
          {
            title: "72% van woningen boven vraagprijs — snelheid beslissend in installatieslag",
            sentiment: "neutral",
            body: "NVM meldt dat 72% van de woningen boven de vraagprijs werd verkocht in Q4 2025, met een gemiddelde verkooptijd van 28 dagen. Kopers nemen snel beslissingen over installaties — snelle offertes en beschikbaarheid van monteurs zijn cruciaal.",
            actie: "Implementeer een fast-track offerteproces voor woningoverdrachten met een doorlooptijd van maximaal 48 uur.",
            actieType: "Operaties"
          },
          {
            title: "ISDE-subsidiewijzigingen van kracht — klanten zoeken advies bij installateurs",
            sentiment: "neutral",
            body: "Nieuwe ISDE-regels zijn per 1 januari van kracht: lager startbedrag (€1.025), geen subsidie voor split-systemen met GWP>750. Veel consumenten zijn verward en zoeken actief advies. Eneco in Huis kan profiteren door als kennispartner op te treden.",
            actie: "Zorg dat monteurs en verkopers de nieuwe ISDE-regels kennen; maak een klantgerichte FAQ beschikbaar.",
            actieType: "Operaties"
          }
        ]
      },
      {
        title: "HR & Arbeidsmarkt",
        icon: "👷",
        items: [
          {
            title: "200 monteurs nu — opschaling naar 60.000 WP/jaar vraagt structurele personeelsgroei",
            sentiment: "negative",
            body: "Eneco in Huis werkt momenteel met 200 monteurs, voornamelijk actief in de Randstad. Om het groeitarget van 60.000 WP/jaar na 2027 te realiseren is een substantiële uitbreiding noodzakelijk — in een markt met een sectorbreed tekort van 120.000 technici tot 2030.",
            actie: "Start nu met opbouw van opleidingspipeline: eigen leerwerktrajecten, ROC-samenwerking en zij-instromerprogramma's.",
            actieType: "HR"
          }
        ]
      },
      {
        title: "Financiën & Macro",
        icon: "📊",
        items: [
          {
            title: "NHG-grens €470.000 — warmtepompinstallatie meefinancierbaar via hypotheek",
            sentiment: "positive",
            body: "De NHG dekt in 2026 woningen tot €470.000, of €498.200 als de koper energiebesparende voorzieningen meefinanciert. Dit biedt een directe financieringshaak voor warmtepompinstallaties via de hypotheek.",
            actie: "Verwerk de NHG-combinatiemogelijkheid als standaard USP in warmtepomp-offertes.",
            actieType: "Financiën"
          },
          {
            title: "Energierekening daalt naar €1.993 — meer bestedingsruimte bij consumenten",
            sentiment: "positive",
            body: "De gemiddelde huishoudelijke energierekening daalt naar €1.993 in 2026, €52 lager dan 2025. Huishoudens houden meer vrij besteedbaar inkomen over, wat de drempel voor investeringen in woningverbetering verlaagt.",
            actie: null,
            actieType: null
          }
        ]
      }
    ],
    priorities: [
      "Strategie: Capaciteitsplan opstellen voor opschaling naar 60.000 WP/jaar — HR, materiaal en regio.",
      "Marketing: ETS-2 campagne voorbereiden; klanten nu binden vóór gaskosten na 2027 stijgen.",
      "Marketing: Starterscampagne lanceren voor woningoverdrachten — snel, ontzorgend, all-in.",
      "Operaties: Fast-track offerteproces (48u) implementeren voor woningtransacties.",
      "HR: Opleidingspipeline voor monteurs starten — zij-instromers, ROC-samenwerking, leerwerktrajecten.",
      "Financiën: NHG-combinatiefinanciering opnemen als standaard USP in warmtepomp-offertes."
    ]
  },
  {
    date: "2026-02-28",
    dateFormatted: "zaterdag 28 februari 2026",
    samenvatting: "De energiemarkt biedt Eneco in Huis in 2026 gunstige omstandigheden: lagere gasprijzen, dalende huishoudelijke energierekeningen en stijgende woningprijzen vergroten de investeringsbereidheid van consumenten. Het schrappen van de hybride warmtepompverplichting (nu 2029) vraagt om strategische heroriëntatie van de productportfolio. Operationeel is het tekort aan vakmensen de grootste rem op groei en servicebeloften. Kansen liggen in de nieuwbouwmarkt, het serviceabonnementen-segment en de opkomende R290-warmtepomptechnologie.",
    kpis: [
      { label: "Gasmarkt TTF", value: "€29/MWh", sub: "Laagste niveau in lange tijd", trend: "positive" },
      { label: "Woningmarkt groei", value: "+4,8%", sub: "Verwachting 2026 (Rabobank)", trend: "positive" },
      { label: "Warmtepomp verkoop", value: "−14%", sub: "2024 t.o.v. 2023", trend: "negative" },
      { label: "Technici tekort 2030", value: "120.000", sub: "Prognose Wij Techniek", trend: "negative" }
    ],
    sections: [
      {
        title: "Strategie & Marktpositie",
        icon: "🎯",
        items: [
          {
            title: "Verplichting hybride warmtepomp per 2026 GESCHRAPT — nu 2029",
            sentiment: "negative",
            body: "Het Schoof-kabinet heeft de aangekondigde verplichting om bij vervanging van een CV-ketel een hybride warmtepomp te installeren definitief geschrapt. De maatregel is verschoven naar 2029. Voor Eneco in Huis betekent dit dat de massa-adoptie van warmtepompen trager verloopt dan gepland en dat de CV-ketelmarkt langer relevant blijft.",
            actie: "Herzien strategisch groeipad: balans tussen kortetermijn CV-service omzet en langetermijn warmtepomp-investering opnieuw bepalen voor 2026–2029.",
            actieType: "Strategie"
          },
          {
            title: "Nieuwbouwmarkt structureel warmtepomp-gedreven door gasverbod",
            sentiment: "positive",
            body: "In nieuwbouwprojecten geldt een verbod op gasaansluitingen, waardoor warmtepompen de standaard zijn. Nederland kampt met een woningtekort van ~400.000 woningen en zet in op versnelde nieuwbouw. Dit vertegenwoordigt een structurele en gegarandeerde afzetmarkt voor Eneco in Huis, onafhankelijk van subsidies of verplichtingen.",
            actie: "Versterk partnerships met projectontwikkelaars en woningcorporaties voor nieuwbouwcontracten.",
            actieType: "Strategie"
          }
        ]
      },
      {
        title: "Energiemarkt & Beleid",
        icon: "⚡",
        items: [
          {
            title: "Gasmarkt TTF op laagste peil — energierekening daalt naar €1.993",
            sentiment: "positive",
            body: "De TTF-gasprijs is gedaald naar €29/MWh dankzij sterk gestegen LNG-aanbod (VS en Qatar). Huishoudens betalen in 2026 gemiddeld €1.993 voor energie — €52 minder dan in 2025. Lagere gasprijzen temperen de urgentie voor warmtepompaanschaf, maar verhogen de koopkracht voor andere investeringen.",
            actie: "Herzien aannames warmtepompconversie in jaarplanning; servicepropositie CV-ketels opwaarderen.",
            actieType: "Financiën"
          },
          {
            title: "ISDE-subsidie warmtepompen 2026: lagere startbedragen, nieuwe regels",
            sentiment: "negative",
            body: "Het startbedrag voor lucht-water warmtepompen daalt van €1.250 naar €1.025. Nieuw: variabele component van €225/kW geldt al vanaf de eerste kilowatt. Geen subsidie meer voor split-systemen met GWP >750 en vulgewicht <3 kg. Ook subsidie voor energiezuinige ventilatie als gecombineerd met isolatie.",
            actie: "Verkoopmateriaal en klantcalculators aanpassen op nieuwe ISDE-parameters.",
            actieType: "Marketing"
          },
          {
            title: "Saldering zonnepanelen afgeschaft per 1 januari 2027",
            sentiment: "negative",
            body: "Huishoudens met zonnepanelen gaan €180–€470 per jaar meer betalen door het vervallen van de netsaldering. Dit raakt een groot klantsegment en verlaagt hun resterende investeringsbudget voor verwarmingsoplossingen.",
            actie: "PV-klantensegment analyseren op impact; gerichte aanbiedingen voor gecombineerde installaties ontwikkelen.",
            actieType: "Marketing"
          }
        ]
      },
      {
        title: "Klant & Merk",
        icon: "💬",
        items: [
          {
            title: "Starters domineren woningmarkt — bijna 50% van alle transacties",
            sentiment: "positive",
            body: "Volgens NVM-data zijn starters goed voor bijna de helft van alle woningtransacties in 2024–2025. Starters kopen vaker woningen met een verouderde installatie en staan open voor slimme, ontzorgende serviceconcepten. Dit is een prioritaire doelgroep voor Eneco in Huis.",
            actie: "Ontwikkel een starter-propositie: all-in serviceabonnement inclusief vervanging bij aankoop eerste woning.",
            actieType: "Marketing"
          },
          {
            title: "Voormalige verhuurders verkopen door tot juni 2026 — kansen in doorstroom",
            sentiment: "positive",
            body: "Door nieuwe huurregels en vermogensbelasting verkopen particuliere verhuurders hun woningen door tot juni 2026. Dit levert extra transacties op in het midden- en hogere segment, met kopers die doorgaans meer investeren in woningkwaliteit.",
            actie: null,
            actieType: null
          }
        ]
      },
      {
        title: "Operaties & Service",
        icon: "🔧",
        items: [
          {
            title: "CV-ketelverkoop trekt aan; servicedruk neemt toe",
            sentiment: "neutral",
            body: "De warmtepompverkoop daalde 14% in 2024 terwijl CV-ketelverkoop aantrekt. De servicepijplijn voor CV-ketels groeit daarmee harder dan verwacht — positief voor omzet op korte termijn, maar dit verhoogt ook de druk op servicecapaciteit.",
            actie: "Serviceplanningscapaciteit aanpassen aan hogere CV-ketelvolumes voor 2026.",
            actieType: "Operaties"
          },
          {
            title: "Markt verschuift naar R290 (propaan) warmtepompen — installatievereisten veranderen",
            sentiment: "neutral",
            body: "Door uitfasering van koudemiddel R32 verschuift de markt naar R290-systemen. Dit stelt hogere eisen aan plaatsing van buitendelen, leidingdiameter en veiligheidscertificering. Installateurs hebben aanvullende training nodig.",
            actie: "Start R290-trainingsprogramma voor installateurs; controleer leverancierscontracten op R290-aanbod.",
            actieType: "Operaties"
          }
        ]
      },
      {
        title: "HR & Arbeidsmarkt",
        icon: "👷",
        items: [
          {
            title: "Tekort van 120.000 technici in installatiebranche tot 2030",
            sentiment: "negative",
            body: "Wij Techniek prognosticeert een structureel tekort van meer dan 120.000 vakmensen in de installatiebranche tot 2030. Voor Eneco in Huis is dit het grootste risico voor het waarmaken van groeiambities en servicegaranties aan klanten.",
            actie: "Opstellen meerjaren HR-strategie: eigen opleidingsprogramma's, samenwerking met ROC's, en acquisitie van installatiebedrijven als talent-strategie.",
            actieType: "HR"
          }
        ]
      },
      {
        title: "Financiën & Macro",
        icon: "📊",
        items: [
          {
            title: "ECB: inflatie 1,9% in 2026, BNP-groei eurozone 1,3%",
            sentiment: "positive",
            body: "De ECB verwacht inflatie onder de 2%-doelstelling en een gestage economische groei van 1,3%. Het reëel besteedbaar inkomen stijgt, consumentenvertrouwen stabiliseert. Gunstige macro-omgeving voor investeringen in woningverbetering.",
            actie: null,
            actieType: null
          },
          {
            title: "NHG-grens stijgt naar €470.000 — extra leenruimte voor energiezuinige woningen",
            sentiment: "positive",
            body: "De Nationale Hypotheek Garantie dekt woningen tot €470.000 (of €498.200 met energiebesparende maatregelen). Consumenten kunnen hierdoor meer lenen voor woningen met energieverbeteringen — direct relevant voor warmtepomp- en isolatiecombinaties die Eneco in Huis aanbiedt.",
            actie: "Verkoopargumentatie updaten met NHG-leenruimte als financieringsvoordeel voor warmtepomppakket.",
            actieType: "Financiën"
          }
        ]
      }
    ],
    priorities: [
      "Strategie: Herzien groeipad warmtepompen 2026–2029 na schrappen verplichting; korte termijn CV-service vs. langetermijn warmtepomp in balans brengen.",
      "HR: Meerjaren personeelsstrategie opstellen — tekort van 120.000 technici is existentieel risico voor schaalgroei.",
      "Operaties: R290-trainingsprogramma opstarten; serviceplanningscapaciteit aanpassen op hogere CV-ketelvolumes.",
      "Marketing: Starter-propositie en PV-klantenaanpak ontwikkelen; verkoopmateriaal bijwerken op nieuwe ISDE-regels.",
      "Financiën: Jaarplanning bijstellen op lagere warmtepompconversie en hogere CV-servicemarges."
    ]
  }
];

const companyProfile = {
  // Company Identity
  company: {
    name: "Eneco in Huis B.V.",
    kvk: "27214381",
    vat: "NL002548574B01",
    legal: "Besloten Vennootschap (B.V.)",
    address: "Molenbaan 17, 2908 LL Capelle aan den IJssel",
    postal: "Postbus 16, 3000 AA Rotterdam",
    founded: "December 2025",
    phone: "088-895 5000",
    website: "enecoinhuis.nl",
    sbi: "43222 — Installation of heating and air treatment equipment",
    director: "Diederick Schoon",
    hrContact: "Kirstin Hartwijk"
  },

  // Key Operating Metrics
  metrics: [
    { label: "Employees", value: "250", icon: "👥" },
    { label: "Daily Customer Visits", value: "300", icon: "🏠" },
    { label: "Devices Under Maintenance", value: "100,000+", icon: "🔧" },
    { label: "Years of Experience", value: "60+", icon: "📅" },
    { label: "Service Coverage", value: "~90% of NL", icon: "🗺️" },
    { label: "Certifications", value: "7", icon: "✅" }
  ],

  // Ownership Structure
  ownership: [
    { entity: "Mitsubishi Corporation", stake: "80%", level: 0, desc: "Japanese conglomerate (TSE: 8058)" },
    { entity: "Chubu Electric Power", stake: "20%", level: 0, desc: "Japanese utility (TSE: 9502)" },
    { entity: "Eneco Group N.V.", stake: "100%", level: 1, desc: "€7.24B revenue · 4,000+ employees · Rotterdam" },
    { entity: "Eneco Installatiebedrijven Groep B.V.", stake: "100%", level: 2, desc: "KvK 30180628 · Utrecht · Installation holding" },
    { entity: "Eneco in Huis B.V.", stake: "100%", level: 3, desc: "KvK 27214381 · Capelle a/d IJssel · Operating company" }
  ],

  // Eneco Group Financials
  parentFinancials: {
    year: "FY2024 (Apr 2024 — Mar 2025)",
    revenue: "€7.24B",
    ebitda: "€724M",
    ebit: "€341M",
    netProfit: "€245M",
    roace: "5.6%",
    investments: "€447M",
    employees: "4,000+",
    ceo: "Martijn Hagens (from 1 March 2026)"
  },

  // Product Portfolio
  products: [
    { category: "Hybrid Heat Pumps", items: ["Intergas Xtend 5kW (from €4,625)", "Remeha Elga Ace 4kW (from €4,650)", "Remeha Elga Ace 6kW (from €5,600)", "Vaillant aroTHERM 7.5kW (from €8,825)"], rental: "from €79.50/month" },
    { category: "CV-Ketels (Gas Boilers)", items: ["Intergas Kombi Kompakt HRE (from €2,180)", "Intergas Xtreme 36 — Best in Test 2025 (from €2,800)", "Remeha Tzerra Ace Matic (from €2,225)", "Remeha Calenta 40L (from €4,015)"], rental: "from €37.20/month" },
    { category: "E-Boilers", items: ["Kitchen boiler 10L (from €10.11/mo)", "Inventum/Itho Daalderop 50-150L (from €15.15/mo)", "Itho Daalderop Smart Boiler 60/80L (from €19.88/mo)"], rental: "Rental only" },
    { category: "ServiceGemak® Subscriptions", items: ["Basis — €8.99/month (biennial maintenance, 24/7 support)", "Extra — €15.99/month (+ free technician visits, €150 materials/yr)", "Compleet — €22.99/month (annual maintenance, €500 materials/yr)"], rental: "Recurring revenue" }
  ],

  // Certifications
  certifications: [
    { name: "BRL 6000-25", desc: "Gasketelwet — mandatory for all gas appliance work" },
    { name: "STEK / KIWA", desc: "F-gases and heat pump refrigerant certification" },
    { name: "VCA + Module 4", desc: "Safety, Health & Environment — all technicians" },
    { name: "NEN 3140", desc: "Electrical safety — low-voltage installations" },
    { name: "ROGAFA", desc: "Safe flue gas removal systems" },
    { name: "Techniek Nederland", desc: "Industry association membership (formerly Uneto-VNI)" },
    { name: "Vakpaspoort", desc: "Digital skills passport for every technician" }
  ],

  // Market Context
  market: {
    hvacSize: "$2.43B (2025)",
    hvacGrowth: "4.6% CAGR to $3.05B (2030)",
    heatPumpSize: "$505M (2025)",
    heatPumpGrowth: "→ $628M by 2030",
    installationsPerYear: "125,000 (2024, -30% vs 2023)",
    installedBase: "752,000 heat pumps / 6.9 GW",
    technicianShortage: "120,000+ needed by 2030"
  },

  // Competitors
  competitors: [
    { name: "Feenstra", owner: "Vattenfall", strength: "800k+ households, nationwide", threat: "High" },
    { name: "Breman Installatiegroep", owner: "Independent", strength: "450k homes, full-service", threat: "High" },
    { name: "CVtotaal", owner: "Independent", strength: "40% annual growth, data-driven", threat: "Medium" },
    { name: "Warmteservice", owner: "Independent", strength: "Equipment retail + installation", threat: "Medium" },
    { name: "Quatt", owner: "VC-backed ($32M)", strength: "AI-driven, 7,500 installations", threat: "Emerging" },
    { name: "Warmgarant", owner: "Network model", strength: "Franchise approach", threat: "Low" }
  ],

  // McKinsey Strategic Recommendations
  strategies: [
    {
      id: 1,
      title: "Defend the Base, Monetize the Installed Base",
      subtitle: "Transform 100,000+ maintenance contracts into a recurring revenue machine",
      timeframe: "0–12 months",
      impact: "High",
      effort: "Medium",
      narrative: "Eneco in Huis sits on a gold mine that most competitors would envy: 100,000+ devices under active maintenance contracts and 300 daily customer visits. This installed base represents not just a service obligation but an untapped conversion platform. Every ServiceGemak® maintenance visit is a consultative sales moment — a certified technician already inside the customer's home, trusted, with full visibility of the heating system's age and efficiency.",
      actions: [
        "Implement a 'Health Score' for every maintained device — flag systems older than 10 years, underperforming, or approaching end-of-life as active sales leads",
        "Equip field technicians with tablet-based advisory tools: show customers their current gas spend vs. hybrid heat pump scenario, including ISDE subsidy (€1,025+ base) and ServiceGemak® pricing",
        "Launch tiered 'upgrade path' pricing: ServiceGemak® Compleet customers get priority scheduling and €500 upgrade discount when converting from CV-ketel to hybrid heat pump",
        "Target: convert 5% of maintenance base (5,000 households) to heat pump within 18 months — representing ~€23M in installation revenue at average €4,600/unit"
      ],
      risks: "Requires CRM integration and technician training investment. Risk of perceived 'hard selling' during maintenance visits — mitigate with opt-in advisory approach."
    },
    {
      id: 2,
      title: "Win the Urban Heat Pump Market Before Competitors Arrive",
      subtitle: "Use the Whspr silent heat pump pilot to capture dense urban segments that standard products cannot reach",
      timeframe: "6–18 months",
      impact: "High",
      effort: "High",
      narrative: "The biggest unsolved problem in Dutch residential heat pump adoption is noise. Standard air-source heat pumps generate 45-60 dB — unacceptable for terraced housing, apartments, and dense urban neighborhoods where 60%+ of Dutch households live. This has created a massive addressable market that no competitor has cracked at scale. Eneco in Huis is already piloting the Whspr silent heat pump (~20 units installed) — this is a first-mover advantage that must be exploited before competitors replicate.",
      actions: [
        "Fast-track Whspr pilot evaluation: collect NPS, noise measurements, installation time, and cost data from all 20 pilot installations by end of March 2026",
        "Secure exclusive or preferred distribution agreement with Whspr for the Dutch market — lock out Feenstra/Breman from easy access",
        "Map the 'noise-constrained' market: identify all postal codes with >70% terraced/row housing density where standard heat pumps face neighborhood objections",
        "Build a dedicated 'Urban Heat Pump' proposition: silent heat pump + ISDE subsidy + ServiceGemak® Compleet as a bundled package at a premium price point",
        "Target: 2,000 urban installations in Year 1 at premium ASP of €6,500 — representing €13M incremental revenue and establishing EiH as the urban heat pump leader"
      ],
      risks: "Whspr is an early-stage product; supply chain reliability and unit economics are unproven at scale. Single-supplier dependency is a risk — build optionality."
    },
    {
      id: 3,
      title: "Build an Acquisition-Ready or IPO-Ready Operating Model",
      subtitle: "Create standalone value that makes EiH worth more inside Eneco — or attractive to an external buyer",
      timeframe: "12–24 months",
      impact: "Transformational",
      effort: "High",
      narrative: "Eneco in Huis was carved out as a separate BV in December 2025 — this is not accidental. The structure enables Eneco to either invest in scaling EiH, partner with a strategic buyer, or divest entirely. With a new CEO (Hagens, ex-Vattenfall) and an active reorganization, the strategic review window is open. EiH must proactively demonstrate standalone value creation rather than being perceived as a cost center. Companies that demonstrate clear unit economics, recurring revenue growth, and market differentiation command 8-12x EBITDA multiples in the European home services sector.",
      actions: [
        "Establish full P&L transparency: segment revenue by product (heat pumps, CV-ketels, e-boilers), channel (new installation, replacement, maintenance), and model (purchase vs. rental vs. ServiceGemak®)",
        "Build a recurring revenue dashboard: track Monthly Recurring Revenue (MRR) from rental and ServiceGemak® separately — this is the metric that drives valuation multiples",
        "Benchmark against European comparables: HomeServe (acquired by Brookfield at €4.4B / 12x EBITDA), Thermondo (Germany), Octopus Energy's Kraken",
        "Reduce Eneco service dependencies: identify which shared services (IT, finance, HR) could be internalized or replaced, and at what cost — this de-risks the 'standalone' narrative",
        "Present Hagens with a '3-year value creation plan': show EiH's path to €50M+ revenue with 15%+ EBITDA margin through installed base monetization and urban heat pump leadership"
      ],
      risks: "Political risk within Eneco Group — building standalone capabilities may be perceived as 'preparing to leave'. Frame as 'demonstrating value to the shareholder' rather than independence."
    }
  ]
};
