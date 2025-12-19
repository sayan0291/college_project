import CampaignIcon from '@mui/icons-material/Campaign';

function Notice(){
    return (
        <div className="mx-5 mt-3 font-serif rounded-bl-4xl bg-blue-200">
            <div className="flex items-center">
                <div className="bg-[#ffff00] h-full flex items-center justify-center rounded-bl-4xl rounded-tr-4xl p-2" style={{ width: '35%' }}>
                    <CampaignIcon className="text-blue-900 rotate-350 mr-2" fontSize='large'/>
                    <h4 className="text-black font-bold text-sm">Latest Notifications</h4>
                </div>
                <div className="w-full flex items-center justify-center px-5">
                    <marquee behavior="" direction="">notice</marquee>
                </div>
            </div>
        </div>
    )
}

export default Notice