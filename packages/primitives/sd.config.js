/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
module.exports = {
  platforms: {
    css: {
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          // Look here 👇
          outputReferences: true,
        },
      }],
      transformGroup: 'css',
    },
    js: {
      buildPath: 'dist/js/',
      transforms: ['name/js/es6'],
      // map the array of token file paths to style dictionary output files
      files: [{
        format: 'javascript/es6',
        destination: 'var.js',
      }],
    },
    scss: {
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
      transformGroup: 'scss',
    },
  },
  source: [
    'src/**/*.tokens.json',
  ],
};