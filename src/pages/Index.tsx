import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/files/c6fc38c8-b09e-4862-bba8-8e229294752f.jpg";
const IMG_STRETCH =
  "https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/files/60bcaf91-9e5d-4dfc-bd78-58cc1838a69b.jpg";
const IMG_TAPE =
  "https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/files/69537a55-2daa-4cf4-b94f-3a60292f6bba.jpg";
const IMG_BOXES =
  "https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/files/7335d65f-92bd-46a4-98d3-e0fdf1c82989.jpg";

type Product = {
  id: string;
  title: string;
  category: string;
  image: string;
  badge?: string;
  shortDesc: string;
  specs: { label: string; value: string }[];
  variants: string[];
  minOrder: string;
  inStock: boolean;
};

const products: Product[] = [
  {
    id: "stretch-manual-20",
    title: "Стретч-плёнка ручная 2.0 кг",
    category: "Стретч-плёнка",
    image: IMG_STRETCH,
    badge: "Хит продаж",
    shortDesc: "Универсальная ручная плёнка для палетной и штучной обмотки",
    specs: [
      { label: "Вес нетто", value: "2.0 кг" },
      { label: "Толщина", value: "20 мкм" },
      { label: "Ширина", value: "500 мм" },
      { label: "Намотка", value: "200–220 м" },
      { label: "Втулка", value: "Ø 50 мм" },
      { label: "Растяжение", value: "до 300%" },
    ],
    variants: ["1.8 кг / 17 мкм", "2.0 кг / 20 мкм", "2.5 кг / 23 мкм"],
    minOrder: "от 1 упаковки (6 рулонов)",
    inStock: true,
  },
  {
    id: "stretch-machine",
    title: "Стретч-плёнка машинная",
    category: "Стретч-плёнка",
    image: IMG_STRETCH,
    shortDesc: "Для автоматических паллетоупаковщиков, высокая предварительная растяжка",
    specs: [
      { label: "Вес нетто", value: "16 кг" },
      { label: "Толщина", value: "23 мкм" },
      { label: "Ширина", value: "500 мм" },
      { label: "Намотка", value: "1500+ м" },
      { label: "Втулка", value: "Ø 76 мм" },
      { label: "Растяжение", value: "до 400%" },
    ],
    variants: ["17 мкм / Эконом", "20 мкм / Стандарт", "23 мкм / Премиум"],
    minOrder: "от 1 ролла",
    inStock: true,
  },
  {
    id: "stretch-jumbo",
    title: "Джамбо-ролл стретч-плёнки",
    category: "Джамбо-роллы",
    image: IMG_STRETCH,
    shortDesc: "Сырьё для перемотки, минимальная цена за кг при крупных объёмах",
    specs: [
      { label: "Вес нетто", value: "16–25 кг" },
      { label: "Толщина", value: "17–23 мкм" },
      { label: "Ширина", value: "500 мм" },
      { label: "Намотка", value: "от 1500 м" },
      { label: "Втулка", value: "Ø 76 мм" },
      { label: "Назначение", value: "Под перемотку" },
    ],
    variants: ["17 мкм", "20 мкм", "23 мкм"],
    minOrder: "от 1 палеты (42 ролла)",
    inStock: true,
  },
  {
    id: "tape-43",
    title: "Скотч упаковочный 43 мкм",
    category: "Клейкая лента",
    image: IMG_TAPE,
    badge: "Популярный",
    shortDesc: "Оптимальное соотношение цены и клеящей способности для стандартных задач",
    specs: [
      { label: "Толщина", value: "43 мкм" },
      { label: "Ширина", value: "48 мм" },
      { label: "Намотка", value: "66 м / 132 м / 200 м" },
      { label: "Основа", value: "БОПП" },
      { label: "Клей", value: "Акриловый" },
      { label: "Цвет", value: "Прозрачный / Коричневый" },
    ],
    variants: ["38 мкм / Эконом", "43 мкм / Стандарт", "47 мкм / Усиленный", "50 мкм / Премиум"],
    minOrder: "от 1 упаковки (36 шт)",
    inStock: true,
  },
  {
    id: "tape-color",
    title: "Скотч цветной / сигнальный",
    category: "Клейкая лента",
    image: IMG_TAPE,
    shortDesc: "Для маркировки, брендирования и сигнальной обмотки палет",
    specs: [
      { label: "Толщина", value: "45 мкм" },
      { label: "Ширина", value: "48 мм" },
      { label: "Намотка", value: "66 м" },
      { label: "Основа", value: "БОПП" },
      { label: "Клей", value: "Акриловый" },
      { label: "Цвета", value: "Красный, жёлтый, зелёный, синий, белый, чёрный" },
    ],
    variants: ["Цветной однотонный", "Сигнальный «ОСТОРОЖНО»", "С логотипом (под заказ)"],
    minOrder: "от 1 упаковки (36 шт)",
    inStock: true,
  },
  {
    id: "box-standard",
    title: "Гофрокороб четырёхклапанный",
    category: "Гофрокороба",
    image: IMG_BOXES,
    badge: "Под WB / Ozon",
    shortDesc: "Стандартные размеры для маркетплейсов и e-commerce отправлений",
    specs: [
      { label: "Материал", value: "Гофрокартон Т-23 / Т-24" },
      { label: "Слои", value: "Трёхслойный" },
      { label: "Цвет", value: "Бурый (крафт)" },
      { label: "Тип", value: "Четырёхклапанный" },
      { label: "Сертификат", value: "ГОСТ" },
      { label: "Печать", value: "Под заказ (от 500 шт)" },
    ],
    variants: [
      "200×150×100 мм",
      "300×200×150 мм",
      "400×300×200 мм",
      "600×400×400 мм (Фулфилмент)",
    ],
    minOrder: "от 10 шт",
    inStock: true,
  },
  {
    id: "box-reinforced",
    title: "Гофрокороб усиленный (пятислойный)",
    category: "Гофрокороба",
    image: IMG_BOXES,
    shortDesc: "Для тяжёлых грузов и транспортировки на дальние расстояния",
    specs: [
      { label: "Материал", value: "Гофрокартон П-32" },
      { label: "Слои", value: "Пятислойный" },
      { label: "Цвет", value: "Бурый (крафт)" },
      { label: "Нагрузка", value: "До 30 кг" },
      { label: "Тип", value: "Четырёхклапанный" },
      { label: "Сертификат", value: "ГОСТ" },
    ],
    variants: [
      "400×400×400 мм",
      "600×400×400 мм",
      "800×600×600 мм",
    ],
    minOrder: "от 10 шт",
    inStock: true,
  },
  {
    id: "bubble-wrap",
    title: "Пузырчатая плёнка ВП",
    category: "Пузырчатая плёнка",
    image: IMG_STRETCH,
    shortDesc: "Двухслойная воздушно-пузырьковая плёнка для защиты хрупких товаров",
    specs: [
      { label: "Тип", value: "Двухслойная (ВП-75)" },
      { label: "Диаметр пузырька", value: "10 мм" },
      { label: "Высота пузырька", value: "4 мм" },
      { label: "Ширина", value: "1.2 м / 1.5 м" },
      { label: "Длина рулона", value: "50 м / 100 м" },
      { label: "Плотность", value: "75 г/м²" },
    ],
    variants: ["1.2 м × 50 м", "1.2 м × 100 м", "1.5 м × 50 м", "1.5 м × 100 м"],
    minOrder: "от 1 рулона",
    inStock: true,
  },
  {
    id: "dispenser",
    title: "Диспенсер для скотча",
    category: "Расходники",
    image: IMG_TAPE,
    shortDesc: "Ручной диспенсер-пистолет для быстрой работы со скотчем 48-50 мм",
    specs: [
      { label: "Ширина ленты", value: "48–50 мм" },
      { label: "Материал", value: "Пластик + металл" },
      { label: "Тип ножа", value: "Зубчатый" },
      { label: "Вес", value: "350 г" },
      { label: "Цвет", value: "Синий / Красный" },
      { label: "Ресурс", value: "10 000+ отрезов" },
    ],
    variants: ["Эконом (пластик)", "Стандарт (усиленный)", "Премиум (металл)"],
    minOrder: "от 1 шт",
    inStock: true,
  },
];

const categories = ["Все", ...Array.from(new Set(products.map((p) => p.category)))];

const segments = [
  { icon: "ShoppingCart", label: "E-commerce", desc: "Упаковка для интернет-магазинов и доставки" },
  { icon: "Store", label: "Селлеры маркетплейсов", desc: "Готовые решения под WB, Ozon, Яндекс" },
  { icon: "Factory", label: "Производители", desc: "Стандартная упаковка для серийного выпуска" },
  { icon: "Wrench", label: "Нестандартная упаковка", desc: "Разработка конструкций под ваш продукт" },
  { icon: "Warehouse", label: "Фулфилменты", desc: "Расходники и материалы для комплектации" },
  { icon: "Truck", label: "Транспортные компании", desc: "Стретч, скотч и палетная упаковка" },
  { icon: "Building2", label: "Стройбазы", desc: "Оптовые партии для розничной продажи" },
  { icon: "ArrowUpDown", label: "Оптовики", desc: "Крупные объёмы по минимальной цене" },
];

const advantages = [
  { icon: "Zap", title: "Отгрузка в день заказа", desc: "Заказ до 15:00 — отгрузка сегодня" },
  { icon: "CalendarCheck", title: "Регулярные поставки", desc: "Работа по графику и договору" },
  { icon: "Lock", title: "Фиксация цены", desc: "Стабильная стоимость на весь период" },
  { icon: "Package", title: "Наличие на складе", desc: "Более 200 позиций всегда в наличии" },
  { icon: "UserCheck", title: "Персональный менеджер", desc: "Один контакт для всех вопросов" },
  { icon: "PenTool", title: "Нестандартная упаковка", desc: "Разработка под ваши задачи" },
];

const leadMagnets = [
  { icon: "Calculator", title: "Рассчитать фуру", desc: "Бесплатный расчёт фурной поставки с учётом всех позиций" },
  { icon: "FileText", title: "Получить прайс", desc: "Актуальный прайс-лист на всю линейку продукции" },
  { icon: "FileCheck", title: "Запросить КП", desc: "Индивидуальное коммерческое предложение под ваш объём" },
  { icon: "PackageOpen", title: "Получить образец", desc: "Бесплатные образцы продукции для тестирования" },
];

const Index = () => {
  const [modal, setModal] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const filteredProducts =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-[200px]">
          <button onClick={() => scrollTo("hero")} className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/bucket/7f8138a0-03e4-466c-b622-001788c32d90.png" alt="БазаУпаковки" className="h-[200px] w-auto object-contain" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("segments")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Для кого</button>
            <button onClick={() => scrollTo("catalog")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Каталог</button>
            <button onClick={() => scrollTo("enterprise")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Крупным клиентам</button>
            <button onClick={() => scrollTo("contacts")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79991234567" className="text-sm font-medium text-foreground">+7 (999) 123-45-67</a>
            <Button onClick={() => setModal("price")} className="bg-kraft hover:bg-kraft/90 text-white">
              Получить прайс
            </Button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2">
            <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t bg-white p-4 space-y-3">
            <button onClick={() => scrollTo("segments")} className="block w-full text-left py-2 text-sm">Для кого</button>
            <button onClick={() => scrollTo("catalog")} className="block w-full text-left py-2 text-sm">Каталог</button>
            <button onClick={() => scrollTo("enterprise")} className="block w-full text-left py-2 text-sm">Крупным клиентам</button>
            <button onClick={() => scrollTo("contacts")} className="block w-full text-left py-2 text-sm">Контакты</button>
            <a href="tel:+79991234567" className="block py-2 text-sm font-medium">+7 (999) 123-45-67</a>
            <Button onClick={() => { setModal("price"); setMobileMenu(false); }} className="w-full bg-kraft hover:bg-kraft/90 text-white">
              Получить прайс
            </Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="relative container py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
              <Icon name="MapPin" size={14} />
              Уфа, Республика Башкортостан
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Оптовые поставки упаковки для&nbsp;бизнеса
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-lg">
              Малые партии, честная цена, отгрузка в день заказа до&nbsp;15:00. Работаем с e-commerce, производствами и торговыми компаниями.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={() => setModal("price")} size="lg" className="bg-kraft hover:bg-kraft/90 text-white text-base px-8">
                Получить оптовый прайс
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button onClick={() => scrollTo("catalog")} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8">
                Смотреть каталог
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-kraft" /> Без минимального заказа
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Check" size={14} className="text-kraft" /> Работа по договору
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="segments" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Сегменты</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Для кого мы работаем</h2>
            <p className="text-muted-foreground">Системное снабжение упаковкой для каждого типа бизнеса</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {segments.map((seg) => (
              <div key={seg.label} className="group p-6 bg-card rounded-lg border hover:border-kraft/40 hover:shadow-lg transition-all cursor-pointer" onClick={() => setModal("price")}>
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-kraft/10 transition-colors">
                  <Icon name={seg.icon} size={20} className="text-navy group-hover:text-kraft transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{seg.label}</h3>
                <p className="text-sm text-muted-foreground">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Преимущества</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Почему выбирают нас</h2>
            <p className="text-white/60">Выстроенная система снабжения для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="p-6 rounded-lg bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-kraft/20 flex items-center justify-center mb-4">
                  <Icon name={adv.icon} size={20} className="text-kraft" />
                </div>
                <h3 className="font-semibold text-white mb-2">{adv.title}</h3>
                <p className="text-sm text-white/60">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATALOG ========== */}
      <section id="catalog" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl mb-10">
            <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Продукция</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Каталог товаров</h2>
            <p className="text-muted-foreground">Нажмите на карточку, чтобы увидеть характеристики, фото и варианты</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-navy/10 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid — compact 2-column horizontal cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => openProduct(product)}
                className="group text-left bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-200 flex h-[140px]"
              >
                <div className="relative w-[140px] flex-shrink-0 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 bg-kraft text-white border-0 shadow text-[10px] px-1.5 py-0.5">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-[10px] font-semibold text-kraft uppercase tracking-wider">{product.category}</p>
                      {product.inStock && (
                        <span className="flex items-center gap-1 text-[10px] font-medium text-green-700 flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                          В наличии
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 line-clamp-1">{product.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{product.shortDesc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-muted-foreground">{product.minOrder}</span>
                    <span className="flex items-center gap-1 text-xs text-navy font-medium group-hover:text-kraft transition-colors flex-shrink-0">
                      Подробнее
                      <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не нашли нужную позицию? Мы работаем с 200+ артикулами</p>
            <Button onClick={() => setModal("price")} size="lg" className="bg-navy hover:bg-navy-light text-white">
              Запросить полный прайс-лист
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Для крупных клиентов</p>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Системное снабжение вашего производства</h2>
              <p className="text-muted-foreground mb-8">Выстраиваем долгосрочное партнёрство: от фиксации цены до резервирования объёмов на складе под ваши потребности.</p>
              <div className="space-y-4">
                {["Регулярные поставки по графику", "Фиксация цены на период договора", "Резервирование объёма на складе", "Работа по договору с отсрочкой платежа", "Разработка нестандартных конструкций"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-kraft/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-kraft" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => setModal("kp")} size="lg" className="mt-8 bg-navy hover:bg-navy-light text-white">
                Запросить КП
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "позиций на складе" },
                { value: "24ч", label: "отгрузка" },
                { value: "15 мин", label: "обратный звонок" },
                { value: "0 ₽", label: "доставка по Уфе" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-lg p-6 text-center border">
                  <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Бесплатно</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Начните с бесплатной консультации</h2>
            <p className="text-muted-foreground">Выберите удобный формат — менеджер свяжется в течение 15 минут</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadMagnets.map((lm) => (
              <button key={lm.title} onClick={() => setModal(lm.title)} className="text-left p-6 bg-card rounded-lg border hover:border-kraft/40 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-lg bg-kraft/10 flex items-center justify-center mb-4 group-hover:bg-kraft/20 transition-colors">
                  <Icon name={lm.icon} size={22} className="text-kraft" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{lm.title}</h3>
                <p className="text-sm text-muted-foreground">{lm.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-kraft font-medium mt-3">
                  Оставить заявку <Icon name="ArrowRight" size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">Готовы обсудить поставку?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">Оставьте заявку — менеджер свяжется в течение 15 минут, рассчитает объём и подготовит индивидуальное предложение.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => setModal("price")} size="lg" className="bg-kraft hover:bg-kraft/90 text-white text-base px-8">Получить прайс</Button>
            <Button onClick={() => setModal("kp")} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8">Запросить КП</Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Контакты</p>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
              <div className="space-y-5">
                {[
                  { icon: "MapPin", label: "Адрес", value: "г. Уфа, Республика Башкортостан" },
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67", href: "tel:+79991234567" },
                  { icon: "Mail", label: "E-mail", value: "info@bazaupakovki.ru", href: "mailto:info@bazaupakovki.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm text-kraft hover:underline">{c.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg border p-6 md:p-8">
              <h3 className="font-semibold text-lg text-foreground mb-1">Быстрая заявка</h3>
              <p className="text-sm text-muted-foreground mb-6">Оставьте контакты — перезвоним за 15 минут</p>
              <form onSubmit={(e) => { e.preventDefault(); setModal("sent"); }} className="space-y-4">
                <Input placeholder="Ваше имя" required />
                <Input placeholder="Телефон" type="tel" required />
                <Input placeholder="Компания" />
                <Textarea placeholder="Что вас интересует?" rows={3} />
                <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-white">Отправить заявку</Button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/bucket/ce1313e7-8fce-49b8-9266-e59fcda5b35d.png" alt="БазаУпаковки" className="h-20 w-auto object-contain" />
          <p className="text-sm text-muted-foreground">© 2025 БазаУпаковки. Оптовые поставки упаковочных материалов в Уфе.</p>
          <a href="tel:+79991234567" className="text-sm font-medium text-foreground">+7 (999) 123-45-67</a>
        </div>
      </footer>

      {/* ===== PRODUCT DETAIL MODAL ===== */}
      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProduct && (
            <>
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <Badge className="absolute top-4 left-4 bg-kraft text-white border-0 shadow-md text-sm">
                    {selectedProduct.badge}
                  </Badge>
                )}
                {selectedProduct.inStock && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium text-green-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    В наличии
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold text-kraft uppercase tracking-wider mb-2">
                    {selectedProduct.category}
                  </p>
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                      {selectedProduct.title}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground mt-2">
                    {selectedProduct.shortDesc}
                  </p>
                </div>

                {/* Specs Table */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="ClipboardList" size={16} className="text-navy" />
                    Характеристики
                  </h4>
                  <div className="rounded-lg border overflow-hidden">
                    {selectedProduct.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex items-center justify-between px-4 py-3 text-sm ${
                          i % 2 === 0 ? "bg-muted/50" : "bg-card"
                        }`}
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Variants */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Layers" size={16} className="text-navy" />
                    Варианты
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.variants.map((v, i) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(i)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                          selectedVariant === i
                            ? "bg-navy text-white border-navy shadow-md"
                            : "bg-card text-foreground border-border hover:border-navy/40"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Min Order */}
                <div className="flex items-center gap-3 bg-secondary/60 rounded-lg px-4 py-3">
                  <Icon name="Info" size={16} className="text-kraft flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Минимальный заказ: <span className="font-semibold">{selectedProduct.minOrder}</span>
                  </span>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => {
                      setSelectedProduct(null);
                      setModal("price");
                    }}
                    className="flex-1 bg-kraft hover:bg-kraft/90 text-white"
                    size="lg"
                  >
                    <Icon name="FileText" size={18} className="mr-2" />
                    Запросить цену
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedProduct(null);
                      setModal("sample");
                    }}
                    variant="outline"
                    className="flex-1 border-navy/20 text-navy hover:bg-navy hover:text-white"
                    size="lg"
                  >
                    <Icon name="PackageOpen" size={18} className="mr-2" />
                    Получить образец
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Lead Form Modal */}
      <Dialog open={modal !== null && modal !== "sent" && selectedProduct === null} onOpenChange={() => setModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {modal === "price" && "Получить оптовый прайс"}
              {modal === "calc" && "Рассчитать поставку"}
              {modal === "kp" && "Запросить КП"}
              {modal === "sample" && "Получить образец"}
              {modal === "Рассчитать фуру" && "Рассчитать фурную поставку"}
              {modal === "Получить прайс" && "Получить прайс-лист"}
              {modal === "Запросить КП" && "Запросить КП"}
              {modal === "Получить образец" && "Получить образец"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); setModal("sent"); }} className="space-y-4 pt-2">
            <Input placeholder="Ваше имя" required />
            <Input placeholder="Телефон" type="tel" required />
            <Input placeholder="Компания" />
            <Textarea placeholder="Комментарий к заявке" rows={3} />
            <Button type="submit" className="w-full bg-kraft hover:bg-kraft/90 text-white">Отправить</Button>
            <p className="text-xs text-muted-foreground text-center">Перезвоним в течение 15 минут</p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={modal === "sent" && selectedProduct === null} onOpenChange={() => setModal(null)}>
        <DialogContent className="sm:max-w-sm text-center">
          <div className="py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
              <Icon name="Check" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Заявка отправлена</h3>
            <p className="text-muted-foreground">Менеджер свяжется с вами в течение 15 минут в рабочее время</p>
            <Button onClick={() => setModal(null)} variant="outline" className="mt-2">Закрыть</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;