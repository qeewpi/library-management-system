import React from 'react';

const sizes = {
    heading: {
        "3xl": "text-3xl font-bold md:text-3xl sm:text-2xl",
        "2xl": "text-2xl font-semibold md:text-xl",
        "4xl": "text-4xl font-semibold md:text-5xl sm:text-4xl",
        s: "text-sm font-bold",
        xs: "text-xs font-semibold",
        lg: "text-lg font-semibold",
    },
    text: {
        xs: "text-xs font-normal",
        lg: "text-lg font-normal",
        s: "text-sm font-medium",
        "2xl": "text-xl font-medium",
        "3xl": "text-2xl font-medium",
        xl: "text-base font-medium",
    }
};

function BookResults () {
    return (
        <div className="flex flex-col gap-8 rounded-[15px] bg-white py-[68px] pl-[68px] pr-14 md:p-5 flex-grow">
            <div className="ml-5 mt-5 flex flex-col items-start md:ml-2">
                <h1 className={`${sizes.heading["4xl"]} !text-black-900`}>
                    Results for “lorem ipsum”
                </h1>
                <p className={`${sizes.text["xl"]} relative mt-[-1px] !font-normal italic`}>
                    About XX,XXX Books Searched
                </p>
            </div>
            <div className="mb-11 ml-4 grid grid-cols-5 gap-4 md:ml-0 md:grid-cols-3 sm:grid-cols-1 overflow-y-auto max-h-[400px]">
                {[...Array(12)].map((d, index) => (
                    <div key={"userresults" + index} className="flex w-full flex-col items-start gap-2.5">
                        <div className="flex flex-col items-center justify-center self-stretch rounded-[12px] bg-gray-200 px-14 py-[66px] md:p-5" style={{ backgroundImage: "url('img/cardItemPlaceholder.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        </div>
                        <div className="flex flex-col items-start gap-[3px]">
                            <h2 className={`${sizes.heading["lg"]}`}>
                                Title
                            </h2>
                            <p className={`${sizes.text["lg"]} !font-normal`}>
                                Author
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default BookResults;
