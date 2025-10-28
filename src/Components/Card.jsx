function Card({cards}) {

  return (
    <div className="mx-4 md:grid md:grid-rows-2 md:grid-cols-2">
      {cards.map((c) => (
        <div key={c.id} className="grid [grid-template-columns:40px_1fr] [grid-template-rows:20px_1fr] gap-2 p-4">
          <svg className="row-span-2  text-orange-500 text-3xl">{c.icon}</svg>
          <h3 className=" font-bold ">{c.Title}</h3>
          <p className="dark:text-stone-400 ">{c.detail}</p>
        </div>

      ))}
    </div>
  );
}

export default Card;
