(function () {
  const productionBase = "https://hack1-cb0f2.web.app";
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
  const siteBase = isLocal ? location.origin : productionBase;

  const pages = {
    home: {
      title: "تعلم البرمجة من الصفر | كورسات HTML وCSS وJavaScript",
      description: "تعلم البرمجة من الصفر بالعربي عبر دورات HTML وCSS وJavaScript ودروس عملية وتدريبات ومشاريع حقيقية.",
      keywords: "تعلم البرمجة من الصفر, كورسات برمجة للمبتدئين, تعلم تطوير الويب"
    },
    html: {
      title: "تعلم HTML بالعربي من الصفر | دورة HTML للمبتدئين",
      description: "تعلم HTML بالعربي من الأساسيات إلى الاحتراف، مع شرح دلالي ومحرر أكواد وتدريبات ومشاريع HTML عملية.",
      keywords: "تعلم HTML بالعربي, دورة HTML كاملة, أكاديمية HTML"
    },
    "html-curriculum": {
      title: "منهج HTML للمبتدئين | دورة HTML كاملة بالعربي",
      description: "منهج HTML كامل يشمل الوسوم والنماذج والوصولية وSEO وبنية صفحات الويب الاحترافية.",
      keywords: "دورة HTML كاملة, تعلم HTML بالعربي, أساسيات HTML"
    },
    javascript: {
      title: "تعلم JavaScript بالعربي | دورة JavaScript للمبتدئين",
      description: "تعلم JavaScript بالعربي من المتغيرات والدوال إلى DOM والـAPIs والمشاريع التفاعلية.",
      keywords: "تعلم JavaScript بالعربي, كورس JavaScript للمبتدئين, JavaScript للمبتدئين"
    },
    "js-curriculum": {
      title: "منهج JavaScript للمبتدئين | من الصفر للاحتراف",
      description: "دورة JavaScript شاملة تغطي الأساسيات والدوال والمصفوفات والأحداث والـPromises وFetch API.",
      keywords: "كورس JavaScript للمبتدئين, تعلم JavaScript بالعربي, دورة JavaScript كاملة"
    },
    curriculum: {
      title: "منهج CSS للمبتدئين | دورة CSS كاملة بالعربي",
      description: "تعلم CSS بالعربي خطوة بخطوة من الأساسيات إلى Flexbox وGrid والتصميم المتجاوب.",
      keywords: "دورة CSS للمبتدئين, تعلم CSS بالعربي, تعلم تصميم مواقع الويب"
    },
    lesson: {
      title: "دروس CSS العربية | تعلم CSS بالممارسة",
      description: "درس CSS عملي بالعربي يتضمن شرحاً وأمثلة ومحرراً مباشراً وتدريبات تصحيحية."
    },
    "js-lesson": {
      title: "دروس JavaScript بالعربي | شرح وتدريب عملي",
      description: "درس JavaScript عملي بالعربي مع أمثلة قابلة للتشغيل وConsole وتدريبات وتصحيح ذاتي."
    },
    "html-lesson": {
      title: "دروس HTML بالعربي | شرح وبناء صفحات الويب",
      description: "تعلم HTML بالعربي عبر درس عملي يشرح الوسوم والخصائص والبنية الدلالية للصفحات."
    },
    projects: {
      title: "مشاريع CSS وHTML وJavaScript عملية",
      description: "نفذ مشاريع تصميم وتطوير الويب الحقيقية وطور مهاراتك من البطاقات البسيطة إلى لوحات الإدارة."
    },
    "js-projects": {
      title: "مشاريع JavaScript للمبتدئين | Build It Yourself",
      description: "تحديات JavaScript عملية تشمل الآلة الحاسبة، العدادات، قوائم المهام والتطبيقات المتصلة بـAPI."
    },
    "html-projects": {
      title: "مشاريع HTML عملية للمبتدئين",
      description: "ابنِ نماذج وصفحات ومواقع HTML متجاوبة مع متطلبات وتلميحات وتقييم ذاتي."
    },
    exercises: {
      title: "تدريبات CSS وJavaScript وHTML",
      description: "تدريبات برمجة عربية بمستويات سهلة ومتوسطة وصعبة مع تصحيح وتلميحات ونقاط XP."
    },
    "js-exercises": {
      title: "تدريبات JavaScript للمبتدئين",
      description: "تدريبات JavaScript تشمل توقع الناتج وتصحيح الأخطاء والدوال والتفكيك والتقييم الفوري."
    },
    "html-exercises": {
      title: "تدريبات HTML للمبتدئين",
      description: "تدريبات HTML لتكملة الوسوم وتصحيح الأخطاء واختيار العناصر والبنية الصحيحة."
    },
    editor: {
      title: "محرر أكواد CSS وHTML وJavaScript",
      description: "اكتب HTML وCSS وJavaScript وشاهد النتيجة مباشرة في محرر تفاعلي آمن."
    },
    "js-editor": {
      title: "محرر JavaScript تفاعلي وConsole",
      description: "نفذ JavaScript مع محرر HTML وCSS ومعاينة مباشرة وConsole آمنة."
    },
    "html-editor": {
      title: "محرر HTML وCSS وJavaScript",
      description: "اكتب HTML وCSS وJavaScript وراجع معاينة الصفحة مباشرة من متصفحك."
    },
    login: { title: "تسجيل الدخول | CSS Master", description: "سجل دخولك لحفظ تقدم دروس البرمجة والمشاريع." },
    register: { title: "إنشاء حساب | CSS Master", description: "أنشئ حسابك واحفظ تقدمك في HTML وCSS وJavaScript." },
    account: { title: "حساب الطالب | CSS Master", description: "لوحة تقدم الطالب ودروسه ومشاريعه وشاراته." },
    community: { title: "مجتمع التعلم | CSS Master", description: "منتدى طلاب تعلم HTML وCSS وJavaScript." },
    "admin-reports": { title: "إدارة البلاغات | CSS Master", description: "لوحة إدارة مراجعة البلاغات." }
  };

  function setMeta(name, content, property) {
    if (!content) return;
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      if (property) element.setAttribute("property", name);
      else element.setAttribute("name", name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  }

  function setCanonical(url) {
    let element = document.head.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
      document.head.appendChild(element);
    }
    element.setAttribute("href", url);
  }

  function setJsonLd(data) {
    let element = document.getElementById("route-jsonld");
    if (!element) {
      element = document.createElement("script");
      element.id = "route-jsonld";
      element.type = "application/ld+json";
      document.head.appendChild(element);
    }
    element.textContent = JSON.stringify(data);
  }

  function routeKey() {
    const route = location.hash.replace(/^#/, "").split("/")[0] || "home";
    return route;
  }

  function updateSeo() {
    const route = routeKey();
    const privateRoutes = ["login", "register", "account", "admin-reports", "community"];
    const page = pages[route] || pages.home;
    const canonical = privateRoutes.includes(route) || route === "home" || !route
      ? siteBase + "/"
      : siteBase + "/#" + route;

    document.title = page.title;
    setMeta("description", page.description);
    setMeta("keywords", page.keywords || "");
    setCanonical(canonical);

    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", siteBase + "/assets/reference.png", true);
    setMeta("twitter:title", page.title);
    setMeta("twitter:description", page.description);
    setMeta("twitter:image", siteBase + "/assets/reference.png");

    if (privateRoutes.includes(route)) {
      setMeta("robots", "noindex,nofollow,noarchive");
    } else {
      setMeta("robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    }

    const breadcrumbItems = [
      {"@type":"ListItem","position":1,"name":"الرئيسية","item":siteBase + "/"}
    ];
    if (route !== "home") {
      breadcrumbItems.push({"@type":"ListItem","position":2,"name":page.title,"item":canonical});
    }

    const graph = [
      {"@type":"Organization","@id":siteBase + "/#organization","name":"CSS Master","url":siteBase + "/","inLanguage":"ar","logo":siteBase + "/assets/reference.png"},
      {"@type":"WebSite","@id":siteBase + "/#website","url":siteBase + "/","name":"CSS Master","inLanguage":"ar","publisher":{"@id":siteBase + "/#organization"}},
      {"@type":"BreadcrumbList","@id":canonical + "#breadcrumb","itemListElement":breadcrumbItems}
    ];

    if (["html","html-curriculum","javascript","js-curriculum","curriculum"].includes(route)) {
      const languageName = route.startsWith("html") ? "HTML" : route.startsWith("js") ? "JavaScript" : "CSS";
      graph.push({
        "@type":"Course",
        "@id":canonical + "#course",
        "name":page.title,
        "description":page.description,
        "inLanguage":"ar",
        "educationalLevel":"مبتدئ إلى احتراف",
        "provider":{"@id":siteBase + "/#organization"},
        "courseCode":"CSS-MASTER-" + languageName.toUpperCase(),
        "teaches":"تعلم " + languageName + " وتطوير واجهات الويب"
      });
    }

    if (["lesson","js-lesson","html-lesson"].includes(route)) {
      graph.push({
        "@type":"Article",
        "@id":canonical + "#article",
        "headline":page.title,
        "description":page.description,
        "inLanguage":"ar",
        "author":{"@id":siteBase + "/#organization"},
        "publisher":{"@id":siteBase + "/#organization"},
        "mainEntityOfPage":canonical
      });
    }

    if (["html","javascript","html-curriculum","js-curriculum","curriculum"].includes(route)) {
      graph.push({
        "@type":"FAQPage",
        "@id":canonical + "#faq",
        "mainEntity":[
          {"@type":"Question","name":"هل يمكنني تعلم البرمجة للمبتدئين من الصفر؟","acceptedAnswer":{"@type":"Answer","text":"نعم، تبدأ بالدروس الأساسية وتطبق كل درس في محرر أكواد مباشر ثم تنتقل للمشاريع."}},
          {"@type":"Question","name":"هل الدروس متاحة باللغة العربية؟","acceptedAnswer":{"@type":"Answer","text":"نعم، الدروس العربية تشرح المفاهيم والأسئلة والأمثلة بأسلوب مبسط."}},
          {"@type":"Question","name":"هل يمكن حفظ التقدم؟","acceptedAnswer":{"@type":"Answer","text":"يتم حفظ تقدم الطالب في Firebase Realtime Database بعد تسجيل الدخول."}}
        ]
      });
    }

    setJsonLd({"@context":"https://schema.org","@graph":graph});
  }

  function addBreadcrumbsAndFaq() {
    const page = document.querySelector(".page");
    if (!page || page.querySelector(".seo-breadcrumb")) return;

    const route = routeKey();
    if (!["home","login","register","account","community","admin-reports"].includes(route)) {
      const sectionTitle = page.querySelector(".section-title");
      if (sectionTitle) {
        const breadcrumb = document.createElement("nav");
        breadcrumb.className = "seo-breadcrumb";
        breadcrumb.setAttribute("aria-label","مسار الصفحة");
        breadcrumb.innerHTML = `<a href="#home">الرئيسية</a><span>›</span><span>${escSeo(document.title)}</span>`;
        sectionTitle.insertAdjacentElement("beforebegin", breadcrumb);
      }
    }

    if (["html","html-curriculum","javascript","js-curriculum","curriculum","home"].includes(route)) {
      const faq = document.createElement("section");
      faq.className = "seo-faq";
      faq.innerHTML = `<h2>أسئلة شائعة عن تعلم البرمجة</h2>
        <article><h3>هل أحتاج خبرة سابقة؟</h3><p>يمكن للمبتدئ البدء من الصفر، لأن المنهج يرتب الدروس من المفاهيم الأساسية إلى المشاريع الاحترافية.</p></article>
        <article><h3>كيف أتعلم HTML وCSS وJavaScript بالعربي؟</h3><p>ابدأ بـHTML لبناء الهيكل، ثم CSS للتصميم، ثم JavaScript للتفاعلات، وأكمل كل درس بمثال وتدريب ومشروع.</p></article>
        <article><h3>هل يحفظ تقدمي؟</h3><p>نعم، يحفظ تقدم الدروس والمشاريع والتحديات في حساب الطالب بعد تسجيل الدخول.</p></article>`;
      page.appendChild(faq);
    }

    if (["html-curriculum","js-curriculum","curriculum"].includes(route)) {
      const links = document.createElement("nav");
      links.className = "seo-internal-links";
      links.setAttribute("aria-label","دورات البرمجة ذات الصلة");
      links.innerHTML = `<h2>دروس برمجة ذات صلة</h2><a href="#html-curriculum">تعلم HTML بالعربي</a><a href="#curriculum">تعلم CSS بالعربي</a><a href="#js-curriculum">تعلم JavaScript بالعربي</a>`;
      page.appendChild(links);
    }
  }

  function escSeo(value) {
    return String(value).replace(/[&<>"']/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]));
  }

  function init() {
    updateSeo();
    addBreadcrumbsAndFaq();
  }

  window.addEventListener("hashchange", () => setTimeout(init, 30));
  window.addEventListener("cssmaster-route-rendered", init);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
