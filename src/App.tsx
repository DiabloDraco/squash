import React from "react";
import {
  ArrowRight,
  Target,
  Users,
  Trophy,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  Building,
  Calendar,
  Award,
} from "lucide-react";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <img src="" alt="" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                Федерация сквоша и падела
              </span>
            </div> */}
            <img
              src="/logo.png"
              className="w-20 h-8  object-cover"
              alt="Федерация сквоша и падела"
            />
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("mission")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Миссия
              </button>
              <button
                onClick={() => scrollToSection("tasks")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Задачи
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Руководство
              </button>
              <button
                onClick={() => scrollToSection("clubs")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Клубы
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Контакты
              </button>
            </div>
            {/* <button 
              onClick={() => scrollToSection('contacts')}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Присоединиться
            </button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/8007391/pexels-photo-8007391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Федерация сквоша и
            <span className="block text-green-400">падела Узбекистана</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Официальная организация по развитию сквоша и падела в Узбекистане
          </p>
          {/* <button 
            onClick={() => scrollToSection('contacts')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            Присоединиться
            <ArrowRight size={20} />
          </button> */}
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Миссия Федерации
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша миссия — обеспечить всестороннее развитие сквоша и падела в
                Узбекистане. Два современных и популярных в мире вида спорта,
                один из которых – сквош - уже вступил в олимпийскую семью, а
                второй - падел – считается одним из главных кандидатов на
                пополнения списка олимпийских видов спорта. В нашей стране есть
                все условия и предпосылки для того чтобы сквош и падел стали
                очень популярными на любительском уровне, а также получили
                достойное место на уровне спорта высоких достижений. Одной из
                важнейших целей ставим лидерство Узбекистана в данных видах
                спорта среди стран Центральной Азии и успешное представление на
                Азиатской и мировой арене.
              </p>
            </div>
            <div className="relative">
              <img
                src="/squash-player.jpg"
                alt="Игроки в сквош"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      Наша цель
                    </div>
                    <div className="text-sm text-gray-600">
                      Лидерство в Центральной Азии
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section id="tasks" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Задачи
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Основные направления деятельности Федерации
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Популяризация и продвижение сквоша падела среди широкой
                  аудитории
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Увеличение числа занимающихся сквошем и паделом на
                  профессиональном и любительском уровне
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Создание эффективной вертикали подготовки профессиональных
                  игроков для участия в национальных и международных
                  соревнованиях
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Разработка программ для подготовки и лицензирования
                  квалифицированных тренеров на республиканском и региональном
                  уровнях
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Создание стратегических партнерств со спонсорами,
                  заинтересованными сторонами, частными инвесторами и другими
                  спортивными организациями с целью поддержки и развития сквоша
                  и падела
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Развитие всей инфраструктуры, необходимой для занятия сквошем
                  и паделом, путем выстраивания эффективного сотрудничества с
                  государственными органами власти, руководством субъектов
                  Республики и городов, а также с частными инвесторами
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Организация и оказание содействия в проведении региональных,
                  национальных и международных соревнований для профессионалов и
                  любителей, с целью удовлетворения потребности игроков разного
                  уровня подготовки, возраста и места проживания
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Выстраивание современной системы управления для достижения
                  всех выше описанных стратегических целей и задач
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Руководство Федерации
            </h2>
            <p className="text-lg text-gray-600">
              Команда профессионалов, развивающих сквош и падел в Узбекистане
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/Navruzov.jpeg"
                  className="w-24 h-24 text-white rounded-full object-cover"
                  alt="Navruzov"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Председатель Федерации
              </h3>
              {/* <p className="text-gray-600 mb-4">Имя Фамилия</p> */}
              <p className="text-sm text-gray-500">
                Наврузов Жахонгир Эргашбаевич
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/Эргашев.jpg"
                  className="w-24 h-24 text-white rounded-full object-cover"
                  alt="Navruzov"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ген. Секретарь
              </h3>
              {/* <p className="text-gray-600 mb-4">Имя Фамилия</p> */}
              <p className="text-sm text-gray-500">
                Эргашев Камолиддин Шавкатович
              </p>
            </div>
          </div>

          {/* <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Попечительский Совет Федерации
            </h3>
            <p className="text-lg text-gray-600">
              Поддержка и развитие федерации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-1">Член совета</h4>
              <p className="text-sm text-gray-600">Имя Фамилия</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-1">Член совета</h4>
              <p className="text-sm text-gray-600">Имя Фамилия</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-1">Член совета</h4>
              <p className="text-sm text-gray-600">Имя Фамилия</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-1">Член совета</h4>
              <p className="text-sm text-gray-600">Имя Фамилия</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Клубы, где можно поиграть в сквош и падел
            </h2>
            <p className="text-lg text-gray-600">
              Найдите ближайший клуб для игры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  7padel-Карасу
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                г. Ташкент, Ул. Шукура Барханова
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 99 100 00 08
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  7Padel-Сергели
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                г. Ташкент, Ул. Анны Ахматовой, рядом с парком Янги Сергели
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 70 100 00 08
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Befit Eco
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                г. Ташкент, EcoPark, Khamid Alimdjan Street, Tashkent
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 99 205 00 33
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Befit Sky
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                г. Ташкент, Шайхантахурский р-н, ул. Олмазор, 2А, Tashkent City
                Mall
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 95 000 00 00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Padel.Uz
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Ташкент, Юнусабадский район,ул. Ифтихор, 1
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 88 780 80 00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Padel.Uz – Gallereya
                </h3>
              </div>
              <p className="text-gray-600 mb-3">улица Рихсили •</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 88 780 80 00
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Padel.Uz – Humo Arena
                </h3>
              </div>
              <p className="text-gray-600 mb-3">Beshyogoch ko'chasi •</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    +998 77 495 80 00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.9)), url(https://images.pexels.com/photos/8007392/pexels-photo-8007392.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Станьте частью развивающегося сообщества любителей сквоша и падела в
            Узбекистане
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+998992050033"
              onClick={() => scrollToSection("contacts")}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Связаться с нами
            </a>
            <button
              onClick={() => scrollToSection("clubs")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Найти клуб
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              {/* <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Федерация сквоша и падела
                </span>
              </div> */}
              <img
                src="/logo.png"
                className="w-3/4 h-16 mb-4 object-contain"
                alt="Федерация сквоша и падела"
              />

              <p className="text-gray-400 mb-4">
                Официальная организация по развитию сквоша и падела в
                Узбекистане
              </p>
              {/* <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter size={18} />
                </button>
              </div> */}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Миссия
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tasks")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Задачи
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("leadership")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Руководство
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("clubs")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Клубы
                  </button>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Тренировки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Соревнования
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Лицензирование
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Партнерство
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-green-500" />
                  <span className="text-gray-400">+998 99 205 00 33</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Mail size={16} className="text-green-500" />
                  <span className="text-gray-400">info@squashpadel.uz</span>
                </div> */}
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-green-500 mt-1" />
                  <span className="text-gray-400">
                    Адрес Федерации: г. Ташкент, <br /> EcoPark, Khamid Alimdjan
                    Street, Tashkent
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Федерация сквоша и падела Узбекистана. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
