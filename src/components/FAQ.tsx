import { useState } from 'react';
import plusIcon from '../assets/plus.svg';
import minusIcon from '../assets/minus.svg';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmkldnklco cndkjncac akj va."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
  }
];

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[1104px] lg:px-0 mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div className=" border-b"> 
        {faqData.map((item) => (
          <div key={item.id} className="border-t">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between py-4 sm:py-5 lg:py-6 text-left"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold pr-4 sm:pr-6">
                Q{item.id}. {item.question}
              </span>
              <img
                src={openItem === item.id ? minusIcon : plusIcon}
                alt={openItem === item.id ? "Collapse" : "Expand"}
                className="w-5 h-5 sm:w-6 sm:h-6 faq-icon flex-shrink-0"
              />
            </button>
            {openItem === item.id && (
              <div className="pb-4 sm:pb-5 lg:pb-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};