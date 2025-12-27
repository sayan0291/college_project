function SectionHeading(section){
    return (
        <div>
            <h1 className={`text-2xl md:text-2xl py-2 pl-2 my-2 border-l-4  font-mono font-bold border-black  bg-gradient-to-r from-purple-600 to-slate-400 text-white`}>
                {section.categories}
            </h1>
        </div>
    )
}

export default SectionHeading