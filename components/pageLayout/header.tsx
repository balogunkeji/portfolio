export const Header = () => {
    return (
        <div className=" flex justify-between items-center w-full h-[100px] ">
            <div className={'items-center justify-center flex px-[1%] border-2 border-white rounded-full h-1/2'}>
                <h2>Tomisin Balogun</h2>
            </div>
            <h2 className={'link cursor-target'}>Work</h2>
            <h2 className={'link cursor-target'}>About</h2>
        </div>
    );
}