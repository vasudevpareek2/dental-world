export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/doctor-image.jpg",
    alt: "Our dental team",
    category: "Team"
  },
  {
    id: 2,
    src: "/general-dentistry.jpg",
    alt: "General dentistry services",
    category: "Services"
  },
  {
    id: 3,
    src: "/cosmetic.jpg",
    alt: "Cosmetic dentistry",
    category: "Services"
  },
  {
    id: 4,
    src: "/teeth-whitening.jpg",
    alt: "Teeth whitening treatment",
    category: "Services"
  },
  {
    id: 5,
    src: "/doctor-image.jpg",
    alt: "Modern dental equipment",
    category: "Facility"
  },
  {
    id: 6,
    src: "/general-dentistry.jpg",
    alt: "Comfortable treatment rooms",
    category: "Facility"
  }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "General Dentistry",
    description: "Comprehensive routine dental care including checkups, cleanings, fillings, and preventive treatments to maintain optimal oral health.",
    image: "/general-dentistry.jpg",
    category: "Preventive Care",
    features: [
      "Routine dental checkups",
      "Professional teeth cleaning",
      "Dental fillings",
      "Oral health examinations",
      "X-rays and diagnostics"
    ],
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: "2",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures including veneers, bonding, and smile makeovers.",
    image: "/cosmetic.jpg",
    category: "Aesthetic",
    features: [
      "Dental veneers",
      "Composite bonding",
      "Smile makeovers",
      "Gum contouring",
      "Aesthetic restorations"
    ],
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: "3",
    title: "Teeth Whitening",
    description: "Professional teeth whitening treatments for a brighter, more confident smile using safe and effective methods.",
    image: "/teeth-whitening.jpg",
    category: "Aesthetic",
    features: [
      "In-office whitening",
      "Take-home kits",
      "Laser whitening",
      "Custom trays",
      "Stain removal"
    ],
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: "4",
    title: "Root Canal Therapy",
    description: "Advanced root canal treatment to save infected teeth, eliminate pain, and restore function with minimal discomfort.",
    image: "/general-dentistry.jpg",
    category: "Restorative",
    features: [
      "Pain-free procedures",
      "Single-visit RCT",
      "Advanced techniques",
      "Crown restoration",
      "Post-treatment care"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "5",
    title: "Dental Implants",
    description: "Permanent tooth replacement solution using titanium implants that look, feel, and function like natural teeth.",
    image: "/cosmetic.jpg",
    category: "Restorative",
    features: [
      "Single tooth implants",
      "Multiple implants",
      "Implant-supported dentures",
      "Bone grafting",
      "Full arch restoration"
    ],
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    id: "6",
    title: "Orthodontics",
    description: "Comprehensive orthodontic treatment including braces and clear aligners to straighten teeth and correct bite issues.",
    image: "/cosmetic.jpg",
    category: "Corrective",
    features: [
      "Traditional braces",
      "Clear aligners",
      "Invisalign treatment",
      "Retainers",
      "Bite correction"
    ],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  {
    id: "7",
    title: "Oral Surgery",
    description: "Expert surgical procedures including extractions, wisdom teeth removal, and oral pathology treatment.",
    image: "/general-dentistry.jpg",
    category: "Surgical",
    features: [
      "Tooth extractions",
      "Wisdom teeth removal",
      "Oral pathology",
      "Bone grafting",
      "Surgical procedures"
    ],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  },
  {
    id: "8",
    title: "Periodontics",
    description: "Specialized treatment for gum diseases, including scaling, root planing, and gum surgery to restore oral health.",
    image: "/general-dentistry.jpg",
    category: "Preventive Care",
    features: [
      "Gum disease treatment",
      "Scaling and root planing",
      "Gum surgery",
      "Periodontal maintenance",
      "Gum health assessment"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "9",
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care for children, ensuring healthy smiles from an early age with specialized techniques.",
    image: "/general-dentistry.jpg",
    category: "Specialized",
    features: [
      "Child-friendly environment",
      "Preventive care",
      "Fluoride treatments",
      "Sealants",
      "Early orthodontic evaluation"
    ],
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  },
  {
    id: "10",
    title: "Prosthodontics",
    description: "Advanced prosthetic solutions including crowns, bridges, and dentures to restore function and aesthetics.",
    image: "/cosmetic.jpg",
    category: "Restorative",
    features: [
      "Dental crowns",
      "Bridges",
      "Dentures",
      "Partial dentures",
      "Prosthetic restorations"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    id: "11",
    title: "Emergency Dentistry",
    description: "Immediate care for dental emergencies including toothaches, broken teeth, and urgent dental issues.",
    image: "/general-dentistry.jpg",
    category: "Emergency",
    features: [
      "24/7 emergency care",
      "Toothache relief",
      "Broken tooth repair",
      "Dental trauma treatment",
      "Urgent appointments"
    ],
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  },
  {
    id: "12",
    title: "Dental Crowns & Bridges",
    description: "Restore damaged or missing teeth with custom-made crowns and bridges that match your natural teeth perfectly.",
    image: "/cosmetic.jpg",
    category: "Restorative",
    features: [
      "Porcelain crowns",
      "Metal-free crowns",
      "Fixed bridges",
      "Same-day crowns",
      "Custom fabrication"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }
];

export interface CaseStudy {
  id: string;
  title: string;
  patientAge: number;
  problem: string;
  treatment: string;
  procedure: string[];
  results: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  coverImage: string;
  description: string;
  category: string;
  caseStudies: CaseStudy[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "1",
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    shortName: "RCT",
    coverImage: "/general-dentistry.jpg",
    description: "Advanced root canal treatment to save infected teeth and eliminate pain.",
    category: "Restorative Dentistry",
    caseStudies: [
      {
        id: "rct-1",
        title: "Severe Pulpitis Case",
        patientAge: 35,
        problem: "Patient presented with severe toothache, sensitivity to hot and cold, and swelling. X-ray revealed deep caries reaching the pulp chamber with periapical radiolucency.",
        treatment: "Root Canal Therapy with Crown Restoration",
        procedure: [
          "Local anesthesia administered",
          "Access cavity preparation",
          "Pulp extirpation and canal cleaning",
          "Root canal shaping and disinfection",
          "Obturation with gutta-percha",
          "Post and core placement",
          "Crown restoration"
        ],
        results: "Complete resolution of pain and infection. Tooth restored to full function with excellent aesthetics. Patient reported 100% satisfaction with no complications."
      },
      {
        id: "rct-2",
        title: "Traumatic Injury Case",
        patientAge: 28,
        problem: "Patient suffered trauma to anterior tooth causing pulp necrosis and discoloration. Periapical abscess formation observed.",
        treatment: "Root Canal Therapy with Internal Bleaching",
        procedure: [
          "Access through lingual surface",
          "Necrotic pulp removal",
          "Thorough canal debridement",
          "Calcium hydroxide dressing",
          "Final obturation",
          "Internal bleaching procedure",
          "Composite restoration"
        ],
        results: "Successful elimination of infection. Tooth color restored to match adjacent teeth. Patient regained confidence in their smile."
      }
    ]
  },
  {
    id: "2",
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    coverImage: "/cosmetic.jpg",
    description: "Permanent tooth replacement solution using titanium implants.",
    category: "Restorative Dentistry",
    caseStudies: [
      {
        id: "implant-1",
        title: "Single Tooth Replacement",
        patientAge: 45,
        problem: "Patient lost upper premolar due to failed root canal treatment. Adjacent teeth healthy. Patient desired fixed solution without affecting neighboring teeth.",
        treatment: "Single Dental Implant with Crown",
        procedure: [
          "Comprehensive examination and CBCT scan",
          "Treatment planning",
          "Surgical placement of titanium implant",
          "Osseointegration period (3 months)",
          "Abutment placement",
          "Impression taking",
          "Crown fabrication and delivery"
        ],
        results: "Successful osseointegration achieved. Implant restored to full function. Patient extremely satisfied with natural appearance and chewing ability."
      },
      {
        id: "implant-2",
        title: "Multiple Implant Case",
        patientAge: 62,
        problem: "Patient presented with multiple missing teeth in lower arch affecting chewing efficiency and facial aesthetics.",
        treatment: "Multiple Implant Placement with Fixed Prosthesis",
        procedure: [
          "Bone quality assessment",
          "Strategic implant placement (4 implants)",
          "Healing period",
          "Abutment connection",
          "Fixed bridge fabrication",
          "Final prosthesis delivery"
        ],
        results: "All implants successfully integrated. Patient regained full masticatory function and improved facial support. Excellent long-term prognosis."
      }
    ]
  },
  {
    id: "3",
    slug: "extractions",
    name: "Tooth Extractions",
    shortName: "Extractions",
    coverImage: "/general-dentistry.jpg",
    description: "Safe and painless tooth removal procedures.",
    category: "Oral Surgery",
    caseStudies: [
      {
        id: "extract-1",
        title: "Impacted Wisdom Tooth",
        patientAge: 22,
        problem: "Patient presented with severe pain and swelling due to impacted third molar causing pericoronitis and pressure on adjacent tooth.",
        treatment: "Surgical Extraction of Impacted Wisdom Tooth",
        procedure: [
          "Pre-operative assessment and X-ray",
          "Local anesthesia",
          "Flap elevation",
          "Bone removal",
          "Tooth sectioning",
          "Tooth removal",
          "Socket debridement",
          "Suturing"
        ],
        results: "Successful removal with minimal trauma. Post-operative healing uneventful. Patient relieved of pain and discomfort."
      },
      {
        id: "extract-2",
        title: "Non-Restorable Tooth",
        patientAge: 50,
        problem: "Severely decayed molar with extensive bone loss, not suitable for restoration. Patient experiencing recurrent infections.",
        treatment: "Simple Extraction with Socket Preservation",
        procedure: [
          "Clinical and radiographic evaluation",
          "Local anesthesia",
          "Luxation and extraction",
          "Socket curettage",
          "Bone graft placement",
          "Suturing"
        ],
        results: "Tooth successfully removed. Socket preserved for future implant placement. Healing progressing well."
      }
    ]
  },
  {
    id: "4",
    slug: "orthodontics",
    name: "Orthodontics",
    shortName: "Ortho",
    coverImage: "/cosmetic.jpg",
    description: "Comprehensive orthodontic treatment for teeth alignment.",
    category: "Orthodontics",
    caseStudies: [
      {
        id: "ortho-1",
        title: "Malocclusion Correction",
        patientAge: 16,
        problem: "Patient presented with severe crowding, rotated teeth, and Class II malocclusion affecting aesthetics and function.",
        treatment: "Comprehensive Orthodontic Treatment with Fixed Braces",
        procedure: [
          "Diagnostic records (X-rays, photos, impressions)",
          "Treatment planning",
          "Fixed appliance placement",
          "Regular adjustments",
          "Elastic wear for bite correction",
          "Debonding",
          "Retainer placement"
        ],
        results: "Significant improvement in alignment and occlusion achieved. Patient's smile transformed. Functional occlusion established."
      },
      {
        id: "ortho-2",
        title: "Adult Orthodontic Case",
        patientAge: 32,
        problem: "Adult patient with spacing issues and anterior crossbite seeking aesthetic improvement.",
        treatment: "Clear Aligner Therapy",
        procedure: [
          "Digital scanning",
          "Treatment simulation",
          "Custom aligner fabrication",
          "Sequential aligner delivery",
          "Regular monitoring",
          "Retention phase"
        ],
        results: "Successful correction achieved with clear aligners. Patient satisfied with discreet treatment option and improved smile."
      }
    ]
  },
  {
    id: "5",
    slug: "suturing",
    name: "Suturing Techniques",
    shortName: "Suturing",
    coverImage: "/general-dentistry.jpg",
    description: "Advanced suturing techniques for optimal wound healing.",
    category: "Oral Surgery",
    caseStudies: [
      {
        id: "suture-1",
        title: "Post-Extraction Suturing",
        patientAge: 38,
        problem: "Patient required extraction with large socket that needed primary closure to prevent complications and promote healing.",
        treatment: "Primary Closure with Interrupted Sutures",
        procedure: [
          "Socket debridement",
          "Flap mobilization",
          "Tension-free closure",
          "Interrupted sutures placed",
          "Post-operative instructions"
        ],
        results: "Excellent primary healing achieved. No post-operative complications. Patient experienced minimal discomfort."
      },
      {
        id: "suture-2",
        title: "Surgical Flap Closure",
        patientAge: 55,
        problem: "Patient underwent surgical procedure requiring precise flap closure for optimal healing and aesthetics.",
        treatment: "Advanced Suturing with Mattress Technique",
        procedure: [
          "Flap repositioning",
          "Mattress sutures for tension distribution",
          "Interrupted sutures for precise closure",
          "Suture material selection",
          "Proper knot tying"
        ],
        results: "Perfect wound closure achieved. Healing progressed without complications. Excellent aesthetic outcome."
      }
    ]
  },
  {
    id: "6",
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    shortName: "Restorative",
    coverImage: "/teeth-whitening.jpg",
    description: "Comprehensive restorative procedures to restore tooth function and aesthetics.",
    category: "Restorative Dentistry",
    caseStudies: [
      {
        id: "restore-1",
        title: "Full Mouth Rehabilitation",
        patientAge: 58,
        problem: "Patient presented with multiple missing teeth, worn dentition, and compromised occlusion affecting function and aesthetics.",
        treatment: "Comprehensive Restorative Treatment",
        procedure: [
          "Complete oral examination",
          "Treatment planning",
          "Crown and bridge work",
          "Implant-supported restorations",
          "Occlusal adjustment",
          "Final adjustments"
        ],
        results: "Complete restoration of function and aesthetics. Patient regained confidence and ability to eat comfortably."
      },
      {
        id: "restore-2",
        title: "Composite Restorations",
        patientAge: 30,
        problem: "Multiple anterior teeth with caries and old restorations requiring replacement for aesthetic improvement.",
        treatment: "Composite Resin Restorations",
        procedure: [
          "Caries removal",
          "Tooth preparation",
          "Bonding procedure",
          "Layered composite placement",
          "Contouring and finishing",
          "Polishing"
        ],
        results: "Excellent aesthetic results achieved. Restorations blend seamlessly with natural teeth. Patient delighted with outcome."
      }
    ]
  }
];

