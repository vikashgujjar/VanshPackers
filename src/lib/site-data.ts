// Centralized, editable content for the Vansh Packers and Movers website.
// Update text, numbers and links here — components and pages read from this file.

import {
  Truck,
  Package,
  Building2,
  Plane,
  Car,
  Warehouse,
  ShieldCheck,
  Clock,
  UserCheck,
  IndianRupee,
  PackagePlus,
  ShieldPlus,
  CalendarClock,
  PackageOpen,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Vansh Packers and Movers",
  shortName: "Vansh Packers",
  phone: "6361847700",
  phoneDisplay: "+91 6361847700",
  whatsapp: "916361847700",
  email: "info@vanshpackersmovers.com",
  address: "#42/1, Muneshwara Layout, Haralukunte, Bangalore – 560068",
  addressLines: ["#42/1, Muneshwara Layout,", "Haralukunte,", "Bangalore – 560068"],
  city: "Bangalore",
  url: "https://www.vanshpackersmovers.com",
};

// Top-level header navigation — Services renders as a dropdown of `services` below.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Editable stat placeholders — replace with verified company figures.
export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Successful Moves" },
  { value: "100%", label: "Customer Focus" },
  { value: "Pan India", label: "Service Network" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  externalUrl: string;
  image: string;
  features: string[];
  longDescription: string[];
};

export const services: Service[] = [
  {
    slug: "local-household-shifting",
    title: "Local Household Shifting",
    description:
      "Safe, efficient packing and moving of household goods within the city with trained staff and proper equipment.",
    externalUrl: "https://anshpackersmovers.com/local-household-shifting/",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Door-to-door packing and moving within the city",
      "Quality packing materials for furniture and appliances",
      "Trained loading and unloading crew",
      "Careful handling of fragile and valuable items",
      "On-time delivery with placement assistance",
    ],
    longDescription: [
      "Moving within the same city still involves plenty of planning — furniture, appliances, kitchenware and fragile items all need to be packed and transported safely. Our local household shifting service is designed to take that pressure off you.",
      "Our trained team surveys your requirement, packs every item using quality materials, and loads them onto well-maintained vehicles for a smooth, damage-free move. We coordinate pickup and delivery timings around your schedule and unload everything at your new home with placement assistance.",
      "Whether it is a compact 1 BHK or a large independent house, we scale our manpower and vehicle size to match your move, keeping the process transparent and affordable from start to finish.",
    ],
  },
  {
    slug: "domestic-shifting-services",
    title: "Domestic Shifting Services",
    description:
      "End-to-end interstate relocation with secure packing, insured transport and real-time move tracking.",
    externalUrl: "https://anshpackersmovers.com/domestic-shifting-services/",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Interstate and long-distance relocation across India",
      "Secure, weatherproof packing for long transit",
      "Real-time shipment tracking and updates",
      "Experienced drivers on long-haul routes",
      "Doorstep pickup and delivery",
    ],
    longDescription: [
      "Relocating to a different city or state brings its own challenges — longer transit times, multiple handling points and the need for sturdier packing. Our domestic shifting service is built specifically for these long-distance moves.",
      "We use weatherproof and impact-resistant packing materials suited for extended road transit, and our vehicles are tracked so you always know where your shipment is. From documentation to final delivery, our team stays in touch with regular updates.",
      "With experience moving households and offices across state lines, we plan routes and timelines carefully to make sure your belongings arrive safely and on schedule.",
    ],
  },
  {
    slug: "corporate-relocation-services",
    title: "Corporate Relocation Services",
    description:
      "Dedicated office and corporate relocation solutions that minimise downtime and protect equipment and files.",
    externalUrl: "https://anshpackersmovers.com/corporate-relocation-services/",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Planned relocation around business working hours",
      "Safe packing of workstations, electronics and files",
      "Labelled inventory for quick office setup",
      "Furniture dismantling and reassembly",
      "Minimal downtime for business continuity",
    ],
    longDescription: [
      "Office relocations are time-sensitive — every hour of downtime affects your business. Our corporate relocation service is planned around your working hours to keep disruption to a minimum.",
      "We carefully pack computers, servers, documents and furniture, labelling everything for a fast, organised setup at your new location. Our team can dismantle and reassemble workstations, cubicles and furniture as part of the move.",
      "From small offices to larger corporate spaces, we work with your facilities team to schedule the move, protect sensitive equipment and get your business running again as quickly as possible.",
    ],
  },
  {
    slug: "international-transportation",
    title: "International Transportation",
    description:
      "Reliable cross-border freight and relocation support with documentation assistance and secure cargo handling.",
    externalUrl: "https://anshpackersmovers.com/international-transportation/",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Support for cross-border relocation and freight",
      "Assistance with shipping documentation",
      "Secure crating and cargo handling",
      "Coordination with shipping and customs partners",
      "Door-to-port and port-to-door support",
    ],
    longDescription: [
      "Moving abroad or shipping cargo internationally involves additional documentation, customs requirements and careful cargo handling. Our international transportation support helps you navigate this process.",
      "We assist with packing and crating goods to shipping standards, help coordinate documentation, and work with trusted logistics partners for onward freight — whether by sea or air.",
      "Our team stays in touch throughout the process so you always know the status of your shipment, from pickup at your doorstep to handover at the port or airport.",
    ],
  },
  {
    slug: "car-bike-transportation",
    title: "Car & Bike Transportation",
    description:
      "Damage-free car and bike transportation on covered carriers with GPS tracking and doorstep delivery.",
    externalUrl: "https://anshpackersmovers.com/car-bike-transportation/",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Covered carriers to protect against weather and dust",
      "GPS-tracked vehicles for live location updates",
      "Careful loading and securing of cars and bikes",
      "Doorstep pickup and delivery",
      "Support for both local and interstate vehicle transport",
    ],
    longDescription: [
      "Driving long distances isn't always practical when you relocate — that's where our car and bike transportation service comes in. We move your vehicle safely using covered carriers designed to protect against weather, dust and road debris.",
      "Every vehicle is inspected, secured and loaded by trained staff, and our carriers are GPS-tracked so you can follow your vehicle's journey. We handle both local and interstate vehicle transport with the same care.",
      "From doorstep pickup to doorstep delivery, we aim for a damage-free experience so your car or bike reaches you in the same condition it left in.",
    ],
  },
  {
    slug: "warehouse-service",
    title: "Warehouse Services",
    description:
      "Short and long-term secure storage with inventory management for household and commercial goods.",
    externalUrl: "https://anshpackersmovers.com/warehouse-service/",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Short-term and long-term secure storage",
      "Clean, monitored warehouse facilities",
      "Proper inventory listing and tracking",
      "Suitable for household and commercial goods",
      "Easy scheduling for storage and retrieval",
    ],
    longDescription: [
      "Sometimes your new home or office isn't ready right away, or you simply need extra space during a transition. Our warehouse services offer secure, clean storage for both household and commercial goods.",
      "Every item that goes into storage is listed and tracked, so retrieval is quick and organised whenever you need it back. Our facilities are monitored to keep your belongings safe for as long as you need.",
      "Whether it's a few weeks of short-term storage during a move or a longer-term arrangement, we work around your timeline.",
    ],
  },
];

// One icon per entry in `services`, in the same order — shared across every
// component that lists or links to a service, so the icon always matches.
export const serviceIcons = [Truck, Package, Building2, Plane, Car, Warehouse];

// Service-page trust strip — what every booking is backed by.
export const servicePromise = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Every shipment covered by transit insurance, no exceptions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Your pickup and delivery dates are locked once confirmed.",
  },
  {
    icon: UserCheck,
    title: "Verified Crew",
    description: "Background-checked, trained staff on every move.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges — the quote you get is what you pay.",
  },
];

// Optional extras a customer can add to any of the six core services.
export const addOnServices = [
  {
    icon: PackagePlus,
    title: "Extra Packing Material",
    description: "Additional boxes, bubble wrap and crates if you need more on moving day.",
  },
  {
    icon: ShieldPlus,
    title: "Full Transit Insurance",
    description: "Comprehensive cover for high-value and fragile items, beyond our standard cover.",
  },
  {
    icon: CalendarClock,
    title: "Priority Scheduling",
    description: "A guaranteed weekend or after-hours slot for a small additional fee.",
  },
  {
    icon: Warehouse,
    title: "Short-Term Storage",
    description: "Keep your goods safely warehoused for a few extra days before delivery.",
  },
  {
    icon: PackageOpen,
    title: "Unpacking & Setup",
    description: "We unpack boxes and arrange furniture at your new place.",
  },
  {
    icon: Wrench,
    title: "Disassembly & Reassembly",
    description: "Furniture and modular units dismantled and rebuilt at the destination.",
  },
];

export const locationServices = [
  "House Shifting",
  "Office Relocation",
  "Local Moving",
  "Vehicle Transportation",
  "Packing Services",
  "Loading & Unloading",
  "Warehouse Services",
  "Door-to-Door Moving",
  "Long Distance Moving",
];

// Neighbourhood-level coverage, used for local-SEO content blocks.
export const areasServed = [
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "Electronic City",
  "HSR Layout",
  "Marathahalli",
  "Jayanagar",
  "Hebbal",
  "Yelahanka",
  "JP Nagar",
];

// A representative subset of `areasServed`, each with real descriptive copy
// rather than a bare label — used on the homepage for local-SEO content.
export const neighborhoodHighlights = [
  {
    area: "Whitefield",
    blurb:
      "One of Bangalore's busiest tech corridors — frequent apartment and office relocation support for IT professionals and businesses.",
  },
  {
    area: "Koramangala",
    blurb:
      "From compact 1 BHKs to independent homes, our household shifting team knows Koramangala's residential layouts well.",
  },
  {
    area: "Indiranagar",
    blurb:
      "Quick, damage-free local moves for homes and boutique offices across Indiranagar's busy commercial streets.",
  },
  {
    area: "Electronic City",
    blurb:
      "Corporate relocation support for IT parks and campuses, plus household shifting for the residential communities nearby.",
  },
  {
    area: "HSR Layout",
    blurb:
      "Reliable local and domestic shifting services for one of Bangalore's most sought-after residential neighbourhoods.",
  },
  {
    area: "Marathahalli",
    blurb:
      "Door-to-door household and office shifting for one of Bangalore's key residential and commercial junctions.",
  },
];

export const whyChooseUs = [
  "Professional Packing",
  "Safe & Secure Handling",
  "Experienced Moving Team",
  "On-Time Delivery",
  "Transparent Process",
  "Door-to-Door Service",
];

export const aboutFeatures = [
  "Professional Packing",
  "Safe Transportation",
  "Experienced Team",
  "Door-to-Door Service",
  "Transparent Process",
  "Customer-Focused Service",
];

// Editable placeholder company timeline — replace with your own milestones.
export const storyMilestones = [
  {
    year: "2014",
    title: "Started in Bangalore",
    description:
      "Began with a single truck and a small team, helping local families move within the city.",
  },
  {
    year: "2017",
    title: "Expanded to interstate moves",
    description:
      "Added domestic shifting across state lines with tracked, insured transport.",
  },
  {
    year: "2019",
    title: "Corporate relocation desk",
    description:
      "Built a dedicated team for office and corporate moves planned around business hours.",
  },
  {
    year: "2021",
    title: "Own fleet & warehousing",
    description:
      "Invested in our own vehicles and a monitored storage facility instead of relying on subcontractors.",
  },
  {
    year: "Today",
    title: "1000+ moves and counting",
    description:
      "A full-service relocation partner for households, businesses and vehicle transport across India.",
  },
];

export const mission =
  "To make relocation simple, transparent and stress-free for every household and business we serve — with trained crews, fair pricing and a single point of contact from quote to delivery.";

export const vision =
  "To be the most trusted packers and movers across India, known for reliability, care for every shipment, and a service experience customers are happy to recommend.";

export const coreValues = [
  {
    title: "Integrity",
    description: "Transparent pricing and honest timelines, every time.",
  },
  {
    title: "Reliability",
    description: "Your move happens exactly when we say it will.",
  },
  {
    title: "Care",
    description: "Every item handled like it's our own.",
  },
  {
    title: "Accountability",
    description: "One point of contact, answerable from quote to delivery.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Free Quote & Consultation",
    description: "Share your move details and get a transparent, no-obligation estimate.",
  },
  {
    number: "02",
    title: "Professional Packing",
    description: "Trained staff pack your belongings using quality materials for maximum safety.",
  },
  {
    number: "03",
    title: "Safe Pickup & Transportation",
    description: "Goods are loaded carefully and transported using well-maintained vehicles.",
  },
  {
    number: "04",
    title: "Secure Delivery",
    description: "Timely, damage-free delivery with unloading and placement assistance.",
  },
];

// Real pricing data — shifting type × distance band. Shared by PricingTable
// (the full heatmap) and InstantEstimate (the quick calculator).
export const distanceBands = [
  { key: "upTo400", label: "Up to 400 km" },
  { key: "km400to800", label: "400 – 800 km" },
  { key: "km800to1300", label: "800 – 1300 km" },
  { key: "km1300to1900", label: "1300 – 1900 km" },
] as const;

export type BandKey = (typeof distanceBands)[number]["key"];

export const pricingRows: Record<"shiftingType" | BandKey, string>[] = [
  { shiftingType: "Complete House Shifting", upTo400: "₹11,000 – ₹22,000", km400to800: "₹12,000 – ₹25,000", km800to1300: "₹13,000 – ₹28,000", km1300to1900: "₹14,000 – ₹30,000" },
  { shiftingType: "1 BHK Shifting Charges", upTo400: "₹6,000 – ₹15,000", km400to800: "₹9,000 – ₹20,000", km800to1300: "₹10,000 – ₹22,000", km1300to1900: "₹11,000 – ₹24,000" },
  { shiftingType: "2 BHK Shifting Cost", upTo400: "₹8,000 – ₹18,000", km400to800: "₹10,000 – ₹25,000", km800to1300: "₹12,000 – ₹24,000", km1300to1900: "₹14,000 – ₹28,000" },
  { shiftingType: "3 BHK Shifting Cost", upTo400: "₹10,000 – ₹25,000", km400to800: "₹11,000 – ₹30,000", km800to1300: "₹13,000 – ₹28,000", km1300to1900: "₹16,000 – ₹34,000" },
  { shiftingType: "4 BHK Shifting Cost", upTo400: "₹15,000 – ₹28,000", km400to800: "₹16,000 – ₹32,000", km800to1300: "₹16,000 – ₹32,000", km1300to1900: "₹26,000 – ₹42,000" },
  { shiftingType: "5 BHK Shifting Charges", upTo400: "₹18,000 – ₹30,000", km400to800: "₹23,000 – ₹40,000", km800to1300: "₹22,000 – ₹38,000", km1300to1900: "₹34,000 – ₹48,000" },
  { shiftingType: "Home + Car Transport", upTo400: "₹12,000 – ₹26,000", km400to800: "₹14,000 – ₹30,000", km800to1300: "₹16,000 – ₹38,000", km1300to1900: "₹19,000 – ₹42,000" },
  { shiftingType: "Car Transportation Charges", upTo400: "₹3,000 – ₹5,000", km400to800: "₹4,000 – ₹7,000", km800to1300: "₹5,000 – ₹9,000", km1300to1900: "₹6,000 – ₹10,000" },
  { shiftingType: "Office Partial Shifting", upTo400: "₹6,000 – ₹15,000", km400to800: "₹9,000 – ₹20,000", km800to1300: "₹10,000 – ₹24,000", km1300to1900: "₹12,000 – ₹28,000" },
  { shiftingType: "Complete Office Relocation", upTo400: "₹11,000 – ₹26,000", km400to800: "₹14,500 – ₹30,000", km800to1300: "₹15,500 – ₹32,000", km1300to1900: "₹18,000 – ₹40,000" },
];

export const faqs = [
  {
    question: "How much do packers and movers charge in Bangalore?",
    answer:
      "Charges depend on the size of your move, distance, volume of goods and the services you choose (packing, loading, transport, unloading, unpacking). Contact us for a free, accurate quote tailored to your requirement.",
  },
  {
    question: "How early should I book movers?",
    answer:
      "We recommend booking at least 5–7 days in advance for local moves and 10–15 days for interstate relocations to ensure preferred dates and smooth planning.",
  },
  {
    question: "Do you provide packing and unpacking services?",
    answer:
      "Yes, our trained team handles complete packing and unpacking using quality materials to protect fragile and valuable items during transit.",
  },
  {
    question: "Do you transport cars and bikes?",
    answer:
      "Yes, we offer dedicated car and bike transportation on covered carriers with GPS tracking for safe, damage-free delivery.",
  },
  {
    question: "Do you provide office relocation services?",
    answer:
      "Yes, we specialise in corporate and office relocation with minimal downtime, careful handling of equipment, files and furniture.",
  },
  {
    question: "Do you provide warehouse services?",
    answer:
      "Yes, we offer secure short-term and long-term warehousing with proper inventory management for household and commercial goods.",
  },
  {
    question: "Do you provide interstate moving services?",
    answer:
      "Yes, our domestic shifting service covers interstate relocations across India with insured transport and real-time tracking.",
  },
  {
    question: "How can I get a moving quote?",
    answer:
      "Simply fill out the quote form on this page or call us at +91 6361847700. Our team will get back to you with a transparent estimate.",
  },
];

// FAQs shown on each individual service page, keyed by `services[].slug`.
export const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "local-household-shifting": [
    {
      question: "How much does local household shifting cost in Bangalore?",
      answer:
        "Local shifting costs depend on the volume of goods, floor level and distance within the city. Share your requirement with us for a transparent, no-obligation estimate.",
    },
    {
      question: "Do you provide packing material for local moves?",
      answer:
        "Yes — our crew brings boxes, bubble wrap, stretch film and other packing material as part of the service.",
    },
    {
      question: "Can you dismantle and reassemble furniture?",
      answer:
        "Yes, our team dismantles large furniture before the move and reassembles it at your new home.",
    },
    {
      question: "How soon can you schedule a local move?",
      answer:
        "We recommend booking 3–5 days in advance for local moves, though we can often accommodate shorter notice depending on availability.",
    },
  ],
  "domestic-shifting-services": [
    {
      question: "How long does an interstate move take?",
      answer:
        "Transit time depends on the distance between cities. We confirm an expected delivery window when your move is booked.",
    },
    {
      question: "Is my shipment insured during interstate transit?",
      answer: "Yes, every domestic shifting move is covered by transit insurance as standard.",
    },
    {
      question: "Can I track my shipment during an interstate move?",
      answer:
        "Yes, our vehicles are tracked and our team shares regular updates until your goods are delivered.",
    },
    {
      question: "Do you handle both packing and transport for interstate moves?",
      answer:
        "Yes, our domestic shifting service covers packing, loading, transport and unloading end to end.",
    },
  ],
  "corporate-relocation-services": [
    {
      question: "Can you relocate our office outside business hours?",
      answer:
        "Yes, we plan corporate moves around your working hours, including weekends and after-hours slots, to minimise downtime.",
    },
    {
      question: "Do you handle IT equipment and sensitive documents?",
      answer:
        "Yes, computers, servers and files are packed and labelled separately for safe, organised handling.",
    },
    {
      question: "Can you dismantle and reassemble workstations and cubicles?",
      answer: "Yes, our team handles dismantling and reassembly of office furniture as part of the relocation.",
    },
    {
      question: "How do you minimise downtime during an office move?",
      answer:
        "We plan the move in phases around your schedule and label everything for a fast, organised setup at the new location.",
    },
  ],
  "international-transportation": [
    {
      question: "Do you assist with customs documentation?",
      answer: "Yes, we help coordinate the documentation needed for cross-border relocation and freight.",
    },
    {
      question: "Do you support both sea and air freight?",
      answer:
        "Yes, we work with logistics partners to offer both sea and air freight options depending on your requirement.",
    },
    {
      question: "How are goods packed for international shipping?",
      answer: "We use crating and packing methods suited to shipping standards to protect goods during longer transit.",
    },
    {
      question: "Can you handle door-to-port and port-to-door moves?",
      answer: "Yes, we support both door-to-port and port-to-door service depending on what you need.",
    },
  ],
  "car-bike-transportation": [
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes, vehicles are covered against transit damage while on our carriers.",
    },
    {
      question: "Do you use open or covered carriers?",
      answer: "We use covered carriers to protect your car or bike from weather and road dust during transport.",
    },
    {
      question: "Can you track my vehicle during transit?",
      answer: "Yes, our carriers are GPS-tracked so you can follow your vehicle's journey.",
    },
    {
      question: "Do you transport vehicles for both local and interstate moves?",
      answer: "Yes, we handle both local and interstate car and bike transportation.",
    },
  ],
  "warehouse-service": [
    {
      question: "What is the minimum storage duration?",
      answer:
        "We accommodate both short-term and long-term storage depending on your needs — talk to us about your timeline.",
    },
    {
      question: "Is my inventory tracked while in storage?",
      answer: "Yes, every item placed in storage is listed and tracked for quick, organised retrieval.",
    },
    {
      question: "Are your warehouses secure and monitored?",
      answer: "Yes, our storage facilities are clean and monitored to keep your belongings safe.",
    },
    {
      question: "Can I store both household and commercial goods?",
      answer: "Yes, our warehouse service is suitable for both household and commercial storage needs.",
    },
  ],
};

// Placeholder testimonials — replace with verified customer reviews.
export const testimonials = [
  {
    name: "Ananya Sharma",
    initial: "A",
    rating: 5,
    review:
      "The team handled our household move carefully and delivered everything on time without any damage. Great communication throughout.",
  },
  {
    name: "Suresh Iyer",
    initial: "S",
    rating: 5,
    review:
      "Booked them for our office relocation. Professional staff, transparent pricing and minimal downtime for our business.",
  },
  {
    name: "Rohit Verma",
    initial: "R",
    rating: 5,
    review:
      "Smooth interstate move with regular updates on the shipment. Would recommend them for long-distance relocations.",
  },
  {
    name: "Priya Nair",
    initial: "P",
    rating: 5,
    review:
      "Shifted my car from Bangalore to Pune on their covered carrier. It arrived without a scratch and the GPS tracking kept me updated the whole way.",
  },
  {
    name: "Vikram Singh",
    initial: "V",
    rating: 5,
    review:
      "Sent my bike home during our relocation. Careful loading, timely doorstep delivery and fair pricing compared to other transporters I checked.",
  },
];

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: { heading: string; body: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-for-stress-free-house-move",
    category: "Moving Tips",
    title: "How to Prepare for a Stress-Free House Move",
    excerpt:
      "A practical checklist covering decluttering, labelling and scheduling so your move day goes smoothly.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Start with a plan, not boxes",
        body: [
          "Most of the stress in a house move comes from starting too late. The moment you know your move date, build a simple timeline working backwards — when to book movers, when to start packing non-essentials, and when to handle address changes and utility transfers.",
          "A two-to-three week runway is usually enough for a local move, and four to six weeks for an interstate relocation.",
        ],
      },
      {
        heading: "Declutter before you pack",
        body: [
          "Packing and moving items you don't actually need adds cost and effort. Go room by room and sort belongings into keep, donate and discard piles before any packing begins.",
          "This step alone can reduce the volume of your move significantly, which also brings your moving cost down.",
        ],
      },
      {
        heading: "Label boxes by room, not just contents",
        body: [
          "Labelling boxes with the destination room (Kitchen, Bedroom 1, Study) rather than just a general description makes unloading and unpacking far quicker. Keep a short master list of what's in each box for anything fragile or important.",
        ],
      },
      {
        heading: "Prepare an essentials bag",
        body: [
          "Pack a separate bag with chargers, medicines, toiletries, important documents and a change of clothes. This way, even if unpacking takes a day or two, your day-to-day essentials are always within reach.",
          "On the day itself, walk through your old home one last time to check cupboards, drawers and storage spaces before the vehicle leaves — it's the easiest way to avoid leaving something behind.",
        ],
      },
    ],
  },
  {
    slug: "pack-fragile-items-safely",
    category: "Packing Guide",
    title: "How to Pack Fragile Items Safely",
    excerpt:
      "Learn the right materials and techniques to protect glassware, electronics and valuables during transit.",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Use the right materials",
        body: [
          "Bubble wrap, packing paper, foam sheets and sturdy double-walled boxes make the biggest difference in protecting fragile items. Avoid using newspaper directly on delicate surfaces — the ink can transfer and the paper offers less cushioning than proper packing paper.",
        ],
      },
      {
        heading: "Wrap items individually",
        body: [
          "Glassware, crockery and decor pieces should be wrapped individually, not just layered together in a box. Fill hollow items like vases and cups with crumpled paper for extra support, and wrap each piece before placing it in the box.",
        ],
      },
      {
        heading: "Box smart: heavy at the bottom, cushioning throughout",
        body: [
          "Place heavier items at the bottom of the box and lighter, more delicate ones on top. Line the base and top of the box with a layer of crumpled paper or foam, and make sure there's minimal empty space — items shifting during transit is a common cause of breakage.",
        ],
      },
      {
        heading: "Handle electronics separately",
        body: [
          "Where possible, pack electronics in their original boxes with the original foam inserts. If that's not available, use anti-static bubble wrap and a snug-fitting box, and clearly mark the box as fragile and 'this side up' where relevant.",
          "For particularly valuable or delicate items, it's worth asking your moving team for specialised crating.",
        ],
      },
    ],
  },
  {
    slug: "things-to-know-before-hiring-packers-movers",
    category: "Guides",
    title: "Things to Know Before Hiring Packers and Movers",
    excerpt:
      "Key questions to ask, documents to check and tips to choose a reliable relocation partner.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Get a clear, itemised estimate",
        body: [
          "A trustworthy moving company should be able to explain how their pricing works — based on volume, distance, floor level and the services you need (packing, loading, transport, unloading, unpacking). Ask for this breakdown in writing before booking.",
        ],
      },
      {
        heading: "Ask about experience with your type of move",
        body: [
          "Local household moves, interstate relocations, office moves and vehicle transportation all involve different planning. Ask whether the company regularly handles moves like yours, and how they manage risks specific to it — for example, long transit for interstate moves or minimal downtime for office relocations.",
        ],
      },
      {
        heading: "Check what happens if something is damaged",
        body: [
          "Understand the company's process for handling damage during transit — how issues are reported, and what support or compensation process is in place. A transparent answer here is usually a good sign of a reliable partner.",
        ],
      },
      {
        heading: "Confirm the timeline in advance",
        body: [
          "Get clarity on pickup date, expected transit time (for long-distance moves) and delivery window. For interstate moves especially, ask how they keep you updated on the shipment's progress.",
          "Booking a few days to a few weeks in advance — depending on the distance — also gives you more flexibility to choose your preferred dates.",
        ],
      },
    ],
  },
];

export const footerServiceLinks = services.map((s) => ({
  title: s.title,
  href: `/services/${s.slug}`,
}));

// Varied keyword phrasing across all six services, shown as a "related
// searches" cloud on the homepage — deliberately uses synonyms (movers /
// packers / shifting / relocation / transportation) rather than repeating
// one exact phrase, and links back into the relevant service page.
export const relatedSearches = [
  { label: "Packers and Movers in Bangalore", href: "/services" },
  { label: "Best Household Shifting Services", href: "/services/local-household-shifting" },
  { label: "Local House Shifting Charges", href: "/services/local-household-shifting" },
  { label: "Home Relocation Services", href: "/services/local-household-shifting" },
  { label: "Domestic Relocation Services India", href: "/services/domestic-shifting-services" },
  { label: "Interstate Packers and Movers", href: "/services/domestic-shifting-services" },
  { label: "Long Distance Moving Company", href: "/services/domestic-shifting-services" },
  { label: "Office Relocation Company Bangalore", href: "/services/corporate-relocation-services" },
  { label: "Corporate Shifting Services", href: "/services/corporate-relocation-services" },
  { label: "Business Move Planning", href: "/services/corporate-relocation-services" },
  { label: "International Moving and Freight", href: "/services/international-transportation" },
  { label: "Cross-Border Relocation Support", href: "/services/international-transportation" },
  { label: "Car Transportation Services Bangalore", href: "/services/car-bike-transportation" },
  { label: "Bike Transport on Carrier", href: "/services/car-bike-transportation" },
  { label: "Vehicle Shifting Company", href: "/services/car-bike-transportation" },
  { label: "Warehouse Storage Solutions", href: "/services/warehouse-service" },
  { label: "Short-Term Goods Storage", href: "/services/warehouse-service" },
  { label: "Affordable Movers and Packers", href: "/services" },
  { label: "Packing and Moving Company", href: "/services" },
  { label: "Door-to-Door Relocation Service", href: "/services" },
];
