type LinkItem = {
  href: string;
  title: string;
  isActive?: boolean;
};

type BoxItems = {
  bgColor: string;
  textColor: string;
  title: string;
  content: string;
  action: boolean;
};

const links: LinkItem[] = [
  { href: "#", title: "الرئيسية" },
  { href: "#", title: "نشاطات النادي" },
  { href: "#", title: "تواصل معنا" },
  { href: "#", title: "من نحن" },
  { href: "#", title: "المدونة" },
];

const contentBoxItems: BoxItems[] = [
  {
    bgColor: "bg-primary",
    textColor: "text-white",
    title: "ما هو نادي غيث؟",
    content: `نادي غيث هو نادي علمي و ثقافي تأسس من طرف مجموعة من الطلاب من مختلف التخصصات الجامعية. 
  مقره جامعة زيان عاشرور ولاية الجلفة. <br/>
   يسعى نادي غيث لتسريخ قيم المعرفة و الفكر الإبداعي داخل الأوساط الجامعية, عن طريق الأنشطة و الفعاليات الميدانية التي يقوم بها النادي خلال الفترو الدراسية الجامعية. <br/>
   تأسس نادي غيث سنة 2022 بكلة الاداب جامعة زيان عاشور ولاية الجلفة.
   <br/>
   <h3>يمكنكم متابعة النادي عن طريق حسابات مواقع التواصل</h3>`,
    action: false,
  },
  {
    bgColor: "bg-white",
    textColor: "text-primary",
    title: "ماهي أهدافنا؟",
    content: `<p>يسعى غيث لتحقيق مجموعة من الأهداف أهمها:</p>
    <ul>
    <li>- تعزيز قيم و روح التعاون بين الطلاب</li>
    <li>- الإرتقاء بالطالب من خلال النشاطات التوعية</li>
    <li>- تنشيط الايام و الأعياد الدينية و الوطنية</li>
    <li>- نشر العلم و الثاقفة في الوسط الجامعي</li>
    <li>- تكوين الطالب و مرافقته في طريق النجاح</li>
     </ul>`,
    action: true,
  },
];

export { links, contentBoxItems };
