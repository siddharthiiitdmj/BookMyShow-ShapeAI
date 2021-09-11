import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";
function HomePage() {
    const recommendedMoviesPosters = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
            title: "Fast and Furious 9",
            subTitle: "Action / Adventure / Thriller / Crime",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAzMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njvxxykgbk-portrait.jpg",
            title: "Shang-Chi and the Legend of Ten Rings",
            subTitle: "Action / Adventure / Fantasy",
        },
    ];

    const premierMoviesPosters = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            title: "Rewind",
            subTitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
            title: "Becky",
            subTitle: "English",
        },
    ];

    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto my-8">
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto my-8">
                <PosterSlider
                    posters={recommendedMoviesPosters}
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    darkTheme={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="premier banner"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider
                        posters={premierMoviesPosters}
                        title="Premiers"
                        subtitle="Watch New Movies at home, every Friday"
                        darkTheme={true}
                    />
                </div>
            </div>

        </>
    );
}

export default HomePage;
