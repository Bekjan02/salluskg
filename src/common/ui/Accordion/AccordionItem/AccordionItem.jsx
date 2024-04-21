import { useRef, useState } from 'react';
import cn from 'classnames';
import './styles.scss';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? 0 : contentRef.current.scrollHeight);
  };

  const ellips = (open) => {
    return (
      <div
        className={cn('w-4 h-4 rounded-full', {
          'bg-[#45651C]': open,
          'bg-[#DFDFDF]': !open,
        })}
      ></div>
    );
  };

  return (
    <div className="accordionItem">
      <button className="" onClick={toggleAccordion}>
        <span>{ellips(isOpen)}</span>
        <span
          className={cn('title SubHeading', {
            'text-main': isOpen,
            'text-green': !isOpen,
          })}
        >
          {title}
        </span>
      </button>
      <div
        className="content bg-white"
        style={{ maxHeight: `${height}px` }}
        ref={contentRef}
      >
        <div className="pt-4 pl-[1.875rem]">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
