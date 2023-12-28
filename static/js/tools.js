// HTML Elements  
const editor = document.getElementById('editor'); 
const select = document.getElementById('actionSelect');
const runButton = document.getElementById('runButton');

// Import parsers
import YAML from 'yamljs';  
import markdownlint from 'markdownlint';
import htmlLint from 'html-lint';
import CSSLint from 'csslint';
import eslint from 'eslint';

// Lint actions  
const actions = {

  lintYaml: {
    name: 'Lint YAML',
    action: lintYaml
  },

  lintJson: {
    name: 'Lint JSON', 
    action: lintJson
  },
   
  lintMarkdown: {
    name: 'Lint Markdown',
    action: lintMarkdown
  },

  lintHtml: {
    name: 'Lint HTML',
    action: lintHtml
  },

  lintCss: { 
    name: 'Lint CSS',
    action: lintCss
  },

  lintJs: {
    name: 'Lint JavaScript',
    action: lintJs
  },

  lintPython: {
    name: 'Check Python',
    action: checkPython
  },

  lintJava: {
    name: 'Check Java',
    action: checkJava 
  },

  lintGo: {
    name: 'Check Go',
    action: checkGo
  },

  encodeBase64: {
    name: 'Base64 Encode',
    action: encodeBase64 
  },
   
  decodeBase64: {
    name: 'Base64 Decode',
    action: decodeBase64
  }  

};

// Helper functions

function encodeBase64(content) {
  return btoa(content); 
}
   
function decodeBase64(content) {
 return atob(content);
}

// Linters & Syntax Checkers

function lintYaml(content) {
  YAML.load(content);
  alert('No YAML issues!');
} 

// Other linting functions...

// Populate select menu 
Object.values(actions).forEach(action => {
  const option = document.createElement('option'); 
  option.value = action.name;
  option.text = action.name;
  select.add(option);
});

// Run button click handler
runButton.addEventListener('click', () => {
  
  const action = actions[select.value.toLowerCase().replace(/\s/g, '')]; 
  const content = editor.value;
  
  action.action(content);
  
});