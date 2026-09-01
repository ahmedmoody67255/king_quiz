/* ===================== DATA ===================== */
const CATEGORIES = [
  {id:'football', icon:'⚽', name:'كورة القدم', questions:[
    {q:'مين اللاعب اللي سجل أول هدف في تاريخ كأس العالم (1930)؟', o:['لوسيان لوران','بيليه','مارادونا','زيدان'], a:0},
    {q:'أي منتخب فاز بأول نسخة من كأس أمم أفريقيا سنة 1957؟', o:['مصر','السودان','إثيوبيا','تونس'], a:0},
    {q:'كام مرة فاز بها نادي الأهلي بدوري أبطال أفريقيا حتى الآن (تقريبًا الأكتر في القارة)؟', o:['أكتر ناديين في أفريقيا','مرتين بس','مرة واحدة','لسه مفازش'], a:0},
    {q:'مين حارس المرمى اللي حقق رقم قياسي في عدد الكلين شيتس بكأس العالم؟', o:['هوجو يوريس','جانلويجي بوفون','مانويل نوير','إيكر كاسياس'], a:1},
    {q:'في أي سنة استضافت مصر كأس العالم لكرة اليد للمرة الأولى؟', o:['1999','2021','1995','2010'], a:0},
    {q:'مين أصغر لاعب سجل في نهائي كأس العالم؟', o:['بيليه','مبابي','ميسي','رونالدو'], a:0},
    {q:'أي دوري أوروبي بيُلقب بـ"الدوري الإنجليزي الممتاز" رسميًا من سنة؟', o:['1992','1985','2000','1978'], a:0},
    {q:'مين اللاعب الوحيد اللي فاز بالكرة الذهبية وهو لاعب في نادي أفريقي (مش أوروبي وقت الفوز)؟', o:['جورج ويا','صلاح','دروغبا','إيتو'], a:0},
  ]},
  {id:'history', icon:'🏛️', name:'تاريخ', questions:[
    {q:'مين الخليفة اللي أمر بجمع القرآن الكريم في مصحف واحد؟', o:['عمر بن الخطاب','أبو بكر الصديق','عثمان بن عفان','علي بن أبي طالب'], a:1},
    {q:'في أي سنة سقطت الدولة العثمانية رسميًا؟', o:['1924','1918','1936','1900'], a:0},
    {q:'مين قائد الجيش اللي هزم المغول في عين جالوت؟', o:['صلاح الدين','قطز والظاهر بيبرس','محمد علي','عمرو بن العاص'], a:1},
    {q:'الثورة الفرنسية اندلعت في أي سنة؟', o:['1789','1776','1804','1750'], a:0},
    {q:'مين اللي بنى مسجد محمد علي في القلعة؟', o:['يوسف بوشناق','معماري إيطالي بأمر محمد علي','أحمد باشا','إبراهيم باشا'], a:1},
    {q:'الحرب العالمية التانية انتهت رسميًا في أي سنة؟', o:['1945','1944','1939','1950'], a:0},
    {q:'مين أول حاكم أموي حوّل الخلافة لنظام وراثي؟', o:['معاوية بن أبي سفيان','عمر بن عبد العزيز','الوليد بن عبد الملك','يزيد بن معاوية'], a:0},
    {q:'إيه اسم المعاهدة اللي أنهت الحرب العالمية الأولى؟', o:['فرساي','يالطا','كامب ديفيد','وستفاليا'], a:0},
  ]},
  {id:'geo', icon:'🌍', name:'جغرافيا', questions:[
    {q:'أطول نهر في العالم من حيث الطول الرسمي؟', o:['النيل','الأمازون','المسيسيبي','اليانجتسي'], a:0},
    {q:'أي دولة بيها أكبر عدد من الجزر في العالم؟', o:['السويد','إندونيسيا','النرويج','اليابان'], a:0},
    {q:'إيه أصغر دولة في العالم من حيث المساحة؟', o:['موناكو','الفاتيكان','سان مارينو','ليختنشتاين'], a:1},
    {q:'مضيق جبل طارق بيفصل بين قارتين، هما؟', o:['أوروبا وأفريقيا','آسيا وأوروبا','أفريقيا وآسيا','أمريكا وأوروبا'], a:0},
    {q:'أعلى قمة جبلية في قارة أفريقيا؟', o:['كليمنجارو','جبل كينيا','أطلس','رأس دشن'], a:0},
    {q:'أي صحراء أكبر مساحة: الصحراء الكبرى ولا صحراء الربع الخالي؟', o:['الصحراء الكبرى','الربع الخالي','متساويين تقريبًا','صحراء جوبي'], a:0},
    {q:'دولة إيه بتضم أكبر عدد من الدول المتاخمة ليها (حدود بري مع 14 دولة)؟', o:['الصين','روسيا','البرازيل','فرنسا'], a:0},
    {q:'بحيرة فيكتوريا أكبر بحيرة في أفريقيا، بتشترك فيها كام دولة؟', o:['3 (تنزانيا، أوغندا، كينيا)','دولتين','5 دول','دولة واحدة'], a:0},
  ]},
  {id:'bio', icon:'🧬', name:'أحياء', questions:[
    {q:'إيه اسم العضو المسؤول عن إنتاج الأنسولين في جسم الإنسان؟', o:['البنكرياس','الكبد','الطحال','الكلى'], a:0},
    {q:'كام عدد عظام جسم الإنسان البالغ؟', o:['206','180','250','300'], a:0},
    {q:'إيه اسم العملية اللي بتحول بيها النباتات ضوء الشمس لطاقة؟', o:['البناء الضوئي','التنفس الخلوي','التمثيل الغذائي','التحلل'], a:0},
    {q:'إيه أكبر عضو في جسم الإنسان؟', o:['الجلد','الكبد','الرئة','الأمعاء'], a:0},
    {q:'الحمض النووي DNA بيتكون من كام قاعدة نيتروجينية أساسية؟', o:['4','2','6','8'], a:0},
    {q:'إيه اسم الخلايا المسؤولة عن نقل الأكسجين في الدم؟', o:['كريات الدم الحمراء','كريات الدم البيضاء','الصفائح الدموية','الخلايا العصبية'], a:0},
    {q:'أي جزء من المخ مسؤول عن التوازن؟', o:['المخيخ','المخ الأمامي','جذع المخ','الفص الصدغي'], a:0},
    {q:'إيه اسم أصغر وحدة بناء في الكائن الحي؟', o:['الخلية','النواة','النسيج','الجين'], a:0},
  ]},
  {id:'love', icon:'❤️', name:'حب وعلاقات', questions:[
    {q:'إيه اسم الهرمون اللي بيتفرز وقت الوقوع في الحب من أول نظرة؟ 😍', o:['الدوبامين','الميلاتونين','الإنسولين','الأدرينالين بس'], a:0},
    {q:'حسب دراسات علم النفس، أد إيه بتاخد "نظرة الحب الأولى" وقت لحد ما يتكوّن انطباع؟', o:['أقل من ثانية','5 دقائق','ساعة','يوم كامل'], a:0},
    {q:'إيه هو "هرمون الحضن" اللي بيتفرز وانت بتعانق حد بتحبه؟ 🤗', o:['الأوكسيتوسين','الكورتيزول','السيروتونين بس','التستوستيرون'], a:0},
    {q:'على تيك توك، إيه أشهر تريند بيتسأل فيه "لو حبيبك نسي كذا... رد فعلك إيه؟"', o:['تحديات الـ"Red Flags/Green Flags"','تحدي الغميضة','تحدي الطبخ','تحدي الرقص'], a:0},
    {q:'إيه اللغة اللي بيتكلمها القلب حسب كتاب "لغات الحب الخمس" لجاري تشابمان؟', o:['كلمات التشجيع، وقت، هدايا، لمسة، أفعال','لغة الجسد بس','لغة العيون بس','الموسيقى'], a:0},
    {q:'أد إيه بيستمر متوسط مرحلة "الوله الأول" (limerence) في العلاقات علميًا؟', o:['من شهور لحد سنتين تقريبًا','أسبوع واحد','عمر كامل','يوم واحد'], a:0},
    {q:'إيه أكتر حاجة بيقولها خبراء العلاقات إنها أساس أي علاقة ناجحة؟', o:['التواصل الصريح','الهدايا الغالية','عدم الخلاف نهائيًا','السوشيال ميديا'], a:0},
    {q:'على السوشيال ميديا، إيه معنى مصطلح "Situationship" اللي بيتريند كتير؟', o:['علاقة من غير تسمية أو التزام واضح','خطوبة رسمية','جواز','صداقة بس'], a:0},
  ]},
  {id:'eng', icon:'🇬🇧', name:'إنجليزي', questions:[
    {q:'What is the correct comparative form of "good"?', o:['Better','Gooder','More good','Best'], a:0},
    {q:'Which word is a synonym of "meticulous"?', o:['Careless','Careful/precise','Fast','Lazy'], a:1},
    {q:'"He ___ to the store yesterday." Choose the correct past tense.', o:['went','goed','gone','go'], a:0},
    {q:'What does the idiom "spill the beans" mean?', o:['Reveal a secret','Cook dinner','Make a mistake','Get angry'], a:0},
    {q:'Which sentence uses the present perfect tense correctly?', o:['I have visited Paris twice.','I visit Paris twice.','I am visiting Paris twice.','I visited Paris twice ago.'], a:0},
    {q:'What is the plural of "criterion"?', o:['Criteria','Criterions','Criterias','Criterion'], a:0},
    {q:'Which word means the opposite of "abundant"?', o:['Scarce','Plentiful','Huge','Wide'], a:0},
    {q:'"Neither of the boys ___ ready." Choose the correct verb.', o:['is','are','were','have'], a:0},
  ]},
  {id:'hangout', icon:'😂', name:'قعدة صحاب', questions:[
    {q:'لو صاحبك اتأخر ساعة على الميعاد، إيه أكتر عذر هيقوله على الأغلب؟', o:['الزحمة','نمت','النت وقع','مفيش بنزين'], a:0},
    {q:'إيه أشهر لعبة ورق بتتلعب في قعدات الأصحاب في مصر؟', o:['الكونكان','الشطرنج','الدومينو بس','بلوت'], a:0},
    {q:'لو حد في القعدة قالك "قولها بصراحة"، غالبًا هيبدأ إيه بعدها؟', o:['نقد مباشر مؤلم شوية 😂','مديح','سكوت','هزار'], a:0},
    {q:'إيه أكتر حاجة بتتقال في القعدة وقت ما الأكل يوصل؟', o:['"يا رب تكون كتير"','"مش عايز آكل"','"خليها لبكرة"','"مش جعان"'], a:0},
    {q:'مين غالبًا بيدفع الحساب في آخر القعدة حسب "التقليد المصري"؟', o:['اللي عزم أو أكبرهم سنًا','أصغرهم','بالقرعة دايمًا','محدش بيدفع'], a:0},
    {q:'إيه أشهر جملة بتتقال لما حد يهرب من دور اللعب؟', o:['"أنا بس بتفرج"','"مش عارف ألعب"','"جاي دلوقتي"','"معايا مكالمة"'], a:0},
    {q:'في قعدة الشيشة، إيه أكتر حاجة بتتقال كل شوية؟', o:['"هاتلنا فحم"','"سيبها كده"','"خلاص خلصت"','"مش عايز حاجة"'], a:0},
    {q:'إيه أكتر سؤال بيتقال في آخر القعدة وكله تعبان؟', o:['"نقفل الجلسة دلوقتي ولا نكمل؟"','"هنعمل إيه بكرة الصبح؟"','"هو الساعة كام؟"','"مين هيوصلني؟"'], a:0},
  ]},
  {id:'politics', icon:'🗳️', name:'سياسة', questions:[
    {q:'كام عدد الأعضاء الدائمين في مجلس الأمن التابع للأمم المتحدة؟', o:['5','10','15','7'], a:0},
    {q:'في أي مدينة يقع المقر الرئيسي للاتحاد الأفريقي؟', o:['أديس أبابا','القاهرة','نيروبي','أبوجا'], a:0},
    {q:'إيه اسم النظام السياسي اللي بيحكم فيه الشعب بشكل مباشر من غير ممثلين؟', o:['الديمقراطية المباشرة','الملكية الدستورية','الجمهورية البرلمانية','الفيدرالية'], a:0},
    {q:'كام عدد الدول الأعضاء المؤسسة لجامعة الدول العربية سنة 1945؟', o:['7','5','10','22'], a:0},
    {q:'إيه اسم المعاهدة اللي أسست الاتحاد الأوروبي بشكله الحالي سنة 1993؟', o:['معاهدة ماستريخت','معاهدة روما','معاهدة لشبونة','معاهدة باريس'], a:0},
    {q:'مين أول أمين عام للأمم المتحدة؟', o:['تريغفي لي','كوفي أنان','بطرس غالي','بان كي مون'], a:0},
    {q:'إيه معنى مصطلح "الفيتو" في القانون الدولي؟', o:['حق الاعتراض على قرار','حق التصويت','حق الترشح','حق العفو'], a:0},
    {q:'في أي عام تأسست منظمة الأمم المتحدة؟', o:['1945','1919','1950','1939'], a:0},
  ]},
  {id:'general', icon:'🧠', name:'معلومات عامة', questions:[
    {q:'إيه اسم أسرع حيوان بري في العالم؟', o:['الفهد الصياد (تشيتا)','الأسد','النمر','الحصان'], a:0},
    {q:'كام عدد عظام الرقبة عند الزرافة مقارنة بالإنسان؟', o:['نفس العدد (7)','ضعف العدد','نص العدد','3 بس'], a:0},
    {q:'إيه العنصر الكيميائي الأكتر وفرة في الكون؟', o:['الهيدروجين','الأكسجين','الكربون','الهيليوم'], a:0},
    {q:'مين مخترع المصباح الكهربائي العملي؟', o:['توماس إديسون','نيكولا تسلا','ألكسندر بيل','إسحاق نيوتن'], a:0},
    {q:'إيه أكبر محيط في العالم من حيث المساحة؟', o:['المحيط الهادي','المحيط الأطلسي','المحيط الهندي','المحيط المتجمد الشمالي'], a:0},
    {q:'كام لون في قوس قزح؟', o:['7','5','6','9'], a:0},
    {q:'إيه اسم أول قمر صناعي أطلق للفضاء؟', o:['سبوتنيك 1','أبولو 11','فوييجر 1','هابل'], a:0},
    {q:'إيه اللغة الأكتر تحدثًا في العالم كلغة أم؟', o:['الصينية الماندرين','الإنجليزية','الإسبانية','العربية'], a:0},
  ]},
  {id:'movies', icon:'🎬', name:'أفلام ومسلسلات', questions:[
    {q:'إيه أول فيلم رسوم متحركة طويل في تاريخ السينما؟', o:['سنو وايت والأقزام السبعة (1937)','توي ستوري','شركة المرعبين المحدودة','الأسد الملك'], a:0},
    {q:'مين مخرج ثلاثية "The Lord of the Rings"؟', o:['بيتر جاكسون','ستيفن سبيلبرغ','جيمس كاميرون','كريستوفر نولان'], a:0},
    {q:'إيه أعلى فيلم حقق إيرادات في تاريخ السينما (بدون تعديل التضخم) حتى وقت قريب؟', o:['Avatar','Avengers: Endgame','Titanic','Star Wars'], a:0},
    {q:'مين الممثل اللي لعب دور "الجوكر" وفاز بأوسكار عن الدور سنة 2020؟', o:['واكين فينيكس','هيث ليدجر','جاريد ليتو','خواكين تورس'], a:0},
    {q:'إيه اسم أول فيلم مصري ناطق في تاريخ السينما المصرية؟', o:['أولاد الذوات (1932)','العزيمة','دنيا','سلامة في خير'], a:0},
    {q:'مسلسل "Game of Thrones" مبني على سلسلة روايات لمين؟', o:['جورج آر. آر. مارتن','ج.ك. رولينج','ستيفن كينج','تولكين'], a:0},
    {q:'مين مخرج فيلم "Inception"؟', o:['كريستوفر نولان','دينيس فيلنوف','ديفيد فينشر','ريدلي سكوت'], a:0},
    {q:'إيه اسم الاستوديو المسؤول عن أفلام مثل "Inside Out" و"Up"؟', o:['بيكسار','ديزني أنيميشن','دريم ووركس','وارنر بروذرز'], a:0},
  ]},
];

/* ===================== STATE ===================== */
let state = {
  mode: 1,
  playerNames: ['اللاعب'],
  scores: [0],
  category: null,
  questions: [],
  index: 0,
  turn: 0,
  timer: null,
  timeLeft: 15,
  answered: false,
};

/* ===================== HELPERS ===================== */
const $ = sel => document.querySelector(sel);
const $all = sel => document.querySelectorAll(sel);

function showScreen(id){
  $all('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

/* ===================== BUILD CATEGORY GRID ===================== */
const catGrid = $('#cat-grid');
CATEGORIES.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'cat-btn';
  btn.innerHTML = `<span class="ic">${cat.icon}</span><span>${cat.name}</span>`;
  btn.addEventListener('click', () => startCategory(cat));
  catGrid.appendChild(btn);
});

/* ===================== HOME / MODE SELECT ===================== */
$all('.choice-btn[data-players]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.mode = parseInt(btn.dataset.players, 10);
    if(state.mode === 1){
      state.playerNames = ['اللاعب'];
      state.scores = [0];
      showScreen('screen-category');
    } else {
      state.playerNames = ['اللاعب 1', 'اللاعب 2'];
      state.scores = [0, 0];
      showScreen('screen-category');
    }
  });
});

$('#btn-back-home').addEventListener('click', () => showScreen('screen-home'));

/* ===================== START CATEGORY ===================== */
function startCategory(cat){
  state.category = cat;
  state.questions = shuffle(cat.questions);
  state.index = 0;
  state.turn = 0;
  state.scores = state.scores.map(() => 0);
  if(state.mode === 2){
    showPass();
  } else {
    showScreen('screen-question');
    loadQuestion();
  }
}

function showPass(){
  $('#pass-name').textContent = state.playerNames[state.turn];
  showScreen('screen-pass');
}
$('#btn-ready').addEventListener('click', () => {
  showScreen('screen-question');
  loadQuestion();
});

/* ===================== QUESTION FLOW ===================== */
function loadQuestion(){
  state.answered = false;
  const total = state.questions.length;
  const q = state.questions[state.index];

  $('#cat-tag').textContent = `${state.category.icon} ${state.category.name}`;
  $('#turn-pill').textContent = state.mode === 2 ? `دور ${state.playerNames[state.turn]}` : 'دورك أنت';
  $('#q-progress').textContent = `السؤال ${state.index + 1} من ${total}`;
  $('#question-text').textContent = q.q;

  // dots
  const dotsWrap = $('#dots');
  dotsWrap.innerHTML = '';
  for(let i=0;i<total;i++){
    const d = document.createElement('div');
    d.className = 'dot' + (i < state.index ? ' done' : '') + (i === state.index ? ' current' : '');
    dotsWrap.appendChild(d);
  }

  // options
  const optsWrap = $('#options');
  optsWrap.innerHTML = '';
  const order = q.o.map((text, idx) => ({text, idx}));
  shuffle(order).forEach(opt => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = opt.text;
    b.addEventListener('click', () => selectAnswer(opt.idx, b));
    optsWrap.appendChild(b);
  });

  $('#btn-next').disabled = true;
  startTimer();
}

function startTimer(){
  clearInterval(state.timer);
  state.timeLeft = 15;
  const circle = $('#timer-circle');
  const circumference = 151;
  circle.style.strokeDasharray = circumference;
  updateTimerUI(circle, circumference);

  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI(circle, circumference);
    if(state.timeLeft <= 0){
      clearInterval(state.timer);
      if(!state.answered) revealAnswer(-1);
    }
  }, 1000);
}

function updateTimerUI(circle, circumference){
  $('#timer-num').textContent = state.timeLeft;
  const pct = state.timeLeft / 15;
  circle.style.strokeDashoffset = circumference * (1 - pct);
  circle.style.stroke = state.timeLeft <= 5 ? '#e07a7a' : 'var(--gold-bright)';
}

function selectAnswer(idx, btnEl){
  if(state.answered) return;
  revealAnswer(idx);
}

function revealAnswer(chosenIdx){
  state.answered = true;
  clearInterval(state.timer);
  const q = state.questions[state.index];
  const buttons = $all('#options .opt');

  buttons.forEach(b => {
    b.disabled = true;
    const isCorrectText = b.textContent === q.o[q.a];
    if(isCorrectText){
      b.classList.add('correct');
    } else if(chosenIdx !== -1 && b.textContent === q.o[chosenIdx]){
      b.classList.add('wrong');
    } else {
      b.classList.add('faded');
    }
  });

  if(chosenIdx === q.a){
    state.scores[state.turn]++;
  }

  $('#btn-next').disabled = false;
}

$('#btn-next').addEventListener('click', () => {
  const total = state.questions.length;

  if(state.mode === 2){
    // alternate turn each question
    state.turn = (state.turn + 1) % state.playerNames.length;
    state.index++;
    if(state.index >= total){
      showResult();
    } else {
      showPass();
    }
  } else {
    state.index++;
    if(state.index >= total){
      showResult();
    } else {
      loadQuestion();
    }
  }
});

/* ===================== RESULT ===================== */
function showResult(){
  $('#result-sub').textContent = `${state.category.icon} ${state.category.name}`;

  if(state.mode === 1){
    $('#result-single').style.display = 'block';
    $('#result-multi').style.display = 'none';
    $('#result-title').textContent = 'النتيجة';
    $('#result-score').textContent = `${state.scores[0]}/${state.questions.length}`;
  } else {
    $('#result-single').style.display = 'none';
    $('#result-multi').style.display = 'flex';
    const wrap = $('#result-multi');
    wrap.innerHTML = '';
    const maxScore = Math.max(...state.scores);
    state.playerNames.forEach((name, i) => {
      const row = document.createElement('div');
      row.className = 'result-player-row' + (state.scores[i] === maxScore ? ' winner' : '');
      row.innerHTML = `<span>${state.scores[i] === maxScore ? '👑 ' : ''}${name}</span><span>${state.scores[i]}/${state.questions.length}</span>`;
      wrap.appendChild(row);
    });
    const tie = state.scores.every(s => s === maxScore);
    $('#result-title').textContent = tie ? 'تعادل!' : `${state.playerNames[state.scores.indexOf(maxScore)]} هو الـ KiNG!`;
  }

  showScreen('screen-result');
}

$('#btn-again').addEventListener('click', () => {
  showScreen('screen-category');
});
