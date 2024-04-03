import React from "react";
import bgImage from "/public/images/bg-red.jpg";
import Image from "next/image";
import SectionTitle from "../../_ui/SectionTitle";
import Button from "../../_ui/Button";

function ContactSection() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={bgImage}
        alt="contact"
        className="absolute w-full h-full bg-center z-[1]"
        width={1000}
        height={1000}
      />
      <div className="section-content z-[2] absolute right-1/2 translate-x-1/2 ">
        <div>
          <SectionTitle textColor="text-white" title="هل لديك اي أسئلة؟" />
        </div>
        <div className="text-white text-xl">
          <p>
            يمكنكم التواصل مباشرة مع إدارة فريق غيث من خلال إستمارة التواصل
            ادناه
          </p>
        </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2 pt-5 items-center">
            <div>
              <label
                htmlFor="full_name"
                className="block mb-2 text-lg font-medium text-white"
              >
                الإسم الكامل
              </label>
              <input
                type="text"
                id="full_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="الإسم الكامل"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-white"
              >
                البريد الإلكتروني
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="البريد الإلكتروني"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-lg font-medium text-white"
              >
                رقم الهاتف
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="رقم الهاتف"
                required
              />
            </div>
            <div>
              <label
                htmlFor="speciality"
                className="block mb-2 text-lg font-medium text-white"
              >
                التخصص الجامعي
              </label>
              <input
                type="text"
                id="speciality"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="التخصص الجامعي"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-white"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="قم بكتابة رسالتك هنا..."
            ></textarea>
          </div>
          <div className="mx-auto flex justify-center mt-6 pb-10">
            <button className="text-xl bg-primary text-white px-6 py-3 rounded-md">
              إرسال الرسالة
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
