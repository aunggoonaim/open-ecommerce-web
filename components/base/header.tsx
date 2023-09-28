import Image from 'next/image';

const HeaderComponent = () => {
    return (
        <>
            <nav className='w-full h-[128px] lg:h-[64px] bg-orange-600'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='h-[64px] w-full flex'>
                        <div className='pt-2 pl-4'>
                            <Image src={'/icon/logo.webp'} alt='Logo website' width={48} height={48} />
                        </div>
                        <h1 className='text-white text-[32px] mt-1 ml-6'>Shopping Online</h1>
                    </div>
                    <div className='h-[64px] w-full flex justify-end pr-4'>
                        <div className='pt-3'>
                            <input type='text' placeholder='Search product' className='w-[300px] h-[36px] px-3 rounded-md' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderComponent;