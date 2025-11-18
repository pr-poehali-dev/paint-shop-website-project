import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-accent">У Емели</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors font-medium">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors font-medium">Прайс</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors font-medium">О нас</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors font-medium">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
            Записаться
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-accent via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/d6b30ba0-9c88-4db5-874d-fef0d2ad2af2/files/58c0e699-bc3b-4955-b893-ea9f3cfedd78.jpg" 
            alt="Workshop" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Профессиональная<br />окраска автомобилей
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Пескоструйная обработка, порошковая покраска и малярные работы премиум-качества
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                Записаться онлайн
              </Button>
              <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Полный спектр работ по обработке и покраске автомобилей с использованием современного оборудования
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Wind" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Пескоструйная обработка</CardTitle>
                <CardDescription className="text-base">
                  Качественная очистка металлических поверхностей от ржавчины, краски и загрязнений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Удаление старой краски</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Очистка от коррозии</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Подготовка к покраске</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-secondary transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Порошковая покраска</CardTitle>
                <CardDescription className="text-base">
                  Износостойкое покрытие, которое прослужит годами в любых условиях эксплуатации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Высокая прочность</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Стойкость к царапинам</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span>Широкая цветовая палитра</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Paintbrush" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Малярные работы</CardTitle>
                <CardDescription className="text-base">
                  Профессиональная окраска кузова и деталей с идеальным результатом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Окраска кузова</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Подбор цвета</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Полировка покрытия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Прозрачные цены на все виды работ
          </p>
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Пескоструйная обработка</h3>
                    <p className="text-muted-foreground">Базовая очистка поверхности</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">от 2 500₽</p>
                    <p className="text-sm text-muted-foreground">за деталь</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Порошковая покраска</h3>
                    <p className="text-muted-foreground">Дисков, дверей, элементов кузова</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-secondary">от 3 500₽</p>
                    <p className="text-sm text-muted-foreground">за деталь</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Локальная окраска</h3>
                    <p className="text-muted-foreground">Небольшие участки кузова</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">от 5 000₽</p>
                    <p className="text-sm text-muted-foreground">за элемент</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Полная окраска автомобиля</h3>
                    <p className="text-muted-foreground">С подготовкой и материалами</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-secondary">от 80 000₽</p>
                    <p className="text-sm text-muted-foreground">за авто</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Точная стоимость рассчитывается после осмотра автомобиля
          </p>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О нашей мастерской</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">10+ лет опыта</CardTitle>
                <CardDescription>
                  Профессиональная команда с большим опытом работы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <Icon name="Wrench" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Современное оборудование</CardTitle>
                <CardDescription>
                  Используем передовые технологии и материалы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
                <CardDescription>
                  Даём гарантию на все виды работ
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Точные сроки</CardTitle>
                <CardDescription>
                  Работаем быстро и в согласованные сроки
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Записаться на услугу</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Форма записи</CardTitle>
                <CardDescription>Заполните форму для быстрой записи</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Input
                      id="service"
                      placeholder="Например: порошковая покраска дисков"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Дополнительная информация"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Курская область, пос. Юбилейный, ул. Индустриальная, 4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">8 (962) 375-46-66</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <span className="text-2xl font-bold">У Емели</span>
          </div>
          <p className="text-white/80 mb-6">
            Профессиональная окраска и обработка автомобилей
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Прайс</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <p className="text-white/60 text-sm">
            © 2024 AutoPaint Pro. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}