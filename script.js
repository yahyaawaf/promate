"use strict";

/* =========================
   البيانات الأساسية
========================= */
const IMAGE_TYPES = [
  ["الصور الواقعية", "📷", ["صور", "واقعي"]],
  ["الصور فائقة الواقعية Hyperrealistic", "🔎", ["صور", "واقعي"]],
  ["الصور السينمائية", "🎞️", ["صور", "سينمائي"]],
  ["الصور ثلاثية الأبعاد 3D", "🧊", ["صور", "3D"]],
  ["أسلوب Pixar 3D", "✨", ["صور", "3D", "كرتوني", "شخصيات"]],
  ["الصور الكرتونية", "🎨", ["صور", "كرتوني"]],
  ["الأنمي", "🌸", ["صور", "كرتوني", "شخصيات"]],
  ["الصور التعليمية", "📚", ["صور", "تعليمي"]],
  ["الإنفوجرافيك", "📊", ["صور", "تعليمي"]],
  ["الصور الإعلانية", "📣", ["صور", "إعلاني"]],
  ["صور المنتجات", "🛍️", ["صور", "منتجات", "إعلاني"]],
  ["الصور الشخصية", "👤", ["صور", "شخصيات"]],
  ["صور الشخصيات", "🧑‍🎨", ["صور", "شخصيات"]],
  ["الصور التاريخية", "🏺", ["صور", "واقعي"]],
  ["الصور التراثية", "🕌", ["صور", "واقعي"]],
  ["الصور المستقبلية", "🔮", ["صور"]],
  ["الخيال العلمي", "👽", ["صور", "سينمائي"]],
  ["الفضاء والكواكب", "🪐", ["صور", "سينمائي"]],
  ["الطبيعة", "🌿", ["صور", "واقعي"]],
  ["العمارة", "🏛️", ["صور", "واقعي"]],
  ["الديكور الداخلي", "🛋️", ["صور", "واقعي"]],
  ["الأزياء", "👗", ["صور", "شخصيات", "إعلاني"]],
  ["أغلفة الكتب", "📕", ["صور", "إعلاني"]],
  ["الملصقات", "🏷️", ["صور", "إعلاني"]],
  ["البوسترات", "🪧", ["صور", "إعلاني"]],
  ["الصور المصغرة Thumbnail", "▶️", ["صور", "إعلاني"]],
  ["خلفيات المواقع والعروض", "🖥️", ["صور"]],
  ["الصور بدون خلفية PNG", "🧩", ["صور", "منتجات"]],
  ["أوراق العمل التعليمية", "📝", ["صور", "تعليمي"]],
  ["الشخصيات التعليمية", "👩‍🏫", ["صور", "تعليمي", "شخصيات"]],
  ["الواقع المعزز AR", "📱", ["صور", "3D"]],
  ["الواقع الافتراضي VR", "🥽", ["صور", "3D"]],
  ["الواقع المختلط MR", "🧠", ["صور", "3D"]]
];

const VIDEO_TYPES = [
  ["فيديو واقعي", "🎥", ["فيديو", "واقعي"]],
  ["فيديو سينمائي", "🎬", ["فيديو", "سينمائي"]],
  ["فيديو تعليمي", "🧑‍🏫", ["فيديو", "تعليمي"]],
  ["فيديو إعلاني", "📢", ["فيديو", "إعلاني"]],
  ["فيديو قصير Reels", "📱", ["فيديو", "إعلاني"]],
  ["فيديو TikTok", "🎵", ["فيديو", "إعلاني"]],
  ["فيديو YouTube", "▶️", ["فيديو"]],
  ["فيديو Story", "📲", ["فيديو"]],
  ["فيديو 3D", "🧊", ["فيديو", "3D"]],
  ["فيديو Pixar 3D", "✨", ["فيديو", "3D", "كرتوني", "شخصيات"]],
  ["فيديو أنمي", "🌸", ["فيديو", "كرتوني", "شخصيات"]],
  ["فيديو وثائقي", "🎞️", ["فيديو", "واقعي"]],
  ["فيديو تاريخي", "🏺", ["فيديو", "واقعي"]],
  ["فيديو تراثي", "🕌", ["فيديو", "واقعي"]],
  ["فيديو خيال علمي", "👽", ["فيديو", "سينمائي"]],
  ["فيديو فضائي", "🚀", ["فيديو", "سينمائي"]],
  ["فيديو تحريك الصور", "🖼️", ["فيديو"]],
  ["فيديو تحريك الشخصيات", "🕺", ["فيديو", "شخصيات"]],
  ["فيديو تحويل صورة إلى فيديو", "🔁", ["فيديو"]],
  ["فيديو متحدث بالذكاء الاصطناعي", "🗣️", ["فيديو", "شخصيات"]],
  ["فيديو Storytelling", "📖", ["فيديو", "سينمائي"]],
  ["فيديو تعليمي للأطفال", "🧒", ["فيديو", "تعليمي", "كرتوني"]],
  ["فيديو Motion Graphics", "💫", ["فيديو", "إعلاني"]],
  ["فيديو Product Showcase", "📦", ["فيديو", "منتجات", "إعلاني"]],
  ["فيديو Drone Cinematic", "🚁", ["فيديو", "سينمائي"]],
  ["فيديو Time-Lapse", "⏱️", ["فيديو", "سينمائي"]],
  ["فيديو Slow Motion", "🐢", ["فيديو", "سينمائي"]],
  ["فيديو الواقع الافتراضي VR", "🥽", ["فيديو", "3D"]],
  ["فيديو الواقع المعزز AR", "📱", ["فيديو", "3D"]]
];

const FILTERS = ["الكل", "صور", "فيديو", "تعليمي", "إعلاني", "سينمائي", "واقعي", "3D", "كرتوني", "شخصيات", "منتجات"];

const CAMERA_MOVES = [
  "Static Shot", "Pan Left", "Pan Right", "Tilt Up", "Tilt Down", "Zoom In", "Zoom Out",
  "Dolly In", "Dolly Out", "Tracking Shot", "Orbit Shot", "Crane Shot", "Drone Shot", "Handheld",
  "Cinematic Slow Motion"
];

const IMAGE_ASPECTS = ["1:1", "16:9", "9:16", "4:3", "3:2", "A4", "Story", "Instagram Post", "YouTube Thumbnail", "PowerPoint 16:9"];
const VIDEO_ASPECTS = ["16:9", "9:16", "1:1", "4:3", "Story", "Reels", "TikTok", "YouTube"];

const DEFAULT_NEGATIVE_AR = "تشوه الوجه، أيدٍ مشوهة، أصابع زائدة، أطراف إضافية، نصوص عشوائية، علامات مائية، شعارات غير مطلوبة، ضبابية، تشوهات، تكرار العناصر، نسب جسم غير طبيعية، قص سيئ، انخفاض الجودة، ضوضاء بصرية، تفاصيل غير واضحة";
const DEFAULT_NEGATIVE_EN = "deformed face, malformed hands, extra fingers, extra limbs, random text, watermarks, unwanted logos, blur, artifacts, duplicated elements, unnatural body proportions, bad crop, low quality, visual noise, unclear details";

const TEMPLATES = [
  {
    id: "edu-image",
    kind: "image",
    icon: "📚",
    title: "صورة تعليمية احترافية",
    type: "الصور التعليمية",
    description: "مشهد تعليمي واضح مناسب للشرح والعروض.",
    values: {
      subject: "معلمة تشرح مفهومًا تعليميًا للطالبات داخل فصل حديث",
      goal: "صورة تعليمية داعمة لشرح الدرس",
      audience: "طالبات المرحلة المتوسطة",
      place: "فصل دراسي حديث ومنظم",
      composition: "تكوين متوازن مع نقطة تركيز واضحة ومساحة فارغة للنص",
      lighting: "إضاءة نهارية ناعمة ومتوازنة",
      colors: "ألوان هادئة وتعليمية",
      style: "احترافي تعليمي واقعي",
      quality: "4K high detail",
      aspectRatio: "16:9"
    }
  },
  {
    id: "product-image",
    kind: "image",
    icon: "🛍️",
    title: "صورة منتج إعلانية",
    type: "صور المنتجات",
    description: "عرض منتج بإضاءة استوديو وتكوين تسويقي نظيف.",
    values: {
      subject: "منتج فاخر في منتصف المشهد",
      goal: "إعلان رقمي احترافي",
      background: "خلفية استوديو بسيطة ومتدرجة",
      composition: "Hero product composition مع تركيز كامل على المنتج",
      cameraAngle: "زاوية أمامية منخفضة قليلًا",
      lens: "85mm product photography lens",
      lighting: "softbox studio lighting مع rim light",
      style: "premium commercial photography",
      quality: "ultra detailed 8K",
      aspectRatio: "1:1"
    }
  },
  {
    id: "cinematic-video",
    kind: "video",
    icon: "🎬",
    title: "فيديو سينمائي قصير",
    type: "فيديو سينمائي",
    description: "مشهد قصير بحركة كاميرا وإيقاع سينمائي.",
    values: {
      topic: "شخصية تمشي بثقة في موقع مفتوح وقت الغروب",
      scene: "افتتاح بلقطة واسعة ثم اقتراب تدريجي من الشخصية",
      place: "موقع حضري أنيق مع عمق ميداني واضح",
      characterMovement: "مشي طبيعي وثابت مع حركة ملابس واقعية",
      cameraMovement: "Tracking Shot",
      cameraAngle: "eye-level cinematic angle",
      lighting: "golden hour cinematic lighting",
      mood: "هادئ وملهم وفاخر",
      duration: "8 ثوانٍ",
      speed: "حركة طبيعية مع تباطؤ خفيف في النهاية",
      end: "تنتهي اللقطة على close-up هادئ",
      quality: "4K cinematic",
      aspectRatio: "16:9"
    }
  },
  {
    id: "reels-video",
    kind: "video",
    icon: "📱",
    title: "Reels تعليمي",
    type: "فيديو قصير Reels",
    description: "فيديو رأسي سريع مناسب للمحتوى التعليمي القصير.",
    values: {
      topic: "شرح معلومة تعليمية واحدة بطريقة جذابة",
      scene: "متحدث أمام خلفية تعليمية بسيطة مع عناصر بصرية تظهر بالتتابع",
      characterMovement: "إيماءات يد طبيعية وتواصل بصري مباشر",
      cameraMovement: "Static Shot",
      mood: "نشط وواضح ومباشر",
      duration: "15 ثانية",
      speed: "سريع ومريح للمشاهدة",
      audio: "صوت واضح ونظيف",
      voiceover: "تعليق صوتي عربي فصيح وواضح",
      quality: "4K vertical video",
      aspectRatio: "9:16"
    }
  },
  {
    id: "pixar-character",
    kind: "image",
    icon: "✨",
    title: "شخصية تعليمية 3D",
    type: "أسلوب Pixar 3D",
    description: "شخصية ثلاثية الأبعاد ودودة مناسبة للمواد التعليمية.",
    values: {
      subject: "شخصية معلمة تعليمية ثلاثية الأبعاد",
      audience: "طلاب وطالبات التعليم العام",
      character: "ملامح ودودة، تصميم احترافي، نسب متوازنة",
      expression: "ابتسامة لطيفة وواثقة",
      pose: "تقف وتشير بيدها إلى مساحة فارغة للشرح",
      lighting: "soft studio lighting",
      colors: "ألوان دافئة ومتناسقة",
      style: "stylized 3D animated character",
      quality: "high detail 3D render",
      aspectRatio: "16:9"
    }
  },
  {
    id: "history-video",
    kind: "video",
    icon: "🏺",
    title: "مشهد تاريخي وثائقي",
    type: "فيديو تاريخي",
    description: "مشهد تاريخي واقعي مع بيئة وملابس متسقة زمنيًا.",
    values: {
      topic: "مشهد تاريخي موثق بصريًا من حقبة محددة",
      scene: "لقطة تأسيسية للمكان ثم انتقال إلى الشخصيات الرئيسية",
      clothes: "ملابس مناسبة للحقبة التاريخية دون عناصر حديثة",
      place: "بيئة تاريخية متسقة مع الزمان والمكان",
      cameraMovement: "Dolly In",
      lighting: "natural cinematic lighting",
      mood: "وثائقي، جاد، واقعي",
      duration: "12 ثانية",
      quality: "4K documentary cinematic",
      aspectRatio: "16:9"
    }
  }
];

const IMAGE_FIELDS = [
  ["subject", "موضوع الصورة", "textarea", "صف المشهد أو الفكرة الرئيسية..."],
  ["goal", "الهدف من الصورة", "text", "تعليمي، إعلاني، توعوي..."],
  ["audience", "الفئة المستهدفة", "text", "مثال: طالبات المرحلة المتوسطة"],
  ["character", "وصف الشخصية", "textarea", "الملامح، الهوية البصرية، التفاصيل..."],
  ["age", "العمر", "text", "مثال: 25 سنة"],
  ["gender", "الجنس", "select", ["غير محدد", "أنثى", "ذكر"]],
  ["clothes", "الملابس", "textarea", "نوع الملابس وألوانها وتفاصيلها..."],
  ["expression", "تعبيرات الوجه", "text", "مبتسم، واثق، مندهش..."],
  ["pose", "وضعية الجسم", "text", "واقف، جالس، يشير..."],
  ["place", "المكان", "text", "فصل، استوديو، مدينة، طبيعة..."],
  ["background", "الخلفية", "textarea", "تفاصيل الخلفية والعمق..."],
  ["elements", "العناصر الموجودة في المشهد", "textarea", "الأشياء والعناصر المساندة..."],
  ["composition", "التكوين البصري", "textarea", "توزيع العناصر ونقطة التركيز والمساحات..."],
  ["cameraAngle", "زاوية التصوير", "text", "eye-level, low angle, top view..."],
  ["lens", "نوع العدسة", "text", "35mm, 50mm, macro..."],
  ["lighting", "الإضاءة", "textarea", "ناعمة، درامية، نهارية، استوديو..."],
  ["colors", "الألوان", "text", "لوحة الألوان المرغوبة..."],
  ["realism", "مستوى الواقعية", "select", ["غير محدد", "واقعي", "واقعي جدًا", "فائق الواقعية", "أسلوبي/خيالي"]],
  ["style", "الأسلوب الفني", "text", "cinematic, watercolor, 3D..."],
  ["quality", "جودة الصورة", "select", ["4K high detail", "8K ultra detailed", "Studio quality", "Print-ready", "Web optimized"]],
  ["aspectRatio", "نسبة أبعاد الصورة", "select", IMAGE_ASPECTS],
  ["visibleText", "النصوص المطلوب ظهورها", "textarea", "اكتب النص حرفيًا إن وجد..."],
  ["blocked", "العناصر المطلوب منع ظهورها", "textarea", "شعارات، أشخاص إضافيون، نصوص..." ]
];

const VIDEO_FIELDS = [
  ["topic", "موضوع الفيديو", "textarea", "الفكرة أو الموضوع الرئيسي..."],
  ["scene", "وصف المشهد", "textarea", "صف المشهد بصريًا بالتفصيل..."],
  ["character", "الشخصية", "textarea", "وصف الشخصية والملامح..."],
  ["clothes", "الملابس", "textarea", "نوع الملابس والألوان..."],
  ["place", "المكان", "text", "الموقع أو البيئة..."],
  ["motion", "الحركة", "textarea", "الحركة العامة داخل المشهد..."],
  ["characterMovement", "حركة الشخصية", "textarea", "المشي، الإيماءات، الالتفات..."],
  ["cameraMovement", "حركة الكاميرا", "select", CAMERA_MOVES],
  ["cameraAngle", "زاوية التصوير", "text", "wide, eye-level, low angle..."],
  ["lighting", "الإضاءة", "textarea", "cinematic, daylight, studio..."],
  ["mood", "الجو العام", "text", "ملهم، حماسي، غامض..."],
  ["style", "الأسلوب البصري", "text", "cinematic realism, anime, 3D..."],
  ["duration", "مدة الفيديو", "text", "مثال: 8 ثوانٍ"],
  ["speed", "سرعة الحركة", "text", "طبيعية، سريعة، بطيئة..."],
  ["start", "وصف البداية", "textarea", "كيف تبدأ اللقطة؟"],
  ["middle", "وصف منتصف المشهد", "textarea", "ماذا يحدث في المنتصف؟"],
  ["end", "وصف نهاية المشهد", "textarea", "كيف تنتهي اللقطة؟"],
  ["effects", "المؤثرات", "textarea", "جسيمات، ضباب، توهج، انتقالات..."],
  ["audio", "الصوت", "textarea", "مؤثرات صوتية أو أجواء محيطة..."],
  ["music", "الموسيقى", "textarea", "نوع الموسيقى وإيقاعها..."],
  ["dialogue", "الحوار", "textarea", "النص المنطوق بين الشخصيات..."],
  ["voiceover", "التعليق الصوتي", "textarea", "نص أو وصف التعليق الصوتي..."],
  ["aspectRatio", "نسبة أبعاد الفيديو", "select", VIDEO_ASPECTS],
  ["quality", "الجودة", "select", ["4K cinematic", "4K vertical video", "Full HD", "8K ultra detailed"]],
  ["blocked", "العناصر الممنوعة", "textarea", "اهتزاز، تشوه، نصوص، شعارات..." ]
];

/* =========================
   الحالة وعناصر DOM
========================= */
const state = {
  selectedKind: null,
  selectedType: null,
  activeFilter: "الكل",
  editingSavedId: null,
  activeTemplate: null
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const imageCards = $("#imageCards");
const videoCards = $("#videoCards");
const filterChips = $("#filterChips");
const typeSearch = $("#typeSearch");
const modal = $("#builderModal");
const modalTitle = $("#modalTitle");
const modalKind = $("#modalKind");
const dynamicFields = $("#dynamicFields");
const promptForm = $("#promptForm");
const promptOutput = $("#promptOutput");
const resultPanel = $("#resultPanel");
const resultMeta = $("#resultMeta");
const negativePrompt = $("#negativePrompt");
const savedPrompts = $("#savedPrompts");
const savedEmpty = $("#savedEmpty");
const savedSearch = $("#savedSearch");

/* =========================
   إنشاء البطاقات والفلاتر
========================= */
function createTypeCard([name, icon, tags], kind) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "type-card";
  button.dataset.name = name.toLowerCase();
  button.dataset.tags = tags.join("|");
  button.dataset.kind = kind;
  button.innerHTML = `
    <span class="type-icon" aria-hidden="true">${icon}</span>
    <h3>${escapeHtml(name)}</h3>
    <p>${kind === "image" ? "أنشئ برومبت صورة منظمًا بتفاصيل الإضاءة والكاميرا والأسلوب." : "أنشئ برومبت فيديو بحركة كاميرا وتوقيت وصوت وتفاصيل سينمائية."}</p>
    <span class="card-arrow" aria-hidden="true">←</span>
  `;
  button.setAttribute("aria-label", `فتح نموذج ${name}`);
  button.addEventListener("click", () => openBuilder(kind, name));
  return button;
}

function renderTypeCards() {
  imageCards.replaceChildren(...IMAGE_TYPES.map(item => createTypeCard(item, "image")));
  videoCards.replaceChildren(...VIDEO_TYPES.map(item => createTypeCard(item, "video")));
  $("#imageCount").textContent = `${IMAGE_TYPES.length} نوع`;
  $("#videoCount").textContent = `${VIDEO_TYPES.length} نوع`;
}

function renderFilters() {
  filterChips.replaceChildren(...FILTERS.map(filter => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-chip${filter === state.activeFilter ? " active" : ""}`;
    btn.textContent = filter;
    btn.addEventListener("click", () => {
      state.activeFilter = filter;
      $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.textContent === filter));
      applyCardFilters();
    });
    return btn;
  }));
}

function applyCardFilters() {
  const query = typeSearch.value.trim().toLowerCase();
  $$(".type-card").forEach(card => {
    const matchesSearch = !query || card.dataset.name.includes(query) || card.textContent.toLowerCase().includes(query);
    const tags = card.dataset.tags.split("|");
    const matchesFilter = state.activeFilter === "الكل" || tags.includes(state.activeFilter);
    card.classList.toggle("hidden-card", !(matchesSearch && matchesFilter));
  });
}

/* =========================
   بناء النموذج
========================= */
function makeField([name, label, type, optionsOrPlaceholder]) {
  const wrap = document.createElement("div");
  wrap.className = (type === "textarea" && ["subject", "scene", "topic", "character", "composition"].includes(name)) ? "field full-field" : "field";

  const labelEl = document.createElement("label");
  labelEl.htmlFor = `field-${name}`;
  labelEl.textContent = label;
  wrap.appendChild(labelEl);

  let input;
  if (type === "textarea") {
    input = document.createElement("textarea");
    input.rows = 3;
    input.placeholder = optionsOrPlaceholder || "";
  } else if (type === "select") {
    input = document.createElement("select");
    (optionsOrPlaceholder || []).forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      input.appendChild(opt);
    });
  } else {
    input = document.createElement("input");
    input.type = type;
    input.placeholder = optionsOrPlaceholder || "";
  }

  input.name = name;
  input.id = `field-${name}`;
  input.autocomplete = "off";
  wrap.appendChild(input);
  return wrap;
}

function openBuilder(kind, typeName, presetValues = null) {
  state.selectedKind = kind;
  state.selectedType = typeName;
  state.activeTemplate = presetValues;
  state.editingSavedId = null;

  modalKind.textContent = kind === "image" ? "تصميم صورة" : "تصميم فيديو";
  modalTitle.textContent = typeName;
  dynamicFields.replaceChildren(...(kind === "image" ? IMAGE_FIELDS : VIDEO_FIELDS).map(makeField));
  promptForm.reset();
  $("#promptLanguage").value = "both";
  resultPanel.hidden = true;
  promptOutput.value = "";
  negativePrompt.value = "";

  if (presetValues) {
    Object.entries(presetValues).forEach(([key, value]) => {
      const input = promptForm.elements[key];
      if (input) input.value = value;
    });
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}

function closeBuilder() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function getFormValues() {
  return Object.fromEntries(new FormData(promptForm).entries());
}

/* =========================
   إنشاء البرومبت
========================= */
function clean(value) {
  return (value || "").toString().trim();
}

function addArLine(lines, label, value) {
  if (clean(value)) lines.push(`${label}: ${clean(value)}`);
}

function addEnLine(lines, label, value) {
  if (clean(value)) lines.push(`${label}: ${clean(value)}`);
}

function buildArabicPrompt(kind, typeName, values) {
  const lines = [];
  lines.push(`أنشئ ${kind === "image" ? "صورة" : "فيديو"} احترافيًا من نوع: ${typeName}.`);

  if (kind === "image") {
    addArLine(lines, "الموضوع / Subject", values.subject);
    addArLine(lines, "الهدف", values.goal);
    addArLine(lines, "الفئة المستهدفة", values.audience);
    addArLine(lines, "الشخصية", values.character);
    addArLine(lines, "العمر", values.age);
    addArLine(lines, "الجنس", values.gender === "غير محدد" ? "" : values.gender);
    addArLine(lines, "الملابس", values.clothes);
    addArLine(lines, "تعبير الوجه", values.expression);
    addArLine(lines, "وضعية الجسم", values.pose);
    addArLine(lines, "المشهد / Scene", values.elements);
    addArLine(lines, "البيئة / Environment", [values.place, values.background].filter(clean).join("، "));
    addArLine(lines, "التكوين / Composition", values.composition);
    addArLine(lines, "الكاميرا / Camera", [values.cameraAngle, values.lens].filter(clean).join("، "));
    addArLine(lines, "الإضاءة / Lighting", values.lighting);
    addArLine(lines, "الألوان / Colors", values.colors);
    addArLine(lines, "مستوى الواقعية", values.realism === "غير محدد" ? "" : values.realism);
    addArLine(lines, "الأسلوب / Style", values.style);
    addArLine(lines, "التفاصيل / Details", values.visibleText ? `إظهار النص التالي بدقة: «${values.visibleText}»` : "");
    addArLine(lines, "الجودة / Quality", values.quality);
    addArLine(lines, "نسبة الأبعاد / Aspect Ratio", values.aspectRatio);
    addArLine(lines, "عناصر ممنوعة إضافية", values.blocked);
  } else {
    addArLine(lines, "الموضوع / Subject", values.topic);
    addArLine(lines, "المشهد / Scene", values.scene);
    addArLine(lines, "الشخصية", values.character);
    addArLine(lines, "الملابس", values.clothes);
    addArLine(lines, "البيئة / Environment", values.place);
    addArLine(lines, "الحركة العامة / Motion", values.motion);
    addArLine(lines, "حركة الشخصية / Character Movement", values.characterMovement);
    addArLine(lines, "حركة الكاميرا / Camera Movement", values.cameraMovement);
    addArLine(lines, "زاوية التصوير", values.cameraAngle);
    addArLine(lines, "الإضاءة / Lighting", values.lighting);
    addArLine(lines, "الجو العام", values.mood);
    addArLine(lines, "الأسلوب السينمائي / Cinematic Style", values.style);
    addArLine(lines, "التوقيت / Timing", [values.duration, values.speed].filter(clean).join("، "));
    addArLine(lines, "البداية", values.start);
    addArLine(lines, "منتصف المشهد", values.middle);
    addArLine(lines, "النهاية", values.end);
    addArLine(lines, "المؤثرات", values.effects);
    addArLine(lines, "الصوت / Audio", values.audio);
    addArLine(lines, "الموسيقى", values.music);
    addArLine(lines, "الحوار / Dialogue", values.dialogue);
    addArLine(lines, "التعليق الصوتي", values.voiceover);
    addArLine(lines, "الجودة / Quality", values.quality);
    addArLine(lines, "نسبة الأبعاد / Aspect Ratio", values.aspectRatio);
    addArLine(lines, "عناصر ممنوعة إضافية", values.blocked);
  }

  addArLine(lines, "Negative Prompt", values.negativePrompt || DEFAULT_NEGATIVE_AR);
  return lines.join("\n");
}

function buildEnglishPrompt(kind, typeName, values) {
  const lines = [];
  lines.push(`Create a professional ${kind === "image" ? "image" : "video"} prompt in the style/type: ${typeName}.`);

  if (kind === "image") {
    addEnLine(lines, "Subject", values.subject);
    addEnLine(lines, "Purpose", values.goal);
    addEnLine(lines, "Target audience", values.audience);
    addEnLine(lines, "Character", values.character);
    addEnLine(lines, "Age", values.age);
    addEnLine(lines, "Gender", values.gender === "غير محدد" ? "" : values.gender);
    addEnLine(lines, "Clothing", values.clothes);
    addEnLine(lines, "Facial expression", values.expression);
    addEnLine(lines, "Body pose", values.pose);
    addEnLine(lines, "Scene elements", values.elements);
    addEnLine(lines, "Environment", [values.place, values.background].filter(clean).join(", "));
    addEnLine(lines, "Composition", values.composition);
    addEnLine(lines, "Camera", [values.cameraAngle, values.lens].filter(clean).join(", "));
    addEnLine(lines, "Lighting", values.lighting);
    addEnLine(lines, "Colors", values.colors);
    addEnLine(lines, "Realism level", values.realism === "غير محدد" ? "" : values.realism);
    addEnLine(lines, "Style", values.style);
    addEnLine(lines, "Details", values.visibleText ? `Render this exact visible text accurately: “${values.visibleText}”` : "");
    addEnLine(lines, "Quality", values.quality);
    addEnLine(lines, "Aspect Ratio", values.aspectRatio);
    addEnLine(lines, "Additional exclusions", values.blocked);
  } else {
    addEnLine(lines, "Subject", values.topic);
    addEnLine(lines, "Scene", values.scene);
    addEnLine(lines, "Character", values.character);
    addEnLine(lines, "Clothing", values.clothes);
    addEnLine(lines, "Environment", values.place);
    addEnLine(lines, "Motion", values.motion);
    addEnLine(lines, "Character Movement", values.characterMovement);
    addEnLine(lines, "Camera Movement", values.cameraMovement);
    addEnLine(lines, "Camera Angle", values.cameraAngle);
    addEnLine(lines, "Lighting", values.lighting);
    addEnLine(lines, "Mood", values.mood);
    addEnLine(lines, "Cinematic Style", values.style);
    addEnLine(lines, "Timing", [values.duration, values.speed].filter(clean).join(", "));
    addEnLine(lines, "Opening", values.start);
    addEnLine(lines, "Middle", values.middle);
    addEnLine(lines, "Ending", values.end);
    addEnLine(lines, "Effects", values.effects);
    addEnLine(lines, "Audio", values.audio);
    addEnLine(lines, "Music", values.music);
    addEnLine(lines, "Dialogue", values.dialogue);
    addEnLine(lines, "Voice-over", values.voiceover);
    addEnLine(lines, "Quality", values.quality);
    addEnLine(lines, "Aspect Ratio", values.aspectRatio);
    addEnLine(lines, "Additional exclusions", values.blocked);
  }

  addEnLine(lines, "Negative Prompt", values.negativePrompt || DEFAULT_NEGATIVE_EN);
  return lines.join("\n");
}

function generatePromptText() {
  const values = getFormValues();
  const hasCore = state.selectedKind === "image" ? clean(values.subject) : clean(values.topic || values.scene);
  if (!hasCore) {
    showToast("أضيفي موضوعًا أو وصفًا أساسيًا قبل إنشاء البرومبت.", "error");
    const target = state.selectedKind === "image" ? promptForm.elements.subject : promptForm.elements.topic;
    target?.focus();
    return null;
  }

  values.negativePrompt = clean(negativePrompt.value);
  const language = values.promptLanguage || "both";
  const ar = buildArabicPrompt(state.selectedKind, state.selectedType, values);
  const en = buildEnglishPrompt(state.selectedKind, state.selectedType, values);

  if (language === "ar") return ar;
  if (language === "en") return en;
  return `═══ البرومبت بالعربية ═══\n${ar}\n\n═══ English Prompt ═══\n${en}`;
}

function improvePromptText(text) {
  if (!clean(text)) return text;
  const enhancement = state.selectedKind === "image"
    ? "\n\nتحسين احترافي: حافظ على وضوح نقطة التركيز، اتساق المنظور، تشريح طبيعي، تفاصيل دقيقة في الخامات، نطاق ديناميكي متوازن، وفصل بصري واضح بين الموضوع والخلفية دون ازدحام."
    : "\n\nتحسين احترافي: حافظ على اتساق الشخصية بين الإطارات، حركة طبيعية دون قفزات، ثبات الهوية البصرية، motion continuity، cinematic pacing، انتقالات سلسة، وعدم تغيّر الملامح أو الملابس خلال اللقطة.";
  return text.includes("تحسين احترافي:") ? text : text + enhancement;
}

/* =========================
   الحفظ المحلي
========================= */
function getSavedItems() {
  try {
    return JSON.parse(localStorage.getItem("aiPromptStudioSaved") || "[]");
  } catch {
    return [];
  }
}

function setSavedItems(items) {
  localStorage.setItem("aiPromptStudioSaved", JSON.stringify(items));
}

function saveCurrentPrompt() {
  const text = clean(promptOutput.value);
  if (!text) return showToast("لا يوجد برومبت لحفظه.", "error");

  const items = getSavedItems();
  const payload = {
    id: state.editingSavedId || cryptoRandomId(),
    title: state.selectedType || "برومبت محفوظ",
    kind: state.selectedKind || "image",
    text,
    updatedAt: new Date().toISOString()
  };

  const existingIndex = items.findIndex(item => item.id === payload.id);
  if (existingIndex >= 0) items[existingIndex] = payload;
  else items.unshift(payload);

  setSavedItems(items);
  state.editingSavedId = payload.id;
  renderSavedPrompts();
  showToast(existingIndex >= 0 ? "تم تحديث البرومبت المحفوظ." : "تم حفظ البرومبت بنجاح.", "success");
}

function renderSavedPrompts() {
  const query = savedSearch.value.trim().toLowerCase();
  const items = getSavedItems().filter(item => !query || item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query));
  savedPrompts.replaceChildren();
  savedEmpty.hidden = items.length > 0;

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "saved-card";
    const date = new Intl.DateTimeFormat("ar-SA", { dateStyle: "medium", timeStyle: "short" }).format(new Date(item.updatedAt));
    card.innerHTML = `
      <div class="saved-top">
        <span class="kind-pill">${item.kind === "image" ? "صورة" : "فيديو"}</span>
        <small>${escapeHtml(date)}</small>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <pre>${escapeHtml(item.text)}</pre>
      <div class="saved-actions">
        <button class="btn btn-ghost" data-action="edit">تعديل</button>
        <button class="btn btn-ghost" data-action="copy">نسخ</button>
        <button class="btn btn-danger" data-action="delete">حذف</button>
      </div>
    `;

    $("[data-action='edit']", card).addEventListener("click", () => editSavedPrompt(item));
    $("[data-action='copy']", card).addEventListener("click", () => copyText(item.text));
    $("[data-action='delete']", card).addEventListener("click", () => deleteSavedPrompt(item.id));
    savedPrompts.appendChild(card);
  });
}

function editSavedPrompt(item) {
  openBuilder(item.kind, item.title);
  state.editingSavedId = item.id;
  promptOutput.value = item.text;
  resultPanel.hidden = false;
  resultMeta.textContent = "وضع التعديل";
  promptOutput.focus();
}

function deleteSavedPrompt(id) {
  const items = getSavedItems().filter(item => item.id !== id);
  setSavedItems(items);
  if (state.editingSavedId === id) state.editingSavedId = null;
  renderSavedPrompts();
  showToast("تم حذف البرومبت.", "success");
}

/* =========================
   القوالب
========================= */
function renderTemplates() {
  const container = $("#templateCards");
  container.replaceChildren(...TEMPLATES.map(template => {
    const card = document.createElement("article");
    card.className = "template-card";
    card.innerHTML = `
      <div class="template-top">
        <span class="template-icon" aria-hidden="true">${template.icon}</span>
        <span class="kind-pill">${template.kind === "image" ? "صورة" : "فيديو"}</span>
      </div>
      <h3>${escapeHtml(template.title)}</h3>
      <p>${escapeHtml(template.description)}</p>
      <button type="button" class="btn btn-ghost">استخدام القالب</button>
    `;
    $("button", card).addEventListener("click", () => openBuilder(template.kind, template.type, template.values));
    return card;
  }));
}

/* =========================
   الوضع الليلي والتنبيهات
========================= */
function initTheme() {
  const stored = localStorage.getItem("aiPromptStudioTheme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  updateThemeIcon(theme);
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("aiPromptStudioTheme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  $("#themeIcon").textContent = theme === "dark" ? "☀️" : "🌙";
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `<span aria-hidden="true">${type === "success" ? "✓" : type === "error" ? "!" : "i"}</span><span>${escapeHtml(message)}</span>`;
  $("#toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

/* =========================
   أدوات مساعدة
========================= */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cryptoRandomId() {
  if (window.crypto?.randomUUID) return crypto.randomUUID();
  return `prompt-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function copyText(text) {
  if (!clean(text)) return showToast("لا يوجد نص للنسخ.", "error");
  try {
    await navigator.clipboard.writeText(text);
    showToast("تم نسخ البرومبت بنجاح.", "success");
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast("تم نسخ البرومبت بنجاح.", "success");
    } catch {
      showToast("تعذر النسخ تلقائيًا. انسخي النص يدويًا.", "error");
    }
  }
}

/* =========================
   الأحداث
========================= */
typeSearch.addEventListener("input", applyCardFilters);
savedSearch.addEventListener("input", renderSavedPrompts);
$("#themeToggle").addEventListener("click", toggleTheme);
$("#modalClose").addEventListener("click", closeBuilder);
$$('[data-close-modal]').forEach(el => el.addEventListener("click", closeBuilder));

$("#fillNegative").addEventListener("click", () => {
  negativePrompt.value = $("#promptLanguage").value === "en" ? DEFAULT_NEGATIVE_EN : DEFAULT_NEGATIVE_AR;
  showToast("تمت إضافة قائمة منع مقترحة.", "info");
});

promptForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = generatePromptText();
  if (!text) return;
  promptOutput.value = text;
  resultPanel.hidden = false;
  resultMeta.textContent = state.selectedKind === "image" ? "برومبت صورة" : "برومبت فيديو";
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#resetForm").addEventListener("click", () => {
  promptForm.reset();
  $("#promptLanguage").value = "both";
  negativePrompt.value = "";
  promptOutput.value = "";
  resultPanel.hidden = true;
  state.editingSavedId = null;
  showToast("تم مسح النموذج وإعادة البدء.", "info");
});

$("#copyPrompt").addEventListener("click", () => copyText(promptOutput.value));
$("#savePrompt").addEventListener("click", saveCurrentPrompt);
$("#improvePrompt").addEventListener("click", () => {
  const improved = improvePromptText(promptOutput.value);
  if (!clean(improved)) return showToast("أنشئي البرومبت أولًا ثم استخدمي التحسين.", "error");
  promptOutput.value = improved;
  showToast("تم تحسين البرومبت وإضافة معايير احترافية.", "success");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeBuilder();
});

/* =========================
   التهيئة
========================= */
function init() {
  initTheme();
  renderFilters();
  renderTypeCards();
  renderTemplates();
  renderSavedPrompts();
}

init();
