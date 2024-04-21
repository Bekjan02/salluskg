import './styles.scss';

export const Hero = () => {
  return (
    <section className="container hero bg-hero bg-no-repeat bg-center min-h-screen pt-40 pb-28">
      <div className="w-80">
        <p className="text-white text-2xl font-medium  font-Archivo">
          Система управления отелями и апартаментами
        </p>
        <p className="text-[4rem] font-bold text-white uppercase font-Archivo">
          salus<span className="text-5xl lowercase">.kg</span>
        </p>
      </div>
      <div className="hero__subInfo">
        <div>
          <h2>Большая база данных</h2>
          <p>
            Большая база данных о строящихся и продаваемых объектах недвижимых
            имуществ в нашем офисе
          </p>
        </div>
        <div className="mt-6">
          <h2>Прямые цены от застройщиков</h2>
          <p>
            Большая база данных о строящихся и продаваемых объектах недвижимых
            имуществ в нашем офисе
          </p>
        </div>
      </div>
    </section>
  );
};
