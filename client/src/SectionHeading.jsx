function SectionHeading(section){
    return (
        <div className="relative w-fit mx-7 rounded-tl-md rounded-br-md gradient">
            <h2 className="text-white font-bold p-3 text-lg uppercase font-serif">
                {section.categories}
            </h2>
            <span className="absolute -top-1 -right-1 flex">
                <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-sky-500"></span>
            </span>
        </div>
    )
}

export default SectionHeading