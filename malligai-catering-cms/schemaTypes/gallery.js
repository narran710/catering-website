export default {
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Image Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Gallery Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 3,
    },
  ],
};