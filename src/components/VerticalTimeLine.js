import { biographyText } from "@/constants"

const VerticalTimeLine = () => {

    return (
        <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
            <div class="border-l-2">

                {biographyText.paragraph01.map((paragraph, index) => (
                    <>
                        <div key={index} class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-start px-6 py-4 bg-gradient-to-r from-primary/20 dark:from-grey/40 to-transparent text-white rounded-2xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            {/* Dot Follwing the Left Vertical Line */}
                            <div class="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-1/2 rounded-full z-10 mt-2 md:mt-0"></div>

                            {/* Line that connecting the box with the vertical line */}
                            <div class="w-10 h-1 bg-grey/20 dark:bg-primary/40 absolute -left-10 z-0"></div>

                            {/* Content that showing in the box */}
                            <div class="flex-auto">
                                <h1 class="text-xl text-primary dark:text-light font-bold text-justify">{paragraph}</h1>
                            </div>
                        </div></>
                ))}

            </div>
        </div>
    )
}

export default VerticalTimeLine