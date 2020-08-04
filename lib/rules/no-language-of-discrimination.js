'use strict';

//------------------------------------------------------------------------------
// no-language-of-discrimination
//------------------------------------------------------------------------------
const FILTERED_WORDS = ["blacklist", "whitelist", "master"];

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
            });
          }
        },
      };
    },
  };