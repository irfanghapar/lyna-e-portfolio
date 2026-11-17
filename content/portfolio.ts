/*
  All the words on the site live in this file.

  To add an instructional video: paste the YouTube link into `videoUrl`
  for that entry (any normal YouTube link works).

  To add a photo: put the image in /public (for example /public/lyna.jpg)
  and set `photo: "/lyna.jpg"` below.
*/

export const site = {
  title: "Lyn's learning",
  owner: "Norazlyna",
  role: "Future Biology teacher",
  programme: "Bachelor of Science Education (Hons.) Biology",
  university: "Universiti Teknologi MARA (UiTM), Selangor Branch, Puncak Alam Campus",
  course: "EDU456 Innovative Technologies for Teaching and Learning",
  courseCode: "EDU456",
  classGroup: "ED247",
  photo: "/about/lyna.jpg",
  welcome:
    "This e-portfolio looks at five digital platforms I can use to teach Biology. For each one I explain what it does, weigh up how well it supports learning, show how to set it up, and plan a Biology lesson around it.",
  about: [
    "My name is Norazlyna and I am studying for a Bachelor of Science Education (Hons.) Biology at UiTM Puncak Alam. As a future Biology educator, I aim to integrate innovative digital technologies into teaching to create engaging, interactive and meaningful learning experiences for students.",
    "Biology is full of things students cannot easily see: organelles, enzymes, the stages of cell division. I am interested in digital tools because they give me more ways to make those ideas visible, to check what students understand, and to keep a class of teenagers involved.",
    "I built this e-portfolio for EDU456. I chose platforms that do different jobs in a lesson, so that together they cover classroom management, vocabulary, practice, revision and seeing structures in 3D.",
  ],
  education: [
    {
      stage: "Primary education",
      years: "2010 to 2015",
      place: "SK St. Monica",
      detail: "I completed my primary education at SK St. Monica, where I studied from Year 1 to Year 6.",
      image: "/education/sk-st-monica.jpg",
      alt: "The SK St. Monica school building.",
      width: 960,
      height: 640,
    },
    {
      stage: "Secondary education",
      years: "2016 to 2021",
      place: "SM Sung Siew",
      detail:
        "I continued my secondary education at SM Sung Siew as a Science Stream student. During this period I completed the Pentaksiran Tingkatan 3 (PT3) examination in 2018 and the Sijil Pelajaran Malaysia (SPM) examination in 2021, taking nine subjects.",
      image: "/education/sm-sung-siew.jpg",
      alt: "The front gate of SM Sung Siew in Sandakan.",
      width: 960,
      height: 640,
    },
    {
      stage: "Diploma",
      years: "2022 to 2025",
      place: "Universiti Pendidikan Sultan Idris (UPSI)",
      detail:
        "I was awarded a Diploma in Science from Universiti Pendidikan Sultan Idris after completing five semesters of academic study and one semester of industrial internship.",
      image: "/education/upsi.jpg",
      alt: "An aerial view of the entrance arch at Universiti Pendidikan Sultan Idris.",
      width: 960,
      height: 592,
    },
    {
      stage: "Bachelor's degree",
      years: "2025 to 2029",
      place: "Universiti Teknologi MARA (UiTM), Puncak Alam Campus",
      detail: "I am currently pursuing a Bachelor of Science Education (Hons.) Biology at UiTM Selangor, Puncak Alam Campus.",
      image: "/education/uitm.jpg",
      alt: "The entrance sign of Universiti Teknologi MARA, Puncak Alam Campus.",
      width: 678,
      height: 452,
    },
  ],
};

export type Step = { title: string; detail: string };

export type Entry = {
  slug: string;
  name: string;
  tagline: string;
  job: string;
  accent: string;
  icon: "badge" | "cards" | "puzzle" | "map" | "cube";
  topic: string;
  videoUrl: string;
  facts: { label: string; value: string }[];
  description: {
    purpose: string[];
    features: { name: string; detail: string }[];
    operation: string[];
    use: string[];
  };
  evaluation: {
    strategies: string[];
    engagement: string[];
    advantages: string[];
    limitations: string[];
    impact: string[];
  };
  guide: {
    access: Step[];
    create: Step[];
    classroom: Step[];
  };
  showcase?: {
    title: string;
    intro: string;
    images: { src: string; alt: string; caption: string; width: number; height: number }[];
  };
  analysis: {
    why: string[];
    lesson: {
      title: string;
      level: string;
      duration: string;
      objective: string;
      flow: { phase: string; time: string; detail: string }[];
    };
    concepts: { name: string; detail: string }[];
    reflection: string[];
  };
  sources: { label: string; url: string }[];
};

export const entries: Entry[] = [
  {
    slug: "classdojo",
    name: "ClassDojo",
    tagline: "Feedback on lab skills, and a class story that families can follow",
    job: "Managing the class",
    accent: "#1c7a54",
    icon: "badge",
    topic: "Enzyme experiments and laboratory skills",
    videoUrl: "",
    facts: [
      { label: "Cost", value: "Free for teachers" },
      { label: "Works on", value: "Web browser, iOS and Android" },
      { label: "Students join with", value: "A class code, QR code or link" },
      { label: "Best lesson stage", value: "Practical work and group tasks" },
    ],
    description: {
      purpose: [
        "ClassDojo is a free classroom communication and management app that connects teachers, students and families. Its purpose is to make classroom expectations visible. The teacher decides which skills matter in the class, gives feedback whenever students show them, and shares what the class is doing with families.",
        "It does not deliver subject content. Its role is to support the routines and behaviour that make content lessons run well, which matters a great deal in a Biology laboratory.",
      ],
      features: [
        {
          name: "Points",
          detail:
            "The teacher creates a list of skills, such as teamwork or handling apparatus safely, and awards a point to a student, a group or the whole class with one tap. Skills can be positive or marked as needing work.",
        },
        {
          name: "Class Story",
          detail:
            "A private feed, visible only to the class and connected families, where the teacher posts photos, videos, files and announcements.",
        },
        {
          name: "Portfolios",
          detail:
            "Students respond to an activity by submitting a photo, video, drawing or journal entry. The teacher approves each post before families can see it.",
        },
        {
          name: "Messages",
          detail:
            "Private messaging between teacher and families, with automatic translation, so the teacher does not need to share a personal phone number.",
        },
        {
          name: "Teacher toolkit",
          detail:
            "Small classroom tools including a timer, a random student selector, a group maker, a noise meter and attendance.",
        },
        {
          name: "Reports",
          detail:
            "A record of the points each student and the class have received over time, which can be filtered by date and shared with parents.",
        },
      ],
      operation: [
        "The teacher creates a class, adds the students' names and each student receives an avatar. During a lesson the teacher keeps the class open on a projected screen or on a phone and awards points as they happen. Students log in with a class code or QR code to see their own feedback and to post to their portfolio. Families join through an invitation and see only their own child's information.",
      ],
      use: [
        "In teaching and learning, ClassDojo is most useful wherever the process is as important as the answer: practical sessions, group projects and discussions. It also works as a simple channel for sharing lesson evidence with parents.",
      ],
    },
    evaluation: {
      strategies: [
        "ClassDojo supports positive reinforcement and clear success criteria. Because the teacher writes the skill list, the criteria can match the lesson exactly. In a practical lesson I can replace the default skills with ones such as \"labels apparatus correctly\" and \"records data in a table\", so students know what good laboratory work looks like before they start.",
        "The group feature supports cooperative learning, since points can be given to a whole lab group. Portfolios support formative assessment because students must show and explain their work, not only complete it.",
      ],
      engagement: [
        "Feedback is immediate and visible, which keeps students aware of how they are working during a long practical. The avatars and sound effects add some fun. The portfolio gives quieter students another way to take part, because they can explain a result in a recording instead of in front of the class.",
      ],
      advantages: [
        "It is free for teachers and takes only a few minutes to set up.",
        "Points can be given from one teacher device, so the class does not need a device for every student.",
        "The skill list is fully customisable, so it can describe scientific skills and attitudes, not only general behaviour.",
        "Portfolios keep a dated record of practical work that can be used as evidence for school-based assessment.",
        "Families can follow what happens in the laboratory, which is normally hidden from them.",
      ],
      limitations: [
        "It was designed mainly for primary pupils. The cartoon style can feel childish to Form 4 and Form 5 students, although ClassDojo has started adding a simpler interface and features for older students.",
        "Points are an extrinsic reward. If they are displayed publicly or used to punish, they can embarrass students and shift attention from learning to collecting points.",
        "It rewards behaviour, not understanding. There are no quizzes or content tools, so it must be paired with another platform for assessment.",
        "Posting photos or videos of students requires consent and care with privacy.",
        "It only works if the teacher uses it consistently, which adds one more task during a busy practical.",
      ],
      impact: [
        "The impact on learning is indirect but real. Less time is lost to unsafe or off-task behaviour, so more of the lesson is spent on the experiment. When the points describe scientific skills, students also practise those skills more deliberately. The portfolio encourages reflection, because students have to look back at their results and put them into words.",
      ],
    },
    guide: {
      access: [
        {
          title: "Open ClassDojo",
          detail: "Go to classdojo.com in a browser, or install the ClassDojo app on a phone or tablet.",
        },
        {
          title: "Create a teacher account",
          detail: "Choose Teacher, then sign up with an email address. Search for your school and join it, or skip this step for now.",
        },
        {
          title: "Add a class",
          detail: "Create a new class, give it a clear name such as \"4 Mawar Biology\" and select the year level.",
        },
        {
          title: "Add students",
          detail: "Type the students' names or paste the whole class list. Each student is given an avatar automatically.",
        },
        {
          title: "Invite students and families",
          detail: "Share the class code, QR code or link with students. Send family invitations by link or print the invitation letters.",
        },
      ],
      create: [
        {
          title: "Rewrite the skills",
          detail:
            "Open the class settings and edit the skills. Remove the defaults and add Biology laboratory skills, for example \"wears goggles\", \"measures accurately\", \"records data in a table\" and \"cleans the bench\".",
        },
        {
          title: "Set up lab groups",
          detail: "Create groups that match the seating in the laboratory, so one tap gives feedback to a whole group.",
        },
        {
          title: "Post the pre-lab briefing",
          detail: "On Class Story, post the aim of the experiment, the safety rules and a photo of the apparatus set-up so students can read it before the lesson.",
        },
        {
          title: "Create a portfolio activity",
          detail:
            "In Portfolios, create an activity, write the instruction (for example \"Upload a photo of your results table and explain the pattern in two sentences\"), choose the response type and assign it to the class.",
        },
      ],
      classroom: [
        {
          title: "Start the lesson with the criteria",
          detail: "Project the class screen and read through the skills you will be looking for today.",
        },
        {
          title: "Give feedback during the practical",
          detail: "Walk around with a phone and award points to groups when you see a skill. Use the timer for timed steps such as incubation.",
        },
        {
          title: "Collect evidence",
          detail: "Before packing up, each group submits its results to the portfolio activity.",
        },
        {
          title: "Close the loop",
          detail: "Approve and comment on the submissions, post one good example to Class Story, and check the weekly report to see which skills need more practice.",
        },
      ],
    },
    analysis: {
      why: [
        "Biology is a practical subject. The curriculum expects students to carry out experiments and to develop science process skills, manipulative skills and scientific attitudes. These are difficult to assess with a written test, and in a normal lesson they are rarely mentioned at all.",
        "ClassDojo suits Biology because it lets me name those skills and respond to them in the moment. A student who reads a measuring cylinder at eye level gets recognised for exactly that. Over a term, the report shows me which skills the class has mastered and which ones I have not been teaching clearly enough.",
      ],
      lesson: {
        title: "The effect of temperature on enzyme activity",
        level: "Form 4, Metabolism and enzymes",
        duration: "80 minutes (double period)",
        objective: "Students carry out the experiment safely in groups and explain how temperature affects the rate of an enzyme-controlled reaction.",
        flow: [
          {
            phase: "Briefing",
            time: "10 min",
            detail: "Project the class and introduce four skills for today: wears goggles, measures accurately, records data in a table, works as a team.",
          },
          {
            phase: "Experiment",
            time: "45 min",
            detail: "Groups test amylase at different temperatures. I circulate and award group points for the four skills, and use the timer for each water bath.",
          },
          {
            phase: "Evidence",
            time: "15 min",
            detail: "Each group uploads a photo of its results table to the portfolio and records a short explanation of the pattern.",
          },
          {
            phase: "Discussion",
            time: "10 min",
            detail: "I show two portfolio posts on the screen and the class compares the results and suggests why they differ.",
          },
        ],
      },
      concepts: [
        {
          name: "Positive reinforcement",
          detail:
            "In Skinner's operant conditioning, behaviour that is followed by a positive consequence is more likely to be repeated. A point given at the moment a student works safely strengthens that habit.",
        },
        {
          name: "Formative assessment",
          detail:
            "The portfolio gives me evidence of understanding during the unit, while there is still time to respond to it, instead of only at the end.",
        },
        {
          name: "Cooperative learning",
          detail: "Group points create shared responsibility, because the group succeeds only when every member follows the procedure.",
        },
      ],
      reflection: [
        "The main risk I see is that points become the goal. To avoid this I would reward the process, such as careful measuring, and never the correct result, because an unexpected result is still good science if it was recorded honestly. I would also give points to groups more often than to individuals, and I would not display a ranking.",
        "I would treat ClassDojo as a scaffold. Early in the year it helps establish laboratory routines. Once those routines are habits, I would use the points less and keep the portfolio, which I think has the longer-lasting value.",
      ],
    },
    sources: [{ label: "ClassDojo official site", url: "https://www.classdojo.com/" }],
  },
  {
    slug: "quizlet",
    name: "Quizlet",
    tagline: "Flashcards, practice modes and a live team game from one set of terms",
    job: "Learning the vocabulary",
    accent: "#3d3fb5",
    icon: "cards",
    topic: "Cell structure and function",
    videoUrl: "",
    facts: [
      { label: "Cost", value: "Free with limits; Quizlet Plus is paid" },
      { label: "Works on", value: "Web browser, iOS and Android" },
      { label: "Students join with", value: "A link to the set, or a game code for Quizlet Live" },
      { label: "Best lesson stage", value: "Before the lesson and for revision" },
    ],
    description: {
      purpose: [
        "Quizlet is a study platform built around the study set, a list of terms paired with definitions. Its purpose is to help learners memorise and recall information. The teacher or student enters the content once, and Quizlet turns the same set into several different ways to study.",
      ],
      features: [
        {
          name: "Flashcards",
          detail: "Digital cards that flip between term and definition. Cards can include images and audio.",
        },
        {
          name: "Learn",
          detail: "An adaptive mode that repeats the terms a student gets wrong and gradually moves from multiple-choice to written answers.",
        },
        {
          name: "Test",
          detail: "Generates a practice test from the set, mixing true or false, multiple-choice, matching and written questions.",
        },
        {
          name: "Match",
          detail: "A timed game in which students pair terms with definitions as fast as they can.",
        },
        {
          name: "Diagrams",
          detail: "An image with labelled points. Students identify each point, which suits labelled biological drawings.",
        },
        {
          name: "Quizlet Live",
          detail:
            "A classroom game hosted by the teacher, in which students race to match terms and definitions. Classic Live can be played in teams or individually, and it also works with diagram sets.",
        },
        {
          name: "Classes and folders",
          detail: "Sets can be grouped by chapter and shared with a class through one link.",
        },
      ],
      operation: [
        "The teacher creates a study set or copies and edits an existing public one. Students open the shared link on a phone or computer and choose a study mode. They work at their own pace and see straight away whether each answer is correct.",
        "In class, the teacher starts Quizlet Live from the Quizlet website and students join with a code or QR code. In teams mode, each team member sees different answer options and only one of them has the correct answer, so the team has to talk. A wrong answer sends the team back to zero, which rewards accuracy over speed.",
      ],
      use: [
        "Quizlet fits any part of teaching that depends on accurate recall: learning new terms before a lesson, quick checks at the start of a lesson, and revision before a test.",
      ],
    },
    evaluation: {
      strategies: [
        "Quizlet supports retrieval practice, where students strengthen memory by recalling information instead of rereading it. It also supports a flipped approach: if students learn the key terms at home, I can use class time for explanation and application.",
        "Quizlet Live in teams mode is a ready-made cooperative learning activity. Played in individuals mode, it works as a fast formative check, because I can watch which terms slow the class down.",
      ],
      engagement: [
        "The game modes turn repetition, which students usually find boring, into a short challenge. Quizlet Live is especially engaging because students have to get up, sit with a random team and communicate. Students who are shy in whole-class questioning often take part more in a small team.",
      ],
      advantages: [
        "A set takes minutes to make and can be reused every year.",
        "One set gives students several study modes, so they can choose the one that suits them.",
        "It works well on phones, which most secondary students have.",
        "Cards can combine a term with an image, which helps with structures such as organelles.",
        "There is a very large library of public sets to copy and adapt.",
        "Teachers can host Quizlet Live on a free account.",
      ],
      limitations: [
        "The free plan has become more restricted. Learn and Test are capped, there are advertisements, and features such as uploading your own images and tracking student progress belong to the paid plans.",
        "It trains recall. On its own it does not develop the explaining, applying and evaluating that higher-order (KBAT) questions demand.",
        "Public sets vary in quality. Some contain errors or use terms that differ from the Malaysian textbook.",
        "Quizlet Live needs one device per student or pair and a stable connection, and it can only be started from the website.",
        "Students can become fast at matching words without understanding them.",
      ],
      impact: [
        "For a vocabulary-heavy subject, the likely impact is better recall of terms and definitions and more confident use of scientific language. That foundation makes later explanation easier. The impact on deeper understanding depends on what the teacher does next, because knowing the word \"mitochondrion\" is not the same as explaining why muscle cells need so many of them.",
      ],
    },
    guide: {
      access: [
        {
          title: "Open Quizlet",
          detail: "Go to quizlet.com in a browser.",
        },
        {
          title: "Sign up as a teacher",
          detail: "Create an account with your email address and identify yourself as a teacher. This is what allows you to host Quizlet Live.",
        },
        {
          title: "Create a class (optional)",
          detail: "Create a class for each group you teach and share the join link, so all your sets appear in one place for students.",
        },
      ],
      create: [
        {
          title: "Start a new set",
          detail: "Select Create and choose a flashcard set.",
        },
        {
          title: "Name it clearly",
          detail: "Use a title students can search for, such as \"Form 4 Biology: Cell structure and function\", and add a short description.",
        },
        {
          title: "Enter terms and definitions",
          detail:
            "Type one term and its definition on each card, in the textbook's wording. To save time, use the import option and paste a two-column list from a document or spreadsheet.",
        },
        {
          title: "Add images",
          detail: "Add a picture to cards where a visual helps, for example a micrograph of each organelle.",
        },
        {
          title: "Save and share",
          detail: "Set who can see the set, create it, then copy the link or add it to your class.",
        },
      ],
      classroom: [
        {
          title: "Assign it before the lesson",
          detail: "Ask students to go through the flashcards and play Match once at home.",
        },
        {
          title: "Open the set and select Live",
          detail: "On the Quizlet website, open the set, select Live and choose Classic Live.",
        },
        {
          title: "Choose teams",
          detail: "Select random teams and decide whether students see the term or the definition as the prompt.",
        },
        {
          title: "Let students join",
          detail: "Students go to the join page on their phones and enter the code, or scan the QR code. Create the game once everyone has joined.",
        },
        {
          title: "Play, then review",
          detail: "Start the game. When a team wins, go through the terms the class missed most often and reteach them before playing a second round.",
        },
      ],
    },
    analysis: {
      why: [
        "Biology has more technical vocabulary than almost any other school subject. A single chapter on the cell introduces a dozen organelles, each with a name, a structure and a function. Students who do not know the words cannot follow the explanation, so the vocabulary has to come first.",
        "Quizlet suits this because structure and function pairs fit the term and definition format naturally, and images can sit beside the words. It is also useful in classes that learn science in English under the Dual Language Programme, since a card can carry the English term with a Bahasa Melayu explanation.",
      ],
      lesson: {
        title: "Organelles and their functions",
        level: "Form 4, Cell biology and organisation",
        duration: "60 minutes, plus 15 minutes at home",
        objective: "Students name the main organelles of plant and animal cells, state the function of each, and relate organelle density to the function of a specialised cell.",
        flow: [
          {
            phase: "At home",
            time: "15 min",
            detail: "Students study the organelle set with flashcards and play Match.",
          },
          {
            phase: "Check",
            time: "10 min",
            detail: "A round of Classic Live in individuals mode shows me which organelles the class still confuses, often the Golgi apparatus and the endoplasmic reticulum.",
          },
          {
            phase: "Teach",
            time: "20 min",
            detail: "I focus the explanation on the weak terms and compare plant and animal cells using micrographs.",
          },
          {
            phase: "Team game",
            time: "15 min",
            detail: "Classic Live in random teams, played twice. Between rounds we review the most-missed terms.",
          },
          {
            phase: "Apply",
            time: "15 min",
            detail: "In pairs, students answer: why does a sperm cell contain many mitochondria, and why does a palisade cell contain many chloroplasts?",
          },
        ],
      },
      concepts: [
        {
          name: "Retrieval practice",
          detail: "Recalling an answer from memory strengthens it more than reading it again. Every Quizlet mode asks students to retrieve.",
        },
        {
          name: "Spaced repetition",
          detail: "Short study sessions spread over several days lead to longer-lasting memory than one long session. A shared set makes those short sessions easy.",
        },
        {
          name: "Dual coding",
          detail: "Pairing a word with an image gives students two ways to remember it, which is why image cards suit cell structures.",
        },
        {
          name: "Positive interdependence",
          detail: "In teams mode no student can win alone, because the correct answer may be on a teammate's screen.",
        },
      ],
      reflection: [
        "I see Quizlet as the first step of a lesson sequence, not the whole of it. It is very good at the bottom of Bloom's taxonomy and weak above it. That is why the lesson above ends with an application question that cannot be answered from a flashcard.",
        "I would also build my own sets from the textbook instead of relying on public ones. It takes longer, but it guarantees the definitions match what students will be examined on, and I can reuse the sets for years.",
      ],
    },
    sources: [
      { label: "Quizlet official site", url: "https://quizlet.com/" },
      { label: "Quizlet Help Center: starting Classic Live in teams mode", url: "https://help.quizlet.com/hc/articles/360030985431" },
    ],
  },
  {
    slug: "educaplay",
    name: "Educaplay",
    tagline: "Turn a topic into crosswords, labelling games and video quizzes",
    job: "Practising in different ways",
    accent: "#b84a0c",
    icon: "puzzle",
    topic: "The human digestive system",
    videoUrl: "",
    facts: [
      { label: "Cost", value: "Free Basic plan with advertisements; paid plans available" },
      { label: "Works on", value: "Any web browser, nothing to install" },
      { label: "Students join with", value: "A link or a game code" },
      { label: "Best lesson stage", value: "Practice and consolidation" },
    ],
    description: {
      purpose: [
        "Educaplay is an online platform for creating educational games. Its purpose is to let teachers turn their own lesson content into interactive activities without any programming. It was launched in 2010 by the Spanish company ADR Formación and follows a game-based learning approach.",
      ],
      features: [
        {
          name: "Many game types",
          detail:
            "Crossword, word search, quiz, fill in the blanks, matching, memory game, unscramble letters and words, riddle, interactive map, video quiz, dictation, dialogue and others.",
        },
        {
          name: "Interactive map",
          detail: "The teacher uploads any image and marks points on it. Students identify each point, which makes it a diagram-labelling game.",
        },
        {
          name: "Video quiz",
          detail: "Questions are inserted at chosen moments in a video, and the video pauses until the student answers.",
        },
        {
          name: "Ray, the AI assistant",
          detail: "Generates a draft game from a topic or source text for the teacher to review and edit. The free plan includes only a few uses.",
        },
        {
          name: "Sharing options",
          detail: "Each game has its own link, can be embedded in a website and can be downloaded in a printable paper version.",
        },
        {
          name: "Results and rankings",
          detail: "Students see their score and time immediately, and each game keeps a ranking of results.",
        },
      ],
      operation: [
        "The teacher logs in, selects New game and picks a game type. Each type has a simple form: clues and answers for a crossword, an image and labels for an interactive map. After previewing, the teacher publishes the game and shares the link. Students open it in a browser, play, and receive a score when they finish.",
        "On the free plan, games are stored in Educaplay's public library and show advertisements. The paid plans remove advertisements and add integration with learning management systems.",
      ],
      use: [
        "Educaplay is best used for practice after a concept has been taught. Because one topic can be turned into several game types, it is also well suited to station activities and to homework that feels different from a worksheet.",
      ],
    },
    evaluation: {
      strategies: [
        "Educaplay supports game-based learning and differentiated practice. The same content can be offered as a crossword for students who need to recall terms and as a video quiz for students who are ready to interpret a process, so groups can work at different levels on one topic.",
        "It also supports station rotation, with one game per station, and a learner-as-creator strategy in which students design a game for their classmates.",
      ],
      engagement: [
        "Variety is the main strength. Students meet a different challenge each time instead of the same quiz format every week. Instant scoring and the option to retry encourage them to attempt a game more than once, which means more practice than a worksheet would get.",
      ],
      advantages: [
        "One account gives access to many activity formats.",
        "The interactive map turns any diagram into a labelling exercise, which is a core skill in Biology.",
        "Video quizzes make students watch actively instead of passively.",
        "Games can be created and shared without limit on the free plan.",
        "The printable version means a game can still be used in a class with few devices.",
        "Nothing needs to be installed on student devices.",
      ],
      limitations: [
        "The free plan shows advertisements around the games. They distract students, and the teacher cannot control what is advertised.",
        "Games made on the free plan are public, so they are not suitable for anything the teacher wants to keep private.",
        "Most game types accept only one correct answer. They check recognition and recall, and cannot assess an explanation.",
        "The AI assistant is limited on the free plan, so most games must be built by hand.",
        "Rankings by time reward speed, which can encourage guessing.",
        "It depends on an internet connection unless the printable version is used.",
      ],
      impact: [
        "Educaplay increases the amount of practice students do and gives each attempt immediate corrective feedback, both of which help consolidate knowledge. The effect on deeper understanding is limited by the closed question formats, so the quality of the learning depends on how carefully the teacher writes the clues and questions.",
      ],
    },
    guide: {
      access: [
        {
          title: "Open Educaplay",
          detail: "Go to educaplay.com in a browser.",
        },
        {
          title: "Create a free account",
          detail: "Sign up with your details, verify your email address and log in.",
        },
        {
          title: "Look at the examples",
          detail: "Browse the public library for your topic to see how other teachers have used each game type.",
        },
      ],
      create: [
        {
          title: "Start a new game",
          detail: "Select New game and choose the game type. For a labelling activity, choose the interactive map.",
        },
        {
          title: "Describe the game",
          detail: "Enter a title, a short description, the language and the education level so that students know what it covers.",
        },
        {
          title: "Add the content",
          detail:
            "Upload a clear, unlabelled diagram, such as the human digestive system. Click on each organ to place a point and type its name.",
        },
        {
          title: "Set the rules",
          detail: "Choose the time limit and the number of attempts allowed.",
        },
        {
          title: "Preview and publish",
          detail: "Play the game once yourself to check every point, then publish it and copy the link.",
        },
      ],
      classroom: [
        {
          title: "Share the game",
          detail: "Display the link as a QR code on the screen or post it where students can reach it.",
        },
        {
          title: "Use it as a station",
          detail: "Set up two or three different games on the same topic and rotate groups through them every ten minutes.",
        },
        {
          title: "Review the results",
          detail: "Look at which labels or questions most students got wrong and go over them with the class.",
        },
        {
          title: "Hand over the tool",
          detail: "As a follow-up, ask each group to create its own game on the topic and exchange it with another group.",
        },
      ],
    },
    analysis: {
      why: [
        "Biology asks students to do several different things with the same content: name structures on a diagram, put the stages of a process in order, and use terms accurately. No single quiz format practises all of these.",
        "Educaplay suits Biology because each of those tasks has a matching game type. The interactive map practises labelling, the ordering games practise sequences such as the stages of mitosis, the crossword practises terminology, and the video quiz makes an animation of a process into an active task.",
      ],
      lesson: {
        title: "Organs of the human digestive system",
        level: "Form 4, Nutrition and the human digestive system",
        duration: "60 minutes",
        objective: "Students label the organs of the digestive system, state where each class of food is digested and name the enzymes involved.",
        flow: [
          {
            phase: "Recap",
            time: "10 min",
            detail: "A short review of the previous lesson on the digestive system using a labelled diagram.",
          },
          {
            phase: "Station 1",
            time: "12 min",
            detail: "Interactive map: students label the organs on an unlabelled diagram.",
          },
          {
            phase: "Station 2",
            time: "12 min",
            detail: "Video quiz: an animation of digestion pauses for questions on where carbohydrates, proteins and lipids are broken down.",
          },
          {
            phase: "Station 3",
            time: "12 min",
            detail: "Crossword: clues describe the function of each enzyme and students supply its name.",
          },
          {
            phase: "Debrief",
            time: "14 min",
            detail: "We look at the questions most groups missed, and each student writes a short account of what happens to a mouthful of rice from mouth to ileum.",
          },
        ],
      },
      concepts: [
        {
          name: "Game-based learning",
          detail: "Learning goals are built into the rules of a game, so that playing well requires knowing the content.",
        },
        {
          name: "Immediate feedback",
          detail: "Students find out at once whether an answer is right, so a mistake is corrected before it becomes a habit.",
        },
        {
          name: "Multimedia learning",
          detail:
            "Mayer's segmenting principle says people learn better when a complex presentation is broken into parts. A video quiz does this by pausing the video at each key step.",
        },
        {
          name: "Constructionism",
          detail: "When students build a game for others, they have to decide what is important and how to ask about it, which deepens their own understanding.",
        },
      ],
      reflection: [
        "The lesson for me is to choose the game type by the learning objective, not by what looks most fun. A word search on digestive enzymes would keep students busy but teach them almost nothing, because finding a word does not require knowing what it means. A labelling map or a well-written crossword clue does.",
        "Because of the advertisements on the free plan, I would use Educaplay in short, supervised bursts in class and rely on the printable versions when I want students fully focused.",
      ],
    },
    sources: [
      { label: "Educaplay official site", url: "https://www.educaplay.com/" },
      { label: "Educaplay support centre", url: "https://www.educaplay.com/support-center/" },
    ],
  },
  {
    slug: "zep-quiz",
    name: "ZEP Quiz",
    tagline: "A quiz that becomes a map students explore with avatars",
    job: "Revising a chapter",
    accent: "#7438bd",
    icon: "map",
    topic: "Cellular respiration",
    videoUrl: "",
    facts: [
      { label: "Cost", value: "Free plan; paid plans add AI and private quizzes" },
      { label: "Works on", value: "Web browser on a laptop, tablet or phone" },
      { label: "Students join with", value: "A link, QR code or entry code, with no account" },
      { label: "Best lesson stage", value: "End-of-chapter revision" },
    ],
    description: {
      purpose: [
        "ZEP Quiz is a quiz platform from the South Korean company ZEP. Its purpose is to make review and formative assessment feel like a game. The teacher types in questions and the platform automatically builds a small two-dimensional world, in pixel-art style, in which the questions are placed.",
        "Students do not answer from a list. They walk an avatar through the map and meet each question along the way, much like an escape room.",
      ],
      features: [
        {
          name: "Four map modes",
          detail:
            "Sequencing, where questions are solved in a fixed order; Freestyle, where students find questions in any order; Team Play, where teams solve as many as they can within a time limit; and Round Mode, where everyone answers the same question at the same time.",
        },
        {
          name: "Question types",
          detail: "Multiple-choice, short answer and true or false, with optional hints.",
        },
        {
          name: "Map templates",
          detail: "A choice of themed maps and avatars. More maps are available on the paid plans.",
        },
        {
          name: "Explore and copy",
          detail: "A public library of quizzes made by other teachers, which can be copied and edited.",
        },
        {
          name: "AI question generation",
          detail: "On the paid plans, questions can be generated from a topic or an uploaded file for the teacher to review.",
        },
        {
          name: "Easy sharing",
          detail: "Each quiz has a link, a QR code and an entry code. Students join from a browser without creating an account.",
        },
        {
          name: "Results",
          detail: "The teacher can see how each student performed, with more detailed reports on the paid plans.",
        },
      ],
      operation: [
        "The teacher logs in, usually with a Google account, selects Create quiz, picks a map and enters the questions and answers. ZEP Quiz then generates the space. The teacher shares the link or code, and students enter a nickname, choose an avatar and start moving through the map. A setting controls whether students may continue after a wrong answer or must answer correctly to move on.",
      ],
      use: [
        "ZEP Quiz is a good fit for revision at the end of a chapter, for a quick check on understanding during a unit, and as an activity students can repeat at home through the same link.",
      ],
    },
    evaluation: {
      strategies: [
        "ZEP Quiz supports gamified formative assessment. The four modes match different teaching purposes: Sequencing for content with a logical order, Freestyle for self-paced review, Team Play for cooperative learning and Round Mode for a teacher-led check of the whole class.",
        "When wrong answers are not allowed to pass, Sequencing mode also supports mastery learning, because a student cannot move forward until the idea is correct.",
      ],
      engagement: [
        "The map changes what a quiz feels like. Students have an avatar, a space to explore and a goal to reach, so answering a question becomes a step in a game instead of the whole activity. Students who are tired of the usual quiz-show format often respond well to the change, and joining without an account means the activity starts quickly.",
      ],
      advantages: [
        "Students need no account and nothing has to be installed.",
        "The core features are free, and a quiz can be built in a few minutes.",
        "A large class can play in the same map at once.",
        "The four modes let one tool serve individual, team and whole-class activities.",
        "Public quizzes can be copied and adapted, which saves preparation time.",
        "The same link works for revision at home.",
      ],
      limitations: [
        "On the free plan, quizzes are public and the AI tools are not included.",
        "Moving avatars in real time needs a stable internet connection and reasonably capable devices, which not every school has.",
        "The game can distract. Some students explore the map or race each other instead of thinking about the questions.",
        "Only three question types are available. It cannot assess diagram labelling, calculations with working, or extended explanations.",
        "Team Play and Round Mode need the teacher to be inside the map to start the game.",
        "Few ready-made quizzes match the Malaysian syllabus, because much of the public library comes from other countries. Most of the evidence for its effectiveness also comes from the company itself.",
      ],
      impact: [
        "The most likely impact is higher participation in revision and faster feedback on what students have not yet understood. Whether this becomes better learning depends on the questions. A map full of simple definition questions is an enjoyable recall exercise, while questions built around common misconceptions can expose and correct real misunderstandings.",
      ],
    },
    guide: {
      access: [
        {
          title: "Open ZEP Quiz",
          detail: "Go to quiz.zep.us in a browser.",
        },
        {
          title: "Log in",
          detail: "Select Log in and sign in, for example with a Google account.",
        },
        {
          title: "Choose Teacher",
          detail: "On your first login, select Teacher as your member type.",
        },
        {
          title: "Try one as a student",
          detail: "Open a quiz from Explore and play it, so you know what your students will experience.",
        },
      ],
      create: [
        {
          title: "Start a quiz",
          detail: "Select Create at the top of the page and choose Create quiz.",
        },
        {
          title: "Pick a map",
          detail: "Choose a map and mode. Use Sequencing when the content follows an order.",
        },
        {
          title: "Name the quiz",
          detail: "Enter a title such as \"Form 4 Biology: Cellular respiration review\" and select a category.",
        },
        {
          title: "Add the questions",
          detail: "For each question, choose the type, type the question, enter the options and mark the correct answer. Add a hint for the harder ones.",
        },
        {
          title: "Check the settings and finish",
          detail: "Decide whether wrong answers are allowed, then complete the quiz. The map is generated automatically.",
        },
      ],
      classroom: [
        {
          title: "Share the entry details",
          detail: "Select Share and display the QR code and entry code on the screen.",
        },
        {
          title: "Set a nickname rule",
          detail: "Ask students to enter their nickname as group and name, for example \"G3_Aina\", so you can recognise them in the results.",
        },
        {
          title: "Play within a time limit",
          detail: "Give the class ten to fifteen minutes. Where devices are limited, let two or three students share one and discuss each answer.",
        },
        {
          title: "Debrief",
          detail: "Open the results, find the questions most students got wrong and discuss them before the lesson ends.",
        },
      ],
    },
    analysis: {
      why: [
        "Biology chapters often describe processes with several ordered steps, and students must remember both the steps and the reasons for them. Revision of this kind easily turns into rereading notes, which is passive and ineffective.",
        "ZEP Quiz suits Biology revision because Sequencing mode mirrors the structure of a process: students cannot reach the next stage of the map until they have dealt with the current one. The format also suits the true or false and multiple-choice items that are effective for testing misconceptions, of which Biology has many.",
      ],
      lesson: {
        title: "Aerobic and anaerobic respiration review",
        level: "Form 4, Cellular respiration",
        duration: "40 minutes",
        objective: "Students compare aerobic and anaerobic respiration and correct common misconceptions about energy production in cells.",
        flow: [
          {
            phase: "Set-up",
            time: "5 min",
            detail: "Students scan the QR code, enter a nickname in the agreed format and choose an avatar.",
          },
          {
            phase: "Play",
            time: "15 min",
            detail:
              "A twelve-question Sequencing map. Questions target misconceptions such as \"plants respire only at night\" and \"anaerobic respiration releases no energy\".",
          },
          {
            phase: "Debrief",
            time: "12 min",
            detail: "I display the results and we work through the three questions with the lowest scores. Students explain why the wrong options are wrong.",
          },
          {
            phase: "Exit task",
            time: "8 min",
            detail: "Each student completes a comparison table of aerobic respiration, anaerobic respiration in muscle and fermentation in yeast.",
          },
        ],
      },
      concepts: [
        {
          name: "Gamification",
          detail: "Game elements such as avatars, progress and goals are added to a non-game task to increase motivation.",
        },
        {
          name: "Self-determination theory",
          detail:
            "Motivation grows when learners feel autonomy, competence and relatedness. The map offers choice of avatar and route, instant feedback builds a sense of competence, and Team Play provides relatedness.",
        },
        {
          name: "Mastery learning",
          detail: "Students should secure one idea before moving to the next. A map that blocks progress after a wrong answer applies this directly.",
        },
        {
          name: "Diagnostic questioning",
          detail: "A well-designed wrong option reveals the misconception behind it, which tells the teacher what to reteach.",
        },
      ],
      reflection: [
        "What I notice most is that the platform makes the quiz attractive but cannot make it meaningful. That part is my job. I would spend my preparation time on the questions, writing wrong options that reflect what students really believe, and very little time choosing the map.",
        "I would also always keep time for a debrief. Without it, students remember the game and their ranking. With it, the game becomes evidence the class can learn from.",
      ],
    },
    sources: [
      { label: "ZEP Quiz official site", url: "https://quiz.zep.us/en" },
      { label: "ZEP Quiz guide: getting started", url: "https://docs.channel.io/zepquiz/en/articles/9f4780ca-Start-ZEP-QUIZ" },
    ],
  },
  {
    slug: "assemblr-edu",
    name: "Assemblr EDU",
    tagline: "3D and augmented reality models students can turn, zoom and place on their desks",
    job: "Seeing structures in 3D",
    accent: "#0d6f82",
    icon: "cube",
    topic: "Parts of the light microscope",
    videoUrl: "",
    facts: [
      { label: "Cost", value: "Free plan with a small library; paid plans available" },
      { label: "Works on", value: "Web browser, Android and iOS" },
      { label: "Students join with", value: "A link, a QR marker or a class code" },
      { label: "Best lesson stage", value: "Introducing a structure before practical work" },
    ],
    description: {
      purpose: [
        "Assemblr EDU is a platform for teaching with 3D models and augmented reality (AR). Its purpose is to let students see an object from every side instead of as a flat picture in a textbook. It comes from Assemblr, a company based in Indonesia.",
        "In AR mode the phone camera shows the real classroom with the 3D model placed in it, so a microscope or a heart appears to be standing on the student's desk. Teachers can use ready-made models or build their own projects in a drag-and-drop editor.",
      ],
      features: [
        {
          name: "3D library",
          detail: "A collection of 3D objects for science and other subjects. The free plan includes a limited set, and the full library is on the paid plans.",
        },
        {
          name: "Edu Kits and Topics",
          detail: "Ready-made 3D teaching aids and lesson materials that can be used as they are or as a starting point.",
        },
        {
          name: "Editor",
          detail: "A drag-and-drop workspace where the teacher places 3D objects and adds annotations, text, images, video or slides. No coding is needed.",
        },
        {
          name: "Annotations",
          detail: "Labels attached to points on a model. Each label can hold a short explanation that opens when the student selects it.",
        },
        {
          name: "AR view",
          detail: "Shows the model through the phone camera as if it were in the room. Students can walk around it and move closer to see details.",
        },
        {
          name: "Sharing by link or QR marker",
          detail: "A published project can be shared as a link or as a QR marker that students scan with the Assemblr EDU app.",
        },
        {
          name: "Classrooms",
          detail: "A virtual class that students join with a code, where the teacher shares projects and materials.",
        },
      ],
      operation: [
        "The teacher signs in, creates a new project and adds a 3D object from the library. Labels are added with the annotation tool, the project is previewed and then published. Publishing produces a share link and a QR marker.",
        "Students open the link in a browser to explore the model in 3D, or scan the marker with the app to see it in AR. They can rotate the model, zoom in and select each label to read about that part.",
      ],
      use: [
        "Assemblr EDU fits the point in a lesson where students need to understand what something looks like and how its parts are arranged. It is especially useful before practical work, as revision at home, and as a project tool when students build and label a model themselves.",
      ],
    },
    evaluation: {
      strategies: [
        "Assemblr EDU supports visual and inquiry-based teaching. Instead of being told the parts of a structure, students explore the model and find them. It also suits a flipped approach, because the model can be studied at home through a link before the lesson.",
        "The editor supports project-based learning. Asking students to build and label their own model is a stronger task than labelling a worksheet, because they have to decide where each label belongs.",
      ],
      engagement: [
        "Seeing a model appear on the desk is new for most students and captures attention immediately. More importantly, every student controls the model. They can turn it and look closely at the part they do not understand, which a single diagram on the board cannot offer.",
      ],
      advantages: [
        "It is free to start, and students need only a phone or a browser.",
        "No special equipment is required, such as headsets or printed cards.",
        "Every student can examine the object at once, even when the school has only a few real ones.",
        "A model cannot be broken, so students can explore freely before handling real apparatus.",
        "The editor is simple enough for a teacher to make a labelled model in one sitting.",
        "A shared link lets students revisit the model at home.",
      ],
      limitations: [
        "The free plan is small. It includes about 400 3D objects and 30 MB of storage, and much of the library and the ready-made materials is reserved for paid plans.",
        "Much of the ready-made content was made for Indonesian classrooms, so labels may use terms that differ from the Malaysian textbook and need to be edited.",
        "AR needs a reasonably recent phone, a working camera and a stable internet connection, and it drains the battery quickly.",
        "Arranging many labels neatly takes time, and labels can overlap when the model is turned.",
        "A 3D model shows what a structure looks like but cannot teach the skill of using it. It supports practical work and does not replace it.",
        "The novelty fades, so the activity needs a clear task or students will only play with the model.",
      ],
      impact: [
        "The main impact is on spatial understanding. Students form a more accurate picture of a structure and remember where its parts are, which helps them when they meet the real object. In Biology this can make practical lessons run more smoothly, because less time is spent identifying parts and more is spent using them.",
      ],
    },
    guide: {
      access: [
        {
          title: "Open Assemblr EDU",
          detail: "Go to edu.assemblrworld.com in a browser. The editor works best on a computer. Also install the Assemblr EDU app on a phone for the AR view.",
        },
        {
          title: "Create a free account",
          detail: "Sign up and choose the teacher role.",
        },
        {
          title: "Explore the library",
          detail: "Search for your topic and check that the model you need is available on the free plan.",
        },
      ],
      create: [
        {
          title: "Start a new project",
          detail: "From your own page, select Create New Project to open the editor.",
        },
        {
          title: "Add the 3D model",
          detail: "Find the object in the library, for example a microscope, and place it in the workspace.",
        },
        {
          title: "Label the parts",
          detail: "Use the annotation tool to attach a label to each part. Type the name and add a short description of its function.",
        },
        {
          title: "Tidy and preview",
          detail: "Move the labels so they do not overlap, then use the preview to turn the model and check it from several angles.",
        },
        {
          title: "Publish and share",
          detail: "Select Publish and fill in the project details. In the Share Project panel, copy the link or download the QR marker.",
        },
      ],
      classroom: [
        {
          title: "Show the marker",
          detail: "Display the QR marker on the screen or print one copy for each group.",
        },
        {
          title: "Let students scan",
          detail: "Students open the Assemblr EDU app, select Scan and point the camera at the marker. The model appears in AR.",
        },
        {
          title: "Give a task",
          detail: "Set a clear task, such as finding the part that changes the magnification, so that students explore with a purpose.",
        },
        {
          title: "Connect it to the real object",
          detail: "Move from the model to the real apparatus and ask students to find the same parts on it.",
        },
      ],
    },
    showcase: {
      title: "The model I made",
      intro: "I chose the light microscope and labelled its parts in the Assemblr editor. These screenshots show the finished model from two angles.",
      images: [
        {
          src: "/assemblr/microscope-front.jpg",
          alt: "A 3D model of a light microscope seen from the front, with eleven labelled parts.",
          caption: "The labelled microscope from the front.",
          width: 1173,
          height: 650,
        },
        {
          src: "/assemblr/microscope-side.jpg",
          alt: "The same 3D microscope model turned to show the back and the adjustment knobs.",
          caption: "Turning the model shows the knobs at the back.",
          width: 1212,
          height: 676,
        },
      ],
    },
    analysis: {
      why: [
        "Biology is a subject of structures. Students must know what a cell, an organ or a piece of apparatus looks like and how its parts relate to each other. A textbook can only show one flat view, and students often struggle to connect that drawing with the real thing.",
        "Assemblr EDU suits Biology because it closes that gap. I chose the microscope because it is one of the most important tools in a Biology laboratory, and students must know its parts before they can use it. Most schools do not have a microscope for every student, so a 3D model gives each of them time with the instrument before the practical begins.",
      ],
      lesson: {
        title: "Getting to know the light microscope",
        level: "Form 4, Cell biology and organisation",
        duration: "60 minutes",
        objective: "Students identify the main parts of a light microscope, state the function of each and use the microscope to focus a prepared slide.",
        flow: [
          {
            phase: "Starter",
            time: "5 min",
            detail: "I show a real microscope and ask the class which parts they can already name.",
          },
          {
            phase: "Explore",
            time: "15 min",
            detail: "In pairs, students scan the marker and study the microscope in AR on their desk. They turn the model and open each label to read its function.",
          },
          {
            phase: "Record",
            time: "10 min",
            detail: "Students complete a table of parts and functions, and answer: which parts would you adjust to make a blurred image sharp?",
          },
          {
            phase: "Hands-on",
            time: "20 min",
            detail: "Groups move to the real microscopes, point to each part they found on the model and focus a prepared slide at low power.",
          },
          {
            phase: "Check",
            time: "10 min",
            detail: "I point to parts of the real microscope and students name them and give the function without looking at the model.",
          },
        ],
      },
      concepts: [
        {
          name: "Pre-training principle",
          detail:
            "In Mayer's theory of multimedia learning, people learn a complex task better when they already know the names and features of its main parts. Learning the parts on a model first prepares students to use the real microscope.",
        },
        {
          name: "Spatial contiguity",
          detail: "Learning improves when words are placed next to the part of the picture they describe. Annotations do this by attaching each label directly to its part.",
        },
        {
          name: "Constructivism",
          detail: "Students build understanding by exploring and handling an object themselves instead of receiving a description of it.",
        },
      ],
      reflection: [
        "I chose the microscope because it is one of the most important tools used in Biology laboratories. It was easy to explore the 3D model and label the different parts, although arranging the labels neatly took some time.",
        "The AR feature made the microscope look realistic and helped me visualise its structure better. I would use Assemblr EDU in my Biology class because it makes learning laboratory equipment more interactive, engaging and easier for students to understand.",
      ],
    },
    sources: [
      { label: "Assemblr EDU official site", url: "https://edu.assemblrworld.com/" },
      { label: "Assemblr EDU plans", url: "https://about.edu.assemblrworld.com/plans" },
      { label: "Assemblr guide: sharing AR markers", url: "https://guide.assemblrworld.com/share-projects/share-ar-markers" },
    ],
  },
];

export const conclusion = {
  intro: [
    "Putting the five platforms side by side shows that each one does a different job in a lesson. None of them teaches Biology on its own, and none of them replaces the others.",
  ],
  comparison: [
    {
      slug: "classdojo",
      role: "Builds laboratory routines and records practical work",
      level: "Skills and attitudes",
      cost: "Free",
      watch: "Points can become the goal",
    },
    {
      slug: "quizlet",
      role: "Secures vocabulary before and after a lesson",
      level: "Remembering",
      cost: "Free with limits",
      watch: "Recall without understanding",
    },
    {
      slug: "educaplay",
      role: "Gives varied practice, including diagram labelling",
      level: "Remembering and understanding",
      cost: "Free with advertisements",
      watch: "Advertisements and closed questions",
    },
    {
      slug: "zep-quiz",
      role: "Makes chapter revision active and diagnostic",
      level: "Understanding and correcting misconceptions",
      cost: "Free core features",
      watch: "The game can distract from the questions",
    },
    {
      slug: "assemblr-edu",
      role: "Lets every student see and explore a structure in 3D",
      level: "Understanding structure and spatial relationships",
      cost: "Free with a small library",
      watch: "Few free models, and labels may not match the textbook",
    },
  ],
  learned: [
    {
      title: "The objective comes first",
      detail:
        "The platform should be chosen for what students need to do, whether that is to recall, label, explain or discuss. A tool that is fun but does not match the objective wastes lesson time.",
    },
    {
      title: "Most tools stop at recall",
      detail:
        "Most of these platforms are strongest at lower-order thinking. In every lesson I planned, the higher-order task, such as explaining or predicting, had to be added by me after the digital activity.",
    },
    {
      title: "The debrief is where learning happens",
      detail: "Scores and rankings are only data. Students learn when the class looks at the wrong answers together and works out why they were wrong.",
    },
    {
      title: "Free plans have real costs",
      detail:
        "Advertisements, public content, capped features and small free libraries are part of an honest evaluation. A teacher has to check these limits before building lessons around a platform.",
    },
    {
      title: "Access is not equal",
      detail: "Every platform here depends on devices and internet. I need a plan for sharing devices, printable versions or offline alternatives so that no student is left out.",
    },
  ],
  closing: [
    "As a future Biology teacher, I will not judge a digital platform by how impressive it looks. I will ask what it lets my students do that they could not do as well without it. Used with that question in mind, these five tools can make a Biology classroom safer, more active and more visual, and the teacher's planning is still what turns that activity into understanding.",
  ],
};

export function getEntry(slug: string) {
  return entries.find((entry) => entry.slug === slug);
}
