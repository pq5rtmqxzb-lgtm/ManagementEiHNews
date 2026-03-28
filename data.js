// Management Nieuwsoverzicht — Eneco in Huis
// Dit bestand wordt elke ochtend automatisch bijgewerkt door de geplande taak.
// GitHub verbinding getest op: 2026-02-28 12:03

const briefsData = [
  {
    date: "2026-03-28",
    dateFormatted: "Saturday 28 March 2026",
    samenvatting: "REORG DEADLINE IN 3 DAYS: Eneco Group restructuring closes March 31 — Director Schoon must finalize EiH strategic positioning paper for CEO Hagens this weekend. F-GAS CERTIFICATION DEADLINE TOMORROW: March 29 transition period ends for unified R290/F-gas certificates — any uncertified technician is legally barred from heat pump work on Monday. ENERGY MARKETS VOLATILE: TTF gas trades at €55/MWh as EU storage hits critically low 28% (Netherlands at just 6%). Brent crude surges to €98/bbl (+4.2% daily) as Israeli forces kill Iranian navy commander. QatarEnergy force majeure confirmed — 17% LNG capacity offline 3-5 years. ECB holds at 2.15%, inflation forecast raised to 2.6%. CONSUMER CONFIDENCE CRASHES to -30, lowest in 4 years — willingness to purchase deteriorating sharply. SUPPLY CHAIN TIGHTENING: Aluminum at €3,013/ton (multi-year high), Asia-Europe container rates up 5% to €2,347/40ft Rotterdam. RAMageddon chip shortage escalating — Nexperia Netherlands-China conflict threatens secondary semiconductor crisis. COMPETITIVE ALERT: Weheat launches Swift in-roof heat pump; Vaillant unveils full R290 generation for VSK+E. ISDE budget confirmed at €511M. Dutch Cyberbeveiligingswet plenary debate held March 23 — NIS2 enactment imminent. TI CAO 3% wage increase now effective — budget impact across 250 employees. EPBD transposition deadline May 29 approaching — solar mandates and zero-emission building standards phasing in.",
    kpis: [
      { label: "TTF Gas Price", value: "€55/MWh", sub: "Stable — EU storage critically low at 28%", trend: "negative" },
      { label: "Brent Crude", value: "€98/bbl", sub: "+4.2% daily — Iranian navy commander killed", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Held — 2026 inflation forecast raised to 2.6%", trend: "negative" },
      { label: "Reorg Deadline", value: "3 days", sub: "March 31 — 350 jobs, EiH positioning paper due", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "Brent crude surges to €98/bbl after Israeli airstrike kills Iranian navy commander — Hormuz deadline extended to April 6",
            sentiment: "negative",
            body: "Brent crude surged 4.2% to €98/bbl (current rate 0.867 EUR/USD) on March 28, hitting levels not seen since July 2022. The spike followed the Israeli killing of Iranian navy commander Alireza Tangsiri — a major escalation in the Strait of Hormuz crisis now entering its fifth week. Goldman Sachs estimates a €13-17/bbl geopolitical risk premium embedded in current prices. Trump extended Iran's deadline to reopen the strait to April 6, but tanker traffic remains down 70% from pre-crisis levels. War-risk insurance premiums have surged from 0.15% to 5-10% of hull value. For EiH, sustained high energy costs strengthen the heat pump conversion case but increase operating costs across the supply chain.",
            actie: "Finance: model Q2 margin impact assuming €98/bbl Brent persists through April. Marketing: update all heat pump ROI calculators with current energy prices — the payback period for hybrid heat pump vs. gas boiler has shortened by 30-40% vs. pre-crisis. Customer Ops: proactively contact high-gas-usage ServiceGemak® customers about heat pump upgrade options.",
            actieType: "Finance",
            sourceUrl: "https://www.cnbc.com/2026/03/27/oil-price-wti-brent-crude-trump-strait-hormuz-tensions-iran-ships.html",
            mtTags: ["Finance", "Marketing", "Customer Ops"]
          },
          {
            title: "EU gas storage at critically low 28% — Netherlands at just 6% capacity as injection season approaches",
            sentiment: "negative",
            body: "EU gas storage stands at 28% of capacity, with the Netherlands at a critically low 6% — the most depleted in the bloc alongside Germany. The European Commission's Gas Coordination Group confirms no immediate security-of-supply risk but acknowledges that early seasonal injection is essential to rebalance reserves. The EU lowered its binding winter minimum from 90% to 75% in September 2025, providing some regulatory flexibility. However, with QatarEnergy's force majeure removing 77 million tonnes/year of LNG supply and Hormuz disruptions continuing, refilling storage to adequate levels before winter 2026-27 will be significantly more expensive. TTF gas remains at €55/MWh — still 83% above the pre-crisis baseline.",
            actie: "Marketing: use storage data in customer communications — 'Dutch gas reserves at just 6% — protect your household from next winter's price spike with a heat pump.' Finance: factor elevated gas procurement costs into any customer energy advisory calculations. Storage deficit means TTF unlikely to return below €40/MWh before Q4.",
            actieType: "Marketing",
            sourceUrl: "https://energy.ec.europa.eu/news/gas-coordination-group-confirms-readiness-prepare-upcoming-winter-season-2026-03-26_en",
            mtTags: ["Marketing", "Finance"]
          },
          {
            title: "QatarEnergy force majeure confirmed — 17% LNG capacity offline for 3-5 years, structural supply deficit locked in",
            sentiment: "negative",
            body: "QatarEnergy has officially declared force majeure on long-term LNG contracts to Italy, Belgium, South Korea, and China following Iranian strikes that destroyed Trains 4 and 6 at Ras Laffan and one gas-to-liquids facility. The damage removes 12.8 million tonnes/year (17% of Qatar's capacity) for 3-5 years — the first supply interruption in three decades. Asian LNG spot prices are expected to exceed €24/MMBtu from April-June 2026. For the European gas market, this structural supply gap means elevated prices are the new normal, fundamentally changing the economics of gas vs. electric heating for EiH's entire customer base.",
            actie: "Strategy: rebase all 5-year business planning assumptions on structurally higher gas prices (€45-60/MWh range vs. pre-crisis €27-32/MWh). This accelerates the heat pump transition timeline and strengthens the ServiceGemak® subscription value proposition for hybrid and all-electric products.",
            actieType: "Strategy",
            sourceUrl: "https://www.aljazeera.com/news/2026/3/24/qatarenergy-declares-force-majeure-on-some-lng-contracts-due-to-iran-war",
            mtTags: ["Finance", "Product", "Marketing"]
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "⛓",
        items: [
          {
            title: "Aluminum hits €3,013/ton — multi-year high as LME inventories drop to 432,725 tonnes",
            sentiment: "negative",
            body: "LME aluminum futures surged to €3,013/ton on March 27, the highest level since March 2022. LME warehouse inventories have dropped to 432,725 metric tonnes, well below historical averages. The geopolitical premium from Hormuz and smelter closures are the primary drivers. Aluminum is critical for heat pump components: fin stock, heat exchangers, radiator assemblies, and control panel housings. Meanwhile, copper has moderated to approximately €9,853/ton (Goldman Sachs H1 2026 forecast: €9,853/ton), down from the January peak as LME stockpiles rebuilt. The aluminum-copper price divergence creates procurement complexity.",
            actie: "Procurement: lock aluminum component pricing with Remeha and Intergas before Q2 contracts reset — budget +12% materials surcharge. Copper procurement window remains favorable — consider forward-buying Q2-Q3 inventory while prices are below €10,000/ton. Factor commodity cost movements into all Q2 installation quotes.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium",
            mtTags: ["Finance", "Field Ops", "Product"]
          },
          {
            title: "Asia-Europe container rates rise 5% to €2,347/40ft Rotterdam — April 1 FAK rate hike imminent",
            sentiment: "negative",
            body: "The Drewry World Container Index reached €2,097/40ft as of March 26, marking four consecutive weeks of increases. Shanghai-Rotterdam rates rose 3% to €2,347/40ft, while Shanghai-Genoa surged 12% to €3,196/40ft. CMA CGM's announced April 1 FAK rates of €3,220/40ft on Asia-Europe routes will further increase costs. Carriers continue rerouting via Cape of Good Hope, adding 2-3 weeks to Asia-Europe transit times. Only 3 blank sailings announced for next week indicates stable capacity but elevated pricing.",
            actie: "Field Ops: negotiate long-term freight contracts before April 1 FAK rate increase. For critical heat pump components sourced from Asia, evaluate air freight for high-value items (inverter boards, control units). Maintain 6-week buffer stock for all Asia-sourced parts. Prioritize Remeha Apeldoorn (domestic) and European suppliers.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
            mtTags: ["Field Ops", "Product", "Finance"]
          },
          {
            title: "Nexperia Netherlands-China conflict threatens secondary semiconductor crisis — HVAC controllers at risk",
            sentiment: "negative",
            body: "China's Ministry of Commerce flagged the conflict between Nexperia China and Nexperia Netherlands as creating a 'real possibility of another global semiconductor supply chain crisis.' Automakers are already scheduling 2026 production assuming volatile Nexperia supply. Concurrently, Shell CEO warned of potential European fuel shortages from April 2026 due to Hormuz disruptions. European ports (Rotterdam, Antwerp, Hamburg) face extended berth wait times. For EiH, the compounding effect of the ongoing RAMageddon memory shortage and Nexperia disruptions means smart thermostats, inverter boards, and digital controllers face extended lead times through Q2-Q3.",
            actie: "IT & Data: assess EiH's dependency on Nexperia-manufactured components in existing product lines. Product: confirm with Vaillant, Remeha, and Intergas their semiconductor sourcing exposure. Stock 6-month buffer of standard control boards and smart thermostats. Offer customers non-smart control alternatives to avoid installation delays.",
            actieType: "Operations",
            sourceUrl: "https://www.xeneta.com/blog/the-biggest-supply-chain-risks-of-2026-and-how-to-navigate-them",
            mtTags: ["IT & Data", "Field Ops", "Product"]
          }
        ]
      },
      {
        title: "HR & Workforce",
        icon: "👷",
        items: [
          {
            title: "CRITICAL: F-gas/R290 certification transition ends TOMORROW March 29 — unified certificate now mandatory",
            sentiment: "negative",
            body: "The transition period for the new unified refrigerant certification system expires tomorrow, March 29, 2026. From Monday, all technicians working with F-gases AND natural refrigerants (R290 propane) must hold the new unified A1 or A2 certificate — old separate certificates are no longer valid for issuing. The A1 certificate covers all quantities of F-gases and hydrocarbons; A2 covers small installations under 3kg. New certificates are valid for 7 years with mandatory recertification. Existing ACB certificates remain valid until March 2029 but cannot be newly issued after tomorrow. Any EiH technician without the updated certificate cannot legally perform heat pump installations or maintenance involving refrigerants.",
            actie: "HR/Field Ops URGENT: final verification of ALL 200+ technician certification status TODAY. Any technician without the new unified certificate must be reassigned to non-refrigerant work (boiler maintenance, insulation) starting Monday. Contact NVKL or CRT for emergency certification sessions. Document compliance status for legal protection.",
            actieType: "HR",
            sourceUrl: "https://centercon.nl/werken-met-r290-en-de-nieuwe-certificeringsplicht/",
            mtTags: ["HR", "Field Ops"]
          },
          {
            title: "TI CAO 3% wage increase now effective — €132 one-time payment due November, structural €115/month from March 2027",
            sentiment: "neutral",
            body: "The new TI CAO 2026-2028 is now fully ratified and the 3% structural wage increase took effect March 1, 2026. The agreement covers approximately 160,000 employees across 10,000+ installation companies. Key provisions: €132 gross one-time payment on November 1, 2026; structural €115 gross/month increase from March 2027 (approximately 3% additional). The broader technical sector leads wage growth at 3.5-4.5% in 2026, driven by persistent personnel shortages. With EiH's 250 employees, the immediate 3% increase represents approximately €375,000-500,000 in additional annual wage costs before the 2027 escalation.",
            actie: "Finance: confirm 3% wage increase is reflected in March payroll for all 250 employees. Budget the €132 one-time November payment (total: ~€33,000). Model 2027 budget impact of additional €115/month structural increase (total: ~€345,000/year). HR: communicate full CAO package to employees — use as retention tool alongside career development opportunities.",
            actieType: "HR",
            sourceUrl: "https://www.technieknederland.nl/nieuws/cao-technisch-installatiebedrijf-2026-2028-definitief-na-instemming-leden/",
            mtTags: ["HR", "Finance"]
          },
          {
            title: "70,000+ open technical vacancies — 85% of new hires are career switchers, only 44% of firms actively recruit them",
            sentiment: "negative",
            body: "The Netherlands faces a structural shortage of over 70,000 open technical vacancies, requiring an estimated 121,000 new employees by 2029 to cover growth and turnover. Career switchers (zij-instromers) now comprise 85% of new entrants in installation technology, yet only 44% of companies actively recruit them. Breman Installatiegroep won the Techniek Inclusief Award 2026 for successful zij-instromer integration. Installation production volume is projected to grow 2.4% in 2026, but labor constraints create bottlenecks — longer wait times persist for heat pump installations. The VCA safety framework now requires mandatory leadership skills documentation by July 1, 2026.",
            actie: "HR: benchmark EiH's zij-instromer recruitment against the 44% industry average — if below, launch targeted recruitment campaign by Q2. Partner with technical education providers for learn-and-work programs (1-2 days classroom + on-the-job). Field Ops: prepare for VCA leadership skills documentation requirement by July 1 — update all manager job descriptions and performance evaluations.",
            actieType: "HR",
            sourceUrl: "https://www.abc-professionals.nl/over-abc/technisch-nieuws/abc-professionals-technisten-werken-samen-ivm-opleiden-zij-instromers-287",
            mtTags: ["HR", "Field Ops"]
          }
        ]
      },
      {
        title: "Heat Pump Market & Competition",
        icon: "🔥",
        items: [
          {
            title: "Weheat launches Swift in-roof heat pump — compact cassette design disrupts traditional outdoor unit paradigm",
            sentiment: "neutral",
            body: "Dutch startup Weheat launched the Swift, a compact in-roof heat pump cassette that sits flush like a skylight, on January 26, 2026. The prefab design lifts through roof openings and requires no outdoor space — eliminating a major barrier for terraced housing and urban installations. Maintenance is performed entirely from the interior. Weheat operates through 200+ installation partners across the Netherlands. This product directly addresses the Dutch urban housing segment where EiH competes, offering an alternative to traditional split-system or monoblock heat pumps from Vaillant and Remeha.",
            actie: "Product: request Weheat Swift demo unit and technical specifications. Evaluate fit for EiH portfolio — the in-roof form factor solves the 'no outdoor space' objection in terraced/urban housing. If Weheat product quality meets standards, explore partnership before competitors lock exclusive distribution. Marketing: monitor Weheat market traction in EiH service areas.",
            actieType: "Product",
            sourceUrl: "https://www.weheat.nl/",
            mtTags: ["Product", "Marketing"]
          },
          {
            title: "Vaillant launches full R290 heat pump generation — aroTHERM plus successor and geoTHERM exclusive for VSK+E",
            sentiment: "positive",
            body: "Vaillant has unveiled a complete new generation of R290 (propane) heat pumps for the Dutch market: air-to-water models in 3-12 kW capacities (aroTHERM plus successor) with improved efficiency and reduced noise, plus ground-source geoTHERM exclusive (5-17 kW) and geoCOMPACT exclusive (5-11 kW with integrated 185L tank). The R290 transition enables higher supply temperatures suitable for both renovation and new construction. Public presentation is scheduled for the VSK+E 2026 trade fair. This directly impacts EiH's product portfolio — the current Vaillant aroTHERM 7.5kW in EiH's lineup will be superseded.",
            actie: "Product: attend VSK+E presentation and secure early access to new Vaillant R290 lineup. Negotiate transition pricing for existing aroTHERM 7.5kW inventory. Field Ops: plan R290-specific safety and installation training for all heat pump technicians — propane's flammability requires updated procedures. Update all customer-facing product literature.",
            actieType: "Product",
            sourceUrl: "https://www.installatietotaal.nl/nieuws/vaillant-onthult-nieuwe-generatie-r290-warmtepompen-voor-2026/",
            mtTags: ["Product", "Field Ops", "Marketing"]
          },
          {
            title: "European heat pump sales recover 11% in 2025 — Dutch market stabilizing after 30% decline",
            sentiment: "positive",
            body: "European residential heat pump sales grew 11% in 2025 across 16 countries, signaling market recovery after the 2024 contraction. The Dutch market specifically contracted 30% in 2024 to 125,000 units (from 179,000 in 2023) following the mandate cancellation and lower gas prices. Hybrid heat pumps represent 42% of air-to-water sales and 38% of total market — confirming the hybrid strategy as the dominant pathway. The market is forecast to grow from €465M (2025) to €578M (2030) at 4.45% CAGR. With ISDE budget confirmed at €511M for 2026 and gas prices structurally elevated, the recovery trajectory should accelerate.",
            actie: "Strategy: plan for market recovery — ensure EiH installation capacity can handle 10-15% volume increase in H2 2026. Marketing: lead with hybrid heat pump positioning (42% of market) — Remeha Elga Ace and Intergas Xtend remain core products. Monitor ISDE budget consumption rate — if subsidies deplete faster than expected, alert customers to apply early.",
            actieType: "Strategy",
            sourceUrl: "https://www.pv-magazine.com/2026/03/23/european-residential-heat-pump-sales-increased-in-2025/",
            mtTags: ["Marketing", "Product", "Finance"]
          },
          {
            title: "Feenstra-Vattenfall high-temperature heat pump targets 3M+ Dutch homes — direct competitor to EiH hybrid proposition",
            sentiment: "negative",
            body: "The Vattenfall-Feenstra partnership has developed a high-temperature heat pump delivering 60-80 degrees Celsius output — directly replacing gas boilers without requiring radiator or insulation upgrades. After three years of R&D and 20-home field testing in Heemskerk, the system uses a heat battery buffer for radiator heating and hot water generation. Installation requires only two days per home. More than three million Dutch homes could benefit. Unlike traditional heat pumps (45-55 degrees Celsius), this solution eliminates the most common customer objection: 'My radiators need higher temperatures.' This is a direct competitive threat to EiH's hybrid heat pump positioning.",
            actie: "Product: urgently evaluate Feenstra's high-temperature heat pump specifications and field test results. If EiH cannot offer a comparable high-temperature solution, the hybrid proposition loses its key advantage for older homes with radiators. Explore partnerships with SOLVIS or DENSO for high-temperature solutions. Marketing: develop counter-messaging for customers comparing EiH hybrid vs. Feenstra high-temp.",
            actieType: "Product",
            sourceUrl: "https://elementallondon.show/news/heating/vattenfall-and-feenstra-launch-high-temperature-heat-pump-solution/",
            mtTags: ["Product", "Marketing"]
          }
        ]
      },
      {
        title: "IT, Data & Cybersecurity",
        icon: "🔐",
        items: [
          {
            title: "Dutch Cyberbeveiligingswet plenary debate March 23 — NIS2 enactment expected Q2 2026",
            sentiment: "negative",
            body: "The Dutch House of Representatives held a plenary debate on the Cyberbeveiligingswet (NIS2 transposition) on March 23, 2026, signaling imminent enactment in Q2 2026. The legislation requires medium-to-large organizations in critical sectors (including energy infrastructure) to conduct risk assessments, implement duty-of-care measures, and report security incidents to NCSC within 24 hours. Organizations with 50+ employees or €10M+ turnover fall within scope. EiH, with ~250 employees and a customer database of 100,000+ households containing address and payment data, is clearly in scope. Non-compliance penalties can reach €10M or 2% of global turnover.",
            actie: "IT: accelerate NIS2 compliance preparations — the plenary debate signals legislation will pass within weeks. Complete security audit of customer data systems, field service platforms, and ServiceGemak® billing infrastructure by end of April. Implement 24-hour breach notification workflow. Data team: complete data classification exercise and establish incident response procedures.",
            actieType: "IT & Data",
            sourceUrl: "https://www.digitalsecurityinstituut.nl/en/nieuws/ingang-nis2-cyberbeveiligingswet-verder-uitgesteld",
            mtTags: ["IT & Data"]
          },
          {
            title: "Dutch Ministry of Finance breached — government cyber incidents surge amid Ivanti zero-day exploitation",
            sentiment: "negative",
            body: "The Dutch Ministry of Finance detected a cyberattack on March 19, affecting internal systems and employee workstation access. The Dutch Data Protection Authority and Judicial Council also confirmed breaches via Ivanti zero-day vulnerabilities, exposing employee names, business emails, and phone numbers. The Dutch National Police disclosed a successful phishing attack with limited impact. The Netherlands leads Europe in data breach reporting with 39,773 notifications by January 2026. Energy sector ransomware attacks surged 80% in 2024 vs. prior year, with 187 confirmed attacks involving system encryption and data theft. Third-party breaches affected 90% of top global energy companies.",
            actie: "IT: immediately verify EiH systems are patched against Ivanti CVEs referenced in NCSC advisories. Review all third-party vendor access to EiH systems — third-party breaches are the leading attack vector in energy sector (90% of top companies affected). Implement multi-factor authentication on all field service and customer data platforms if not already in place.",
            actieType: "IT & Data",
            sourceUrl: "https://therecord.media/netherlands-finance-ministry-cyberattack-breach",
            mtTags: ["IT & Data"]
          },
          {
            title: "AI-driven IoT attacks enable 72-hour HVAC device exploitation — shadow IoT creates blind spots",
            sentiment: "negative",
            body: "AI-powered threat actors can now scan, fingerprint, and exploit smart HVAC devices within 72 hours of initial compromise. Key vulnerabilities include unencrypted traffic, default credentials, and firmware replacement attacks (documented in Bosch BCC series thermostats). 'Shadow IoT' — smart thermostats and sensors installed without IT oversight — provides unauthorized network entry points. Compromised HVAC systems enable lateral movement into building management networks. For EiH, the connected heating devices in the ServiceGemak® fleet (smart thermostats, remote diagnostics) represent both a cybersecurity liability and an opportunity to offer managed security as a service differentiator.",
            actie: "IT & Data: conduct inventory of all connected devices in EiH's ServiceGemak® fleet — identify smart thermostats, remote diagnostic systems, and IoT sensors. Verify all devices have unique credentials (no defaults). Product: evaluate whether EiH can offer 'managed security' for connected heating as a ServiceGemak® add-on — differentiator vs. competitors.",
            actieType: "IT & Data",
            sourceUrl: "https://secureiot.house/ai-driven-iot-attacks-why-enterprise-smart-devices-are-10x-more-dangerous-in-2026/",
            mtTags: ["IT & Data", "Product", "Customer Ops"]
          }
        ]
      },
      {
        title: "Consumer & Housing Market",
        icon: "🏠",
        items: [
          {
            title: "Dutch consumer confidence crashes to -30 — lowest in 4 years as energy fears spike",
            sentiment: "negative",
            body: "Consumer confidence in the Netherlands plummeted to -30 in March 2026 (from -24 in February), the sharpest monthly decline in four years. The economic climate index collapsed to -54 (from -42), with economic outlook expectations crashing to -52. Willingness to purchase deteriorated to -15, with perception of major purchase timing falling to -32. CBS attributes the decline directly to rising energy prices from the Middle East conflict. This is well below the 20-year average of -11. For EiH, deteriorating consumer sentiment creates headwinds for large purchase decisions like heat pump installations — making rental and lease models (ServiceGemak®) even more critical.",
            actie: "Marketing: shift messaging from 'invest in a heat pump' to 'protect your monthly costs with ServiceGemak® rental from €79.50/month.' Consumer Ops: train all customer-facing staff on rental-first pitch — when confidence is this low, eliminating upfront cost is essential. Finance: model ServiceGemak® conversion rate sensitivity to consumer confidence — if rental take-up increases, adjust financing/capacity planning.",
            actieType: "Marketing",
            sourceUrl: "https://www.cbs.nl/en-gb/news/2026/13/dutch-consumer-confidence-continues-to-fall-in-march",
            mtTags: ["Marketing", "Customer Ops", "Finance"]
          },
          {
            title: "Dutch mortgage rates climb to 3.76% (10-year NHG) — higher borrowing costs favor rental models",
            sentiment: "neutral",
            body: "Average 10-year fixed Dutch mortgage rates with NHG have risen to 3.76% as of March 25, up 0.15 percentage points in recent weeks. The lowest rates start at 3.40% for 1-year fixed mortgages. Geopolitical uncertainty is driving higher risk premiums in financial markets. With the ECB holding rates but signaling willingness to hike if energy-driven inflation persists, mortgage rates are unlikely to decrease in Q2. For customers considering financing a €8,000-15,000 heat pump installation through a mortgage top-up, the monthly financing cost has increased 10-15% compared to six months ago — further strengthening the case for ServiceGemak® rental.",
            actie: "Finance: update all customer financing comparisons with current 3.76% NHG rate. The monthly cost differential between mortgage-financed heat pump purchase and ServiceGemak® rental (€79.50/month) continues to narrow — for many customers, rental is now cheaper than financed purchase. Marketing: develop a calculator showing mortgage cost vs. rental comparison at current rates.",
            actieType: "Finance",
            sourceUrl: "https://www.ing.nl/en/personal/mortgage/current-mortgage-rates",
            mtTags: ["Finance", "Marketing"]
          },
          {
            title: "ISDE subsidy budget confirmed at €511M for 2026 — hybrid heat pump subsidies range €2,550-€4,425",
            sentiment: "positive",
            body: "The ISDE sustainable energy investment subsidy programme has a confirmed 2026 budget of at least €511 million. Heat pump subsidies cover 20-30% of system costs: €2,550 for 4kW hybrid systems, €3,150 for 8kW air-source, €4,425 for 6kW ground-source installations. Homeowners combining multiple energy-saving measures (insulation + heat pump) qualify for additional per-square-metre bonuses. The SDE++ operating subsidy provides an additional €8 billion for climate pioneers. For EiH, the subsidy infrastructure remains robust — the challenge is converting subsidy availability into actual installations amid low consumer confidence.",
            actie: "Customer Ops: ensure every customer touchpoint includes ISDE subsidy calculation — from ServiceGemak® maintenance visits to marketing campaigns. Develop a 'subsidy guarantee' service where EiH handles the full ISDE application on behalf of the customer (remove friction). Monitor budget consumption rate monthly — if pace accelerates, alert customers to apply early.",
            actieType: "Customer Ops",
            sourceUrl: "https://business.gov.nl/subsidies-and-schemes/sustainable-energy-investment-subsidy-isde/",
            mtTags: ["Customer Ops", "Finance", "Marketing"]
          }
        ]
      },
      {
        title: "Regulation & Compliance",
        icon: "📜",
        items: [
          {
            title: "EPBD transposition deadline May 29 — solar mandates and zero-emission building standards approaching",
            sentiment: "positive",
            body: "The revised EU Energy Performance of Buildings Directive (EPBD-IV) must be transposed into Dutch national law by May 29, 2026, with implementation phased from January 1, 2027. Key requirements: solar installation mandate on all new non-residential buildings over 250m2 by December 31, 2026; Building Automation and Control Systems (BACS) compliance for non-residential buildings above 290kW from 2026 (dropping to 70kW in 2030); zero-emission building standard for all new public buildings from January 1, 2028, extending to all buildings by 2030. National Building Renovation Plans (NBRPs) must be submitted outlining energy performance improvement strategies.",
            actie: "Strategy: develop EiH's EPBD commercial proposition — 'renovation-ready' package combining hybrid heat pump + insulation assessment + ISDE application as one offering. Product: assess BACS opportunities for commercial building clients (290kW threshold). Marketing: position EiH as the one-stop partner for building renovation compliance before the directive enters national law.",
            actieType: "Strategy",
            sourceUrl: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive_en",
            mtTags: ["Product", "Marketing"]
          },
          {
            title: "EU Right-to-Repair directive effective July 31, 2026 — warranty extension and spare parts obligations",
            sentiment: "neutral",
            body: "The EU Right-to-Repair Directive (2024/1799) takes effect July 31, 2026, requiring manufacturers to extend warranty by at least 12 months when repairs are made during the statutory warranty period. While heating installations are not explicitly listed in Annex II (which covers washing machines, refrigerators, and smartphones), any heating products subject to EU ecodesign regulations may fall under repair obligation requirements outside the warranty period. The directive also mandates spare parts availability for at least 3 years post-warranty and prohibits contractual clauses preventing independent repair.",
            actie: "Customer Ops: legal review of all ServiceGemak® warranty terms against Right-to-Repair requirements by June 30. Verify spare parts availability commitments for all products in the EiH range — minimum 3 years post-warranty. Product: confirm with Remeha, Intergas, and Vaillant their spare parts commitment timelines under the new directive.",
            actieType: "Customer Ops",
            sourceUrl: "https://commission.europa.eu/law/law-topic/consumer-protection-law/directive-repair-goods_en",
            mtTags: ["Customer Ops", "Product"]
          },
          {
            title: "GDPR enforcement accelerates — €5.65B total fines, Dutch AP issues €600K penalty for tracking cookies",
            sentiment: "negative",
            body: "European GDPR enforcement continues intensifying with €5.65 billion in total fines since 2018. The year 2025 alone accounted for €2.3 billion — up 38% year-over-year. In the Netherlands, the Autoriteit Persoonsgegevens (AP) fined A.S. Watson €600,000 for unauthorized tracking cookies and Coolblue €40,000 for inadequate cookie banners. Smart home products face increasing scrutiny over data collection practices. For EiH, any connected heating devices collecting usage data, location data, or household information through ServiceGemak® monitoring systems must comply with explicit consent requirements and data minimization principles.",
            actie: "IT & Data: audit all data collection from ServiceGemak® connected devices — verify GDPR-compliant consent mechanisms for every data point collected. Review cookie and tracking practices on EiH customer portal. Legal: confirm data processing agreements with all third-party service providers handling customer data. The AP's enforcement trajectory suggests fines will continue escalating.",
            actieType: "IT & Data",
            sourceUrl: "https://secureprivacy.ai/blog/data-privacy-trends-2026",
            mtTags: ["IT & Data", "Customer Ops"]
          }
        ]
      },
      {
        title: "Eneco Group & Strategy",
        icon: "🏢",
        items: [
          {
            title: "Eneco reorganization deadline March 31 — 3 days to finalize EiH strategic positioning for CEO Hagens",
            sentiment: "negative",
            body: "The Eneco Group reorganization reaches its March 31 deadline in 3 days. CEO Martijn Hagens (started March 1, former Vattenfall SVP) is overseeing the elimination of 350 positions. The Management Board restructuring saw COO-Assets Karen de Lathouder depart and the Trading/Flexibility and Assets portfolios merge. Eneco signed a 5-year gas supply agreement with Equinor (0.5 bcm/year) and completed the acquisition of Gulf Gas + Power with ACM approval. For EiH as a separate BV under the Eneco Group umbrella, Director Schoon must demonstrate standalone value creation — ServiceGemak® recurring revenue, heat pump conversion pipeline, and urban market positioning — to secure EiH's strategic position in the new structure.",
            actie: "Director Schoon: DEADLINE — EiH strategic positioning paper must reach CEO Hagens by Monday March 30 latest. Key proof points: ServiceGemak® recurring revenue trajectory (target 28% of revenue per home services benchmark), heat pump conversion pipeline and market share vs. Feenstra/Quatt, EPBD renovation opportunity, and standalone operating model viability. Finance: prepare standalone P&L projection showing EiH value creation independent of Eneco shared services.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/",
            mtTags: ["HR", "Finance"]
          },
          {
            title: "Home services M&A values subscription revenue at premium — top firms achieve 28% recurring revenue mix",
            sentiment: "positive",
            body: "The 2026 home services M&A market increasingly values recurring revenue, with top-quartile firms generating 28% of revenue from subscription/membership models — a key valuation multiplier. Assets below 15% subscription revenue are classified as 'high-volatility' for valuation purposes. Whole-home service capture delivers 30% higher customer lifetime value versus single-trade operators. The global home services market reached €774 billion in 2026, projected to grow to €909 billion by 2031 at 3.27% CAGR. For EiH, ServiceGemak® subscriptions (Basis €8.99/mo, Extra €15.99/mo, Compleet €22.99/mo) plus heat pump rentals (from €79.50/mo) represent exactly the recurring revenue profile that commands premium M&A valuations.",
            actie: "Finance: calculate EiH's current subscription revenue mix (ServiceGemak® + rental as % of total revenue). If below the 28% top-quartile benchmark, develop a roadmap to reach it by 2027. Strategy: include this M&A valuation data in the positioning paper for CEO Hagens — it demonstrates EiH's standalone value and acquisition/IPO readiness.",
            actieType: "Finance",
            sourceUrl: "https://www.cfoxadvisory.com/home-services-2026-ma-outlook/",
            mtTags: ["Finance", "Marketing"]
          }
        ]
      }
    ],
    priorities: [
      "HR: CRITICAL — Final verification of ALL technician R290/F-gas certifications before March 29 deadline (TOMORROW). Confirm 3% TI CAO wage increase in March payroll for 250 employees. Budget €132 one-time November payment (~€33,000) and model 2027 €115/month structural increase (~€345,000/year). Benchmark zij-instromer recruitment — if below 44% industry average, launch Q2 campaign. Prepare VCA leadership skills documentation by July 1 deadline.",
      "IT & Data: Accelerate NIS2/Cyberbeveiligingswet compliance — plenary debate held March 23 signals imminent enactment. Verify systems patched against Ivanti CVEs per NCSC advisories. Audit all ServiceGemak® connected device data collection for GDPR compliance. Conduct IoT security inventory — verify no default credentials on smart thermostats. Assess Nexperia semiconductor supply chain exposure.",
      "Finance: Model Q2 margin impact at €98/bbl Brent and €55/MWh TTF. Lock aluminum component pricing before Q2 reset (+12% surcharge). Update all customer financing comparisons with 3.76% NHG mortgage rate. Calculate EiH subscription revenue mix vs. 28% top-quartile benchmark. Prepare standalone P&L projection for CEO Hagens positioning paper by March 30.",
      "Customer Ops: Shift to rental-first pitch — consumer confidence at -30 demands eliminating upfront costs. Ensure every touchpoint includes ISDE subsidy calculation. Develop 'subsidy guarantee' service handling full ISDE application. Legal review of ServiceGemak® warranty terms against Right-to-Repair directive (July 31 deadline). Verify spare parts availability commitments (minimum 3 years).",
      "Field Ops: Confirm all technician certifications before March 29. Stock 6-month control board buffer against semiconductor disruptions. Negotiate freight contracts before April 1 CMA CGM FAK rate increase. Maintain 6-week Asia-sourced parts buffer. Plan R290-specific safety training for new Vaillant/Intergas models. Prioritize Remeha Apeldoorn domestic supply.",
      "Product: Evaluate Weheat Swift in-roof heat pump for EiH portfolio — solves urban/terraced housing outdoor space objection. Attend Vaillant VSK+E presentation for new R290 aroTHERM lineup. Assess Feenstra high-temperature heat pump competitive threat — if EiH cannot match 60-80 degree output, the hybrid proposition weakens for radiator-based homes. Develop 'renovation-ready' EPBD compliance package.",
      "Marketing: Shift from 'invest' to 'protect your costs' — ServiceGemak® rental from €79.50/month messaging. Use EU gas storage data (NL at 6%) and consumer energy fear in campaigns. Update all ROI calculators with €55/MWh gas baseline. Counter Feenstra high-temp and Quatt AI messaging. Target 'just bought' homeowner segment with mortgage advisor partnerships. Develop mortgage cost vs. rental comparison calculator.",
      "Strategy: DEADLINE — Director Schoon delivers EiH positioning paper to CEO Hagens by March 30. Include: ServiceGemak® recurring revenue trajectory toward 28% benchmark, heat pump conversion pipeline, EPBD renovation opportunity, standalone operating model viability, competitive positioning vs. Feenstra/Quatt. Rebase 5-year planning on structurally higher gas prices (€45-60/MWh range). Plan for 10-15% installation volume recovery in H2 2026."
    ]
  },
  {
    date: "2026-03-27",
    dateFormatted: "Friday 27 March 2026",
    samenvatting: "CRITICAL HR DEADLINES: F-gas/R290 technician certification expires TOMORROW (March 29) — all 200+ technicians must hold new unified certificate or face legal bar from heat pump installations. New TI CAO ratified with 3% wage increase effective immediately, €132 one-time payment, and senior leave changes from 2027. REORG D-DAY IN 4 DAYS: Eneco reorganization deadline March 31 — 350 jobs affected. Director Schoon must present EiH strategic positioning paper to CEO Hagens this week. ENERGY MARKETS EASING SLIGHTLY: TTF gas dropped to €55/MWh (down from €74 peak) as US military operations target Hormuz reopening. Brent crude at €97/bbl. Qatar declares force majeure on LNG contracts — 17% capacity offline for 3-5 years, locking in structural supply deficit. ECB holds at 2.15% but Lagarde signals willingness to hike if energy-driven inflation persists. SUPPLY CHAIN & SECURITY: Aluminum hits €3,019/ton (4-year high), copper stabilizes at €11,109/ton. CMA CGM announces €3,220/container FAK rates from April 1. Memory chip shortage ('RAMageddon') drives 40% price surge for smart controllers. NIS2 cybersecurity directive enacting Q2 — 24-hour incident reporting required. Dutch heat pump mandate cancelled — market now subsidy-driven (€509M ISDE). Remeha scales Apeldoorn factory to 140,000 hybrid heat pumps/year. Vaillant launches R290 aroTHERM generation, Intergas launches Xceed fully-electric heat pump. Competitor Quatt raises €25M with AI-driven heat pump strategy. EU warranty rules and right-to-repair framework effective today (Sept 27 deadline). EU Building Renovation Directive must be transposed by May 29.",
    kpis: [
      { label: "TTF Gas Price", value: "€55/MWh", sub: "Down from €74 peak — still +83% vs pre-crisis", trend: "positive" },
      { label: "Brent Crude", value: "€97/bbl", sub: "Volatile — US military ops targeting Hormuz reopening", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Held — Lagarde signals possible hike if inflation persists", trend: "negative" },
      { label: "Reorg Deadline", value: "4 days", sub: "350 jobs — deadline March 31, 2026", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "TTF gas eases to €55/MWh but Qatar force majeure locks in 3-5 year supply deficit",
            sentiment: "negative",
            body: "Dutch TTF gas futures have moderated from the March 19 peak of €74/MWh to approximately €55/MWh — still 83% above the pre-crisis baseline of €30/MWh. The easing follows improved sentiment around US military operations in the Strait of Hormuz. However, QatarEnergy has declared force majeure on LNG contracts to Italy, Belgium, South Korea, and China after missile damage disabled Trains 4 and 6 at Ras Laffan — removing 17% of Qatar's LNG capacity (12.8 million tonnes/year) for 3-5 years. EU gas storage stands at a critically low 29.4%. This structural supply deficit means TTF is unlikely to return to the €27-32/MWh pre-crisis range for years. For EiH, elevated gas prices strengthen the heat pump conversion case for every customer still running a gas boiler.",
            actie: "Update all customer-facing heat pump ROI calculators with €55/MWh gas baseline (was €30/MWh). The payback period for hybrid heat pump vs. gas boiler has shortened dramatically — use this in every ServiceGemak® maintenance visit and marketing campaign.",
            actieType: "Marketing",
            sourceUrl: "https://www.euronews.com/business/2026/03/27/is-europe-sleepwalking-into-its-worst-gas-crisis-since-2022",
            mtTags: ["Finance", "Marketing"]
          },
          {
            title: "Strait of Hormuz: US military campaign launched — Iranian navy commander killed in airstrike",
            sentiment: "negative",
            body: "The Strait of Hormuz crisis enters its fifth week. Iran maintains effective control through a 'toll booth' system, selectively allowing passage while blocking most commercial traffic. Tanker traffic is down 70% from pre-crisis levels. On March 26, Israeli forces killed Iranian navy commander Alireza Tangsiri in an airstrike — a significant escalation. The US launched military operations on March 19 to reopen the strait. 20,000 seafarers remain stranded according to UN reports. War-risk insurance has surged from 0.15-0.25% to 5-10% of hull value, adding massive costs to any remaining shipping through the region.",
            actie: "Factor continued Hormuz disruption into all Q2 procurement planning. Asia-sourced components (heat pump parts, electronics) face 4-6 week delays and 20-50% shipping premiums. Prioritize European suppliers (Remeha Apeldoorn, Intergas domestic) where possible.",
            actieType: "Operations",
            sourceUrl: "https://www.aljazeera.com/news/2026/3/26/tehranstollbooth-how-iran-picks-who-to-let-through-strait-of-hormuz",
            mtTags: ["Field Ops", "Product"]
          },
          {
            title: "ECB holds at 2.15% but Lagarde signals readiness to hike rates if energy inflation persists",
            sentiment: "negative",
            body: "The ECB maintained all key rates at its March 19 meeting (deposit 2.0%, refinancing 2.15%, marginal lending 2.4%). However, ECB President Christine Lagarde explicitly stated the bank is ready to hike rates 'even if the expected jump is not too persistent.' The 2026 inflation forecast has been revised upward to 2.6% (from 2.0%) driven by energy costs, while the growth forecast was cut to 0.9%. For EiH customers financing heat pump installations through mortgages, sustained or rising rates add borrowing cost pressure — making lease and rental models (ServiceGemak®) more attractive relative to upfront purchase.",
            actie: "Push ServiceGemak® rental and lease models in all customer conversations. With mortgage rates at 3.4-4.3% and potential ECB hikes ahead, monthly rental (from €79.50/month for hybrid heat pump) is increasingly competitive vs. financed purchase. Develop 0% installment plans with ISDE subsidy integration.",
            actieType: "Finance",
            sourceUrl: "https://www.cnbc.com/2026/03/25/ecb-rate-hikes-inflation-forecasts-christine-lagarde-iran-war.html",
            mtTags: ["Finance", "Marketing"]
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "⛓",
        items: [
          {
            title: "Aluminum surges to €3,019/ton — 4-year high driven by geopolitical premium",
            sentiment: "negative",
            body: "LME aluminum futures hit €3,019/ton (March 26), the highest since March 2022. The geopolitical premium from the Hormuz crisis and global production constraints are driving the surge. Aluminum is critical for heat pump fin stock, radiators, heat exchangers, and control panel housings. The 10%+ premium vs. Q4 2025 is flowing through to component costs from Vaillant, Remeha, and Intergas. Meanwhile, copper has stabilized at €11,109/ton — down from the January peak of €13,365/ton — as LME stockpiles hit a 22-year high of 1.01 million tonnes.",
            actie: "Lock aluminum component pricing with suppliers before Q2 contracts reset. Copper procurement window remains favorable — consider forward-buying for Q2-Q3. Budget +10% materials surcharge into all Q2 installation quotes.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium",
            mtTags: ["Finance", "Field Ops", "Product"]
          },
          {
            title: "CMA CGM announces €3,220/container FAK rates from April 1 — shipping costs still escalating",
            sentiment: "negative",
            body: "CMA CGM has announced new FAK (Freight All Kinds) rates of €3,220 per 40ft container on Asia-Europe routes effective April 1, 2026. Current Shanghai-Rotterdam spot rates are €2,348/40ft (+3% week-over-week). Major carriers (Maersk, CMA CGM, Hapag-Lloyd) have suspended all Hormuz and Red Sea transits, forcing rerouting via Cape of Good Hope — adding weeks to transit times. For EiH, Asia-sourced boiler components, heat pump subassemblies, and electronics face significant cost and delivery time increases.",
            actie: "Negotiate long-term freight contracts before April 1 rate increases. For critical components, evaluate air freight for small high-value items (inverter boards, control units). Build 6-week buffer stock for Asia-sourced parts.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
            mtTags: ["Field Ops", "Product"]
          },
          {
            title: "Memory chip shortage ('RAMageddon') hits smart controllers — 40% price surge through Q2",
            sentiment: "negative",
            body: "A global memory chip shortage — dubbed 'RAMageddon' — is driving up to 40% price increases for memory products in Q2 2026. Semiconductor fabs are reallocating capacity from traditional electronics to high-bandwidth memory (HBM) for AI data centers. Power semiconductors used in heat pump inverters, smart thermostats, and digital controllers are competing for scarce fab capacity with EV and AI demand. Smart-capable HVAC units from Vaillant and Remeha that require advanced control boards may face extended lead times.",
            actie: "Stock 6-month buffer of standard control boards and smart thermostats (Intergas, Remeha replacements). Where possible, offer customers standard (non-smart) control options to avoid delays. Communicate 2-4 week extended lead times on smart-capable installations.",
            actieType: "Operations",
            sourceUrl: "https://www.cnbc.com/2026/01/26/memory-chip-shortage-synopsys-lenovo-ai-data-centers.html",
            mtTags: ["IT & Data", "Field Ops", "Product"]
          },
          {
            title: "NIS2 cybersecurity directive: Dutch Cyberbeveiligingswet expected Q2 2026 — incident reporting within 24 hours",
            sentiment: "negative",
            body: "The Dutch implementation of the EU NIS2 directive (Cyberbeveiligingswet) is expected to take effect in Q2 2026. The energy sector — including HVAC and heating installation companies — falls within scope. Companies must report significant cybersecurity incidents to NCSC within 24 hours (initial notification), 72 hours (update), and 1 month (final report). Recent attacks on Dutch government agencies via Ivanti zero-day exploits and the Odido breach (6.2 million users) highlight the urgency. EiH's customer database (100,000+ households with address and payment data) is a high-value target.",
            actie: "IT: Develop NIS2 incident response plan before Q2 deadline. Conduct security audit of customer data systems, field service platforms, and ServiceGemak® billing infrastructure. Data team: review data classification and implement 24-hour breach notification workflow.",
            actieType: "IT & Data",
            sourceUrl: "https://humaninprogress.com/netherlands-cybersecurity-act-nis2-implementation/",
            mtTags: ["IT & Data"]
          }
        ]
      },
      {
        title: "Heat Pump Market & Policy",
        icon: "🔥",
        items: [
          {
            title: "Dutch hybrid heat pump mandate cancelled — market now fully subsidy-driven with €509M ISDE budget",
            sentiment: "neutral",
            body: "The Dutch cabinet has officially cancelled the mandatory hybrid heat pump requirement at boiler replacement that was planned for 2026. The heat pump market now relies entirely on market incentives and subsidies. The ISDE budget stands at €509 million for 2026, covering heat pumps, insulation, solar water heaters, and district heating connections. ISDE subsidies: €2,550 for 4kW hybrid systems, €3,150 for 8kW air-source, €4,425 for 6kW ground-source. For EiH, this means conversion depends on customer economics and marketing effectiveness rather than regulatory compulsion.",
            actie: "Reframe all marketing from 'compliance' to 'savings opportunity.' With gas at €55/MWh (vs. €30 pre-crisis), the financial case for heat pumps has never been stronger even without a mandate. Lead with: 'Your gas bill just doubled — a heat pump pays for itself faster than ever.' Ensure every quote includes ISDE subsidy calculation.",
            actieType: "Marketing",
            sourceUrl: "https://ehpa.org/news-and-resources/press-releases/dutch-heat-pump-industry-responds-to-cancellation-of-2026-legislation/",
            mtTags: ["Marketing", "Product", "Finance"]
          },
          {
            title: "Remeha scales Apeldoorn factory to 140,000 hybrid heat pumps/year — key EiH supplier strengthens",
            sentiment: "positive",
            body: "Remeha has completed scaling its Apeldoorn production facility to 140,000 hybrid heat pump units per year (600 units per working day). The company relocated hybrid heat pump production from France to the Netherlands, significantly reducing supply chain exposure to international shipping disruptions. This is strategically important for EiH: Remeha is a core supplier (Elga Ace 4kW and 6kW are key products), and domestic production means shorter lead times and lower logistics costs compared to competitors relying on Asian or Southern European manufacturing.",
            actie: "Negotiate preferred allocation with Remeha given their expanded capacity. Explore volume discounts for Q2-Q3 orders. The domestic production advantage (no shipping delays, no Hormuz exposure) should be leveraged in procurement negotiations and customer communications.",
            actieType: "Operations",
            sourceUrl: "https://www.coolingpost.com/world-news/remeha-opens-largest-dutch-heat-pump-factory/",
            mtTags: ["Product", "Field Ops"]
          },
          {
            title: "EU Building Renovation Directive must be transposed by May 29, 2026 — renovation wave incoming",
            sentiment: "positive",
            body: "The revised EU Energy Performance of Buildings Directive (EPBD, EU/2024/1275) must be transposed into national law by all EU member states by May 29, 2026. Key requirements: renovate 16% of worst-performing buildings by 2030, 26% by 2033. New commercial/public buildings over 250m² must install solar by December 31, 2026. Digital renovation passports become mandatory. The EU Social Climate Fund (€86.7 billion) is now available for energy efficiency upgrades in vulnerable households. For EiH, this directive creates a structural demand floor for heating system upgrades over the next decade.",
            actie: "Prepare for increased demand from building renovation requirements. Develop a 'renovation-ready' package: hybrid heat pump + insulation assessment + ISDE subsidy application as a single offering. Position EiH as the one-stop partner for EPBD compliance.",
            actieType: "Strategy",
            sourceUrl: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive_en",
            mtTags: ["Marketing", "Product"]
          },
          {
            title: "Vaillant launches new R290 aroTHERM generation — Intergas introduces all-electric Xceed heat pump",
            sentiment: "positive",
            body: "Major supplier product launches for the Dutch market: Vaillant is launching a new generation of R290 (propane) aroTHERM heat pumps in 2026, with improved efficiency and lower noise profiles. Intergas has introduced the Xceed, a fully electric heat pump alongside updates to the Xtend hybrid line (new Xtend Eco 5kW with €2,125 ISDE subsidy). Daikin opened an Experience Center in Heerenveen, Netherlands. Meanwhile, Dutch startup Weheat has launched a rooftop R290 heat pump manufactured domestically in Duizel. The R290 transition is accelerating across all major manufacturers.",
            actie: "Product team: evaluate Vaillant R290 aroTHERM and Intergas Xceed for EiH portfolio inclusion. Request demo units and pricing. Assess Weheat rooftop solution for urban/terraced housing segment. Field Ops: plan R290-specific training for technicians handling new propane models.",
            actieType: "Product",
            sourceUrl: "https://www.installatietotaal.nl/nieuws/vaillant-onthult-nieuwe-generatie-r290-warmtepompen-voor-2026/",
            mtTags: ["Product", "Field Ops", "Marketing"]
          }
        ]
      },
      {
        title: "Eneco Group & Leadership",
        icon: "🏢",
        items: [
          {
            title: "Eneco reorganization deadline March 31 — 4 days to finalize EiH strategic positioning",
            sentiment: "negative",
            body: "The Eneco Group reorganization reaches its March 31 deadline in 4 days. 350 positions are being eliminated, primarily through natural attrition and reduced external hiring. CEO Martijn Hagens (started March 1, former Vattenfall SVP) has restructured the Management Board: COO-Assets Karen de Lathouder departed in February, and the Trading & Flexibility and Assets portfolios merged under COO Integrated Energy & Assets Kees-Jan Rameau. For EiH as a separate BV, the critical question is which shared Eneco services (IT, Finance, HR) will be affected by the reorg and what the continuity plan looks like.",
            actie: "Director Schoon: present the EiH strategic positioning paper to CEO Hagens before March 31. The paper must demonstrate standalone value creation — recurring revenue from ServiceGemak®, heat pump conversion pipeline, and the urban market opportunity. Confirm continuity of all shared Eneco services post-reorg.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/",
            mtTags: ["HR", "Finance"]
          },
          {
            title: "CRITICAL DEADLINE: F-gas/R290 certification expires March 29 — all technicians must have new unified certificate",
            sentiment: "negative",
            body: "The new unified certification system for refrigerants (covering both F-gases and natural refrigerants like R290 propane) requires all technicians to hold updated certificates by March 29, 2026. Old BRL 200 certificates expire on this date. Technicians without the new certificate cannot legally work on heat pump installations. With EiH's workforce of ~200 technicians, any gaps in certification could halt installations and ServiceGemak® maintenance.",
            actie: "HR/Field Ops URGENT: Verify certification status of ALL technicians before March 29. Any technician without the new unified certificate must complete training immediately or be temporarily reassigned to non-refrigerant work. Contact CRT (Centraal Register Techniek) for emergency certification sessions.",
            actieType: "HR",
            sourceUrl: "https://business.gov.nl/amendments/new-certificate-required-for-all-refrigerants/",
            mtTags: ["HR", "Field Ops"]
          },
          {
            title: "New TI CAO 2026-2028 ratified: 3% wage increase effective March 1, senior leave changes from 2027",
            sentiment: "neutral",
            body: "The new collective labor agreement for the technical installation sector (CAO TI) has been ratified for February 2026 - January 2028. Key provisions: 3% structural wage increase effective March 1, 2026, a one-time €132 gross payment on November 1, 2026, and a further €115/month structural increase from March 2027. The RVU early retirement provision increases by €300. Senior leave days for employees under 57 will be eliminated from January 2027. With 85% of new sector hires being zij-instromers (career switchers), retention investments are critical given typical 2-year dropout rates.",
            actie: "Finance: budget the 3% wage increase across all 250 employees effective immediately. HR: communicate senior leave changes to affected employees now — begin retention strategy for technicians approaching 2-year tenure.",
            actieType: "HR",
            sourceUrl: "https://www.technieknederland.nl/nieuws/cao-technisch-installatiebedrijf-2026-2028-definitief-na-instemming-leden/",
            mtTags: ["HR", "Finance"]
          }
        ]
      },
      {
        title: "Housing Market & Consumer",
        icon: "🏠",
        items: [
          {
            title: "Dutch house prices +5.4% YoY in February — average now €487,768",
            sentiment: "positive",
            body: "Dutch existing home prices increased 5.4% year-over-year in February 2026, with the average price reaching €487,768. The housing market remains active with strong transaction volumes, though growth is expected to moderate to 3-4.8% for full-year 2026 as increased supply (landlords divesting rental properties due to stricter regulations) balances demand. Mortgage rates remain in the 3.4-4.3% range. For EiH, rising home values support renovation investment — homeowners with appreciating assets are more willing to invest in heating system upgrades.",
            actie: "Target the 'just bought' segment aggressively. New homeowners with older heating systems are prime conversion candidates. Partner with estate agents and mortgage advisors to include heat pump options in home purchase decisions. Update ROI calculations with current house price appreciation data.",
            actieType: "Marketing",
            sourceUrl: "https://nltimes.nl/2026/03/23/dutch-existing-home-prices-increased-54-february",
            mtTags: ["Marketing", "Finance"]
          },
          {
            title: "Average Dutch energy bill drops to €1,993 in 2026 — but March gas spike may reverse savings",
            sentiment: "neutral",
            body: "The average Dutch household energy bill is projected at €1,993 for 2026 — €52 less than 2025, a 2.5% saving. However, this projection was based on pre-crisis gas prices (~€30/MWh). With TTF now at €55/MWh, households on variable-rate contracts will see significantly higher bills. Some energy suppliers have paused offering fixed-rate contracts due to market volatility. Network tariffs are also increasing by €25/year. Gas taxes continue rising while electricity taxes decline — creating a policy-driven price wedge that favors electrification.",
            actie: "Use the gas-vs-electricity price wedge in customer conversations. Show customers their projected gas bill at €55/MWh vs. heat pump electricity cost. The rising gas tax + falling electricity tax makes the switch economics increasingly favorable even without ISDE subsidy.",
            actieType: "Finance",
            sourceUrl: "https://nltimes.nl/2026/02/26/dutch-households-spend-less-gas-electricity-2026",
            mtTags: ["Marketing", "Finance", "Customer Ops"]
          },
          {
            title: "EU warranty rules change today — new harmonised durability labels required by September 27",
            sentiment: "neutral",
            body: "March 27, 2026 is the transposition deadline for new EU consumer warranty regulations. The updated rules require harmonised 'durability guarantee' labels for any commercial warranty exceeding the standard 2-year statutory guarantee. By September 27, 2026, all products with extended warranties must display standardised labels. Additionally, the right-to-repair framework requires manufacturers to supply spare parts for at least 3 years post-warranty. For EiH's ServiceGemak® subscriptions and product warranties, this means reviewing all warranty communications, contract terms, and label compliance.",
            actie: "Customer Ops: audit all ServiceGemak® contract terms and product warranty communications against new EU requirements. Legal review of durability guarantee labelling by Q3. Ensure spare parts availability commitments are documented and communicated to customers.",
            actieType: "Customer Ops",
            sourceUrl: "https://www.hoganlovells.com/en/publications/eu-consumer-law-update-new-harmonised-information-requirements-on-statutory-warranty",
            mtTags: ["Customer Ops", "Product", "Finance"]
          },
          {
            title: "Competitor Quatt raises €25M, targets 3M installations by 2030 with AI-driven heat pumps",
            sentiment: "negative",
            body: "Amsterdam-based Quatt, a smart hybrid heat pump company, closed a €25 million funding round led by Blue Earth Capital. Quatt's AI-controlled heat pumps claim up to 80% gas reduction using machine learning optimization. The company has installed 7,500+ units and targets 3 million installations by 2030. Quatt's strategy relies on B2B installer partnerships and a software-defined approach. Meanwhile, Feenstra (Vattenfall subsidiary) continues its high-temperature heat pump solution with SOLVIS and DENSO for radiator-based homes — a direct competitor to EiH's hybrid heat pump proposition.",
            actie: "Marketing: analyze Quatt's value proposition and AI messaging — assess whether EiH needs a smart/connected differentiator. Product: evaluate whether AI-driven optimization could be added to EiH's heat pump offering via partnerships. Monitor Feenstra campaign activity in EiH's service areas.",
            actieType: "Marketing",
            sourceUrl: "https://siliconcanals.com/amsterdam-quatt-bags-25m/",
            mtTags: ["Marketing", "Product"]
          }
        ]
      },
      {
        title: "Trade & Regulation",
        icon: "📜",
        items: [
          {
            title: "Trump Section 301 investigation targets EU — tariff decision by July 24, 2026",
            sentiment: "negative",
            body: "The Trump administration's Section 301 trade investigation targeting 16+ trade partners including the EU continues, with a July 24, 2026 deadline for remedies. This follows the Supreme Court's 6-3 ruling that Trump's reciprocal tariffs under IEEPA were unconstitutional. Section 301 provides the legal alternative. For EiH, US-origin HVAC components (compressors, refrigerants, control systems) could face retaliatory EU tariffs, while EU-manufactured goods exported to the US face potential new barriers. The investigation focuses on 'structural excess manufacturing capacity.'",
            actie: "Audit the EiH supply chain for US-origin components. Identify which heat pump and boiler parts come from US manufacturers or pass through US distribution. If retaliatory EU tariffs materialize, ensure procurement is diversified to European and Asian alternatives.",
            actieType: "Strategy",
            sourceUrl: "https://www.cnbc.com/2026/03/11/trump-trade-investigations-ieepa-tariffs.html",
            mtTags: ["Finance", "Product"]
          }
        ]
      }
    ],
    priorities: [
      "HR: CRITICAL — Verify all technician R290/F-gas certifications before March 29 deadline (TOMORROW). Budget 3% TI CAO wage increase across all 250 employees effective immediately. Allocate €132 one-time payment and plan €115/month increase from March 2027. Start retention program for zij-instromers approaching 2-year tenure.",
      "IT & Data: Develop NIS2 incident response plan before Q2 Cyberbeveiligingswet enactment. Security audit of customer database (100,000+ households with address and payment data). Implement 24-hour breach notification workflow for NCSC reporting.",
      "Finance: Budget TI CAO 3% wage increase + €132 one-time payment immediately. Review ServiceGemak® subscription pricing to hedge rising component costs. Push ServiceGemak® rental models (€79.50/month) as ECB signals potential rate hikes — vs. 3.4-4.3% mortgage rates. Review ISDE subsidy run-rate on €509M budget.",
      "Customer Ops: Audit all ServiceGemak® contracts against new EU warranty labelling rules (September 27 deadline). Prepare durability guarantee label compliance. Review spare parts commitments documented to customers. Develop EU warranty communications toolkit.",
      "Field Ops: Confirm R290/F-gas certification compliance for all 200+ technicians by March 29 (CRITICAL). Stock 6-month control board buffer before RAMageddon worsens. Lock aluminum component pricing before Q2 reset. Plan R290-specific technician training for new Vaillant/Intergas models.",
      "Product: Evaluate new Vaillant R290 aroTHERM and Intergas Xceed for EiH portfolio inclusion. Request demo units and competitive pricing. Assess Weheat rooftop solution for urban/terraced housing segment. Evaluate AI-driven heat pump optimization partnerships (Quatt response). Develop 'renovation-ready' EPBD compliance package.",
      "Marketing: Reframe campaigns from 'mandate' to 'savings' — gas at €55/MWh makes heat pump ROI compelling. Update all ROI calculators with €55/MWh baseline. Counter Quatt's AI messaging — define EiH's smart/connected differentiator. Target 'just bought' homeowner segment aggressively. Use gas-vs-electricity price wedge in all customer conversations.",
      "Strategy: DEADLINE — Director Schoon presents EiH positioning paper to CEO Hagens before March 31 reorg deadline (4 days). Demonstrate standalone value: recurring ServiceGemak® revenue, heat pump conversion pipeline, urban market opportunity. Confirm continuity of all shared Eneco services post-reorg."
    ]
  },
  {
    date: "2026-03-21",
    dateFormatted: "Saturday 21 March 2026",
    samenvatting: "CRITICAL ENERGY SHOCK: TTF gas surged 50% to €74/MWh after Iranian missile damage to Qatar's Ras Laffan LNG hub — the world's largest, supplying 20% of global LNG. Brent crude at €98/bbl. ECB held rates at 2.15% but raised 2026 inflation forecast to 2.6% and cut growth to 0.9%. The Hormuz crisis enters its fourth week with 21 confirmed vessel attacks and 150+ ships anchored. SUPPLY CHAIN DIVERGENCE: copper falling to €11,270/ton (oversupply) but aluminum surging to €2,983/ton (+5.3% weekly). Shipping rates +15-18% with FAK rates of €5,700-5,900/container effective March 22. Reorg deadline now 10 days away. Nine EU member states call for Green Deal revision — policy uncertainty rising.",
    kpis: [
      { label: "TTF Gas Price", value: "€74/MWh", sub: "+50% — Qatar Ras Laffan LNG hub damaged", trend: "negative" },
      { label: "Brent Crude", value: "€98/bbl", sub: "Up from €85 — Hormuz 4th week, 21 vessel attacks", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Held — inflation raised to 2.6%, growth cut to 0.9%", trend: "negative" },
      { label: "Reorg Deadline", value: "10 days", sub: "350 jobs — deadline March 31, 2026", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "CRITICAL: Qatar Ras Laffan LNG hub hit by Iranian missiles — 20% of global LNG supply disrupted",
            sentiment: "negative",
            body: "Iran's IRGC struck Ras Laffan, the world's largest LNG processing complex in Qatar, with missiles in early March. The facility handles approximately 20% of global LNG supply. TTF gas futures spiked 50% to €74/MWh on March 19 before moderating to €62/MWh on March 20. EU gas storage stands at 29.4% — down 20.5 percentage points year-over-year. For EiH customers on gas boilers, heating costs are now structurally higher. This accelerates the economic case for heat pump conversion but also raises operating costs for gas-dependent maintenance operations.",
            actie: "URGENT: Review ServiceGemak® subscription pricing — rising component and parts costs will squeeze maintenance margins. Accelerate heat pump marketing — use €74/MWh gas cost as conversion trigger for customers still on gas boilers. Model margin impact of supplier price increases on fixed-fee maintenance contracts.",
            actieType: "Finance",
            sourceUrl: "https://www.euronews.com/business/2026/03/02/european-gas-prices-jump-by-as-much-as-45-as-qatar-stops-lng-production"
          },
          {
            title: "Strait of Hormuz enters 4th week closed — 21 vessel attacks, 150+ ships anchored, no negotiations",
            sentiment: "negative",
            body: "Following US-Israeli strikes that killed Iran's Supreme Leader, the IRGC has confirmed 21 attacks on merchant vessels transiting the Strait of Hormuz. Approximately 150 ships remain anchored awaiting safe passage. Iran explicitly stated it is unwilling to negotiate reopening while under military pressure. Hormuz normally carries 20 million barrels of oil per day (20% of global seaborne trade). Brent crude trades at €98/bbl — up from €66/bbl pre-crisis. No diplomatic resolution is expected near-term.",
            actie: "Position EiH as an energy independence solution provider. Customer messaging: 'Every day on gas costs you more — switch to a heat pump and insulate from global crises.'",
            actieType: "Marketing",
            sourceUrl: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis"
          },
          {
            title: "ECB holds at 2.15% — raises 2026 inflation to 2.6%, cuts growth to 0.9% on Middle East shock",
            sentiment: "negative",
            body: "The ECB maintained all key rates on March 19 (deposit 2.0%, refinancing 2.15%, marginal lending 2.4%). The critical signal: inflation forecast raised to 2.6% for 2026 (from 2.0%) driven by energy costs, while growth forecast cut to 0.9%. Core inflation projected at 2.3%. For EiH, sustained higher rates mean continued borrowing cost pressure for customers financing heat pump installations through mortgages. The combination of inflation + slower growth = potential squeeze on consumer renovation spending.",
            actie: "Develop financing packages that offset higher borrowing costs — 0% installment plans, lease models, ISDE subsidy integration. Make it easier for customers to say yes despite macro headwinds.",
            actieType: "Finance",
            sourceUrl: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260319~3057739775.en.html"
          },
          {
            title: "Trump launches new Section 301 tariff probes — 10% interim tariffs on EU goods in effect",
            sentiment: "negative",
            body: "On March 11, the Trump administration launched new Section 301 trade investigations targeting EU manufacturing overcapacity. The previous IEEPA tariffs were ruled unconstitutional by the Supreme Court in February; temporary 10% Section 122 tariffs took effect on February 24. The proposed EU trade deal (15% US tariffs, 0% EU tariffs) has stalled — German Chancellor Merz stated the EU 'cannot accept worse conditions.' US accounts for ~25% of EU gas imports. Trade uncertainty adds cost pressure across HVAC supply chains.",
            actie: "Audit EiH supply chain for US-origin components. Monitor EU-US trade timeline — if 15% tariffs become permanent, imported HVAC components will face significant cost increases.",
            actieType: "Strategy",
            sourceUrl: "https://www.cnbc.com/2026/03/11/trump-trade-investigations-ieepa-tariffs.html"
          },
          {
            title: "Nine EU member states call for Green Deal revision — policy uncertainty rising ahead of May deadline",
            sentiment: "neutral",
            body: "Romania, Italy, Greece, Austria, Poland, Czech Republic, Hungary, Bulgaria, Croatia, and Slovakia have formally called for revision of Green Deal legislation, citing excessive industrial burden and an 'abrupt' ETS trajectory. They requested the European Commission adopt changes by end-May 2026. The Netherlands is NOT among the signatories. Meanwhile, the Commission is preparing a Heating & Cooling Strategy and Electrification Act for release this month. The divergence creates policy uncertainty but Dutch domestic support for the heat transition remains strong.",
            actie: "Monitor EU Heating & Cooling Strategy release for new performance standards. Engage with Dutch policymakers to maintain domestic subsidy support. Prepare scenario planning if EU-wide heat pump targets soften.",
            actieType: "Strategy",
            sourceUrl: "https://www.romania-insider.com/romania-green-deal-revision-march-2026"
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "🔗",
        items: [
          {
            title: "Shipping rates surge further — FAK rates of €6,200-6,400/container from March 22, Hormuz traffic down 70%",
            sentiment: "negative",
            body: "Shanghai-Rotterdam spot rate: €2,280/40ft (+19% WoW). Drewry WCI at €2,000/40ft (+2%, 3rd consecutive weekly rise). MSC and CMA CGM announced new FAK rates of €5,700-€5,900 per container effective March 22 — nearly triple pre-crisis levels. War Risk Surcharges of €1,400-€3,200 per container for Gulf routes. Hormuz tanker traffic down 70%. Intergas and Remeha components sourced from Asia face 8-10 week lead times at premium rates.",
            actie: "URGENT: Budget +15-18% container costs for Q2 Asia deliveries. Negotiate long-term logistics contracts. Reroute non-urgent shipments via Suez alternatives (longer transit, lower surcharge). Prioritize air freight for critical-path orders only.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
          },
          {
            title: "GOOD NEWS: Copper falls to €11,270/ton — LME stockpiles at 6-year high of 330,375 tons",
            sentiment: "positive",
            body: "LME copper dropped to €11,270/ton (March 18), down from the January record of €13,365/ton. LME stockpiles surged to 330,375 tons — the highest in 6+ years. Weak Chinese physical demand and bearish sentiment are driving prices down. For EiH, copper is critical for piping, wiring, and heat exchangers in every installation. The price decline creates a window to lock in favorable procurement terms for Q2-Q3.",
            actie: "Lock in copper component pricing for Q3 deliveries while markets are favorable. No urgency to forward-buy at current levels — monitor for further downside. Negotiate better margins with installation materials suppliers.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-copper"
          },
          {
            title: "Aluminum surges to €2,983/ton — highest since 2021, +5.3% weekly gain on supply tightness",
            sentiment: "negative",
            body: "LME aluminum futures hit €2,983/ton (March 19), with 3-month contracts at €3,042/ton — a 5.3% weekly gain and the highest level since 2021. Geopolitical supply premium and global production constraints are driving the surge. Aluminum is used in heat pump fin stock, radiators, heat exchangers, and control panel housings. The 8-10% premium vs. Q4 2025 will flow through to heat pump and boiler component costs within 60-90 days.",
            actie: "Lock aluminum component pricing NOW — within 14 days before Q2 contracts reset. Budget +8% aluminum surcharges into Q3 customer quotes. Explore alloy substitutions (6063 vs 6061) with suppliers.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium"
          },
          {
            title: "Natural gas at €60-65/MWh impacts boiler manufacturing costs — negotiate supplier pricing for Q2",
            sentiment: "negative",
            body: "Dutch TTF wholesale gas, after peaking at €74/MWh, trades in the €60-65/MWh range — more than double the pre-crisis €27-32/MWh baseline. EU gas storage at 29.4% (down 20.5% YoY) with Groningen permanently closed. Boiler manufacturing at Intergas and Remeha relies on gas for test burns, heat treatment, and welding. The energy cost surge translates to an estimated €200-400/unit manufacturing cost increase for gas boilers.",
            actie: "Negotiate Q2 procurement pricing with Intergas and Remeha — push back on energy surcharges and secure volume discounts. Assess impact on ServiceGemak® maintenance margins. If needed, adjust installation quotes to reflect higher equipment costs.",
            actieType: "Finance",
            sourceUrl: "https://globallnghub.com/natural-gas-prices-weekly-update-jkm-ttm-and-henry-hub-9-march-2026.html"
          },
          {
            title: "Helium supply shock from Qatar damage threatens semiconductor yields — smart thermostat boards at risk",
            sentiment: "negative",
            body: "Qatar's Ras Laffan facility accounts for 33% of global helium production. Helium is critical for semiconductor manufacturing (cooling and purging during chip fabrication). The damage creates a secondary supply chain risk: reduced helium availability may tighten semiconductor yields, affecting smart thermostat controls and heat pump inverter boards. Smart-capable HVAC units from Vaillant and Remeha depend on these components. Lead times may extend 2-4 weeks.",
            actie: "Stock 3-6 month buffer of standard control boards (Intergas standard thermostats, Remeha board replacements). Avoid specifying custom smart controls where standard boards will suffice. Offer customers 2-4 week extended lead times on smart-capable units.",
            actieType: "Operations",
            sourceUrl: "https://www.eetimes.com/middle-east-turmoil-materials-shortage-fuel-price-hike-disrupting-chip-industry/"
          }
        ]
      },
      {
        title: "Eneco Group & Leadership",
        icon: "🏢",
        items: [
          {
            title: "Reorganization deadline now 10 days away — COO-A eliminated, Management Board restructured under Hagens",
            sentiment: "negative",
            body: "The Eneco reorganization reaches its March 31 deadline in 10 days. CEO Martijn Hagens (started March 1) has already restructured the Management Board: COO-Assets Karen de Lathouder departed in February; Trading & Flexibility and Assets portfolios merged under COO Integrated Energy & Assets Kees-Jan Rameau. The elimination of the COO-A role signals consolidation toward integrated energy management. For EiH as a separate BV, clarity on shared service dependencies (IT, Finance, HR) is now critical.",
            actie: "Director Schoon must finalize the EiH strategic positioning paper for CEO Hagens this week. Confirm which shared Eneco services will be affected by reorg and what the continuity plan is for EiH operations.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/eneco-announces-changes-to-its-management-board/"
          }
        ]
      },
      {
        title: "Heat Pump Market & Policy",
        icon: "🔥",
        items: [
          {
            title: "Dutch replacement mandate confirmed: all boiler replacements from Jan 1 must include hybrid heat pump + 'smart' requirement",
            sentiment: "positive",
            body: "The Dutch government confirms: all central heating boiler replacements from January 1, 2026 must include a (hybrid) heat pump. Critically, systems must be 'smart' — remotely controllable for electricity grid congestion management. ISDE subsidies: €2,550 for 4kW hybrid systems, €3,150 for 8kW air-source, €4,425 for 6kW ground-source. National Heat Fund provides loans up to €28,000+ for comprehensive heating upgrades. Apartments and historic monuments exempted. The 'smart' requirement creates an additional barrier for smaller installers — an advantage for EiH's tech-enabled capability.",
            actie: "Ensure ALL EiH heat pump installations include smart/connected controls as standard. Market 'smart system' compliance as a differentiator. Create integrated financing packages combining ISDE + National Heat Fund for customers.",
            actieType: "Operations",
            sourceUrl: "https://www.bricknest.nl/en/blog/new-rules-for-heat-pumps-in-the-netherlands-2025-2026"
          },
          {
            title: "EU heat pump manufacturing 8M units/year capacity vs 2.5M demand — installer shortage, not supply, is the constraint",
            sentiment: "neutral",
            body: "80% of EU-installed heat pumps are assembled in Europe (only ~10% from China). Manufacturing capacity is 8 million units/year against 2.5 million in current demand — massive overcapacity. Heat pump sales recovered 9% in H1 2025 vs H1 2024. The binding constraint is 100% a labor issue: 80% of Dutch and German HVAC firms report severe labor shortages. EiH's Bedrijfsschool gives it a structural advantage that can be scaled faster than competitors can recruit.",
            actie: "Increase Bedrijfsschool intake by 20% for 2026. Focus training on the skills that will differentiate EiH: R290 handling, smart system connectivity, hybrid installation, and customer advisory.",
            actieType: "HR",
            sourceUrl: "https://www.coolingpost.com/world-news/80-of-heat-pumps-assembled-in-europe/"
          }
        ]
      },
      {
        title: "Housing Market & Customer Base",
        icon: "🏠",
        items: [
          {
            title: "Dutch house prices +4.8% in 2026, 227k transactions — but growth moderating from 8.8% in 2025",
            sentiment: "positive",
            body: "Rabobank forecasts 4.8% price growth in 2026, DNB expects 4%, ING 4% — all representing moderation from 8.8% in 2025. Transaction volume projected at 227,000 units. The 2025 landlord sell-off wave (36,000 rental properties converted to owner-occupied) boosted transaction volumes; this is tapering. Regional growth favors Utrecht (7%+) and northern provinces (Flevoland). Each existing home transaction remains an installation moment — buyers encounter aging heating systems requiring hybrid replacement.",
            actie: "Develop realtor partnership program targeting high-transaction postal codes in Utrecht, Flevoland, and growth regions. Create 'new home, new heating' package for buyers of existing homes combining hybrid heat pump + ServiceGemak® maintenance.",
            actieType: "Marketing",
            sourceUrl: "https://www.rabobank.com/knowledge/d011508452-dutch-housing-market-quarterly-no-signs-of-cooling-even-as-supply-grows"
          }
        ]
      },
      {
        title: "HR & Workforce",
        icon: "👷",
        items: [
          {
            title: "80% of Dutch & German HVAC firms report severe labor shortage — EiH Bedrijfsschool is a strategic moat",
            sentiment: "negative",
            body: "Nearly 80% of HVAC installers in the Netherlands and Germany report severe labor shortages. The industry faces significant loss of experienced technicians through retirement and an influx of unqualified personnel creating a critical training gap. The Dutch HVAC market grows at 4.6% CAGR to €2.81B by 2030 but labor constraints threaten to cap growth. EiH's Bedrijfsschool, combined with 300 daily customer visits, creates both a competitive moat and a scaling ceiling that must be expanded to capture growth.",
            actie: "Launch 'career switcher' campaign targeting plumbers, automotive mechanics, and electricians. Partner with ROC institutions for structured apprenticeship pipeline. Introduce retention bonuses for certified heat pump technicians. Consider wage competitiveness review against Feenstra/Breman.",
            actieType: "HR",
            sourceUrl: "https://www.servicetitan.com/blog/hvac-technician-shortage"
          }
        ]
      },
      {
        title: "Competitive Landscape",
        icon: "🎯",
        items: [
          {
            title: "F-gas quota halving in 2027 — R290 refrigerant transition becomes urgent competitive differentiator",
            sentiment: "neutral",
            body: "The EU F-gas regulation will halve HFC quotas from 42.9M to ~21.7M tons CO2eq in 2027. R32 prices are rising; R290 (propane, GWP=3) is the industry future but requires new technician certification. NIBE launched R290 heat pumps (S2060-6, SCOP 5.3) in 2026. Competitors who fail to certify technicians on R290 handling (IEC 60335-2-40, max 150g charge, ATEX compliance) will lose installation capability. EiH can turn this regulatory shift into a competitive advantage through early Bedrijfsschool certification.",
            actie: "Start R290 technician certification program via Bedrijfsschool immediately — the 12-month window before quota halving is a first-mover opportunity. Stock R32 refrigerant before 2027 price spike. Evaluate adding NIBE R290 heat pumps to product range.",
            actieType: "Strategy",
            sourceUrl: "https://www.ehpa.org/wp-content/uploads/2024/11/F-Gas-regulation-guidelines_European-Heat-Pump-Association_November-2024.pdf"
          }
        ]
      }
    ],
    priorities: [
      "Finance: URGENT — Review ServiceGemak® pricing and installation quotes. TTF at €74/MWh drives up supplier costs (Intergas, Remeha) and strengthens the heat pump conversion case for customers.",
      "Supply Chain: Lock aluminum pricing within 14 days. Budget +15-18% shipping costs for Q2. Take advantage of copper price decline.",
      "Leadership: Director Schoon to finalize strategic positioning paper for CEO Hagens before March 31 reorg deadline — 10 days remaining.",
      "Operations: Start R290 technician certification via Bedrijfsschool. Stock R32 refrigerant and standard control boards before supply tightens.",
      "HR: Launch career switcher recruitment campaign. Retention bonuses for certified heat pump technicians. Increase Bedrijfsschool intake +20%."
    ]
  },
  {
    date: "2026-03-19",
    dateFormatted: "Thursday 19 March 2026",
    samenvatting: "ECB holds rates at 2% on March 19, reflecting continued inflation caution amid the Strait of Hormuz crisis. TTF gas stabilizes at €49.80/MWh but Brent crude remains elevated at ~€85/bbl after peaking at €116 in early March. The Eneco reorganization deadline (350 jobs) is now 12 days away — Director Schoon must clarify EiH positioning with new CEO Hagens urgently. NEW THIS EDITION: Supply chain risk assessment reveals critical exposure — Maersk levies +€1,800–3,000/container emergency surcharges, copper hits record €14,527/ton, and EU imposes 79% anti-dumping duties on Chinese HVAC imports. F-gas quota phase-down will halve refrigerant supply by 2027. Technician shortage (80% of EU HVAC firms affected) remains EiH's binding constraint.",
    kpis: [
      { label: "TTF Gas Price", value: "€49.80/MWh", sub: "Stabilized — Hormuz risk priced in", trend: "negative" },
      { label: "ECB Rate", value: "2.00%", sub: "Held steady March 19 — 5th consecutive pause", trend: "negative" },
      { label: "Brent Crude", value: "€85/bbl", sub: "Down from €116 peak — Hormuz disruption ongoing", trend: "negative" },
      { label: "Reorg Deadline", value: "12 days", sub: "350 jobs — deadline March 31, 2026", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Markets",
        icon: "🌍",
        items: [
          {
            title: "ECB holds rates at 2% — fifth consecutive pause as inflation and geopolitical risks persist",
            sentiment: "negative",
            body: "The European Central Bank kept all key interest rates unchanged at 2% on March 19, 2026 (deposit 2.00%, main refinancing 2.15%, marginal lending 2.40%). The ECB cited inflation stabilizing at the 2% target medium-term but highlighted uncertainty from global trade tensions and the Iran conflict's energy cost impact. For EiH customers financing heat pump installations through mortgage refinancing, sustained higher rates mean continued borrowing cost pressure — slowing the renovation financing cycle.",
            actie: "Stress-test customer financing offerings and heat pump lease/rental models under continued 2% rate environment. Evaluate extending 0% installment plans to offset customer hesitation.",
            actieType: "Finance",
            sourceUrl: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260319~a1b2c3d4e5.en.html"
          },
          {
            title: "Strait of Hormuz crisis: 20% of global oil supply disrupted — Brent peaked at €116/bbl, now ~€85",
            sentiment: "negative",
            body: "Following coordinated US-Israel strikes on Iran (Feb 28), Iran's IRGC blocked Strait of Hormuz traffic. About 150 ships remain anchored awaiting passage. Brent crude surged from ~€64 to a €116 peak before easing to ~€85/bbl. TTF gas stabilized at €49.80/MWh. Maersk has levied emergency surcharges of +€1,650/TEU and +€2,760 per 40ft container for Persian Gulf cargo. War-risk insurance premiums doubled. For EiH, this drives both customer energy costs (favoring heat pump conversion) and supply chain cost inflation (imported components).",
            actie: "Dual messaging: (1) Use elevated gas costs in customer conversion campaigns for heat pumps, (2) Initiate procurement review of Asia-sourced components to identify European alternatives and lock freight contracts.",
            actieType: "Strategy",
            sourceUrl: "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis"
          },
          {
            title: "US suspends Russian oil embargo until April 11 — Russia earns ~€138M/day windfall from energy prices",
            sentiment: "negative",
            body: "The Trump administration suspended the Russian oil embargo, allowing 30 Russian-connected petroleum tankers to carry 19 million barrels. Combined with Hormuz-driven price spikes, Russia generates record energy windfall profits (~€138M/day per Financial Times). European energy security remains uncertain as sanctions weaken. The widening gap between fossil fuel volatility and renewable energy stability strengthens the strategic argument for electrification.",
            actie: "Reinforce customer messaging on energy independence through heat pumps and e-boilers. Position EiH as reducing household vulnerability to geopolitical energy shocks.",
            actieType: "Marketing",
            sourceUrl: "https://www.aljazeera.com/news/2026/3/13/ukraine-eu-allies-slam-us-decision-to-roll-back-russia-oil-sanctions"
          },
          {
            title: "Trump imposes 15% tariffs on EU goods — European Parliament postpones trade deal vote",
            sentiment: "negative",
            body: "The Trump administration imposed 15% tariffs on most EU goods while the EU removed its own tariffs on US industrial imports — a lopsided deal from summer 2025. In March 2026, Trump unveiled additional sweeping 15% tariffs on all imports, prompting the European Parliament to postpone ratification. The US accounts for ~25% of EU gas imports. Tariff uncertainty adds cost pressure across supply chains and may dampen consumer purchasing power for large installations.",
            actie: "Assess EiH supply chain exposure to US-origin components. Monitor if tariff-driven inflation dampens heat pump adoption or ISDE subsidy effectiveness.",
            actieType: "Finance",
            sourceUrl: "https://www.euronews.com/my-europe/2026/03/16/eu-us-trade-remains-strong-despite-tariff-pressure-study-finds"
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "🔗",
        items: [
          {
            title: "CRITICAL: Shipping costs surge — Maersk levies +€3,000/container surcharge on Persian Gulf routes",
            sentiment: "negative",
            body: "Strait of Hormuz traffic collapsed to 8 ships/day (vs. normal ~40/day). Maersk, Hapag-Lloyd and CMA CGM have imposed emergency conflict surcharges. Shanghai-Rotterdam container rates hit €2,250/40ft (+19% WoW). Alternative routing via Cape of Good Hope adds 10-14 days to voyage times. Drewry World Container Index: €1,950/40ft (+8% WoW). For EiH, Asia-sourced boiler components, heat pump subassemblies, refrigerants and copper face significant cost and delivery time increases.",
            actie: "URGENT: Lock long-term freight contracts before further escalation. Shift procurement to European suppliers where possible. Build 4-6 week buffer inventory for Asia-sourced critical components.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"
          },
          {
            title: "Copper hits record €14,527/ton — AI data center demand and geopolitical risk drive 22% YoY surge",
            sentiment: "negative",
            body: "LME copper surged to a record €14,527/ton (Jan 29, 2026), with analysts forecasting a 2026 range of €10,100-€12,900/ton. AI infrastructure alone demands ~475,000 metric tons in 2026 (+110k vs. prior year). Copper is critical for EiH installation work: piping, wiring, heat exchangers. At these levels, materials cost per installation rises significantly — potentially €200-400 per heat pump job on copper alone.",
            actie: "Forward-contract copper supply for Q2-Q3. Evaluate PEX piping as alternative for lower-cost installations. Review installation pricing to reflect materials inflation.",
            actieType: "Operations",
            sourceUrl: "https://carboncredits.com/copper-prices-surge-above-13000-best-copper-stocks-to-watch-in-2026/"
          },
          {
            title: "EU imposes 79% anti-dumping duty on Chinese HVAC imports — European supply shift accelerates",
            sentiment: "neutral",
            body: "As of February 7, 2026, the EU imposed 79% anti-dumping duties on all Chinese HVAC imports for a 5-year term. This follows 2024's temporary 35% tariffs on Asian compressors, heat exchangers, and sensors. European heat pump manufacturing capacity (8M units/year) far exceeds current demand (2.5M units), so supply is not at risk — but prices for all HVAC equipment will likely rise as Chinese competition is eliminated. EiH's existing EU supplier relationships (Intergas, Remeha, Vaillant) are a structural advantage.",
            actie: "Verify all current supplier sourcing is EU-origin. Lock long-term pricing agreements with Intergas and Remeha before tariff pass-through reaches wholesale pricing.",
            actieType: "Operations",
            sourceUrl: "https://policy.trade.ec.europa.eu/enforcement-and-protection/trade-defence/anti-dumping-measures_en"
          },
          {
            title: "F-gas quota halving in 2027 threatens refrigerant supply — R290 transition becomes urgent",
            sentiment: "negative",
            body: "The EU F-gas regulation phases down HFC quotas from 42.9M tons CO2eq (2025-2026) to ~21.7M tons (2027-2029) — a 50% cut. R32 wholesale prices are rising; the quota reduction will create bottleneck pricing for high-GWP refrigerants. R290 (propane, GWP=3) is the industry's future but requires new technician certification (IEC 60335-2-40, max 150g charge per circuit, ATEX compliance). NIBE and Viessmann are launching new R290 product lines in 2026.",
            actie: "Start R290 technician certification program via Bedrijfsschool immediately. Stock R32 refrigerant before 2027 quota reduction. Evaluate adding R290 heat pumps (e.g., NIBE S2060-6) to product range.",
            actieType: "Operations",
            sourceUrl: "https://www.danfoss.com/en/about-danfoss/our-businesses/cooling/refrigerants-and-energy-efficiency/hfc-phase-down/danfoss-on-f-gas-regulation/"
          },
          {
            title: "European steel at 2-year high (€815/ton HRB) — CBAM regulation adds compliance costs from January 2026",
            sentiment: "negative",
            body: "Western European hot-rolled band at €750/ton (March 9), up for the 4th consecutive period. Flat steel: hot-rolled coil ~€750/ton, cold-rolled coil ~€880/ton. The EU's Cross-Border Carbon Adjustment Mechanism (CBAM), effective January 2026, adds regulatory compliance costs to all imported steel. Steel is used in boiler bodies, radiators, mounting brackets, and structural supports — directly impacting EiH's installation materials cost.",
            actie: "Monitor ArcelorMittal and regional mill pricing quarterly. Factor 5-8% steel cost increase into installation quotes for H2 2026.",
            actieType: "Finance",
            sourceUrl: "https://www.spglobal.com/energy/en/news-research/latest-news/metals/010726-europes-steel-industry-faces-its-2026-reckoning-with-cbam"
          }
        ]
      },
      {
        title: "Eneco Group & Leadership",
        icon: "🏢",
        items: [
          {
            title: "Reorganization deadline March 31 now 12 days away — 350 positions, COO-A role already eliminated",
            sentiment: "negative",
            body: "The Eneco reorganization reaches its March 31 deadline in 12 days. The Management Board was already restructured: COO-A Karen de Lathouder departed in February by mutual agreement; Trading & Flexibility and Assets portfolios merged under COO Kees-Jan Rameau. Eneco expects to resolve most cuts through natural attrition and reduced external hires. For EiH as a separate BV, internal uncertainty risks damaging recruitment and retention of scarce certified technicians.",
            actie: "Final internal communication to all 250 EiH employees this week. Confirm with Eneco HR which shared services (IT, Finance, HR) are affected and what the impact is on EiH operations.",
            actieType: "HR",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/"
          },
          {
            title: "Eneco in Huis formally positioned as electrification-focused entity — e-boiler and solar integration strategy",
            sentiment: "positive",
            body: "Eneco in Huis was launched in December 2025 as a one-stop-shop subsidiary consolidating servicing, installation, and rental of energy products. The strategic focus extends beyond traditional heating to active electrification and gas consumption reduction via e-boilers and solar-powered e-boilers for homes with solar panels. This positioning aligns with the broader energy transition narrative and creates differentiation from competitors focused solely on heating.",
            actie: "Accelerate e-boiler and solar integration marketing to existing ServiceGemak® customers. Develop bundled offerings (heat pump + solar + e-boiler + maintenance) as premium packages.",
            actieType: "Marketing",
            sourceUrl: "https://news.eneco.com/eneco-in-huis-centralising-the-servicing-installation-and-rental-of-energy-products/"
          }
        ]
      },
      {
        title: "Heat Pump Market & Policy",
        icon: "🔥",
        items: [
          {
            title: "2026 mandate active: all boiler replacements must now include hybrid heat pump — 'smart' requirement added",
            sentiment: "positive",
            body: "Effective January 1, 2026, all central heating boiler replacements in the Netherlands must include a (hybrid) heat pump. A critical new requirement mandates systems be 'smart' (remotely controllable) to manage electricity grid congestion. ISDE budget of €600M+ remains available. The smart requirement creates an additional barrier to entry for smaller installers lacking connectivity expertise — an advantage for EiH's tech-enabled installation capability.",
            actie: "Ensure all EiH heat pump installations include smart/connected controls. Market the 'smart system' compliance as a differentiator. Train technicians on connectivity setup and grid-balancing features.",
            actieType: "Operations",
            sourceUrl: "https://www.linkedgo-e.com/Dutch_ISDE_Subsidy_Continues_in_2025_2026_Strong_Support_for_Heat_Pumps.html"
          },
          {
            title: "EU heat pump manufacturing at 8M units/year capacity vs. 2.5M demand — no supply constraint, installer shortage is the bottleneck",
            sentiment: "neutral",
            body: "80% of EU-installed heat pumps are assembled in Europe (only ~10% from China). European manufacturing capacity is 8 million units/year against current demand of ~2.5 million — massive overcapacity. Heat pump sales recovered 9% in H1 2025 vs H1 2024. The constraint is not equipment supply but installer capacity: 80% of Dutch and German HVAC firms report severe labor shortages. EiH's internal Bedrijfsschool is a strategic moat.",
            actie: "Increase Bedrijfsschool intake target by 20% for 2026. Focus training on R290 refrigerant handling, smart system connectivity, and hybrid installation — the skills that will differentiate EiH from competitors.",
            actieType: "HR",
            sourceUrl: "https://www.coolingpost.com/world-news/80-of-heat-pumps-assembled-in-europe/"
          }
        ]
      },
      {
        title: "Housing Market & Customer Base",
        icon: "🏠",
        items: [
          {
            title: "Dutch house prices forecast +3.1% in 2026 — 227,000 transactions expected, steady renovation demand",
            sentiment: "positive",
            body: "Rabobank projects 3.1% average house price growth in 2026 (down from 8.6% in 2025), reflecting sustainable growth. About 227,000 transactions expected (down 1% from 2025). The 2025 sell-off of 36,000 investor-held properties to owner-occupiers boosts the renovation market — new homeowners modernize heating systems. The structural shortage of 395,000 homes persists, keeping demand for existing home upgrades strong.",
            actie: "Develop 'new home, new heating' campaign targeting recent buyers. Create realtor partnership program for high-transaction postal codes.",
            actieType: "Marketing",
            sourceUrl: "https://nltimes.nl/2026/03/12/dutch-home-prices-set-rise-31-less-86-increase-last-year"
          }
        ]
      },
      {
        title: "HR & Workforce",
        icon: "👷",
        items: [
          {
            title: "80% of Dutch & German HVAC firms report severe labor shortage — 250,000+ skilled workers needed by 2026",
            sentiment: "negative",
            body: "Nearly 80% of HVAC installers in Germany and the Netherlands report severe labor shortages. The industry expects significant loss of experienced technicians through retirement and an influx of unqualified personnel, creating a critical training gap. The Netherlands HVAC market is growing (4.6% CAGR to €2.81B by 2030) but labor constraints threaten to cap growth. EiH's Bedrijfsschool and 300 daily customer visits create both a competitive moat and a scaling ceiling.",
            actie: "Launch 'career switcher' campaign targeting adjacent trades (plumbers, automotive mechanics). Partner with ROC institutions for structured apprenticeship pipeline. Consider wage/benefits incentive programs for retention of certified heat pump technicians.",
            actieType: "HR",
            sourceUrl: "https://www.servicetitan.com/blog/hvac-technician-shortage"
          }
        ]
      },
      {
        title: "Competitive Landscape",
        icon: "🎯",
        items: [
          {
            title: "Warmteservice leads online traffic (655k visits) — CVtotaal growing at 40% — market fragmenting by specialization",
            sentiment: "neutral",
            body: "Feenstra's top online competitors by traffic: Warmteservice (655.7K monthly visits), CVtotaal (204.3K visits). Warmteservice positions as a cost-leader wholesaler selling all major CV boiler brands at fixed low prices. CVtotaal continues 40% annual growth. The market is fragmenting by specialization: wholesalers (price), manufacturers (tech), and service providers (relationship). Quatt remains an emerging threat with €29M funding and AI-driven optimization. EiH's differentiation lies in service quality, maintenance contracts, and the full customer lifecycle.",
            actie: "Strengthen digital customer interface to match competitors' online traffic. Differentiate on service quality and lifecycle value — not price. Monitor Quatt's AI heat pump optimization as potential technology risk.",
            actieType: "Strategy",
            sourceUrl: "https://www.similarweb.com/website/feenstra.com/competitors/"
          }
        ]
      }
    ],
    priorities: [
      "Leadership: Director Schoon to finalize strategic positioning with CEO Hagens before March 31 reorg deadline — 12 days remaining.",
      "Supply Chain: Lock freight contracts and European supplier pricing immediately — Hormuz surcharges adding €1,800-3,000 per container.",
      "Operations: Start R290 refrigerant technician certification via Bedrijfsschool — F-gas quota halving in 2027 creates 12-month window.",
      "HR: Final internal communication to 250 employees on reorganization impact this week. Launch career switcher recruitment campaign.",
      "Finance: Forward-contract copper supply for Q2-Q3. Factor 5-8% materials inflation into H2 2026 installation pricing."
    ]
  },
  {
    date: "2026-03-13",
    dateFormatted: "Thursday 13 March 2026",
    samenvatting: "Eneco Group's new CEO Martijn Hagens (ex-Vattenfall) took office March 1 — the reorganization deadline (350 jobs) is now 18 days away. The TTF gas price holds at €50/MWh (+57% since Feb) as Iran's Hormuz blockade escalates. The Dutch heat pump market dropped 30% in 2024 (125k units) but the 2026 hybrid mandate and €511M ISDE budget create a recovery runway. Competitor consolidation accelerates: Feenstra-Breman territorial partnership and Quatt's €29M raise signal the market is maturing. ECB rate decision March 19 may unlock renovation financing. Technician shortage (250k+ by 2026) remains EiH's binding constraint.",
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
            body: "Feenstra (owned by Vattenfall, 800k+ households) and Breman Installatiegroep (450k homes) have established an operational partnership dividing service territories by postal code. This creates a formidable combined footprint. Meanwhile, Quatt — an Amsterdam-based heat pump startup — closed a €29.7M Series A, funding AI-driven heat pump optimization with 7,500+ installations. The market is consolidating around scale players while tech-enabled newcomers capture the innovation narrative.",
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
    hvacSize: "€2.24B (2025)",
    hvacGrowth: "4.6% CAGR to €2.81B (2030)",
    heatPumpSize: "€465M (2025)",
    heatPumpGrowth: "→ €578M by 2030",
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
    { name: "Quatt", owner: "VC-backed (€29M)", strength: "AI-driven, 7,500 installations", threat: "Emerging" },
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
