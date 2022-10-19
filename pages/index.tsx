import Head from "next/head";

import Faq from "@components/faq/Faq";
import Footer from "@components/footer/Footer";
import Hero from "@components/hero/Hero";
import Illustration from "@components/illustration/Illustration";
import JoinTheChange from "@components/info/JoinTheChange";
import Intro from "@components/intro/Intro";
import Sponsors from "@components/sponsors/Sponsors";
import Schedule from "@components/schedule/Schedule";
import Workshops from "@components/workshops/Workshops";
import Floating from "@components/floating/Floating";

export default function IndexController() {
    return (
        <>
            <Head>
                <title>SH*FT FESTIVAL - 03 de dezembro de 2022</title>
                <meta property="og:title" content="SH*FT FESTIVAL - 03 de dezembro de 2022" />
                <meta property="og:url" content="https://shiftfestival.cc" />
                <meta
                    name="description"
                    content="Um festival de criatividade, inovação, futuro e sociedade que reúne pessoas incríveis para discutir ideias que impactam a forma como vivemos."
                />
                <meta
                    property="og:description"
                    content="Um festival de criatividade, inovação, futuro e sociedade que reúne pessoas incríveis para discutir ideias que impactam a forma como vivemos."
                />
                <meta name="twitter:site" content="@shiftfestivalcc" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta property="og:image" content="https://shiftfestival.cc/share-22.png" />
            </Head>
            <Floating />
            <Hero />
            <Illustration />
            <Intro />
            <Schedule />
            <JoinTheChange />
            <Workshops />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}
