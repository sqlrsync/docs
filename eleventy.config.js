import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight, {
	});

	// Create a collection for blog posts
	eleventyConfig.addCollection("posts", function (collectionApi) {
		// Try both possible paths depending on build context
		const blogPosts = collectionApi.getFilteredByGlob("blog/posts/*.md");
		const posts = collectionApi.getFilteredByGlob("posts/*.md");

		// Return whichever one has results
		return blogPosts.length > 0 ? blogPosts : posts;
	});

	// Add date filter for formatting dates
	eleventyConfig.addFilter("date", function (date, format) {
		if (!date) return "";

		const d = new Date(date);

		if (format === "%B %d, %Y") {
			return d.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
		}

		return d.toLocaleDateString();
	});

};

