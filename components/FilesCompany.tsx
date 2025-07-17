'use client';

import React from 'react'
import { Download, FileText } from 'lucide-react';

interface PDFCardData  {
  title: string;
  description: string;
  pdfUrl: string;
  fileName: string;
}
export default function FilesCompany() {
  const pdfCards: PDFCardData[] = [
    {
      title: "الملف التعريفي",
      description: "أندري في شركة استشارات متخصصة وخبرات عميقة. تأسست بأيدي خبراء نخبة أكثر من 50 مشروعاً مختلفاً. الشركة مستلهمة من رؤية المملكة 2030 للمساهمة في تحقيق الرؤى الطموحة. تعمل الشركة على سد الفجوة بين الواقع الحالي والأهداف في خلال التخطيط الدقيق",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      fileName: "company-profile.pdf"
    },
    {
      title: "ملف عن الخطط",
      description: "تختص الشركة في رسم الخرائط ووضع الخطط المناسبة للوصول إلى المستهدفات. لا تكتفي بتقديم خطط عملية مبنية على الواقع محسب، بل نعمل على تنفيذ ونضمن الخطوط نضمن للعميل تحقيقها بالشراكة على تنفيذ هذه الخطط ونضمن للعميل تحقيقها بنجاح",
      pdfUrl: "Ahmed_Sayed.pdf",
      fileName: "planning-strategies.pdf"
    },
    {
      title: "ملف عن الدراسات الحالية",
      description: "نقوم أندري بقراءة الواقع الحالي للعميل كجزء من خدماتها للمساهمة في تطوير، تشمل خدماتها في هذا الإطار إجراء أبحاث السوق والدراسات الميدانية كجزء من بناء الاستراتيجيات. من خلال هذه الدراسات، نعمل على الربط بين الواقع والمستهدفات وتحويل التحديات إلى فرص",
      pdfUrl: "/Ahmed_Sayed.pdf",
      fileName: "current-studies.pdf"
    }
  ];

 
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='bg-gray-200 p-19'>
       <div className="flex flex-col items-center" >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0057B7] mb-3 scroll-mt-20" id='about'>
            ملفات الشركة
            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
{pdfCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col"
            >
              {/* PDF Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center space-y-4" dir="rtl">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>

              {/* Download Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => openInNewTab(card.pdfUrl)}
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>تنزيل الملف</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>



   

  )
}
