function SectionHeading(section){
    return (
        <div>
            <h1 className={`text-xl md:text-2xl p-2 my-2 border-l-4 font-mono font-bold border-black bg-gradient-to-r from-purple-600 to-slate-300 text-white`}>
                {section.categories}
            </h1>
        </div>
    )
}

export default SectionHeading