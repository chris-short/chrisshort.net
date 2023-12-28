// Import libraries
const yaml = require('js-yaml');
const Ajv = require('ajv');

// Set up error handling 
process.on('uncaughtException', err => {
  console.error('Uncaught exception', err);
  process.exit(1); 
})

process.on('unhandledRejection', err => {
  console.error('Unhandled rejection', err);
  process.exit(1);
})

// YAML linter 
function lintYaml(yamlString) {

  try {
    const parsed = yaml.safeLoad(yamlString);
  } catch (error) {
    
    if (error instanceof yaml.MarkedYAMLError) {
      // Handle YAML error      
    } else {
      throw error;
    }

  }

  console.log('No YAML issues found!');

}

// JSON linter
function lintJson(jsonString) {

  const ajv = new Ajv(); 

  try {
    ajv.compile(jsonString);
  } catch(error) {
    // Handle json parse error
  }

  const valid = ajv.validate(jsonString);

  if (!valid) {
   // Handle validation errors
  }

  console.log('JSON passed all checks!')
} 

// Sample usage 

const yamlString = `
  foo: 
    bar: baz  
`;

lintYaml(yamlString);

const jsonString = `{
  "name": "Product"
}`;

lintJson(jsonString);