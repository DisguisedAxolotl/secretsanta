module.exports = function(eleventyConfig) {
    // Enable passthrough for CSS files
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addWatchTarget("./views/*");
  
    return {
      dir: {
        input: "views", // Input directory for source files
        output: "_site", // Output directory for the generated site
        includes: "_includes", // Directory for Nunjucks includes
        layouts: "_layouts", // Directory for Nunjucks layouts
      },
      markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
      htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
      dataTemplateEngine: "njk", // Use Nunjucks for data files
    };
  }
  