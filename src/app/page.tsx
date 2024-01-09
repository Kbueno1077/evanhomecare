import { api } from "~/trpc/server";
import { HomeSection } from "~/sections/HomeSection/HomeSection";
import { AboutUsSection } from "~/sections/AboutUsSection/AboutUsSection";
import { Footer } from "~/modules/Footer/Footer";
import { ServicesSection } from "~/sections/ServicesSection/ServicesSection";
import { SideButtons } from "~/modules/SideButtons/SideButtons";
import { FloatingButton } from "~/modules/FloatingButton/FloatingButton";

export default async function Home() {

    return (
        <main>
            <SideButtons />

            <div className="flex w-full flex-col items-center">
                <div className="w-full max-w-[1440px] px-5 pb-20 sm:px-10">
                    <HomeSection />
                    <AboutUsSection />
                    <ServicesSection />
                </div>

                <div className="w-full ">
                    <Footer />
                </div>

                <FloatingButton />
            </div>
        </main>
    );
}
