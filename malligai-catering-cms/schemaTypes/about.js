export default {
  name: "about",
  title: "About",
  type: "document",

  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
};