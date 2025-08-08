function Navbar({ className }) {
  return (
    <>
      <div className=" relative h-100  top-10 left-3 m-3 space-y-18 font-light text-[10px] md:text-[14px] lg:text-[18px]">
        {" "}

        <h2 className="text-[15px] md:text-[16px] lg:text-[18px] m-4">Categorizacion de productos </h2>
        <div className="gap-10 ml-0 md:ml-10 flex flex-row md:flex-none md:flex-col lg:ml-5">
          <div className="space-y-8 list-none">
            <h3 className="font-semibold text-[14px] md:text-[14px] lg:text-[18px] m-4">Color</h3>

            <ul className="space-y-4 mx-3 text-[14px] md:text-[14px] lg:text-[16px]">
              <li>Plateado</li>
              <li>Rojo</li>
              <li>Negro</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="font-semibold text-[14px] md:text-[14px] lg:text-[18px] m-4">Línea</h3>
            <ul className="space-y-4 mx-3 text-[14px] md:text-[14px] lg:text-[16px] m-4">
              <li>Sport</li>
              <li>Camioneta</li>
              <li>pickup</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
