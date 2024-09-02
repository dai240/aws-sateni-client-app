import React from 'react';

interface TimelineItemProps {
  year: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, description, index }) => (
  <li className="relative list-none mb-10">
    <dl className="relative pl-16 before:absolute before:content-[''] before:w-2 before:h-2 before:bg-[#8EB83C] before:left-1 before:top-3 before:rounded-full after:absolute after:content-[''] after:w-12 after:left-4 after:top-4 after:border-b after:border-dashed after:border-gray-400">
      <dt className="flex items-center text-[#8EB83C] text-lg font-bold mb-2">
        <span className="inline-block ml-5 mr-2 w-8 h-8 bg-[#8EB83C] text-white text-center rounded-full">{index}</span>
        {year}
      </dt>
      <dd className="ml-5 text-left">{description}</dd>
    </dl>
  </li>
);

export default TimelineItem;
