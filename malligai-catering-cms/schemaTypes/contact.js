export default {
  name: "contact",
  title: "Contact",
  type: "document",

  fields: [
    {
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "businessHours",
      title: "Business Hours",
      type: "string",
    },
    {
      name: "googleMapsUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste the Google Maps embed URL here.",
    },
  ],
};