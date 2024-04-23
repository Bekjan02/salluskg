import './styles.scss';

export const Hero = () => {
  return (
    <section className="hero bg-hero bg-no-repeat bg-center bg-cover min-h-screen pt-40 pb-28  lg-md:min-h-fit">
      <div className="container ">
        <div className="w-80 lg-md:w-min full-hd:w-[630px]">
          <p className="text-white text-2xl font-medium font-Archivo lg-md:text-[32px] lg-md:leading-[50px] full-hd:text-5xl">
            Система управления отелями и апартаментами
          </p>
          <p className="text-[4rem] font-bold text-white uppercase font-Archivo lg-md:text-8xl full-hd:text-9xl">
            salus
            <span className="text-5xl lowercase lg-md:text-[64px] full-hd:text-8xl">
              .kg
            </span>
          </p>
        </div>
        <div className="hero__subInfo">
          <div className="lg-md:w-[70%]">
            <h2>Большая база данных</h2>
            <p>
              Большая база данных о строящихся и продаваемых объектах недвижимых
              имуществ в нашем офисе
            </p>
          </div>
          <div className="mt-6 lg-md:mt-0">
            <h2>Прямые цены от застройщиков</h2>
            <p>
              Большая база данных о строящихся и продаваемых объектах недвижимых
              имуществ в нашем офисе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
