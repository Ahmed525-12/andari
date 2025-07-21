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
   
      title:' أنداري',
      text:'‫وبأيدي مجموعة من الخبراء نفذوا أكثر من 50 مشروعاً في مختلف القطاعات. أسسنا شركة استشارية وانطلقنا لنساهم في تحقيق الرؤية من خلال سد الفجوة بين الواقع الحالي والرؤى العظيمة بالتخطيط؛ فالخريطة التي تقود مسيرتك مهمة بقدر الوجهة المستهدفة.',
    },
    {
      title: 'الرؤية',
      text: '‫نسعى لنصبح ضمن أفضل 10 شركات في مجال التخطيط الاستراتيجي في المملكة العربية السعودية، من خلال تقديم خدمات نوعية في بناء الاستراتيجيات ورسم الخطط، مع الالتزام بقيم تأسسنا عليها والانطلاق منها.‬',
    },
  ];
export default function AboutSection() {
  return (
    <div className="bg-gray-200 py-19 flex justify-center  items-center">
    <div className="container ">
        <section className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center" >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0057B7] mb-3 scroll-mt-20 " id='about'>
            عن الشركة
            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>
           
        </section>
        <div className="pt-3 pb-12 flex justify-center  items-center">
  <section className=" p-4  max-w-7xl w-full ">
  <div className="py-12 flex justify-center">
  <div className="max-w-7xl w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center ">
      
      {/* Left: Core Values */}
      <div className="w-full max-w-md lg:max-w-none bg-white rounded-2xl p-6 shadow">
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
      <div className="space-y-6 w-full max-w-md lg:max-w-none">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-16 shadow"
          >
            <h4 className="text-xl font-bold text-blue-800 mb-3">
              {card.title}
            </h4>
            <p className="text-gray-700 leading-relaxed text-md">
              {card.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
  </div>

  </section>
</div>

</div>
    </div>
  )
}
