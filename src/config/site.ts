export interface SiteConfig {
  name: string;
  url: string;
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
  };
}

export const siteConfig: SiteConfig = {
  name: "GYMRILLAZ",
  url: "https://gymrillaz.com",
  tagline: "UNLEASH YOUR INNER BEAST",
  description:
    "Parañaque's community strength gym built for heavy lifting, athletic conditioning, bodybuilding, and functional fitness.",
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
    facebook: "https://www.facebook.com/gymrillaz",
    instagram: "https://www.instagram.com/gymrillaz",
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
  { label: "Heavy Dumbbells", value: 60, prefix: "Up to ", suffix: " lbs" },
  { label: "Active Members", value: 200, prefix: "", suffix: "+" },
  { label: "Days Open Weekly", value: 7, prefix: "", suffix: " Days" },
  { label: "Daily Access Hours", value: 13, prefix: "", suffix: " Hours" },
];
