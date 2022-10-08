import Hero from "@components/hero/Hero";
import Illustration from "@components/illustration/Illustration";
import Intro from "@components/intro/Intro";
import Schedule from "@components/schedule/Schedule";

export default function IndexController() {
    return (
        <>
            <Hero />
            <Illustration />
            <Intro />
            <Schedule />
        </>
    );
}
