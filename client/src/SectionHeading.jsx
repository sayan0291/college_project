function SectionHeading(section){
    return (
        <div className={`${section.color}`}>
            <h1 class={`text-2xl md:text-2xl pl-2 my-2 border-l-4  font-mono font-bold border-black ${section.textcolor}`}>
                {section.categories}
            </h1>
        </div>
    )
}

export default SectionHeading