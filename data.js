// Management Nieuwsoverzicht — Eneco in Huis
// Dit bestand wordt elke ochtend automatisch bijgewerkt door de geplande taak.
// GitHub verbinding getest op: 2026-02-28 12:03

const briefsData = [
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
