import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/2206beb0-7a48-49d6-9edc-f35e752f9cf2/files/c6fc38c8-b09e-4862-bba8-8e229294752f.jpg";

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

const catalog = [
  {
    title: "Стретч-плёнка",
    icon: "ScrollText",
    items: ["Ручная 1.8 / 2.0", "Машинная", "Джамбо-роллы", "Private label"],
  },
  {
    title: "Клейкая лента (скотч)",
    icon: "Tape",
    items: ["38 мкм", "43 мкм", "47 мкм", "50 мкм", "Цветной", "Сигнальный"],
  },
  {
    title: "Пузырчатая плёнка",
    icon: "Circle",
    items: ["Ширина 1.2 м", "Ширина 1.5 м", "Разные метражи"],
  },
  {
    title: "Гофрокороба",
    icon: "Box",
    items: ["Стандартные", "Под заказ", "Усиленные"],
  },
  {
    title: "Джамбо-роллы",
    icon: "Disc",
    items: ["Стретч-плёнка", "Клейкая лента", "Под нарезку"],
  },
  {
    title: "Расходники",
    icon: "Layers",
    items: ["Стяжки", "Маркеры", "Ножи для плёнки", "Диспенсеры"],
  },
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded flex items-center justify-center">
              <Icon name="Package" size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg text-navy">БазаУпаковки</span>
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
      <section id="hero" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
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
              <Button
                onClick={() => setModal("price")}
                size="lg"
                className="bg-kraft hover:bg-kraft/90 text-white text-base px-8"
              >
                Получить оптовый прайс
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                onClick={() => setModal("calc")}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8"
              >
                Рассчитать поставку
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
              <div
                key={seg.label}
                className="group p-6 bg-card rounded-lg border hover:border-kraft/40 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setModal("price")}
              >
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

      {/* Catalog */}
      <section id="catalog" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Продукция</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Каталог</h2>
            <p className="text-muted-foreground">Без розничных цен — только оптовые условия под ваш объём</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((cat) => (
              <div key={cat.title} className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon name={cat.icon} size={20} className="text-navy" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-kraft" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  onClick={() => setModal("price")}
                  className="w-full border-navy/20 text-navy hover:bg-navy hover:text-white"
                >
                  Запросить цену
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-kraft font-semibold text-sm uppercase tracking-wider mb-3">Для крупных клиентов</p>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                Системное снабжение вашего производства
              </h2>
              <p className="text-muted-foreground mb-8">
                Выстраиваем долгосрочное партнёрство: от фиксации цены до резервирования объёмов на складе под ваши потребности.
              </p>
              <div className="space-y-4">
                {[
                  "Регулярные поставки по графику",
                  "Фиксация цены на период договора",
                  "Резервирование объёма на складе",
                  "Работа по договору с отсрочкой платежа",
                  "Разработка нестандартных конструкций",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-kraft/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-kraft" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => setModal("kp")}
                size="lg"
                className="mt-8 bg-navy hover:bg-navy-light text-white"
              >
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
              <button
                key={lm.title}
                onClick={() => setModal(lm.title)}
                className="text-left p-6 bg-card rounded-lg border hover:border-kraft/40 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-kraft/10 flex items-center justify-center mb-4 group-hover:bg-kraft/20 transition-colors">
                  <Icon name={lm.icon} size={22} className="text-kraft" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{lm.title}</h3>
                <p className="text-sm text-muted-foreground">{lm.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-kraft font-medium mt-3">
                  Оставить заявку
                  <Icon name="ArrowRight" size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">
            Готовы обсудить поставку?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Оставьте заявку — менеджер свяжется в течение 15 минут, рассчитает объём и подготовит индивидуальное предложение.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setModal("price")}
              size="lg"
              className="bg-kraft hover:bg-kraft/90 text-white text-base px-8"
            >
              Получить прайс
            </Button>
            <Button
              onClick={() => setModal("kp")}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8"
            >
              Запросить КП
            </Button>
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Адрес</p>
                    <p className="text-sm text-muted-foreground">г. Уфа, Республика Башкортостан</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <a href="tel:+79991234567" className="text-sm text-kraft hover:underline">+7 (999) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <a href="mailto:info@bazaupakovki.ru" className="text-sm text-kraft hover:underline">info@bazaupakovki.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={18} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Режим работы</p>
                    <p className="text-sm text-muted-foreground">Пн–Пт: 9:00–18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg border p-6 md:p-8">
              <h3 className="font-semibold text-lg text-foreground mb-1">Быстрая заявка</h3>
              <p className="text-sm text-muted-foreground mb-6">Оставьте контакты — перезвоним за 15 минут</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setModal("sent");
                }}
                className="space-y-4"
              >
                <Input placeholder="Ваше имя" required />
                <Input placeholder="Телефон" type="tel" required />
                <Input placeholder="Компания" />
                <Textarea placeholder="Что вас интересует?" rows={3} />
                <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-white">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-navy rounded flex items-center justify-center">
              <Icon name="Package" size={14} className="text-white" />
            </div>
            <span className="font-bold text-navy">БазаУпаковки</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 БазаУпаковки. Оптовые поставки упаковочных материалов в Уфе.
          </p>
          <a href="tel:+79991234567" className="text-sm font-medium text-foreground">+7 (999) 123-45-67</a>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={modal !== null && modal !== "sent"} onOpenChange={() => setModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {modal === "price" && "Получить оптовый прайс"}
              {modal === "calc" && "Рассчитать поставку"}
              {modal === "kp" && "Запросить КП"}
              {modal === "Рассчитать фуру" && "Рассчитать фурную поставку"}
              {modal === "Получить прайс" && "Получить прайс-лист"}
              {modal === "Запросить КП" && "Запросить КП"}
              {modal === "Получить образец" && "Получить образец"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setModal("sent");
            }}
            className="space-y-4 pt-2"
          >
            <Input placeholder="Ваше имя" required />
            <Input placeholder="Телефон" type="tel" required />
            <Input placeholder="Компания" />
            <Textarea placeholder="Комментарий к заявке" rows={3} />
            <Button type="submit" className="w-full bg-kraft hover:bg-kraft/90 text-white">
              Отправить
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Перезвоним в течение 15 минут
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={modal === "sent"} onOpenChange={() => setModal(null)}>
        <DialogContent className="sm:max-w-sm text-center">
          <div className="py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
              <Icon name="Check" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Заявка отправлена</h3>
            <p className="text-muted-foreground">Менеджер свяжется с вами в течение 15 минут в рабочее время</p>
            <Button onClick={() => setModal(null)} variant="outline" className="mt-2">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
