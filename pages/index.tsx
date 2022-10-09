import Faq from "@components/faq/Faq";
import Hero from "@components/hero/Hero";
import Illustration from "@components/illustration/Illustration";
import JoinTheChange from "@components/info/JoinTheChange";
import Intro from "@components/intro/Intro";
import Sponsors from "@components/sponsors/Sponsors";
import Schedule from "@components/schedule/Schedule";
import Workshops from "@components/workshops/Workshops";

export default function IndexController() {
    return (
        <>
            <Hero />
            <Illustration />
            <Intro />
            <Schedule />
            <JoinTheChange />
            <Workshops />
            <Faq />
            <Sponsors />
        </>
    );
}
