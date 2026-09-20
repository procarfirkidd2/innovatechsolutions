import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  BriefcaseBusiness,
  Building2,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Factory,
  HardHat,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  UserCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import heroImage from "@/assets/innovatech-industrial-cleaning.jpg";
import industrialFacilitiesImage from "@/assets/service-industrial-facilities.jpg";
import operationalAreasImage from "@/assets/service-operational-areas.jpg";
import deepCleaningImage from "@/assets/service-deep-cleaning.jpg";
import workSurfacesImage from "@/assets/service-work-surfaces.jpg";
import businessSpacesImage from "@/assets/service-business-spaces.jpg";
import customRequirementsImage from "@/assets/service-custom-requirements.jpg";

const WHATSAPP_NUMBER = "59170342757";
const GENERAL_WHATSAPP_MESSAGE = "Hola, estoy interesado en conocer más sobre los servicios de INNOVATECH SOLUTIONS S.R.L.";
const whatsappUrl = (message = GENERAL_WHATSAPP_MESSAGE) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  [Factory, "Limpieza de instalaciones industriales", "Atención para plantas, almacenes y espacios con exigencias operativas particulares.", industrialFacilitiesImage],
  [Zap, "Limpieza de áreas operativas", "Intervenciones organizadas según las condiciones y dinámica de cada área.", operationalAreasImage],
  [Sparkles, "Limpieza profunda", "Tratamiento detallado para acumulaciones de polvo, grasa, residuos y suciedad.", deepCleaningImage],
  [Wrench, "Superficies y áreas de trabajo", "Limpieza profesional de superficies, zonas técnicas y espacios de producción.", workSurfacesImage],
  [Building2, "Espacios empresariales", "Soluciones para oficinas, áreas comunes y grandes instalaciones corporativas.", businessSpacesImage],
  [ClipboardCheck, "Servicios según requerimiento", "Un alcance diseñado a partir del tipo de instalación, necesidad y frecuencia.", customRequirementsImage],
] as const;

const benefits = [
  ["01", Users, "Atención personalizada", "Analizamos el requerimiento antes de plantear una solución."],
  ["02", BadgeCheck, "Enfoque profesional", "Trabajamos según las necesidades y exigencias del entorno industrial."],
  ["03", UserCheck, "Personal capacitado", "Personal preparado para realizar las tareas con responsabilidad y cuidado."],
  ["04", Wrench, "Equipos adecuados", "Seleccionamos herramientas y productos de acuerdo con cada trabajo."],
  ["05", CalendarCheck, "Organización y cumplimiento", "Priorizamos una ejecución ordenada y responsable del servicio."],
  ["06", SlidersHorizontal, "Orientación a soluciones", "Entendemos el problema para plantear una respuesta práctica."],
] as const;

const faqs = [
  ["¿Trabajan con empresas e industrias?", "Sí. Nuestra propuesta está orientada principalmente a empresas que requieren servicios de limpieza y soluciones adaptadas a sus instalaciones."],
  ["¿Pueden adaptar el servicio a las necesidades de mi empresa?", "Sí. Evaluamos el requerimiento para plantear una solución acorde a las características del trabajo."],
  ["¿Cómo puedo solicitar una cotización?", "Puede comunicarse directamente con nosotros mediante WhatsApp o correo electrónico."],
  ["¿Trabajan con servicios programados?", "Los servicios y su frecuencia pueden definirse de acuerdo con las necesidades del cliente y las características del requerimiento."],
  ["¿También comercializan productos industriales?", "Sí. Contamos con una línea complementaria de importación y comercialización de productos, equipos, herramientas e insumos para la industria."],
  ["¿Atienden requerimientos especiales?", "Puede enviarnos los detalles de su requerimiento para evaluar la solución más adecuada."],
] as const;

const navItems = [
  ["Inicio", "#inicio"], ["Nosotros", "#nosotros"], ["Servicios", "#servicios"],
  ["Productos", "#productos"], ["¿Por qué INNOVATECH?", "#diferenciadores"], ["Contacto", "#contacto"],
] as const;

const trustPoints = [
  { icon: ShieldCheck, title: "Servicio profesional", copy: "Soluciones adaptadas" },
  { icon: Users, title: "Atención personalizada", copy: "Conocemos su necesidad" },
  { icon: Factory, title: "Enfoque industrial", copy: "Comprendemos su entorno" },
  { icon: Target, title: "Soluciones a medida", copy: "Según cada trabajo" },
];

const productCategories = [
  { icon: Box, title: "Equipos industriales" },
  { icon: Wrench, title: "Herramientas" },
  { icon: PackageSearch, title: "Insumos" },
  { icon: Sparkles, title: "Productos para limpieza" },
  { icon: Zap, title: "Soluciones técnicas" },
  { icon: BriefcaseBusiness, title: "Productos bajo requerimiento" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Servicios Industriales de Limpieza en Santa Cruz | INNOVATECH" },
      { name: "description", content: "INNOVATECH SOLUTIONS S.R.L. ofrece servicios industriales de limpieza y soluciones para empresas en Santa Cruz de la Sierra, Bolivia. Solicite una cotización." },
      { property: "og:title", content: "Servicios Industriales de Limpieza en Santa Cruz | INNOVATECH" },
      { property: "og:description", content: "Soluciones profesionales de limpieza industrial para empresas en Santa Cruz de la Sierra, Bolivia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "INNOVATECH SOLUTIONS S.R.L.",
        description: "Servicios industriales de limpieza y soluciones para la industria.",
        address: { "@type": "PostalAddress", addressLocality: "Santa Cruz de la Sierra", addressCountry: "BO" },
        areaServed: "Bolivia",
      }),
    }],
  }),
  component: Index,
});

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={light ? "text-primary-foreground" : "text-foreground"}>{title}</h2>
    {copy && <p className={light ? "text-primary-foreground/70" : "text-muted-foreground"}>{copy}</p>}
  </div>;
}

function ActionLink({ href, children, secondary = false, icon = true, external = false }: { href: string; children: ReactNode; secondary?: boolean; icon?: boolean; external?: boolean }) {
  return <a href={href} className={secondary ? "action action-secondary" : "action action-primary"} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
    {children}{icon && <ArrowRight size={17} aria-hidden="true" />}
  </a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <a href="#inicio" className="brand" aria-label="INNOVATECH, inicio">
        <span className="brand-mark">IS</span>
        <span><strong>INNOVATECH</strong><small>SOLUTIONS S.R.L.</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
       <a href={whatsappUrl()} className="header-cta" target="_blank" rel="noreferrer">Solicitar cotización</a>
      <button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Navegación móvil">
      {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
       <a href={whatsappUrl()} className="mobile-quote" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Solicitar cotización</a>
    </nav>}
  </header>;
}

function Index() {
  return <div className="site-shell">
    <Header />
    <main>
      <section id="inicio" className="hero">
        <img src={heroImage} width={1920} height={1080} alt="Personal equipado realizando limpieza profesional en una instalación industrial" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-kicker"><span /> Soluciones para la industria</p>
          <h1>Soluciones profesionales de <em>limpieza industrial</em></h1>
          <p className="hero-copy">Servicios adaptados a las necesidades de su empresa para mantener sus instalaciones limpias, ordenadas y listas para operar.</p>
          <div className="hero-actions">
             <ActionLink href={whatsappUrl()} external>Solicitar cotización</ActionLink>
            <ActionLink href="#servicios" secondary>Conocer servicios</ActionLink>
          </div>
          <p className="hero-location"><MapPin size={16} /> Santa Cruz de la Sierra, Bolivia</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Compromisos de servicio">
        <div className="container trust-grid">
          {trustPoints.map(({ icon: Icon, title, copy }) =>
            <div className="trust-item" key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{copy}</span></div></div>
          )}
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeading eyebrow="Nuestro servicio principal" title="Servicios industriales de limpieza" copy="Una instalación industrial necesita mucho más que una limpieza convencional. Diseñamos el alcance según las características y necesidades de cada empresa." />
            <div className="section-note"><span>01</span><p>Nuestro objetivo es contribuir a instalaciones limpias, ordenadas y adecuadas para sus actividades.</p></div>
          </div>
          <div className="service-grid">
             {services.map(([Icon, title, copy, image]) => <article className="service-card" key={title}>
               <div className="service-image"><img src={image} loading="lazy" width={1200} height={768} alt={`Imagen referencial de ${title.toLowerCase()}`} /></div>
               <div className="service-card-body"><div className="service-icon"><Icon size={24} /></div><h3>{title}</h3><p>{copy}</p>
               <a href={whatsappUrl(`Hola, estoy interesado en el servicio de ${title}. Me gustaría recibir información y una cotización.`)} target="_blank" rel="noreferrer">Solicitar cotización <ArrowRight size={15} /></a></div>
            </article>)}
          </div>
          <div className="custom-solution">
            <div><p className="eyebrow">Un requerimiento diferente</p><h3>¿Necesita una solución específica?</h3><p>Cuéntenos qué necesita limpiar, las características de su instalación y la frecuencia requerida. Evaluaremos su requerimiento.</p></div>
             <ActionLink href={whatsappUrl("Hola, tengo un requerimiento específico de limpieza industrial. Me gustaría recibir información y una cotización.")} external>Solicitar cotización</ActionLink>
          </div>
        </div>
      </section>

      <section id="diferenciadores" className="section benefits-section">
        <div className="container">
          <SectionHeading eyebrow="Nuestra forma de trabajar" title="¿Por qué elegir INNOVATECH?" copy="Una respuesta profesional empieza por comprender el entorno, organizar el trabajo y atender lo que cada instalación realmente necesita." light />
           <div className="benefit-grid">{benefits.map(([number, Icon, title, copy]) => <article key={number} className="benefit-item"><div className="benefit-icon"><Icon aria-hidden="true" /></div><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section id="nosotros" className="section about-section">
        <div className="container about-grid">
          <div>
            <SectionHeading eyebrow="Sobre INNOVATECH" title="Entendemos las necesidades de la industria" />
            <div className="about-copy"><p>INNOVATECH SOLUTIONS S.R.L. nace con una visión orientada a brindar soluciones para empresas e industrias, combinando servicios especializados con productos y soluciones técnicas.</p><p>Nuestra propuesta se enfoca principalmente en servicios industriales de limpieza adaptados a cada cliente. Complementamos nuestra actividad con productos, equipos, herramientas e insumos para el sector industrial.</p></div>
            <div className="about-tags"><span><Check /> Visión industrial</span><span><Check /> Atención directa</span><span><Check /> Orientación a soluciones</span></div>
          </div>
          <div className="purpose-panel">
            <div><Target /><p className="eyebrow">Misión</p><p>Brindar servicios industriales de limpieza y soluciones para empresas con atención profesional, responsable y adaptada a cada cliente.</p></div>
            <div><Zap /><p className="eyebrow">Visión</p><p>Ser una empresa reconocida en Bolivia por la calidad, confiabilidad y profesionalismo de sus servicios industriales.</p></div>
          </div>
        </div>
        <div className="container values-row">
          {['Responsabilidad','Profesionalismo','Compromiso','Calidad','Confianza','Seguridad','Innovación','Orientación al cliente'].map(value => <span key={value}>{value}</span>)}
        </div>
      </section>

      <section id="productos" className="section products-section">
        <div className="container products-grid">
          <div>
            <SectionHeading eyebrow="Línea complementaria" title="Productos y soluciones para la industria" copy="Importación y comercialización de productos, equipos, herramientas e insumos para diferentes necesidades del sector industrial." />
            <ActionLink href="#contacto">Consultar productos</ActionLink>
          </div>
          <div className="product-list">
            {productCategories.map(({ icon: Icon, title }) => <div key={title}><Icon /><span>{title}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading eyebrow="Proceso claro" title="¿Cómo trabajamos?" copy="Una coordinación simple y directa desde el primer contacto hasta la ejecución." />
          <div className="process-grid">{[["01","Cuéntenos su necesidad","Explique qué servicio necesita."],["02","Evaluamos el requerimiento","Analizamos el trabajo y la instalación."],["03","Proponemos una solución","Planteamos una alternativa adecuada."],["04","Coordinamos el servicio","Definimos los detalles para ejecutar."]].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
           <div className="center-action"><ActionLink href={whatsappUrl("Hola, quiero contarles una necesidad de mi empresa para conocer la solución más adecuada.")} external>Cuéntenos qué necesita</ActionLink></div>
        </div>
      </section>

      <section id="trabajo" className="section work-section">
        <div className="container">
          <SectionHeading eyebrow="Nuestro trabajo" title="Experiencia que se demuestra en el terreno" copy="Este espacio está preparado para incorporar fotografías reales autorizadas de procesos, instalaciones, equipos y resultados." />
          <div className="work-grid">
            <div className="work-image"><img src={heroImage} loading="lazy" width={1920} height={1080} alt="Imagen de referencia de un proceso profesional de limpieza industrial" /><span>Imagen de referencia</span></div>
            <div className="work-placeholder"><Factory /><strong>Próximamente</strong><p>Antes y después</p><small>Fotografías reales autorizadas</small></div>
            <div className="work-placeholder"><HardHat /><strong>Próximamente</strong><p>Equipo en operación</p><small>Fotografías reales autorizadas</small></div>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <div><SectionHeading eyebrow="Confianza comprobable" title="Lo que nuestros clientes dicen" /><p>Estamos preparando este espacio para compartir experiencias reales de clientes que autoricen su publicación.</p></div>
          <div className="testimonial-placeholder"><MessageCircle /><p>“Aquí se incorporarán testimonios reales de clientes autorizados.”</p><span>Contenido pendiente de validación</span></div>
        </div>
      </section>

      <section id="preguntas" className="section faq-section">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Información útil" title="Preguntas frecuentes" copy="Respuestas claras para ayudarle a iniciar su solicitud." />
          <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown /></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Hablemos de su proyecto</p><h2>¿Qué necesita resolver en sus instalaciones?</h2>
            <p>Estamos listos para conocer su requerimiento de limpieza industrial o solución para su empresa.</p>
            <div className="contact-items">
              <div><MapPin /><span><small>Ubicación</small>Santa Cruz de la Sierra, Bolivia</span></div>
               <a href="https://wa.me/59170342757" target="_blank" rel="noreferrer"><Phone /><span><small>Teléfono / WhatsApp</small>+591 70342757</span></a>
               <a href="mailto:innovatechsolutions.bo@gmail.com"><Mail /><span><small>Correo electrónico</small>innovatechsolutions.bo@gmail.com</span></a>
              <div><Clock3 /><span><small>Horario</small>Por confirmar</span></div>
            </div>
          </div>
           <div className="whatsapp-cta">
             <div className="whatsapp-cta-icon"><MessageCircle aria-hidden="true" /></div>
             <p className="eyebrow">Contacto directo</p>
             <h2>¿Necesita una solución para su empresa?</h2>
             <p>Contáctenos directamente por WhatsApp y conversemos sobre su necesidad.</p>
             <ActionLink href={whatsappUrl()} external icon={false}><MessageCircle size={19} /> Escribir por WhatsApp</ActionLink>
             <small>Atención directa al +591 70342757</small>
           </div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-grid">
        <div><a href="#inicio" className="brand footer-brand"><span className="brand-mark">IS</span><span><strong>INNOVATECH</strong><small>SOLUTIONS S.R.L.</small></span></a><p>Servicios industriales de limpieza y soluciones para la industria.</p></div>
        <div><h3>Enlaces</h3>{navItems.slice(0,5).map(([l,h]) => <a key={h} href={h}>{l}</a>)}</div>
         <div><h3>Contacto</h3><p>Santa Cruz de la Sierra, Bolivia</p><a href="https://wa.me/59170342757" target="_blank" rel="noreferrer">WhatsApp: +591 70342757</a><a href="mailto:innovatechsolutions.bo@gmail.com">innovatechsolutions.bo@gmail.com</a></div>
        <div><h3>Redes sociales</h3><p>Facebook · Por confirmar</p><p>Instagram · Por confirmar</p><p>LinkedIn · Por confirmar</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 INNOVATECH SOLUTIONS S.R.L. Todos los derechos reservados.</span><span>Soluciones prácticas. Respuesta profesional.</span></div>
    </footer>

     <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Escribir a INNOVATECH por WhatsApp" title="Escribir por WhatsApp">
       <MessageCircle /><span>WhatsApp</span><small>Escríbanos</small>
     </a>
  </div>;
}