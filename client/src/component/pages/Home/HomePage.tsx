import { url } from "inspector";
import React from "react";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FeatureCommon from "../../common/FeatureCommon/FeatureCommon";
import HeroButtonCommon from "../../common/HeroButtonCommon/HeroButtonCommon";
import LogoCommon from "../../common/LogoCommon/LogoCommon";
import Styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
    return (
        <div>
            <NavBarLayout />

            <div className={Styles.main}>
                <div
                    className={Styles.hero_img}
                    style={{
                        backgroundImage: `url("https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/hero/mw_global_asos_design_craft_summer_desktop_desktophero_1258x600.jpg")`,
                    }}
                >

                    <div className={Styles.bghero_holder}>
                        <button className={Styles.hero_holder}>
                            <h2 className={Styles.hero_title}>Spring looks</h2>
                        </button>
                    </div>
                    <div className={Styles.bghero_button}>
                        <HeroButtonCommon
                            title="SHOP NOW"
                            hideboder={true}
                            height="44px"
                        />

                    </div>
                </div>
                <div className={Styles.bgfeature}>
                    <FeatureCommon
                        link="https://www.asos.com/men/trousers-chinos/cargo-trousers/cat/?cid=14273&ctaref=hp|mw|prime|feature|1|category|cargos"
                        img="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_cargos_multi-brand_moment_870x1110.jpg"
                        title="JUST IN: CARGOS"
                        paragraph="Trending trews"
                    />
                    <FeatureCommon
                        link=""
                        img="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_balance_moment_870x1110.jpg"
                        title="NEW BALANCE"
                        paragraph="Mic, no, trainer drop!"
                    />
                    <FeatureCommon
                        link=""
                        img="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_new_in_asos_design_moment_870x1110.jpg"
                        title="FRESH ASOS DESIGN"
                        paragraph="The rizz is real"
                    />
                    <FeatureCommon
                        link=""
                        img="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_licence_moment_870x1110.jpg"
                        title="#TBTEES"
                        paragraph="Big 'I'm with the band' energy"
                    />
                </div>
                <div className={Styles.moment}>
                    <div className={Styles.bgmoment}>
                        <a href="https://www.asos.com/men/ctas/hp-edit-5/cat/?cid=50610&ctaref=hp|mw|prime|moment|1|edit|startofsummer">
                            <img className={Styles.moment_img} src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_start_of_summer_moment_870x1110.jpg" />
                        </a>
                        <h2 className={Styles.moment_title1}>THE HOLIDAY EDIT</h2>
                        <p className={Styles.moment_paragraph1}>Pack me, plz</p>
                        <div className={Styles.moment_btn}>
                            <HeroButtonCommon
                                title="SHOP NOW"
                                hideboder={false}
                                height="60px"
                            />
                        </div>
                    </div>
                    <div className={Styles.bgmoment}>
                        <a href="https://www.asos.com/men/ctas/hp-edit-5/cat/?cid=50610&ctaref=hp|mw|prime|moment|1|edit|startofsummer">
                            <img className={Styles.moment_img} src="https://content.asos-media.com/-/media/homepages/mw/2023/march/13-prime/moments/mw_global_washed_jersey_moment_870x1110.jpg" />
                        </a>
                        <h2 className={Styles.moment_title2}>CASUAL COLLECTION</h2>
                        <p className={Styles.moment_paragraph2}>Work-from-bed essentials</p>
                        <div className={Styles.moment_btn}>
                            <HeroButtonCommon
                                title="SHOP NOW"
                                hideboder={false}
                                height="60px"
                            />
                        </div>
                    </div>
                </div>
                <h2 className={Styles.logo_title}>TRENDINGS BRANDS</h2>
                <div className={Styles.logo}>
                <LogoCommon
                link="https://www.asos.com/men/a-to-z-of-brands/tommy-hilfiger/cat/?cid=5247&ctaref=hp|mw|prime|logo|8|tommyhilfiger"
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg"
                />
                <LogoCommon
                link=""
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png"
                />
                <LogoCommon
                link=""
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png"
                />
                <LogoCommon
                link=""
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg"
                />
                <LogoCommon
                link=""
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg"
                />
                <LogoCommon
                link=""
                img="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg"
                />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
