"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

export default function AutoStylWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "o-nas", "uslugi", "galeria", "kontakt"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-cyber-black">
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-cyber-black shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              Auto<span className="text-cyber-teal dark:text-cyber-cyan">Styl</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: "home", label: "Strona główna" },
              { id: "o-nas", label: "O nas" },
              { id: "uslugi", label: "Usługi" },
              { id: "galeria", label: "Galeria" },
              { id: "kontakt", label: "Kontakt" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyber-teal dark:hover:text-cyber-cyan ${
                  activeSection === item.id
                    ? "text-cyber-teal dark:text-cyber-cyan"
                    : "text-slate-700 dark:text-cyber-gray"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle and Contact Button */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-cyber-teal hover:bg-cyber-teal/80 dark:bg-cyber-cyan dark:hover:bg-cyber-cyan/80 dark:text-cyber-black text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Zadzwoń teraz
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="text-slate-700 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-cyber-black border-t dark:border-cyber-darkGray">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-3 py-3">
                {[
                  { id: "home", label: "Strona główna" },
                  { id: "o-nas", label: "O nas" },
                  { id: "uslugi", label: "Usługi" },
                  { id: "galeria", label: "Galeria" },
                  { id: "kontakt", label: "Kontakt" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-cyber-teal dark:hover:text-cyber-cyan ${
                      activeSection === item.id
                        ? "text-cyber-teal dark:text-cyber-cyan"
                        : "text-slate-700 dark:text-cyber-gray"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="bg-cyber-teal hover:bg-cyber-teal/80 dark:bg-cyber-cyan dark:hover:bg-cyber-cyan/80 dark:text-cyber-black text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full mt-2"
                >
                  Zadzwoń teraz
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-0">
        <div className="relative h-[80vh] bg-cyber-darkGray">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/80 to-cyber-black/40 z-10"></div>
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Profesjonalny detailing samochodowy"
              layout="fill"
              objectFit="cover"
              priority
              className="opacity-80"
            />
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Auto<span className="text-cyber-cyan">Styl</span> Będzin
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
              Twoje auto zasługuje na najlepszą pielęgnację
            </p>
            <p className="text-cyber-gray mb-8 max-w-xl">
              Zadbaj o swój samochód z profesjonalnym detailingiem. Nasz zespół młodych specjalistów zaoferuje
              kompleksowe usługi czyszczenia, renowacji oraz ochrony pojazdów na najwyższym poziomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("uslugi")}
                className="bg-cyber-cyan hover:bg-cyber-cyan/80 text-cyber-black px-6 py-3 rounded-md text-sm font-medium transition-colors border border-transparent"
              >
                Nasze usługi
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="bg-transparent hover:bg-cyber-darkGray text-cyber-gray border border-cyber-teal hover:border-cyber-cyan px-6 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Umów wizytę
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="o-nas" className="py-16 bg-white dark:bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">O nas</h2>
            <div className="w-20 h-1 bg-cyber-teal dark:bg-cyber-cyan mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                15 lat doświadczenia - perfekcja w każdym detalu
              </h3>
              <p className="text-slate-600 dark:text-cyber-gray mb-4">
                AutoStyl to profesjonalny salon detailingu samochodowego w Będzinie, który od 15 lat dba o samochody
                naszych klientów. Specjalizujemy się w kompleksowej pielęgnacji pojazdów, oferując usługi na najwyższym
                poziomie.
              </p>
              <p className="text-slate-600 dark:text-cyber-gray mb-6">
                Nasz zespół składa się z doświadczonych specjalistów, którzy z pasją podchodzą do swojej pracy. Używamy
                tylko najwyższej jakości produktów i najnowocześniejszych technologii, aby zapewnić Twojemu autu
                perfekcyjny wygląd i ochronę.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-cyber-teal/10 dark:bg-cyber-cyan/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Doświadczenie</h4>
                    <p className="text-sm text-slate-600 dark:text-cyber-gray">15 lat w branży</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyber-teal/10 dark:bg-cyber-cyan/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Jakość</h4>
                    <p className="text-sm text-slate-600 dark:text-cyber-gray">Najlepsze produkty</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyber-teal/10 dark:bg-cyber-cyan/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Profesjonalizm</h4>
                    <p className="text-sm text-slate-600 dark:text-cyber-gray">Wykwalifikowana kadra</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyber-teal/10 dark:bg-cyber-cyan/10 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Zadowolenie</h4>
                    <p className="text-sm text-slate-600 dark:text-cyber-gray">Setki klientów</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Nasz zespół przy pracy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16 bg-slate-50 dark:bg-cyber-darkGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Nasze usługi</h2>
            <div className="w-20 h-1 bg-cyber-teal dark:bg-cyber-cyan mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-cyber-gray max-w-2xl mx-auto">
              Oferujemy kompleksowe usługi detailingowe, które przywrócą blask Twojemu samochodowi i zapewnią mu
              długotrwałą ochronę.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Detailing zewnętrzny",
                description:
                  "Kompleksowe czyszczenie, polerowanie i zabezpieczenie lakieru, felg oraz innych elementów zewnętrznych pojazdu.",
                icon: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Detailing wnętrza",
                description:
                  "Dokładne czyszczenie tapicerki, kokpitu, dywaników oraz wszystkich elementów wewnętrznych pojazdu.",
                icon: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Korekta lakieru",
                description:
                  "Usuwanie rys, hologramów i innych niedoskonałości lakieru, przywracając mu idealny wygląd.",
                icon: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Powłoki ceramiczne",
                description:
                  "Aplikacja profesjonalnych powłok ceramicznych, zapewniających długotrwałą ochronę lakieru.",
                icon: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Polerowanie reflektorów",
                description:
                  "Renowacja zmatowiałych i pożółkłych reflektorów, poprawiająca widoczność i wygląd pojazdu.",
                icon: "/placeholder.svg?height=80&width=80",
              },
              {
                title: "Pranie tapicerki",
                description:
                  "Głębokie czyszczenie tapicerki materiałowej i skórzanej, usuwające plamy i nieprzyjemne zapachy.",
                icon: "/placeholder.svg?height=80&width=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-cyber-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-transparent hover:border-cyber-teal/20 dark:hover:border-cyber-cyan/20"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-cyber-teal/10 dark:bg-cyber-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={40} height={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-cyber-gray mb-4">{service.description}</p>
                  <button
                    onClick={() => scrollToSection("kontakt")}
                    className="text-cyber-teal dark:text-cyber-cyan hover:text-cyber-teal/80 dark:hover:text-cyber-cyan/80 font-medium flex items-center text-sm"
                  >
                    Dowiedz się więcej <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 bg-white dark:bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Galeria</h2>
            <div className="w-20 h-1 bg-cyber-teal dark:bg-cyber-cyan mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-cyber-gray max-w-2xl mx-auto">
              Zobacz efekty naszej pracy i przekonaj się o jakości naszych usług.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Zdjęcie+${index + 1}`}
                  alt={`Przykład pracy ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="w-8 h-1 bg-cyber-cyan mb-2"></div>
                    <p className="text-white text-sm">Detailing samochodu premium</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 dark:bg-cyber-darkGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Opinie klientów</h2>
            <div className="w-20 h-1 bg-cyber-teal dark:bg-cyber-cyan mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-cyber-gray max-w-2xl mx-auto">Co mówią o nas nasi klienci?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Marek Kowalski",
                text: "Profesjonalna obsługa i doskonałe efekty. Mój samochód wygląda jak nowy po wizycie w AutoStyl. Polecam każdemu, kto ceni sobie jakość i profesjonalizm.",
                rating: 5,
              },
              {
                name: "Anna Nowak",
                text: "Jestem bardzo zadowolona z usług AutoStyl. Tapicerka w moim aucie była w fatalnym stanie, a teraz wygląda jak nowa. Świetna obsługa i rozsądne ceny.",
                rating: 5,
              },
              {
                name: "Piotr Wiśniewski",
                text: "Powłoka ceramiczna wykonana przez AutoStyl spełniła wszystkie moje oczekiwania. Lakier jest idealnie zabezpieczony i lśni jak nigdy wcześniej. Zdecydowanie polecam!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-cyber-black rounded-lg shadow-md p-6 border border-transparent hover:border-cyber-teal/20 dark:hover:border-cyber-cyan/20"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-cyber-teal fill-cyber-teal dark:text-cyber-cyan dark:fill-cyber-cyan" : "text-gray-300 dark:text-gray-600"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-cyber-gray mb-4 italic">"{testimonial.text}"</p>
                <p className="font-medium text-slate-800 dark:text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white dark:bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Kontakt</h2>
            <div className="w-20 h-1 bg-cyber-teal dark:bg-cyber-cyan mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-cyber-gray max-w-2xl mx-auto">
              Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji o naszych usługach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white dark:bg-cyber-black rounded-lg shadow-md p-6 dark:border dark:border-cyber-darkGray">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">Informacje kontaktowe</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Telefon</p>
                      <p className="text-slate-600 dark:text-cyber-gray">+48 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-cyber-gray">kontakt@autostyl.pl</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Adres</p>
                      <p className="text-slate-600 dark:text-cyber-gray">ul. Przykładowa 123, 42-500 Będzin</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-cyber-teal dark:text-cyber-cyan mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Godziny otwarcia</p>
                      <p className="text-slate-600 dark:text-cyber-gray">Poniedziałek - Piątek: 8:00 - 18:00</p>
                      <p className="text-slate-600 dark:text-cyber-gray">Sobota: 9:00 - 14:00</p>
                      <p className="text-slate-600 dark:text-cyber-gray">Niedziela: Zamknięte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-cyber-black rounded-lg shadow-md p-6 dark:border dark:border-cyber-darkGray">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">Wyślij wiadomość</h3>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-cyber-gray mb-1"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-cyber-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-teal dark:focus:ring-cyber-cyan focus:border-transparent bg-white dark:bg-cyber-darkGray text-slate-900 dark:text-white"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-cyber-gray mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-cyber-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-teal dark:focus:ring-cyber-cyan focus:border-transparent bg-white dark:bg-cyber-darkGray text-slate-900 dark:text-white"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 dark:text-cyber-gray mb-1"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-cyber-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-teal dark:focus:ring-cyber-cyan focus:border-transparent bg-white dark:bg-cyber-darkGray text-slate-900 dark:text-white"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-cyber-gray mb-1"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-cyber-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-teal dark:focus:ring-cyber-cyan focus:border-transparent bg-white dark:bg-cyber-darkGray text-slate-900 dark:text-white"
                      placeholder="Twoja wiadomość..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyber-teal hover:bg-cyber-teal/80 dark:bg-cyber-cyan dark:hover:bg-cyber-cyan/80 dark:text-cyber-black text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-darkGray dark:bg-cyber-black text-white py-12 border-t border-cyber-teal/20 dark:border-cyber-cyan/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Auto<span className="text-cyber-teal dark:text-cyber-cyan">Styl</span>
              </div>
              <p className="text-cyber-gray mb-4">
                Profesjonalny detailing samochodowy w Będzinie. Zadbamy o Twój samochód jak o własny.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-cyber-cyan transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-cyber-cyan transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Szybkie linki</h3>
              <nav className="grid gap-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-cyber-gray hover:text-cyber-cyan transition-colors text-left"
                >
                  Strona główna
                </button>
                <button
                  onClick={() => scrollToSection("o-nas")}
                  className="text-cyber-gray hover:text-cyber-cyan transition-colors text-left"
                >
                  O nas
                </button>
                <button
                  onClick={() => scrollToSection("uslugi")}
                  className="text-cyber-gray hover:text-cyber-cyan transition-colors text-left"
                >
                  Usługi
                </button>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="text-cyber-gray hover:text-cyber-cyan transition-colors text-left"
                >
                  Galeria
                </button>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="text-cyber-gray hover:text-cyber-cyan transition-colors text-left"
                >
                  Kontakt
                </button>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-cyber-gray mb-4">
                Zapisz się do naszego newslettera, aby otrzymywać informacje o promocjach i nowościach.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 px-3 py-2 border border-cyber-darkGray rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:border-transparent bg-cyber-black text-white"
                />
                <button
                  type="submit"
                  className="bg-cyber-cyan hover:bg-cyber-cyan/80 text-cyber-black px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Zapisz
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-cyber-darkGray mt-8 pt-8 text-center text-cyber-gray text-sm">
            <p>&copy; {new Date().getFullYear()} AutoStyl Będzin. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

