function Navbar() {
    return (
        <>
            <div className="p-2 text-gray-100 bg-gradient-to-r from-teal-950 to-yellow-900">
                <div className="items-center justify-between flex mx-3">
                    <div className="">
                        <a className="bebas-regular text-3xl">
                            Tarif Yönetimi
                        </a>
                    </div>
                    <div className="flex gap-4">
                        {/*Vakti gelince bişeyler bulurum*/}
                    </div>
                    <div className="navbar-end">
                        <button
                            className="px-4 py-2 bg-yellow-600/80 backdrop-blur-sm border border-yellow-500/30 text-gray-100 rounded-lg hover:bg-yellow-700/90 transition-colors">
                            <a href="">Yeni Tarif </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;