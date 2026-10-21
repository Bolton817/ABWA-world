import { Programme } from "@/types";

export const programmesData: Programme[] = [
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment and Skills",
    subtitle: "Art, music, learning and community action with young people in Mathare, Nairobi.",
    summary: "Art, music, learning support and community action with young people in Mathare, Nairobi.",
    location: "Mathare, Nairobi",
    status: "Active",
    heroImage: "/images/heroes/download-19.jpg",
    heroImageAlt: "Young people engaged in creative art, music, and learning in Mathare",
    description:
      "Together with a local youth group, ABWA creates space for young people to build skills, share their talents and take part in the life of their community.",
    context: [
      "Mathare is one of the oldest and largest informal settlements in Nairobi. Like many neighbourhoods with limited infrastructure and few job opportunities, it is also full of talent, energy and ideas.",
      "Young people here are already making things, organising and learning from each other. This programme aims to back what they are already doing, with skills, mentoring and a wider circle of people to learn with.",
    ],
    whatHappens: [
      {
        title: "Art and music",
        items: [
          "Drawing and painting lessons for children and interested young people, led by art teachers with volunteers",
          "Music production, where volunteers and local young people record and perform together",
        ],
      },
      {
        title: "Learning and mentoring",
        items: [
          "Mentors working with teenage girls on health education and on making informed choices about their lives",
          "Volunteers supporting teachers in local primary and secondary schools",
          "Conversations about leadership, money decisions and having a say in your own future",
        ],
      },
      {
        title: "Community and environment",
        items: [
          "Tree planting along the Mathare River and nearby",
          "Waste management and recycling, including making useful products from waste plastic",
          "Kitchen gardens: growing vegetables in plastic bottles and pipes in small urban spaces",
        ],
      },
      {
        title: "Sharing and cultural exchange",
        items: [
          "Sport, games, shared meals and outings that let young people and volunteers swap traditions and challenge stereotypes.",
        ],
      },
    ],
    aims: [
      "Help young people build creative and practical skills",
      "Support informed life choices and health education",
      "Encourage participation in local community decisions",
      "Improve and care for the local neighbourhood environment",
    ],
    relatedSlug: "environmental-conservation",
  },
  {
    slug: "womens-empowerment-sustainable-agriculture",
    title: "Women's Empowerment and Sustainable Agriculture",
    subtitle: "Farming skills, shared learning and stronger livelihoods with a women's group in Kangundo, Machakos County.",
    summary: "Practical farming knowledge and shared learning with a women's group in Kangundo, Machakos County.",
    location: "Kangundo, Machakos County",
    status: "Active",
    heroImage: "/images/blog/blog-sustainable-farming.jpg",
    heroImageAlt: "Women's group members preparing vegetable farming beds in Kangundo",
    description:
      "Women and volunteers learn from each other about growing vegetables well, caring for the land, and making confident decisions about income and community life.",
    context: [
      "Farming is central to life in much of Kenya. Many smallholder farmers have limited access to modern tools and up-to-date information, which can mean uncertain harvests and unpredictable income.",
      "This programme works with a women's group in Kangundo. The group's knowledge of local soil, weather and crops is the starting point. Volunteers join in, share ideas and help with the work.",
    ],
    whatHappens: [
      {
        title: "Vegetable farming",
        items: [
          "Choosing vegetable varieties that suit the local climate",
          "Preparing land and soil, including when to add manure or fertiliser",
          "Managing pests and diseases with care for the wider environment",
          "Watering, using local water sources well",
        ],
      },
      {
        title: "Women's empowerment conversations",
        items: [
          "Leadership and decision-making",
          "Financial investment and income",
          "Access to health services and information",
          "Rights and protections, and the freedom to make your own choices",
        ],
      },
      {
        title: "Cultural exchange",
        items: [
          "Kamba traditions such as drumming, wood carving and beadwork, along with storytelling, games, hill walks and cooking together.",
        ],
      },
    ],
    aims: [
      "Support food security and improved nutrition for farming households",
      "Build sustainable vegetable yields adapted to changing weather",
      "Strengthen women's collective voice in farming and household finances",
      "Practice eco-friendly pest management protecting local pollinators and water",
    ],
    relatedSlug: "umisiiyu-women-group",
  },
  {
    slug: "umisiiyu-women-group",
    title: "Umisiiyu Women Group",
    subtitle: "Vegetable farming and kitchen gardens with a women's group in Kibwezi, Makueni County.",
    summary: "Vegetable farming and kitchen gardens with a women's group in Kibwezi, Makueni County.",
    location: "Kibwezi, Makueni County",
    status: "Active",
    heroImage: "/images/programs/umisiiyu-hero.svg",
    heroImageAlt: "Umisiiyu Women Group tending to drought-resilient kitchen gardens in Kibwezi",
    description:
      "A women's farming group with a long record of welcoming volunteers shares its knowledge of growing food in a dry climate.",
    context: [
      "The Umisiiyu Women Group is based in Kibwezi, in Makueni County in eastern Kenya, and its members farm together. According to the group's own history, it began in 2015, after a long drought and the end of charcoal burning, which had been a main source of family income, left many households looking for new ways to earn.",
      "ABWA's role is to support the group's farming and to welcome volunteers who want to learn from the women's experience.",
    ],
    whatHappens: [
      {
        title: "Vegetable farming and kitchen gardens",
        items: [
          "Selecting vegetables that suit the local climate",
          "Preparing land and timing manure and fertiliser",
          "Managing pests and diseases together",
          "Watering and using local water sources wisely",
        ],
      },
      {
        title: "Women's empowerment conversations",
        items: [
          "Leadership and shared decisions",
          "Financial planning and small enterprise",
          "Access to health information and personal choices",
        ],
      },
      {
        title: "Cultural exchange",
        items: [
          "Akamba crafts, drumming, storytelling, hill walks and shared cooking.",
        ],
      },
    ],
    aims: [
      "Promote food security and kitchen garden vegetables in dry climates",
      "Optimize water conservation and drought-adapted growing techniques",
      "Strengthen group solidarity and shared household incomes",
    ],
    relatedSlug: "womens-empowerment-sustainable-agriculture",
  },
  {
    slug: "environmental-conservation",
    title: "Environmental Conservation",
    subtitle: "Planting trees, reducing waste and giving everyday materials a second life.",
    summary: "Tree planting, waste management and creative recycling with local groups.",
    location: "Mathare and nearby",
    status: "Active",
    heroImage: "/images/heroes/download-22.jpg",
    heroImageAlt: "Community tree planting and plastic waste recycling activity in Nairobi",
    description:
      "Looking after the environment is part of everything we do. Here is how we do it with local groups.",
    context: [
      "Clean surroundings, shade, healthy soil and safe water matter to everyone, and they matter most in places with limited public services.",
      "Our environmental work is led together with local groups, so that it reflects what they want to see in their own neighbourhoods.",
    ],
    whatHappens: [
      {
        title: "Tree planting",
        items: [
          "Planting trees together with local young people, including along the Mathare River and nearby areas.",
        ],
      },
      {
        title: "Waste management and recycling",
        items: [
          "Helping communities reduce, sort and reuse waste, including making useful and beautiful products from waste plastic.",
        ],
      },
      {
        title: "Growing food sustainably",
        items: [
          "Kitchen gardens in small urban spaces, and sustainable vegetable farming that uses local water sources carefully.",
        ],
      },
    ],
    aims: [
      "Help communities care for their local environment",
      "Reduce waste and demonstrate creative reuse opportunities",
      "Demonstrate the practical connection between healthy surroundings and resilient livelihoods",
    ],
    relatedSlug: "youth-empowerment",
  },
];
