export const homePageQuery = `
{
  "about": *[_type == "about"][0],
  "gallery": *[_type == "gallery"] | order(_createdAt desc){
    _id,
    title,
    caption,
    image
  },
  "testimonials": *[_type == "testimonial"] | order(_createdAt desc),
  "contact": *[_type == "contact"][0],
  "social": *[_type == "social"][0]
}
`;