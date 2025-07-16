import React from 'react'
import {
    FaEye,
    FaChartLine,
    FaShieldAlt,
    FaTrophy,
  } from 'react-icons/fa';
  
  const valueItems = [
    { icon: <FaEye size={32} className="text-[#1FD2AA]" />, label: 'الشفافية' },
    { icon: <FaChartLine size={32} className="text-[#1FD2AA]" />, label: 'التطوير' },
    { icon: <FaShieldAlt size={32} className="text-[#1FD2AA]" />, label: 'الاعتمادية' },
    { icon: <FaTrophy size={32} className="text-[#1FD2AA]" />, label: 'الإنجاز' },
  ];
  
  const infoCards = [
    {
      title: 'الانطلاقة',
      text: 'في ظل عالم مترمم بالأحداث والمتغيرات كنا بحاجة لمن يرسم لنا رؤية ويُمهد لنا طريقنا للخروج من الضباب. ANDARI تجسد هذا الأمر في رؤية المملكة 2030 ومن هنا انطلقنا',
    },
    {
      title: 'الفريق المؤسس',
      text: 'يبذل فريق من الخبراء نفذوا أكثر من 50 مشروعاً في مختلف القطاعات. أسسنا شركة استشارية وانطلقنا للمساهمة في تحقيق الرؤية من خلال سد الثغرات بين الواقع الحالي والرؤى العظيمة بالتخطيط الخريطة التي تقود مسيرات مهمة بقدر الوجهة المستهدفة.',
    },
    {
      title: 'الرؤية',
      text: 'يبذل فريق من الخبراء نفذوا أكثر من 50 مشروعاً في مختلف القطاعات. أسسنا شركة استشارية وانطلقنا للمساهمة في تحقيق الرؤية من خلال سد الثغرات بين الواقع الحالي والرؤى العظيمة بالتخطيط الخريطة التي تقود مسيرات مهمة بقدر الوجهة المستهدفة.',
    },
  ];
export default function AboutSection() {
  return (
    <div className="container">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center" >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0057B7] mb-3 scroll-mt-20" id='about'>
            عن الشركة
            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>
           
        </section>
<div className="flex flex-col items-center">

        <section className="bg-gray-50 p-19  rounded-2xl ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Left: Core Values */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-xl font-bold text-blue-800 text-right mb-6">
          القيم الأساسية
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
          {valueItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
            >
              {item.icon}
              <span className="mt-2 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-20 text-center text-blue-800 text-lg font-semibold">
          هكذا نحن وهكذا نرى أنفسنا
        </p>
      </div>

      {/* Right: Info Cards */}
      <div className="space-y-6">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h4 className="text-lg font-bold text-blue-800 mb-2">
              {card.title}
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  </div>

    </div>
  )
}
