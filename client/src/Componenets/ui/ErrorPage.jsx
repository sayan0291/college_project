export default function ErrorPage(){

    return(
        <div className="h-120 flex justify-center items-center m-2">
            <div className="flex flex-col justify-center items-center">
                <p className="text-[clamp(40px,20vw,120px)] text-gray-600">404</p>
                <div className="flex items-center gap-2">
                    <p className="text-red-500 text-[clamp(20px,5vw,30px)]">error!!!</p>
                    <p className="text-slate-500 text-[clamp(15px,5vw,20px)]">page is not avaliable</p>
                </div>
            </div>
        </div>
    )
}