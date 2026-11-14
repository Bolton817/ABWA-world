export interface ImpactVideo {
  id: string;
  url: string;
  thumbnail: string;
  aspectRatio: "16:9" | "9:16";
  duration: string;
  badge: string;
  title: string;
  description: string;
  locations: string[];
  quote?: string;
  author?: string;
}

export const impactVideos: readonly ImpactVideo[] = [
  {
    id: "De4EcH9gobc",
    url: "https://www.youtube.com/watch?v=De4EcH9gobc",
    thumbnail: "/images/videos/flagship_documentary.jpg",
    aspectRatio: "16:9",
    duration: "9:44",
    badge: "Impact Documentary",
    title: "Hong Kong Volunteers Empowering Communities in Kenya",
    description:
      "In August 2026, Action for a Better World Association (ABWA) welcomed volunteers from Hong Kong to Mathare, Tala, and Matungulu East for a journey of partnership, cultural exchange, and grassroots empowerment, supporting youth art, tailoring, clean water tanks, and sustainable agriculture.",
    locations: ["Mathare, Nairobi", "Tala, Machakos", "Matungulu East"],
  },
  {
    id: "sZ_jfR9xc3Q",
    url: "https://www.youtube.com/watch?v=sZ_jfR9xc3Q",
    thumbnail: "/images/videos/art_mathare.jpg",
    aspectRatio: "16:9",
    duration: "4:26",
    badge: "Arts & Culture",
    title: "Empowering Youth Through Art in Mathare, Kenya",
    description:
      "Started in 2024 in Mathare (Miami Florida), our grassroots art program mentors children and youth in drawing, painting, and mural work, transforming neighborhood walls and equipping young artists with creative skills for sustainable livelihoods.",
    locations: ["Mathare, Nairobi"],
  },
  {
    id: "K8kzORs4_Wk",
    url: "https://www.youtube.com/watch?v=K8kzORs4_Wk",
    thumbnail: "/images/videos/angelina_education.jpg",
    aspectRatio: "16:9",
    duration: "0:40",
    badge: "Education Support",
    title: "Back to School: Angelina's Story of Hope",
    description:
      "Meet 15 year old Form 2 student Angelina Amigado. Before receiving educational sponsorship through ABWA, she had to stay home watching other children walk to class. Today, she attends school every day with pride and dreams of a brighter future.",
    locations: ["Caso Upendo Primary School, Mathare"],
    quote:
      "Before, I used to stay at home and watch other children go to school. Now, because of your kindness, I go to school every day and wear my uniform with pride.",
    author: "Angelina Amigado, Form 2 Student",
  },
  {
    id: "Z29QeApJyow",
    url: "https://www.youtube.com/shorts/Z29QeApJyow",
    thumbnail: "/images/videos/taka_rework_short.jpg",
    aspectRatio: "9:16",
    duration: "1:24",
    badge: "Youth Empowerment",
    title: "Turning Trash Into Fashion in Mathare (Taka Rework)",
    description:
      "Equipped with a new sewing machine from ABWA, Mathare fashion designer Felix Ochieng Diambo (Taka Rework) transforms discarded denim scraps into custom upcycled backpacks while mentoring fellow youth in sustainable design.",
    locations: ["Mathare, Nairobi"],
  },
] as const;

export const flagshipVideo = impactVideos[0];
export const artVideo = impactVideos[1];
export const educationVideo = impactVideos[2];
export const upcyclingShort = impactVideos[3];
