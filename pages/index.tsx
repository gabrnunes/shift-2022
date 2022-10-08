import Hero from "@components/hero/Hero";
import Illustration from "@components/illustration/Illustration";
import JoinTheChange from "@components/info/JoinTheChange";
import Intro from "@components/intro/Intro";

export default function IndexController() {
    return (
        <>
            <Hero />
            <Illustration />
            <Intro />
            <JoinTheChange />
        </>
    )
}
