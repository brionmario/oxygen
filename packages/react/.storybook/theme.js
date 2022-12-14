/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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

import {themes as defaultThemes} from '@storybook/theming';

const commons = {
  brandUrl: 'https://asgardeo.io',
  colorSecondary: '#47EBD8',
  brandTitle: 'Oxygen Design System',
  brandTarget: '_blank',
};

/**
 * Get moderated themes for the Storybook.
 * @see {@link https://storybook.js.org/docs/react/configure/theming}
 */
export const themes = {
  dark: {
    ...defaultThemes.dark,
    appBg: '#2f2f2f',
    appContentBg: '#333333',
    brandImage: './assets/images/design-system-logo.svg',
    barSelectedColor: '#47EBD8',
    ...commons,
  },
  light: {
    ...defaultThemes.light,
    brandImage: './assets/images/design-system-logo-inverted.svg',
    appBg: '#f1f1f1',
    ...commons,
  },
  normal: {
    ...defaultThemes.normal,
    brandImage: './assets/images/design-system-logo-inverted.svg',
    appBg: '#f1f1f1',
    ...commons,
  },
};