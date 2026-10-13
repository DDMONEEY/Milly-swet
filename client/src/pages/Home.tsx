import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

type Language = "en" | "pt";
type CategoryKey = "treats" | "cake" | "desserts";

type Copy = {
  skip: string;
  nav: { menu: string; about: string; ordering: string; contact: string };
  languageLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  heroImageAlt: string;
  imageNote: string;
  location: string;
  scroll: string;
  menuEyebrow: string;
  menuTitle: string;
  menuBody: string;
  categoryTitles: Record<CategoryKey, string>;
  categoryBodies: Record<CategoryKey, string>;
  askAbout: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutNote: string;
  orderEyebrow: string;
  orderTitle: string;
  orderBody: string;
  steps: { title: string; body: string }[];
  whatsapp: string;
  instagram: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  availability: string;
  footerLine: string;
  privacyTitle: string;
  privacyBody: string;
  termsTitle: string;
  termsBody: string;
  changesTitle: string;
  changesBody: string;
  message: string;
  whatsAppCategoryMessage: (category: string) => string;
};

const copy: Record<Language, Copy> = {
  en: {
    skip: "Skip to content",
    nav: { menu: "The menu", about: "Our story", ordering: "How to order", contact: "Contact" },
    languageLabel: "Switch language to Portuguese",
    heroEyebrow: "BRAZILIAN TREATS · WORCESTER, MA",
    heroTitle: "A little taste of Brazil, made with love.",
    heroBody:
      "Brazilian treats, desserts and cake in a cup — made for the moments worth making sweeter.",
    heroPrimary: "Ask about today's menu",
    heroSecondary: "Explore the menu",
    heroImageAlt: "Illustrative editorial arrangement of desserts; not a confirmed product photo",
    imageNote: "Illustrative imagery · Ask about today's selection",
    location: "Worcester, Massachusetts",
    scroll: "A little sweetness below",
    menuEyebrow: "A SWEET PLACE TO START",
    menuTitle: "Find your kind of sweet.",
    menuBody:
      "Explore the kinds of treats Milly Sweets shares, then message Milly to check today's flavors and availability.",
    categoryTitles: {
      treats: "Brazilian treats",
      cake: "Cake in a cup",
      desserts: "Desserts",
    },
    categoryBodies: {
      treats: "Little Brazilian-inspired sweets. Ask what's on the menu today.",
      cake: "A sweet treat served in a cup. Ask Milly about the current options.",
      desserts: "Discover the dessert selection and ask about what's available now.",
    },
    askAbout: "Ask about this category",
    aboutEyebrow: "A NOTE FROM WORCESTER",
    aboutTitle: "A familiar flavor, a sweeter day.",
    aboutBody:
      "Milly Sweets brings Brazilian treats and desserts to Worcester, Massachusetts. The menu includes Brazilian sweets, desserts and cake in a cup — a warm invitation to find a favorite or ask what's available for a special moment.",
    aboutNote: "With love by Milly · Worcester, MA",
    orderEyebrow: "MADE SIMPLE",
    orderTitle: "The best menu is the one that's fresh today.",
    orderBody:
      "Send a quick message and confirm the details directly with Milly. There is no online checkout, so nothing is confirmed until you hear back from the shop.",
    steps: [
      { title: "Pick a starting point", body: "Browse the categories or tell Milly what you have in mind." },
      { title: "Send a message", body: "Reach out on WhatsApp or Instagram to ask about today's menu." },
      { title: "Confirm together", body: "Check the price, availability, timing and pickup or delivery details before placing an order." },
    ],
    whatsapp: "Message on WhatsApp",
    instagram: "Visit Instagram",
    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "A few helpful details.",
    faqs: [
      {
        question: "What can I order today?",
        answer: "The public profile describes Brazilian treats, desserts and cake in a cup. Ask Milly directly about the current menu, flavors and availability.",
      },
      {
        question: "Do you offer pickup or delivery?",
        answer: "Please confirm the available option, service area and timing with Milly before placing an order. This site does not promise a delivery area or pickup arrangement.",
      },
      {
        question: "Where can I find prices and confirm an order?",
        answer: "Message the shop on WhatsApp or Instagram. Prices, availability and order details are confirmed directly with the shop; this site has no cart or online checkout.",
      },
    ],
    availability: "Menu, images and availability may vary. Category images are illustrative, not verified photos of current products.",
    footerLine: "Brazilian treats, desserts & cake in a cup · Worcester, MA",
    privacyTitle: "Privacy",
    privacyBody:
      "This website has no order form or checkout. If you choose WhatsApp or Instagram, those services handle your conversation under their own terms and privacy policies. The site also loads display fonts from Google Fonts; its provider may receive technical request information. Website hosting may process standard technical request logs.",
    termsTitle: "Ordering & delivery details",
    termsBody:
      "Please confirm menu, prices, availability, timing, pickup or delivery options, service area, payment method and any changes directly with Milly before confirming an order. This website does not accept payment and does not create or confirm orders.",
    changesTitle: "Changes, cancellations & refunds",
    changesBody:
      "Ask Milly directly about changes, cancellations or refunds before confirming. This website does not process orders or payments.",
    message: "Hi Milly! I'd love to ask about today's menu and availability.",
    whatsAppCategoryMessage: (category) =>
      `Hi Milly! I'd like to ask about the current ${category} options and availability.`,
  },
  pt: {
    skip: "Pular para o conteúdo",
    nav: { menu: "O cardápio", about: "Sobre a Milly", ordering: "Como pedir", contact: "Contato" },
    languageLabel: "Mudar o idioma para inglês",
    heroEyebrow: "DOCES BRASILEIROS · WORCESTER, MA",
    heroTitle: "Um pedacinho do Brasil, feito com carinho.",
    heroBody:
      "Doces brasileiros, sobremesas e bolo no pote — para deixar ainda mais doces os momentos especiais.",
    heroPrimary: "Pergunte sobre o cardápio",
    heroSecondary: "Explore o cardápio",
    heroImageAlt: "Composição editorial ilustrativa de sobremesas; não é uma foto confirmada de produto",
    imageNote: "Imagens ilustrativas · Consulte as opções de hoje",
    location: "Worcester, Massachusetts",
    scroll: "Tem mais doçura abaixo",
    menuEyebrow: "UM DOCE COMEÇO",
    menuTitle: "Encontre seu tipo de doce.",
    menuBody:
      "Conheça as categorias da Milly Sweets e mande uma mensagem para consultar sabores e disponibilidade de hoje.",
    categoryTitles: {
      treats: "Doces brasileiros",
      cake: "Bolo no pote",
      desserts: "Sobremesas",
    },
    categoryBodies: {
      treats: "Docinhos com inspiração brasileira. Pergunte o que está disponível hoje.",
      cake: "Um doce servido no pote. Consulte a Milly sobre as opções disponíveis.",
      desserts: "Conheça as sobremesas e pergunte o que está disponível no momento.",
    },
    askAbout: "Perguntar sobre esta categoria",
    aboutEyebrow: "UM CARINHO DE WORCESTER",
    aboutTitle: "Um sabor familiar para adoçar o dia.",
    aboutBody:
      "A Milly Sweets leva doces brasileiros e sobremesas a Worcester, Massachusetts. No perfil público, a loja apresenta doces brasileiros, sobremesas e bolo no pote — um convite gostoso para descobrir algo especial ou perguntar o que está disponível.",
    aboutNote: "Feito com carinho pela Milly · Worcester, MA",
    orderEyebrow: "SEM COMPLICAÇÃO",
    orderTitle: "O melhor cardápio é o que está fresquinho hoje.",
    orderBody:
      "Mande uma mensagem e combine os detalhes diretamente com a Milly. Não há checkout online; o pedido só fica confirmado depois da resposta da loja.",
    steps: [
      { title: "Escolha por onde começar", body: "Veja as categorias ou conte à Milly o que você está procurando." },
      { title: "Mande uma mensagem", body: "Fale pelo WhatsApp ou Instagram para perguntar sobre o cardápio de hoje." },
      { title: "Combine os detalhes", body: "Confirme preço, disponibilidade, prazo e opções de retirada ou entrega antes de fechar o pedido." },
    ],
    whatsapp: "Chamar no WhatsApp",
    instagram: "Ver no Instagram",
    faqEyebrow: "BOM SABER",
    faqTitle: "Alguns detalhes úteis.",
    faqs: [
      {
        question: "O que posso pedir hoje?",
        answer: "O perfil público apresenta doces brasileiros, sobremesas e bolo no pote. Pergunte diretamente à Milly sobre o cardápio, sabores e disponibilidade do momento.",
      },
      {
        question: "Tem retirada ou entrega?",
        answer: "Confirme com a Milly quais opções estão disponíveis, a área atendida e os horários antes de fazer o pedido. Este site não promete uma área ou forma de entrega.",
      },
      {
        question: "Como vejo os preços e confirmo o pedido?",
        answer: "Mande uma mensagem pelo WhatsApp ou Instagram. Preços, disponibilidade e detalhes são combinados diretamente com a loja; este site não tem carrinho nem checkout online.",
      },
    ],
    availability: "Cardápio, imagens e disponibilidade podem variar. As imagens das categorias são ilustrativas, não fotos confirmadas dos produtos atuais.",
    footerLine: "Doces brasileiros, sobremesas e bolo no pote · Worcester, MA",
    privacyTitle: "Privacidade",
    privacyBody:
      "Este site não tem formulário de pedido nem checkout. Ao escolher WhatsApp ou Instagram, a conversa é tratada por esses serviços conforme seus próprios termos e políticas de privacidade. O site também carrega fontes visuais do Google Fonts, cujo provedor pode receber dados técnicos da solicitação. A hospedagem pode processar registros técnicos padrão de acesso.",
    termsTitle: "Pedidos e entrega",
    termsBody:
      "Confirme cardápio, preços, disponibilidade, horário, retirada ou entrega, área atendida, forma de pagamento e eventuais alterações diretamente com a Milly antes de confirmar o pedido. Este site não recebe pagamentos nem cria ou confirma pedidos.",
    changesTitle: "Alterações, cancelamentos e reembolsos",
    changesBody:
      "Pergunte diretamente à Milly sobre alterações, cancelamentos ou reembolsos antes de confirmar. Este site não processa pedidos nem pagamentos.",
    message: "Oi, Milly! Gostaria de saber sobre o cardápio e a disponibilidade de hoje.",
    whatsAppCategoryMessage: (category) =>
      `Oi, Milly! Gostaria de saber sobre as opções e a disponibilidade de ${category}.`,
  },
};

const categories: {
  key: CategoryKey;
  image: string;
}[] = [
  { key: "treats", image: "/images/treats.webp" },
  { key: "cake", image: "/images/cake-in-a-cup.webp" },
  { key: "desserts", image: "/images/desserts.webp" },
];

const instagramUrl = "https://www.instagram.com/milly__sweets/";
const whatsappUrl = (message: string) =>
  `https://wa.me/17746081016?text=${encodeURIComponent(message)}`;

function BrandMark() {
  return (
    <span className="brand-lockup">
      <img
        className="brand-mark"
        src="/images/milly-mark.webp"
        alt=""
        width="42"
        height="42"
      />
      <span className="brand-name">Milly <span>Sweets</span></span>
    </span>
  );
}

function SocialLink({ language, label }: { language: Language; label: string }) {
  const t = copy[language];
  return (
    <a className="button button-primary" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer noopener">
      <MessageCircle aria-hidden="true" size={18} />
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];
  const isEnglish = language === "en";

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  }, [isEnglish]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>

      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Milly Sweets, home"><BrandMark /></a>
        <nav className="main-nav" aria-label={isEnglish ? "Main navigation" : "Navegação principal"}>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#how-to-order">{t.nav.ordering}</a>
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            aria-label={t.languageLabel}
            aria-pressed={!isEnglish}
            onClick={() => setLanguage(isEnglish ? "pt" : "en")}
          >
            {isEnglish ? "PT" : "EN"}
          </button>
          <a className="header-instagram" href={instagramUrl} target="_blank" rel="noreferrer noopener" aria-label={t.instagram}>
            <Instagram aria-hidden="true" size={18} />
          </a>
          <a className="header-order" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer noopener">
            <span>{isEnglish ? "Say hello" : "Fale com a Milly"}</span>
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" />{t.heroEyebrow}</p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="hero-description">{t.heroBody}</p>
            <div className="hero-actions">
              <SocialLink language={language} label={t.heroPrimary} />
              <a className="text-link" href="#menu">{t.heroSecondary}<ArrowDown aria-hidden="true" size={15} /></a>
            </div>
            <div className="hero-location"><MapPin aria-hidden="true" size={16} /><span>{t.location}</span></div>
          </div>
          <figure className="hero-visual">
            <img
              src="/images/hero.webp"
              alt={t.heroImageAlt}
              fetchPriority="high"
            />
            <figcaption className="image-caption"><Sparkles aria-hidden="true" size={13} />{t.imageNote}</figcaption>
            <span className="hero-stamp" aria-hidden="true"><span>{isEnglish ? "A SWEET" : "UM DOCE"}</span><strong>{isEnglish ? "hello" : "olá"}</strong><span>♡</span></span>
          </figure>
          <a className="hero-scroll" href="#menu"><span>{t.scroll}</span><ArrowDown aria-hidden="true" size={14} /></a>
        </section>

        <section className="menu-section section-wrap" id="menu" aria-labelledby="menu-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" />{t.menuEyebrow}</p>
              <h2 id="menu-title">{t.menuTitle}</h2>
            </div>
            <p className="section-intro">{t.menuBody}</p>
          </div>
          <div className="category-grid">
            {categories.map(({ key, image }, index) => (
              <article className={`category-card category-card-${index + 1}`} key={key}>
                <a
                  className="category-image-link"
                  href={whatsappUrl(t.whatsAppCategoryMessage(t.categoryTitles[key]))}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${t.askAbout}: ${t.categoryTitles[key]}`}
                >
                  <img src={image} alt={t.imageNote} loading="lazy" />
                  <span className="image-number">0{index + 1}</span>
                  <span className="image-caption category-caption">{t.imageNote}</span>
                </a>
                <div className="category-copy">
                  <span className="category-kicker">{isEnglish ? `CATEGORY 0${index + 1}` : `CATEGORIA 0${index + 1}`}</span>
                  <h3>{t.categoryTitles[key]}</h3>
                  <p>{t.categoryBodies[key]}</p>
                  <a className="category-link" href={whatsappUrl(t.whatsAppCategoryMessage(t.categoryTitles[key]))} target="_blank" rel="noreferrer noopener">
                    {t.askAbout}<ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-footnote">{t.availability}</p>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="about-art" aria-hidden="true">
            <span className="about-art-circle" />
            <span className="about-art-word">with love</span>
            <span className="about-art-heart">♡</span>
            <span className="about-art-line" />
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-mark" />{t.aboutEyebrow}</p>
            <h2 id="about-title">{t.aboutTitle}</h2>
            <p className="about-body">{t.aboutBody}</p>
            <p className="about-signature"><span className="signature-rule" />{t.aboutNote}</p>
            <a className="text-link about-link" href={instagramUrl} target="_blank" rel="noreferrer noopener">
              <Instagram aria-hidden="true" size={17} />{t.instagram}<ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </section>

        <section className="order-section" id="how-to-order" aria-labelledby="order-title">
          <div className="order-inner section-wrap">
            <div className="order-heading">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-mark" />{t.orderEyebrow}</p>
              <h2 id="order-title">{t.orderTitle}</h2>
              <p>{t.orderBody}</p>
              <SocialLink language={language} label={t.whatsapp} />
            </div>
            <ol className="order-steps">
              {t.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </li>
              ))}
              <li className="order-instagram-step">
                <span className="step-number"><Instagram aria-hidden="true" size={17} /></span>
                <div>
                  <h3>{t.instagram}</h3>
                  <p>{isEnglish ? "See more from Milly Sweets and get in touch." : "Veja mais da Milly Sweets e fale diretamente com a loja."}</p>
                  <a href={instagramUrl} target="_blank" rel="noreferrer noopener">@milly__sweets <ArrowUpRight aria-hidden="true" size={14} /></a>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="faq-section section-wrap" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow"><span className="eyebrow-mark" />{t.faqEyebrow}</p>
            <h2 id="faq-title">{t.faqTitle}</h2>
            <div className="faq-contact">
              <span>{isEnglish ? "Have another question?" : "Ficou com alguma dúvida?"}</span>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer noopener">{t.instagram}<ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
          </div>
          <div className="faq-list">
            {t.faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question}>
                <summary><span className="faq-index">0{index + 1}</span><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main section-wrap">
          <div className="footer-brand-block">
            <a className="brand-link footer-brand" href="#top"><BrandMark /></a>
            <p>{t.footerLine}</p>
            <span className="footer-location"><MapPin aria-hidden="true" size={15} />{t.location}</span>
          </div>
          <div className="footer-contact-block">
            <span className="footer-label">{t.nav.contact}</span>
            <a className="footer-phone" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer noopener">+1 (774) 608-1016 <ArrowUpRight aria-hidden="true" size={16} /></a>
            <div className="footer-socials">
              <a href={whatsappUrl(t.message)} target="_blank" rel="noreferrer noopener"><MessageCircle aria-hidden="true" size={16} />WhatsApp</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer noopener"><Instagram aria-hidden="true" size={16} />@milly__sweets</a>
            </div>
          </div>
        </div>
        <div className="footer-policy section-wrap">
          <details>
            <summary>{t.privacyTitle}</summary>
            <p>{t.privacyBody}</p>
          </details>
          <details>
            <summary>{t.termsTitle}</summary>
            <p>{t.termsBody}</p>
          </details>
          <details>
            <summary>{t.changesTitle}</summary>
            <p>{t.changesBody}</p>
          </details>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© {new Date().getFullYear()} Milly Sweets</span>
          <span>{isEnglish ? "A little sweetness, shared with love." : "Um pouquinho de doçura, compartilhado com carinho."}</span>
          <a href="#top">{isEnglish ? "Back to top" : "Voltar ao topo"}<ArrowUpRight aria-hidden="true" size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
