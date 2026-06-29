/* ============================================================================
   David Adelani, Site data
   Edit this file to update people, news, research areas and projects.
   No build step required, just refresh the page.
   ----------------------------------------------------------------------------
   To add a real photo for a person, drop the image in assets/people/
   and set  photo: "assets/people/filename.jpg"
   Without a photo, a clean initials avatar is generated automatically.
   ========================================================================== */

const SITE = {
  labName: "David Adelani",
  tagline: "Multilingual NLP & Speech for the world's languages",
  blurb:
    "We build language and speech technology that works for everyone, with a focus on low-resource and underrepresented languages across Africa, South & South-East Asia, and the Indigenous Americas.",
  pi: {
    name: "David Ifeoluwa Adelani",
    role: "Assistant Professor, School of Computer Science, McGill University",
    affil: "Core Academic Member, Mila · Canada CIFAR AI Chair (2024)",
    email: "david.adelani@mila.quebec",
  },
  location: "Montréal, Québec, Canada",
  links: {
    scholar: "https://scholar.google.com/citations?user=W9sTkS0AAAAJ&hl=en",
    twitter: "https://twitter.com/davlanade",
    github: "https://github.com/dadelani",
    linkedin: "https://www.linkedin.com/in/david-ifeoluwa-adelani-7557b337",
    mila: "https://mila.quebec/en/directory/david-ifeoluwa-adelani",
    source: "https://dadelani.github.io/",
  },
};

/* Multilingual greetings used in the hero animation */
const GREETINGS = [
  "Hello", "Bonjour", "Ẹ n lẹ", "Sannu", "Nnọọ", "Habari", "Sawubona",
  "Molo", "Dumela", "নমস্কার", "नमस्ते", "வணக்கம்", "Olá", "Xin chào",
  "Halo", "你好", "Salaam", "Akwaaba", "Bawo", " سلام",
];

/* Headline numbers (kept conservative & verifiable from the news feed) */
const STATS = [
  { value: 18, suffix: "+", label: "Lab members" },
  { value: 100, suffix: "+", label: "Languages studied" },
  { value: 30, suffix: "+", label: "Papers since 2025" },
  { value: 6, suffix: "", label: "Best-paper awards" },
];

/* Research pillars */
const RESEARCH = [
  {
    icon: "globe",
    title: "Multilingual NLP",
    text:
      "Machine translation, representation learning and evaluation for low-resource languages, closing the gap between high- and low-resource NLP.",
  },
  {
    icon: "wave",
    title: "Speech Processing",
    text:
      "Text-to-speech, ASR, speech translation and Audio LLMs for languages with little or no existing speech data.",
  },
  {
    icon: "eye",
    title: "Vision–Language Models",
    text:
      "Multimodal models that see and reason about culture and context for underrepresented languages and communities.",
  },
  {
    icon: "tune",
    title: "Post-training & Alignment",
    text:
      "Instruction tuning, preference optimization and adaptation methods that make large models genuinely multilingual.",
  },
  {
    icon: "people",
    title: "Participatory Research & Benchmarks",
    text:
      "Open datasets and evaluation suites built hand in hand with native speakers and grassroots communities such as Masakhane, IrokoBench, AfroBench, NaijaVoices and more, that the whole community can build on.",
  },
  {
    icon: "shield",
    title: "AI Safety",
    text:
      "Making multilingual models safe and reliable, red-teaming, harmful-content detection, robustness and trustworthy evaluation for languages and communities often left out of safety research.",
  },
];

/* Selected projects & benchmarks (real outputs referenced in the news feed) */
const PROJECTS = [
  { name: "AfriqueLLM", tag: "Model", note: "Open LLMs adapted for African languages · ACL 2026", url: "https://arxiv.org/abs/2601.06395" },
  { name: "OpenBibleTTS", tag: "Speech", note: "Large-scale TTS resources for 37 low-resource languages", url: "https://arxiv.org/abs/2606.09553" },
  { name: "AfroBench", tag: "Benchmark", note: "How good are LLMs on African languages? · ACL Findings 2025", url: "https://arxiv.org/abs/2311.07978" },
  { name: "IrokoBench", tag: "Benchmark", note: "Reasoning benchmark for African languages · Outstanding Paper, NAACL 2025", url: "https://aclanthology.org/2025.naacl-long.139/" },
  { name: "AfroXLMR", tag: "Model", note: "Multilingual encoder adapted to African languages", url: "https://huggingface.co/Davlan/afro-xlmr-large" },
  { name: "SIB-200", tag: "Benchmark", note: "Topic classification for 200+ languages and dialects · EACL 2024", url: "https://arxiv.org/abs/2309.07445" },
  { name: "SSA-COMET", tag: "Metric", note: "MT evaluation for under-resourced African languages · EMNLP 2025", url: "https://arxiv.org/abs/2506.04557" },
  { name: "MasakhaNER", tag: "Dataset", note: "Named entity recognition for African languages · TACL 2021", url: "https://arxiv.org/abs/2103.11811" },
  { name: "GlobalMMLU", tag: "Benchmark", note: "Cultural & linguistic biases in multilingual evaluation · ACL 2025", url: "https://arxiv.org/abs/2412.03304" },
  { name: "NaijaVoices", tag: "Speech", note: "Large-scale speech data for Nigerian languages · Interspeech 2025", url: "https://arxiv.org/abs/2505.20564" },
];

/* News feed, newest first */
const NEWS = [
  { date: "2026", body: "2 papers accepted at <strong>ACL 2026</strong>: AfriqueLLM and Afri-MCQA." },
  { date: "Mar 2026", body: "We welcome <strong>Dr. Yejin Jeon</strong>, a new postdoc working on speech processing. 🎉" },
  { date: "2026", body: "2 papers accepted at <strong>LREC 2026</strong>: Uhura QA benchmarks and YoNER." },
  { date: "2026", body: "2 papers accepted at <strong>EACL 2026</strong>: MERLIN and AfriMTEB &amp; AfriE5." },
  { date: "Nov 2025", body: "David is named a <strong>Schmidt Sciences AI2050 Early Career Fellow</strong>. 🏆" },
  { date: "2025", body: "1 paper accepted at <strong>IJCNLP-AACL 2025</strong>: Ibom-NLP." },
  { date: "2025", body: "5 papers accepted at <strong>EMNLP 2025</strong>, plus 4 workshop papers (MRL &amp; WMT)." },
  { date: "2025", body: "1 paper accepted at <strong>ASRU 2025</strong>: mSTEB." },
  { date: "2025", body: "2 paper awards at <strong>ACL 2025</strong>: BRIGHTER and SemEval-2025 Task 11. 🏆" },
  { date: "2025", body: "1 paper at <strong>COLM 2025</strong> and the WMDQS workshop: Fleurs-SLU." },
  { date: "2025", body: "1 paper accepted at <strong>Interspeech 2025</strong>: NaijaVoices." },
  { date: "2025", body: "5 papers accepted at <strong>ACL 2025</strong>." },
  { date: "2025", body: "2 paper awards &amp; 4 papers accepted at <strong>NAACL 2025</strong>. 🏆" },
];

/* ---- People -------------------------------------------------------------- *
 * groups render in this order. Each person:
 *   name, role, work (research focus), since, photo?, links{ web, scholar, github, twitter }
 * ------------------------------------------------------------------------- */
const PEOPLE = [
  {
    id: "faculty",
    title: "Faculty",
    members: [
      {
        name: "David Ifeoluwa Adelani",
        role: "Assistant Professor at McGill, Core Academic Member at Mila, Canada CIFAR AI Chair",
        work: "Multilingual NLP and speech processing for low-resource languages.",
        since: "2024–",
        from: "Nigeria",
        photo: "assets/people/david-adelani.png",
        links: { web: "https://dadelani.github.io/", scholar: SITE.links.scholar, github: SITE.links.github, twitter: SITE.links.twitter },
      },
    ],
  },
  {
    id: "postdocs",
    title: "Postdocs",
    members: [
      { name: "Yejin Jeon", role: "Postdoctoral Researcher", work: "Speech processing for underrepresented languages.", since: "2026–", from: "Korea", photo: "assets/people/yejin-jeon.jpg", links: { web: "https://sites.google.com/view/yejin-jeon-130124/about_1" } },
    ],
  },
  {
    id: "phd",
    title: "PhD Students",
    members: [
      { name: "Senyu Li", role: "PhD Student", work: "Multilingual language modelling.", since: "2024–", from: "China", photo: "assets/people/senyu-li.png", links: { web: "https://mila.quebec/en/directory/senyu-li-li" } },
      { name: "Marie Maltais", role: "PhD Student", work: "Low-resource and Indigenous language NLP.", since: "2025–", from: "Canada", photo: "assets/people/marie-maltais.jpg", links: { web: "https://mila.quebec/en/directory/marie-maltais" } },
      { name: "Damaris Stephanie Ndjebayi", role: "PhD Student", work: "NLP for African languages.", since: "2025–", from: "Cameroon", photo: "assets/people/damaris-ndjebayi.jpg", links: { web: "https://mila.quebec/en/directory/damaris-stephanie-ndjebayi" } },
      { name: "David Guzmán Ramírez", role: "PhD Student", work: "Multilingual representation learning.", since: "2025–", from: "Mexico", photo: "assets/people/david-guzman.jpg", links: { web: "https://mila.quebec/en/directory/david-guzman-ramirez" } },
    ],
  },
  {
    id: "msc",
    title: "Masters Students",
    members: [
      { name: "Jessica Ojo", role: "MSc Student", work: "Evaluation of LLMs for African languages.", since: "2024–", from: "Nigeria", photo: "assets/people/jessica-ojo.jpg", links: { web: "https://mila.quebec/en/directory/jessica-ojo" } },
      { name: "Hao Yu", role: "MSc Student", work: "Multilingual machine translation.", since: "2024–", from: "China", photo: "assets/people/hao-yu.jpg", links: { web: "https://mila.quebec/en/directory/peter-yu" } },
      { name: "Henok B. Ademtew", role: "MSc Student", work: "Speech and language technology for low-resource languages.", from: "Ethiopia", photo: "assets/people/henok-ademtew.jpg", links: { web: "https://mila.quebec/en/directory/henok-ademtew" } },
      { name: "Victor Akinode", role: "MSc Student", work: "AI safety, multilingual NLP and LLMs for low-resource languages.", from: "Nigeria", photo: "assets/people/victor-akinode.jpg", links: { web: "https://mila.quebec/en/directory/victor-akinode" } },
    ],
  },
  {
    id: "interns-current",
    title: "Interns",
    members: [
      // Current interns — add summer/fall 2026 interns here.
    ],
  },
  {
    id: "interns-past",
    title: "Past Interns",
    members: [
      { name: "Gaganpreet Jhajj", role: "Intern · MSc, Athabasca University", work: "Multilingual NLP.", since: "Sep–Dec 2025", from: "India" },
      { name: "Jan Christian Blaise Cruz", role: "Intern · PhD, MBZUAI", work: "Low-resource language modelling.", since: "Sep–Dec 2025", from: "Japan", photo: "assets/people/jan-cruz.jpg", links: { web: "https://blaisecruz.com/" } },
      { name: "Yinhan Lu", role: "Intern · Undergrad, McGill", work: "NLP resources & evaluation.", since: "Sep–Dec 2025", from: "Japan", photo: "assets/people/yinhan-lu.jpg", links: { web: "https://mila.quebec/en/directory/yinhan-lu" } },
      { name: "Kosei Uemura", role: "Intern · Undergrad, University of Toronto", work: "Multilingual NLP.", since: "May–Aug 2025", photo: "assets/people/kosei-uemura.jpg", links: { web: "https://mila.quebec/en/directory/kosei-uemura" } },
      { name: "Tianyi Xu", role: "Intern · Undergrad, McGill", work: "Speech processing.", since: "Jan–Oct 2025", from: "Japan", photo: "assets/people/tianyi-xu.jpg", links: { web: "https://mila.quebec/en/directory/tianyi-xu-xu" } },
      { name: "Vivek Verma", role: "Intern · MSc, Université de Montréal", work: "Multilingual modelling.", since: "Jan–Aug 2025", photo: "assets/people/vivek-verma.jpg", links: { web: "https://mila.quebec/en/directory/vivek-verma" } },
      { name: "Jonah Dauvet", role: "Intern · Undergrad, McGill", work: "Language technology.", since: "Jan–Jun 2025", links: { web: "https://mila.quebec/en/directory/jonah-dauvet" } },
      { name: "Sifan Liu", role: "Intern · Undergrad, McGill", work: "NLP evaluation.", since: "Jan–May 2025", links: { web: "https://mila.quebec/en/directory/sifan-liu" } },
      { name: "Virginia Ceccatelli", role: "Intern · McGill, at Mila", work: "AI safety for speech.", since: "Jan–May 2026", photo: "assets/people/virginia-ceccatelli.jpg" },
      { name: "Fabian David Schmidt", role: "Intern · PhD, University of Würzburg", work: "Multilingual & speech representation learning.", since: "Sep–Dec 2024", from: "Germany", links: { web: "https://fdschmidt93.github.io/" } },
    ],
  },
];

/* ---- Alumni -------------------------------------------------------------- *
 * Same shape as PEOPLE. Add an optional `now` field for the person's current
 * position, it renders with a "➡️" arrow, mcgill-nlp style.
 * The Alumni section on people.html stays hidden until this has members.
 * Example:
 *   { title: "PhD Students", members: [
 *       { name: "Jane Doe", role: "PhD, 2021–2025", work: "Machine translation",
 *         now: "Research Scientist, Google DeepMind",
 *         links: { web: "https://example.com" } },
 *   ]},
 * ------------------------------------------------------------------------- */
const ALUMNI = [
  // Add past members here. Until then the Alumni section is not shown.
];

/* Group photos, drop images in assets/photos/ and update src + caption + label */
const GROUP_PHOTOS = [
  { src: "assets/photos/IMG_8309.jpg", label: "2024", caption: "The first members of the group in 2024, when the lab was just getting started, at Mila in Montréal." },
  { src: "assets/photos/IMG_5889.jpg", label: "2025", caption: "The growing team together at Mila, the Québec AI Institute, 2025." },
  { src: "assets/photos/20251205_174904.jpg", label: "December 2025", caption: "Team dinner in Montréal, December 2025." },
];

/* ---- Publications -------------------------------------------------------- *
 * Mirrored from https://dadelani.github.io/publications/ (lab members in bold).
 * Each item: { t: title, u: url, a: authors (HTML), v: venue, award? }
 * ------------------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    year: "2025",
    items: [
      { t: "mSTEB: Massively Multilingual Evaluation of LLMs on Speech and Text Tasks", u: "https://arxiv.org/abs/2506.08400", a: "<strong>Luel Hagos Beyene</strong>, <strong>Vivek Verma</strong>, Min Ma, Jesujoba O. Alabi, <strong>Fabian David Schmidt</strong>, Joyce Nakatumba-Nabende, <strong>David Ifeoluwa Adelani</strong>", v: "ASRU, 2025" },
      { t: "Fleurs-SLU: A Massively Multilingual Benchmark for Spoken Language Understanding", u: "https://arxiv.org/abs/2501.06117", a: "<strong>Fabian David Schmidt</strong>, Ivan Vulić, Goran Glavaš, <strong>David Ifeoluwa Adelani</strong>", v: "COLM, 2025" },
      { t: "The NaijaVoices Dataset: Cultivating Large-Scale, High-Quality, Culturally-Rich Speech Data for African Languages", u: "https://arxiv.org/abs/2505.20564", a: "Chris Emezue, NaijaVoices Community, Busayo Awobade, Abraham Owodunni, Handel Emezue, …, <strong>David Ifeoluwa Adelani</strong>, Chris Pal", v: "Interspeech, 2025" },
      { t: "SemEval-2025 Task 11: Bridging the Gap in Text-Based Emotion Detection", u: "https://arxiv.org/abs/2503.07269", a: "Shamsuddeen Hassan Muhammad, Nedjma Ousidhoum, Idris Abdulmumin, Seid Muhie Yimam, …, <strong>David Ifeoluwa Adelani</strong>, …, Saif M. Mohammad", v: "SemEval Workshop, 2025", award: "Best Task Award 🏆" },
      { t: "AfroBench: How Good are Large Language Models on African Languages?", u: "https://arxiv.org/abs/2311.07978", a: "<strong>Jessica Ojo</strong>, Odunayo Ogundepo, Akintunde Oladipo, Kelechi Ogueji, Jimmy Lin, Pontus Stenetorp, <strong>David Ifeoluwa Adelani</strong>", v: "ACL Findings, 2025" },
      { t: "INJONGO: A Multicultural Intent Detection and Slot-filling Dataset for 16 African Languages", u: "https://arxiv.org/abs/2502.09814", a: "<strong>Hao Yu</strong>, Jesujoba O. Alabi, Andiswa Bukula, Jian Yun Zhuang, En-Shiun Annie Lee, …, Dietrich Klakow, <strong>David Ifeoluwa Adelani</strong>", v: "ACL, 2025" },
      { t: "Warmup Generations: A Task-Agnostic Approach for Guiding Sequence-to-Sequence Learning with Unsupervised Initial State Generation", u: "https://arxiv.org/abs/2502.12304", a: "<strong>Senyu Li</strong>, Zipeng Sun, Jiayi Wang, Xue Liu, Pontus Stenetorp, Siva Reddy, <strong>David Ifeoluwa Adelani</strong>", v: "ACL, 2025" },
      { t: "Global MMLU: Understanding and Addressing Cultural and Linguistic Biases in Multilingual Evaluation", u: "https://arxiv.org/abs/2412.03304", a: "Shivalika Singh, Angelika Romanou, Clémentine Fourrier, <strong>David Ifeoluwa Adelani</strong>, …, Marzieh Fadaee, Beyza Ermis, Sara Hooker", v: "ACL, 2025" },
      { t: "BRIGHTER: BRIdging the Gap in Human-Annotated Textual Emotion Recognition Datasets for 28 Languages", u: "https://arxiv.org/abs/2502.11926", a: "Shamsuddeen Hassan Muhammad, Nedjma Ousidhoum, Idris Abdulmumin, …, <strong>David Ifeoluwa Adelani</strong>, …, Saif M. Mohammad", v: "ACL, 2025", award: "Best Resource Paper Award 🏆" },
      { t: "IrokoBench: A New Benchmark for African Languages in the Age of Large Language Models", u: "https://aclanthology.org/2025.naacl-long.139/", a: "<strong>David Ifeoluwa Adelani</strong>, Jessica Ojo, Israel Abebe Azime, Jian Yun Zhuang, Jesujoba Oluwadara Alabi, …, Pontus Stenetorp", v: "NAACL, 2025", award: "Outstanding Paper Award 🏆" },
      { t: "WorldCuisines: A Massive-Scale Benchmark for Multilingual and Multicultural Visual Question Answering on Global Cuisines", u: "https://aclanthology.org/2025.naacl-long.167/", a: "Genta Indra Winata, Frederikus Hudi, Patrick Amadeus Irawan, David Anugraha, …, <strong>David Ifeoluwa Adelani</strong>, …, Alice Oh, Chong-Wah Ngo", v: "NAACL, 2025", award: "Best Theme Paper Award 🏆" },
      { t: "AfriHate: A Multilingual Collection of Hate Speech and Abusive Language Datasets for African Languages", u: "https://aclanthology.org/2025.naacl-long.92/", a: "Shamsuddeen Hassan Muhammad, Idris Abdulmumin, Abinew Ali Ayele, <strong>David Ifeoluwa Adelani</strong> … et al.", v: "NAACL, 2025" },
      { t: "Does Generative AI speak Nigerian-Pidgin?: Issues about Representativeness and Bias for Multilingualism in LLMs", u: "https://aclanthology.org/2025.findings-naacl.85/", a: "<strong>David Ifeoluwa Adelani</strong>, A. Seza Doğruöz, Iyanuoluwa Shode, Anuoluwapo Aremu", v: "NAACL Findings, 2025" },
    ],
  },
  {
    year: "2024",
    items: [
      { t: "CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark", u: "https://arxiv.org/abs/2406.05967", a: "David Romero, Chenyang Lyu, Haryo Akbarianto Wibowo, Teresa Lynn, …, <strong>David Ifeoluwa Adelani</strong>, …, Alham Fikri Aji", v: "NeurIPS (D&B), 2024" },
      { t: "Voices Unheard: NLP Resources and Models for Yorùbá Regional Dialects", u: "https://arxiv.org/abs/2406.19564", a: "Orevaoghene Ahia, Anuoluwapo Aremu, Diana Abagyan, Hila Gonen, <strong>David Ifeoluwa Adelani</strong>, Daud Abolade, Noah A. Smith, Yulia Tsvetkov", v: "EMNLP, 2024" },
      { t: "Machine Translation Hallucination Detection for Low and High Resource Languages using Large Language Models", u: "https://arxiv.org/abs/2407.16470", a: "Kenza Benkirane, Laura Gongas, Shahar Pelles, Naomi Fuchs, Joshua Darmon, Pontus Stenetorp, <strong>David Ifeoluwa Adelani</strong>, Eduardo Sánchez", v: "EMNLP Findings, 2024" },
      { t: "MINERS: Multilingual Language Models as Semantic Retrievers", u: "https://arxiv.org/abs/2406.07424", a: "Genta Indra Winata, Ruochen Zhang, and <strong>David Ifeoluwa Adelani</strong>", v: "EMNLP Findings, 2024" },
      { t: "AfriMTE and AfriCOMET: Enhancing COMET to Embrace Under-resourced African Languages", u: "https://arxiv.org/abs/2311.09828", a: "Jiayi Wang, <strong>David Ifeoluwa Adelani</strong>, Sweta Agrawal, Marek Masiak, Ricardo Rei, …, Pontus Stenetorp", v: "NAACL, 2024" },
      { t: "SIB-200: A Simple, Inclusive, and Big Evaluation Dataset for Topic Classification in 200+ Languages and Dialects", u: "https://arxiv.org/abs/2309.07445", a: "<strong>David Ifeoluwa Adelani</strong>, Hannah Liu, Xiaoyu Shen, Nikita Vassilyev, Jesujoba O. Alabi, Yanke Mao, Haonan Gao, Annie En-Shiun Lee", v: "EACL, 2024" },
      { t: "ÌròyìnSpeech: A multi-purpose Yorùbá Speech Corpus", u: "https://arxiv.org/abs/2307.16071", a: "Tolulope Ogunremi, Anuoluwapo Aremu, Iroro Orife, <strong>David Ifeoluwa Adelani</strong>", v: "LREC-COLING, 2024" },
      { t: "Mitigating Translationese in Low-resource Languages: The Storyboard Approach", u: "https://aclanthology.org/2024.lrec-main.992/", a: "Garry Kuwanto, Eno-Abasi Urua, …, <strong>David Ifeoluwa Adelani</strong>, Derry Tanti Wijaya and Anietie Andy", v: "LREC-COLING, 2024" },
    ],
  },
  {
    year: "2023",
    items: [
      { t: "Better Quality Pre-training Data and T5 Models for African Languages", u: "https://aclanthology.org/2023.emnlp-main.11/", a: "Akintunde Oladipo, Mofetoluwa Adeyemi, Orevaoghene Ahia, Abraham Toluwase Owodunni, Odunayo Ogundepo, <strong>David Ifeoluwa Adelani</strong>, Jimmy Lin", v: "EMNLP, 2023" },
      { t: "AfriSenti: A Twitter Sentiment Analysis Benchmark for African Languages", u: "https://arxiv.org/abs/2302.08956", a: "Shamsuddeen Hassan Muhammad, Idris Abdulmumin, Abinew Ali Ayele, Nedjma Ousidhoum, <strong>David Ifeoluwa Adelani</strong> et al.", v: "EMNLP, 2023" },
      { t: "XTREME-UP: A User-Centric Scarce-Data Benchmark for Under-Represented Languages", u: "https://arxiv.org/abs/2305.11938", a: "Sebastian Ruder, Jonathan H. Clark, Alexander Gutkin, Mihir Kale, Min Ma, …, <strong>David I. Adelani</strong> et al.", v: "EMNLP, 2023" },
      { t: "AfriQA: Cross-lingual Open-Retrieval Question Answering for African Languages", u: "https://arxiv.org/abs/2305.06897", a: "Odunayo Ogundepo, Tajuddeen R. Gwadabe, Clara E. Rivera, Jonathan H. Clark, Sebastian Ruder, <strong>David Ifeoluwa Adelani</strong> et al.", v: "EMNLP, 2023" },
      { t: "Improving Language Plasticity via Pretraining with Active Forgetting", u: "https://arxiv.org/abs/2307.01163", a: "Yihong Chen, Kelly Marchisio, Roberta Raileanu, <strong>David Ifeoluwa Adelani</strong>, Pontus Stenetorp, Sebastian Riedel, and Mikel Artetxe", v: "NeurIPS, 2023" },
      { t: "MasakhaNEWS: News Topic Classification for African languages", u: "https://arxiv.org/abs/2304.09972", a: "<strong>David Ifeoluwa Adelani</strong>, Marek Masiak, Israel Abebe Azime, Jesujoba O. Alabi, Atnafu Lambebo Tonja, …, and Pontus Stenetorp", v: "IJCNLP-AACL, 2023 & AfricaNLP Workshop 2023", award: "Area Chair Award 🏆" },
      { t: "MasakhaPOS: Part-of-Speech Tagging for Typologically Diverse African Languages", u: "https://arxiv.org/abs/2305.13989", a: "Cheikh M. Bamba Dione, <strong>David Ifeoluwa Adelani</strong>, Peter Nabende, Jesujoba Alabi, Thapelo Sindane, …, and Dietrich Klakow", v: "ACL, 2023" },
      { t: "NollySenti: Leveraging Transfer Learning and Machine Translation for Nigerian Movie Sentiment Classification", u: "https://arxiv.org/abs/2305.10971", a: "Iyanuoluwa Shode, <strong>David Ifeoluwa Adelani</strong>, Jing Peng, and Anna Feldman", v: "ACL, 2023" },
      { t: "BLOOM+1: Adding Language Support to BLOOM for Zero-Shot Prompting", u: "https://arxiv.org/abs/2212.09535", a: "Zheng-Xin Yong, Hailey Schoelkopf, Niklas Muennighoff, Alham Fikri Aji, <strong>David Ifeoluwa Adelani</strong>, …, and Vassilina Nikoulina", v: "ACL, 2023" },
      { t: "Ẹ KU [MASK]: Integrating Yorùbá cultural greetings into machine translation", u: "https://arxiv.org/abs/2303.17972", a: "Idris Akinade, Jesujoba Alabi, <strong>David Ifeoluwa Adelani</strong>, Clement Odoje, and Dietrich Klakow", v: "C3NLP Workshop at EACL, 2023 & AfricaNLP Workshop 2023" },
    ],
  },
  {
    year: "2022",
    items: [
      { t: "The BigScience ROOTS Corpus: A 1.6TB Composite Multilingual Dataset", u: "https://arxiv.org/abs/2303.03915", a: "Hugo Laurençon, Lucile Saulnier, Thomas Wang, Christopher Akiki, …, <strong>David Ifeoluwa Adelani</strong>, …, and Yacine Jernite", v: "NeurIPS, 2022 (Datasets and Benchmarks Track)" },
      { t: "Findings of the WMT'22 Shared Task on Large-Scale Machine Translation Evaluation for African Languages", u: "https://aclanthology.org/2022.wmt-1.72/", a: "<strong>David Ifeoluwa Adelani</strong>, Md Mahfuz Ibn Alam, Antonios Anastasopoulos, Akshita Bhagia, Marta R Costa-jussà, …, Guillaume Wenzek", v: "WMT 2022" },
      { t: "MasakhaNER 2.0: Africa-centric Transfer Learning for Named Entity Recognition", u: "https://arxiv.org/abs/2210.12391", a: "<strong>David Ifeoluwa Adelani</strong>, Graham Neubig, Sebastian Ruder, Shruti Rijhwani, Michael Beukman, …, Dietrich Klakow", v: "EMNLP 2022" },
      { t: "Adapting pre-trained language models to African languages via multilingual adaptive fine-tuning", u: "https://arxiv.org/abs/2204.06487", a: "Jesujoba O. Alabi, <strong>David Ifeoluwa Adelani</strong>, Marius Mosbach, and Dietrich Klakow", v: "COLING, 2022", award: "Best Paper Award (Global Challenges) 🏆" },
      { t: "Few-Shot Pidgin Text Adaptation via Contrastive Fine-Tuning", u: "https://aclanthology.org/2022.coling-1.377/", a: "Ernie Chang, Jesujoba O. Alabi, <strong>David Ifeoluwa Adelani</strong>, and Vera Demberg", v: "COLING, 2022" },
      { t: "TOKEN Is a MASK: Few-shot Named Entity Recognition with Pre-trained Language Models", u: "https://arxiv.org/abs/2206.07841", a: "Ali Davody, <strong>David Ifeoluwa Adelani</strong>, Thomas Kleinbauer, and Dietrich Klakow", v: "TSD, 2022" },
      { t: "BibleTTS: a large, high-fidelity, multilingual, and uniquely African speech corpus", u: "https://arxiv.org/abs/2207.03546", a: "Josh Meyer, <strong>David Ifeoluwa Adelani</strong>, Edresson Casanova, Alp Öktem, Daniel Whitenack, …, Shamsuddeen Muhammad", v: "Interspeech, 2022" },
      { t: "A Few Thousand Translations Go a Long Way! Leveraging Pre-trained Models for African News Translation", u: "https://arxiv.org/abs/2205.02022", a: "<strong>David Ifeoluwa Adelani</strong>, Jesujoba Oluwadara Alabi, Angela Fan, Julia Kreutzer, Xiaoyu Shen, Machel Reid, Dana Ruiter, Dietrich Klakow, … et al.", v: "NAACL, 2022" },
      { t: "MCSE: Multimodal Contrastive Learning of Sentence Embeddings", u: "https://arxiv.org/abs/2204.10931", a: "Miaoran Zhang, Marius Mosbach, <strong>David Ifeoluwa Adelani</strong>, Michael A. Hedderich, and Dietrich Klakow", v: "NAACL, 2022" },
      { t: "NaijaSenti: A Nigerian Twitter Sentiment Corpus for Multilingual Sentiment Analysis", u: "https://arxiv.org/abs/2201.08277", a: "Shamsuddeen Hassan Muhammad, <strong>David Ifeoluwa Adelani</strong>, Sebastian Ruder, Ibrahim Said Ahmad, Idris Abdulmumin, …, Pavel Brazdil", v: "LREC, 2022" },
      { t: "Pre-Trained Multilingual Sequence-to-Sequence Models: A Hope for Low-Resource Language Translation?", u: "https://arxiv.org/abs/2203.08850", a: "En-Shiun Annie Lee, Sarubi Thillainathan, Shravan Nayak, Surangika Ranathunga, <strong>David Ifeoluwa Adelani</strong>, Ruisi Su, and Arya D. McCarthy", v: "ACL, 2022 (Findings)" },
      { t: "Is BERT Robust to Label Noise? A Study on Learning with Noisy Labels in Text Classification", u: "https://arxiv.org/abs/2204.09371", a: "Dawei Zhu, Michael A. Hedderich, Fangzhou Zhai, <strong>David Ifeoluwa Adelani</strong>, and Dietrich Klakow", v: "Insights from Negative Results Workshop at ACL, 2022" },
    ],
  },
  {
    year: "2021",
    items: [
      { t: "Preventing Author Profiling through Zero-Shot Multilingual Back-Translation", u: "https://arxiv.org/abs/2109.09133", a: "<strong>David Ifeoluwa Adelani</strong>, Miaoran Zhang, Xiaoyu Shen, Ali Davody, Thomas Kleinbauer, and Dietrich Klakow", v: "EMNLP, 2021" },
      { t: "MasakhaNER: Named Entity Recognition for African Languages", u: "https://arxiv.org/abs/2103.11811", a: "<strong>David Ifeoluwa Adelani</strong>, Jade Abbott, Graham Neubig, Daniel D'souza, Julia Kreutzer, Constantine Lignos, …, Stephen Mayhew, et al.", v: "TACL, 2021" },
      { t: "The Effect of Domain and Diacritics in Yorùbá-English Neural Machine Translation", u: "https://arxiv.org/abs/2103.08647", a: "<strong>David Ifeoluwa Adelani</strong>, Dana Ruiter, Jesujoba O. Alabi, Damilola Adebonojo, Adesina Ayeni, Mofe Adeyemi, Ayodele Awokoya, and Cristina España-Bonet", v: "MT-Summit, 2021" },
    ],
  },
  {
    year: "2020",
    items: [
      { t: "Estimating community feedback effect on topic choice in social media with predictive modeling", u: "https://arxiv.org/abs/2103.04818", a: "<strong>David Ifeoluwa Adelani</strong>, Ryota Kobayashi, Ingmar Weber, and Przemyslaw A. Grabowicz", v: "EPJ Data Science, 2020" },
      { t: "Transfer Learning and Distant Supervision for Multilingual Transformer Models: A Study on African Languages", u: "https://arxiv.org/abs/2010.03179", a: "Michael A. Hedderich, <strong>David Ifeoluwa Adelani</strong>, Dawei Zhu, Jesujoba Alabi, Udia Markus, and Dietrich Klakow", v: "EMNLP, 2020" },
      { t: "Investigating the Impact of Pre-trained Word Embeddings on Memorization in Neural Networks", u: "https://inria.hal.science/hal-02880590/document", a: "Aleena Thomas, <strong>David Ifeoluwa Adelani</strong>, Ali Davody, Aditya Mogadala, and Dietrich Klakow", v: "TSD, 2020" },
      { t: "Privacy Guarantees for De-identifying Text Transformations", u: "https://arxiv.org/abs/2008.03101", a: "<strong>David Ifeoluwa Adelani</strong>, Ali Davody, Thomas Kleinbauer, and Dietrich Klakow", v: "Interspeech, 2020" },
      { t: "Massive vs. Curated Word Embeddings for Low-Resourced Languages. The Case of Yorùbá and Twi", u: "https://arxiv.org/abs/1912.02481", a: "Jesujoba O. Alabi, Kwabena Amponsah-Kaakyire, <strong>David Ifeoluwa Adelani</strong>, and Cristina España-Bonet", v: "LREC, 2020" },
      { t: "Distant Supervision and Noisy Label Learning for Low Resource Named Entity Recognition: A Study on Hausa and Yorùbá", u: "https://arxiv.org/abs/2003.08370", a: "<strong>David Ifeoluwa Adelani</strong>, Michael A. Hedderich, Dawei Zhu, Esther van den Berg, and Dietrich Klakow", v: "PML4DC & AfricaNLP Workshop at ICLR, 2020" },
      { t: "Improving Yorùbá Diacritic Restoration", u: "https://arxiv.org/abs/2003.10564", a: "Iroro Orife, <strong>David Ifeoluwa Adelani</strong>, Timi Fasubaa, Victor Williamson, Wuraola Fisayo Oyewusi, Olamilekan Wahab, and Kola Tubosun", v: "AfricaNLP Workshop at ICLR, 2020" },
      { t: "Generating Sentiment-Preserving Fake Online Reviews Using Neural Language Models and Their Human- and Machine-based Detection", u: "https://arxiv.org/abs/1907.09177", a: "<strong>David Ifeoluwa Adelani</strong>, Haotian Mai, Fuming Fang, Huy H. Nguyen, Junichi Yamagishi, and Isao Echizen", v: "AINA, 2020" },
    ],
  },
  {
    year: "2019",
    items: [
      { t: "Demographic Inference and Representative Population Estimates from Multilingual Social Media Data", u: "https://arxiv.org/abs/1905.05961", a: "Zijian Wang, Scott A. Hale, <strong>David Ifeoluwa Adelani</strong>, Przemyslaw A. Grabowicz, Timo Hartmann, Fabian Flöck, and David Jurgens", v: "The Web Conference, 2019" },
    ],
  },
  {
    year: "Before 2019",
    items: [
      { t: "Enhancing the reusability and interoperability of artificial neural networks with DEVS modeling and simulation", u: "https://www.worldscientific.com/doi/abs/10.1142/S1793962316500057", a: "<strong>David Ifeoluwa Adelani</strong>, and Mamadou Kaba Traoré", v: "IJMSSC, 2016" },
      { t: "A Secure e-Voting Architecture", u: "https://ieeexplore.ieee.org/abstract/document/5945258", a: "A.S. Sodiya, S.A. Onashoga and <strong>D.I. Adelani</strong>", v: "ITNG, 2011" },
    ],
  },
];

/* ---- Invited talks ------------------------------------------------------- *
 * Mirrored from https://dadelani.github.io/talks/ . { date, t: title, u: url, v: venue, extra? }
 * ------------------------------------------------------------------------- */
const TALKS = [
  {
    year: "2025",
    items: [
      { date: "Oct 10, 2025", t: "Text quality Issues and their Impact on NLP for Low-Resource Languages", u: "https://drive.google.com/file/d/18-SRyHbjlbNXBVYytnJGWIgndNQg9eQ1/view", v: "WMDQS Workshop at COLM 2025" },
      { date: "Jul 29, 2025", t: "INJONGO: A Multicultural Intent Detection and Slot-filling Dataset for 16 African Languages", u: "https://drive.google.com/file/d/1O4g3iiBykRWCiCe8tFg5TofvushzVPTo/view", v: "ACL 2025, Vienna" },
      { date: "Jun 19, 2025", t: "Scaling Multilingual Evaluation of LLMs to Many Languages", u: "https://drive.google.com/file/d/1BX_UqMbwXpqA0fk5r1fjN6i9LILAMQ-l/view", v: "AICan 2025" },
      { date: "May 04, 2025", t: "Scaling Multilingual Evaluation of LLMs to Many Languages", u: "https://drive.google.com/file/d/1ravdpKQkXWtzCRbewDvsHzddckZw8mzF/view", v: "LM4UC Workshop at NAACL 2025, Bloomberg, AI Summer School Morocco, and Princeton" },
      { date: "Apr 29, 2025", t: "IrokoBench: A New Benchmark for African Languages in the Age of Large Language Models (Outstanding Paper)", u: "https://drive.google.com/file/d/1rPfsc5lbKwFTe8zzilo3F9Lyiq5-p-D9/view", v: "NAACL 2025, New Mexico" },
      { date: "Feb 26, 2025", t: "Natural Language Processing for Under-resourced African Languages: The challenges", u: "https://drive.google.com/file/d/1WniDhvJCChEwNEGSiWtywmYw_bPKGVPT/view", v: "AIStellars PAIDeF, Nigeria" },
    ],
  },
  {
    year: "2024",
    items: [
      { date: "Dec 05, 2024", t: "Developing Language Technologies for African and Creole languages", u: "https://drive.google.com/file/d/1KmZu_NaTp3c-fqRX6f0vgjp_BbfkfUKa/view", v: "Bellairs, Barbados 50th Anniversary" },
      { date: "May 03, 2024", t: "How good are Large Language Models on African Languages?", u: "https://www.youtube.com/watch?v=0QfdsEIpmHk", v: "EAAMO MD4SDG", extra: "https://drive.google.com/file/d/1Z9vCbotBDOnxtZx4bjLGTgzZoGnWOqVd/view" },
      { date: "Mar 19, 2024", t: "SIB-200: A Simple, Inclusive, and Big Evaluation Dataset for Topic Classification in 200+ Languages and Dialects", u: "https://drive.google.com/file/d/1bcfs-xxQnbHFvHhl_d-QddgQp-FUDgAv/view", v: "EACL 2024, Malta" },
    ],
  },
  {
    year: "2023",
    items: [
      { date: "Nov 03, 2023", t: "MasakhaNEWS: News Topic Classification for African languages (Area Chair Award)", u: "https://drive.google.com/file/d/16RDyub5ZPTzoIoJns2dCqq7mRQId4gYx/view", v: "IJCNLP-AACL, Bali" },
      { date: "Nov 01, 2023", t: "Social NLP for low-resource languages", u: "https://drive.google.com/file/d/1bMVGYm3xfsm2XuXLN8gYvWbFmtzc0ORw/view", v: "Social NLP Workshop at IJCNLP-AACL, Bali" },
      { date: "Jul 11, 2023", t: "MasakhaPOS: Part-of-Speech Tagging for Typologically Diverse African languages", u: "https://docs.google.com/presentation/d/1v_X5S3Z4HRpznz7QIW2l6UYo7vMSEM6YceBDgChk27A/edit", v: "ACL, Toronto" },
      { date: "Jun 27, 2023", t: "Natural language processing for African languages (PhD Thesis defence)", u: "https://drive.google.com/file/d/1PPoTCibNbHRv30VHbRZQf5-DpKyuf4Np/view", v: "Saarbrücken" },
      { date: "Apr 30, 2023", t: "NLP for under-resourced African languages", u: "https://www.youtube.com/watch?v=IxbSLFgrdpo", v: "AI Saturday Lagos", extra: "https://drive.google.com/file/d/1ZdzIhdAeTBbyU5mCIFu3XodSLVvrENf7/view" },
      { date: "Apr 06, 2023", t: "NLP for under-resourced African languages (Cohere video)", u: "https://www.youtube.com/watch?v=LoVhdsAObBk", v: "CMU, Cohere, McGill, Google DeepMind", extra: "https://drive.google.com/file/d/1BdGK1p4P9c_OvJMYwTypRzoBvRq7KOVS/view" },
    ],
  },
  {
    year: "2022",
    items: [
      { date: "Dec 03, 2022", t: "Cross-lingual Transfer for Named Entity Recognition: A study on African Languages", u: "https://nips.cc/virtual/2022/workshop/50006", v: "TL4NLP Workshop @NeurIPS 2022 (Invited talk)" },
      { date: "Jul 14, 2022", t: "Multilingual Language Model Adaptive Fine-Tuning: A Study on African Languages", u: "https://youtu.be/O5hkG9LGy0U?t=5396", v: "Deeplo Workshop @NAACL 2022 (Invited talk)" },
      { date: "Jul 11, 2022", t: "A Few Thousand Translations Go a Long Way! Leveraging Pre-trained Models for African News Translation", u: "https://underline.io/events/325/sessions/11387/lecture/53889", v: "NAACL 2022 (Oral)" },
    ],
  },
  {
    year: "2021",
    items: [
      { date: "Nov 08, 2021", t: "MasakhaNER: Named Entity Recognition for African Languages", u: "https://youtu.be/0KrSl90NEJg", v: "EMNLP 2021 (Oral)" },
      { date: "Apr 19, 2021", t: "MENYO-20k: A Multi-domain English-Yorùbá Corpus for Machine Translation and Domain Adaptation", u: "https://www.youtube.com/watch?v=rRUTv3FrcAA", v: "AfricaNLP Workshop @EACL 2021" },
      { date: "Apr 19, 2021", t: "MasakhaNER: Named Entity Recognition for African Languages", u: "https://www.youtube.com/watch?v=h-X6gMz-fjk", v: "AfricaNLP Workshop @EACL 2021" },
      { date: "Mar 26, 2021", t: "MasakhaNER: Named Entity Recognition for African Languages", u: "https://www.youtube.com/watch?v=F58M3qojxK4", v: "LTI Colloquium, CMU" },
    ],
  },
  {
    year: "2020",
    items: [
      { date: "Oct 29, 2020", t: "Privacy guarantees for de-identifying text transformation", u: "https://www.youtube.com/watch?v=DHoIUtEJ7oM", v: "Interspeech 2020" },
      { date: "Sep 23, 2020", t: "Development of NLP datasets and models for African Languages", u: "https://www.youtube.com/watch?v=A_9clZ40f1c", v: "NLP with Friends" },
      { date: "Jul 07, 2020", t: "Sentiment Preserving Fake Reviews", u: "https://dataskeptic.com/blog/episodes/2020/sentiment-preserving-fake-reviews", v: "Data Skeptic" },
      { date: "Jul 03, 2020", t: "Ensuring good text quality in African Language Datasets", u: "https://cloud.dfki.de/owncloud/index.php/s/tZHbPK4F4F4QEWf", v: "AI4D Africa Webinar Series" },
      { date: "Apr 26, 2020", t: "Improving Yorùbá Diacritic Restoration", u: "https://slideslive.com/38926599/improving-yoruba-diacritic-restoration", v: "AfricaNLP Workshop @ICLR 2020" },
      { date: "Apr 26, 2020", t: "Distant Supervision and Noisy Label Learning for Low Resource NER: A Study on Hausa and Yorùbá", u: "https://slideslive.com/38926600/distant-supervision-and-noisy-label-learning-for-low-resource-named-entity-recognition-a-study-on-hausa-and-yoruba", v: "AfricaNLP Workshop @ICLR 2020" },
    ],
  },
];
