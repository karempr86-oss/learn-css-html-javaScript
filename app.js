const lessons = [
["css-intro","المستوى الأول: الأساسيات","ما هو CSS؟","تعرف على دور CSS في تصميم المواقع","h1 {\\n  color: #1687ff;\\n  font-size: 32px;\\n}","<h1>مرحباً مع CSS</h1>","CSS هي لغة تنسيق تحدد الشكل والمظهر لصفحات الويب بعد بنائها بـ HTML."],
["css-add","المستوى الأول: الأساسيات","طرق إضافة CSS","Inline و Internal و External","body {\\n  background: #0b1424;\\n}","<h2>تطبيق CSS خارجي</h2>","أفضل طريقة في المشاريع هي استخدام ملف CSS خارجي وتطبيقه عبر وسم link."],
["selectors","المستوى الأول: الأساسيات","Selectors","اختيار العناصر بدقة",".card {\\n  border-radius: 12px;\\n}","<div class='card'>بطاقة جميلة</div>","المحددات تربط قواعد التنسيق بالعناصر من خلال الوسم أو الفئة أو المعرف."],
["colors","المستوى الأول: الأساسيات","Colors","ألوان HEX و RGB و HSL",".box {\\n  background: #1687ff;\\n  color: white;\\n}","<div class='box'>Hello CSS</div>","يمكن التعبير عن الألوان بعدة صيغ حسب احتياجك."],
["background","المستوى الأول: الأساسيات","Background","الخلفيات والألوان والتدرجات",".hero {\\n  min-height: 180px;\\n  background: linear-gradient(135deg,#1687ff,#7357ee);\\n}","<div class='hero'>خلفية احترافية</div>","خاصية background تدعم الألوان والصور والتدرجات."],
["fonts","المستوى الأول: الأساسيات","Fonts","نوع الخط والحجم والوزن","body {\\n  font-family: Tahoma, sans-serif;\\n  font-size: 16px;\\n}","<p>نص بخط واضح</p>","استخدم قائمة خطوط بحيث يوجد بديل مناسب عند تعذر الخط الأول."],
["text","المستوى الأول: الأساسيات","Text","محاذاة النص والمسافات والزخرفة","h2 {\\n  text-align: center;\\n  letter-spacing: 1px;\\n}","<h2>عنوان متناسق</h2>","تتحكم خصائص النص في المظهر والمحو الذكي للنصوص."],
["borders","المستوى الأول: الأساسيات","Borders","الحدود والزوايا والظلال",".card {\\n  border: 2px solid #1687ff;\\n  border-radius: 16px;\\n}","<div class='card'>بطاقة بإطار</div>","الحدود تساعد على الفصل والتسلسل البصري للعناصر."],
["spacing","المستوى الأول: الأساسيات","Margins & Padding","إدارة المساحات الداخلية والخارجية",".card {\\n  margin: 20px auto;\\n  padding: 24px;\\n}","<div class='card'>مسافات متوازنة</div>","Margin يخلق مسافة خارجية وPadding يخلق مسافة داخلية."],
["display","المستوى الثاني: تنسيق الصفحات","Display","Block و Inline و Grid و Flex",".row { display:flex; gap:12px; }","<div class='row'><span>أ</span><span>ب</span><span>ج</span></div>","خاصية display تحدد طريقة حساب العنصر في التدفق وحجم أبنائه."],
["position","المستوى الثاني: تنسيق الصفحات","Position","التموضع النسبي والمطلق والثابت",".badge { position:absolute; top:12px; right:12px; }","<div style='position:relative;height:150px'>محتوى<span class='badge'>جديد</span></div>","اختيارات position تتيح تموضع عناصر فوق تدفق الصفحة الطبيعي."],
["dimensions","المستوى الثاني: تنسيق الصفحات","Width & Height","قياس العناصر بالعرض والارتفاع",".box { width:80%; max-width:320px; height:120px; }","<div class='box'>صندوق مرن</div>","حدود العرض القصوى والمرنة تجعل التخطيط أكثر استجابة."],
["box-model","المستوى الثاني: تنسيق الصفحات","Box Model","Content و Padding و Border و Margin","* { box-sizing:border-box; }\\n.card { width:220px; padding:20px; }","<div class='card'>نموذج الصندوق</div>","Box model يحدد كيف تُحسب المسافات والقياسات النهائية للعنصر."],
["overflow","المستوى الثاني: تنسيق الصفحات","Overflow","التعامل مع المحتوى الزائد",".panel { height:150px; overflow:auto; }","<div class='panel'>محتوى إضافي طويل يمكن تمريره داخل اللوحة.</div>","يمكن إخفاء المحتوى الزائد أو تمريره ضمن العنصر."],
["pseudo-class","المستوى الثاني: تنسيق الصفحات","Pseudo Classes","حالات العنصر مثل hover و focus","button:hover {\\n  background:#7357ee;\\n  transform:translateY(-2px);\\n}","<button>مرر فوقي</button>","الـ pseudo classes تتيح التنسيق بناءً على حالة تفاعلية."],
["pseudo-element","المستوى الثاني: تنسيق الصفحات","Pseudo Elements","عناصر before و after","h2::after { content:' ✦'; color:#1687ff; }","<h2>عنوان مميز</h2>","Pseudo elements تضيف زخارف نصية دون HTML إضافي."],
["flexbox","المستوى الثالث: التصميم الاحترافي","Flexbox","محاذاة وتوزيع عناصر مرن",".row { display:flex; justify-content:space-between; align-items:center; }","<div class='row'><b>يمين</b><b>وسط</b><b>يسار</b></div>","Flexbox مثالي للقوائم والأزرار والصفوف أحادية البعد."],
["grid","المستوى الثالث: التصميم الاحترافي","CSS Grid","إنشاء تخطيط شبكي ثنائي الأبعاد",".grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }","<div class='grid'><span>1</span><span>2</span><span>3</span></div>","Grid يتحكم في الصفوف والأعمدة معاً."],
["responsive","المستوى الثالث: التصميم الاحترافي","Responsive Design","تصميم يتكيف مع أحجام الشاشات",".container { width:min(100% - 32px,1100px); margin-inline:auto; }","<div class='card container'>محتوى متجاوب</div>","التصميم المتجاوب يبني تجربة سهلة على الموبايل والحاسوب."],
["media","المستوى الثالث: التصميم الاحترافي","Media Queries","تغيير الأنماط حسب الشاشة","@media (max-width:600px) {\\n  .grid { grid-template-columns:1fr; }\\n}","<div class='grid'><span>عنصر متجاوب</span></div>","Media queries تطبق قواعد متخصصة عند تحقق شرط الشاشة."],
["variables","المستوى الثالث: التصميم الاحترافي","CSS Variables","إعادة استخدام القيم والمظهر",":root { --primary:#1687ff; }\\nbutton { background:var(--primary); }","<button>زر متغير</button>","المتغيرات تجعل تغيير الهوية البصرية أبسط وآمن."],
["transitions","المستوى الثالث: التصميم الاحترافي","Transitions","انتقالات سلسة للحالات","button { transition:.25s ease; }\\nbutton:hover { transform:scale(1.05); }","<button>انتقال سلس</button>","الانتقالات تحدث فرقاً احترافياً في تفاعل واجهة المستخدم."],
["transform","المستوى الثالث: التصميم الاحترافي","Transform","الدوران والتحريك والتحجيم",".shape { transform:translateY(-8px) rotate(3deg); }","<div class='shape'>تحويل بصري</div>","Transform يغير العرض بصرياً دون التأثير على تدفق الصفحة."],
["animations","المستوى الثالث: التصميم الاحترافي","Animations","إنشاء حركة بمراحل متعددة","@keyframes pulse { 50% { transform:scale(1.08); } }\\n.badge { animation:pulse 1.5s infinite; }","<div class='badge'>متحرك</div>","Animations تسمح بتحكم كامل في مراحل الحركة والتكرار."],
["advanced-selectors","المستوى الرابع: الاحتراف","Advanced Selectors","محددات مركبة ومتقدمة",".card:not(.disabled) > h2:first-child { color:#1687ff; }","<div class='card'><h2>عنوان متقدم</h2></div>","المحددات المتقدمة تحدد العناصر بدقة دون إضافات HTML."],
["advanced-grid","المستوى الرابع: الاحتراف","Advanced Grid","Minmax و Areas و النطاقات",".layout { display:grid; grid-template-columns:220px 1fr; }","<div class='layout'><aside>القائمة</aside><main>المحتوى</main></div>","Grid المتقدم يبني هياكل واجهات معقدة بأقل HTML."],
["complex-layout","المستوى الرابع: الاحتراف","Complex Layouts","دمج التقنيات لبناء واجهات قوية",".app-layout { display:grid; grid-template-columns:220px 1fr; min-height:100vh; }","<div class='app-layout'><aside>Sidebar</aside><main>Dashboard</main></div>","التخطيطات المعقدة تنشأ بدمج Grid و Flexbox والمسافات."],
["architecture","المستوى الرابع: الاحتراف","CSS Architecture","تنظيم الأنماط بمكونات قابلة للصيانة","/* BEM */\\n.card { }\\n.card__title { }\\n.card--featured { }","<div class='card card--featured'><h2 class='card__title'>بطاقة</h2></div>","اتبع بنية أسماء واضحة وفصل المكونات لتقليل تعارض الأنماط."],
["modern-ui","المستوى الرابع: الاحتراف","Modern UI Design","Glass و gradients و ظلال احترافية",".glass { background:rgba(255,255,255,.08); backdrop-filter:blur(12px); }","<div class='glass'>واجهة زجاجية حديثة</div>","استخدم الزجاج والتدرجات والظلال باعتدال لبناء هوية عصرية."],
["responsive-ui","المستوى الرابع: الاحتراف","Responsive Interfaces","واجهات كاملة لجميع الأجهزة","@media (max-width:760px) {\\n  .app-layout { grid-template-columns:1fr; }\\n}","<div class='app-layout'><header>قائمة</header><main>محتوى متجاوب</main></div>","واجهات متجاوبة تتطلب مراعاة المسافات والأنماط والتفاعل."]
].map(x=>({id:x[0],level:x[1],title:x[2],desc:x[3],code:x[4],html:x[5],text:x[6]}));
const levels=[...new Set(lessons.map(l=>l.level))];
const jsLessons=[
 ["js-intro","المستوى الأول: الأساسيات","Introduction to JavaScript","مقدمة عن JavaScript ودوره","console.log('مرحباً JavaScript');","مرحباً JavaScript"],
 ["js-variables","المستوى الأول: الأساسيات","Variables","تخزين البيانات داخل متغيرات","let name = 'Sara';\\nconsole.log(name);","Sara"],
 ["js-declarations","المستوى الأول: الأساسيات","let, const, var","اختيار نوع إعلان المتغيرات","const score = 100;\\nlet lives = 3;\\nconsole.log(score, lives);","100 3"],
 ["js-types","المستوى الأول: الأساسيات","Data Types","أنواع القيم في JavaScript","const user = { name:'Ali', active:true };\\nconsole.log(typeof user.active);","boolean"],
 ["js-strings","المستوى الأول: الأساسيات","Strings","التعامل مع النصوص","const text = 'CSS Master';\\nconsole.log(text.toUpperCase());","CSS MASTER"],
 ["js-numbers","المستوى الأول: الأساسيات","Numbers","الأرقام والعمليات الحسابية","const total = 12 + 8;\\nconsole.log(total);","20"],
 ["js-operators","المستوى الأول: الأساسيات","Operators","مشغلات المقارنة والحساب","console.log(10 > 5 && 4 === 4);","true"],
 ["js-conditions","المستوى الأول: الأساسيات","Conditions","اتخاذ القرار بالشروط","const score = 80;\\nif(score >= 50) console.log('نجح');","نجح"],
 ["js-loops","المستوى الأول: الأساسيات","Loops","تكرار التنفيذ","for(let i=1;i<=3;i++) console.log(i);","1 2 3"],
 ["js-functions","المستوى الثاني: الدوال والبيانات","Functions","إنشاء دوال قابلة لإعادة الاستخدام","function greet(name) {\\n  return 'مرحباً ' + name;\\n}\\nconsole.log(greet('نور'));","مرحباً نور"],
 ["js-arrow","المستوى الثاني: الدوال والبيانات","Arrow Functions","دوال سهمية مختصرة","const double = n => n * 2;\\nconsole.log(double(5));","10"],
 ["js-arrays","المستوى الثاني: الدوال والبيانات","Arrays","تنظيم قوائم البيانات","const skills = ['HTML','CSS','JS'];\\nconsole.log(skills[2]);","JS"],
 ["js-objects","المستوى الثاني: الدوال والبيانات","Objects","نمذجة بيانات متعلقة ببعضها","const course = { name:'JavaScript', xp:100 };\\nconsole.log(course.name);","JavaScript"],
 ["js-array-methods","المستوى الثاني: الدوال والبيانات","Array Methods","map وfilter وreduce","const nums=[1,2,3];\\nconsole.log(nums.map(n=>n*2));","[2,4,6]"],
 ["js-string-methods","المستوى الثاني: الدوال والبيانات","String Methods","أوامر معالجة النصوص","console.log('  Master  '.trim().toUpperCase());","MASTER"],
 ["js-scope","المستوى الثاني: الدوال والبيانات","Scope","نطاق رؤية المتغيرات","let global='عام';\\nfunction test(){return global;}\\nconsole.log(test());","عام"],
 ["js-hoisting","المستوى الثاني: الدوال والبيانات","Hoisting","رفع الإعلانات أثناء التنفيذ","console.log(greeting());\\nfunction greeting(){return 'مرحباً';}","مرحباً"],
 ["js-dom","المستوى الثالث: JavaScript المتقدم","DOM Manipulation","قراءة وتعديل عناصر الصفحة","document.body.innerHTML = '<h2>DOM يعمل!</h2>';","DOM يعمل!"],
 ["js-events","المستوى الثالث: JavaScript المتقدم","Events","التعامل مع حركات المستخدم","document.body.innerHTML='<button id=\"b\">اضغط</button>';\\nbody = document.querySelector('#b');","اضغط"],
 ["js-listeners","المستوى الثالث: JavaScript المتقدم","Event Listeners","ربط الحدث بالدالة","document.body.innerHTML='<button id=\"b\">0</button>';\\ndocument.querySelector('#b').onclick=()=>alert('تم الضغط');","زر تفاعلي"],
 ["js-forms","المستوى الثالث: JavaScript المتقدم","Forms","قراءة والتحقق من النماذج","const form={email:'student@example.com'};\\nconsole.log(form.email.includes('@'));","true"],
 ["js-localstorage","المستوى الثالث: JavaScript المتقدم","LocalStorage","حفظ بيانات المتصفح","localStorage.setItem('course','JavaScript');\\nconsole.log(localStorage.getItem('course'));","JavaScript"],
 ["js-sessionstorage","المستوى الثالث: JavaScript المتقدم","SessionStorage","حفظ بيانات جلسة مؤقتة","sessionStorage.setItem('step','2');\\nconsole.log(sessionStorage.getItem('step'));","2"],
 ["js-json","المستوى الثالث: JavaScript المتقدم","JSON","تحويل البيانات إلى JSON والعكس","const json=JSON.stringify({xp:100});\\nconsole.log(JSON.parse(json).xp);","100"],
 ["js-errors","المستوى الثالث: JavaScript المتقدم","Error Handling","التعامل الآمن مع الأخطاء","try { throw new Error('خطأ تجريبي'); } catch(e) { console.log(e.message); }","خطأ تجريبي"],
 ["js-es6","المستوى الثالث: JavaScript المتقدم","ES6+","ميزات JavaScript الحديثة","const items=['CSS','JS'];\\nconst [first,second]=items;\\nconsole.log(`${second} بعد ${first}`);","JS بعد CSS"],
 ["js-promises","المستوى الرابع: الاحتراف","Promises","التعامل مع العمليات غير المتزامنة","Promise.resolve(42).then(value=>console.log(value));","42"],
 ["js-async","المستوى الرابع: الاحتراف","Async/Await","كتابة أكواد async واضحة","async function load(){return 'جاهز';}\\nload().then(console.log);","جاهز"],
 ["js-fetch","المستوى الرابع: الاحتراف","Fetch API","جلب البيانات عبر الشبكة","console.log('fetch(url).then(response=>response.json())');","Fetch جاهز"],
 ["js-modules","المستوى الرابع: الاحتراف","Modules","تقسيم الكود إلى وحدات مستقلة","console.log('export / import');","Modules"],
 ["js-api","المستوى الرابع: الاحتراف","API Integration","دمج واجهات البيانات الخارجية","const api={status:'online'};\\nconsole.log(api.status);","online"],
 ["js-oop","المستوى الرابع: الاحتراف","OOP","برمجة كائنية وتخصيص السلوك","class Student { speak(){return 'أنا أتعلم';}}\\nconsole.log(new Student().speak());","أنا أتعلم"],
 ["js-classes","المستوى الرابع: الاحتراف","Classes","إنشاء نماذج JavaScript","class Card {}\\nconsole.log(Card.name);","Card"],
 ["js-advanced-dom","المستوى الرابع: الاحتراف","Advanced DOM","DOM متقدم وتحديث الواجهات","const box=document.createElement('b');\\nbox.textContent='واجهة متقدمة';\\ndocument.body.append(box);","واجهة متقدمة"],
 ["js-performance","المستوى الرابع: الاحتراف","Performance","تحسين سرعة واستجابة الكود","const start=performance.now();\\nconsole.log('وقت التنفيذ:',performance.now()-start);","تم القياس"]
].map(x=>({id:x[0],level:x[1],title:x[2],desc:x[3],code:x[4],example:x[5]}));
const jsLevels=[...new Set(jsLessons.map(l=>l.level))];
const jsProjects=[
 ["آلة حاسبة","Calculator","آلة حاسبة بسيطة"],["الساعة الرقمية","Digital Clock","ساعة تعمل مباشرة"],["عداد تفاعلي","Counter","زيادة وتقليل القيمة"],["مغير الألوان","Color Changer","تغيير لون الخلفية"],["التحقق من النموذج","Simple Form Validation","تحقق آمن من المدخلات"],["قائمة مهام","To-Do List","إضافة وحذف المهام"],["تطبيق اختبار","Quiz App","أسئلة ونتيجة نهائية"],["واجهة طقس","Weather Interface","عرض حالة الطقس"],["معرض صور","Image Gallery","تصفح ومعاينة الصور"],["الملف التفاعلي","Interactive Profile","تعديل معلومات واجهة"],["إدارة المهام","Task Management App","لوحة مهام متقدمة"],["لوحة تحكم","Dashboard","بيانات ومخططات تفاعلية"],["سلة تسوق","Shopping Cart","إضافة وإزالة المنتجات"],["حاسبة متقدمة","Advanced Calculator","عمليات ومفاتيح متقدمة"],["تطبيق API","API-Based Application","جلب وعرض بيانات API"]
];
const htmlLessons=[
 ["html-intro","المستوى الأول: الأساسيات","What is HTML?","مقدمة إلى HTML ودوره في بناء صفحات الويب","<h1>مرحباً HTML</h1>"],
 ["html-structure","المستوى الأول: الأساسيات","HTML Document Structure","بنية مستند HTML باستخدام doctype وhtml وhead وbody","<!DOCTYPE html>\n<html>\n<head><title>صفحة</title></head>\n<body><h1>محتوى</h1></body>\n</html>"],
 ["html-tags","المستوى الأول: الأساسيات","HTML Tags","وسوم HTML وعناصر الصفحة","<p>فقرة نصية</p>"],
 ["html-elements","المستوى الأول: الأساسيات","Elements","العنصر الذي يجمع الوسم والمحتوى","<article>محتوى المقال</article>"],
 ["html-attributes","المستوى الأول: الأساسيات","Attributes","إسناد معلومات إضافية للعناصر","<a href=\"https://example.com\">زيارة الموقع</a>"],
 ["html-headings","المستوى الأول: الأساسيات","Headings","عناوين هرمية من h1 إلى h6","<h1>العنوان الرئيسي</h1>\n<h2>عنوان فرعي</h2>"],
 ["html-paragraphs","المستوى الأول: الأساسيات","Paragraphs","كتابة الفقرات والنصوص","<p>هذه فقرة احترافية.</p>"],
 ["html-links","المستوى الأول: الأساسيات","Links","الانتقال والروابط الداخلية والخارجية","<a href=\"#courses\">دروسنا</a>"],
 ["html-images","المستوى الأول: الأساسيات","Images","عرض الصور مع النص البديل","<img src=\"photo.jpg\" alt=\"صورة وصفية\">"],
 ["html-lists","المستوى الأول: الأساسيات","Lists","القوائم المرتبة وغير المرتبة","<ul><li>HTML</li><li>CSS</li></ul>"],
 ["html-comments","المستوى الأول: الأساسيات","Comments","تعليقات توضيحية لا تظهر للمستخدم","<!-- هذا تعليق في الكود -->"],
 ["html-tables","المستوى الثاني: بناء الصفحات","Tables","تنظيم البيانات في صفوف وأعمدة","<table><tr><th>الدرس</th></tr><tr><td>HTML</td></tr></table>"],
 ["html-forms","المستوى الثاني: بناء الصفحات","Forms","جمع مدخلات المستخدم","<form><input name=\"name\"><button>إرسال</button></form>"],
 ["html-input-types","المستوى الثاني: بناء الصفحات","Input Types","أنواع حقول الإدخال","<input type=\"email\" required>"],
 ["html-buttons","المستوى الثاني: بناء الصفحات","Buttons","إنشاء أزرار تفاعلية","<button type=\"submit\">إرسال</button>"],
 ["html-labels","المستوى الثاني: بناء الصفحات","Labels","ربط عناوين الحقول بخياراتها","<label for=\"email\">البريد</label><input id=\"email\" type=\"email\">"],
 ["html-select","المستوى الثاني: بناء الصفحات","Select","قوائم اختيار المستخدَم","<select><option>مبتدئ</option><option>متقدم</option></select>"],
 ["html-textarea","المستوى الثاني: بناء الصفحات","Textarea","حقول نصوص متعددة الأسطر","<textarea rows=\"4\">اكتب رسالتك</textarea>"],
 ["html-semantic","المستوى الثاني: بناء الصفحات","Semantic HTML","وسوم تعبر عن معنى المحتوى","<header>الرأس</header><main>المحتوى</main><footer>التذييل</footer>"],
 ["html-div-span","المستوى الثاني: بناء الصفحات","Div and Span","حاويات بلوكية ومضمنة","<div class=\"card\"><span>محتوى</span></div>"],
 ["html-audio","المستوى الثالث: HTML المتقدم","Audio","تضمين الصوت والتحكم فيه","<audio controls src=\"audio.mp3\"></audio>"],
 ["html-video","المستوى الثالث: HTML المتقدم","Video","تضمين مقاطع الفيديو","<video controls src=\"video.mp4\"></video>"],
 ["html-iframes","المستوى الثالث: HTML المتقدم","Iframes","تضمين محتوى من مصدر منفصل","<iframe src=\"https://example.com\" title=\"معاينة\"></iframe>"],
 ["html-entities","المستوى الثالث: HTML المتقدم","HTML Entities","تمثيل رموز خاصة في الصفحة","&amp; &lt; &gt; &copy;"],
 ["html-data","المستوى الثالث: HTML المتقدم","Data Attributes","إضافة بيانات مخصصة للعناصر","<button data-action=\"save\">حفظ</button>"],
 ["html-meta","المستوى الثالث: HTML المتقدم","Meta Tags","بيانات وصفية للصفحة","<meta name=\"description\" content=\"دورة HTML\">"],
 ["html-seo","المستوى الثالث: HTML المتقدم","SEO Basics","بنّاء جاهز لمحركات البحث","<title>HTML Master</title>\n<meta name=\"description\" content=\"تعلم HTML\">"],
 ["html-accessibility","المستوى الثالث: HTML المتقدم","Accessibility","تحسين وصول جميع المستخدمين","<button aria-label=\"إغلاق النافذة\">×</button>"],
 ["html-semantic5","المستوى الثالث: HTML المتقدم","HTML5 Semantic Elements","وسوم دلالية حديثة","<section><article><h2>مقال HTML</h2></article></section>"],
 ["html-advanced-forms","المستوى الرابع: الاحتراف","Advanced Forms","نماذج احترافية بمدخلات مرتبطة","<fieldset><legend>بيانات الحساب</legend><input name=\"name\"></fieldset>"],
 ["html-validation","المستوى الرابع: الاحتراف","Form Validation","التحقق من صحة المدخلات","<input type=\"email\" required minlength=\"5\">"],
 ["html-a11y","المستوى الرابع: الاحتراف","Accessibility Best Practices","ترتيب ومحتوى ودوال وصول متكاملة","<nav aria-label=\"التنقل الرئيسي\"><a href=\"#main\">تخطٍ إلى المحتوى</a></nav>"],
 ["html-seo-advanced","المستوى الرابع: الاحتراف","SEO Optimization","عنوان ووصف وروابط ودلالات قوية","<main><h1>عنوان واضح</h1><p>محتوى مفيد.</p></main>"],
 ["html-responsive","المستوى الرابع: الاحتراف","Responsive HTML Structure","بنية تدعم تكييف الشاشات","<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"],
 ["html-clean","المستوى الرابع: الاحتراف","Clean Code Architecture","HTML منظم وقابل للصيانة","<section class=\"profile\"><h2>الملف الشخصي</h2></section>"],
 ["html-performance","المستوى الرابع: الاحتراف","HTML Performance","تحميل صور ووثائق بكفاءة","<img src=\"profile.webp\" alt=\"الملف\" loading=\"lazy\">"],
 ["html-real","المستوى الرابع: الاحتراف","Real World HTML Projects","بناء هياكل مواقع واقعية","<header></header><main></main><footer></footer>"]
].map(x=>({id:x[0],level:x[1],title:x[2],desc:x[3],code:x[4]}));
const htmlLevels=[...new Set(htmlLessons.map(l=>l.level))];
const htmlProjectList=[
 ["بطاقة شخصية","Personal Card","بطاقة شخصية بسيطة"],["ملف شخصي","Simple Profile","هيكل ملف شخصي"],["نموذج دخول","Basic Login Form","نموذج تسجيل دخول"],["قائمة تنقل","Navigation Menu","قائمة روابط"],["معرض صور","Image Gallery","معرض صور دلالي"],["صفحة تسجيل","Registration Page","نموذج تسجيل شامل"],["نموذج تواصل","Contact Form","نموذج رسالة"],["صفحة منتج","Product Page","معلومات المنتج"],["مقال مدونة","Blog Article","مقال معنوي"],["هيكل ملف أعمال","Portfolio Structure","هيكل موقع أعمال"],["متجر إلكتروني","Complete E-commerce Structure","هيكل متجر متكامل"],["محفظة احترافية","Professional Portfolio","موقع أعمال احترافي"],["موقع متعدد الصفحات","Multi-page Website","هيكل صفحات متعددة"],["موقع وصولي","Accessible Website","محتوى وصولي"],["صفحة هبوط SEO","SEO Optimized Landing Page","صفحة هبوط محسّنة"]
];
window.CSS_MASTER_UPLOAD_ENDPOINT ||= "https://us-central1-hack1-cb0f2.cloudfunctions.net/uploadProfileImage";
window.CSS_MASTER_COMMUNITY_ENDPOINT ||= "https://us-central1-hack1-cb0f2.cloudfunctions.net";
function applyLanguageTheme(language, persist=true){
 state.currentLanguage=["html","javascript","css"].includes(language)?language:"css";
 if(persist){state.lastLanguage=state.currentLanguage;localStorage.setItem("cssMasterState",JSON.stringify(state));}
 const root=document.documentElement;
 document.body.classList.remove("javascript-theme","html-theme");
 if(state.currentLanguage==="javascript"){
  root.style.setProperty("--primary","#F7DF1E");
  root.style.setProperty("--secondary","#D6B900");
  root.style.setProperty("--blue","#F7DF1E");
  root.style.setProperty("--blue-2","#FFE94A");
  root.style.setProperty("--purple","#D6B900");
  root.style.setProperty("--bg","#090a0a");
  root.style.setProperty("--panel","#11130e");
  document.body.classList.add("javascript-theme");
 }else if(state.currentLanguage==="html"){
  root.style.setProperty("--primary","#E34F26");
  root.style.setProperty("--secondary","#F06529");
  root.style.setProperty("--blue","#E34F26");
  root.style.setProperty("--blue-2","#F06529");
  root.style.setProperty("--purple","#F06529");
  root.style.setProperty("--bg","#090909");
  root.style.setProperty("--panel","#15100f");
  document.body.classList.add("html-theme");
 }else{
  root.style.setProperty("--primary","#3B82F6");
  root.style.setProperty("--secondary","#8B5CF6");
  root.style.setProperty("--blue","#1687ff");
  root.style.setProperty("--blue-2","#4ca4ff");
  root.style.setProperty("--purple","#9a63ff");
  root.style.setProperty("--bg","#070d19");
  root.style.setProperty("--panel","#0b1424");
  document.body.classList.remove("javascript-theme");
 }
 document.querySelectorAll("[data-language]").forEach(button=>button.classList.toggle("active",button.dataset.language===state.currentLanguage));
}
const state=Object.assign({
 completed:[],favorites:[],xp:0,name:"طالب CSS",
 exercisesCompleted:[],projectsCompleted:[],quizPassed:[],
 photoURL:"",bio:"",provider:"email",
 currentLanguage:"css",
 cssProgress:{level:1,xp:0,completedLessons:[],completedProjects:[],completedChallenges:[]},
 javascriptProgress:{level:1,xp:0,completedLessons:[],completedProjects:[],completedChallenges:[]},
 htmlProgress:{level:1,xp:0,completedLessons:[],completedProjects:[],completedChallenges:[]},
 lastLanguage:"css"
},JSON.parse(localStorage.getItem("cssMasterState")||"{}"));
let authResolved=false;
let profileObserver=null;
function save(){
 localStorage.setItem("cssMasterState",JSON.stringify(state));
 applyLanguageTheme(state.lastLanguage||state.currentLanguage||"css",false);
 updateSidebar();
 const user=window.cssMasterUser;
 if(authResolved&&user&&window.CSSMasterFirebase){
  const pct=state.completed.length?Math.round(state.completed.length/lessons.length*100):0;
  window.CSSMasterFirebase.saveProfile(user.uid,{
   username: state.name,
   bio: state.bio,
   photoURL: state.photoURL,
   provider: state.provider,
   xp: state.xp,
   level: Math.max(1,Math.floor(state.completed.length/8)+1),
   completedLessons: state.completed.length,
   completedProjects: state.projectsCompleted.length,
   completedChallenges: state.exercisesCompleted.length,
   progress: pct,
   completedLessonIds: state.completed,
   completedProjectIds: state.projectsCompleted,
   completedChallengeIds: state.exercisesCompleted,
   lastLanguage: state.lastLanguage||state.currentLanguage||"css",
   progressByLanguage: {
    css: {
     level: state.cssProgress?.level||Math.max(1,Math.floor(state.completed.length/8)+1),
     xp: state.cssProgress?.xp||state.xp||0,
     completedLessons: state.cssProgress?.completedLessons||state.completed,
     completedProjects: state.cssProgress?.completedProjects||state.projectsCompleted,
     completedChallenges: state.cssProgress?.completedChallenges||state.exercisesCompleted,
     progress: pct
    },
    javascript: {
     level: state.javascriptProgress?.level||1,
     xp: state.javascriptProgress?.xp||0,
     completedLessons: state.javascriptProgress?.completedLessons||[],
     completedProjects: state.javascriptProgress?.completedProjects||[],
     completedChallenges: state.javascriptProgress?.completedChallenges||[],
     progress: (state.javascriptProgress?.completedLessons?.length||0)?Math.round(state.javascriptProgress.completedLessons.length/jsLessons.length*100):0
    },
    html: {
     level: state.htmlProgress?.level||1,
     xp: state.htmlProgress?.xp||0,
     completedLessons: state.htmlProgress?.completedLessons||[],
     completedProjects: state.htmlProgress?.completedProjects||[],
     completedChallenges: state.htmlProgress?.completedChallenges||[],
     progress: (state.htmlProgress?.completedLessons?.length||0)?Math.round(state.htmlProgress.completedLessons.length/htmlLessons.length*100):0
    }
   }
  }).catch(()=>notify("لا يمكن مزامنة التقدم الآن"));
 }
}
function esc(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function notify(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function route(){return location.hash.slice(1).split("/");}
function navigate(r){location.hash=r}
function bind(){document.querySelectorAll("[data-route]").forEach(el=>el.onclick=e=>{e.preventDefault();navigate(el.dataset.route)});}
function render(){
 const [r,id]=route();
 if(!["javascript","js-curriculum","js-editor","js-lesson","js-projects","js-exercises","html","html-curriculum","html-editor","html-lesson","html-projects","html-exercises"].includes(r)&&r!=="")applyLanguageTheme("css",true);
 document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.dataset.route===r||(!r&&a.dataset.route==="home")));
 if(r==="login")loginPage(); else if(r==="register")registerPage();
 else if(r==="javascript")javascriptAcademy(); else if(r==="js-curriculum")javascriptCurriculum(); else if(r==="js-editor")javascriptEditor(); else if(r==="js-lesson")javascriptLesson(id); else if(r==="js-projects")javascriptProjects(); else if(r==="js-exercises")javascriptExercises();
 else if(r==="html")htmlAcademy(); else if(r==="html-curriculum")htmlCurriculum(); else if(r==="html-editor")htmlEditor(); else if(r==="html-lesson")htmlLesson(id); else if(r==="html-projects")htmlProjects(); else if(r==="html-exercises")htmlExercises();
 else if(r==="lesson")lesson(id||lessons[0].id); else if(r==="editor")editor(); else if(r==="exercises")exercises(); else if(r==="curriculum")curriculum();
 else if(r==="projects")projects(); else if(r==="project")project(id); else if(r==="community")community(); else if(r==="admin-reports")adminReportsPage(); else if(r==="quiz")quiz(); else if(r==="account")account(); else home();
 setTimeout(()=>window.dispatchEvent(new CustomEvent("cssmaster-route-rendered")),20);
}
function home(){
 const pct=Math.round(state.completed.length/lessons.length*100), last=lessons.find(l=>l.id===state.lastLesson)||lessons[0];
 app.innerHTML=`<div class="page"><section class="hero"><div class="hero-copy"><h1>تعلم <strong>CSS</strong> من الصفر إلى<br><em>الاحتراف</em></h1><p>دورة شاملة تجمع بين الشرح النظري والتدريبات العملية ومشاريع الويب الحقيقية، لتصمم واجهات احترافية بثقة.</p><div class="hero-actions"><button class="btn" data-route="lesson/${lessons[0].id}">ابدأ التعلم &nbsp; ▶</button><button class="btn secondary" data-route="projects">استكشف المشاريع &nbsp; ↗</button></div></div><div class="hero-visual"><div class="hero-glow"></div><div class="floating-code code-a">&lt;/&gt;</div><div class="floating-code code-b">&lt;style&gt;</div><div class="floating-code code-c">{ }</div><div class="laptop"><div class="laptop-screen"><div class="css-badge"></div></div><div class="laptop-base"></div></div></div></section>
 <section class="feature-row">${feature("⚡","شرح عملي مبسط","بأسلوب احترافي")}${feature("◇","مشاريع حقيقية","من كل مستوى")}${feature("&lt;/&gt;","تدريبات تفاعلية","مع حل مباشر")}${feature("✦","شهادة إتمام الدورة","بعد تحقيق النجاح")}</section>
 <section class="academy-card-grid"><article class="academy-card css-academy"><div class="academy-logo">CSS</div><div><span>مسار التعلم</span><h2>CSS Academy</h2><p>من الأساسيات إلى واجهات احترافية متجاوبة.</p><button class="btn" data-route="curriculum">أكمل تقدم CSS</button></div></article><article class="academy-card js-academy"><div class="academy-logo">JS</div><div><span>مسار التعلم</span><h2>JavaScript Academy</h2><p>${jsLessons.length} درساً • ${jsProjects.length} مشروعاً • مستوى من المبتدئ للاحتراف</p><button class="btn js-start" data-route="javascript">ابدأ JavaScript ←</button></div></article><article class="academy-card html-academy"><div class="academy-logo html-logo"><span>5</span></div><div><span>مسار التعلم</span><h2>HTML Academy</h2> <p>${htmlLessons.length} درساً • ${htmlProjectList.length} مشروعاً • بنية ويب احترافية</p><button class="btn html-start" data-route="html">ابدأ HTML ←</button></div></article></section>
 <section class="dashboard-grid"><div class="panel learning-panel"><div class="panel-head"><h3>محتوى الدورة</h3><a href="#curriculum">عرض المنهج الكامل ←</a></div><div class="lesson-preview"><div class="code-window"><div class="code-tabs"><span>style.css</span><span>index.html</span></div><pre class="code-area">body {\n  font-family: 'Cairo';\n  background: #0f172a;\n  color: #fff;\n}\n\n.container {\n  max-width: 1200px;\n  margin: auto;\n}</pre></div><div class="preview-window"><div class="browser-bar"><div class="browser-dots"><i></i><i></i><i></i></div><span>معاينة CSS</span></div><div class="mini-preview"><div><h4>Hello <span>CSS!</span></h4><p>تصميم احترافي في يديك</p><button class="btn" data-route="lesson/${lessons[0].id}">ابدأ الآن</button></div></div></div></div></div>
 <aside class="panel stats-panel"><div class="panel-head"><h3>تقدمك الدراسي</h3></div><div class="stat-progress"><div class="progress-ring" style="--p:${pct}"><strong>${pct}%<small>مكتمل</small></strong></div></div><div class="course-stats"><div class="course-stat"><b>${lessons.length}</b><span>درساً</span></div><div class="course-stat"><b>6</b><span>تدريبات</span></div></div><div class="resume-card"><small>آخر درس تمت دراستك</small><strong>${last.title}</strong><button class="btn" data-route="lesson/${last.id}">متابعة الدرس</button></div></aside></section>
 <section class="project-strip">${mini("⌂","مشاريع حقيقية","طبق ما تتعلمه")}${mini("⌕","بحث ذكي","ابحث عن الخاصية")}${mini("☆","إنجازات","اجمع النقاط والشارات")}${mini("✓","اختبارات","قيّم مستواك")}</section></div>`;bind();}
function feature(i,t,s){return `<div class="feature-card"><div class="feature-icon">${i}</div><div><strong>${t}</strong><span>${s}</span></div></div>`}
function mini(i,t,s){return `<div class="project-mini"><i>${i}</i><div><b>${t}</b><span>${s}</span></div></div>`}
function curriculum(){
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>منهج CSS الكامل</h1><p>مسار تدريجي من الأساسيات إلى الاحتراف</p></div><button class="btn" data-route="lesson/${lessons[0].id}">ابدأ الآن</button></div><div class="level-grid">${levels.map((level,n)=>`<section class="level-card"><div class="level-head"><h3>${level}</h3><span>${lessons.filter(l=>l.level===level).length} دروس</span></div><div class="lesson-grid">${lessons.filter(l=>l.level===level).map(l=>`<article class="lesson-card ${state.completed.includes(l.id)?"done":""}" data-route="lesson/${l.id}"><h4>${l.title}</h4><p>${l.desc}</p>${state.completed.includes(l.id)?'<span class="status">✓</span>':''}<button class="fav" data-fav="${l.id}">${state.favorites.includes(l.id)?'★':'☆'}</button></article>`).join("")}</div></section>`).join("")}</div></div>`;bind();
 document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();const id=b.dataset.fav,n=state.favorites.indexOf(id);n>=0?state.favorites.splice(n,1):state.favorites.push(id);save();curriculum();notify(n>=0?"أزيلت من المفضلة":"أضيفت إلى المفضلة")});
}
function lesson(id){
 const i=lessons.findIndex(l=>l.id===id),l=lessons[i]||lessons[0];l.code=l.code.replace(/\\n/g,"\n");state.lastLesson=l.id;save();
 const codeLines=l.code.split("\n").filter(Boolean).map((line,n)=>`<div class="code-line"><b>${n+1}</b><code>${esc(line)}</code><span>${n===0?"يبدأ تحديد العنصر وقاعدة تنسيقه":line.includes("{")?"يفتح كتلة القواعد":line.includes("}")?"يغلق كتلة القواعد":"تطبق هذه الخاصية للقيمة المحددة"}</span></div>`).join("");
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${l.title}</h1><p>${l.level}</p></div><button class="btn secondary" data-route="curriculum">كل الدروس</button></div><div class="lesson-layout"><aside class="lesson-steps">${lessons.map(x=>`<button class="${x.id===l.id?"active":""}" data-route="lesson/${x.id}">${x.title}</button>`).join("")}</aside><article class="lesson-content"><div class="lesson-body"><h1>${l.title}</h1><p>${l.text}</p><div class="callout"><strong>فكرة الدرس:</strong> ${l.desc}. ركز على النتيجة المرئية ثم تأكد من كل سطر.</div><h2>مثال عملي</h2><div class="code-block"><div class="code-title"><span>CSS</span><button class="copy-mini" data-copy>نسخ الكود</button></div><pre>${esc(l.code)}</pre></div><h2>شرح سطور الكود</h2><div class="code-explanation">${codeLines}</div><h2>شغل المثال مباشرة</h2><div class="practice-grid"><textarea class="practice-code" id="practiceCss">${l.code}</textarea><div class="lesson-result" id="lessonResult"></div></div><h2>تحدي بعد الدرس</h2><div class="lesson-challenge"><p>غيّر قيمة إحدى خصائص المثال وشاهد التأثير، ثم استخدم الزر أدناه عند انتهاء التدريب.</p><button class="btn purple" id="exerciseComplete">إكمال تحدي الدرس +20 XP</button></div><h2>أخطاء شائعة</h2><p>لا تنسَ نقطتي الفاصلة، ولا تخلط بين اسم الخاصية وقيمتها. تأكد أيضاً من تطابق الأقواس والفواصل.</p></div><div class="lesson-actions"><button class="btn" id="completeLesson">${state.completed.includes(l.id)?"مكتمل ✓":"إكمال الدرس وتحصل على XP"}</button><button class="btn secondary" ${i>=lessons.length-1?"disabled":""} data-route="lesson/${lessons[Math.min(i+1,lessons.length-1)].id}">الدرس التالي ←</button></div></article></div></div>`;
 bind();document.querySelector(".copy-mini").onclick=()=>{navigator.clipboard?.writeText(l.code);notify("تم نسخ الكود")};
 const css=document.getElementById("practiceCss"),res=document.getElementById("lessonResult");
 function preview(){const doc=`<!doctype html><html dir="rtl"><head><meta charset="UTF-8"><style>*{box-sizing:border-box}body{font-family:Tahoma;margin:0;min-height:150px;display:grid;place-items:center;text-align:center;background:white;color:#18243a}${css.value}</style></head><body>${l.html}</body></html>`;res.innerHTML=`<iframe title="نتيجة الدرس" style="width:100%;height:148px;border:0" srcdoc="${esc(doc)}"></iframe>`}css.oninput=preview;preview();
 document.getElementById("completeLesson").onclick=()=>{if(!state.completed.includes(l.id)){state.completed.push(l.id);state.xp+=30}save();notify("تم إكمال الدرس! +30 XP");lesson(l.id)};
 document.getElementById("exerciseComplete").onclick=()=>{if(!state.exercisesCompleted.includes("lesson-"+l.id)){state.exercisesCompleted.push("lesson-"+l.id);state.xp+=20;save();notify("تم إكمال تحدي الدرس! +20 XP")}else notify("تم إكمال تحدي هذا الدرس مسبقاً")};
}
function highlightEditorCode(code, language){
 let escaped=esc(code);
 if(language==="html"){
  escaped=escaped.replace(/(&lt;\/?)([\w-]+)/g,'<span class="editor-tag">$1$2</span>')
   .replace(/([\w-]+)=(&quot;[^&]*&quot;)/g,'<span class="editor-attr">$1</span>=<span class="editor-string">$2</span>');
 }else if(language==="css"){
  escaped=escaped.replace(/([.#]?[\w-]+)(\s*\{)/g,'<span class="editor-selector">$1</span>$2')
   .replace(/([a-zA-Z-]+)(\s*:)([^;{}]+)/g,'<span class="editor-property">$1</span>$2<span class="editor-value">$3</span>');
 }else{
  const keywords=["const","let","var","function","return","if","else","for","while","async","await","new","class","try","catch","throw","document","window","console","true","false","null","undefined"];
  const tokenPattern=/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\b[A-Za-z_$][\w$]*\b)/g;
  let result="",last=0,match;
  while((match=tokenPattern.exec(code))){
   result+=esc(code.slice(last,match.index));
   const token=match[0];
   if(token.startsWith("//")||token.startsWith("/*"))result+=`<span class="editor-comment">${esc(token)}</span>`;
   else if(/^["'`]/.test(token))result+=`<span class="editor-string">${esc(token)}</span>`;
   else if(keywords.includes(token))result+=`<span class="editor-keyword">${esc(token)}</span>`;
   else result+=esc(token);
   last=match.index+token.length;
  }
  result+=esc(code.slice(last));
  escaped=result;
 }
 return escaped+"\n";
}
function formatEditorCode(code, language){
 if(language==="html"){
  const voidTags=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);
  let depth=0;
  const tags=code.replace(/>\s*</g,">\n<").split("\n");
  return tags.map(raw=>{
   const line=raw.trim();
   if(!line)return "";
   const closingMatch=line.match(/^<\/([^\s>]+)/);
   if(closingMatch)depth=Math.max(0,depth-1);
   const formatted="  ".repeat(depth)+line;
   const openingMatch=line.match(/^<([a-zA-Z][\w:-]*)\b[^>]*>/);
   if(openingMatch){
    const name=openingMatch[1].toLowerCase();
    if(!/^<\//.test(line)&&!voidTags.has(name)&&!/\/>$/.test(line)&&!line.includes(`</${name}>`))depth++;
   }
   return formatted;
  }).filter(Boolean).join("\n").trim();
 }
 if(language==="css"){
  let depth=0;
  return code.replace(/\s*{\s*/g," {\n").replace(/;\s*/g,";\n").replace(/\s*}\s*/g,"\n}\n").split("\n").map(line=>{
   line=line.trim();
   if(line.includes("}"))depth=Math.max(0,depth-1);
   const formatted=(depth?"  ".repeat(depth):"")+line;
   if(line.includes("{"))depth++;
   return formatted;
  }).join("\n").replace(/\n{3,}/g,"\n\n").trim();
 }
 let depth=0;
 return code.replace(/\s*{\s*/g," {\n").replace(/;\s*/g,";\n").replace(/\s*}\s*/g,"\n}\n").split("\n").map(line=>{
  line=line.trim();
  if(line.startsWith("}"))depth=Math.max(0,depth-1);
  const formatted=(depth?"  ".repeat(depth):"")+line;
  if(line.endsWith("{"))depth++;
  return formatted;
 }).join("\n").replace(/\n{3,}/g,"\n\n").trim();
}
function createSharedEditor(config){
 applyLanguageTheme(config.theme||"css");
 const panes=config.panes;
 const accent=config.accent||"#1687ff";
 app.innerHTML=`<div class="page unified-editor-page"><div class="section-title"><div><h1>${esc(config.title)}</h1><p>${esc(config.subtitle)}</p></div></div><div class="shared-editor-shell" style="--editor-accent:${accent}" id="sharedEditor"><div class="shared-editor-toolbar"><div class="editor-window-title"><span class="window-dots"><i></i><i></i><i></i></span><b>${esc(config.title)}</b></div><div class="editor-actions" id="editorActions"><button data-action="run" class="primary">تشغيل <span>▶</span></button><button data-action="format">Format</button><button data-action="reset">إعادة التعيين</button><button data-action="copy">نسخ</button><button data-action="download">تحميل</button><button data-action="fullscreen">ملء الشاشة</button><button data-action="preview">إخفاء المعاينة</button>${config.console?'<button data-action="clear">مسح Console</button>':""}</div></div><div class="mobile-editor-tabs"><button class="active" data-mobile-tab="code">المحررات</button><button data-mobile-tab="preview">المعاينة</button></div><div class="shared-editor-main"><div class="shared-editors" id="sharedEditors">${panes.map(pane=>`<div class="shared-code-pane" data-language="${pane.language}"><div class="shared-pane-head"><strong>${esc(pane.label)}</strong><span>${pane.language.toUpperCase()}</span></div><div class="shared-code-area"><div class="line-numbers" aria-hidden="true"></div><div class="code-mirror-wrap"><pre class="code-highlight" aria-hidden="true"></pre><textarea class="code-textarea" data-editor="${pane.id}" data-language="${pane.language}" spellcheck="false" autocomplete="off" autocapitalize="off" autocorrect="off"></textarea></div></div></div>`).join("")}</div><div class="shared-preview-column" id="sharedPreview"><div class="shared-preview-head"><strong>Live Preview</strong><div><button data-action="zoom-out">−</button><span id="previewZoom">100%</span><button data-action="zoom-in">+</button><button data-action="refresh">تحديث</button></div></div><iframe class="shared-preview-frame" id="sharedPreviewFrame" title="معاينة الكود" sandbox="allow-scripts"></iframe>${config.console?'<div class="shared-console"><div><strong>Console</strong><button data-action="clear">مسح</button></div><pre id="sharedConsoleOutput"></pre></div>':""}</div></div></div></div>`;
 const editors={};
 panes.forEach(pane=>{
  const textarea=app.querySelector(`[data-editor="${pane.id}"]`);
  const wrap=textarea.closest(".shared-code-area");
  const highlight=wrap.querySelector(".code-highlight");
  const gutter=wrap.querySelector(".line-numbers");
  textarea.value=pane.code;
  textarea.setAttribute("dir","ltr");
  function sync(){
   highlight.innerHTML=highlightEditorCode(textarea.value,pane.language);
   const count=textarea.value.split("\n").length;
   gutter.innerHTML=Array.from({length:count},(_,i)=>`<span>${i+1}</span>`).join("");
   highlight.scrollTop=textarea.scrollTop;highlight.scrollLeft=textarea.scrollLeft;gutter.scrollTop=textarea.scrollTop;
  }
  textarea.addEventListener("input",()=>{sync();if(config.autoPreview!==false)run(false);});
  textarea.addEventListener("scroll",sync);
  textarea.addEventListener("keydown",event=>{
   if(event.key==="Tab"){
    event.preventDefault();
    const start=textarea.selectionStart,end=textarea.selectionEnd;
    textarea.setRangeText("  ",start,end,"end");sync();if(config.autoPreview!==false)run(false);
   }
   if(event.key==="Enter"){
    event.preventDefault();
    const start=textarea.selectionStart;
    const before=textarea.value.slice(0,start);
    const lineBefore=before.split("\n").pop()||"";
    const indent=(lineBefore.match(/^[\t ]*/)||[""])[0];
    const extra=(lineBefore.trimEnd().endsWith("{")||lineBefore.trimEnd().endsWith("(")||lineBefore.trimEnd().endsWith("["))?"  ":"";
    const after=textarea.value.slice(textarea.selectionEnd);
    const shouldClose=extra&&/^[\]\)}]/.test(after);
    const insertion="\n"+indent+extra+(shouldClose?"\n"+indent:"");
    textarea.setRangeText(insertion,start,textarea.selectionEnd,"end");
    textarea.selectionStart=textarea.selectionEnd=start+1+indent.length+extra.length;
    sync();if(config.autoPreview!==false)run(false);
   }
   const pairs={"(":")","{":"}","[":"]",'"':'"',"'":"'","`":"`"};
   if(pairs[event.key]){
    event.preventDefault();
    const start=textarea.selectionStart,end=textarea.selectionEnd;
    if(event.key!==pairs[event.key]){
     textarea.setRangeText(event.key+pairs[event.key],start,end,"end");
     textarea.selectionStart=textarea.selectionEnd=start+1;
    }else{
     if(textarea.value[start]===event.key){textarea.selectionStart=textarea.selectionEnd=start+1;}else textarea.setRangeText(event.key,start,end,"end");
    }
    sync();
   }
  });
  sync();editors[pane.id]={textarea,pane,sync};
 });
 const shell=app.querySelector("#sharedEditor"),main=app.querySelector(".shared-editor-main"),preview=app.querySelector("#sharedPreviewFrame"),consoleOutput=app.querySelector("#sharedConsoleOutput");
 let previewZoom=100;
 function buildDocument(){
  const get=id=>editors[id]?.textarea.value||"";
  if(config.mode==="html"){
   return `<!doctype html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${get("css")}</style></head><body>${get("html")}<script>
   (()=>{const send=(type,args)=>parent.postMessage({type,args:Array.from(args).map(String)},"*");["log","warn","error"].forEach(type=>{const original=console[type];console[type]=(...args)=>{send(type,args);original(...args)}});window.addEventListener("error",e=>send("error",[e.message]));try{${get("javascript")}}catch(e){send("error",[e.name+": "+e.message])}})();
   <\/script></body></html>`;
  }
  if(config.mode==="javascript"){
   return `<!doctype html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${get("css")}</style></head><body>${get("html")}<script>
   (()=>{const send=(type,args)=>parent.postMessage({type,args:Array.from(args).map(String)},"*");["log","warn","error"].forEach(type=>{const original=console[type];console[type]=(...args)=>{send(type,args);original(...args)}});window.addEventListener("error",e=>send("error",[e.message]));try{${get("javascript")}}catch(e){send("error",[e.name+": "+e.message])}})();
   <\/script></body></html>`;
  }
  return `<!doctype html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${get("css")}</style></head><body>${get("html")}</body></html>`;
 }
 function run(show=true){
  if(consoleOutput)consoleOutput.textContent="";
  preview.srcdoc=buildDocument();
  if(show)notify("تم تشغيل الكود");
 }
 const consoleHandler=e=>{if(consoleOutput&&e.source===preview.contentWindow){const line=(e.data?.args||[]).join(" ");consoleOutput.textContent+=(e.data?.type==="error"?"خطأ: ":"")+line+"\n";}};
 window.addEventListener("message",consoleHandler);
 app.querySelectorAll("[data-action]").forEach(button=>button.onclick=()=>{
  const action=button.dataset.action;
  if(action==="run")run(true);
  if(action==="format"){Object.values(editors).forEach(item=>{item.textarea.value=formatEditorCode(item.textarea.value,item.pane.language);item.sync();});run(false);notify("تم تنسيق الكود");}
  if(action==="reset"){panes.forEach(pane=>{const item=editors[pane.id];item.textarea.value=pane.code;item.sync();});run(false);notify("تمت إعادة التعيين");}
  if(action==="copy"){const text=panes.map(p=>`/* ${p.label} */\n${editors[p.id].textarea.value}`).join("\n\n");navigator.clipboard?.writeText(text);notify("تم نسخ الأكواد");}
  if(action==="download"){const blob=new Blob([panes.map(p=>editors[p.id].textarea.value).join("\n\n")],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`css-master-${config.mode||"code"}.txt`;a.click();URL.revokeObjectURL(url);notify("تم تحميل الكود");}
  if(action==="fullscreen"){if(shell.requestFullscreen)shell.requestFullscreen();else notify("ملء الشاشة غير متاح");}
  if(action==="preview"){const column=app.querySelector("#sharedPreview");column.classList.toggle("preview-hidden");button.textContent=column.classList.contains("preview-hidden")?"إظهار المعاينة":"إخفاء المعاينة";main.classList.toggle("preview-hidden-main",column.classList.contains("preview-hidden"));}
  if(action==="clear"&&consoleOutput)consoleOutput.textContent="";
  if(action==="refresh")run(false);
  if(action==="zoom-in"){previewZoom=Math.min(125,previewZoom+25);app.querySelector("#previewZoom").textContent=previewZoom+"%";preview.style.width=previewZoom+"%";}
  if(action==="zoom-out"){previewZoom=Math.max(75,previewZoom-25);app.querySelector("#previewZoom").textContent=previewZoom+"%";preview.style.width=previewZoom+"%";}
 });
 app.querySelectorAll("[data-mobile-tab]").forEach(button=>button.onclick=()=>{
  app.querySelectorAll("[data-mobile-tab]").forEach(b=>b.classList.remove("active"));button.classList.add("active");
  main.classList.toggle("mobile-preview-active",button.dataset.mobileTab==="preview");
 });
 run(false);
}
function editor(){
 createSharedEditor({
  title:"محرر CSS",
  subtitle:"HTML و CSS ومعاينة مباشرة في مكان واحد",
  theme:"css",
  accent:"#3B82F6",
  mode:"css",
  autoPreview:true,
  console:false,
  panes:[
   {id:"html",label:"HTML",language:"html",code:'<main class="card">\n  <span class="tag">CSS Master</span>\n  <h1>تصميم احترافي</h1>\n  <p>عدّل الكود وشاهد النتيجة مباشرة</p>\n  <button>ابدأ الآن</button>\n</main>'},
   {id:"css",label:"CSS",language:"css",code:'body {\n  min-height:100vh;\n  display:grid;\n  place-items:center;\n  direction:rtl;\n  background:linear-gradient(135deg,#0b1c3a,#1a3972);\n  font-family:Tahoma;\n}\n.card {\n  width:320px;\n  padding:32px;\n  text-align:center;\n  color:white;\n  background:rgba(255,255,255,.08);\n  border:1px solid rgba(255,255,255,.15);\n  border-radius:18px;\n  backdrop-filter:blur(12px);\n}\n.tag { color:#73b4ff; }\nbutton { border:0; padding:10px 22px; border-radius:8px; color:white; background:#1687ff; }'}
  ]
 });
}
function exercises(){
 const items=[
  {id:"center-card",level:"easy",xp:20,title:"وسّط البطاقة",task:"اجعل البطاقة بعرض 220 بكسل وتظهر في المنتصف.",hint:"card { width: 220px; margin: 20px auto; }",target:"card"},
  {id:"hover-link",level:"easy",xp:25,title:"غيّر حالة الرابط",task:"اجعل الرابط يتغير عند المرور عليه ولا يخرج عن التفاعل.",hint:"a:hover { color: #1687ff; }",target:"a"},
  {id:"flex-row",level:"medium",xp:40,title:"صف عناصر مرن",task:"وزع ثلاثة عناصر بالتساوي باستخدام Flexbox.",hint:"row { display: flex; justify-content: space-between; }",target:"row"},
  {id:"responsive-grid",level:"medium",xp:50,title:"شبكة متجاوبة",task:"أنشئ ثلاث أعمدة تتغير إلى عمود واحد على الموبايل.",hint:"grid { display: grid; grid-template-columns: repeat(3,1fr); }",target:"grid"},
  {id:"glass-card",level:"hard",xp:80,title:"بطاقة زجاجية",task:"اعمل بطاقة شفافة وحدوداً خفيفة وتأثير ضبابي.",hint:"glass { background: rgba(255,255,255,.12); backdrop-filter: blur(12px); }",target:"glass"},
  {id:"admin-layout",level:"hard",xp:100,title:"تخطيط لوحة إدارة",task:"أنشئ تخطيطاً بين شريط جانبي ومحتوى رئيسي.",hint:"layout { display:grid; grid-template-columns:220px 1fr; }",target:"layout"}
 ];
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>التدريبات والتحديات</h1><p>تمارين تفاعلية بمستويات سهلة ومتوسطة وصعبة</p></div><button class="btn" data-route="editor">محرر الأكواد</button></div><div class="exercises-grid">${items.map(x=>`<article class="exercise-card"><span class="difficulty ${x.level}">${x.level==="easy"?"سهل":x.level==="medium"?"متوسط":"صعب"}</span><h3>${x.title}</h3><p>${x.task}</p><div class="exercise-meta"><span>${x.xp} XP</span><span>${state.exercisesCompleted.includes(x.id)?"مكتمل ✓":"غير مكتمل"}</span></div><button class="btn exercise-open" data-exercise="${x.id}">فتح التدريب</button></article>`).join("")}</div></div>`;
 bind();
 document.querySelectorAll("[data-exercise]").forEach(b=>b.onclick=()=>openExercise(items.find(x=>x.id===b.dataset.exercise)));
}
function openExercise(x){
 openModal(x.title,`<p style="color:var(--muted);line-height:1.8">${x.task}</p><textarea id="exerciseInput" class="practice-code" style="width:100%;height:130px" spellcheck="false"></textarea><div class="lesson-result" id="exercisePreview" style="margin-top:10px;min-height:120px"></div><div class="modal-actions"><button class="btn secondary" id="exerciseHint">تلميح</button><button class="btn" id="exerciseCheck">فحص الحل</button></div>`);
 const input=document.getElementById("exerciseInput");
 const defaults={card:"card {\\n  width: 220px;\\n  margin: 20px auto;\\n}",a:"a:hover {\\n  color: #1687ff;\\n}",row:"row {\\n  display: flex;\\n  justify-content: space-between;\\n}",grid:"grid {\\n  display: grid;\\n  grid-template-columns: repeat(3,1fr);\\n}",glass:"glass {\\n  background: rgba(255,255,255,.12);\\n  backdrop-filter: blur(12px);\\n}",layout:"layout {\\n  display: grid;\\n  grid-template-columns: 220px 1fr;\\n}"};
 input.value=defaults[x.target].replace(/\\n/g,"\n");
 function preview(){const target=x.target;const doc=`<!doctype html><html dir="rtl"><head><meta charset="UTF-8"><style>*{box-sizing:border-box}body{margin:0;min-height:140px;display:grid;place-items:center;font-family:Tahoma;background:#eef3f8}${target==="a"?"a{display:inline-block;padding:12px;color:#1a4f91;text-decoration:none}":""}${target==="row"?"row{display:flex;width:250px;gap:10px}row>*{flex:1;padding:12px;background:#1687ff;color:white}":""}${target==="grid"?"grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:260px}grid>*{padding:12px;background:#1687ff;color:white}":""}${target==="glass"?"body{background:linear-gradient(135deg,#102747,#6d50b7)}glass{display:block;padding:24px;border-radius:12px;color:white}":""}${target==="layout"?"layout{display:grid;width:280px;min-height:110px}aside{background:#152845;color:white;padding:12px}main{background:white;padding:12px}":""}${input.value}</style></head><body>${target==="a"?'<a href="#">رابط تجريبي</a>':target==="row"?'<row><b>أ</b><b>ب</b><b>ج</b></row>':target==="grid"?'<grid><b>1</b><b>2</b><b>3</b></grid>':target==="glass"?'<glass>بطاقة زجاجية</glass>':target==="layout"?'<layout><aside>القائمة</aside><main>المحتوى</main></layout>':'<card>بطاقة التدريب</card>'}</body></html>`;document.getElementById("exercisePreview").innerHTML=`<iframe title="معاينة التدريب" style="width:100%;height:118px;border:0" srcdoc="${esc(doc)}"></iframe>`}
 input.oninput=preview;preview();
 document.getElementById("exerciseHint").onclick=()=>notify("تلميح: "+x.hint);
 document.getElementById("exerciseCheck").onclick=()=>{
  const answer=input.value.toLowerCase().replace(/\s+/g," ");
  const checks={card:["width","220px","margin"],a:["a:hover","color"],row:["display","flex","justify-content"],grid:["display","grid","grid-template-columns"],glass:["backdrop-filter","blur","rgba"],layout:["display","grid","grid-template-columns"]};
  const okay=checks[x.target].every(v=>answer.includes(v));
  if(okay){if(!state.exercisesCompleted.includes(x.id)){state.exercisesCompleted.push(x.id);state.xp+=x.xp;save();}notify("حل صحيح! +"+x.xp+" XP");closeModal();exercises();}
  else notify("النتيجة تحتاج إلى تعديل: راجع الخاصية المطلوبة");
 };
}
const projectData=[
["صفحة تسجيل دخول","Login Page","نموذج دخول آمن بتصميم زجاجي"],["صفحة الملف الشخصي","Profile Page","بطاقة بملف وصور ومعلومات"],["صفحة هبوط","Landing Page","صفحة تسويقية متجاوبة"],["بطاقة منتج","Product Card","بطاقة عرض وأسعار وتقييمات"],["شريط تنقل","Responsive Navbar","قائمة موبايل وديسكتوب"],["لوحة تحكم","Dashboard","إحصائيات وجداول وشريط جانبي"],["متجر إلكتروني","E-commerce","قوالب منتجات وسلة تسوق"],["موقع أعمال","Portfolio","معرض أعمال وخدمات وأهداف"],["لوحة إدارة احترافية","Admin Dashboard","واجهة إدارة كاملة ومعقدة"]];
function projects(){app.innerHTML=`<div class="page"><div class="section-title"><div><h1>مشاريع عملية واقعية</h1><p>بناء واجهات متدرجة من البطاقات إلى لوحات الإدارة</p></div><button class="btn" data-route="editor">افتح المحرر</button></div><div class="projects-grid">${projectData.map((p,i)=>`<article class="project-card" data-route="project/${i}"><div class="project-shot"><div class="mock-page"><div class="mock-nav"><i></i><i></i><i></i></div><div class="mock-body"><div><b>${p[1]}</b><span></span></div></div></div></div><div class="project-info"><h3>${i+1}. ${p[0]}</h3><p>${p[2]}</p></div></article>`).join("")}</div></div>`;bind()}
function project(index){const i=Number(index||0),p=projectData[i];const preview=`<!doctype html><html dir="rtl"><head><meta charset="UTF-8"><style>body{margin:0;min-height:360px;display:grid;place-items:center;font-family:Tahoma;background:linear-gradient(135deg,#eaf3ff,#dce7f7)}.preview{width:78%;min-height:240px;border-radius:16px;padding:28px;text-align:center;background:white;box-shadow:0 20px 40px #9fb1c855}.preview h2{color:#176fd3;margin:20px 0 8px}.preview p{color:#64748b}.preview button{border:0;border-radius:8px;padding:10px 22px;color:white;background:#1687ff}</style></head><body><div class="preview"><b style="color:#1687ff">CSS Master Project ${i+1}</b><h2>${p[1]}</h2><p>${p[2]}</p><button>معاينة المشروع</button></div></body></html>`;
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${p[0]}</h1><p>مشروع عملي ${i+1} من ${projectData.length}</p></div><button class="btn secondary" data-route="projects">كل المشاريع</button></div><div class="dashboard-grid"><div class="panel" style="padding:20px"><h2>المطلوب تنفيذه</h2><p style="color:var(--muted);line-height:1.9">${p[2]} مع تصميم متجاوب وحالات تفاعل واضحة.</p><h3>خطوات التنفيذ</h3><ol style="color:#b7c5d8;line-height:2"><li>أنشئ بنية HTML الدلالية للواجهة.</li><li>صمّم التخطيط الأساسي باستخدام Flexbox أو Grid.</li><li>أضف الألوان والطباعة والمسافات حسب الهوية.</li><li>اختبر المشروع على الموبايل والكمبيوتر.</li></ol><div class="callout">تحدي إضافي: أضف حالات hover و focus وامتحن العرض على شاشة 360px.</div><div style="display:flex;gap:8px;margin-top:18px"><button class="btn" data-route="editor">ابدأ التنفيذ في المحرر</button><button class="btn purple" id="completeProject">${state.projectsCompleted.includes(String(i))?"المشروع مكتمل ✓":"إكمال المشروع +100 XP"}</button></div></div><div class="project-shot" style="height:420px;border:1px solid var(--line);border-radius:12px"><iframe title="معاينة المشروع" style="width:92%;height:360px;border:0;border-radius:12px" srcdoc="${esc(preview)}"></iframe></div></div></div>`;bind();
 document.getElementById("completeProject").onclick=()=>{const key=String(i);if(!state.projectsCompleted.includes(key)){state.projectsCompleted.push(key);state.xp+=100;save();notify("تم إكمال المشروع! +100 XP");project(index)}else notify("تم إكمال هذا المشروع مسبقاً")};
}
async function communityPost(action, body) {
 const user=window.cssMasterUser;
 if(!authResolved||!user){navigate("login");throw new Error("auth-required");}
 const token=await user.getIdToken();
 const response=await fetch(`${window.CSS_MASTER_COMMUNITY_ENDPOINT}/${action}`,{
  method:"POST",
  headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},
  body:JSON.stringify(body)
 });
 const result=await response.json().catch(()=>({}));
 if(!response.ok){
  const messages={ "rate-limited":"تم إرسال طلبات كثيرة. انتظر قليلاً قبل المحاولة مرة أخرى.","blocked":"لا يمكنك مراسلة هذا المستخدم.","invalid-content":"اكتب محتوى مناسباً.","invalid-message":"رسالة غير صالحة.","invalid-report":"أدخل سبباً واضحاً للبلاغ."};
  throw new Error(messages[result.error]||"تعذر إكمال الطلب.");
 }
 return result;
}
function community(){
 if(!authResolved||!window.cssMasterUser){navigate("login");return;}
 app.innerHTML=`<div class="page community-page"><div class="section-title"><div><h1>المجتمع التعليمي</h1><p>ناقش الدروس، شارك الخبرات وتواصل مع طلاب CSS Master</p></div><button class="btn" id="newPostBtn">إنشاء منشور</button></div><div class="community-layout"><section class="community-feed"><div class="community-tabs"><button class="active" data-community-tab="feed">المنشورات</button><button data-community-tab="messages">المحادثات</button></div><div id="communityContent"></div></section><aside class="community-side"><div class="panel" style="padding:16px"><h3>إرشادات المجتمع</h3><ul class="community-guides"><li>احترم جميع الطلاب.</li><li>لا تنشر بيانات شخصية أو بريدك.</li><li>أبلغ عن الإساءة دون الرد بالمهاجمة.</li></ul></div><div class="panel" id="adminReports" style="padding:16px;display:none"><h3>البلاغات للإدارة</h3><div id="adminReportsList"></div></div></aside></div></div>`;
 document.getElementById("newPostBtn").onclick=openNewPost;
 document.querySelectorAll("[data-community-tab]").forEach(button=>button.onclick=()=>{
  document.querySelectorAll("[data-community-tab]").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  if(button.dataset.communityTab==="messages")renderCommunityMessages();else renderCommunityFeed();
 });
 renderCommunityFeed();
 showAdminReports();
}
function openNewPost(){
 openModal("إنشاء منشور",`<div class="profile-edit-grid"><label>التصنيف<select id="postCategory"><option>عام</option><option>سؤال CSS</option><option>مشروع</option><option>مساعدة في تمرين</option></select></label><label>محتوى المنشور<textarea id="postContent" rows="5" maxlength="2000" placeholder="اكتب سؤالك أو معلومة مفيدة"></textarea></label></div><div class="modal-actions"><button class="btn secondary" id="cancelPost">إلغاء</button><button class="btn" id="publishPost">نشر</button></div>`);
 document.getElementById("cancelPost").onclick=closeModal;
 document.getElementById("publishPost").onclick=async()=>{
  const button=document.getElementById("publishPost");
  if(button.disabled)return;
  button.disabled=true;button.textContent="جاري النشر...";
  try{await communityPost("createCommunityPost",{category:document.getElementById("postCategory").value,content:document.getElementById("postContent").value});closeModal();renderCommunityFeed();notify("تم نشر المنشور");}
  catch(error){notify(error.message);}
  finally{button.disabled=false;}
 };
}
function renderCommunityFeed(){
 const host=document.getElementById("communityContent");if(!host)return;
 host.innerHTML=`<div class="community-loading"><span class="loading-dot"></span> جاري تحميل المنشورات...</div>`;
 window.CSSMasterFirebase.observePath("community/posts",posts=>{
  const entries=Object.entries(posts||{}).sort((a,b)=>(b[1].createdAt||0)-(a[1].createdAt||0));
  host.innerHTML=entries.length?entries.map(([postId,post])=>`
   <article class="community-post">
    <div class="post-author"><div class="post-avatar">${post.authorPhotoURL?`<img src="${esc(post.authorPhotoURL)}" alt="صورة الطالب ${esc(post.authorName||"")} " loading="lazy" decoding="async">`:"ح"}</div><div><strong>${esc(post.authorName||"طالب CSS")}</strong><span>${esc(post.category||"عام")}</span></div><button class="post-menu" data-report-user="${esc(post.authorUid)}" title="الإبلاغ عن المنشور">⋮</button></div>
    <p>${esc(post.content||"")}</p>
    <div class="post-actions"><button data-comment-post="${esc(postId)}">تعليق</button><button data-message-user="${esc(post.authorUid)}">مراسلة</button><button data-block-user="${esc(post.authorUid)}">حظر المستخدم</button><button data-report-post="${esc(postId)}">الإبلاغ</button>${post.authorUid===window.cssMasterUser?.uid?`<button data-delete-post="${esc(postId)}">حذف منشوري</button>`:""}</div>
    <div id="comments-${esc(postId)}" class="post-comments"></div>
   </article>`).join(""):`<div class="empty-community">لا توجد منشورات بعد. كن أول من يبدأ نقاشاً مفيداً.</div>`;
  entries.forEach(([postId])=>observePostComments(postId));
  document.querySelectorAll("[data-comment-post]").forEach(button=>button.onclick=()=>openComment(button.dataset.commentPost));
  document.querySelectorAll("[data-message-user]").forEach(button=>button.onclick=()=>openMessage(button.dataset.messageUser));
  document.querySelectorAll("[data-block-user]").forEach(button=>button.onclick=()=>blockUser(button.dataset.blockUser));
  document.querySelectorAll("[data-report-post]").forEach(button=>button.onclick=()=>openReport("post",button.dataset.reportPost));
  document.querySelectorAll("[data-delete-post]").forEach(button=>button.onclick=()=>deleteCommunityContent("post",`community/posts/${button.dataset.deletePost}`));
 });
}
function observePostComments(postId){
 window.CSSMasterFirebase.observePath(`community/comments/${postId}`,comments=>{
  const host=document.getElementById(`comments-${CSS.escape(postId)}`);if(!host)return;
  const entries=Object.entries(comments||{}).sort((a,b)=>(a[1].createdAt||0)-(b[1].createdAt||0));
  host.innerHTML=entries.map(([commentId,c])=>`<div class="community-comment"><div class="comment-author">${esc(c.authorName||"طالب")}</div><p>${esc(c.content||"")}</p><button data-report-comment="${esc(commentId)}" data-report-post="${esc(postId)}">إبلاغ</button>${c.authorUid===window.cssMasterUser?.uid?`<button data-delete-comment="${esc(postId)}:${esc(commentId)}" class="delete-comment">حذف تعليقي</button>`:""}</div>`).join("");
  host.querySelectorAll("[data-report-comment]").forEach(button=>button.onclick=()=>openReport("comment",`${button.dataset.reportPost}/${button.dataset.reportComment}`));
  host.querySelectorAll("[data-delete-comment]").forEach(button=>button.onclick=()=>{const [postId,commentId]=button.dataset.deleteComment.split(":");deleteCommunityContent("comment",`community/comments/${postId}/${commentId}`);});
 });
}
function openComment(postId){
 openModal("إضافة تعليق",`<div class="profile-edit-grid"><label>تعليقك<textarea id="commentContent" rows="4" maxlength="1000"></textarea></label></div><div class="modal-actions"><button class="btn secondary" id="cancelComment">إلغاء</button><button class="btn" id="publishComment">نشر التعليق</button></div>`);
 document.getElementById("cancelComment").onclick=closeModal;
 document.getElementById("publishComment").onclick=async()=>{
  const button=document.getElementById("publishComment");
  if(button.disabled)return;
  button.disabled=true;
  try{await communityPost("createCommunityComment",{postId,content:document.getElementById("commentContent").value});closeModal();notify("تم نشر التعليق");}
  catch(error){notify(error.message);}
  finally{button.disabled=false;}
 };
}
function openMessage(recipientUid){
 if(recipientUid===window.cssMasterUser?.uid){notify("لا يمكنك مراسلة نفسك");return;}
 openModal("مراسلة الطالب",`<div class="profile-edit-grid"><label>الرسالة<textarea id="messageContent" rows="4" maxlength="1000"></textarea></label></div><div class="modal-actions"><button class="btn secondary" id="cancelMessage">إلغاء</button><button class="btn" id="sendMessage">إرسال</button></div>`);
 document.getElementById("cancelMessage").onclick=closeModal;
 document.getElementById("sendMessage").onclick=async()=>{
  const button=document.getElementById("sendMessage");if(button.disabled)return;
  button.disabled=true;
  try{
   const sent=await communityPost("sendCommunityMessage",{recipientUid,content:document.getElementById("messageContent").value});
   state.communityConversationIds=Array.isArray(state.communityConversationIds)?state.communityConversationIds:[];
   if(sent.conversationId&&!state.communityConversationIds.includes(sent.conversationId))state.communityConversationIds.push(sent.conversationId);
   save();
   closeModal();notify("تم إرسال الرسالة");
  }
  catch(error){notify(error.message);}
  finally{button.disabled=false;}
 };
}
function blockUser(targetUid){
 if(!targetUid||targetUid===window.cssMasterUser?.uid)return;
 openModal("حظر المستخدم",`<p>لن تتمكن من استقبال رسائل خاصة منه بعد الحظر.</p><div class="modal-actions"><button class="btn secondary" id="cancelBlock">إلغاء</button><button class="btn" id="confirmBlock">حظر</button></div>`);
 document.getElementById("cancelBlock").onclick=closeModal;
 document.getElementById("confirmBlock").onclick=async()=>{
  try{await communityPost("blockCommunityUser",{targetUid});closeModal();notify("تم حظر المستخدم");}
  catch(error){notify(error.message);}
 };
}
async function deleteCommunityContent(type,path){
 openModal("تأكيد الحذف","<p>هل تريد حذف هذا المحتوى؟ لا يمكن التراجع عن الحذف.</p><div class=\"modal-actions\"><button class=\"btn secondary\" id=\"cancelDelete\">إلغاء</button><button class=\"btn\" id=\"confirmDelete\">حذف</button></div>");
 document.getElementById("cancelDelete").onclick=closeModal;
 document.getElementById("confirmDelete").onclick=async()=>{
  try{
   await communityPost("moderateCommunityContent",{type,path});
   closeModal();renderCommunityFeed();notify("تم حذف المحتوى");
  }catch(error){notify(error.message);}
 };
}
function openReport(type,targetId){
 openModal("الإبلاغ عن المحتوى",`<div class="profile-edit-grid"><label>سبب البلاغ<select id="reportReason"><option>محتوى مسيء</option><option>رسائل مزعجة</option><option>معلومات مضللة</option><option>محتوى غير مناسب</option><option>محاولة احتيال</option></select></label></div><div class="modal-actions"><button class="btn secondary" id="cancelReport">إلغاء</button><button class="btn" id="sendReport">إرسال البلاغ</button></div>`);
 document.getElementById("cancelReport").onclick=closeModal;
 document.getElementById("sendReport").onclick=async()=>{
  const button=document.getElementById("sendReport");if(button.disabled)return;
  button.disabled=true;
  try{await communityPost("submitCommunityReport",{type,targetId,reason:document.getElementById("reportReason").value});closeModal();notify("تم إرسال البلاغ للإدارة");}
  catch(error){notify(error.message);}
  finally{button.disabled=false;}
 };
}
async function renderCommunityMessages(){
 const host=document.getElementById("communityContent");if(!host)return;
 const ids=Array.isArray(state.communityConversationIds)?state.communityConversationIds:[];
 if(!ids.length){host.innerHTML=`<div class="empty-community">اختر "مراسلة" من منشور طالب لبدء محادثة خاصة. لا تظهر المحادثات إلا للطرفين المشاركين.</div>`;return;}
 host.innerHTML=ids.map(id=>`<article class="community-post conversation-thread" data-thread="${esc(id)}"><h3>محادثة خاصة</h3><div id="thread-${esc(id)}" class="thread-messages"></div></article>`).join("");
 ids.forEach(id=>{
  window.CSSMasterFirebase.observePath(`community/conversations/${id}/messages`,messages=>{
   const hostThread=document.getElementById(`thread-${CSS.escape(id)}`);if(!hostThread)return;
   const entries=Object.entries(messages||{}).sort((a,b)=>(a[1].createdAt||0)-(b[1].createdAt||0));
   hostThread.innerHTML=entries.length?entries.map(([,m])=>`<div class="thread-message ${m.senderUid===window.cssMasterUser?.uid?"mine":""}"><b>${esc(m.senderName||"طالب")}</b><p>${esc(m.content||"")}</p></div>`).join(""):`<div class="empty-community">لا توجد رسائل بعد.</div>`;
  });
 });
}
function javascriptAcademy(){
 applyLanguageTheme("javascript");
 const p=state.javascriptProgress||{level:1,xp:0,completedLessons:[]};
 const pct=p.completedLessons.length?Math.round(p.completedLessons.length/jsLessons.length*100):0;
 app.innerHTML=`<div class="page js-academy-page"><section class="js-hero"><div><span class="js-kicker">JavaScript Academy</span><h1>تعلم <strong>JavaScript</strong><br>من الصفر للاحتراف</h1><p>حوّل أفكارك إلى تطبيقات تفاعلية عبر JavaScript الحديث، DOM، APIs، والمشاريع الواقعية.</p><div class="hero-actions"><button class="btn js-start" data-route="js-lesson/${jsLessons[0].id}">ابدأ التعلم</button><button class="btn js-secondary" data-route="js-projects">مشاريع JavaScript</button></div></div><div class="js-hero-art"><div class="js-logo-large">JS</div><div class="js-orbit orbit-a">function</div><div class="js-orbit orbit-b">DOM</div><div class="js-orbit orbit-c">{ }</div></div></section><section class="feature-row js-feature-row">${feature("JS",jsLessons.length+" درساً","من الأساسيات للاحتراف")}${feature("⚡","تدريبات تفاعلية","توقع ونفذ واختبر")}${feature("◇",jsProjects.length+" مشروعاً","Build It Yourself")}${feature("⌁","محرر JavaScript","مع Console وLive Preview")}</section><section class="js-dashboard"><div class="panel js-progress-panel"><div class="panel-head"><h3>تقدم JavaScript</h3><span>${pct}%</span></div><div class="stat-progress"><div class="progress-ring js-ring" style="--p:${pct}"><strong>${pct}%<small>مكتمل</small></strong></div></div><div class="course-stats"><div class="course-stat"><b>${p.completedLessons.length||0}</b><span>درس مكتمل</span></div><div class="course-stat"><b>${p.xp||0}</b><span>XP JavaScript</span></div></div></div><div class="panel js-curriculum-preview"><div class="panel-head"><h3>مسار JavaScript</h3><a href="#js-curriculum">عرض المنهج ←</a></div><div class="js-level-list">${jsLevels.map((level,i)=>`<button data-route="js-curriculum"><b>المستوى ${i+1}</b><span>${level.replace(/^المستوى [^:]+:\s*/,"")}</span><small>${jsLessons.filter(l=>l.level===level).length} دروس</small></button>`).join("")}</div></div></section></div>`;
 bind();
}
function javascriptCurriculum(){
 applyLanguageTheme("javascript");
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>منهج JavaScript الكامل</h1><p>مسار متدرج من الأساسيات إلى التطبيقات الاحترافية</p></div><button class="btn js-start" data-route="js-editor">محرر JavaScript</button></div><div class="level-grid">${jsLevels.map(level=>`<section class="level-card js-level-card"><div class="level-head"><h3>${level}</h3><span>${jsLessons.filter(l=>l.level===level).length} دروس</span></div><div class="lesson-grid">${jsLessons.filter(l=>l.level===level).map(l=>{const done=(state.javascriptProgress.completedLessons||[]).includes(l.id);return `<article class="lesson-card js-lesson-card ${done?"done":""}" data-route="js-lesson/${l.id}"><h4>${l.title}</h4><p>${l.desc}</p>${done?'<span class="status">✓</span>':''}</article>`}).join("")}</div></section>`).join("")}</div></div>`;bind();
}
function javascriptLesson(id){
 applyLanguageTheme("javascript");
 const i=jsLessons.findIndex(l=>l.id===id),l=jsLessons[i]||jsLessons[0];
 const code=l.code.replace(/\\n/g,"\n");
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${l.title}</h1><p>${l.level}</p></div><button class="btn js-secondary" data-route="js-curriculum">منهج JavaScript</button></div><div class="lesson-layout"><aside class="lesson-steps js-lesson-steps">${jsLessons.map(x=>`<button class="${x.id===l.id?"active":""}" data-route="js-lesson/${x.id}">${x.title}</button>`).join("")}</aside><article class="lesson-content js-lesson-content"><div class="lesson-body"><h1>${l.title}</h1><p>${l.desc}. تنفذ JavaScript داخل المتصفح وتتفاعل مع البيانات وعناصر الصفحة.</p><div class="callout js-callout"><strong>فكرة الدرس:</strong> نفّذ المثال ثم عدّل قيمة السطر وشاهد Console والنتيجة مباشرة.</div><h2>مثال JavaScript</h2><div class="code-block js-code-block"><div class="code-title"><span>JavaScript</span><button class="copy-mini js-copy" data-copy>نسخ الكود</button></div><pre>${esc(code)}</pre></div><h2>شرح سطور الكود</h2><div class="code-explanation js-code-explanation">${code.split("\n").filter(Boolean).map((line,n)=>`<div class="code-line"><b>${n+1}</b><code>${esc(line)}</code><span>${n===0?"نقطة البداية في الكود":line.includes("console.log")?"تطبع النتيجة في Console":line.includes("function")||line.includes("=>")?"تعريف دالة":"تنفذ العملية المحددة"}</span></div>`).join("")}</div><h2>التشغيل المباشر</h2><div class="js-lesson-run"><textarea class="practice-code js-practice-code" id="jsLessonCode">${code}</textarea><div class="js-console-mini" id="jsLessonOutput">Console جاهز</div></div><h2>أخطاء شائعة</h2><p>تحقق من الأقواس والفواصل المنقوطة واسم المتغير، ولا تستخدم متغيراً قبل إعلانـه.</p></div><div class="lesson-actions"><button class="btn js-start" id="runJsLesson">تشغيل المثال</button><button class="btn js-start" id="completeJsLesson">${(state.javascriptProgress.completedLessons||[]).includes(l.id)?"مكتمل ✓":"إكمال الدرس +30 XP"}</button></div></article></div></div>`;
 bind();
 document.querySelector(".js-copy").onclick=()=>{navigator.clipboard?.writeText(code);notify("تم نسخ كود JavaScript");};
 document.getElementById("runJsLesson").onclick=()=>runJsLessonCode();
 function runJsLessonCode(){
  const source=document.getElementById("jsLessonCode").value;
  const iframe=document.createElement("iframe");
  iframe.style.display="none";iframe.sandbox="allow-scripts";
  iframe.srcdoc=`<!doctype html><script>addEventListener("message",e=>{const logs=[];console={log:(...a)=>logs.push(a.join(" "))};try{new Function(e.data)()}catch(err){logs.push("خطأ: "+err.message)}parent.postMessage({logs},"*")});</script>`;
  const handler=e=>{if(e.source===iframe.contentWindow){document.getElementById("jsLessonOutput").textContent=(e.data.logs||[]).join("\n")||l.example;removeEventListener("message",handler);iframe.remove();}};
  addEventListener("message",handler);document.body.appendChild(iframe);setTimeout(()=>iframe.contentWindow.postMessage(source,"*"),100);
 }
 document.getElementById("completeJsLesson").onclick=()=>{state.javascriptProgress.completedLessons=state.javascriptProgress.completedLessons||[];if(!state.javascriptProgress.completedLessons.includes(l.id)){state.javascriptProgress.completedLessons.push(l.id);state.javascriptProgress.xp=(state.javascriptProgress.xp||0)+30;state.javascriptProgress.level=Math.min(4,Math.max(1,Math.floor(state.javascriptProgress.completedLessons.length/8)+1));save();notify("تم إكمال درس JavaScript! +30 XP");javascriptLesson(l.id)}else notify("تم إكمال هذا الدرس مسبقاً");};
}
function javascriptEditor(){
 applyLanguageTheme("javascript");
 createSharedEditor({
  title:"محرر JavaScript",
  subtitle:"HTML و CSS و JavaScript ومعاينة Console آمنة",
  theme:"javascript",
  accent:"#F7DF1E",
  mode:"javascript",
  console:true,
  panes:[
   {id:"html",label:"HTML",language:"html",code:'<main class="demo-card">\n  <h1 id="title">مرحباً بالجافاسكربت</h1>\n  <button id="action">اضغطني</button>\n</main>'},
   {id:"css",label:"CSS",language:"css",code:'body {\n  min-height:100vh;\n  margin:0;\n  display:grid;\n  place-items:center;\n  font-family:Tahoma;\n  background:#0b0c0b;\n  color:#f7df1e;\n}\n.demo-card {\n  text-align:center;\n  padding:32px;\n  border:1px solid #f7df1e;\n  border-radius:16px;\n  background:#15170f;\n}\nbutton {\n  border:0;\n  border-radius:8px;\n  padding:10px 18px;\n  background:#f7df1e;\n  color:#111;\n  font-weight:bold;\n}'},
   {id:"javascript",label:"JavaScript",language:"javascript",code:'const button = document.querySelector("#action");\n\nbutton.addEventListener("click", () => {\n  document.querySelector("#title").textContent = "تم تنفيذ JavaScript!";\n  console.log("نجح زر JavaScript");\n});'}
  ]
 });
}
function javascriptProjects(){
 applyLanguageTheme("javascript");
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>مشاريع JavaScript العملية</h1><p>Build It Yourself — من التحديات السهلة للتطبيقات الاحترافية</p></div><button class="btn js-start" data-route="js-editor">المحرر التفاعلي</button></div><div class="projects-grid js-project-grid">${jsProjects.map((p,i)=>{const level=i<5?"easy":i<10?"medium":"hard";return `<article class="project-card js-project-card" data-js-project="${i}"><div class="project-shot js-project-shot"><div class="js-project-mock"><span>${i<5?"Easy":i<10?"Medium":"Hard"}</span><b>${p[1]}</b><small>${p[2]}</small></div></div><div class="project-info"><h3>${i+1}. ${p[0]}</h3><p>${p[2]}</p></div></article>`}).join("")}</div></div>`;
 document.querySelectorAll("[data-js-project]").forEach(card=>card.onclick=()=>javascriptProject(card.dataset.jsProject));
}
function javascriptProject(index){
 applyLanguageTheme("javascript");
 const i=Number(index||0),p=jsProjects[i]||jsProjects[0];
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${p[0]}</h1><p>${p[1]} — مشروع JavaScript عملي</p></div><button class="btn js-secondary" data-route="js-projects">كل المشاريع</button></div><div class="js-build-layout"><section class="panel js-build-requirements"><h2>المطلوب تنفيذه</h2><p>${p[2]} مع واجهة عربية، تصميم متجاوب، وحالات تفاعل واضحة.</p><h3>التقييم من 100</h3><div class="score-checklist"><div><b>40</b><span>عمل الوظيفة المطلوبة</span></div><div><b>25</b><span>جودة JavaScript</span></div><div><b>20</b><span>التصميم المتجاوب</span></div><div><b>15</b><span>حالات الخطأ والتفاعلات</span></div></div><div class="callout js-callout">تلميح: ابدأ بـ HTML وواجهات الحالة، ثم اربط الأحداث بـ JavaScript، واختم بالتحقق من المدخلات والأخطاء.</div><button class="btn js-start" data-route="js-editor">افتح محرر المشروع</button><button class="btn js-secondary" id="completeJsProject">إكمال المشروع +100 XP</button></section><section class="panel js-build-preview"><div class="preview-top"><strong>معاينة التصميم المطلوب</strong></div><div class="js-project-preview"><div class="js-preview-card"><span>JS</span><h2>${p[1]}</h2><p>${p[2]}</p><button>ابدأ التجربة</button></div></div></section></div></div>`;
 bind();
 document.getElementById("completeJsProject").onclick=()=>{state.javascriptProgress.completedProjects=state.javascriptProgress.completedProjects||[];if(!state.javascriptProgress.completedProjects.includes(String(i))){state.javascriptProgress.completedProjects.push(String(i));state.javascriptProgress.xp=(state.javascriptProgress.xp||0)+100;save();notify("تم إكمال مشروع JavaScript! +100 XP")}else notify("تم إكمال هذا المشروع مسبقاً")};
}
function javascriptExercises(){
 applyLanguageTheme("javascript");
 const exerciseSet=[
  {id:"mc",title:"توقع الناتج",type:"Multiple Choice",question:"ما ناتج console.log(typeof 42)?",answers:["string","number","boolean","object"],correct:1,explanation:"الأرقام من نوع number في JavaScript."},
  {id:"fix",title:"صلح الكود",type:"Fix the Code",question:"أكمل تعريف الدالة ليصبح الناتج 10.",answers:["function add(a,b){ return a+b }","let add = a + b","function add(a,b) a+b","add(a,b)=>a+b"],correct:0,explanation:"الدالة تحتاج أقواس جسم وتعليمة return."},
  {id:"func",title:"اكتب الدالة",type:"Write the Function",question:"أي دالة تربط العناصر وتُرجع نصاً؟",answers:["const say = name => `Hello ${name}`","say(name) => name","function=>say","const say = name;"],correct:0,explanation:"دالة سهمية صالحة تستخدم template literals."},
  {id:"complete",title:"أكمل الكود",type:"Complete the Code",question:"اختر طريقة صحيحـة لإضافة عنصر للمصفوفة.",answers:["push()","append()","add()","insert()"],correct:0,explanation:"push() تضيف عنصراً في نهاية المصفوفة."},
  {id:"debug",title:"Debugging",type:"Debugging Challenge",question:"كيف تعالج خطأ في JavaScript المتزامن؟",answers:["try/catch","if stop","catchCSS","console.only"],correct:0,explanation:"try/catch يمنع توقف البرنامج ويعالج الاستثناء."}
 ];
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>تدريبات JavaScript</h1><p>اختبارات، توقع الناتج، التصحيح والتعامل مع الأخطاء</p></div><button class="btn js-start" data-route="js-editor">افتح المحرر</button></div><div class="exercises-grid js-exercises-grid">${exerciseSet.map(e=>`<article class="exercise-card js-exercise-card"><span class="difficulty medium">${e.type}</span><h3>${e.title}</h3><p>${e.question}</p><button class="btn js-start" data-js-exercise="${e.id}">بدء التمرين</button></article>`).join("")}</div></div>`;
 bind();
 document.querySelectorAll("[data-js-exercise]").forEach(button=>button.onclick=()=>openJsExercise(exerciseSet.find(e=>e.id===button.dataset.jsExercise)));
}
function openJsExercise(exercise){
 openModal(exercise.title,`<p style="color:var(--muted);line-height:1.8">${exercise.question}</p><div class="answers js-answer-list">${exercise.answers.map((answer,i)=>`<button class="answer" data-js-answer="${i}">${esc(answer)}</button>`).join("")}</div><div id="jsExerciseFeedback" style="margin-top:12px"></div>`);
 document.querySelectorAll("[data-js-answer]").forEach(button=>button.onclick=()=>{
  const selected=Number(button.dataset.jsAnswer);
  document.querySelectorAll("[data-js-answer]").forEach(a=>a.disabled=true);
  document.querySelectorAll("[data-js-answer]")[exercise.correct].classList.add("correct");
  if(selected===exercise.correct){
   button.classList.add("correct");
   state.javascriptProgress.completedChallenges=state.javascriptProgress.completedChallenges||[];
   if(!state.javascriptProgress.completedChallenges.includes(exercise.id)){state.javascriptProgress.completedChallenges.push(exercise.id);state.javascriptProgress.xp=(state.javascriptProgress.xp||0)+25;save();notify("إجابة صحيحة! +25 XP");}
  }else button.classList.add("wrong");
  document.getElementById("jsExerciseFeedback").innerHTML=`<div class="callout js-callout">${esc(exercise.explanation)}</div>`;
 });
}
function htmlAcademy(){
  applyLanguageTheme("html");
  const p=state.htmlProgress||{level:1,xp:0,completedLessons:[]};
  const pct=p.completedLessons?.length?Math.round(p.completedLessons.length/htmlLessons.length*100):0;
  app.innerHTML=`<div class="page html-academy-page"><section class="html-hero"><div><span class="html-kicker">HTML Academy</span><h1>تعلم <strong>HTML</strong><br>من الصفر للاحتراف</h1><p>أتقن بنية الويب، الوصولية وتحسين محركات البحث ببناء مستندات HTML نظيفة وقوية.</p><div class="hero-actions"><button class="btn html-start" data-route="html-lesson/${htmlLessons[0].id}">ابدأ التعلم</button><button class="btn html-secondary" data-route="html-projects">مشاريع HTML</button></div></div><div class="html-hero-art"><div class="html-shield"><span>5</span><b>HTML</b></div><div class="html-tag tag-a">&lt;main&gt;</div><div class="html-tag tag-b">&lt;article&gt;</div><div class="html-tag tag-c">&lt;form&gt;</div></div></section><section class="feature-row html-feature-row">  ${feature("5",htmlLessons.length+" درساً","من الأساسيات للاحتراف")}${feature("✓","تدريبات HTML","صحح وبنِ وتدرّب")}  ${feature("◇",htmlProjectList.length+" مشروعاً","Build It Yourself")}${feature("&lt;/&gt;","محرر HTML","مع معاينة آمنة")}</section><section class="html-dashboard"><div class="panel html-progress-panel"><div class="panel-head"><h3>تقدم HTML</h3><span>${pct}%</span></div><div class="stat-progress"><div class="progress-ring html-ring" style="--p:${pct}"><strong>${pct}%<small>مكتمل</small></strong></div></div><div class="course-stats"><div class="course-stat"><b>${p.completedLessons?.length||0}</b><span>درس مكتمل</span></div><div class="course-stat"><b>${p.xp||0}</b><span>XP HTML</span></div></div></div><div class="panel html-curriculum-preview"><div class="panel-head"><h3>مسار HTML</h3><a href="#html-curriculum">عرض المنهج ←</a></div><div class="html-level-list">${htmlLevels.map((level,i)=>`<button data-route="html-curriculum"><b>المستوى ${i+1}</b><span>${level.replace(/^المستوى [^:]+:\s*/,"")}</span><small>${htmlLessons.filter(l=>l.level===level).length} دروس</small></button>`).join("")}</div></div></section></div>`;
  bind();
}
function htmlCurriculum(){
  applyLanguageTheme("html");
  app.innerHTML=`<div class="page"><div class="section-title"><div><h1>منهج HTML الكامل</h1><p>مسار متدرج من بنية المستند إلى مشاريع الويب الاحترافية</p></div><button class="btn html-start" data-route="html-editor">محرر HTML</button></div><div class="level-grid">${htmlLevels.map(level=>`<section class="level-card html-level-card"><div class="level-head"><h3>${level}</h3><span>${htmlLessons.filter(l=>l.level===level).length} دروس</span></div><div class="lesson-grid">${htmlLessons.filter(l=>l.level===level).map(l=>{const done=(state.htmlProgress.completedLessons||[]).includes(l.id);return `<article class="lesson-card html-lesson-card ${done?"done":""}" data-route="html-lesson/${l.id}"><h4>${l.title}</h4><p>${l.desc}</p>${done?'<span class="status">✓</span>':''}</article>`}).join("")}</div></section>`).join("")}</div></div>`;bind();
}
function htmlLesson(id){
  applyLanguageTheme("html");
  const i=htmlLessons.findIndex(l=>l.id===id),l=htmlLessons[i]||htmlLessons[0];
  app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${l.title}</h1><p>${l.level}</p></div><button class="btn html-secondary" data-route="html-curriculum">منهج HTML</button></div><div class="lesson-layout"><aside class="lesson-steps html-lesson-steps">${htmlLessons.map(x=>`<button class="${x.id===l.id?"active":""}" data-route="html-lesson/${x.id}">${x.title}</button>`).join("")}</aside><article class="lesson-content html-lesson-content"><div class="lesson-body"><h1>${l.title}</h1><p>${l.desc}. HTML يمنح للمحتوى بنية دلالية واضحة ويُستخدم أساساً لكل واجهة ويب.</p><div class="callout html-callout"><strong>فكرة الدرس:</strong> ابدأ بالوسم الدلالي، أضف الخصائص المطلوبة، ثم تأكد من الإغلاق والعرض.</div><h2>مثال HTML</h2><div class="code-block html-code-block"><div class="code-title"><span>HTML</span><button class="copy-mini html-copy">نسخ الكود</button></div><pre>${esc(l.code)}</pre></div><h2>شرح سطور الكود</h2><div class="code-explanation html-code-explanation">${l.code.split("\n").filter(Boolean).map((line,n)=>`<div class="code-line"><b>${n+1}</b><code>${esc(line)}</code><span>${n===0?"بداية العنصر أو إعلان المستند":line.includes("</")?"إغلاق عنصر HTML":"إضافة العنصر ومحتواه"}</span></div>`).join("")}</div><h2>المعاينة المباشرة</h2><div class="html-lesson-preview"><iframe title="معاينة HTML" sandbox="" srcdoc="${esc(`<!doctype html><html dir="rtl"><head><meta charset="UTF-8"><style>body{font-family:Tahoma;padding:24px;color:#252525;background:white}</style></head><body>${l.code}</body></html>`)}"></iframe></div><h2>أخطاء شائعة</h2><p>تأكد من إغلاق الوسوم، استخدام علامات الاقتباس للخصائص، وعدم تكرار معرفات id ضمن الصفحة.</p></div><div class="lesson-actions"><button class="btn html-start" id="completeHtmlLesson">${(state.htmlProgress.completedLessons||[]).includes(l.id)?"مكتمل ✓":"إكمال الدرس +30 XP"}</button></div></article></div></div>`;
  bind();
  document.querySelector(".html-copy").onclick=()=>{navigator.clipboard?.writeText(l.code);notify("تم نسخ كود HTML");};
  document.getElementById("completeHtmlLesson").onclick=()=>{state.htmlProgress.completedLessons=state.htmlProgress.completedLessons||[];if(!state.htmlProgress.completedLessons.includes(l.id)){state.htmlProgress.completedLessons.push(l.id);state.htmlProgress.xp=(state.htmlProgress.xp||0)+30;state.htmlProgress.level=Math.min(4,Math.max(1,Math.floor(state.htmlProgress.completedLessons.length/8)+1));save();notify("تم إكمال درس HTML! +30 XP");htmlLesson(l.id)}else notify("تم إكمال هذا الدرس مسبقاً")};
}
function htmlEditor(){
  applyLanguageTheme("html");
  createSharedEditor({
   title:"محرر HTML الاحترافي",
   subtitle:"HTML و CSS و JavaScript ومعاينة آمنة وكاملة الشاشة",
   theme:"html",
   accent:"#E34F26",
   mode:"html",
   console:true,
   panes:[
    {id:"html",label:"HTML",language:"html",code:'<main class="html-demo">\n  <h1>HTML Academy</h1>\n  <p>أنشئ واجهة دلالية وواضحة.</p>\n  <form>\n    <label>البريد الإلكتروني</label>\n    <input type="email" required>\n    <button type="submit">إرسال</button>\n  </form>\n</main>'},
    {id:"css",label:"CSS",language:"css",code:'body {\n  min-height:100vh;\n  margin:0;\n  display:grid;\n  place-items:center;\n  font-family:Tahoma;\n  background:#15100f;\n  color:#f7ebe7;\n}\n.html-demo {\n  width:min(380px,80%);\n  padding:28px;\n  border:1px solid #e34f26;\n  border-radius:16px;\n  background:#1d1512;\n}\ninput, button {\n  width:100%;\n  height:40px;\n  margin:6px 0;\n  border-radius:8px;\n}\nbutton {\n  border:0;\n  background:#e34f26;\n  color:white;\n}'},
    {id:"javascript",label:"JavaScript",language:"javascript",code:'document.querySelector("form").addEventListener("submit", event => {\n  event.preventDefault();\n  console.log("تم إرسال النموذج");\n});'}
   ]
  });
}
function htmlProjects(){
  applyLanguageTheme("html");
  app.innerHTML=`<div class="page"><div class="section-title"><div><h1>مشاريع HTML العملية</h1><p>Build It Yourself — هياكل HTML متدرجة بالتقييم والتلميحات</p></div><button class="btn html-start" data-route="html-editor">محرر HTML</button></div><div class="projects-grid html-project-grid">${htmlProjectList.map((p,i)=>`<article class="project-card html-project-card" data-html-project="${i}"><div class="project-shot html-project-shot"><div class="html-project-mock"><span>${i<5?"Easy":i<10?"Medium":"Hard"}</span><b>${p[1]}</b><small>${p[2]}</small></div></div><div class="project-info"><h3>${i+1}. ${p[0]}</h3><p>${p[2]}</p></div></article>`).join("")}</div></div>`;
  document.querySelectorAll("[data-html-project]").forEach(card=>card.onclick=()=>htmlProject(card.dataset.htmlProject));
}
function htmlProject(index){
  applyLanguageTheme("html");
  const i=Number(index||0),p=htmlProjectList[i]||htmlProjectList[0];
  app.innerHTML=`<div class="page"><div class="section-title"><div><h1>${p[0]}</h1><p>${p[1]} — مشروع HTML عملي</p></div><button class="btn html-secondary" data-route="html-projects">كل المشاريع</button></div><div class="html-build-layout"><section class="panel html-build-requirements"><h2>المطلوب تنفيذه</h2><p>${p[2]} مع بنية دلالية ووصولية واضحة على الشاشات المختلفة.</p><h3>المتطلبات والتقييم من 100</h3><div class="score-checklist"><div><b>40</b><span>بنية HTML صحيحة</span></div><div><b>20</b><span>دلالات الوصولية</span></div><div><b>20</b><span>النموذج والمحتوى</span></div><div><b>20</b><span>جودة الكود وSEO</span></div></div><div class="callout html-callout">تلميح: ابدأ بـ doctype وعناصر header وmain وfooter، ثم أضف الخصائص والوصولية والاختبارات.</div><button class="btn html-start" data-route="html-editor">افتح محرر المشروع</button><button class="btn html-secondary" id="completeHtmlProject">إكمال المشروع +100 XP</button></section><section class="panel html-build-preview"><div class="preview-top"><strong>معاينة التصميم المطلوب</strong></div><div class="html-project-preview"><div class="html-preview-card"><span>&lt;/&gt;</span><h2>${p[1]}</h2><p>${p[2]}</p><button>معاينة المشروع</button></div></div></section></div></div>`;bind();
  document.getElementById("completeHtmlProject").onclick=()=>{state.htmlProgress.completedProjects=state.htmlProgress.completedProjects||[];if(!state.htmlProgress.completedProjects.includes(String(i))){state.htmlProgress.completedProjects.push(String(i));state.htmlProgress.xp=(state.htmlProgress.xp||0)+100;save();notify("تم إكمال مشروع HTML! +100 XP")}else notify("تم إكمال هذا المشروع مسبقاً")};
}
function htmlExercises(){
  applyLanguageTheme("html");
  const exercises=[
   {id:"tag",title:"أكمل وسم HTML",type:"Complete the HTML Tag",question:"اختر الوسم الصحيح لتصنيف فقرة نصية.",answers:["<p>نص</p>","<text>نص</text>","<line>نص</line>","<paragraph>نص</paragraph>"],correct:0,explanation:"وسم الفقرة في HTML هو p ويجب إغلاقه."},
   {id:"error",title:"ابحث عن الخطأ",type:"Find the Error",question:"أي عنصر صورة مكتوب بشكل صحيح؟",answers:['<img src="photo.jpg" alt="صورة">','<image src="photo.jpg">','<img source="photo.jpg">','<picture src="photo.jpg">'],correct:0,explanation:"img تستخدم src وalt وصفياً."},
   {id:"element",title:"العنصر الصحيح",type:"Choose the Correct Element",question:"ما العنصر الدلالي للمحتوى الرئيسي؟",answers:["main","middle","content","body-main"],correct:0,explanation:"main يحدد المحتوى الأساسي للصفحة."},
   {id:"structure",title:"بنية HTML",type:"Build the HTML Structure",question:"ما ترتيب العناصر الأساسي في مستند HTML؟",answers:["html ثم head ثم body","body ثم html ثم head","head ثم body ثم html","header ثم title"],correct:0,explanation:"مستند HTML يبدأ html ويتفرع إلى head وbody."},
   {id:"broken",title:"اصلح HTML المكسور",type:"Fix Broken HTML",question:"اختر كتلة صحيحة متوازنة.",answers:["<article><h2>عنوان</h2><p>نص</p></article>","<article><h2>عنوان<p>نص","<h2>عنوان</h2><p>نص","<article><h2>عنوان</h2></p>"],correct:0,explanation:"يجب إغلاق الوسوم الداخلية والخارجية بترتيب صحيح."},
   {id:"predict",title:"توقع بنية الصفحة",type:"Predict the Page Structure",question:"أي بنية مناسبة لصفحة احترافية؟",answers:["header + main + footer","footer + button فقط","p + p + p بلا دلالات","div بجميع أقسامها فقط"],correct:0,explanation:"header وmain وfooter بنية واضحة ودلالية."}
  ];
  app.innerHTML=`<div class="page"><div class="section-title"><div><h1>تدريبات HTML</h1><p>إكمال الوسوم وتصحيح الأخطاء واختيار البنية الصحيحة</p></div><button class="btn html-start" data-route="html-editor">افتح المحرر</button></div><div class="exercises-grid html-exercises-grid">${exercises.map(e=>`<article class="exercise-card html-exercise-card"><span class="difficulty medium">${e.type}</span><h3>${e.title}</h3><p>${e.question}</p><button class="btn html-start" data-html-exercise="${e.id}">بدء التمرين</button></article>`).join("")}</div></div>`;bind();
  document.querySelectorAll("[data-html-exercise]").forEach(button=>button.onclick=()=>openHtmlExercise(exercises.find(e=>e.id===button.dataset.htmlExercise)));
}
function openHtmlExercise(exercise){
  openModal(exercise.title,`<p style="color:var(--muted);line-height:1.8">${exercise.question}</p><div class="answers html-answer-list">${exercise.answers.map((answer,i)=>`<button class="answer" data-html-answer="${i}">${esc(answer)}</button>`).join("")}</div><div id="htmlExerciseFeedback" style="margin-top:12px"></div>`);
  document.querySelectorAll("[data-html-answer]").forEach(button=>button.onclick=()=>{
   const selected=Number(button.dataset.htmlAnswer);
   document.querySelectorAll("[data-html-answer]").forEach(a=>a.disabled=true);
   document.querySelectorAll("[data-html-answer]")[exercise.correct].classList.add("correct");
   if(selected===exercise.correct){
    button.classList.add("correct");state.htmlProgress.completedChallenges=state.htmlProgress.completedChallenges||[];if(!state.htmlProgress.completedChallenges.includes(exercise.id)){state.htmlProgress.completedChallenges.push(exercise.id);state.htmlProgress.xp=(state.htmlProgress.xp||0)+25;save();notify("إجابة صحيحة! +25 XP");}
   }else button.classList.add("wrong");
   document.getElementById("htmlExerciseFeedback").innerHTML=`<div class="callout html-callout">${esc(exercise.explanation)}</div>`;
  });
}
async function showAdminReports(){
 const user=window.cssMasterUser;if(!user)return;
 const result=await user.getIdTokenResult();
 if(!result.claims.admin)return;
 const panel=document.getElementById("adminReports");if(panel)panel.style.display="block";
 window.CSSMasterFirebase.observePath("community/reports",reports=>{
  const host=document.getElementById("adminReportsList");if(!host)return;
  const entries=Object.entries(reports||{}).sort((a,b)=>(b[1].createdAt||0)-(a[1].createdAt||0));
  host.innerHTML=entries.length?entries.map(([id,r])=>`<div class="report-item"><b>${esc(r.type||"بلاغ")}</b><span>${esc(r.reason||"")}</span><small>${esc(r.status||"open")}</small></div>`).join(""):"لا توجد بلاغات مفتوحة.";
 });
}
function quiz(){
 const qs=[["أي خاصية تستخدم لمسافة داخلية؟",["Margin","Padding","Border","Position"],1],["ما قيمة display لإنشاء صف مرن؟",["block","grid","flex","none"],2],["كيف تطبق تنسيقاً لشاشة أقل من 600؟",["@media (max-width:600px)","@screen 600","@responsive 600","@breakpoint"],0],["ما الغرض الرئيسي من CSS Grid؟",["إضافة نصوص","تخطيط صفوف وأعمدة","تحميل الصور","برمجة الأحداث"],1],["أي selector يستهدف الفئة card؟",["#card",".card","card*","card:"],1]];
 let i=0,score=0;
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>اختبارات المراحل والاختبار النهائي</h1><p>شمل الأسئلة الأساسيات والتنظيم والتصميم الاحترافي، ثم اجتياز الاختبار النهائي للشهادة</p></div></div><div class="quiz-layout"><section class="quiz-card" id="quizCard"></section><aside class="quiz-side"><h3>نتيجتك</h3><div class="score-circle"><span id="liveScore">0%</span></div><p style="color:var(--muted);text-align:center;font-size:12px">تحتاج 60% للحصول على الشهادة</p></aside></div></div>`;
 function show(){if(i>=qs.length){const pct=Math.round(score/qs.length*100);document.getElementById("quizCard").innerHTML=`<h2>${pct>=60?"أحسنت! اجتزت الاختبار":"راجع المنهج وحاول مجدداً"}</h2><p style="color:var(--muted)">نتيجتك: ${pct}%</p><button class="btn" id="retryQuiz">إعادة الاختبار</button>`;document.getElementById("liveScore").textContent=pct+"%"; if(pct>=60){for(const stage of ["foundation","layout","professional","advanced","final"])if(!state.quizPassed.includes(stage))state.quizPassed.push(stage);state.xp+=100;save();notify("تم اجتياز الاختبار النهائي! +100 XP")}document.getElementById("retryQuiz").onclick=()=>{i=0;score=0;show()};return}
 const q=qs[i];document.getElementById("quizCard").innerHTML=`<span style="color:var(--muted);font-size:12px">السؤال ${i+1} من ${qs.length}</span><div class="quiz-progress"><i style="width:${((i+1)/qs.length)*100}%"></i></div><h2 class="question">${q[0]}</h2><div class="answers">${q[1].map((a,n)=>`<button class="answer" data-answer="${n}">${a}</button>`).join("")}</div>`;
 document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{const n=Number(b.dataset.answer);document.querySelectorAll(".answer").forEach(x=>x.disabled=true);b.classList.add(n===q[2]?"correct":"wrong");if(n===q[2])score++;document.querySelectorAll(".answer")[q[2]].classList.add("correct");document.getElementById("quizCard").insertAdjacentHTML("beforeend",'<button class="btn" id="nextQ" style="height:38px;margin-top:12px">السؤال التالي ←</button>');document.getElementById("nextQ").onclick=()=>{i++;show()};document.getElementById("liveScore").textContent=Math.round(score/qs.length*100)+"%"})}show()
}
function authMessage(text, type="error"){
 const el=document.getElementById("authMessage");
 if(el){el.textContent=text;el.className="auth-message "+type;el.style.display=text?"block":"none";}
}
function setAuthLoading(form, loading){
 form.querySelectorAll("button,input").forEach(el=>el.disabled=loading);
 const submit=form.querySelector('[type="submit"]');
 if(submit)submit.innerHTML=loading?'<span class="loading-dot"></span> جاري التنفيذ':(form.id==="loginForm"?"تسجيل الدخول":"إنشاء الحساب");
}
function loginPage(){
 app.innerHTML=`<div class="auth-page"><section class="auth-card"><div class="auth-brand"><span class="brand-mark">3</span><strong>CSS Master</strong></div><div class="auth-heading"><span>مرحباً بعودتك</span><h1>تسجيل الدخول</h1><p>تابع رحلتك التعليمية من حيث توقفت</p></div><div id="authMessage" class="auth-message"></div><form id="loginForm" novalidate><label>البريد الإلكتروني<div class="auth-input"><span>@</span><input name="email" type="email" autocomplete="email" placeholder="name@example.com" required></div></label><label>كلمة المرور<div class="auth-input"><span>🔒</span><input id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="••••••••" required><button type="button" id="togglePassword" class="password-toggle" aria-label="إظهار كلمة المرور">عرض</button></div></label><div class="auth-options"><label><input name="remember" type="checkbox" checked> تذكرني</label><button type="button" id="forgotPassword" class="text-button">نسيت كلمة المرور؟</button></div><button class="btn auth-submit" type="submit">تسجيل الدخول</button></form><div class="auth-divider"><span>أو</span></div><button class="google-btn" id="googleLogin" type="button"><b>G</b> المتابعة باستخدام Google</button><p class="auth-switch">ليس لديك حساب؟ <a href="#register">إنشاء حساب جديد</a></p></section></div>`;
 const form=document.getElementById("loginForm");
 document.getElementById("togglePassword").onclick=()=>{const input=document.getElementById("loginPassword");input.type=input.type==="password"?"text":"password";};
 document.getElementById("forgotPassword").onclick=()=>{
  const email=form.elements.email.value.trim();
  if(!email){authMessage("اكتب بريدك الإلكتروني أولاً.");form.elements.email.focus();return;}
  window.CSSMasterFirebase?.resetPassword(email).then(()=>authMessage("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك.","success")).catch(e=>authMessage(window.CSSMasterFirebase?.arabicAuthError(e)));
 };
 form.onsubmit=async e=>{
  e.preventDefault();
  if(!window.CSSMasterFirebase){authMessage("خدمة Firebase لم تُحمّل بعد. تحقق من الاتصال.");return;}
  setAuthLoading(form,true);authMessage("");
  try{await window.CSSMasterFirebase.login(form.elements.email.value.trim(),form.elements.password.value,form.elements.remember.checked);navigate("account");}
  catch(error){authMessage(window.CSSMasterFirebase.arabicAuthError(error));}
  finally{setAuthLoading(form,false);}
 };
  document.getElementById("googleLogin").onclick=async()=>{
   if(!window.CSSMasterFirebase)return;
   authMessage("");
   const button=document.getElementById("googleLogin");
   button.disabled=true;
   try{await window.CSSMasterFirebase.loginWithGoogle();navigate("account");}
   catch(error){authMessage(window.CSSMasterFirebase.arabicAuthError(error));}
   finally{button.disabled=false;}
  };
}
function registerPage(){
 app.innerHTML=`<div class="auth-page"><section class="auth-card register-card"><div class="auth-brand"><span class="brand-mark">3</span><strong>CSS Master</strong></div><div class="auth-heading"><span>ابدأ رحلتك</span><h1>إنشاء حساب جديد</h1><p>أنشئ حساباً واحفظ تقدمك على أي جهاز</p></div><div id="authMessage" class="auth-message"></div><form id="registerForm" novalidate><label>الاسم الكامل<div class="auth-input"><span>♙</span><input name="username" type="text" autocomplete="name" placeholder="اسمك الكامل" required></div></label><label>البريد الإلكتروني<div class="auth-input"><span>@</span><input name="email" type="email" autocomplete="email" placeholder="name@example.com" required></div></label><label>كلمة المرور<div class="auth-input"><span>🔒</span><input name="password" type="password" autocomplete="new-password" placeholder="6 أحرف على الأقل" minlength="6" required></div></label><label>تأكيد كلمة المرور<div class="auth-input"><span>✓</span><input name="confirm" type="password" autocomplete="new-password" placeholder="أعد كتابة كلمة المرور" required></div></label><button class="btn auth-submit" type="submit">إنشاء الحساب</button></form><div class="auth-divider"><span>أو</span></div><button class="google-btn" id="googleRegister" type="button"><b>G</b> إنشاء حساب باستخدام Google</button><p class="auth-switch">لديك حساب بالفعل؟ <a href="#login">تسجيل الدخول</a></p></section></div>`;
 const form=document.getElementById("registerForm");
 form.onsubmit=async e=>{
  e.preventDefault();
  if(!window.CSSMasterFirebase){authMessage("خدمة Firebase لم تُحمّل بعد. تحقق من الاتصال.");return;}
  const username=form.elements.username.value.trim(),email=form.elements.email.value.trim(),password=form.elements.password.value,confirm=form.elements.confirm.value;
  if(!username){authMessage("اكتب اسمك الكامل.");return;}
  if(password!==confirm){authMessage("كلمتا المرور غير متطابقتين.");return;}
  if(password.length<6){authMessage("كلمة المرور يجب ألا تقل عن 6 أحرف.");return;}
  setAuthLoading(form,true);authMessage("");
  try{await window.CSSMasterFirebase.register(username,email,password);state.name=username;state.completed=[];state.exercisesCompleted=[];state.projectsCompleted=[];state.quizPassed=[];state.xp=0;save();navigate("account");}
  catch(error){authMessage(window.CSSMasterFirebase.arabicAuthError(error));}
  finally{setAuthLoading(form,false);}
 };
  document.getElementById("googleRegister").onclick=async()=>{
   if(!window.CSSMasterFirebase)return;
   authMessage("");
   const button=document.getElementById("googleRegister");
   button.disabled=true;
   try{await window.CSSMasterFirebase.loginWithGoogle();navigate("account");}
   catch(error){authMessage(window.CSSMasterFirebase.arabicAuthError(error));}
   finally{button.disabled=false;}
  };
}
function account(){
 if(authResolved&&!window.cssMasterUser){navigate("login");return;}
 const pct=Math.round(state.completed.length/lessons.length*100);
 const certificate= pct===100 && state.quizPassed&&state.quizPassed.length>=4;
 const jsProgress=state.javascriptProgress||{level:1,xp:0,completedLessons:[],completedProjects:[],completedChallenges:[]};
 const jsPct=jsProgress.completedLessons?.length?Math.round(jsProgress.completedLessons.length/jsLessons.length*100):0;
 const htmlProgress=state.htmlProgress||{level:1,xp:0,completedLessons:[],completedProjects:[],completedChallenges:[]};
 const htmlPct=htmlProgress.completedLessons?.length?Math.round(htmlProgress.completedLessons.length/htmlLessons.length*100):0;
 app.innerHTML=`<div class="page"><div class="section-title"><div><h1>حساب الطالب</h1><p>تابع تقدمك وإنجازاتك ونقاط الخبرة</p></div></div><div class="account-grid"><aside class="profile-card"><div class="profile-avatar">${state.photoURL?`<img src="${esc(state.photoURL)}" alt="صورة حساب ${esc(state.name)}" loading="lazy" decoding="async">`:"ح"}</div><h2 id="profileName">${esc(state.name)}</h2><p>${esc(window.cssMasterUser?.email||"متعلم CSS نشط")}</p><p class="profile-bio">${esc(state.bio||"أحب تعلم CSS وتطوير واجهات الويب.")}</p><button class="btn secondary" id="editName" style="height:38px;width:100%">تعديل الاسم والنبذة والصورة</button><button class="btn" id="logoutBtn" style="height:38px;width:100%;margin-top:8px;background:linear-gradient(135deg,#e35d75,#9a63ff)">تسجيل الخروج</button><div class="profile-stats"><div><b>${state.xp}</b><span>نقطة XP</span></div><div><b>${pct}%</b><span>إكمال</span></div><div><b>${state.completed.length}</b><span>درس مكتمل</span></div><div><b>${state.projectsCompleted.length}</b><span>مشروع مكتمل</span></div></div></aside><section class="account-main"><div class="panel"><div class="panel-head"><h3>التقدم العام</h3><span style="color:#67aaff">${pct}%</span></div><div style="padding:20px"><div class="quiz-progress"><i style="width:${pct}%"></i></div><p style="color:var(--muted);font-size:12px">${state.exercisesCompleted.length} تحدياً مكتملًا · ${state.projectsCompleted.length} مشروعاً مكتملًا</p> </div></div><div class="panel"><div class="panel-head"><h3>تقدم اللغات بشكل مستقل</h3></div><div class="language-progress-grid"><div><span>CSS</span><b>${pct}%</b><small>${state.completed.length} درساً · ${state.xp||0} XP</small></div> <div><span>JavaScript</span><b>${jsPct}%</b><small>${jsProgress.completedLessons.length||0} درساً · ${jsProgress.xp||0} XP</small></div><div><span>HTML</span><b>${htmlPct}%</b><small>${htmlProgress.completedLessons.length||0} درساً · ${htmlProgress.xp||0} XP</small></div></div></div><div class="panel"><div class="panel-head"><h3>الإنجازات والشارات</h3></div><div class="achievements" style="padding:14px"><div class="achievement ${state.completed.length>=1?"":"locked"}"><i>🚀</i><b>البداية</b></div><div class="achievement ${state.completed.length>=5?"":"locked"}"><i>🔥</i><b>5 دروس</b></div><div class="achievement ${state.xp>=100?"":"locked"}"><i>⚡</i><b>100 XP</b></div><div class="achievement ${pct===100?"":"locked"}"><i>🏆</i><b>إتقان المنهج</b></div></div></div>${certificate?`<div class="panel" style="padding:22px;text-align:center;border-color:rgba(255,200,92,.35);background:linear-gradient(135deg,rgba(255,200,92,.08),rgba(154,99,255,.08))"><h2 style="color:#ffd978">شهادة إتمام CSS Master</h2><p style="color:var(--muted)">تم اجتياز المنهج واختبارات المراحل بنجاح</p><strong>${esc(state.name)}</strong></div>`:""}</section></div></div>`;
 document.getElementById("editName").onclick=()=>openModal("تعديل الملف الشخصي",`
  <div class="profile-edit-grid">
   <label>الاسم الكامل<input id="nameInput" value="${esc(state.name)}"></label>
   <label>نبذة عنك<textarea id="bioInput" rows="3">${esc(state.bio||"")}</textarea></label>
   <label>صورة الحساب (JPG أو PNG أو WebP أو GIF، بحد أقصى 5 ميجابايت)<input id="photoInput" type="file" accept="image/jpeg,image/png,image/webp,image/gif"></label>
  </div>
  <div class="modal-actions"><button class="btn secondary" id="cancelName">إلغاء</button><button class="btn" id="saveName">حفظ التغييرات</button></div>`);
 document.getElementById("cancelName")?.addEventListener("click",closeModal);
 document.getElementById("saveName")?.addEventListener("click",async()=>{
  const button=document.getElementById("saveName");
  if(button.disabled)return;
  const name=document.getElementById("nameInput").value.trim();
  const bio=document.getElementById("bioInput").value.trim();
  const photoFile=document.getElementById("photoInput").files[0];
  if(!name){notify("الاسم الكامل مطلوب");return;}
  button.disabled=true;button.textContent="جاري الحفظ...";
   state.name=name;state.bio=bio;
  try{
   if(window.cssMasterUser&&window.CSSMasterFirebase){
     await Promise.all([
      window.CSSMasterFirebase.updateUsername(window.cssMasterUser.uid,name),
      window.CSSMasterFirebase.saveProfile(window.cssMasterUser.uid,{username:name,bio})
     ]);
    if(photoFile){
     try{
      const newPhotoURL=await window.CSSMasterFirebase.uploadProfileImage(photoFile);
      state.photoURL=newPhotoURL;
     }catch(error){
      const messages={
       "upload-endpoint-missing":"رفع الصور غير متاح حتى إعداد Endpoint آمن للـ Backend.",
       "invalid-image":"صيغة الصورة غير مدعومة.",
       "image-too-large":"حجم الصورة يتجاوز 5 ميجابايت.",
       "auth-required":"يجب تسجيل الدخول قبل رفع الصورة.",
       "upload-failed":"فشل رفع الصورة. تم الاحتفاظ بالصورة القديمة."
      };
      notify(messages[error.message]||"تعذر رفع الصورة. تم الاحتفاظ بالصورة القديمة.");
     }
    }
   }
   save();closeModal();account();notify("تم حفظ بيانات الملف الشخصي");
  }catch(error){
   notify(window.CSSMasterFirebase?.arabicAuthError(error)||"تعذر حفظ بيانات الملف الشخصي");
  }finally{
   button.disabled=false;
  }
 });
 if(window.cssMasterUser){
   window.cssMasterUser.getIdTokenResult().then(result=>{
    if(!result.claims.admin)return;
    const editButton=document.getElementById("editName");
    if(!editButton)return;
    const reviewButton=document.createElement("button");
    reviewButton.className="btn";
    reviewButton.style.cssText="height:38px;width:100%;margin-top:8px;background:linear-gradient(135deg,#1687ff,#7452df)";
    reviewButton.innerHTML=`Review Reports <span id="reviewBadge" class="admin-badge">0</span>`;
    reviewButton.onclick=()=>navigate("admin-reports");
    editButton.insertAdjacentElement("afterend",reviewButton);
    updateAdminReportBadge();
   });
 }
 document.getElementById("logoutBtn").onclick=async()=>{
  if(!window.CSSMasterFirebase)return;
  try{
   await window.CSSMasterFirebase.logout();
   state.completed=[];state.favorites=[];state.xp=0;state.name="طالب CSS";
   state.exercisesCompleted=[];state.projectsCompleted=[];state.quizPassed=[];
   state.photoURL="";state.bio="";state.provider="email";state.lastLesson="";
   localStorage.setItem("cssMasterState",JSON.stringify(state));
   window.cssMasterUser=null;
   updateSidebar();
   navigate("login");notify("تم تسجيل الخروج بنجاح");
  }
  catch(e){notify(window.CSSMasterFirebase.arabicAuthError(e));}
 };
}
async function updateAdminReportBadge(){
 if(!window.cssMasterUser||!window.CSSMasterFirebase)return;
 window.CSSMasterFirebase.observePath("reports",reports=>{
  const badge=document.getElementById("reviewBadge");if(!badge)return;
  const count=Object.values(reports||{}).filter(r=>(r.status||"Pending")==="Pending").length;
  badge.textContent=count>99?"99+":String(count);
 });
}
function arabicStatus(status){
 return {"Pending":"Pending","Under Review":"قيد المراجعة","Accepted":"مقبول","Rejected":"مرفوض","Resolved":"تمت المعالجة","open":"Pending"}[status]||status;
}
async function adminReportsPage(){
 if(!authResolved||!window.cssMasterUser){navigate("login");return;}
 const tokenResult=await window.cssMasterUser.getIdTokenResult();
 if(!tokenResult.claims.admin){navigate("community");notify("صلاحيات الإدارة مطلوبة");return;}
 app.innerHTML=`<div class="page admin-reports-page"><div class="section-title"><div><h1>إدارة ومراجعة البلاغات</h1><p>مراجعة البلاغات واتخاذ قرارات الإشراف وتتبع سجل التدقيق</p></div><button class="btn secondary" data-route="account">لوحة حسابي</button></div><div id="reportStats" class="report-stats"></div><div class="reports-toolbar panel"><input id="reportSearch" type="search" placeholder="ابحث بالـ Report ID أو اسم الطالب أو البريد"><select id="statusFilter"><option value="">جميع الحالات</option><option>Pending</option><option>Under Review</option><option>Accepted</option><option>Rejected</option><option>Resolved</option></select><select id="typeFilter"><option value="">جميع الأنواع</option><option value="post">منشور</option><option value="comment">تعليق</option><option value="message">رسالة</option><option value="user">مستخدم</option></select><button class="btn" id="refreshReports">تحديث</button></div><div class="reports-table-wrap panel"><table class="reports-table"><thead><tr><th>Report ID</th><th>المبلّغ</th><th>المبلّغ عنه</th><th>النوع</th><th>السبب</th><th>التاريخ</th><th>الحالة</th><th>الإجراء</th></tr></thead><tbody id="reportsTableBody"><tr><td colspan="8" class="reports-empty">جاري تحميل البلاغات...</td></tr></tbody></table></div></div>`;
 bind();
 document.getElementById("refreshReports").onclick=loadReportsTable;
 document.getElementById("reportSearch").oninput=loadReportsTable;
 document.getElementById("statusFilter").onchange=loadReportsTable;
 document.getElementById("typeFilter").onchange=loadReportsTable;
 loadReportsTable();
}
async function loadReportsTable(){
 if(!window.cssMasterUser||!window.CSSMasterFirebase)return;
 const reports=await window.CSSMasterFirebase.dbGet("reports")||{};
 let entries=Object.entries(reports).map(([id,r])=>({id,...r}));
 const search=document.getElementById("reportSearch")?.value.trim().toLowerCase()||"";
 const status=document.getElementById("statusFilter")?.value||"";
 const type=document.getElementById("typeFilter")?.value||"";
 entries=entries.filter(r=>(!status||(r.status||"Pending")===status)&&(!type||r.type===type)&&(!search||r.id.toLowerCase().includes(search)||String(r.reporterName||"").toLowerCase().includes(search)||String(r.reporterEmail||"").toLowerCase().includes(search)||String(r.reportedName||"").toLowerCase().includes(search)));
 entries.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
 const counts={total:entries.length};
 ["Pending","Under Review","Accepted","Rejected","Resolved"].forEach(s=>counts[s]=entries.filter(r=>(r.status||"Pending")===s).length);
 const allReports=Object.values(reports);
 const stats=[
  ["إجمالي البلاغات",allReports.length,"#1687ff"],
  ["بلاغات جديدة",allReports.filter(r=>(r.status||"Pending")==="Pending").length,"#f7b84b"],
  ["قيد المراجعة",allReports.filter(r=>r.status==="Under Review").length,"#7d83ff"],
  ["مقبولة",allReports.filter(r=>r.status==="Accepted").length,"#43daa3"],
  ["مرفوضة",allReports.filter(r=>r.status==="Rejected").length,"#ff7187"],
  ["تمت المعالجتها",allReports.filter(r=>r.status==="Resolved").length,"#9a63ff"]
 ];
 document.getElementById("reportStats").innerHTML=stats.map(([label,value,color])=>`<div class="report-stat" style="--stat-color:${color}"><span>${label}</span><strong>${value}</strong></div>`).join("");
 const body=document.getElementById("reportsTableBody");
 body.innerHTML=entries.length?entries.map(r=>`<tr><td><code>${esc(r.id)}</code></td><td><strong>${esc(r.reporterName||"طالب")}</strong><small>${esc(r.reporterEmail||"غير متاح")}</small></td><td>${esc(r.reportedName||"غير متاح")}</td><td>${esc(r.type||"محتوى")}</td><td>${esc(r.reason||"")}</td><td>${r.createdAt?new Date(r.createdAt).toLocaleString("ar-EG"): "-"}</td><td><span class="status-badge status-${(r.status||"Pending").toLowerCase().replace(/ /g,"-")}">${esc(arabicStatus(r.status||"Pending"))}</span></td><td><button class="table-action" data-view-report="${esc(r.id)}">View Details</button></td></tr>`).join(""):`<tr><td colspan="8" class="reports-empty">لا توجد بلاغات تطابق الفلاتر.</td></tr>`;
 body.querySelectorAll("[data-view-report]").forEach(button=>button.onclick=()=>openReportDetails(button.dataset.viewReport));
}
async function openReportDetails(reportId){
 const report=await window.CSSMasterFirebase.dbGet(`reports/${reportId}`);
 if(!report){notify("تعذر تحميل تفاصيل البلاغ");return;}
 if((report.status||"Pending")==="Pending")await updateReportStatus(reportId,"Under Review","تم فتح البلاغ للمراجعة","review-open",false);
 report.status=(await window.CSSMasterFirebase.dbGet(`reports/${reportId}`))?.status||"Under Review";
 const content=report.targetContent||"محتوى غير متاح حالياً.";
 openModal("تفاصيل البلاغ",`<div class="report-details"><div class="detail-grid"><div><span>Report ID</span><strong><code>${esc(reportId)}</code></strong></div><div><span>حالة البلاغ</span><strong class="status-badge status-${(report.status||"Under Review").toLowerCase().replace(/ /g,"-")}">${esc(arabicStatus(report.status||"Under Review"))}</strong></div><div><span>المبلّغ</span><strong>${esc(report.reporterName||"طالب")}</strong><small>${esc(report.reporterEmail||"غير متاح")}</small></div><div><span>المبلّغ عنه</span><strong>${esc(report.reportedName||"غير متاح")}</strong></div><div><span>نوع المحتوى</span><strong>${esc(report.type||"محتوى")}</strong></div><div><span>تاريخ البلاغ</span><strong>${report.createdAt?new Date(report.createdAt).toLocaleString("ar-EG"):"-"}</strong></div></div><div class="detail-section"><h3>سبب البلاغ</h3><p>${esc(report.reason||"")}</p></div><div class="detail-section"><h3>المحتوى الأصلي</h3><blockquote>${esc(content)}</blockquote></div><div class="detail-section"><label>سبب القرار وإجراء المعالجة<textarea id="reviewReason" rows="3" maxlength="500" placeholder="اكتب سبب القرار والتفاصيل الإدارية"></textarea></label><label><input id="hideContent" type="checkbox" checked> إخفاء أو حذف المحتوى المخالف عند القبول</label></div><div class="review-actions"><button class="btn review-accept" id="acceptReport">Accept Report</button><button class="btn review-reject" id="rejectReport">Reject Report</button><button class="btn review-resolve" id="resolveReport">Mark as Resolved</button></div></div>`);
 document.getElementById("acceptReport").onclick=()=>reviewReport(reportId,"Accepted",true);
 document.getElementById("rejectReport").onclick=()=>reviewReport(reportId,"Rejected",false);
 document.getElementById("resolveReport").onclick=()=>reviewReport(reportId,"Resolved",document.getElementById("hideContent")?.checked||false);
}
async function reviewReport(reportId,status,hideContent){
 const reason=document.getElementById("reviewReason")?.value.trim();
 if(!reason){notify("اكتب سبب القرار قبل المتابعة");return;}
 await updateReportStatus(reportId,status,reason,hideContent?"حذف أو إخفاء المحتوى المخالف":"الاحتفاظ بالمحتوى");
 closeModal();loadReportsTable();notify(status==="Accepted"?"تم قبول البلاغ":status==="Rejected"?"تم رفض البلاغ":"تمت معالجة البلاغ");
}
async function updateReportStatus(reportId,status,reason,actionTaken,reload=true){
 if(!window.cssMasterUser||!window.CSSMasterFirebase)return;
 const token=await window.cssMasterUser.getIdToken();
 const response=await fetch(`${window.CSS_MASTER_COMMUNITY_ENDPOINT}/reviewCommunityReport`,{
  method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},
  body:JSON.stringify({reportId,status,reason,actionTaken})
 });
 const result=await response.json().catch(()=>({}));
 if(!response.ok)throw new Error(result.error==="duplicate-action"?"تم تنفيذ قرار هذا البلاغ مسبقاً":"تعذر تحديث البلاغ.");
 if(reload&&document.getElementById("reportsTableBody"))loadReportsTable();
 return result;
}
function openModal(title,body){document.getElementById("modal").innerHTML=`<h2>${title}</h2>${body}`;document.getElementById("modalBackdrop").classList.add("open")}
function closeModal(){document.getElementById("modalBackdrop").classList.remove("open")}
function updateSidebar(){const pct=Math.round(state.completed.length/lessons.length*100);document.getElementById("sidebarProgress").textContent=pct+"% مكتمل";document.getElementById("lessonTree").innerHTML=levels.map(level=>`<details class="lesson-group" open><summary>${level}</summary>${lessons.filter(l=>l.level===level).map(l=>`<button class="lesson-item ${state.completed.includes(l.id)?"done":""}" data-lesson="${l.id}"><i class="lesson-dot"></i>${l.title}</button>`).join("")}</details>`).join("");document.querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>{navigate("lesson/"+b.dataset.lesson);document.getElementById("sidebar").classList.remove("open")})}
document.getElementById("lessonSearch").oninput=e=>{const q=e.target.value.trim().toLowerCase();document.querySelectorAll(".lesson-item").forEach(b=>b.style.display=!q||b.textContent.toLowerCase().includes(q)?"flex":"none")};
document.querySelectorAll(".main-nav [data-route],.brand").forEach(a=>a.onclick=e=>{e.preventDefault();navigate(a.dataset.route)});
document.querySelector(".account-btn").onclick=()=>navigate("account");
document.querySelectorAll("[data-language]").forEach(button=>button.onclick=()=>{
  const language=button.dataset.language;
  applyLanguageTheme(language,true);
  navigate(language==="javascript"?"javascript":language==="html"?"html":"home");
});
document.getElementById("menuToggle").onclick=()=>document.getElementById("sidebar").classList.toggle("open");
document.getElementById("closeSidebar").onclick=()=>document.getElementById("sidebar").classList.remove("open");
document.getElementById("themeToggle").onclick=()=>notify("النمط الداكن مفعل");
document.getElementById("infoBtn").onclick=()=>openModal("عن CSS Master",`<p>منصة عربية لتعلم CSS من الأساسيات حتى الاحتراف، مع محرر مباشر وتدريبات ومشاريع عملية.</p><div class="modal-actions"><button class="btn" id="closeInfo">حسناً</button></div>`);
document.getElementById("modalBackdrop").onclick=e=>{if(e.target===e.currentTarget)closeModal()};
document.addEventListener("click",e=>{if(e.target.id==="closeInfo")closeModal()});
window.addEventListener("hashchange",render);
window.addEventListener("cssmaster-auth-changed",async event=>{
 authResolved=true;
 const user=event.detail.user;
 window.cssMasterUser=user;
 if(profileObserver){profileObserver();profileObserver=null;}
 if(user&&window.CSSMasterFirebase){
  try{
   const profile=await window.CSSMasterFirebase.loadProfile(user.uid);
   if(profile){
    state.name=profile.username||user.displayName||state.name;
    state.xp=Number(profile.xp)||0;
     state.photoURL=profile.photoURL||user.photoURL||"";
     state.bio=profile.bio||"";
     state.provider=profile.provider||(user.providerData?.[0]?.providerId==="google.com"?"google":"email");
     state.completed=Array.isArray(profile.completedLessonIds)?profile.completedLessonIds:(Array.isArray(profile.completedLessons)?profile.completedLessons:state.completed);
     state.projectsCompleted=Array.isArray(profile.completedProjectIds)?profile.completedProjectIds:(Array.isArray(profile.completedProjects)?profile.completedProjects:state.projectsCompleted);
     state.exercisesCompleted=Array.isArray(profile.completedChallengeIds)?profile.completedChallengeIds:(Array.isArray(profile.completedChallenges)?profile.completedChallenges:state.exercisesCompleted);
     if(profile.progressByLanguage?.css){
      state.cssProgress=profile.progressByLanguage.css;
     }
     if(profile.progressByLanguage?.javascript){
      state.javascriptProgress=profile.progressByLanguage.javascript;
     }
     if(profile.progressByLanguage?.html){
      state.htmlProgress=profile.progressByLanguage.html;
     }
     state.lastLanguage=profile.lastLanguage||state.lastLanguage||"css";
     applyLanguageTheme(state.lastLanguage,false);
   }else{
    await window.CSSMasterFirebase.saveProfile(user.uid,{
     uid:user.uid,username:user.displayName||state.name,email:user.email,
     photoURL:user.photoURL||state.photoURL||"",bio:state.bio||"",
     provider:user.providerData?.[0]?.providerId==="google.com"?"google":"email",
     createdAt:new Date().toISOString(),level:1,xp:state.xp,
     completedLessons:state.completed.length,completedProjects:state.projectsCompleted.length,
     completedChallenges:state.exercisesCompleted.length,progress:state.completed.length?Math.round(state.completed.length/lessons.length*100):0,
     completedLessonIds:state.completed,completedProjectIds:state.projectsCompleted,completedChallengeIds:state.exercisesCompleted,
     lastLanguage:state.lastLanguage||"css",
     progressByLanguage:{
      css:state.cssProgress,
      javascript:state.javascriptProgress,
      html:state.htmlProgress
     }
    });
   }
  }catch(error){notify(window.CSSMasterFirebase.arabicAuthError(error));}
 }
 const topName=document.getElementById("topName");
 if(topName)topName.textContent=user?(state.name||"حسابي"):"تسجيل الدخول";
 updateSidebar();
 render();
});
updateSidebar();
if(window.cssMasterUser!==undefined)render();
