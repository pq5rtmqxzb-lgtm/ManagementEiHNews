// CFO Nieuws Archief — Eneco in Huis
// Dit bestand wordt elke ochtend automatisch bijgewerkt door de geplande taak.

const briefsData = [
  {
    date: "2026-02-28",
    dateFormatted: "zaterdag 28 februari 2026",
    samenvatting: "De energiemarkt in Nederland laat een gunstig beeld zien voor 2026: lagere gasprijzen, dalende huishoudelijke energierekeningen en aantrekkende woningprijzen creëren een positief klimaat voor installatieopdrachten. Tegelijkertijd brengt het schrappen van de hybride warmtepompverplichting per 2026 – nu verschoven naar 2029 – strategische herprioritering van de portfolio mee. Het tekort aan vakmensen blijft de grootste operationele rem. Het macro-economische klimaat is gunstig: ECB-inflatiereductie en lichte economische groei geven de sector lucht.",
    kpis: [
      { label: "Gasmarkt TTF", value: "€29/MWh", sub: "Laagste niveau in lange tijd", trend: "positive" },
      { label: "Huishoudrekening 2026", value: "€1.993", sub: "−2,5% t.o.v. 2025", trend: "positive" },
      { label: "Warmtepomp verkoop 2024", value: "−14%", sub: "T.o.v. 2023; CV stijgt", trend: "negative" },
      { label: "Woningprijsstijging", value: "+4,8%", sub: "Verwachting 2026 (Rabobank)", trend: "neutral" }
    ],
    sections: [
      {
        title: "Energiemarkt & Prijzen",
        icon: "⚡",
        items: [
          {
            title: "Gasmarkt TTF op laagste peil: positief voor vraagstimulering",
            sentiment: "positive",
            body: "De TTF-gasprijs is gedaald naar €29 per MWh, het laagste niveau in lange tijd. Dit is het directe gevolg van een sterk gestegen LNG-aanbod (VS en Qatar). Lagere gasprijzen verkleinen de economische urgentie voor huishoudens om over te stappen op warmtepompen, maar servicepropositie op CV-ketels blijft aantrekkelijk.",
            actie: "Controleer aannames in de jaarplanning voor warmtepompgroei – bijstellen kan verstandig zijn.",
            actieType: "CFO-actie"
          },
          {
            title: "Huishoudelijke energierekening daalt naar €1.993 (−2,5%)",
            sentiment: "positive",
            body: "Huishoudens betalen in 2026 gemiddeld €52 minder voor gas en elektriciteit ten opzichte van 2025. De verlaging is primair variabel – positief voor de koopkracht van consumenten en investeringsbereidheid in duurzame installaties.",
            actie: null,
            actieType: null
          },
          {
            title: "Netwerktarieven stijgen €25/jaar door energie-transitie-investeringen",
            sentiment: "negative",
            body: "ACM heeft bevestigd dat huishoudens in 2026 meer betalen voor netwerktransport. Beperkte directe impact, maar vergroot op langere termijn de businesscase voor decentrale opwek.",
            actie: null,
            actieType: null
          }
        ]
      },
      {
        title: "Markt & Producten",
        icon: "🔧",
        items: [
          {
            title: "Verplichting hybride warmtepomp per 2026 GESCHRAPT – nu 2029",
            sentiment: "negative",
            body: "Het Schoof-kabinet heeft de eerder aangekondigde verplichting om bij vervanging van een CV-ketel een hybride warmtepomp te installeren per 2026 definitief geschrapt. De maatregel keert terug in het coalitieakkoord met ingangsdatum 2029.",
            actie: "CV-ketelomzet blijft voorspoediger dan eerder ingepland; herzien businesscase warmtepompen 2026–2029.",
            actieType: "Strategische implicatie"
          },
          {
            title: "CV-ketelverkoop trekt aan; warmtepompen −14% in 2024",
            sentiment: "neutral",
            body: "In 2024 zijn 393.000 warmtepompen verkocht – 14% minder dan in 2023. Tegelijkertijd stijgt de CV-ketelverkoop. De servicemarkt voor CV-ketels is daarmee structureel groter dan eerder verwacht voor de korte termijn.",
            actie: null,
            actieType: null
          },
          {
            title: "ISDE-subsidie warmtepompen 2026: lagere startbedragen, nieuwe regels",
            sentiment: "negative",
            body: "Startbedrag lucht-water warmtepompen daalt van €1.250 naar €1.025. Positief: variabele component van €225/kW geldt nu al vanaf de eerste kilowatt. Geen subsidie meer voor split-systemen met GWP >750 en vulgewicht <3 kg.",
            actie: "Verkooppropositie aanpassen op nieuwe ISDE-maxima; klantcommunicatie tijdig bijwerken.",
            actieType: "CFO-actie"
          },
          {
            title: "Markt verschuift naar R290 (propaan) – gevolgen voor productportfolio",
            sentiment: "neutral",
            body: "Door uitfasering van koudemiddel R32 verschuift de warmtepompmarkt naar monoblock-systemen met R290 (propaan). Dit stelt hogere eisen aan installatie-expertise en leverancierscontracten.",
            actie: null,
            actieType: null
          }
        ]
      },
      {
        title: "Woningmarkt & Groeikansen",
        icon: "🏠",
        items: [
          {
            title: "Woningprijzen stijgen 4–5% in 2026; marktmediaan €470.000",
            sentiment: "positive",
            body: "De Nederlandse woningmarkt groeit gematigd door in 2026, na de sterke stijgingen van 2025. Rabobank verwacht 4,8% prijsgroei. Meer transacties betekent meer vervangingsvraag voor installaties.",
            actie: null,
            actieType: null
          },
          {
            title: "NHG-grens stijgt naar €470.000 – meer ruimte voor energiezuinige investeringen",
            sentiment: "positive",
            body: "De Nationale Hypotheek Garantie dekt in 2026 woningen tot €470.000 (of €498.200 met energiebesparende maatregelen).",
            actie: null,
            actieType: null
          },
          {
            title: "Woningtekort van ~400.000 woningen: kansen in nieuwbouw",
            sentiment: "positive",
            body: "Nederland kampt met een structureel woningtekort. In nieuwbouwprojecten geldt een verbod op gasaansluitingen – warmtepompen zijn de standaard. Dit vertegenwoordigt een structurele groeimarkt.",
            actie: null,
            actieType: null
          }
        ]
      },
      {
        title: "Operationeel Risico & HR",
        icon: "👷",
        items: [
          {
            title: "Tekort van 120.000 technici tot 2030 – grootste operationeel risico",
            sentiment: "negative",
            body: "De installatiebranche kampt met een acuut tekort aan vakmensen. Wij Techniek prognosticeert een tekort van meer dan 120.000 technici tot 2030. Dit is de meest directe bedreiging voor groeiambities van Eneco in Huis.",
            actie: "Beoordeel personeelsbegroting 2026–2030; overweeg samenwerking met technische opleidingsinstellingen of overnamestrategie.",
            actieType: "CFO-actie"
          }
        ]
      },
      {
        title: "Macro-Economie & Financiën",
        icon: "📊",
        items: [
          {
            title: "ECB: inflatie daalt naar 1,9% in 2026 – gunstig renteklimaat",
            sentiment: "positive",
            body: "Inflatie wordt verwacht op 1,9% voor 2026, onder de 2%-doelstelling. Olieprijsaannames verlaagd met 4%, gasgroothandelsprijzen met 8,6%. Biedt gunstige randvoorwaarden voor de reële economie.",
            actie: null,
            actieType: null
          },
          {
            title: "BNP-groei eurozone: 1,3% in 2026 – stabiel investeringsklimaat",
            sentiment: "positive",
            body: "De ECB verwacht een gemiddelde reële BBP-groei van 1,3%, gedreven door stijgend reëel besteedbaar inkomen. Voor Eneco in Huis betekent dit een stabiele consumentenmarkt.",
            actie: null,
            actieType: null
          },
          {
            title: "Afschaffing salderingsregeling 2027: zonnepaneel-klanten betalen meer",
            sentiment: "negative",
            body: "Per 1 januari 2027 vervalt de netsaldering voor zonnepaneelhouders. Huishoudens gaan €180–€470 per jaar meer betalen. Dit raakt klanten en beïnvloedt resterende budget voor verwarmingsinvesteringen.",
            actie: "Meewegen in klantcommunicatie en financieringsadvies rond PV-klantensegment.",
            actieType: "CFO-actie"
          }
        ]
      }
    ],
    priorities: [
      "Herzien van de businesscase warmtepompen 2026–2029 gezien het verschuiven van de verplichting naar 2029.",
      "Bewaken van personeelsbegroting: tekort aan technici is grootste risico voor groei- en servicebeloften.",
      "Klantcommunicatie afstemmen op gewijzigde ISDE-subsidieregels en R290-overgang.",
      "Strategische heroriëntatie portfolio: kortetermijnwinst in CV-ketelservice vs. langetermijninvestering.",
      "Financieel model aanpassen voor afschaffing saldering 2027."
    ]
  }
];
