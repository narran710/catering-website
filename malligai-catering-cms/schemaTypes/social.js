export default {
  name: "social",
  title: "Social Media",
  type: "document",

  fields: [
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    },
    {
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    },
  ],
};