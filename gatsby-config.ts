import * as path from 'path'

module.exports = {
  siteMetadata: {
    siteUrl: 'https://sampo02.gtsb.io',
    title: "sampo02's blog"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            '**/*.{css,scss,less}',
            '**/*.{graphql}',
            '**/*.{html}',
            '**/*.{json,json5}',
            '**/*.{yaml,yml}'
          ]
        },
        eslint: {
          customOptions: {
            fix: true,
            cache: true
          },
          ignorePatterns: ['graphql-types.ts'],
          patterns: '**/*.{js,jsx,ts,tsx}'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: 'jsx'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: path.join(__dirname, 'src/markdown-pages')
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {},
              classPrefix: 'language-',
              inlineCodeMarker: null,
              noInlineHighlight: false,
              showLineNumbers: false
            }
          }
        ]
      }
    }
  ]
}
