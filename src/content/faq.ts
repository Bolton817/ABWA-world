import { FAQItem } from "@/types";

export interface ExtendedFAQItem extends FAQItem {
  showOnHome?: boolean;
}

export const faqData: ExtendedFAQItem[] = [
  {
    question: "Who is ABWA?",
    answer:
      "Action for Better World Association (ABWA) is a community organisation based in Nairobi, Kenya, founded in 2015. We work with women, young people and children, and with volunteers, on projects around skills, farming, creativity and the environment.",
    category: "About",
    showOnHome: true,
  },
  {
    question: "What does ABWA do?",
    answer:
      "We support community-led projects. Our work includes youth empowerment through art, music and learning support, sustainable vegetable farming and empowerment conversations with women's groups, and environmental action such as tree planting and waste reduction. Our programme pages explain each in more detail.",
    category: "Programmes",
    showOnHome: false,
  },
  {
    question: "Where do you work?",
    answer:
      "We're based in Nairobi. Our project plans involve Mathare in Nairobi, Kangundo in Machakos County and Kibwezi in Makueni County. We work where we have built relationships with community groups.",
    category: "About",
    showOnHome: false,
  },
  {
    question: "Can I volunteer with ABWA?",
    answer:
      "Possibly. Opportunities depend on current projects and on what our community partners want. Send us an enquiry on the Volunteer page and we'll tell you honestly what is available. An enquiry doesn't guarantee a place.",
    category: "Volunteering",
    showOnHome: true,
  },
  {
    question: "Are your work camps open for booking?",
    answer:
      "Not through this website. Our information sheets describe work camps of around two weeks, but dates and availability change and we don't take bookings online. Please contact us to ask what is possible right now.",
    category: "Volunteering",
    showOnHome: false,
  },
  {
    question: "Do I need special skills to volunteer?",
    answer:
      "No special qualifications are needed to ask. Skills in teaching, art, music, farming and environmental work are often useful, but curiosity, respect and a willingness to learn matter most.",
    category: "Volunteering",
    showOnHome: false,
  },
  {
    question: "How much does it cost to volunteer?",
    answer:
      "It depends on the project, and we don't publish prices on this website. We'll explain any costs in writing before you commit, including what they cover.",
    category: "Volunteering",
    showOnHome: false,
  },
  {
    question: "How can I support ABWA's work?",
    answer:
      "We're setting up a secure way to give online. Until then, please contact us and we'll share ABWA's official giving details with you directly. Please only give using details confirmed by ABWA.",
    category: "Giving",
    showOnHome: true,
  },
  {
    question: "How can my organisation partner with ABWA?",
    answer:
      "Use the Partner With Us page to start a conversation. We like to begin by understanding shared goals, and then talk about what a partnership could look like.",
    category: "Partnership",
    showOnHome: false,
  },
  {
    question: "How do you protect children and people's privacy?",
    answer:
      "We ask for consent before sharing anyone's photo, name or story, and for children we ask for a parent or guardian's consent. We don't share details that could put someone at risk. If you would like something removed, please contact us.",
    category: "Safeguarding",
    showOnHome: false,
  },
  {
    question: "What happens to the information I send you?",
    answer:
      "We use it only to reply to you. Our Privacy Policy explains what we collect, why, and what choices you have.",
    category: "Privacy",
    showOnHome: false,
  },
  {
    question: "How do I get in touch?",
    answer:
      "You can call +254 733 595 906 or use the form on our Contact page. We're based in Nairobi, Kenya.",
    category: "Contact",
    showOnHome: true,
  },
];
