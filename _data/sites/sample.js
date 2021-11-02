module.exports = {
	name: "Websites", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 48, // (in minutes), 23 hours
	},
	urls: ["https://www.saneef.com/"],
};
