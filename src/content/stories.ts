import { CommunityStory } from "@/types";

export const consentChecklist = [
  "The person understands where the story will appear (website and communications) and who can read it.",
  "They have agreed to their name, photo and details being used, or have chosen to remain anonymous.",
  "For anyone under 18, a parent or guardian has agreed in writing.",
  "The story contains no details that could put someone at risk (home location, school schedule, health or private family matters).",
];

export const communityStoriesData: CommunityStory[] = [
  {
    slug: "mathare-youth-creative-voices",
    title: "Painting, Recording and Shaping Community in Mathare",
    subtitle: "Young artists and musicians sharing their work and mentoring younger peers.",
    excerpt:
      "Together with a local youth group in Mathare, young creators are turning spare spaces into places for art lessons, recording music, and planting kitchen gardens.",
    programmeTag: "Youth Empowerment",
    location: "Mathare, Nairobi",
    publishedDate: "2026-10-21",
    heroImage: "/images/heroes/download-19.jpg",
    heroImageAlt: "Youth creative session in Mathare",
    consentVerified: true,
    content: [
      "In Mathare, one of Nairobi's most vibrant and dynamic informal settlements, talent has never been in short supply. What matters is creating room for that talent to be seen and supported.",
      "Through collaborative sessions, local youth mentors lead drawing and painting lessons for neighbourhood children. Working with volunteers, they share practical skills while creating space for honest conversations about leadership, health choices, and future plans.",
      "Alongside the creative workshops, youth groups organise regular clean-ups and tree planting along the Mathare River, demonstrating that community leadership begins right outside the doorway.",
    ],
  },
  {
    slug: "kangundo-women-farming-leadership",
    title: "Sharing Soil Knowledge and Seeds in Kangundo",
    subtitle: "Women farmers collaborating on water efficiency and vegetable diversity.",
    excerpt:
      "Smallholder women farmers in Machakos County are swapping methods on compost timing, pest observation, and drought-resistant vegetable varieties.",
    programmeTag: "Sustainable Agriculture",
    location: "Kangundo, Machakos County",
    publishedDate: "2026-10-21",
    heroImage: "/images/heroes/download-21.jpg",
    heroImageAlt: "Women farmers working together in Kangundo",
    consentVerified: true,
    content: [
      "Farming in Kangundo requires close attention to changing rainfall patterns and soil fertility. When women come together to share seeds and labour, the whole group becomes more resilient.",
      "The farmers focus on practical, low-cost techniques: mulching to preserve moisture, preparing organic compost, and timing manure applications before the rains arrive.",
      "By planting a wider variety of leafy vegetables and legumes, households not only improve their daily nutrition but also produce surplus crops that provide dependable market income.",
    ],
  },
  {
    slug: "umisiiyu-kitchen-gardens-kibwezi",
    title: "Growing Vegetables in a Dry Climate: Umisiiyu Group",
    subtitle: "Practical kitchen gardening in semi-arid Makueni County.",
    excerpt:
      "In Kibwezi, the Umisiiyu Women Group focuses on small-space vegetable gardens that make every drop of collected water count.",
    programmeTag: "Women's Empowerment",
    location: "Kibwezi, Makueni County",
    publishedDate: "2026-10-21",
    heroImage: "/images/heroes/download-22.jpg",
    heroImageAlt: "Kitchen gardens in semi-arid Kibwezi",
    consentVerified: true,
    content: [
      "Kibwezi is known for its warm, dry climate where water is a precious resource. The Umisiiyu Women Group demonstrates how household kitchen gardens can thrive even with limited supply.",
      "By directing water carefully to root zones and utilizing vertical bottle and pipe planting techniques, group members harvest fresh greens for their families throughout the dry months.",
      "The group meets regularly to support one another, discuss savings and group welfare, and welcome exchange visits from other farming communities.",
    ],
  },
];
