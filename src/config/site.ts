export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    full: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    display: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "GYMRILLAZ",
  tagline: "UNLEASH YOUR INNER BEAST",
  description:
    "Parañaque's premier community gym built for heavy lifting, athletic conditioning, body building, and no-nonsense functional fitness.",
  phone: "+63 960 030 8917",
  phoneRaw: "+639600308917",
  email: "info@gymrillaz.com",
  address: {
    street: "91 Saudi Arabia St.",
    city: "Parañaque",
    region: "Metro Manila",
    postalCode: "1700",
    country: "Philippines",
    full: "91 Saudi Arabia St, Parañaque, 1700 Metro Manila, Philippines",
  },
  hours: {
    weekdays: "8:00 AM – 9:00 PM",
    weekends: "8:00 AM – 9:00 PM",
    display: "8:00 AM – 9:00 PM Daily",
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/639600308917",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Memberships", href: "/memberships" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

export const gymStats = [
  { label: "Heavy Dumbbells (lbs)", value: 60, prefix: "Up to ", suffix: " lbs" },
  { label: "Active Rillaz Community", value: 200, prefix: "", suffix: "+" },
  { label: "Workouts Supported", value: 100, prefix: "", suffix: "% Hardcore" },
  { label: "Daily Access Hours", value: 13, prefix: "", suffix: " hrs/day" },
];
