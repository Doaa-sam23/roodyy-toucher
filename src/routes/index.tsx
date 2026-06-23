import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Phone,
  Sparkles,
  Crown,
  Truck,
  Heart,
  Gem,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import signatureImg from "@/assets/signature.jpg";
import logoImg from "@/assets/logo.png";
import look1 from "@/assets/IMG_9376.jpg";
import look2 from "@/assets/IMG_9378.jpg";
import look3 from "@/assets/IMG_9379.jpg";
import look4 from "@/assets/IMG_9380.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roodyy Toucher — Maison de Mode Féminine Premium" },
      {
        name: "description",
        content:
          "Roodyy Toucher — robes, ensembles, abayas modernes et tenues de soirée. Une signature d'élégance algérienne pensée pour révéler la beauté de chaque femme.",
      },
      { property: "og:title", content: "Roodyy Toucher — Maison de Mode Féminine Premium" },
      { property: "og:description", content: "Créations couture, élégance intemporelle. Commandez via Instagram." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const WHATSAPP_DISPLAY = "0657741017";
const IG_URL = "https://instagram.com/roodyy_toucher";
const IG_HANDLE = "@roodyy_toucher";

const products = [
  { name: "AL anika", price: "Sur demande", blurb: "Soie verte sauge, col brodé de perles nacrées.", img: look1 },
  { name: "Jabador soultana", price: "Sur demande", blurb: "Jabador imprimé, ceinture obi noire signature.", img: look2 },
  { name: "Robe Ruby", price: "Sur demande", blurb: "Velours rouge profond, manches en organza pêche.", img: look3 },
  { name: "Caftan Princesse", price: "Sur demande", blurb: "Broderie or et pierres précieuses, pièce de cérémonie.", img: look4 },
];

const testimonials = [
  { quote: "Des vêtements magnifiques et une qualité exceptionnelle. Chaque pièce est une œuvre.", name: "DOAA SAMAI." },
  { quote: "Une boutique qui reflète parfaitement l'élégance féminine. Service impeccable.", name: "Aya BELKACMI." },
  { quote: "Mon caftan a fait sensation à mon mariage. Merci pour cette signature.", name: "KODS BEDLA" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Marquee />
      <Products />
      <Signature />
      <InstagramGallery />
      <Advantages />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingInstagram />
    </div>
  );
}

function Header({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const links = [
    { href: "#produits", label: "Boutique" },
    { href: "#signature", label: "Signature" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoImg} alt="Roodyy Toucher" className="h-12 w-12 object-contain" />
          <span className="font-display text-2xl tracking-wide">Roodyy Toucher</span>
        </a>
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-5 py-3 text-sm font-medium tracking-luxe uppercase text-foreground/85 border border-transparent hover:border-foreground/30 hover:text-primary rounded-sm transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-semibold tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
        >
          <Instagram className="h-4 w-4" /> Commander
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3.5 text-base font-medium tracking-luxe uppercase border border-border/60 rounded-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-4 text-sm font-semibold tracking-luxe uppercase rounded-sm"
            >
              <Instagram className="h-4 w-4" /> Commander sur Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mannequin portant un caftan ivoire brodé d'or Roodyy Toucher"
          className="w-full h-full object-cover animate-slow-zoom"
          width={1600}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/30 via-chocolate/10 to-chocolate/60" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 lg:px-16 pb-20 lg:pb-28">
        <div className="max-w-3xl text-ivory animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-ivory/70" />
            <span className="text-[11px] tracking-luxe uppercase text-ivory/90">
              Collection Automne · Hiver 2026
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] font-light">
            <em className="italic text-cream">Roodyy Toucher</em>
          </h1>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-ivory/85 font-light leading-relaxed">
            Découvrez des créations élégantes algériennes, pensées pour révéler la
            beauté et la confiance de chaque femme.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#produits"
              className="group inline-flex items-center gap-3 bg-ivory text-chocolate px-7 py-4 text-xs tracking-luxe uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Découvrir la Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-ivory/70 text-ivory px-7 py-4 text-xs tracking-luxe uppercase hover:bg-ivory hover:text-chocolate transition-colors"
            >
              <Instagram className="h-4 w-4" /> Commander sur Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-3 text-ivory/80">
        <span className="text-[10px] tracking-luxe uppercase rotate-90 origin-center mt-12">Scroll</span>
        <span className="h-12 w-px bg-ivory/40" />
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Élégance", "Raffinement", "Féminité", "Exclusivité", "Couture", "Signature"];
  return (
    <div className="bg-chocolate text-cream overflow-hidden py-6 border-y border-bronze/20">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-display italic text-2xl lg:text-3xl flex items-center gap-16">
            {w}
            <Sparkles className="h-4 w-4 text-bronze" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from {transform: translateX(0)} to {transform: translateX(-50%)} }`}</style>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl reveal">
      <p className="text-[11px] tracking-luxe uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight font-light">{title}</h2>
      {intro && <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">{intro}</p>}
    </div>
  );
}

function Products() {
  return (
    <section id="produits" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="La Boutique"
          title={
            <>
              Pièces <em className="italic">Choisies</em>
            </>
          }
          intro="Une sélection couture algérienne, taillée pour vous. Chaque pièce est réalisée avec soin et disponible sur commande."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((p, i) => (
            <article key={p.name} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-sand shadow-soft">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1.5 text-chocolate">
                  Nouveau
                </div>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 bg-chocolate text-ivory py-3 text-[11px] tracking-luxe uppercase opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary"
                >
                  <Instagram className="h-3.5 w-3.5" /> Commander
                </a>
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <span className="text-xs text-muted-foreground">{p.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section id="signature" className="relative bg-chocolate text-ivory py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative reveal">
          <div className="relative aspect-[4/5] overflow-hidden shadow-luxe">
            <img
              src={signatureImg}
              alt="Pièce signature Roodyy Toucher"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-ivory text-chocolate px-4 py-2">
              <Crown className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] tracking-luxe uppercase">Exclusif</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 reveal" style={{ transitionDelay: "150ms" }}>
          <p className="text-[11px] tracking-luxe uppercase text-bronze">N°01 · Édition Limitée</p>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight font-light">
            Notre Pièce <em className="italic text-cream">Signature</em>
          </h2>
          <p
            dir="rtl"
            lang="ar"
            className="mt-6 text-ivory/90 leading-loose text-lg lg:text-xl font-display text-right"
          >
            <strong className="text-cream text-2xl lg:text-3xl">EL ANIKA</strong> — القطعة التي تقع في حبّها من النظرة الأولى.
            <br />
            <br />
            روب فاخرة بتصميم انسيابي ينساب برقّة على القوام، مزينة بتطريزات راقية تمنحها طابعاً ملكياً ناعماً.
            تفاصيل صنعت لتدوم في الذاكرة، وأناقة تتجاوز صيحات الموضة العابرة.
            <br />
            <br />
            إحدى أكثر اختيارات عميلاتنا تميزاً والأكثر مبيعاً، لأنها لا تمنحك إطلالة جميلة فقط، بل تمنحك شعوراً بالفخامة والثقة في كل لحظة.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ivory/85">
            {["Soie naturelle ivoire", "Broderie main · or & perles", "Sur-mesure"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Gem className="h-3.5 w-3.5 text-bronze" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs tracking-luxe uppercase hover:bg-bronze transition-colors"
            >
              Acheter maintenant <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-ivory/60 text-ivory px-7 py-4 text-xs tracking-luxe uppercase hover:bg-ivory hover:text-chocolate transition-colors"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramGallery() {
  const looks = [look1, look3, look2, look4, look1, look3];
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Instagram"
            title={
              <>
                Suivez Notre <em className="italic">Univers</em>
              </>
            }
            intro="Coulisses, nouveautés et inspirations. Rejoignez notre communauté sur Instagram."
          />
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase text-foreground hover:text-primary self-start"
          >
            <Instagram className="h-4 w-4" /> {IG_HANDLE}
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {looks.map((src, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative aspect-square overflow-hidden bg-sand"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={src}
                alt={`Publication Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/40 transition-colors flex items-center justify-center">
                <Instagram className="h-6 w-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    { icon: Gem, title: "Qualité Premium", text: "Tissus nobles et finitions main." },
    { icon: Crown, title: "Élégance Intemporelle", text: "Des silhouettes qui traversent les saisons." },
    { icon: Sparkles, title: "Tendances Modernes", text: "Une lecture contemporaine de la couture." },
    { icon: Truck, title: "Livraison Rapide", text: "Expédition soignée vers les 58 wilayas d'Algérie." },
    { icon: Heart, title: "Service Personnalisé", text: "Conseil styliste dédié sur Instagram." },
    { icon: Star, title: "Satisfaction Client", text: "Une expérience pensée jusqu'au détail." },
  ];
  return (
    <section className="bg-sand/50 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="L'expérience"
          title={
            <>
              Pourquoi <em className="italic">Roodyy Toucher</em>
            </>
          }
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal group bg-ivory border border-border/60 p-8 hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Témoignages"
          title={
            <>
              Elles nous ont <em className="italic">choisies</em>
            </>
          }
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal bg-cream p-10 border border-border/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug italic text-chocolate">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-[11px] tracking-luxe uppercase text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal bg-ivory border border-border/60 p-10 lg:p-16 shadow-luxe text-center">
          <p className="text-[11px] tracking-luxe uppercase text-primary">Prenez Contact</p>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-light">
            Une <em className="italic">conversation</em> commence
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Notre équipe vous accompagne pour le choix de votre pièce, les retouches
            et la livraison vers les 58 wilayas d'Algérie. Écrivez-nous sur Instagram,
            nous répondons en quelques minutes.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="border border-border p-6">
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Téléphone</p>
              <p className="mt-2 font-display text-2xl">{WHATSAPP_DISPLAY}</p>
            </div>
            <div className="border border-border p-6">
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Instagram</p>
              <p className="mt-2 font-display text-2xl">{IG_HANDLE}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${WHATSAPP_DISPLAY}`}
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-xs tracking-luxe uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" /> Appeler
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-chocolate text-ivory px-6 py-3.5 text-xs tracking-luxe uppercase hover:bg-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" /> Commander sur Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-chocolate text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="" className="h-9 w-9 object-contain" />
            <span className="font-display text-2xl">Roodyy Toucher</span>
          </div>
          <p className="mt-5 font-display italic text-cream/90 text-lg leading-snug max-w-xs">
            « L'élégance n'est pas une tendance, c'est une signature. »
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-luxe uppercase text-bronze">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/85">
            <li>
              <a href="#" className="hover:text-primary">Accueil</a>
            </li>
            <li>
              <a href="#produits" className="hover:text-primary">Nouveautés</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-luxe uppercase text-bronze">Suivez-nous</p>
          <div className="mt-5 flex gap-3">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-ivory hover:text-chocolate transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`tel:${WHATSAPP_DISPLAY}`}
              className="h-11 w-11 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-ivory hover:text-chocolate transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-ivory/60">{WHATSAPP_DISPLAY} · {IG_HANDLE}</p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-luxe uppercase text-ivory/60">
          <p>© {new Date().getFullYear()} Roodyy Toucher · Tous droits réservés</p>
          <p>Maison de Mode Féminine Premium · Algérie</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingInstagram() {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-luxe flex items-center justify-center hover:scale-110 transition-transform"
    >
      <Instagram className="h-6 w-6" />
    </a>
  );
}