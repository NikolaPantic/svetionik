import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import FormMini from "../../components/FormMini/FormMini";
import phone from "../../public/images/phones-background.jpg";
import mobileIcon from "../../public/svg/mobile-dark.svg";
import mailIcon from "../../public/svg/mail-dark.svg";
import logo from "../../public/svg/logo.svg";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import reservation from "../../public/images/reservation.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Contact = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : sr;

  return (
    <>
      <Head>
        <title>Kontakt | Hotel Svetionik Obrenovac</title>
        <meta name="title" content="Kontakt | Hotel Svetionik Obrenovac" />
        <meta
          name="description"
          content="Možete nas naći u ulici Zabreških partizana 30 u Obrenovcu, mejlom na hotelsvetionik@gmail.com, ili na broj telefona 0641234567. Dostupni smo svaki dan od 08:00 do 23:00."
        />
        <meta
          name="keywords"
          content="kontakt svetionik, broj svetionik obrenovac, broj hotel svetionik, email svetionik"
        />
        <meta
          property="og:title"
          content="Kontakt | Hotel Svetionik Obrenovac"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Hotel Svetionik Obrenovac" />
        <meta
          property="og:description"
          content="Možete nas naći u ulici Zabreških partizana 30 u Obrenovcu, mejlom na hotelsvetionik@gmail.com, ili na broj telefona 0641234567. Dostupni smo svaki dan od 08:00 do 23:00."
        />
      </Head>
      <article className="pagecontact">
        <PageLayout
          heading={t.common.contact}
          backgroundImageUrl={phone}
          pageLayoutSummary={t.pages.contact.subheading}
        >
          <div className="pagecontact__address-and-image">
            <address className="pagecontact__address">
              <div className="pagecontact__address--logo">
                <Image src={logo} alt="Hotel Svetionik logo" />
              </div>
              <span className="pagecontact__address--heading">
                Hotel Svetionik
              </span>
              <span>Zabreških partizana 30</span>
              <span>11500, Obrenovac</span>
              <div className="pagecontact__address--info">
                <span className="pagecontact__address--card">
                  <Image src={mobileIcon} alt="mobile icon" /> Hotel:{" "}
                  <Link className="backlink" href="tel:+381641234567">
                    0641234567
                  </Link>
                </span>
                <span className="pagecontact__address--card">
                  <Image src={mobileIcon} alt="mobile icon" />{" "}
                  {t.common.restaurant}:{" "}
                  <Link className="backlink" href="tel:+381641234567">
                    0641234567
                  </Link>
                </span>
                <span className="pagecontact__address--card">
                  <Image src={mailIcon} alt="mail icon" />{" "}
                  <Link
                    className="backlink"
                    href="mailto:hotelsvetionik@gmail.com"
                  >
                    hotelsvetionik@gmail.com
                  </Link>
                </span>
              </div>

              <div className="pagecontact__address--work-time">
                <span>{t.common.workingTime}:</span>
                <span>
                  {t.common.workingDays}: <time>08:00</time>-<time>23:00</time>
                </span>
              </div>

              <div className="pagecontact__address--social">
                <a
                  className="clickable-link social"
                  href="fb://facewebmodal/f?href=https://it-it.facebook.com/fcbarcelona/"
                >
                  <Image src={facebook} alt="Facebook logo" />
                  <span>Svetionik Obrenovac na Savi</span>
                </a>
                <Link className="clickable-link social" href="/">
                  <Image src={instagram} alt="Instagram logo" />
                  <span>svetionik_obrenovac_na_savi</span>
                </Link>
              </div>
            </address>
            <div className="pagecontact__image">
              <Image src={reservation} alt="Hotel Svetionik recepcija" />
            </div>
          </div>
          <div className="pagecontact__map">
            <h4 className="heading-small">{t.pages.contact.findUsOnMap}</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.190561748924!2d20.19072301553119!3d44.67488687909958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a14e5d12a9d3d%3A0xf25f1bfe79ba3dfa!2z0KXQvtGC0LXQuyDQodCy0LXRgtC40L7QvdC40Lo!5e0!3m2!1ssr!2srs!4v1674165753674!5m2!1ssr!2srs"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Svetionik mapa"
            />
          </div>
          <h4 className="pagecontact__subheading heading-small">
            {t.pages.contact.contactForm}
          </h4>
          <FormMini />
        </PageLayout>
      </article>
    </>
  );
};

export default Contact;