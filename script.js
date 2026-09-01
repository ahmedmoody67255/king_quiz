// =====================================
// 👑 KiNG QUIZ
// =====================================

let gameMode = "solo";

let players = [
  { name: "اللاعب الأول", score: 0 },
  { name: "اللاعب الثاني", score: 0 }
];

let currentPlayer = 0;
let selectedCategory = "";
let questions = [];
let questionIndex = 0;
let answered = false;
let timerInterval;
let timeLeft = 15;


// =====================================
// 🧠 بنك الأسئلة
// =====================================

const questionBank = {

  football: [
    {
      q: "من فاز بكأس العالم 2022؟",
      answers: ["فرنسا", "الأرجنتين", "البرازيل", "ألمانيا"],
      correct: 1
    },
    {
      q: "من أكثر نادٍ فاز بدوري أبطال أوروبا؟",
      answers: ["برشلونة", "ليفربول", "ريال مدريد", "بايرن ميونخ"],
      correct: 2
    },
    {
      q: "كم لاعبًا يشارك من الفريق الواحد داخل الملعب؟",
      answers: ["9", "10", "11", "12"],
      correct: 2
    },
    {
      q: "من فاز بكأس العالم 2018؟",
      answers: ["ألمانيا", "فرنسا", "البرازيل", "إسبانيا"],
      correct: 1
    },
    {
      q: "من اللاعب المعروف بلقب ملك كرة القدم؟",
      answers: ["ميسي", "مارادونا", "بيليه", "رونالدو"],
      correct: 2
    },
    {
      q: "أي منتخب فاز بأكبر عدد من بطولات كأس العالم؟",
      answers: ["البرازيل", "ألمانيا", "إيطاليا", "الأرجنتين"],
      correct: 0
    },
    {
      q: "كم دقيقة تستغرق مباراة كرة القدم الأساسية؟",
      answers: ["60", "75", "90", "120"],
      correct: 2
    },
    {
      q: "ما لون البطاقة التي تعني طرد اللاعب؟",
      answers: ["الصفراء", "الحمراء", "الزرقاء", "الخضراء"],
      correct: 1
    },
    {
      q: "أين أقيم كأس العالم 2022؟",
      answers: ["روسيا", "قطر", "الإمارات", "السعودية"],
      correct: 1
    },
    {
      q: "من فاز بالكرة الذهبية 2022؟",
      answers: ["ليونيل ميسي", "كريم بنزيما", "هالاند", "مبابي"],
      correct: 1
    }
  ],


  history: [
    {
      q: "من بنى الهرم الأكبر؟",
      answers: ["خوفو", "رمسيس الثاني", "توت عنخ آمون", "تحتمس الثالث"],
      correct: 0
    },
    {
      q: "أين بدأت الألعاب الأولمبية القديمة؟",
      answers: ["مصر", "اليونان", "إيطاليا", "تركيا"],
      correct: 1
    },
    {
      q: "من اكتشف مقبرة توت عنخ آمون؟",
      answers: ["نابليون", "هوارد كارتر", "هيرودوت", "جوليوس قيصر"],
      correct: 1
    },
    {
      q: "ما عاصمة الإمبراطورية الرومانية؟",
      answers: ["أثينا", "روما", "باريس", "لندن"],
      correct: 1
    },
    {
      q: "من هي كليوباترا؟",
      answers: ["ملكة مصرية", "ملكة إنجليزية", "ملكة فرنسية", "إمبراطورة رومانية"],
      correct: 0
    },
    {
      q: "أين قامت الحضارة الفرعونية؟",
      answers: ["مصر", "الصين", "اليونان", "الهند"],
      correct: 0
    },
    {
      q: "من هو نابليون بونابرت؟",
      answers: ["قائد فرنسي", "ملك إنجليزي", "فرعون مصري", "فيلسوف يوناني"],
      correct: 0
    },
    {
      q: "ما الحضارة التي بنت الكولوسيوم؟",
      answers: ["الرومانية", "المصرية", "الفارسية", "الصينية"],
      correct: 0
    },
    {
      q: "من كان أول رئيس للولايات المتحدة؟",
      answers: ["أبراهام لينكولن", "جورج واشنطن", "توماس جيفرسون", "جون آدامز"],
      correct: 1
    },
    {
      q: "ما المدينة التي كانت مركز الحضارة اليونانية القديمة؟",
      answers: ["أثينا", "روما", "باريس", "برلين"],
      correct: 0
    }
  ],


  geography: [
    {
      q: "ما أكبر دولة في العالم من حيث المساحة؟",
      answers: ["كندا", "الصين", "روسيا", "الولايات المتحدة"],
      correct: 2
    },
    {
      q: "ما عاصمة مصر؟",
      answers: ["الجيزة", "القاهرة", "الإسكندرية", "الأقصر"],
      correct: 1
    },
    {
      q: "ما أكبر محيط في العالم؟",
      answers: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"],
      correct: 2
    },
    {
      q: "في أي دولة يوجد برج إيفل؟",
      answers: ["إيطاليا", "فرنسا", "إسبانيا", "ألمانيا"],
      correct: 1
    },
    {
      q: "في أي قارة تقع مصر؟",
      answers: ["آسيا", "أوروبا", "أفريقيا", "أمريكا الجنوبية"],
      correct: 2
    },
    {
      q: "ما عاصمة اليابان؟",
      answers: ["سيول", "طوكيو", "بكين", "بانكوك"],
      correct: 1
    },
    {
      q: "ما أكبر صحراء حارة في العالم؟",
      answers: ["جوبي", "الصحراء الكبرى", "العربية", "كالاهاري"],
      correct: 1
    },
    {
      q: "في أي دولة تقع مدينة برشلونة؟",
      answers: ["البرتغال", "إسبانيا", "إيطاليا", "فرنسا"],
      correct: 1
    },
    {
      q: "ما عاصمة إيطاليا؟",
      answers: ["روما", "ميلانو", "البندقية", "نابولي"],
      correct: 0
    },
    {
      q: "ما النهر الذي يمر في مصر؟",
      answers: ["الأمازون", "النيل", "الدانوب", "التايمز"],
      correct: 1
    }
  ],


  biology: [
    {
      q: "ما الوحدة الأساسية للحياة؟",
      answers: ["الذرة", "الخلية", "النسيج", "العضو"],
      correct: 1
    },
    {
      q: "ما العضو المسؤول عن ضخ الدم؟",
      answers: ["الكبد", "المخ", "القلب", "الرئة"],
      correct: 2
    },
    {
      q: "ما الغاز الذي يحتاجه الإنسان للتنفس؟",
      answers: ["ثاني أكسيد الكربون", "الأكسجين", "النيتروجين", "الهيدروجين"],
      correct: 1
    },
    {
      q: "ما العضو المسؤول بشكل أساسي عن التفكير؟",
      answers: ["القلب", "المخ", "الكبد", "المعدة"],
      correct: 1
    },
    {
      q: "ما العملية التي تصنع بها النباتات غذاءها باستخدام الضوء؟",
      answers: ["التنفس", "البناء الضوئي", "الهضم", "التخمر"],
      correct: 1
    },
    {
      q: "كم عدد الكروموسومات الطبيعية لدى الإنسان؟",
      answers: ["23", "46", "44", "48"],
      correct: 1
    },
    {
      q: "ما خلايا الدم التي تساعد على مقاومة العدوى؟",
      answers: ["الحمراء", "البيضاء", "الصفائح", "البلازما"],
      correct: 1
    },
    {
      q: "ماذا يعني DNA؟",
      answers: ["الحمض النووي", "السكر النووي", "البروتين النووي", "لا شيء مما سبق"],
      correct: 0
    },
    {
      q: "ما العضوان المسؤولان بشكل أساسي عن تنقية الدم؟",
      answers: ["الرئتان", "الكليتان", "القلب", "المعدة"],
      correct: 1
    },
    {
      q: "ما أكبر عضو في جسم الإنسان؟",
      answers: ["القلب", "الكبد", "الجلد", "المخ"],
      correct: 2
    }
  ],


  love: [
    {
      q: "ما أهم شيء لبناء علاقة صحية؟",
      answers: ["الثقة", "الكذب", "الغيرة", "التجاهل"],
      correct: 0
    },
    {
      q: "ما أفضل طريقة لحل الخلاف؟",
      answers: ["الصوت العالي", "التجاهل", "الحوار الهادئ", "الخصام"],
      correct: 2
    },
    {
      q: "ما الذي يساعد على بناء الثقة؟",
      answers: ["الصراحة", "الأسرار", "الكذب", "التلاعب"],
      correct: 0
    },
    {
      q: "العلاقة الصحية يجب أن تحتوي على:",
      answers: ["احترام", "تحكم", "خوف", "ضغط"],
      correct: 0
    },
    {
      q: "ما أهم جزء في التواصل؟",
      answers: ["الاستماع", "المقاطعة", "التجاهل", "الصراخ"],
      correct: 0
    },
    {
      q: "كيف يمكنك إظهار تقديرك لشخص تحبه؟",
      answers: ["شكره", "تجاهله", "إهانته", "الكذب عليه"],
      correct: 0
    },
    {
      q: "ما معنى الحدود الصحية في العلاقة؟",
      answers: ["احترام حدود الطرف الآخر", "التحكم فيه", "التجسس عليه", "إجباره"],
      correct: 0
    },
    {
      q: "لو الشخص الذي أمامك متضايق، الأفضل أن:",
      answers: ["تسمعه", "تسخر منه", "تتجاهله", "تبدأ خناقة"],
      correct: 0
    },
    {
      q: "ما الذي يقوي العلاقة أكثر؟",
      answers: ["الثقة", "الشك", "الخوف", "الغيرة"],
      correct: 0
    },
    {
      q: "العلاقة الجيدة تجعل الطرفين يشعران بـ:",
      answers: ["الاحترام", "الخوف", "التحكم", "الضغط"],
      correct: 0
    }
  ],


  english: [
    {
      q: "ما عكس كلمة Easy؟",
      answers: ["سهل", "صعب", "سريع", "صغير"],
      correct: 1
    },
    {
      q: "اختر الجملة الصحيحة:",
      answers: [
        "She go to school.",
        "She goes to school.",
        "She going school.",
        "She gone school."
      ],
      correct: 1
    },
    {
      q: "ما جمع كلمة Child؟",
      answers: ["Childs", "Children", "Childes", "Childrens"],
      correct: 1
    },
    {
      q: "ما معنى كلمة Beautiful؟",
      answers: ["قبيح", "جميل", "غاضب", "سريع"],
      correct: 1
    },
    {
      q: "ما الماضي من كلمة Go؟",
      answers: ["Goed", "Gone", "Went", "Going"],
      correct: 2
    },
    {
      q: "ما عكس كلمة Expensive؟",
      answers: ["رخيص", "غني", "كبير", "ثقيل"],
      correct: 0
    },
    {
      q: "أي كلمة من الآتي اسم Noun؟",
      answers: ["Run", "Beautiful", "Book", "Quickly"],
      correct: 2
    },
    {
      q: "ما معنى كلمة Happy؟",
      answers: ["حزين", "سعيد", "غاضب", "متعب"],
      correct: 1
    },
    {
      q: "اختر الكلمة الصحيحة: I ___ football every Friday.",
      answers: ["play", "plays", "playing", "played"],
      correct: 0
    },
    {
      q: "ما عكس كلمة Early؟",
      answers: ["Late", "Fast", "Quick", "Soon"],
      correct: 0
    }
  ],


  friends: [
    {
      q: "مين غالبًا بيتأخر على الخروجة؟ 😂",
      answers: ["صاحب النوم", "المنظم", "اللي بييجي بدري", "محدش"],
      correct: 0
    },
    {
      q: "مين غالبًا عارف آخر الأخبار بين الصحاب؟ 👀",
      answers: ["الهادئ", "خبير الأخبار", "المدرس", "محدش"],
      correct: 1
    },
    {
      q: "إيه اللي بيخلي القعدة أحلى؟",
      answers: ["الضحك والجو الحلو", "الخناقات", "السكوت", "الزهق"],
      correct: 0
    },
    {
      q: "مين أكتر واحد ممكن ينسى موبايله؟",
      answers: ["السرحان", "المنظم", "المسؤول", "محدش"],
      correct: 0
    },
    {
      q: "إيه أكتر حاجة بتحصل في قعدة الصحاب؟",
      answers: ["الهزار", "السكوت", "المذاكرة", "النوم"],
      correct: 0
    },
    {
      q: "مين أول واحد غالبًا يقول: ناكل إيه؟ 😂",
      answers: ["الجعان", "النايم", "الهادئ", "محدش"],
      correct: 0
    },
    {
      q: "إيه أهم حاجة في قعدة صحاب حلوة؟",
      answers: ["الضحك", "الخناق", "الملل", "السكوت"],
      correct: 0
    },
    {
      q: "مين بيقول أنا جاي وهو لسه في البيت؟ 😂",
      answers: ["صاحب المواعيد", "المنظم", "البدري", "محدش"],
      correct: 0
    },
    {
      q: "الصحاب الحقيقيين غالبًا بيشاركوا:",
      answers: ["الذكريات", "ولا حاجة", "الخناقات فقط", "كل أسرار الناس"],
      correct: 0
    },
    {
      q: "إيه أهم صفة في الصاحب الجدع؟",
      answers: ["الجدعنة والثقة", "الغيرة", "الدراما", "المنافسة"],
      correct: 0
    }
  ],


  politics: [
    {
      q: "ما معنى الديمقراطية؟",
      answers: [
        "حكم الشعب",
        "حكم شخص واحد دائمًا",
        "حكم الجيش",
        "الحكم بدون انتخابات"
      ],
      correct: 0
    },
    {
      q: "ما هو الدستور؟",
      answers: [
        "الإطار القانوني الأساسي للدولة",
        "خريطة",
        "قانون رياضي",
        "وثيقة سفر"
      ],
      correct: 0
    },
    {
      q: "ماذا تعني كلمة UN؟",
      answers: [
        "الأمم المتحدة",
        "شبكة عالمية",
        "اتحاد دولي",
        "لا شيء"
      ],
      correct: 0
    },
    {
      q: "ما هي الانتخابات؟",
      answers: [
        "عملية اختيار ممثلين أو مسؤولين",
        "محكمة",
        "تدريب عسكري",
        "اتفاق تجاري"
      ],
      correct: 0
    },
    {
      q: "ما هو البرلمان؟",
      answers: [
        "هيئة تشريعية",
        "مستشفى",
        "محكمة",
        "بنك"
      ],
      correct: 0
    },
    {
      q: "ما هي الدبلوماسية؟",
      answers: [
        "إدارة العلاقات بين الدول",
        "لعبة رياضية",
        "كتابة روايات",
        "إدارة شركة"
      ],
      correct: 0
    },
    {
      q: "ما هو الحزب السياسي؟",
      answers: [
        "مجموعة منظمة لها أهداف سياسية",
        "نادٍ رياضي",
        "شركة",
        "مدرسة"
      ],
      correct: 0
    },
    {
      q: "ماذا يعني التصويت؟",
      answers: [
        "التعبير عن اختيار في انتخابات أو قرار",
        "دفع الضرائب",
        "توقيع عقد",
        "رفع دعوى"
      ],
      correct: 0
    },
    {
      q: "ما هو القانون؟",
      answers: [
        "قاعدة تفرضها وتنفذها سلطة مختصة",
        "اقتراح",
        "لعبة",
        "رسالة"
      ],
      correct: 0
    },
    {
      q: "ما المقصود بالعلاقات الدولية؟",
      answers: [
        "العلاقات والتعاملات بين الدول",
        "علاقات الأصدقاء",
        "علاقات الشركات فقط",
        "الرياضة"
      ],
      correct: 0
    }
  ],


  general: [
    {
      q: "كم يومًا في السنة الكبيسة؟",
      answers: ["364", "365", "366", "367"],
      correct: 2
    },
    {
      q: "ما أسرع حيوان بري؟",
      answers: ["الأسد", "الفهد", "الحصان", "النمر"],
      correct: 1
    },
    {
      q: "كم عدد كواكب المجموعة الشمسية؟",
      answers: ["7", "8", "9", "10"],
      correct: 1
    },
    {
      q: "ما الكوكب المعروف بالكوكب الأحمر؟",
      answers: ["الزهرة", "المريخ", "المشتري", "عطارد"],
      correct: 1
    },
    {
      q: "كم لونًا يوجد تقليديًا في قوس قزح؟",
      answers: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      q: "ما أكبر حيوان ثديي؟",
      answers: ["الفيل", "الحوت الأزرق", "الزرافة", "الحوت القاتل"],
      correct: 1
    },
    {
      q: "أي معدن يكون سائلًا في درجة حرارة الغرفة؟",
      answers: ["الحديد", "الزئبق", "الذهب", "الفضة"],
      correct: 1
    },
    {
      q: "كم ضلعًا للشكل السداسي؟",
      answers: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      q: "ما الحيوان المعروف بأنه أفضل صديق للإنسان؟",
      answers: ["القطة", "الكلب", "الحصان", "العصفور"],
      correct: 1
    },
    {
      q: "ما هو H2O؟",
      answers: ["الأكسجين", "الماء", "الهيدروجين", "الملح"],
      correct: 1
    }
  ],


  movies: [
    {
      q: "من هو جاك سبارو؟",
      answers: ["شخصية من قراصنة الكاريبي", "شخصية من تايتانيك", "بطل أفاتار", "بطل ماتريكس"],
      correct: 0
    },
    {
      q: "من أخرج فيلم Titanic؟",
      answers: ["جيمس كاميرون", "كريستوفر نولان", "ستيفن سبيلبرغ", "ريدلي سكوت"],
      correct: 0
    },
    {
      q: "من هو باتمان؟",
      answers: ["بيتر باركر", "بروس واين", "كلارك كينت", "توني ستارك"],
      correct: 1
    },
    {
      q: "من هو بيتر باركر؟",
      answers: ["سوبرمان", "سبايدرمان", "الرجل الحديدي", "باتمان"],
      correct: 1
    },
    {
      q: "من يحمل المطرقة ميولنير؟",
      answers: ["ثور", "باتمان", "سبايدرمان", "هالك"],
      correct: 0
    },
    {
      q: "من هو بطل سلسلة Harry Potter؟",
      answers: ["هاري بوتر", "توني ستارك", "جاك سبارو", "بروس واين"],
      correct: 0
    },
    {
      q: "أي فيلم تدور أحداثه في عالم Pandora؟",
      answers: ["Avatar", "Titanic", "Joker", "Rocky"],
      correct: 0
    },
    {
      q: "من هو Captain America؟",
      answers: ["ستيف روجرز", "توني ستارك", "ثور", "بيتر باركر"],
      correct: 0
    },
    {
      q: "من هو الرجل الحديدي؟",
      answers: ["توني ستارك", "بروس واين", "ستيف روجرز", "كلارك كينت"],
      correct: 0
    },
    {
      q: "أي سلسلة مشهورة تحتوي على شخصية Darth Vader؟",
      answers: ["Star Wars", "Harry Potter", "Marvel", "Titanic"],
      correct: 0
    }
  ]

};


// =====================================
// 🖥️ التنقل بين الشاشات
// =====================================

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.add("hidden");
    });

  document
    .getElementById(id)
    .classList.remove("hidden");

}


// =====================================
// 👤 لاعب واحد
// =====================================

function startGame(mode) {

  gameMode = mode;

  players = [
    {
      name: "اللاعب",
      score: 0
    },
    {
      name: "اللاعب الثاني",
      score: 0
    }
  ];

  currentPlayer = 0;

  showScreen("categoryScreen");

}


// =====================================
// 👥 لاعبان
// =====================================

function showTwoPlayers() {

  showScreen("playersScreen");

}


function startTwoPlayers() {

  const p1 =
    document
      .getElementById("player1")
      .value
      .trim();

  const p2 =
    document
      .getElementById("player2")
      .value
      .trim();

  players[0].name =
    p1 || "اللاعب الأول";

  players[1].name =
    p2 || "اللاعب الثاني";

  players[0].score = 0;

  players[1].score = 0;

  currentPlayer = 0;

  gameMode = "two";

  showScreen("categoryScreen");

}


function backHome() {

  showScreen("startScreen");

}


// =====================================
// 🎯 اختيار القسم
// =====================================

function selectCategory(category) {

  selectedCategory = category;

  questions =
    [...questionBank[category]];

  shuffle(questions);

  questions =
    questions.slice(0, 10);

  questionIndex = 0;

  players.forEach(player => {
    player.score = 0;
  });

  showScreen("quizScreen");

  loadQuestion();

}


// =====================================
// 🔀 خلط الأسئلة
// =====================================

function shuffle(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

}


// =====================================
// ❓ تحميل السؤال
// =====================================

function loadQuestion() {

  clearInterval(timerInterval);

  answered = false;

  timeLeft = 15;

  const timer =
    document.getElementById("timer");

  timer.textContent = timeLeft;

  timer.style.borderColor = "";

  timer.style.color = "";

  document
    .getElementById("nextBtn")
    .classList.add("hidden");


  const player =
    players[currentPlayer];

  document
    .getElementById("currentPlayer")
    .textContent =
      player.name;

  document
    .getElementById("score")
    .textContent =
      player.score;


  document
    .getElementById("questionNumber")
    .textContent =
      questionIndex + 1;


  document
    .getElementById("progressBar")
    .style.width =
      (
        (questionIndex + 1)
        /
        questions.length
        *
        100
      ) + "%";


  const question =
    questions[questionIndex];

  document
    .getElementById("question")
    .textContent =
      question.q;


  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer-btn";

      button.textContent =
        `${String.fromCharCode(65 + index)}. ${answer}`;

      button.onclick = () => {

        checkAnswer(
          index,
          button
        );

      };

      answers.appendChild(button);

    }
  );


  startTimer();

}


// =====================================
// ⏱️ المؤقت
// =====================================

function startTimer() {

  clearInterval(timerInterval);

  timerInterval =
    setInterval(() => {

      timeLeft--;

      const timer =
        document.getElementById("timer");

      timer.textContent =
        timeLeft;


      if (timeLeft <= 5) {

        timer.style.borderColor =
          "#ff4d5d";

        timer.style.color =
          "#ff4d5d";

      }


      if (timeLeft <= 0) {

        clearInterval(timerInterval);

        timeOut();

      }

    }, 1000);

}


// =====================================
// ⌛ انتهاء الوقت
// =====================================

function timeOut() {

  if (answered)
    return;

  answered = true;

  const question =
    questions[questionIndex];

  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach(
    (button, index) => {

      button.disabled = true;

      if (
        index === question.correct
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );


  document
    .getElementById("nextBtn")
    .classList.remove("hidden");

}


// =====================================
// ✅ فحص الإجابة
// =====================================

function checkAnswer(
  selected,
  selectedButton
) {

  if (answered)
    return;

  answered = true;

  clearInterval(timerInterval);

  const question =
    questions[questionIndex];

  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach(button => {
    button.disabled = true;
  });


  if (
    selected === question.correct
  ) {

    selectedButton.classList.add(
      "correct"
    );

    players[currentPlayer].score += 100;


    if (timeLeft >= 10) {

      players[currentPlayer].score += 50;

    }

  }

  else {

    selectedButton.classList.add(
      "wrong"
    );

    buttons[
      question.correct
    ].classList.add(
      "correct"
    );

  }


  document
    .getElementById("score")
    .textContent =
      players[currentPlayer].score;


  document
    .getElementById("nextBtn")
    .classList.remove("hidden");

}


// =====================================
// ➡️ السؤال التالي
// =====================================

function nextQuestion() {

  questionIndex++;


  if (
    questionIndex >= questions.length
  ) {

    if (
      gameMode === "two" &&
      currentPlayer === 0
    ) {

      currentPlayer = 1;

      questionIndex = 0;

      showPassScreen();

      return;

    }


    finishGame();

    return;

  }


  loadQuestion();

}


// =====================================
// 📱 تسليم الموبايل
// =====================================

function showPassScreen() {

  clearInterval(timerInterval);

  document
    .getElementById("nextPlayer")
    .textContent =
      players[currentPlayer].name;

  showScreen("passScreen");

}


function continueTurn() {

  showScreen("quizScreen");

  loadQuestion();

}


// =====================================
// 🏆 النتيجة
// =====================================

function finishGame() {

  clearInterval(timerInterval);

  showScreen("resultScreen");


  const resultTitle =
    document.getElementById(
      "resultTitle"
    );

  const resultText =
    document.getElementById(
      "resultText"
    );


  if (gameMode === "solo") {

    resultTitle.textContent =
      "🏆 أحسنت!";

    resultText.innerHTML = `
      نتيجتك النهائية
      <br><br>

      <strong>
        ${players[0].score}
      </strong>

      نقطة 🔥
    `;

    return;

  }


  const p1 = players[0];

  const p2 = players[1];


  if (p1.score > p2.score) {

    resultTitle.textContent =
      `👑 ${p1.name} هو الـ KiNG!`;

  }

  else if (p2.score > p1.score) {

    resultTitle.textContent =
      `👑 ${p2.name} هو الـ KiNG!`;

  }

  else {

    resultTitle.textContent =
      "🤝 تعادل!";

  }


  resultText.innerHTML = `

    <div>
      👑 ${p1.name}
      <br>
      <strong>
        ${p1.score}
      </strong>
      نقطة
    </div>

    <hr style="
      border:0;
      border-top:1px solid #333;
      margin:15px 0;
    ">

    <div>
      👑 ${p2.name}
      <br>
      <strong>
        ${p2.score}
      </strong>
      نقطة
    </div>

  `;

}


// =====================================
// 🚀 تشغيل اللعبة
// =====================================

showScreen("startScreen");
