// src/data/partners.ts

export interface Partner {
  id: string;
  name: string;
    experience: number;
  role: string;
  image: string;
  intro: string;
  journey: string[];
  quote?: string;
}

export const partners: Partner[] = [
  {
    id: "Rohit K. Choksi",
    name: "Rohit K. Choksi",
    experience: 46,
    role: "B.Com, FCA",
    image: "https://www.gkcco.com/wp-content/uploads/2025/12/Picture4.jpg",
    intro:
      "Rohit Choksi, proficient in Tax and Business Advisory, specializes in International taxation, mergers and acquisitions, over and above handling search related cases.",
    journey: [
      "His guidance for transnational organization and leading Indian organizations across sectors such as pharmaceuticals, infrastructure and Export Trading House, Fast Moving Consumer Goods, Information Technology, IT Enabled Services and Financial Services, on complex Tax and regulatory matters is remarkable.",
      "Member of the Indian Council of Arbitration and on the Panel of Arbitrators of The Council.",
      "Member of the Executive Committee of Income Tax Appellate Tribunal Bar Association.",
      " A Member of Direct Tax Committee of Gujarat Chamber of Commerce and Industry."
    ],
    quote: "Build businesses that solve real problems."
  },

  // ADD 7 MORE PARTNERS HERE
];
