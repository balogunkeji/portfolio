export const Header = () => {
    return (
        <div className=" flex justify-between items-center w-full h-[100px] ">
            <div className={'items-center justify-center flex px-[1%] border-2 border-white rounded-full h-1/2'}>
                <h2>Tomisin Balogun</h2>
            </div>
            <div className={'flex justify-center space-x-5'}>
                <p className={''}>Work</p>
                <p className={''}>About</p>
            </div>
        </div>
    );
}