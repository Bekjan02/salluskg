import AccordionItem from './AccordionItem/AccordionItem';

export const Accordion = ({ data }) => {
  return (
    <div className="">
      {data.map((item) => (
        <AccordionItem key={item.id} title={item.title}>
          <p className="BodyS tracking-tightest">{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
};
