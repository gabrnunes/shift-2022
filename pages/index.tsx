import Faq from "@components/faq/Faq";
import Hero from "@components/hero/Hero";
import Illustration from "@components/illustration/Illustration";
import JoinTheChange from "@components/info/JoinTheChange";
import Intro from "@components/intro/Intro";
import Schedule from "@components/schedule/Schedule";

export default function IndexController() {
    return (
        <>
            <Hero />
            <Illustration />
            <Intro />
            <Schedule />
            <JoinTheChange />
            <Faq />
        </>
    );
}
