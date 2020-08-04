'use strict';

//------------------------------------------------------------------------------
// no-language-of-discrimination
//------------------------------------------------------------------------------
const FILTERED_WORDS = ["blacklist", "whitelist", "master"];
const SUGGEST_WORDS = {
  "blacklist": "denylist",
  "whitelist": "allowlist",
  "master": "main"
}

module.exports = {
    meta: {
      messages: {
        avoidName: "Avoid using variables named '{{ name }}'",
      },
    },
    create(context) {
      return {
        Identifier(node) {
          if (FILTERED_WORDS.includes(node.name)) {
            context.report({
              node,
              messageId: "avoidName",
              data: {
                name: node.name,
              },
              fix: function(fixer) {
                return fixer.replaceText(node, SUGGEST_WORDS[node.name]);
              }
            });
          }
        },
      };
    },
  };