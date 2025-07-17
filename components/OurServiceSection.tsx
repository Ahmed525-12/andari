import React from 'react'
import { FaCogs, FaBullhorn, FaChartLine, FaCheck } from 'react-icons/fa';

interface SectionItem {
    text: string;
  }
  
  interface Section {
    title: string;
    icon: React.ReactNode;
    items: SectionItem[];
  }
export default function OurServiceSection() {
    const sections: Section[] = [
        {
          title: "العمليات التشغيلية",
          icon: <FaCogs className="text-3xl text-teal-500" />,
          items: [
            { text: "الحوكمة" },
            { text: "إدارة المخاطر" },
            { text: "السياسات والإجراءات" },
            { text: "وضع الميكنة" }
          ]
        },
        {
          title: "التواصل والتسويق",
          icon: <FaBullhorn className="text-3xl text-teal-500" />,
          items: [
            { text: "استراتيجية التسويق" },
            { text: "استراتيجية التواصل" },
            { text: "دعم عمليات التسويق" }
          ]
        },
        {
          title: "بناء الاستراتيجيات",
          icon: <FaChartLine className="text-3xl text-teal-500" />,
          items: [
            { text: "أبحاث السوق" },
            { text: "الدراسات المعيارية" },
            { text: "تطوير وتنفيذ الاستراتيجيات" }
          ]
        }
      ];
  return (
   <div className="bg-gray-200 py-19">
 <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center" >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b8acd] mb-3 scroll-mt-20" id='services'>
            نرسم الخرائط            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>
           
        </section>
        <div className="px-12">

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {sections.map((section, index) => (
    <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
      {/* Icon and Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {section.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 text-center">
          {section.title}
        </h3>
      </div>
      
      {/* Items List */}
      <div className="space-y-4">
        {section.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex items-center space-x-3"
          >
            <FaCheck className="text-teal-500 flex-shrink-0" />
            <span className="text-gray-600">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
</div>
   </div>
  )
}
