import AccordionItem from './AccordionItem/AccordionItem';

export const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} title={item.title}>
          <p className="BodyS tracking-tightest xl:text-lg">{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
};
