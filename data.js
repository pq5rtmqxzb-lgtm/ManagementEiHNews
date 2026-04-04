// Management Nieuwsoverzicht — Eneco in Huis
// Dit bestand wordt elke ochtend automatisch bijgewerkt door de geplande taak.
// GitHub verbinding getest op: 2026-02-28 12:03

const briefsData = [
  {
    date: "2026-04-04",
    dateFormatted: "Saturday 4 April 2026",
    samenvatting: "LIBERATION DAY TARIFF SHOCK: Trump's April 2 'reciprocal tariffs' impose 20% baseline on ALL EU exports plus 25% on steel and aluminum — critical HVAC materials. EU announces €21B retaliatory package. Immediate impact: component cost escalation on Asian-sourced parts, aluminum/copper repricing, and potential Vaillant/Remeha supply chain disruption through transatlantic exposure. HORMUZ STALEMATE: UK convenes 40-nation coalition to reopen Strait; Iran limits passage to 7 allied nations only. Brent crude at €97/bbl, TTF gas easing to €50/MWh but Goldman Sachs raises Q2 forecast to €55/MWh. EU storage stuck at 28% with Russian LNG ban April 25 approaching. DEMAND SUSTAINED: Heat pump inquiry surge continues at +100% from Iran war fuel price shock — but consumer confidence at -30 (4-year low) and Dutch inflation rising to 2.7% create affordability tension. PRODUCT LAUNCHES: Remeha Confida R290 (SCOP 5.34) now available; Vaillant aroTHERM pro shipping in April. VCA 2026/6.1 safety standard announced — all audits transition July 1. CYBER ALERT: Dutch Ministry of Finance hacked; Odido telecom breach exposes 6M accounts; Mitsubishi AC critical vulnerability (CVSS 9.8) discovered. NIS2/Cyberbeveiligingswet implementation slides to Q2. EPBD transposition deadline May 29 — mandatory renovation of 16% worst buildings by 2030 creates multi-year installation pipeline.",
    kpis: [
      { label: "TTF Gas Price", value: "€50/MWh", sub: "Easing but Goldman raises Q2 forecast to €55 — storage 28%", trend: "neutral" },
      { label: "Brent Crude", value: "€97/bbl", sub: "Hormuz blockade Day 35 — 40-nation coalition forming", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Decision April 30 — 50% chance of hike, inflation 2.7%", trend: "negative" },
      { label: "US-EU Tariffs", value: "20%+", sub: "Liberation Day: 25% on steel/aluminum, EU retaliates €21B", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "Liberation Day tariff shock: 20% baseline on EU, 25% on steel and aluminum — EU retaliates with €21B package",
            sentiment: "negative",
            body: "On April 2, Trump implemented sweeping 'reciprocal tariffs' — a 20% baseline on all EU exports plus targeted 25% on steel and aluminum, materials critical to HVAC manufacturing. The EU immediately announced €21B in retaliatory tariffs. For EiH, this creates multi-layered risk: Vaillant and Remeha source components globally, aluminum heat exchangers and copper wiring face direct cost pressure, and Asian-sourced parts routed through US supply chains may face re-pricing. Container shipping rates already up 30% now face additional trade friction. The tariff war adds a second structural cost shock on top of the Iran-driven energy crisis.",
            actie: "Product: URGENT — contact Vaillant, Remeha, and Intergas procurement teams to assess transatlantic supply chain exposure. Map which components transit US or use US-origin aluminum/steel. Finance: model +5-10% component cost increase for Q3 quotes. Field Ops: accelerate orders for aluminum-heavy parts (heat exchangers, radiator panels) before tariff pass-through hits supplier pricing.",
            actieType: "Operations",
            sourceUrl: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/",
            mtTags: ["Product", "Finance", "Field Ops"]
          },
          {
            title: "UK convenes 40-nation coalition to reopen Strait of Hormuz — Iran limits passage to 7 allied nations",
            sentiment: "negative",
            body: "The Strait of Hormuz remains effectively closed following US-Israeli strikes on Iran. A UK-led coalition of 40 nations is coordinating diplomatic efforts, but Iran maintains a selective toll system granting passage only to China, Russia, India, Iraq, Pakistan, Malaysia, and Thailand. This locks out 70% of global tanker traffic. Brent crude at €97/bbl reflects the ongoing supply shock. The conflict has created the worst global oil market disruption on record, with 25-30% of global oil exports and 20% of LNG supplies cut. Aviation kerosene supplies from the Middle East to Europe will halt entirely — last tanker reaches Rotterdam April 9.",
            actie: "Strategy: the coalition approach suggests diplomatic resolution may take weeks, not days — plan for Hormuz disruption through Q2 minimum. Marketing: sustain 'energy independence' messaging — this crisis validates long-term heat pump investment. Finance: maintain dual scenario planning (ceasefire vs. escalation) from previous brief.",
            actieType: "Strategy",
            sourceUrl: "https://www.aljazeera.com/news/2026/4/2/can-starmers-40-nation-coalition-open-the-strait-of-hormuz",
            mtTags: ["Marketing", "Finance"]
          },
          {
            title: "Goldman Sachs raises European gas price forecast to €55/MWh — triple supply squeeze intensifies",
            sentiment: "negative",
            body: "Goldman Sachs raised its April European gas price forecast from €36 to €55/MWh, reflecting the convergence of three supply crises: Qatar's Ras Laffan offline 3-5 years, Hormuz blockade cutting 20% of global LNG, and the EU Russian LNG import ban taking effect April 25. EU storage at 28% is below seasonal average. Golden Pass LNG (QatarEnergy-ExxonMobil JV) began production at 18 Mtpa capacity with exports expected Q2, offering marginal relief. However, the injection season (April-October) will be the most challenging since 2022. Dutch gas storage (5 bcm) among the most depleted in Europe.",
            actie: "Finance: update all gas price models to €55/MWh baseline for Q2-Q3 — previous €50/MWh assumption is now conservative. Marketing: refresh heat pump ROI calculators with €55/MWh gas price — payback periods shorten significantly. Customer Ops: proactively contact high-consumption ServiceGemak® boiler customers with updated savings projections.",
            actieType: "Finance",
            sourceUrl: "https://www.thenationalnews.com/business/energy/2026/04/01/lng-start-by-us-qatari-jv-to-boost-gas-market-amid-war-disruption/",
            mtTags: ["Finance", "Marketing", "Customer Ops"]
          },
          {
            title: "EU extends Iran sanctions through April 2027 — 262 individuals and 53 entities targeted",
            sentiment: "neutral",
            body: "The European Union extended comprehensive sanctions on Iran on April 1, maintaining travel bans, asset freezes, and equipment export restrictions. The expanded list covers 262 individuals and 53 entities. While primarily targeting missile and nuclear programs, the sanctions signal EU commitment to sustained pressure — reducing probability of a quick diplomatic resolution that would ease energy markets. Combined with the UK coalition effort, the diplomatic track is active but progress is slow.",
            actie: "Strategy: EU sanctions extension confirms this is not a short-term crisis — integrate prolonged Iran confrontation into H2 2026 business planning. No immediate operational action required beyond maintaining existing scenario planning.",
            actieType: "Strategy",
            sourceUrl: "https://www.jurist.org/news/2026/04/eu-extends-iran-sanctions-citing-human-rights-concerns/",
            mtTags: ["Finance"]
          }
        ]
      },
      {
        title: "Trade War & Supply Chain",
        icon: "⛓",
        items: [
          {
            title: "Container rates surge 30% since February — Shanghai-Rotterdam at €2,543/FEU with emergency fuel surcharges",
            sentiment: "negative",
            body: "Spot rates on the Asia-Europe route jumped approximately 30% from late February, with Shanghai-Rotterdam at €2,543/40ft and Shanghai-Genoa at €3,529/40ft. Maersk proposed emergency bunker fuel surcharges of €200/TEU on top of existing rates. Cape of Good Hope routing remains default (Suez suspended), adding 10-14 days transit. Combined with the new US tariffs creating trade diversion, shipping costs for HVAC components are at their highest since the 2022 supply chain crisis. CMA CGM FAK rates at €3,220/container remain the ceiling rate.",
            actie: "Field Ops: maintain 8-week safety stock for Asia-sourced parts. Evaluate consolidating orders with fewer carriers to negotiate volume discounts. Finance: factor +€500-800/container into Q2-Q3 landed cost calculations. Product: prioritize Dutch/European-manufactured components (Intergas Coevorden, Remeha Apeldoorn) to reduce shipping exposure.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
            mtTags: ["Field Ops", "Finance", "Product"]
          },
          {
            title: "Aluminum falls to €3,010/ton, copper steady at €10,536/ton — tariff repricing expected",
            sentiment: "neutral",
            body: "LME aluminum declined to €3,010/ton, easing from the €3,245/ton peak two days ago, as markets digest the tariff shock. Copper holds steady at €10,536/ton. However, the 25% US tariff on aluminum and steel will trigger global repricing as displaced supply seeks new markets. European aluminum premiums may initially ease (US tariffs attract Asian supply away from Europe) but will likely rebound as trade flows adjust. Copper remains structurally elevated on energy transition demand. Both metals remain well above 2024 levels.",
            actie: "Finance: the aluminum dip is a potential buying window — consider locking Q2-Q3 forward contracts at current €3,010/ton before tariff-driven repricing. Monitor European aluminum premium (Midwest premium may shift). Copper positions from previous guidance remain appropriate. Product: assess aluminum content by product line to quantify exposure.",
            actieType: "Finance",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium",
            mtTags: ["Finance", "Product", "Field Ops"]
          },
          {
            title: "Semiconductor shortage persists — memory chips and microcontrollers constrained through 2027",
            sentiment: "negative",
            body: "The semiconductor shortage continues into 2026 with mature-node chips (used in HVAC thermostats and controllers) constrained as capacity is diverted to AI infrastructure. Nexperia's Netherlands-China governance dispute remains unresolved — the Dutch Enterprise Chamber investigation continues. Combined with US tariffs potentially disrupting chip supply chains, HVAC thermostat manufacturers face delayed deliveries and elevated component costs through 2027. The Nexperia crisis directly threatens EiH's controller board supply given Nexperia's 40% share of global discrete semiconductors.",
            actie: "IT & Data: continue auditing Nexperia component exposure across all product lines. Product: accelerate qualification of alternate suppliers (Infineon, Vishay, STMicroelectronics) — target completion by end of April. Field Ops: maintain 6-month controller board buffer stock. Consider pre-ordering Q3-Q4 requirements now.",
            actieType: "IT & Data",
            sourceUrl: "https://hotowell.com/news/en/impact-of-chips-shortage-on-HVAC.html",
            mtTags: ["IT & Data", "Product", "Field Ops"]
          }
        ]
      },
      {
        title: "Heat Pump Market & Products",
        icon: "🔥",
        items: [
          {
            title: "Heat pump demand surge sustained at +100% — but consumer confidence at -30 creates affordability tension",
            sentiment: "positive",
            body: "The Iran war-driven fuel price spike continues to drive unprecedented heat pump demand across the Netherlands. Installers report inquiry volumes double pre-crisis levels. However, a critical tension is emerging: while energy cost anxiety drives demand, consumer confidence sits at -30 (4-year low) and Dutch inflation rose to 2.7% in March. Mortgage rates at 4.3% further constrain household budgets. This means demand is strong but conversion rates may face headwinds — customers want heat pumps but may struggle to finance them. ISDE subsidies (€2,550 for 4kW hybrid, €3,150 for 8kW air-source) provide critical bridging support.",
            actie: "Marketing: develop 'affordability-first' campaign — lead with monthly rental pricing (€79.50/month hybrid heat pump) rather than purchase prices. Emphasize ServiceGemak® as removing upfront cost barrier. Finance: model rental conversion economics at current demand levels. Customer Ops: train advisors on financing options and ISDE subsidy guidance — every converted inquiry at current demand levels is high-margin revenue.",
            actieType: "Marketing",
            sourceUrl: "https://nltimes.nl/2026/04/01/iran-war-fuel-price-surge-drives-heat-pump-solar-panel-demand-netherlands",
            mtTags: ["Marketing", "Finance", "Customer Ops"]
          },
          {
            title: "Remeha Confida R290 launched — SCOP 5.34, patented freeze prevention, immediately available",
            sentiment: "positive",
            body: "Remeha introduced the Confida heat pump featuring R290 refrigerant, achieving a SCOP of 5.34 for the 4kW model — among the highest efficiency ratings in the Dutch market. A patented check valve prevents freezing at low outdoor temperatures, addressing a key reliability concern for Dutch winters. The Confida MB 400 is immediately available; the Confida 10 launches later in Q1. Combined with the ongoing Apeldoorn factory restructuring, Remeha is simultaneously launching new products and managing operational transition — supply reliability remains a watch point.",
            actie: "Product: request Remeha Confida demo units and technical specifications for EiH portfolio evaluation. Compare SCOP 5.34 vs. Intergas Xtend Eco and Vaillant aroTHERM pro. Field Ops: schedule Confida-specific installation training if product is added to portfolio. Monitor Apeldoorn factory situation — confirm delivery commitments before placing large orders.",
            actieType: "Product",
            sourceUrl: "https://www.remeha.nl/actueel/remeha-introduceert-confida-warmtepomp-op-vsk-e-2026",
            mtTags: ["Product", "Field Ops"]
          },
          {
            title: "Vaillant expands R290 portfolio at SHK+E — aroTHERM pro, perform, and first brine/water models",
            sentiment: "positive",
            body: "Vaillant presented its broadest R290 product range at SHK+E (March 17-20), including the aroTHERM pro (compact, zero-safety-zone, 65°C flow), aroTHERM perform for multi-family homes (iF Design Award 2026 winner), and its first indoor brine/water heat pumps (geoCOMPACT and geoTHERM exclusive). The aroTHERM pro is now shipping in April as previously announced. Vaillant's expanding R290 lineup strengthens the competitive landscape and creates procurement leverage for installers with multi-brand capabilities like EiH.",
            actie: "Product: evaluate the full Vaillant R290 portfolio — the geoCOMPACT brine/water unit may open new market segments (ground-source installations). Marketing: use multi-brand capability as competitive differentiator vs. single-brand competitors. Field Ops: ensure R290 training covers all Vaillant models, not just aroTHERM pro.",
            actieType: "Product",
            sourceUrl: "https://www.vaillant-group.com/news-stories/new-arotherm-plus-heat-pump-more-efficient-quieter-and-flexible-installation-options.html",
            mtTags: ["Product", "Marketing", "Field Ops"]
          },
          {
            title: "EPBD transposition deadline May 29 — mandatory renovation of 16% worst buildings by 2030",
            sentiment: "positive",
            body: "The revised Energy Performance of Buildings Directive must be transposed into Dutch law by May 29, 2026. The directive mandates renovation of the 16% worst-performing non-residential buildings by 2030 and 26% by 2033. On March 10, the EU Commission released guidance on establishing one-stop-shops for building energy renovations. This creates a massive multi-year installation pipeline for heating system upgrades. Combined with the current demand surge, EiH is entering the strongest market environment since its formation.",
            actie: "Strategy: the EPBD creates a structural 5+ year demand pipeline beyond the current cyclical surge. Position EiH as a preferred renovation partner for building owners and housing corporations. Product: develop commercial building heating solutions (larger capacity heat pumps, cascade systems). Marketing: create EPBD-focused content targeting property managers and woningcorporaties.",
            actieType: "Strategy",
            sourceUrl: "https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive_en",
            mtTags: ["Product", "Marketing"]
          }
        ]
      },
      {
        title: "Workforce & Compliance",
        icon: "👷",
        items: [
          {
            title: "VCA 2026/6.1 safety standard announced — all audits transition July 1, 2026",
            sentiment: "neutral",
            body: "SSVV introduced VCA 2026/6.1, the renewed workplace safety certification standard. Key improvements include sharpened formulations, stronger focus on practical application, fewer interpretation differences, and greater clarity for organizations and auditors. All audits will use the new standard from July 1, 2026. Existing certifications automatically transition — no re-certification required. The new schema is available for free download from the SSVV website. For EiH with 250+ employees and 300 daily customer visits, VCA compliance is foundational to operational risk management.",
            actie: "HR: download VCA 2026/6.1 schema from SSVV website and brief safety coordinator by April 18. Identify any changes that require updated procedures or training materials. Field Ops: schedule team briefings on VCA 2026/6.1 changes before July 1 transition. No emergency action required — this is an orderly transition.",
            actieType: "HR",
            sourceUrl: "https://www.klusvisie.nl/regelgeving/ssvv-introduceert-vca-2026-6-1/20577/",
            mtTags: ["HR", "Field Ops"]
          },
          {
            title: "Technical sector needs 121,000 new workers in 5 years — zij-instromers must fill 70% of gap",
            sentiment: "negative",
            body: "The Dutch technical sector faces a structural deficit of 121,000 workers over the next five years, with career switchers (zij-instromers) expected to fill 70% of the gap. The Netherlands faces a broader shortage of 250,000+ skilled workers by 2026. In the installation sector specifically, 80% of companies report serious recruitment difficulties. Average HVAC technician salary at €55,854/year (€27/hour) reflects upward wage pressure. Programs like House of Bèta, Technisi, and De Switchers provide learn-while-you-work pathways. Temporary agency worker rights equalized as of January 1, 2026.",
            actie: "HR: establish formal zij-instromers partnership with at least one training provider (House of Bèta, Technisi) by end of Q2. Target 10-15 career switchers per year as pipeline supplement to traditional recruitment. Budget for 1-2 day/week training release. Finance: model fully loaded cost of zij-instromers vs. experienced hires — the salary differential (€40-45K vs. €55K) may offset slower initial productivity.",
            actieType: "HR",
            sourceUrl: "https://www.nationaleonderwijsgids.nl/mbo/nieuws/73809-technieksector-zoekt-121-000-nieuwe-medewerkers-zij-instromers-essentieel.html",
            mtTags: ["HR", "Finance"]
          },
          {
            title: "Right-to-Repair directive takes effect July 31 — 12-month warranty extension on repairs",
            sentiment: "neutral",
            body: "The EU Right-to-Repair directive enters force July 31, 2026, requiring manufacturers to repair defective products within reasonable time and cost. Consumers choosing repair over replacement receive an automatic 12-month warranty extension. Manufacturers cannot block repairs through software locks or refuse service based on prior repair history. For EiH, this creates both an opportunity (more repair revenue, extended customer relationships) and a compliance obligation (spare parts availability, transparent repair pricing).",
            actie: "Customer Ops: prepare Right-to-Repair compliance procedures by June 30 — ensure spare parts availability for all installed product lines. Finance: model revenue impact of mandatory 12-month warranty extensions on repair work. Legal: review current service terms for compatibility with directive requirements. Marketing: position EiH's ServiceGemak® as already aligned with Right-to-Repair principles — proactive maintenance reduces need for reactive repairs.",
            actieType: "Customer Ops",
            sourceUrl: "https://eur-lex.europa.eu/EN/legal-content/summary/common-rules-promoting-the-repair-of-goods-and-amending-related-eu-legislation.html",
            mtTags: ["Customer Ops", "Finance", "Marketing"]
          }
        ]
      },
      {
        title: "IT, Data & Cybersecurity",
        icon: "🔒",
        items: [
          {
            title: "Dutch Ministry of Finance hacked — 1,600 institutions affected; Odido breach exposes 6M accounts",
            sentiment: "negative",
            body: "Two major Dutch cybersecurity incidents in the past week. The Ministry of Finance's 'Mijn Schatkist' portal remains offline after unauthorized access, affecting 1,600 financial institutions. Separately, telecom company Odido confirmed a breach exposing names, phone numbers, emails, bank account numbers, and passport numbers of over 6 million customers. These incidents highlight systemic vulnerabilities in Dutch digital infrastructure. Finance Minister Heinen briefed parliament, revealing detection gaps in public-sector systems. For EiH, these breaches underscore the urgency of NIS2/Cyberbeveiligingswet compliance.",
            actie: "IT & Data: use these incidents as executive-level justification for accelerating cybersecurity investments. Present cost-of-breach analysis to MT — average Dutch data breach cost exceeds €4M. Verify EiH customer database security posture, especially ServiceGemak® payment data. Ensure MFA deployment timeline is on track.",
            actieType: "IT & Data",
            sourceUrl: "https://www.techzine.eu/news/security/140090/dutch-financy-ministry-portal-offline-following-cyber-incident/",
            mtTags: ["IT & Data", "Finance"]
          },
          {
            title: "Mitsubishi AC critical vulnerability (CVSS 9.8) — full authentication bypass on 27 models",
            sentiment: "negative",
            body: "Mitsubishi Electric disclosed CVE-2025-3699, a critical flaw (CVSS 9.8) affecting 27 air conditioning models allowing complete authentication bypass and remote system takeover. AI-powered IoT scanning tools now enable automated exploitation of HVAC vulnerabilities. Smart thermostat compromises have been documented enabling lateral network movement within 72 hours. With EiH managing 100,000+ devices under maintenance, IoT security of installed equipment is a material operational risk. The Dutch Data Protection Authority (AP) has flagged smart home data collection as a key enforcement priority.",
            actie: "IT & Data: URGENT — assess whether any EiH-installed Mitsubishi AC equipment is among the 27 affected models. If so, coordinate firmware updates with Field Ops. Conduct security audit of all IoT-connected devices in EiH's installed base (smart thermostats, connected boilers). Field Ops: enforce strong default password changes on all new smart device installations.",
            actieType: "IT & Data",
            sourceUrl: "https://secureiot.house/ai-driven-iot-attacks-why-enterprise-smart-devices-are-10x-more-dangerous-in-2026/",
            mtTags: ["IT & Data", "Field Ops"]
          },
          {
            title: "Cyberbeveiligingswet (NIS2) slides to Q2 — Cyber Resilience Act adds parallel compliance burden",
            sentiment: "negative",
            body: "The Dutch NIS2 transposition (Cyberbeveiligingswet) implementation has been further postponed to Q2 2026. When enacted, it expands compliance scope from 1,000 to 8,000 companies across 18 sectors. In parallel, the EU Cyber Resilience Act enters force, requiring cybersecurity certification for connected products. Suppliers to vital businesses must now prove their systems are cybersecure. EiH, as part of Eneco Group (a vital sector company), will face direct NIS2 obligations. The dual CRA/NIS2 requirements create a significant compliance workload.",
            actie: "IT & Data: maintain NIS2 readiness plan with July 1 target date despite parliamentary delays — being ahead of compliance is a competitive advantage. Map CRA requirements for connected HVAC products (smart thermostats, IoT controllers). Budget: allocate €50-100K for combined NIS2/CRA compliance (security audit, MFA deployment, incident response plan, staff training).",
            actieType: "IT & Data",
            sourceUrl: "https://www.kvk.nl/en/secure-business/new-cyberlaws-in-2026-what-you-must-know/",
            mtTags: ["IT & Data", "Finance"]
          }
        ]
      },
      {
        title: "Finance & Consumer",
        icon: "💰",
        items: [
          {
            title: "ECB rate decision April 30 — markets price 50% chance of hike as inflation rises to 2.7%",
            sentiment: "negative",
            body: "The ECB April 30 rate decision carries elevated uncertainty. Markets price a 50% probability of a 25bp increase, with Barclays and J.P. Morgan expecting three hikes this year (April, June, July). Dutch inflation rose to 2.7% in March (from 2.4% in February) driven by energy price surges including motor fuels (+6.5%). Dutch mortgage rates sit at 4.3% for 10-year fixed, having jumped from 3.6% to 4.1% in March alone. Higher rates directly constrain household capacity for heat pump investments, making EiH's rental model (no upfront capital) strategically more important.",
            actie: "Finance: stress-test EiH rental model margins under a 2.40-2.65% ECB rate range. Marketing: if rate hike materializes, pivot messaging harder toward rental/ServiceGemak® — 'no upfront cost, no mortgage needed.' Customer Ops: ensure finance team can explain rental vs. purchase economics to hesitant customers in a rising rate environment.",
            actieType: "Finance",
            sourceUrl: "https://www.dutchnews.nl/2026/04/dutch-housing-update-ai-interest-rates-and-do-you-buy-or-rent/",
            mtTags: ["Finance", "Marketing", "Customer Ops"]
          },
          {
            title: "Dutch house prices forecast +4-5% in 2026 — median at €470,000, 233K transactions expected",
            sentiment: "positive",
            body: "The Dutch housing market continues its recovery with Rabobank projecting 5.5% price growth in 2026. Median prices at €470,000 with 233,000 expected transactions signal sustained residential market activity. Growth is shifting to northern regions (Groningen, Drenthe) while major cities show stagnation. For EiH, rising house values increase homeowner willingness to invest in property improvements including heating upgrades. The active transaction volume also creates a steady stream of new homeowners needing boiler servicing or heating system assessments.",
            actie: "Marketing: develop 'new homeowner' targeted campaigns — 233K transactions means 233K potential new customers needing heating assessments. Customer Ops: create streamlined onboarding process for recently-moved homeowners. Target northern provinces (Groningen, Drenthe) where growth is strongest and heat pump penetration is lower.",
            actieType: "Marketing",
            sourceUrl: "https://www.ohao.nl/expats/library/housing-prices-in-the-netherlands-2026/",
            mtTags: ["Marketing", "Customer Ops"]
          },
          {
            title: "Average energy bill drops 2.5% to €1,993 — but net metering phase-out adds €180-470 for solar households",
            sentiment: "neutral",
            body: "Average Dutch household energy costs decreased to €1,993 in 2026 (down €52), driven by lower gas consumption. However, individual cost components show mixed trends: electricity tax fell 10%, but gas tax rose 4% to €0.7267/m³ and network tariffs increased 3.4%. The net metering (salderingsregeling) phase-out means solar panel owners face additional annual costs of €180-470. Energy costs dropping from 4.4% to 4.1% of disposable income provides modest relief, but the gas tax increase reinforces the economic case for reducing gas dependency through heat pump adoption.",
            actie: "Marketing: frame gas tax increase (+4%) as a hidden recurring cost that heat pumps eliminate. Target solar panel owners losing net metering — hybrid heat pumps maximize self-consumption of solar electricity. Customer Ops: develop cross-sell playbook for ServiceGemak® customers with solar panels — these households are ideal heat pump conversion candidates.",
            actieType: "Marketing",
            sourceUrl: "https://nltimes.nl/2026/02/26/household-energy-bills-fall-25-percent-around-eu1993-2026",
            mtTags: ["Marketing", "Customer Ops"]
          }
        ]
      },
      {
        title: "Eneco Group & Strategy",
        icon: "🏢",
        items: [
          {
            title: "Eneco new CEO Hagens settles in — Equinor gas deal, Gulf G+P acquisition completed, flat heating rates",
            sentiment: "neutral",
            body: "CEO Martijn Hagens (started March 1, ex-Vattenfall) continues to embed at Eneco. Key developments: the 5-year Equinor gas supply deal (0.5 bcm annually) reduces procurement risk, Gulf Gas + Power acquisition received ACM approval, and Eneco maintained flat heating grid rates for 2026 customers. The Ecowende offshore wind farm (with Chubu and Shell) progresses toward late 2026 operations. These moves signal Hagens prioritizing supply security and strategic acquisitions — EiH's positioning within this portfolio remains the key question for Director Schoon.",
            actie: "Strategy: Director Schoon should schedule a follow-up with Hagens to discuss EiH's Q1 performance and demand surge. Present updated standalone P&L showing rental and ServiceGemak® recurring revenue growth. Frame EiH as the consumer-facing monetization engine for Eneco's energy transition strategy.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/",
            mtTags: ["Finance"]
          },
          {
            title: "AI-optimized heat pumps reduce energy costs 25-30% — competitive threat and opportunity for EiH",
            sentiment: "neutral",
            body: "AI-enabled HVAC systems now demonstrably reduce electricity consumption up to 30% compared to conventional systems, with pre-commercialization tests showing 25% reduction in total energy costs within three months. AI features include predictive control, proactive fault detection, occupant preference learning, and weather-anticipatory optimization. Quatt leads in the Dutch market with AI-driven hybrid optimization claiming 80% gas reduction. Schools, offices, and hospitals are increasingly adopting AI-powered systems to meet energy regulations. For EiH, this represents both a competitive threat (Quatt's tech differentiation) and an opportunity (add AI capabilities to ServiceGemak® monitoring).",
            actie: "IT & Data: evaluate AI optimization platforms that could integrate with EiH's installed base — predictive maintenance and energy optimization. Product: benchmark Quatt's AI claims (80% gas reduction) against real-world EiH hybrid heat pump performance data. Strategy: AI-optimized service delivery could be a differentiator for premium ServiceGemak® tiers — explore partnership or build-vs-buy options.",
            actieType: "IT & Data",
            sourceUrl: "https://www.intellspot.com/ai-optimized-heat-pumps-smart-heating/",
            mtTags: ["IT & Data", "Product"]
          }
        ]
      }
    ],
    priorities: [
      "HR: Download and brief team on VCA 2026/6.1 changes by April 18 — orderly July 1 transition. Establish zij-instromers partnership with House of Bèta or Technisi by end of Q2 — target 10-15 career switchers annually. Continue monitoring R290 certification compliance. Budget for wage pressure beyond TI CAO 3% if inflation persists above 2.5%.",
      "IT & Data: URGENT — assess Mitsubishi AC CVE-2025-3699 exposure across 100,000+ installed devices. Maintain NIS2 readiness for July 1 despite parliamentary delays. Deploy MFA across all systems by end of April. Continue Nexperia component audit and alternate supplier qualification. Evaluate AI optimization platforms for ServiceGemak® integration. Budget €50-100K for combined NIS2/CRA compliance.",
      "Finance: Update gas price models to €55/MWh (Goldman Sachs Q2 forecast). Model +5-10% component cost increase from tariff pass-through for Q3 quotes. Lock aluminum forward contracts at current €3,010/ton dip. Stress-test rental model under 2.40-2.65% ECB rate range. Prepare standalone P&L for CEO Hagens showing recurring revenue growth.",
      "Customer Ops: Launch 'affordability-first' campaign leading with rental pricing (€79.50/month) over purchase. Train advisors on ISDE subsidy guidance and financing options. Prepare Right-to-Repair compliance by June 30. Develop cross-sell playbook for solar panel owners losing net metering. Create new homeowner onboarding process for 233K annual transactions.",
      "Field Ops: Maintain 8-week safety stock for Asia-sourced parts. Accelerate orders for aluminum-heavy components before tariff pass-through. Ensure all technicians trained on VCA 2026/6.1 before July 1. Enforce strong password defaults on all smart device installations. Schedule Remeha Confida and Vaillant aroTHERM pro training sessions.",
      "Product: Contact Vaillant, Remeha, Intergas procurement — assess tariff exposure and confirm Q2 supply. Request Remeha Confida demo units (SCOP 5.34). Evaluate full Vaillant R290 portfolio including geoCOMPACT brine/water. Accelerate Nexperia-alternative chip supplier qualification by end of April. Develop commercial building heating solutions for EPBD pipeline.",
      "Marketing: Sustain 'energy independence' and 'affordability-first' dual messaging — lead with €79.50/month rental. Refresh ROI calculators with €55/MWh gas baseline. Target solar panel owners losing net metering and new homeowners (233K transactions). Counter Quatt's AI messaging with EiH service quality and brand trust differentiation. Develop EPBD-focused content for woningcorporaties.",
      "Strategy: The tariff war + Hormuz crisis create the most complex operating environment since EiH's formation. Present Hagens with updated EiH standalone valuation showing recurring revenue premium. EPBD creates 5+ year structural demand pipeline — position EiH as preferred renovation partner. Evaluate AI-optimized service delivery as next-gen ServiceGemak® differentiator. Monitor April 30 ECB decision for consumer financing impact."
    ]
  },
  {
    date: "2026-04-02",
    dateFormatted: "Thursday 2 April 2026",
    samenvatting: "ENECO REORG DEADLINE PASSED: March 31 deadline hit — Director Schoon's EiH positioning paper was due to CEO Hagens. 350 job cuts proceeding through natural attrition. Monitor shared services continuity (IT, Finance, HR). APRIL 6 INFLECTION POINT: Trump extends Iran strike pause to April 6 — if talks fail, US signals 'extensive attacks' on Iranian energy infrastructure. Ceasefire talks deadlocked: US 15-point proposal vs. Iran 5-condition counter far apart. DEMAND EXPLOSION: NL Times reports 100% surge in heat pump inquiries driven by Iran war fuel price spike — installers describe market as 'one big madhouse.' SUPPLY CHAIN CRUNCH: CMA CGM FAK rates hit €3,220/container effective April 1. Aluminum at €3,245/ton, copper at €11,288/ton. Nexperia Netherlands-China dispute escalates — Dutch Enterprise Chamber orders governance investigation, threatening HVAC chip supply through H1. MARKET DATA: TTF gas at €50/MWh (easing from €56). Brent crude at $105/bbl. Eurozone inflation surges to 2.5% (flash March) with energy prices +4.9% — first positive YoY reading since early 2025. Consumer confidence still at -30 (4-year low). ECB next decision April 30. PRODUCT LAUNCHES: Vaillant aroTHERM pro R290 launches April 2026 — compact, zero-safety-zone installation, 65°C flow. Intergas Xtend Eco R290 with 7-year performance guarantee. Quatt secures additional €10M ABN AMRO financing (total ~€30M). Remeha Apeldoorn factory facing workforce restructuring and potential relocation. REGULATION: Russian LNG import ban effective April 25. EU post-2030 energy efficiency consultation closes April 16. Cyberbeveiligingswet still pending parliamentary vote — Q2 implementation target.",
    kpis: [
      { label: "TTF Gas Price", value: "€50/MWh", sub: "Easing from €56 — but EU storage at 28%, Qatar offline 3-5yr", trend: "positive" },
      { label: "Brent Crude", value: "$105/bbl", sub: "Iran Day 33 — April 6 deadline looms, strikes or talks", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Held — next decision April 30, inflation surges to 2.5%", trend: "negative" },
      { label: "Heat Pump Demand", value: "+100%", sub: "NL Times: inquiries doubled on Iran war fuel price surge", trend: "positive" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "April 6 inflection point: Trump extends Iran strike pause — 'extensive attacks' on energy infrastructure if talks fail",
            sentiment: "negative",
            body: "Ceasefire negotiations between the US and Iran remain deadlocked. The US presented a 15-point peace proposal; Iran countered with 5 conditions demanding guaranteed ceasefire, reparations, and Strait of Hormuz control. President Trump extended a pause on strikes against Iranian energy infrastructure until April 6. If Iran does not reopen the Strait by then, the US has signaled extensive attacks on Iranian energy sites. Iran's parliament speaker warns forces are 'waiting' for a ground invasion. Brent crude at $105/bbl reflects the embedded risk premium. A 22-nation coalition signed a safe passage statement but key NATO allies (Germany, Netherlands, France, UK) rejected formal military participation.",
            actie: "Strategy: prepare dual scenario plans — (A) ceasefire and rapid gas price drop to €35-40/MWh; (B) escalation and spike to €80+/MWh. Defer multi-month fixed-price gas service quotes until post-April 6 clarity. Marketing: accelerate heat pump proposals NOW to convert demand before the April 6 outcome — either way, urgency drops after resolution.",
            actieType: "Strategy",
            sourceUrl: "https://www.cnbc.com/2026/04/01/iran-demands-guaranteed-ceasefire-to-end-war-permanently-senior-source-says.html",
            mtTags: ["Finance", "Marketing"]
          },
          {
            title: "Russian LNG import ban takes effect April 25 — further tightening European gas supply",
            sentiment: "negative",
            body: "The EU's prohibition on Russian LNG imports takes effect April 25, 2026, with pipeline gas banned from June 17. This removes another low-cost supply source at the worst possible time — Qatar's Ras Laffan is offline for 3-5 years (17% of global LNG), Hormuz is blockaded, and EU storage sits at just 28% capacity. Europe must now compete for scarce spot LNG from the US and Australia at premium prices. The injection season (April-October) will be the most challenging since 2022. Dutch gas storage (5 bcm) shows the most depleted reserves alongside Germany.",
            actie: "Finance: model TTF scenarios for Q3-Q4 at €60-80/MWh range given triple supply squeeze (Qatar offline, Russian ban, Hormuz). Marketing: develop 'last chance before winter' campaign — every month of delay means higher gas costs. Customer Ops: proactively contact all ServiceGemak® customers on gas boilers about heat pump upgrade options before injection season price spikes.",
            actieType: "Finance",
            sourceUrl: "https://www.consilium.europa.eu/en/press/press-releases/2025/12/03/council-and-parliament-strike-a-deal-on-rules-to-phase-out-russian-gas-imports-for-an-energy-secure-and-independent-europe/",
            mtTags: ["Finance", "Marketing", "Customer Ops"]
          },
          {
            title: "Eurozone inflation surges to 2.5% — energy prices flip to +4.9% YoY, steepest since October 2022",
            sentiment: "negative",
            body: "Eurozone annual inflation jumped to 2.5% in March (flash estimate March 31), up sharply from 1.9% in February. Energy prices reversed a -3.1% decline to reach +4.9% annually — the first positive year-over-year reading since early 2025. Month-on-month consumer prices rose 1.2%, the steepest since October 2022. ECB now projects 2026 headline inflation at 2.6% and growth at just 0.9%. Dutch inflation at 2.3% could spike to 3.0% if the Middle East conflict persists (CPB estimate). ECB President Lagarde signaled readiness to hike rates if energy-driven inflation becomes persistent.",
            actie: "Finance: review ServiceGemak® pricing for potential Q3 inflation-linked adjustment — current €8.99-€22.99/month may need 3-5% uplift to protect margins. HR: budget for potential additional wage pressure beyond TI CAO 3% if inflation persists. Marketing: frame heat pumps as inflation protection — fixed electricity costs vs. volatile gas prices.",
            actieType: "Finance",
            sourceUrl: "https://www.euronews.com/business/2026/03/31/eurozone-inflation-jumps-to-25-amid-iran-war-will-the-ecb-hike-rates",
            mtTags: ["Finance", "HR", "Marketing"]
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "⛓",
        items: [
          {
            title: "CMA CGM FAK rates hit €3,220/container effective April 1 — shipping costs locked in higher",
            sentiment: "negative",
            body: "CMA CGM's new freight-all-kinds rates from Asia to North Europe are now effective: €3,220/40ft and €1,840/20ft from all Asian ports. Shanghai-Rotterdam spot rates rose 3% to €2,348/40ft (+27% from December 2025). All carriers imposed emergency fuel surcharges of €435-870 per container. Maersk suspended all Trans-Suez sailings; Cape of Good Hope routing remains default, adding 10-14 days transit. No Suez return expected until mid-year at earliest. Bunker fuel surged 30-35% over one week.",
            actie: "Field Ops: build 8-week safety stock for Asia-sourced parts (up from 6). Compare Maersk/Hapag-Lloyd April rates — some carriers may hold 3-5% below CMA CGM. For critical high-value items (inverter boards, control units), evaluate air freight. Prioritize Remeha Apeldoorn domestic supply and Intergas domestic manufacturing to avoid shipping exposure entirely.",
            actieType: "Operations",
            sourceUrl: "https://container-news.com/cma-cgm-sets-new-fak-rates-from-asia-to-north-europe-from-april/",
            mtTags: ["Field Ops", "Product", "Finance"]
          },
          {
            title: "Nexperia crisis escalates — Dutch Enterprise Chamber orders investigation, HVAC chip supply at risk through H1",
            sentiment: "negative",
            body: "The Dutch Enterprise Chamber ordered investigation into Nexperia's governance amid the ongoing dispute between Dutch HQ and Chinese parent Wingtech Technology. Nexperia controls ~40% of global discrete semiconductors critical for HVAC thermostat controllers, motorized valve drivers, and burner ignition circuits. In March, Dutch HQ disabled IT accounts for Chinese staff; Beijing warned of 'full responsibility' for global chip shortages. German automakers flagged 'elevated supply risk' through Q1-Q2. Nexperia committed ~€276M to shift 90% of production outside China by mid-2026, but timelines may slip.",
            actie: "IT & Data: URGENT — audit bill-of-materials exposure to Nexperia parts (diodes BAT54/BAS40/PMEG series, logic chips 74LVC families). Product: qualify alternate suppliers Infineon, Vishay, ON Semiconductor, STMicroelectronics immediately. Field Ops: increase safety stock of controller boards by 30-50% for Q2-Q3. Communicate 2-4 week extended lead times on smart installations to customers.",
            actieType: "IT & Data",
            sourceUrl: "https://www.z2data.com/insights/the-nexperia-chip-crisis-explained",
            mtTags: ["IT & Data", "Product", "Field Ops"]
          },
          {
            title: "Aluminum at €3,245/ton, copper at €11,288/ton — both metals elevated on geopolitical premium",
            sentiment: "negative",
            body: "LME aluminum closed at €3,245/ton on April 1 (+2.66% weekly), near a 4-year high driven by Iran conflict supply concerns and post-Chinese New Year factory restarts. Copper extended its rally to €11,288/ton (+0.92%), supported by energy transition demand and structural supply tightness. Both metals are critical for EiH installations: aluminum for heat pump heat exchangers, radiators, and control panel housings; copper for wiring harnesses, compressor windings, and control board traces. No relief expected through Q2-Q3.",
            actie: "Finance: lock Q2 aluminum and copper forward contracts with Vaillant, Remeha, Intergas before further price moves. Budget +12-15% materials surcharge into all Q2 installation quotes. Add escalation clauses to customer contracts for multi-month projects. Copper procurement less urgent (stabilizing) but aluminum requires immediate hedging action.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium",
            mtTags: ["Finance", "Field Ops", "Product"]
          }
        ]
      },
      {
        title: "Heat Pump Market & Products",
        icon: "🔥",
        items: [
          {
            title: "Heat pump demand surges 100% — Iran war fuel price spike drives Dutch market into 'one big madhouse'",
            sentiment: "positive",
            body: "NL Times reports a 100% surge in heat pump inquiries across the Netherlands driven by rising gas prices linked to the Iran conflict. Installers describe market conditions as 'one big madhouse' with NVDE and Techniek Nederland reporting overwhelming demand. Supply constraints remain acute — manufacturers have not yet increased production to match the sudden spike. This demand surge is driven by consumer behavior (energy cost anxiety) rather than policy mandates, making it potentially more durable than the 2022 post-Ukraine spike. Combined with ISDE subsidy confirmation at €511M, the market fundamentals are the strongest since 2023.",
            actie: "ALL MT: This is the defining market opportunity for Q2 2026. Field Ops: maximize installation capacity — consider temporary subcontractor agreements. Product: secure Vaillant/Remeha/Intergas inventory before competitors lock up supply. Marketing: launch 'beat the April 6 deadline' urgency campaign. Customer Ops: prioritize existing ServiceGemak® customers for upgrade offers. HR: accelerate recruitment — market is hot, labour market is tight.",
            actieType: "Marketing",
            sourceUrl: "https://nltimes.nl/2026/04/01/iran-war-fuel-price-surge-drives-heat-pump-solar-panel-demand-netherlands",
            mtTags: ["Marketing", "Field Ops", "Product", "Customer Ops", "HR"]
          },
          {
            title: "Vaillant aroTHERM pro R290 launches April — compact design, zero-safety-zone, 65°C flow temperature",
            sentiment: "positive",
            body: "Vaillant is rolling out its aroTHERM pro R290 heat pump in April 2026 (5-7 kW), with 11 kW units following in June. The unit weighs just 84 kg and features revolutionary 'Flexible Space Function' eliminating safety zones around the unit — critical for terraced housing and dense urban installations. Flow temperatures up to 65-70°C make it viable for renovation without radiator replacement. All new Vaillant heat pumps come with 5-year warranty. First installations receive €300 start bonus from Technische Unie. The aroTHERM perform (15-20 kW) targets multi-family homes.",
            actie: "Product: request demo units and competitive pricing for aroTHERM pro 5kW and 7kW immediately. Evaluate zero-safety-zone feature for EiH's urban/terraced housing segment — this addresses a major barrier. Field Ops: schedule R290-specific training for Vaillant models. Marketing: compare aroTHERM pro vs. current EiH portfolio — prepare competitive positioning before market saturation.",
            actieType: "Product",
            sourceUrl: "https://www.installatietotaal.nl/nieuws/vaillant-onthult-nieuwe-generatie-r290-warmtepompen-voor-2026/",
            mtTags: ["Product", "Field Ops", "Marketing"]
          },
          {
            title: "Intergas Xtend Eco R290 launches with 7-year performance guarantee — competitive differentiation",
            sentiment: "neutral",
            body: "Intergas released the Xtend Eco, the latest R290 hybrid heat pump generation featuring ultra-compact design (64 kg), A+++ energy rating, and integrated sound dampening. Critically, Intergas introduced a 7-year performance guarantee: if homeowner savings fall below €3,500 over seven years, Intergas covers the difference. This shifts risk from consumers to the manufacturer — a powerful differentiator for risk-averse renovation customers. The Xceed monobloc offers 75°C heating and 18°C cooling capability.",
            actie: "Product: evaluate whether EiH can offer comparable savings guarantees — this is a powerful sales tool against consumer hesitancy. Marketing: if EiH sells Intergas, promote the 7-year guarantee prominently. If not, develop alternative value-protection messaging. Field Ops: the 64 kg weight enables faster installation — factor into scheduling capacity.",
            actieType: "Product",
            sourceUrl: "https://www.intergas-verwarming.nl/zakelijk/2026/03/19/xtend-eco-de-beste-in-zn-klasse-2/",
            mtTags: ["Product", "Marketing"]
          },
          {
            title: "Quatt secures additional €10M ABN AMRO financing — total funding now ~€30M, 20,000 households served",
            sentiment: "negative",
            body: "Amsterdam-based Quatt obtained €10M additional financing from ABN AMRO on top of its €25M growth equity round (Blue Earth Capital, Seaya, Impact Equity Fund). Total funding now stands at ~€30M. The company serves 20,000+ households with a 4.3/5 customer rating (3,500+ reviews). Quatt claims 80% gas bill reduction through AI optimization and has launched 'Chill' — a proprietary air-conditioning system integrated with existing heat pumps. The AI-driven platform supports both hybrid and fully electric options, creating customer lock-in beyond hardware sales.",
            actie: "Marketing: analyze Quatt's 80% gas reduction claim and AI messaging — can EiH match or counter this? Product: evaluate whether AI-driven optimization partnerships could be added to EiH's offering. Strategy: Quatt's 20,000 households and 4.3 rating make them a credible competitor — define EiH's differentiation clearly (service quality, local presence, Eneco brand trust, ServiceGemak® recurring relationship).",
            actieType: "Marketing",
            sourceUrl: "https://siliconcanals.com/amsterdam-quatt-bags-25m/",
            mtTags: ["Marketing", "Product"]
          }
        ]
      },
      {
        title: "Workforce & Compliance",
        icon: "👷",
        items: [
          {
            title: "F-gas/R290 certification transition completed — old certificates no longer issued, verify technician compliance",
            sentiment: "negative",
            body: "The March 29 deadline has passed. After this date, no more F-gas Category 1/2 or B1/B3 certificates can be issued under the old system. Technicians must now hold new A1/A2 certificates to work with all refrigerants. Old certificates remain valid until March 2029 but no new ones will be issued. R290 systems up to 988g can be handled with F-gas 1 + B3 certification. With the 100% demand surge in heat pump inquiries, any technician gaps in R290 certification directly limit EiH's ability to capture market opportunity.",
            actie: "HR: CONFIRM certification compliance audit results for all 200+ technicians — this should have been completed last week. Any remaining gaps must be resolved through emergency CRT certification sessions. Field Ops: assign only certified technicians to R290 heat pump jobs. Uncertified technicians continue on boiler-only and non-refrigerant maintenance. Every uncertified technician = lost installation revenue in a 100% demand surge market.",
            actieType: "HR",
            sourceUrl: "https://business.gov.nl/amendments/new-certificate-required-for-all-refrigerants/",
            mtTags: ["HR", "Field Ops"]
          },
          {
            title: "Cyberbeveiligingswet vote still pending — Q2 implementation target, Abutriek ransomware confirms sector risk",
            sentiment: "negative",
            body: "The Cyberbeveiligingswet (NIS2 transposition) bill has not yet undergone a final parliamentary vote despite the March 23 plenary debate. Implementation remains targeted for Q2 2026 (July 1). Meanwhile, the threat landscape is intensifying: smart home attack rates surged to 29 compromise attempts per household daily, 38% of IoT devices have been successfully compromised at least once, and AI-powered attacks increased 54% in 2026. Critical HVAC vulnerabilities were discovered in Copeland E2/E3 controllers allowing remote code execution. Dutch Ministry of Finance was hit by a cyberattack March 19.",
            actie: "IT & Data: develop NIS2 incident response plan by end of April — don't wait for final vote. Implement MFA across ALL systems (ServiceGemak®, field service, customer database). Conduct Copeland controller vulnerability assessment across installed base. Field Ops: enforce strong password policies on all deployed smart thermostats and heating controllers. Budget cybersecurity investments: security audit + MFA deployment + incident response training.",
            actieType: "IT & Data",
            sourceUrl: "https://www.digitalsecurityinstituut.nl/en/nieuws/ingang-nis2-cyberbeveiligingswet-verder-uitgesteld",
            mtTags: ["IT & Data"]
          },
          {
            title: "Remeha Apeldoorn factory faces workforce restructuring — CNV social plan negotiations underway",
            sentiment: "neutral",
            body: "Union representatives (CNV) held initial consultation with Remeha management in March regarding a social plan for the Apeldoorn facility. Remeha is negotiating with the municipality about potential relocation to Ecofactorij, with new construction possibly complete in 2027. The factory — the Netherlands' largest heat pump plant — had capacity for 50,000-140,000 hybrid units annually. Production uncertainty during restructuring may create supply gaps at exactly the wrong time, given the 100% demand surge.",
            actie: "Product: contact Remeha supply contacts immediately — confirm Q2 delivery commitments and allocation. If Remeha supply becomes unreliable, shift orders to Intergas Xtend Eco and Vaillant aroTHERM pro. Field Ops: diversify supplier mix to reduce single-source dependency. Strategy: if Remeha skilled workers become available, evaluate recruitment opportunities for EiH.",
            actieType: "Product",
            sourceUrl: "https://www.cnv.nl/industrie/metalektro/cao-metalektro/nieuws/update-onderhandelingen-over-sociaal-plan-bij-remeha-in-apeldoorn-2026-03-20/",
            mtTags: ["Product", "Field Ops", "HR"]
          }
        ]
      },
      {
        title: "Eneco Group & Strategy",
        icon: "🏢",
        items: [
          {
            title: "Eneco March 31 reorg deadline passed — 350 job cuts proceeding, Hagens steering new direction",
            sentiment: "neutral",
            body: "The Eneco Group reorganization March 31 deadline has now passed. 350 positions are being eliminated through natural attrition, non-renewal of temporary contracts, and reduced external hiring. CEO Martijn Hagens (started March 1, ex-Vattenfall) is settling into the role alongside COO Kees-Jan Rameau. Eneco secured a 5-year gas supply deal with Equinor (0.5 bcm annually), completed the Gulf Gas + Power acquisition, and maintains flat heating grid costs for customers in 2026. The Ecowende offshore wind farm (co-owned with Chubu and Shell) is under construction, expected operational late 2026.",
            actie: "Strategy: follow up on positioning paper presented to Hagens. Confirm continuity of shared services (IT, Finance, HR) post-reorg. Finance: ensure EiH standalone P&L is ready for review — Hagens will want to see revenue segmentation by product and model (purchase vs. rental vs. ServiceGemak®). HR: if reorg creates talent availability at Eneco Group level, evaluate strategic hires for EiH management capacity.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/",
            mtTags: ["HR", "Finance", "IT & Data"]
          },
          {
            title: "Home services M&A: recurring revenue models command 12-15x EBITDA — ServiceGemak® aligns perfectly",
            sentiment: "positive",
            body: "The US home services market (€785B by end-2026) shows a K-shaped valuation split: high-quality platforms with recurring revenue trade at 12-15x EBITDA, while transactional businesses command just 3-8x. Subscription models now account for ~28% of top-quartile firm revenues. Technology stack differentiation (IoT predictive maintenance, AI dispatching, virtual estimates) is the primary driver between 7x and 12x valuations. Private equity continues to dominate M&A, pivoting toward local density and tech integration.",
            actie: "Strategy: EiH's ServiceGemak® subscriptions (€8.99-€22.99/month recurring) and rental models (€79.50/month heat pump, €37.20/month boiler) position EiH in the premium 12-15x EBITDA valuation category. To maximize, invest in IoT predictive maintenance, data-driven dispatch, and subscription penetration growth. Present Hagens with a standalone valuation model showing EiH's path to premium multiples. This is the strongest argument for EiH independence and investment.",
            actieType: "Strategy",
            sourceUrl: "https://www.cfoxadvisory.com/home-services-2026-ma-outlook/",
            mtTags: ["Finance"]
          }
        ]
      }
    ],
    priorities: [
      "HR: CONFIRM R290/F-gas certification compliance for ALL 200+ technicians — deadline passed March 29, every uncertified technician = lost revenue in 100% demand surge. Accelerate recruitment for installation capacity. Plan VCA sector-neutral training. Evaluate Remeha restructuring for talent acquisition opportunities.",
      "IT & Data: Develop NIS2 incident response plan by end of April — don't wait for parliamentary vote. Implement MFA across ServiceGemak® and field service platforms. URGENT: audit bill-of-materials for Nexperia semiconductor exposure. Qualify alternate chip suppliers (Infineon, Vishay, STMicroelectronics). Assess Copeland controller vulnerabilities across installed base.",
      "Finance: Model dual scenarios for April 6 outcome — (A) ceasefire, gas drops to €35-40/MWh; (B) escalation, gas spikes to €80+/MWh. Lock Q2 aluminum forward contracts (€3,245/ton). Budget +12-15% materials surcharge into Q2 quotes. Review ServiceGemak® pricing for Q3 inflation adjustment. Prepare standalone P&L for CEO Hagens.",
      "Customer Ops: Proactively contact ALL ServiceGemak® gas boiler customers with heat pump upgrade offers — market is +100%, capture demand now. Prepare spare parts for Right-to-Repair compliance (July 31). Develop 'new homeowner welcome' package for ex-rental buyers. Retain at-risk subscribers with value reinforcement amid -30 consumer confidence.",
      "Field Ops: Maximize installation capacity — consider temporary subcontractor agreements for Q2 demand surge. Build 8-week safety stock for Asia-sourced parts. Maintain 6-month buffer of controller boards (Nexperia shortage). Assign only R290-certified technicians to heat pump jobs. Schedule training for Vaillant aroTHERM pro and Intergas Xtend Eco.",
      "Product: Request Vaillant aroTHERM pro demo units and pricing IMMEDIATELY — April launch window is critical. Verify ALL heat pump models meet ISDE GWP<750 and smart-readiness. Contact Remeha to confirm Q2 supply during Apeldoorn restructuring. Evaluate Intergas 7-year performance guarantee — can EiH offer comparable? Qualify Nexperia-alternative chip suppliers.",
      "Marketing: URGENT — capitalize on 100% demand surge with 'beat the April 6 deadline' campaign. Frame heat pumps as inflation protection (energy +4.9%, gas volatile). Target 'just bought ex-rental' homeowners. Counter Quatt's AI messaging — define EiH's differentiation (service, trust, Eneco brand, ServiceGemak® relationship). Update ROI calculators with €50/MWh gas baseline and 2026 ISDE amounts.",
      "Strategy: Follow up on positioning paper presented to CEO Hagens. Present ServiceGemak® valuation model (12-15x EBITDA for recurring revenue). Prepare dual scenarios for April 6 Iran deadline. Position EiH for demand capture during 100% market surge — this is the most important quarter since company formation. Confirm shared services continuity post-reorg."
    ]
  },
  {
    date: "2026-03-30",
    dateFormatted: "Monday 30 March 2026",
    samenvatting: "REORG D-DAY TOMORROW: Eneco reorganization deadline March 31 — Director Schoon must present EiH positioning paper to CEO Hagens TODAY. 350 jobs being cut; shared services continuity critical. IRAN WAR DAY 30: No de-escalation visible — multi-front conflict now spanning Lebanon, Gaza, and Gulf. Brent crude surges to €99/bbl (steepest monthly rise on record). TTF gas steady at €56/MWh but EU storage at just 28% capacity heading into injection season. Qatar Ras Laffan 17% capacity loss confirmed for 3-5 years. CONSUMER CONFIDENCE CRASHES: CBS reports -30 in March — lowest in 4 years, steepest monthly decline in 4 years. Purchase willingness drops to -15. CERTIFICATION DEADLINE PASSED: F-gas/R290 unified certification expired Saturday March 29 — verify ALL 200+ technicians have new certificates or face installation ban. SUPPLY CHAIN PRESSURE: Aluminum rallies to €3,079/ton (Iran premium), copper extends to €10,449/ton. Nexperia Netherlands-China semiconductor crisis threatens HVAC chip supply. Container rates up 27% from December. Shipping carriers impose emergency fuel surcharges, all Suez transits suspended. CYBERSECURITY: Cyberbeveiligingswet parliamentary debate completed March 23 — Q2 implementation on track. Abutriek (Dutch energy services peer) hit by Qilin ransomware. NEW REGULATION: EU Right-to-Repair directive takes effect July 31, 2026. ISDE confirmed at €511M but GWP>750 refrigerants now excluded — accelerating R290 transition. Vaillant launches R290 ground-source heat pumps for first time.",
    kpis: [
      { label: "TTF Gas Price", value: "€56/MWh", sub: "Steady — storage at 28%, Qatar capacity lost 3-5 years", trend: "negative" },
      { label: "Brent Crude", value: "€99/bbl", sub: "Record monthly surge — Iran war Day 30, no de-escalation", trend: "negative" },
      { label: "ECB Rate", value: "2.15%", sub: "Held — inflation forecast raised to 2.6%, growth cut to 0.9%", trend: "negative" },
      { label: "Consumer Confidence", value: "-30", sub: "CBS March — 4-year low, steepest monthly drop in 4 years", trend: "negative" }
    ],
    sections: [
      {
        title: "Geopolitics & Energy Crisis",
        icon: "🌍",
        items: [
          {
            title: "Iran war Day 30: multi-front conflict with no diplomatic off-ramp — Brent hits €99/bbl",
            sentiment: "negative",
            body: "The US-Israel military campaign against Iran enters its fifth week with no ceasefire in sight. The conflict has expanded to Lebanon (Hezbollah rocket attacks triggered Israeli air campaigns across Beirut, Bekaa Valley) and Gaza. On March 26, Israeli forces killed Iran's top naval commander Alireza Tangsiri. Iran maintains effective control of the Strait of Hormuz through a 'toll booth' system — tanker traffic down 70% from pre-crisis levels. Brent crude has surged to €99/bbl, the steepest monthly rise on record. 20,000 seafarers remain stranded. War-risk insurance has surged from 0.15% to 5-10% of hull value. A 22-nation coalition signed a safe passage statement, but key NATO allies (Germany, Netherlands, France, UK) rejected formal military participation.",
            actie: "Factor continued multi-month Hormuz disruption into ALL business planning. Update heat pump ROI calculators with €56/MWh gas baseline. Position heat pumps as energy independence — 'insulate from global crises.' Stress-test EiH revenue under severe energy shock scenario (gas at €100+/MWh).",
            actieType: "Strategy",
            sourceUrl: "https://www.aljazeera.com/news/2026/3/28/how-the-us-israel-war-on-iran-unfolded-in-its-first-four-weeks",
            mtTags: ["Marketing", "Finance"]
          },
          {
            title: "EU gas storage falls to 28% — below 5-year average as Qatar LNG outage locks in multi-year deficit",
            sentiment: "negative",
            body: "European gas storage stands at just 28% of capacity — below the 5-year historical average for this period. Germany (4 bcm) and the Netherlands (5 bcm) show the most depleted reserves. With Qatar's Ras Laffan facility offline for 3-5 years (17% of global LNG capacity), the EU faces a structural supply crunch heading into the critical summer injection season. Analysts warn that if disruptions persist beyond 3 months, 'a drastic surge in natural gas prices' is inevitable by June-July. Early refilling campaigns are being urged to avoid panic-buying later.",
            actie: "Finance: model EiH margin impact under TTF €80-100/MWh scenarios for Q3-Q4. Marketing: accelerate 'switch now before winter' campaigns — gas price volatility is the strongest heat pump conversion argument since 2022. Customer Ops: proactively reach out to ServiceGemak® customers on gas boilers about upgrade options.",
            actieType: "Finance",
            sourceUrl: "https://www.euronews.com/my-europe/2026/03/26/europes-gas-prices-on-the-brink-as-qatari-lng-flows-stall",
            mtTags: ["Finance", "Marketing", "Customer Ops"]
          },
          {
            title: "OPEC+ confirms output pause — conditional 206K bpd increase planned for April",
            sentiment: "neutral",
            body: "OPEC+ reaffirmed continuation of production cuts totaling 3.66 million bpd through end of 2026. A gradual return of 2.2 million bpd over 18 months starts with 206,000 bpd increase in April, marked 'flexible and conditional on market conditions.' Saudi Arabia and Russia signaled discipline is holding despite the Iran war. If output increases proceed, oil/gas prices may stabilize from current highs. However, any further geopolitical escalation could trigger emergency OPEC meetings to cut again.",
            actie: "Monitor OPEC statements for emergency convocations. If April output increase proceeds, Brent may ease toward €90-95/bbl — slightly easing customer energy cost pressure. No immediate pricing action needed but maintain readiness for rapid ROI calculator updates.",
            actieType: "Finance",
            sourceUrl: "https://oilprice.com/Latest-Energy-News/World-News/OPEC-Reaffirms-Output-Pause-as-Eight-Producers-Cite-Market-Stability.html",
            mtTags: ["Finance"]
          }
        ]
      },
      {
        title: "Supply Chain & Materials",
        icon: "⛓",
        items: [
          {
            title: "Aluminum rallies to €3,079/ton — Iran conflict drives 4-year high",
            sentiment: "negative",
            body: "LME aluminum futures surged to €3,079/ton (peak €3,275/ton), the highest since March 2022. The geopolitical premium from the Iran war and concerns over smelter closures are driving the surge. Aluminum is critical for heat pump heat exchangers, radiators, and control panel housings across all EiH suppliers (Vaillant, Remeha, Intergas). Meanwhile, copper extended its rally to €10,449/ton, supported by energy transition demand for power generation and grid modernization. Both metals are expected to remain elevated through Q2-Q3.",
            actie: "Lock aluminum component pricing with Vaillant, Remeha, and Intergas before Q2 contracts reset. Copper procurement window less favorable than January — consider forward-buying for Q3. Budget +12-15% materials surcharge into all Q2 installation quotes to protect margins.",
            actieType: "Operations",
            sourceUrl: "https://www.lme.com/metals/non-ferrous/lme-aluminium",
            mtTags: ["Finance", "Field Ops", "Product"]
          },
          {
            title: "Container rates up 27% from December — all carriers impose emergency fuel surcharges, Suez suspended",
            sentiment: "negative",
            body: "Shanghai-Rotterdam container rates hit €2,216/40ft (+3% week-over-week, +27% from December 2025). All major carriers (Maersk, CMA CGM, Hapag-Lloyd, MSC) implemented emergency fuel surcharges of €435-870 per container. Maersk suspended all Trans-Suez sailings, rerouting via Cape of Good Hope — adding 10-14 days transit time. Approximately 140 container ships and 460,000-470,000 TEU remain stranded in the Gulf. For EiH, Asia-sourced boiler components, heat pump subassemblies, and electronics face extended lead times and rising costs.",
            actie: "Field Ops: increase safety stock of Asia-sourced parts to 8-week buffer (up from 6). For critical high-value/low-weight items (inverter boards, control units), evaluate air freight. Negotiate freight cap agreements with forwarders before further rate increases. Prioritize European suppliers (Remeha Apeldoorn domestic, Intergas domestic) to avoid Hormuz/Suez exposure.",
            actieType: "Operations",
            sourceUrl: "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry",
            mtTags: ["Field Ops", "Product", "Finance"]
          },
          {
            title: "Nexperia Netherlands-China crisis threatens HVAC semiconductor supply through 2026",
            sentiment: "negative",
            body: "The Nexperia crisis between Netherlands management and China's Ministry of Commerce escalated in March, with China warning of 'another global semiconductor supply chain crisis.' Nexperia China accused Dutch management of disabling office accounts. Nexperia produces power management and drive ICs critical for heat pump compressor controllers. Meanwhile, the broader RAMageddon memory chip shortage persists — DRAM prices up 90-95% quarter-over-quarter as AI data centers consume manufacturing capacity. Smart thermostat and heating controller lead times remain extended at 12-18 weeks.",
            actie: "IT & Data: diversify controller sourcing to alternative suppliers (Infineon, STMicroelectronics) and accelerate qualification of alternate part numbers. Product: offer customers standard (non-smart) control options where smart controllers are backordered. Field Ops: maintain 6-month buffer stock of standard control boards. Communicate 2-4 week extended lead times on smart-capable installations.",
            actieType: "Operations",
            sourceUrl: "https://www.sourceability.com/post/export-controls-on-nexperia-fuel-semiconductor-supply-chain-risk",
            mtTags: ["IT & Data", "Product", "Field Ops"]
          }
        ]
      },
      {
        title: "Heat Pump Market & Policy",
        icon: "🔥",
        items: [
          {
            title: "ISDE subsidy confirmed at €511M for 2026 — but GWP>750 refrigerants now excluded, 'smart' requirement mandatory",
            sentiment: "neutral",
            body: "The Dutch ISDE heating subsidy is confirmed at €511 million for 2026. However, two critical changes: (1) heat pumps using refrigerants with GWP above 750 (including R410a) are no longer eligible — only R290, R32, and other low-GWP options qualify; (2) systems must be 'smart' (remotely controllable for grid congestion management) to access subsidies. Base subsidy reduced from €1,225 to €1,025 for air-to-water systems, but offset by per-kW bonus and €200 A+++ efficiency incentive. The GWP restriction accelerates the R290 transition across the industry.",
            actie: "Product: verify ALL EiH heat pump models meet GWP<750 and smart-readiness requirements for ISDE eligibility. Remove any R410a models from subsidy-eligible quotes. Marketing: update all ISDE subsidy calculators with 2026 amounts. Sales training: ensure all advisors can explain the new 'smart' requirement to customers. Finance: model subsidy reduction impact on customer conversion rates.",
            actieType: "Product",
            sourceUrl: "https://business.gov.nl/subsidies-and-schemes/sustainable-energy-investment-subsidy-isde/",
            mtTags: ["Product", "Marketing", "Finance"]
          },
          {
            title: "Vaillant launches R290 ground-source heat pumps — first time in Dutch market",
            sentiment: "positive",
            body: "Vaillant unveiled a major product expansion at SHK+E 2026 (March 17-20, Essen): the aroTHERM pro (compact, 65°C flow temperature, Q2 launch), aroTHERM perform (15-20 kW for multi-family homes), and — most notably — geoCOMPACT and geoTHERM ground-source heat pumps with R290 refrigerant. This marks Vaillant's first ground-source entry in the Dutch market. The new aroTHERM plus has been redesigned for greater efficiency and quieter operation. Combined with Intergas's Xceed fully-electric model and Remeha's 50,000+ annual hybrid production in Apeldoorn, the Dutch heat pump portfolio is expanding rapidly.",
            actie: "Product: request demo units and pricing for Vaillant aroTHERM pro and geoCOMPACT ground-source. Evaluate ground-source proposition for EiH portfolio — the urban/suburban retrofit segment may benefit. Field Ops: plan R290-specific training for new Vaillant and Intergas models. Marketing: update product comparison materials with new 2026 offerings.",
            actieType: "Product",
            sourceUrl: "https://www.installatietotaal.nl/nieuws/vaillant-onthult-nieuwe-generatie-r290-warmtepompen-voor-2026/",
            mtTags: ["Product", "Field Ops", "Marketing"]
          },
          {
            title: "EU Right-to-Repair directive takes effect July 31, 2026 — warranty extension and spare parts obligations",
            sentiment: "neutral",
            body: "Directive (EU) 2024/1799 launches July 31, 2026 across all EU member states. Key provisions: warranty period extension of 12 months if consumer chooses repair during the statutory 2-year warranty; mandatory repair obligations for specified product categories; manufacturers must provide spare parts and repair documentation for at least 3 years post-warranty; design-for-repairability requirements. While heating systems are not explicitly listed in the first wave, HVAC controllers and smart thermostats may fall under expanded scope in future amendments. A European online repair platform launches by 2027.",
            actie: "Customer Ops: audit all ServiceGemak® warranty terms and spare parts availability commitments against new Right-to-Repair requirements. Prepare spare parts inventory for 3-year post-warranty coverage. Legal review by Q3. Field Ops: document all repair procedures for compliance. This is an OPPORTUNITY — ServiceGemak® is already a repair-first model that aligns with Right-to-Repair philosophy.",
            actieType: "Customer Ops",
            sourceUrl: "https://www.taylorwessing.com/en/insights-and-events/insights/2026/01/pflicht-zur-reparatur-2026",
            mtTags: ["Customer Ops", "Product", "Field Ops"]
          },
          {
            title: "European heat pump sales grow 11% in 2025 — market recovery after 30% Dutch decline in 2024",
            sentiment: "positive",
            body: "European residential heat pump sales grew 11% across 16 countries in 2025, signaling market recovery after the sharp 2024 downturn. The Netherlands saw installations drop 30% in 2024 to 125,000 units (from 179,000 in 2023) following mandate cancellation uncertainty. The Dutch market is valued at €465 million (2025) with forecast growth to €578 million by 2030. Air-source units dominate with 85% market share. The 2026 ban on standalone gas boilers in new buildings and ISDE subsidy continuation provide a demand floor, while the EPBD transposition (May 29 deadline) will drive renovation waves from 2027.",
            actie: "Marketing: use the 11% European recovery narrative in customer conversations — 'the market has turned, early adopters are benefiting.' Target the renovation pipeline from EPBD transposition (worst-performing buildings must be renovated by 2030). Develop a 'renovation-ready' package: hybrid heat pump + insulation assessment + ISDE subsidy application as a single offering.",
            actieType: "Marketing",
            sourceUrl: "https://www.renewableenergymagazine.com/miscellaneous/heat-pump-sales-grew-by-11-percent-20260302",
            mtTags: ["Marketing", "Product"]
          }
        ]
      },
      {
        title: "Workforce & Compliance",
        icon: "👷",
        items: [
          {
            title: "CRITICAL: F-gas/R290 unified certification deadline PASSED Saturday — verify all 200+ technicians NOW",
            sentiment: "negative",
            body: "The March 29, 2026 deadline for the new unified refrigerant certification system has now passed. All old F-gas certificates and natural refrigerant certificates became invalid on Saturday. The new A1/B1 safety certificates are now required — valid until March 11, 2029. For R290 heat pumps (up to 15.4 kg capacity), technicians need an A1 certificate. Any technician without the new unified certificate CANNOT legally work on heat pump installations or ServiceGemak® maintenance involving refrigerants. Non-compliance results in legal liability and immediate installation bans.",
            actie: "HR/Field Ops IMMEDIATE: Run full compliance audit of ALL 200+ technicians' certification status this morning. Any technician without new unified certificate must be temporarily reassigned to non-refrigerant work (boiler-only installations, general maintenance). Contact CRT (Centraal Register Techniek) for emergency certification sessions. Report compliance percentage to Director Schoon by end of day.",
            actieType: "HR",
            sourceUrl: "https://business.gov.nl/amendments/new-certificate-required-for-all-refrigerants/",
            mtTags: ["HR", "Field Ops"]
          },
          {
            title: "Cyberbeveiligingswet parliamentary debate completed — Q2 2026 implementation on track for July 1",
            sentiment: "negative",
            body: "On March 23, the Dutch House of Representatives held a legislative debate on the Cybersecurity Act (Cyberbeveiligingswet) implementing the EU NIS2 directive. The government confirmed simultaneous implementation targeting July 1, 2026. Heating installation companies with 100,000+ household data will likely qualify as 'important entities' requiring enhanced cybersecurity risk-management and incident-reporting within 72 hours. Meanwhile, Abutriek — a Dutch energy services company with a similar profile to EiH — was hit by the Qilin ransomware group on March 5, confirming the sector is under active attack.",
            actie: "IT: develop NIS2 incident response plan before July 1 deadline. Implement MFA across ServiceGemak® platform and field service systems. Conduct security audit of customer database (100,000+ households with address and payment data). Data team: review data classification, implement 72-hour breach notification workflow for NCSC reporting. Budget cybersecurity investments for Q2-Q3.",
            actieType: "IT & Data",
            sourceUrl: "https://www.nctv.nl/actueel/nieuws/2026/03/24/debat-in-tweede-kamer-over-wetsvoorstellen-cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten",
            mtTags: ["IT & Data"]
          },
          {
            title: "VCA certification overhauled 2026 — new sector-neutral model replaces petrochemical-focused system",
            sentiment: "positive",
            body: "SSVV (Dutch examination board) is fundamentally redesigning VCA safety certification in 2026. The old system was heavily rooted in petrochemical industry theory; the new model shifts to sector-neutral, practical, real-world hazard scenarios (construction sites, warehouses). A new VCA Module Gedrag (VCA-MG) is being introduced as a supplementary module. Implementation for educational institutions is delayed to July-September 2026. The more accessible exam content benefits candidate success rates and removes barriers for career switchers (zij-instromers) entering the technical installation sector.",
            actie: "HR: align internal safety training with new VCA sector-neutral standards. Use improved VCA accessibility as a recruitment talking point for zij-instromers. Plan VCA-MG module training for all technicians once available. Field Ops: review on-site safety protocols against new practical assessment criteria.",
            actieType: "HR",
            sourceUrl: "https://bonapi.nl/changes-in-vca-from-2026-the-program-will-be-fully-sector-neutral/",
            mtTags: ["HR", "Field Ops"]
          }
        ]
      },
      {
        title: "Economy & Consumer",
        icon: "📊",
        items: [
          {
            title: "Consumer confidence crashes to -30 — 4-year low with steepest monthly decline since 2022",
            sentiment: "negative",
            body: "Dutch consumer confidence plummeted to -30 in March 2026 (from -24 in February), the lowest since late September 2022 and the steepest single-month decline in four years. Economic climate assessment fell to -54 (from -42). Purchase willingness dropped to -15. Household financial outlook turned negative at -3 (from +1). Rising energy prices from the Middle East conflict directly drove the deterioration. For EiH, depressed confidence poses a headwind for discretionary home service spending — customers may defer heating system upgrades.",
            actie: "Marketing: shift messaging from 'investment' to 'protection against rising costs' — frame heat pumps as defensive, not discretionary. Finance: push ServiceGemak® rental models (€79.50/month heat pump, €37.20/month boiler) as lower-commitment alternatives to capital expenditure. Customer Ops: focus retention — proactively contact at-risk ServiceGemak® customers with value reinforcement. Develop 0% installment plans with ISDE subsidy integration to lower perceived commitment.",
            actieType: "Marketing",
            sourceUrl: "https://www.cbs.nl/en-gb/news/2026/13/dutch-consumer-confidence-continues-to-fall-in-march",
            mtTags: ["Marketing", "Finance", "Customer Ops"]
          },
          {
            title: "Dutch inflation at 2.3% — Middle East conflict could push to 3.0%, ECB warns of possible hike",
            sentiment: "negative",
            body: "Netherlands inflation stands at 2.3% in February 2026, above the eurozone average of 1.9%. The ECB revised its 2026 inflation forecast upward to 2.6% driven by energy costs, while growth was cut to 0.9%. CPB (Dutch economic planning bureau) estimates the Middle East conflict could add 0.6 percentage points, pushing Dutch inflation to ~3.0%. ECB President Lagarde explicitly stated readiness to hike rates 'even if the expected jump is not too persistent.' For EiH customers, sticky inflation erodes purchasing power for heating upgrades while TI CAO wage increases pressure EiH's own labor costs.",
            actie: "Finance: model margin impact of 3% TI CAO wage increase across all 250 employees combined with potential ECB rate hike to 2.40%. Review ServiceGemak® subscription pricing for Q3 — current €8.99-€22.99/month may need inflation-linked adjustment. Push rental models in customer conversations — monthly payments absorb inflation better than lump-sum purchases at rising finance rates.",
            actieType: "Finance",
            sourceUrl: "https://nltimes.nl/2026/03/03/dutch-inflation-rate-steady-24-middle-east-conflict-trigger-new-rise",
            mtTags: ["Finance", "HR", "Marketing"]
          },
          {
            title: "Dutch house prices level off at €490K average — ex-rental properties create upgrade opportunity",
            sentiment: "neutral",
            body: "Average Dutch house transaction price reached €490,000 (CBS/Kadaster March 2026), with growth decelerating from 5.4% to moderate levels. Market activity remains high as landlords exit due to stricter rent regulations, releasing lower-energy-rated properties to first-time buyers at €124,000 discounts in major cities. The pent-up rental supply wave is expected to normalize by July 2026. Mortgage rates stable at 3.50% (1-year NHG). National mortgage guarantee limit increased to €498,200 if used for energy renovations.",
            actie: "Marketing: target the 'just bought ex-rental' segment — new homeowners acquiring low-energy-label properties are prime heat pump conversion candidates. Partner with estate agents and mortgage advisors. Highlight: €498,200 NHG limit for energy renovation mortgages makes heat pump financing accessible. Customer Ops: develop a 'new homeowner welcome' package including energy audit + ISDE subsidy application + ServiceGemak® Compleet quote.",
            actieType: "Marketing",
            sourceUrl: "https://www.dutchnews.nl/2026/03/house-price-rises-level-off-and-more-homes-are-changing-hands/",
            mtTags: ["Marketing", "Customer Ops", "Finance"]
          }
        ]
      },
      {
        title: "Eneco Group & Strategy",
        icon: "🏢",
        items: [
          {
            title: "DEADLINE TOMORROW: Eneco reorganization March 31 — Director Schoon must present EiH positioning paper",
            sentiment: "negative",
            body: "The Eneco Group reorganization reaches its March 31 deadline TOMORROW. 350 positions are being eliminated. CEO Martijn Hagens (started March 1, ex-Vattenfall) has restructured the Management Board — COO-Assets Karen de Lathouder departed, Trading & Flexibility and Assets merged under Kees-Jan Rameau. Eneco has secured a 5-year gas supply deal with Equinor (0.5 bcm annually) and acquired Gulf Gas + Power via ACM approval. For EiH as a separate BV, the critical question remains: which shared Eneco services (IT, Finance, HR) will be affected and what the continuity plan looks like.",
            actie: "Strategy: Director Schoon MUST present the EiH positioning paper to CEO Hagens TODAY. The paper must demonstrate standalone value creation: recurring ServiceGemak® revenue (100,000+ devices), heat pump conversion pipeline, urban market opportunity. Quantify: path to €50M+ revenue with 15%+ EBITDA margin. Finance: prepare standalone P&L with segmented revenue by product. HR: confirm continuity plan for shared services dependencies.",
            actieType: "Strategy",
            sourceUrl: "https://news.eneco.com/martijn-hagens-appointed-as-chief-executive-officer-of-eneco-effective-1-march-2026/",
            mtTags: ["HR", "Finance", "IT & Data"]
          },
          {
            title: "EU launches post-2030 energy efficiency and renewable energy frameworks — policy tailwinds for EiH",
            sentiment: "positive",
            body: "On March 10, the European Commission adopted three major energy initiatives: Small Modular Reactor (SMR) strategy, Clean Energy Investment Strategy to mobilize private capital, and Citizens Energy Package with concrete actions to lower household bills. On March 20, a 12-week public consultation launched on the post-2030 energy efficiency framework (legislative proposal due Q4 2026). The initiatives reflect the EU's pivot toward energy independence driven by the Iran war supply shock. The EU Social Climate Fund (€86.7 billion) is now available for energy efficiency upgrades in vulnerable households.",
            actie: "Strategy: position EiH messaging around EU energy independence — heat pumps are 'strategic national security investments, not just comfort upgrades.' Marketing: develop campaigns leveraging EU Social Climate Fund for lower-income household conversions. Product: prepare for 'renovation-ready' bundled packages (heat pump + insulation + ISDE) aligned with incoming EPBD requirements. Monitor post-2030 framework consultation for sector-specific requirements.",
            actieType: "Strategy",
            sourceUrl: "https://energy.ec.europa.eu/news/post-2030-energy-efficiency-framework-public-consultation-launched-2026-03-20_en",
            mtTags: ["Marketing", "Product"]
          }
        ]
      }
    ],
    priorities: [
      "HR: IMMEDIATE — Verify R290/F-gas unified certification compliance for ALL 200+ technicians (deadline PASSED Saturday March 29). Reassign non-certified technicians to non-refrigerant work. Budget TI CAO 3% wage increase impact across 250 employees. Align internal training with new VCA sector-neutral standards.",
      "IT & Data: Develop NIS2 incident response plan before Cyberbeveiligingswet July 1 enactment. Implement MFA across ServiceGemak® and field service platforms. Security audit of 100,000+ household customer database. Diversify HVAC controller sourcing away from Nexperia dependency (Infineon, STMicroelectronics alternatives).",
      "Finance: Model EiH margins under TTF €80-100/MWh scenarios for Q3-Q4. Budget +12-15% materials surcharge for Q2 installation quotes (aluminum €3,079/ton, copper €10,449/ton). Review ServiceGemak® subscription pricing for inflation-linked Q3 adjustment. Push rental models (€79.50/month) as consumer confidence hits -30.",
      "Customer Ops: Audit all ServiceGemak® contracts against EU Right-to-Repair directive (July 31 deadline). Prepare spare parts inventory for 3-year post-warranty coverage. Proactively contact at-risk customers with value reinforcement amid -30 consumer confidence. Develop 'new homeowner welcome' package for ex-rental property buyers.",
      "Field Ops: Confirm R290/F-gas certification compliance for ALL technicians — reassign non-certified to boiler-only work. Increase Asia-sourced parts safety stock to 8 weeks (shipping +27%, Cape routing +14 days). Maintain 6-month buffer of standard control boards. Plan R290-specific training for new Vaillant aroTHERM pro and Intergas Xceed models.",
      "Product: Verify ALL heat pump models meet ISDE GWP<750 and smart-readiness requirements. Request Vaillant aroTHERM pro and geoCOMPACT ground-source demo units. Remove any R410a models from subsidy-eligible quotes. Evaluate standard (non-smart) controller options to bypass RAMageddon chip delays.",
      "Marketing: Reframe messaging from 'investment' to 'protection against rising costs' — consumer confidence at -30 demands defensive framing. Target 'just bought ex-rental' homeowner segment. Use gas-vs-electricity price wedge (TTF €56/MWh) and EU energy independence narrative. Update all ROI calculators with 2026 ISDE amounts.",
      "Strategy: CRITICAL — Director Schoon presents EiH positioning paper to CEO Hagens TODAY (March 31 deadline TOMORROW). Demonstrate standalone value: ServiceGemak® recurring revenue, heat pump conversion pipeline, urban market opportunity. Position heat pumps as 'strategic national security investments' leveraging EU policy frameworks. Confirm shared services continuity post-reorg."
    ]
  },
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
