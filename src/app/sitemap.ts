import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kshitijg.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about_me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/project/as-you-gaze-upon-her`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/dr-donato`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/project-1240`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/agentic-design-system`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/al-makhilah`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/audit-for-lifesciences`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/behno-new-york`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/in-their-wake`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/provantis-13`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/shuwa`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/project/subko`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
