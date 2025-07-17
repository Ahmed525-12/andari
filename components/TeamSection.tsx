import React from 'react'
import Image from 'next/image'
import WorkingMethodologyImage from '../public/453edccb24dfe89dfd11a09fbdbc6b3f62bda2fd.jpg' 

export default function TeamSection() {
  return (
   <div className="py-19">
     <div className="flex flex-col items-center" >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b8acd] mb-3 scroll-mt-20" id='team'>
            فريق العمل          
            </h2>
            <div className="mt-2 w-25 h-1 bg-[#1FD2AA]"></div>
            </div>

    <div className="p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
         
            <div className="bg-gray-200  rounded-lg p-6 shadow-sm">
            <div className="text-center">
            <Image
        src={WorkingMethodologyImage}
        alt="Hero Image"
       
        className="w-32 h-32 object-cover  mx-auto rounded-full "
        priority
      />
            </div>
            <h3 className="text-xl font-bold text-center text-blue-800 mb-4 pt-5">أحمد العتيبي</h3>
            <p className="text-stone-600 text-center">مستشار استراتيجي بخبرة تزيد عن 10 سنوات في تطوير الأعمال.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-200  rounded-lg p-6 shadow-sm">
            <div className="text-center">
            <Image
        src={WorkingMethodologyImage}
        alt="Hero Image"
       
        className="w-32 h-32 object-cover  mx-auto rounded-full "
        priority
      />
            </div>
            <h3 className="text-xl font-bold text-center text-blue-800 mb-4 pt-5">أحمد العتيبي</h3>
            <p className="text-stone-600 text-center">مستشار استراتيجي بخبرة تزيد عن 10 سنوات في تطوير الأعمال.</p>
            </div>
            <div className="bg-gray-200  rounded-lg p-6 shadow-sm">
            <div className="text-center">
            <Image
        src={WorkingMethodologyImage}
        alt="Hero Image"
       
        className="w-32 h-32 object-cover  mx-auto rounded-full "
        priority
      />
            </div>
            <h3 className="text-xl font-bold text-center text-blue-800 mb-4 pt-5">أحمد العتيبي</h3>
            <p className="text-stone-600 text-center">مستشار استراتيجي بخبرة تزيد عن 10 سنوات في تطوير الأعمال.</p>
            </div>
            <div className="bg-gray-200  rounded-lg p-6 shadow-sm">
            <div className="text-center">
            <Image
        src={WorkingMethodologyImage}
        alt="Hero Image"
       
        className="w-32 h-32 object-cover  mx-auto rounded-full "
        priority
      />
            </div>
            <h3 className="text-xl font-bold text-center text-blue-800 mb-4 pt-5">أحمد العتيبي</h3>
            <p className="text-stone-600 text-center">مستشار استراتيجي بخبرة تزيد عن 10 سنوات في تطوير الأعمال.</p>
            </div>
        </div>
    </div>
   </div>
  )
}
