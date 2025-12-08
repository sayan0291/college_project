import footerimage from './assets/footerimage.png'

function Footer(){

    return(
        <footer className='text-center'>
            <div className='flex gap-25 py-7'>
            <img className="h-20 rounded-md" src={footerimage} alt="footer-image" />
            <div>
                <h2 className='text-start text-white font-bold font-serif'>Contact</h2>
                <li className='text-blue-200 text-sm my-1 font-serif hover:text-blue-300'>Department of Computer Science Technology</li>
                <li className='text-blue-200 text-sm my-1 font-serif hover:text-blue-300'>Department of Computer Science Technology</li>
            </div>
            </div>
            <hr className='h-1 bg-white' />
            <p className='my-3 text-white'>&copy; 2025 Dr. Meghnad Saha Institute of Technology, Haldia. Allrights Reserved. Website Design & Maintain by WEB Informatics</p>
        </footer>
    )
}

export default Footer