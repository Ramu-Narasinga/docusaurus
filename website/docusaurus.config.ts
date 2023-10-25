/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';

export default {
  title: 'Docusaurus',
  tagline: 'tagline',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  url: 'https://docusaurus.io',
  favicon: 'img/docusaurus.ico',
  presets: [
    [
      'classic',
      {
        debug: true, // force debug plugin usage
        docs: false,
        blog: false,
        pages: {
          remarkPlugins: [],
        } satisfies PageOptions,
      } satisfies Preset.Options,
    ],
  ],
} satisfies Config;
