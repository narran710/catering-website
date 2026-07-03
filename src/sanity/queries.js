export const galleryQuery = `
  *[_type == "gallery"] | order(_createdAt desc){
    _id,
    title,
    caption,
    image
  }
`;

export const aboutQuery = `
  *[_type == "about"][0]
`;

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc)
`;

export const contactQuery = `
  *[_type == "contact"][0]
`;

export const socialQuery = `
  *[_type == "social"][0]
`;