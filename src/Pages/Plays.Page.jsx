import React from "react";
import PlayFilter from "../components/PlayFilter/PlayFilter.Component";
import Poster from "../Poster/Poster.Component";

const Plays = () => {
    return(
    <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">
                        Plays in Jhansi, Uttar Pradesh
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                                title="Tvk Cultural presents Ponniyin Selvan"
                                subTitle="Watch on Zoom"
                            />
                        </div>
                    </div>
                </div>

                <div className='lg:w-3/12'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div>
                        <PlayFilter title='Date' tags={["Today", "Tomorrow", "This Weekend"]} />
                    </div>
                    <div>
                        <PlayFilter title='Language' tags={["Hindi", "English", "Punjabi"]} />
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Plays;
