import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <>
            <footer className='w-full h-[64px] bg-orange-600 flex pt-3'>
                <div className='grid grid-cols-6 w-full'>
                    <div className='flex w-full col-span-2'>
                        <FacebookOutlined className='text-[40px] text-white ml-4' />
                        <TwitterOutlined className='text-[40px] text-white ml-4' />
                    </div>
                    <div className='flex w-full justify-end col-span-4 pr-4'>
                        <span className='mt-2 text-white ml-6'>AIM Develop Group Co.,Ltd.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent;