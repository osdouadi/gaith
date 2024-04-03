import {
  BellRingIcon,
  HomeIcon,
  ListTodoIcon,
  Mail,
  MapPin,
  Phone,
  University,
} from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import {
  LiaGithub,
  LiaLinkSolid,
  LiaLinkedinIn,
  LiaWhatsapp,
} from "react-icons/lia";

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

const footerList: { icon: React.FC<any>; title: string }[] = [
  {
    icon: HomeIcon,
    title: "الواجهة الرئيسية",
  },
  {
    icon: ListTodoIcon,
    title: "نشاطات النادي",
  },
  {
    icon: BellRingIcon,
    title: "الفعاليات و المناسبات القادمة",
  },
  {
    icon: University,
    title: "من نحن؟",
  },
  {
    icon: Phone,
    title: "تواصل معنا",
  },
];

const contactInfo: { icon: React.FC<any>; title: string; value: string }[] = [
  {
    icon: MapPin,
    title: "المقر:",
    value: "جامعة زيان عاشور ولاية الجلفة",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني:",
    value: "Gaith@info.com",
  },
  {
    icon: Phone,
    title: "رقم الهاتف:",
    value: "0557958797",
  },
];

const socialMedia: { icon: React.FC<any>; title: string }[] = [
  {
    icon: LuFacebook,
    title: "فيسبوك",
  },
  {
    icon: LuInstagram,
    title: "إنستغرام",
  },
  {
    icon: FaXTwitter,
    title: "تويتر",
  },
  {
    icon: FaWhatsapp,
    title: "واتساب",
  },
  {
    icon: RiTiktokLine,
    title: "تيك توك",
  },
];

const developerContact: { icon: React.FC<any>; href: string; color: string }[] =
  [
    { icon: LiaGithub, href: "#", color: "#2dba4e" },
    { icon: LiaWhatsapp, href: "#", color: "#075e54" },
    { icon: LiaLinkSolid, href: "#", color: "primary" },
    { icon: LiaLinkedinIn, href: "#", color: "#004182" },
  ];

const developmentTools: { title: string; tools: string[] }[] = [
  {title: "Backend:", tools: ["JavaScript", "Node.js", "Express.js", "JWT"]},
  {title: "Database:", tools: ["MongoDB", "Mongoose"]},
  {title: "Frontend:", tools: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Sass", "MUI"]}
]

export {
  links,
  contentBoxItems,
  footerList,
  contactInfo,
  socialMedia,
  developerContact,
  developmentTools
};
