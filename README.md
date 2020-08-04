# eslint-plugin-inclusive

This contains eslint rule which prevents racially discriminatory language and suggests alternatives.

## Installation

```sh
npm install --save-dev eslint-plugin-inclusive
```

## Rules

 Name                                    | Description                                                                          |
--------------------------------------- | ------------------------------------------------------------------------------------ |
`no-language-of-discrimination` | Prevents usage of specific discriminatory words. |


## Usage

After installing, update your project's `.eslintrc.json` config:

```js
{
  "plugins": ["inclusive"],
  "rules": {
    "inclusive/no-language-of-discrimination": "error"
  }
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
