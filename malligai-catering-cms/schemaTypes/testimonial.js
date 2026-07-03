export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",

  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "event",
      title: "Event",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
};