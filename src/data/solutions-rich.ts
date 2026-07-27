/**
 * Rich solutions content for EN (verbatim from the official English site,
 * https://www.bigxreality.com/en/solutions — provided directly by the user
 * since this environment cannot fetch bigxreality.com) and JA (translated
 * from that same English text by Claude; not independently sourced from an
 * official Japanese page, which does not exist).
 *
 * This is deliberately a different, richer shape than src/data/solutions.ts
 * (the zh-tw pain-point/capability model) because the source content itself
 * is richer (product-level feature breakdowns + "Specialties"). zh-tw pages
 * are untouched by this file.
 *
 * No English/Japanese content exists for fire-rescue (no equivalent
 * official page) — it is intentionally omitted here, not stubbed.
 */

export type RichSection = {
  heading: string;
  body: string;
};

export type RichSolutionContent = {
  navTitle: string; // Hero H1 / overview card title
  englishLabel: string;
  seoTitle: string;
  seoDescription: string;
  aboutHeading: string;
  aboutBody: string;
  sections: RichSection[];
  specialtiesHeading: string;
  specialties: RichSection[];
};

export const richSolutionOrder = ["military", "police", "smart-city"] as const;
export type RichSolutionSlug = (typeof richSolutionOrder)[number];

export const solutionsOverviewRich: Record<
  "en" | "ja",
  { eyebrow: string; title: string; seoTitle: string; seoDescription: string; intro: string; exploreLabel: string }
> = {
  en: {
    eyebrow: "SOLUTIONS",
    title: "Solutions",
    seoTitle: "Solutions | Big x Reality",
    seoDescription:
      "Big x Reality delivers XR simulation training and virtual-physical integration solutions for military, police, and smart city applications.",
    intro:
      "Big x Reality delivers XR simulation training and virtual-physical integration solutions for military, police, and smart city applications.",
    exploreLabel: "Explore Solution",
  },
  ja: {
    eyebrow: "SOLUTIONS",
    title: "ソリューション",
    seoTitle: "ソリューション｜Big x Reality",
    seoDescription:
      "Big x Realityは、軍事・警察・スマートシティ向けにXRシミュレーション訓練と virtual-physical 統合ソリューションを提供します。",
    intro:
      "Big x Realityは、軍事・警察・スマートシティ向けにXRシミュレーション訓練と仮想・現実統合ソリューションを提供します。",
    exploreLabel: "ソリューションを見る",
  },
};

export const solutionsRich: Record<"en" | "ja", Record<RichSolutionSlug, RichSolutionContent>> = {
  en: {
    military: {
      navTitle: "Military Simulation",
      englishLabel: "MILITARY SIMULATION",
      seoTitle: "Military Simulation Training Solution | Big x Reality",
      seoDescription:
        "Big x Reality's military simulation training system, from individual soldier combat training to army-wide tactical maneuvers, powered by AI XR synthetic battlefield technology.",
      aboutHeading: "About Military Simulation Training System",
      aboutBody:
        "Big x Reality has developed a military simulation training system that caters to a wide range of needs, from individual soldier combat training to tactical manoeuvres involving an entire army. The AI XR Synthetic Battlefield is an application of extended reality (XR) technology to overcome spatial limitations, enabling combat training in remote multi-domain theatres. This system allows roles at all levels, from individual soldiers to commanders, to participate in training simultaneously, it also dramatically lowers the costs involved and improves training effectiveness. To achieve these objectives, Big X Reality has independently developed five major solutions using advanced technologies and has become a pioneer of AI XR synthetic battlefields in Asia.",
      sections: [
        {
          heading: "BXR Weapon Simulator",
          body: "The BXR Weapon Simulator is specifically designed to meet the training needs of military forces on the use of weapons and equipment. By leveraging XR and MR technologies, it delivers high-fidelity training courses that cover a wide range of weapon and equipment operations. These include shooting training of infantry firearms such as machine guns, rifles, as well as short-range firepower for field air defense, for example, mortar observation, Stinger missile launcher, and rocket tracking and firing.",
        },
        {
          heading: "BXR Driving Simulator",
          body: "Big X Reality has developed this driving training system to meet the needs of battlefield driving. It utilizes a multi-axis motion platform and advanced XR technology to simulate training scenarios that are difficult to encounter in normal circumstances, such as Hummer and Speedboats, allowing soldiers to engage in driving simulations across all terrains while enhancing their combat abilities and adaptability in extreme conditions. The system supports multiple soldiers and will not be limited by weather or environmental conditions, and with its highly flexible simulation scenarios, it can fully satisfy various mission requirements.",
        },
        {
          heading: "BXR Wargaming Table",
          body: 'BXR Wargaming Table system is an auxiliary software specifically designed for commanders to practice troop deployment. Using MIL-2525B military symbols, commanders can assess the dynamics of the battlefield and simulate tactics, troop deployment and mission distribution in complex terrains and fast-changing battlefield conditions. Commanders can use the "3D multi-dimensional AI wargaming platform" and significantly improve strategic deployment capabilities through the common operational picture.',
        },
        {
          heading: "BXR CQB Simulator",
          body: "Close Quarters Battle (CQB) is a highly effective training solution specifically designed for special forces. It leverages innovative XR technology to provide multi-user networked simulation training. The simulator offers a variety of closed and complex environments, such as cities, streets, buildings and shopping malls, allowing users to explore these places and engage in live combat simulation drills (e.g. close combat training) in a closed and safe environment.",
        },
        {
          heading: "After Action Review",
          body: "After completing the training course, instructors and trainees can easily access and playback the recordings with a single touch. Instructors can analyze the results from the data and directly guide trainees through a review of the training process. These data, including related ballistic data, environmental parameters, and physiological monitoring data, are stored in the AI XR database. Related big data reference materials are then generated, creating lifelong learning profiles for the trainees.",
        },
      ],
      specialtiesHeading: "Specialties",
      specialties: [
        {
          heading: "Enhance Combat Skills",
          body: "Military simulation leverages virtual reality technology to allow soldiers to train repeatedly in highly realistic environments, improving their proficiency with weapons, vehicles, and tactics. This immersive training approach rapidly boosts soldiers' combat skills, ensuring exceptional performance in real-world scenarios.",
        },
        {
          heading: "Reduce Training Risks",
          body: "Military simulations provide a safe and controlled environment where soldiers can train without the use of live ammunition or physical field operations. This significantly reduces the risk of injury during training while allowing for the simulation of complex scenarios without compromising safety.",
        },
        {
          heading: "Improve Decision-Making Efficiency",
          body: "Through the simulation system, commanders can conduct tactical drills and optimize decision-making processes based on real-time feedback. This training method helps commanders make effective decisions quickly under pressure, enhancing the accuracy and responsiveness of tactical deployments.",
        },
      ],
    },

    police: {
      navTitle: "Police Simulation",
      englishLabel: "POLICE SIMULATION",
      seoTitle: "Police Simulation Training Solution | Big x Reality",
      seoDescription:
        "Big x Reality's Smart XR Police Training System integrates shooting practice, scenario simulation, and multi-person collaborative training for law enforcement.",
      aboutHeading: "About Smart XR Police Training System",
      aboutBody:
        "The Smart Police Duty Simulation Training System is a specialized training solution designed for law enforcement. It integrates shooting practice, diverse scenario simulations, versatile police equipment applications, and multi-person collaborative training, accommodating simultaneous use by multiple trainees. This system enables officers to familiarize themselves with various challenges in realistic scenarios, enhancing their quick response capabilities and decision-making skills. Additionally, with the integration of AI-powered systems, it provides real-time feedback and data monitoring, helping officers gain insights into their performance, adjust strategies promptly, and further improve their ability to handle emergencies effectively.",
      sections: [
        {
          heading: "Training Equipment",
          body: "The Smart Police Simulation Training System is equipped with police gear to enable trainees to practice realistic operations during training sessions. The equipment includes batons, pepper spray canisters, tasers, and handguns. By integrating various training modes, the system helps officers improve their proficiency in handling and utilizing these tools effectively in real-world situations.",
        },
        {
          heading: "Basic Training",
          body: "Basic training focuses on mastering the operation of individual police equipment and enhancing physical coordination. It strengthens professional knowledge and emphasizes the proper use of batons and firearms. Training is conducted progressively, guiding participants step by step. Through repeated practice, officers develop the foundational skills necessary to handle various situations, progressing to advanced training that hones their ability to respond effectively under diverse circumstances.",
        },
        {
          heading: "Advanced Training",
          body: "Advanced training enables trainees to flexibly apply the skills acquired during basic training. Realistic shooting exercises are conducted in simulated environments, focusing on responding to and defending against armed suspects who move unpredictably. Baton training targets suspects exhibiting aggressive behavior, aiming to subdue them with minimal force, prompting compliance. Advanced training enhances the operational proficiency and agility required for effective use of equipment during real-life duties.",
        },
        {
          heading: "De-escalation Training",
          body: "In this training, instructors engage with trainees through role-playing scenarios. Using microphones and direct control over the actions of simulated suspects, instructors create a highly immersive experience. The objective is to train participants on how to interact with tense and emotionally volatile individuals, teaching effective verbal communication techniques to de-escalate conflicts and prevent situations from escalating into violent incidents.",
        },
        {
          heading: "Scenario Simulation Training",
          body: "To enhance trainees' ability to respond in specific situations, this mode presents various pre-set scenarios for simulation training. During these exercises, participants practice maintaining safe distances, selecting appropriate equipment, and transitioning to appropriate levels of force as needed. This training sharpens trainees' ability to control situations flexibly, significantly improving their responsiveness and adaptability during actual field operations.",
        },
        {
          heading: "Course Editor",
          body: "The Smart Police Simulation Training System is a highly flexible tool specifically designed for police training. It allows commanders and instructors to create customized training courses tailored to real-world needs. From scenario design to mission workflows, every aspect can be precisely controlled, enabling targeted instruction and diverse simulations.",
        },
        {
          heading: "After Action Review",
          body: "After completing a training course, the system automatically generates a digital learning record to facilitate training reviews. The learning record includes detailed data from the trainee's performance during the session, as well as physiological monitoring results. This allows instructors to thoroughly evaluate learning progress and refine training strategies to enhance future outcomes.",
        },
      ],
      specialtiesHeading: "Specialties",
      specialties: [
        {
          heading: "Safe and Controlled Training Environment",
          body: "The system offers an immersive and highly realistic training environment, allowing officers to practice tactics and decision-making in a safe and controlled setting, effectively reducing risks during actual duties.",
        },
        {
          heading: "Real-Time Data Analysis and Course Adjustment",
          body: "The system generates training reports, including data on equipment usage, movement trajectory, heart rate, and temperature changes, enabling instructors to adjust training strategies and optimize training effectiveness.",
        },
        {
          heading: "Cost-Effective Training",
          body: "The Smart XR Police Simulation Training System leverages diverse scenario simulations and real-time feedback to help officers become familiar with a wide range of challenging situations. This enhances their rapid response capabilities and decision-making skills while significantly reducing overall training costs.",
        },
      ],
    },

    "smart-city": {
      navTitle: "Smart City",
      englishLabel: "SMART CITY",
      seoTitle: "Smart City Solution | Big x Reality",
      seoDescription:
        "Big x Reality's Digital Twin technology integrates IoT, big data, and AI for smart buildings, intelligent transportation, disaster prevention, and industrial safety.",
      aboutHeading: "About Smart City",
      aboutBody:
        "Digital Twin is an advanced technology that integrates the physical and digital worlds. By leveraging IoT (Internet of Things), big data, and AI (Artificial Intelligence), it precisely virtualizes physical objects and their operational processes in the real world. Digital Twin not only enables real-time integration and analysis of multi-source data but also facilitates efficient real-time monitoring, simulation-based predictions, and intelligent decision support. Its applications span across smart buildings, intelligent transportation, port management, and disaster response, providing 3D visualization and analysis capabilities. This technology helps enterprises enhance operational efficiency, resource allocation, and risk management, driving digital transformation and an intelligent future.",
      sections: [
        {
          heading: "Smart Cities & Buildings",
          body: "Digital Twin technology in smart building management integrates sensor data—such as energy consumption, temperature and humidity, and equipment status—into a virtual model, providing a three-dimensional visualization of both the interior and exterior environments for real-time monitoring and efficient management. Through dynamic monitoring, the technology can rapidly detect equipment anomalies and mark problem locations on heatmaps or models, accelerating the maintenance process. Additionally, Digital Twin can simulate fire or emergency evacuation scenarios to optimize response strategies, while energy data analysis enables precise energy-saving recommendations, promoting environmental sustainability. This technology significantly enhances building management efficiency, strengthens safety measures, and improves energy efficiency, bringing innovative breakthroughs to modern architecture.",
        },
        {
          heading: "Smart Traffic Integration",
          body: "Digital Twin technology is widely applied in intelligent transportation systems, integrating real-time traffic data, vehicle dynamics, and traffic signal statuses to analyze and optimize traffic flow. This technology utilizes three-dimensional visualization to dynamically display the distribution and changes in vehicle flow across different roads and intersections, allowing traffic managers to intuitively monitor traffic conditions and optimize planning. Additionally, it can simulate peak-hour congestion scenarios and, by combining traffic trend predictions, dynamically adjust traffic signal configurations to improve passage efficiency. In terms of incident management, Digital Twin provides real-time visualization of accident locations and surrounding environments, assisting in the rapid development of traffic diversion plans. Furthermore, by integrating multidimensional data such as pedestrian flow, vehicle speed, and signal timing, it offers a comprehensive traffic condition assessment for more precise decision-making support. This technology not only enhances traffic management efficiency but also significantly improves urban traffic flow and safety.",
        },
        {
          heading: "Smart Firefighting Simulation Training",
          body: "The Smart Fire Rescue System integrates cutting-edge Artificial Intelligence (AI) and Extended Reality (XR) technologies, providing innovative solutions to enhance firefighter training and on-site rescue capabilities. Specifically designed to meet the demands of firefighting and emergency response, this system simulates realistic fire and disaster scenarios, helping firefighters master strategies for handling various emergencies effectively.",
        },
        {
          heading: "Smart Airside Driving Simulator",
          body: "Leveraging Extended Reality (XR) technology to meet the training needs of ground crew and vehicle personnel at international airports. By utilizing immersive simulated driving experiences, we provide trainees with a safe and cost-effective virtual training environment. Through intelligent, data-driven, and standardized management approaches, we enhance the quality of employee vocational training and improve corporate operational efficiency.",
        },
        {
          heading: "Smart Disaster Prevention",
          body: "Digital Twin technology plays a crucial role in disaster management by creating virtual environments that integrate multi-source data—such as weather conditions, water levels, terrain, and population distribution—to simulate disaster scenarios and enhance prediction and response capabilities. By utilizing 1:1 three-dimensional disaster scene simulations, it can visually demonstrate the impact of floods on terrain and buildings, providing valuable support for developing precise emergency response plans. During a disaster, the integration of multi-source data within a 3D space clearly displays affected areas, facilitating visual analysis and assisting decision-makers in formulating optimal action plans in real time. Additionally, the virtual environment can be used for emergency response training, allowing personnel to experience realistic disaster scenarios, improving early warning capabilities, and reducing risks and confusion during actual emergency operations. The application of this technology not only enhances the efficiency and accuracy of disaster management but also provides strong support for minimizing disaster-related losses.",
        },
        {
          heading: "Smart Factory",
          body: "Digital Twin technology significantly enhances port operations by integrating AIS vessel data, cargo flow, and equipment performance data into a virtual model. Utilizing three-dimensional visualization, it provides an intuitive display of vessel berthing, container stacking, and crane operations, improving operational transparency and enabling real-time tracking of vessel movements, port entries and exits, berthing, and loading/unloading progress, offering precise support for scheduling. Additionally, 3D visualization of cargo flow and storage location analysis helps optimize logistics routes and storage planning, increasing overall logistics efficiency. Furthermore, by displaying equipment performance data in a 3D environment, the technology can quickly identify abnormal locations of large-scale equipment, reducing troubleshooting time and enhancing maintenance efficiency. This technology not only improves coordination in port operations but also provides strong technical support for achieving intelligent port management.",
        },
        {
          heading: "Smart Sport",
          body: "The XR Shooting Sports Training System is a training solution that integrates Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR) technologies to deliver an immersive shooting experience and diverse scenario environments. This system allows users to feel as if they are truly in the field. Additionally, it provides real-time shooting feedback, including accuracy, speed, and hit rates, along with data recording and analysis. This not only reduces training costs but also makes training more efficient.",
        },
      ],
      specialtiesHeading: "Specialties",
      specialties: [
        {
          heading: "Data Integration",
          body: "Digital Twin technology integrates multi-source data by aggregating IoT devices, sensors, and platform data into a unified system. Through efficient synchronization and transformation, data is processed in real time and visually presented, enabling precise monitoring and analysis.",
        },
        {
          heading: "Simulation and Prediction",
          body: "Digital Twin utilizes virtual modeling and data analysis to simulate real-world operational scenarios and predict future outcomes. This capability helps organizations anticipate various potential situations and enhances decision-making efficiency.",
        },
        {
          heading: "Function Prediction and Operational Analysis",
          body: "Digital twin technology enables governments and enterprises to perform function prediction and operational analysis, facilitating more accurate decision-making and operational optimization.",
        },
        {
          heading: "Visualization Analysis",
          body: "3D visualization analysis presents complex data in an intuitive manner, allowing users to quickly understand anomaly trends and data details. When applied to Digital Twin systems, it provides real-time displays of equipment status and energy consumption, marking abnormal locations to improve management efficiency and accelerate issue resolution.",
        },
      ],
    },
  },

  ja: {
    military: {
      navTitle: "軍事シミュレーション",
      englishLabel: "MILITARY SIMULATION",
      seoTitle: "軍事シミュレーション訓練ソリューション｜Big x Reality",
      seoDescription:
        "Big x Realityの軍事シミュレーション訓練システムは、個人の戦闘訓練から全軍規模の戦術演習まで対応し、AI XR統合戦場技術を活用します。",
      aboutHeading: "軍事シミュレーション訓練システムについて",
      aboutBody:
        "Big x Realityは、個々の兵士の戦闘訓練から全軍規模の戦術行動まで、幅広いニーズに対応する軍事シミュレーション訓練システムを開発しました。AI XR統合戦場（AI XR Synthetic Battlefield）は、拡張現実（XR）技術を応用して空間的制約を克服し、遠隔地・複数領域にまたがる戦闘訓練を可能にするものです。このシステムにより、一般兵士から指揮官まであらゆる階級が同時に訓練へ参加できるほか、コストを大幅に削減しながら訓練効果を高めることができます。これらの目標を達成するため、Big X Realityは先進技術を用いて5つの主要ソリューションを独自に開発し、アジアにおけるAI XR統合戦場のパイオニアとなりました。",
      sections: [
        {
          heading: "BXR 火器シミュレーター",
          body: "BXR 火器シミュレーターは、武器・装備の使用に関する軍の訓練ニーズに応えるために特別に設計されています。XRおよびMR技術を活用し、機関銃やライフルなどの歩兵火器の射撃訓練から、迫撃砲の観測、スティンガーミサイル発射機、ロケットの追尾・発射といった野戦防空用の近距離火力まで、幅広い武器・装備の運用を網羅する高精細な訓練コースを提供します。",
        },
        {
          heading: "BXR 運転シミュレーター",
          body: "Big X Realityは、戦場での運転ニーズに応えるためにこの運転訓練システムを開発しました。多軸モーションプラットフォームと先進のXR技術を活用し、ハンヴィーや高速艇など、通常では体験しにくい訓練シナリオを再現します。これにより兵士はあらゆる地形での運転シミュレーションを行いながら、極限状況下での戦闘能力と適応力を高めることができます。本システムは複数の兵士に対応し、天候や環境条件に左右されず、高い柔軟性を持つシミュレーションシナリオによって多様な任務要件を十分に満たすことができます。",
        },
        {
          heading: "BXR ウォーゲーミングテーブル",
          body: "BXR ウォーゲーミングテーブルは、指揮官が部隊配置を練習するために特別に設計された補助ソフトウェアです。MIL-2525B軍事記号を用いることで、指揮官は複雑な地形や急速に変化する戦場状況において、戦場の動態を評価し、戦術・部隊配置・任務分配をシミュレーションできます。指揮官は「3次元マルチディメンショナルAIウォーゲーミングプラットフォーム」を活用し、共通作戦状況図を通じて戦略的展開能力を大幅に向上させることができます。",
        },
        {
          heading: "BXR CQB シミュレーター",
          body: "近接戦闘（CQB）は、特殊部隊向けに特別に設計された非常に効果的な訓練ソリューションです。革新的なXR技術を活用し、複数人が同時参加できるネットワーク型シミュレーション訓練を提供します。本シミュレーターは、都市、街路、建物、ショッピングモールなど、閉鎖的で複雑な環境を多数用意しており、利用者はこれらの場所を探索しながら、安全な閉鎖環境下で実戦さながらの戦闘シミュレーション訓練（近接戦闘訓練など）を行うことができます。",
        },
        {
          heading: "訓練後レビュー（After Action Review）",
          body: "訓練コース終了後、教官と受講者はワンタッチで記録にアクセスし、再生することができます。教官はデータを分析し、受講者に訓練プロセスの振り返りを直接指導できます。これらのデータ（関連する弾道データ、環境パラメータ、生体モニタリングデータを含む）はAI XRデータベースに保存されます。そこから関連するビッグデータ参考資料が生成され、受講者ごとの生涯学習プロファイルが作成されます。",
        },
      ],
      specialtiesHeading: "特長",
      specialties: [
        {
          heading: "戦闘技能の向上",
          body: "軍事シミュレーションはバーチャルリアリティ技術を活用し、兵士が高い臨場感を持つ環境で繰り返し訓練できるようにすることで、武器・車両・戦術の習熟度を高めます。この没入型の訓練方法により、兵士の戦闘技能は短期間で向上し、実戦でも優れたパフォーマンスを発揮できます。",
        },
        {
          heading: "訓練リスクの低減",
          body: "軍事シミュレーションは、実弾や実際の野外演習を用いることなく、兵士が安全かつ管理された環境で訓練できる場を提供します。これにより訓練中の負傷リスクを大幅に低減しながら、安全性を損なうことなく複雑なシナリオをシミュレーションできます。",
        },
        {
          heading: "意思決定効率の向上",
          body: "シミュレーションシステムを通じて、指揮官はリアルタイムのフィードバックに基づき戦術演習を行い、意思決定プロセスを最適化できます。この訓練方法は、指揮官がプレッシャーの中でも迅速かつ的確な判断を下せるよう支援し、戦術展開の精度と即応性を高めます。",
        },
      ],
    },

    police: {
      navTitle: "警察シミュレーション",
      englishLabel: "POLICE SIMULATION",
      seoTitle: "警察シミュレーション訓練ソリューション｜Big x Reality",
      seoDescription:
        "Big x RealityのスマートXR警察訓練システムは、射撃訓練、シナリオシミュレーション、複数人協同訓練を統合した法執行機関向けソリューションです。",
      aboutHeading: "スマートXR警察訓練システムについて",
      aboutBody:
        "スマート警察勤務シミュレーション訓練システムは、法執行機関向けに設計された専門的な訓練ソリューションです。射撃訓練、多様なシナリオシミュレーション、多用途な警察装備の運用、そして複数人が同時に利用できる協同訓練を統合しています。本システムにより、警察官はリアルな状況下でさまざまな課題に慣れ、即応力と意思決定力を高めることができます。さらに、AIシステムとの統合により、リアルタイムのフィードバックとデータモニタリングを提供し、警察官が自身のパフォーマンスを把握して戦略を迅速に調整し、緊急事態への対応能力をさらに向上させることを支援します。",
      sections: [
        {
          heading: "訓練用装備",
          body: "スマート警察シミュレーション訓練システムには警察装備が備えられており、受講者は訓練中にリアルな操作を練習できます。装備には警棒、催涙スプレー、テイザー、拳銃が含まれます。多様な訓練モードを統合することで、警察官がこれらの器具を実際の状況で効果的に取り扱い、活用する熟練度を高めます。",
        },
        {
          heading: "基礎訓練",
          body: "基礎訓練は、個々の警察装備の操作習熟と身体的な連動性の向上に重点を置きます。専門知識を強化し、警棒と火器の適切な使用を重視します。訓練は段階的に行われ、参加者を一歩ずつ導きます。反復練習を通じて、警察官はさまざまな状況に対応するための基礎スキルを身につけ、多様な状況下で効果的に対応する能力を磨く上級訓練へと進みます。",
        },
        {
          heading: "上級訓練",
          body: "上級訓練では、受講者が基礎訓練で習得したスキルを柔軟に応用できるようにします。シミュレーション環境下でリアルな射撃演習を行い、予測不能な動きをする武装容疑者への対応・防御に焦点を当てます。警棒訓練は攻撃的な行動を示す容疑者を対象とし、最小限の力で制圧し、服従を促すことを目指します。上級訓練により、実務における装備の効果的な運用に必要な操作熟練度と機敏性が高まります。",
        },
        {
          heading: "デエスカレーション訓練",
          body: "この訓練では、教官がロールプレイングシナリオを通じて受講者と関わります。マイクとシミュレートされた容疑者の行動を直接制御することで、教官は非常に没入感の高い体験を作り出します。目的は、緊張し感情的に不安定な人物とどのように関わるかを参加者に訓練し、対立を沈静化し暴力的な事態への発展を防ぐための効果的な言語コミュニケーション技術を教えることです。",
        },
        {
          heading: "シナリオシミュレーション訓練",
          body: "特定の状況への対応力を高めるため、このモードではさまざまな事前設定されたシナリオを用いたシミュレーション訓練を提供します。この演習を通じて、参加者は安全な距離の維持、適切な装備の選択、必要に応じた適切な実力行使レベルへの移行を練習します。この訓練により、受講者は状況を柔軟にコントロールする能力を磨き、実際の現場対応における即応性と適応力を大幅に向上させます。",
        },
        {
          heading: "コースエディター",
          body: "スマート警察シミュレーション訓練システムは、警察訓練専用に設計された非常に柔軟なツールです。指揮官や教官が実際のニーズに合わせたカスタム訓練コースを作成できます。シナリオ設計から任務のワークフローまで、あらゆる側面を精密に制御でき、的を絞った指導と多様なシミュレーションを実現します。",
        },
        {
          heading: "訓練後レビュー（After Action Review）",
          body: "訓練コース終了後、システムは訓練の振り返りを支援するデジタル学習記録を自動生成します。この学習記録には、受講中のパフォーマンスに関する詳細データや生体モニタリング結果が含まれます。これにより教官は学習の進捗を徹底的に評価し、今後の成果を高めるために訓練戦略を改善できます。",
        },
      ],
      specialtiesHeading: "特長",
      specialties: [
        {
          heading: "安全で管理された訓練環境",
          body: "本システムは没入感が高くリアルな訓練環境を提供し、警察官が安全かつ管理された環境で戦術と意思決定を練習できるようにすることで、実務中のリスクを効果的に低減します。",
        },
        {
          heading: "リアルタイムデータ分析とコース調整",
          body: "本システムは、装備の使用状況、動線、心拍数、体温変化などのデータを含む訓練レポートを生成し、教官が訓練戦略を調整して訓練効果を最適化できるようにします。",
        },
        {
          heading: "コスト効率の高い訓練",
          body: "スマートXR警察シミュレーション訓練システムは、多様なシナリオシミュレーションとリアルタイムフィードバックを活用し、警察官が幅広い困難な状況に慣れることを支援します。これにより即応力と意思決定力を高めると同時に、全体の訓練コストを大幅に削減します。",
        },
      ],
    },

    "smart-city": {
      navTitle: "スマートシティ",
      englishLabel: "SMART CITY",
      seoTitle: "スマートシティソリューション｜Big x Reality",
      seoDescription:
        "Big x RealityのデジタルツインはIoT、ビッグデータ、AIを統合し、スマートビル、インテリジェント交通、防災、産業安全に活用されます。",
      aboutHeading: "スマートシティについて",
      aboutBody:
        "デジタルツインは、物理世界とデジタル世界を統合する先進技術です。IoT（モノのインターネット）、ビッグデータ、AI（人工知能）を活用し、現実世界の物理的対象とその稼働プロセスを精密に仮想化します。デジタルツインは多源データのリアルタイム統合・分析を可能にするだけでなく、効率的なリアルタイム監視、シミュレーションに基づく予測、インテリジェントな意思決定支援を実現します。その応用範囲はスマートビル、インテリジェント交通、港湾管理、災害対応など多岐にわたり、3D可視化と分析機能を提供します。この技術は、企業の運用効率、資源配分、リスク管理を高め、デジタルトランスフォーメーションとインテリジェントな未来を推進します。",
      sections: [
        {
          heading: "スマートシティ＆ビル",
          body: "スマートビル管理におけるデジタルツイン技術は、エネルギー消費、温湿度、設備状態などのセンサーデータを仮想モデルに統合し、屋内外環境を三次元で可視化することでリアルタイム監視と効率的な管理を実現します。動的モニタリングにより、設備の異常を迅速に検知し、問題箇所をヒートマップやモデル上に表示することで、保守プロセスを加速します。さらに、デジタルツインは火災や緊急避難のシナリオをシミュレーションして対応戦略を最適化できるほか、エネルギーデータ分析により的確な省エネ提案を行い、環境の持続可能性を促進します。この技術はビル管理の効率を大幅に高め、安全対策を強化し、エネルギー効率を改善することで、現代建築に革新的なブレークスルーをもたらします。",
        },
        {
          heading: "スマート交通統合",
          body: "デジタルツイン技術はインテリジェント交通システムに広く応用されており、リアルタイムの交通データ、車両の動態、信号状態を統合して交通の流れを分析・最適化します。この技術は三次元可視化を活用し、異なる道路や交差点における車両流量の分布と変化を動的に表示することで、交通管理者が交通状況を直感的に把握し、計画を最適化できるようにします。さらに、ピーク時の渋滞シナリオをシミュレーションし、交通トレンド予測と組み合わせることで、信号設定を動的に調整し、通行効率を改善します。事故対応の面では、デジタルツインが事故発生場所と周辺環境をリアルタイムで可視化し、迂回計画の迅速な策定を支援します。加えて、歩行者流量、車両速度、信号タイミングなど多次元データを統合することで、より精密な意思決定支援のための総合的な交通状況評価を提供します。この技術は交通管理の効率を高めるだけでなく、都市の交通流動性と安全性を大幅に改善します。",
        },
        {
          heading: "スマート消防シミュレーション訓練",
          body: "スマート消防救助システムは、最先端のAI（人工知能）とXR（拡張現実）技術を統合し、消防士の訓練と現場救助能力を高める革新的なソリューションを提供します。消防・緊急対応のニーズに応えるべく特別に設計されたこのシステムは、リアルな火災・災害シナリオをシミュレーションし、消防士がさまざまな緊急事態に効果的に対処する戦略を習得することを支援します。",
        },
        {
          heading: "スマート空港エプロン運転シミュレーター",
          body: "拡張現実（XR）技術を活用し、国際空港の地上勤務員および車両運転担当者の訓練ニーズに応えます。没入型のシミュレーション運転体験を通じて、受講者に安全かつコスト効率の高いバーチャル訓練環境を提供します。インテリジェントでデータ駆動型、かつ標準化された管理手法により、従業員の職業訓練の質を高め、企業の運用効率を改善します。",
        },
        {
          heading: "スマート防災",
          body: "デジタルツイン技術は、気象条件、水位、地形、人口分布などの多源データを統合した仮想環境を構築し、災害シナリオをシミュレーションして予測・対応能力を高めることで、災害管理において重要な役割を果たします。1対1の三次元災害現場シミュレーションを活用することで、洪水が地形や建物に与える影響を視覚的に示し、精密な緊急対応計画の策定を支援します。災害発生時には、3D空間内で多源データを統合することで被災地域を明確に表示し、視覚的な分析を促進するとともに、意思決定者がリアルタイムで最適な行動計画を策定するのを支援します。さらに、この仮想環境は緊急対応訓練にも活用でき、担当者がリアルな災害シナリオを体験することで早期警戒能力を高め、実際の緊急対応時のリスクと混乱を軽減します。この技術の応用は、災害管理の効率と精度を高めるだけでなく、災害による損失を最小限に抑えるための強力な支援を提供します。",
        },
        {
          heading: "スマートファクトリー",
          body: "デジタルツイン技術は、AIS船舶データ、貨物の流れ、設備性能データを仮想モデルに統合することで、港湾業務を大幅に強化します。三次元可視化を活用し、船舶の着岸、コンテナの積み上げ、クレーン操作を直感的に表示することで運用の透明性を高め、船舶の動き、入出港、着岸、荷役の進捗をリアルタイムで追跡し、スケジューリングを精密に支援します。さらに、貨物の流れと保管場所の3D可視化分析は、物流ルートと保管計画の最適化に役立ち、全体の物流効率を高めます。また、設備性能データを3D環境で表示することで、大型設備の異常箇所を迅速に特定し、トラブルシューティングの時間を短縮して保守効率を高めます。この技術は港湾業務の連携を改善するだけでなく、インテリジェントな港湾管理の実現に強力な技術的支援を提供します。",
        },
        {
          heading: "スマートスポーツ",
          body: "XR射撃スポーツ訓練システムは、AR（拡張現実）、VR（バーチャルリアリティ）、MR（複合現実）技術を統合し、没入感のある射撃体験と多様なシナリオ環境を提供する訓練ソリューションです。本システムにより、利用者はまるで実際の現場にいるかのような感覚を得られます。さらに、命中精度、速度、命中率などのリアルタイムの射撃フィードバックに加え、データの記録・分析も提供します。これにより訓練コストを削減するだけでなく、訓練の効率も高めます。",
        },
      ],
      specialtiesHeading: "特長",
      specialties: [
        {
          heading: "データ統合",
          body: "デジタルツイン技術は、IoTデバイス、センサー、プラットフォームデータを統合システムに集約することで多源データを統合します。効率的な同期と変換により、データはリアルタイムで処理され、視覚的に表示されることで、精密な監視と分析を可能にします。",
        },
        {
          heading: "シミュレーションと予測",
          body: "デジタルツインは仮想モデリングとデータ分析を活用し、現実の運用シナリオをシミュレーションして将来の結果を予測します。この機能により、組織はさまざまな潜在的状況を事前に把握し、意思決定の効率を高めることができます。",
        },
        {
          heading: "機能予測と運用分析",
          body: "デジタルツイン技術により、政府や企業は機能予測と運用分析を行うことができ、より精密な意思決定と運用最適化を促進します。",
        },
        {
          heading: "可視化分析",
          body: "3D可視化分析は複雑なデータを直感的に提示し、利用者が異常傾向やデータの詳細を迅速に把握できるようにします。デジタルツインシステムに適用することで、設備状態やエネルギー消費をリアルタイムで表示し、異常箇所をマークすることで管理効率を高め、問題解決を加速します。",
        },
      ],
    },
  },
};
