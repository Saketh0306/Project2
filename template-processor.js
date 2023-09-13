// Create a TemplateProcessor class
function TemplateProcessor(template) {
  this.template = template;
}

// Define the fillIn method for the TemplateProcessor class
TemplateProcessor.prototype.fillIn = function (dictionary) {
  // Use a regular expression to find and replace {{property}} with values from the dictionary
  return this.template.replace(/\{\{(.*?)\}\}/g, function (match, property) {
    // Check if the property exists in the dictionary, and replace it with the corresponding value
    if (dictionary.hasOwnProperty(property)) {
      return dictionary[property];
    } else {
      // If the property is not defined, replace it with an empty string
      return '';
    }
  });
};

// Example usage:
const template = "Hello, {{name}}! This {{undefinedProperty}} is cool.";
const templateProcessor = new TemplateProcessor(template);
const dictionary = { name: "John" };
const filledTemplate = templateProcessor.fillIn(dictionary);
console.log(filledTemplate);
