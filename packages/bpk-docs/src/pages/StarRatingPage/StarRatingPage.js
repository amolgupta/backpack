/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import BpkStarRating, {
  BpkInteractiveStarRating,
  withInteractiveStarRatingState,
} from 'bpk-component-star-rating';

import starRatingReadme from 'bpk-component-star-rating/readme.md';

import DocsPageBuilder from './../../components/DocsPageBuilder';
import Paragraph from './../../components/Paragraph';
// import BpkDemo from 'bpk-component-demo';
import bpkDemo from '../../../../bpk-component-demo';

const InteractiveStarRating = withInteractiveStarRatingState(BpkInteractiveStarRating);

const StarRatingDemo = bpkDemo(BpkStarRating, { rating: 3.5, ratingLabel: '3.5 stars' });

const components = [
  {
    id: 'default',
    title: 'Default',
    blurb: [
      <Paragraph>
        By default, star ratings are shown in a static form. These can be set at half star
        intervals.
      </Paragraph>,
    ],
    examples: [<StarRatingDemo />],
  },
  {
    id: 'large',
    title: 'Large',
    blurb: [<Paragraph>Similar to the default, but in a large size.</Paragraph>],
    examples: [
      <StarRatingDemo customPropValues={{ rating: 3.5, ratingLabel: '3.5 stars', large: true }} />,
    ],
  },
  {
    id: 'interactive',
    title: 'Interactive',
    blurb: [
      <Paragraph>
        This version allows users to leave feedback on a given feature or area by setting a rating.
      </Paragraph>,
    ],
    examples: [
      <InteractiveStarRating
        id="my-star-rating"
        large
        getStarLabel={(rating, maxRating) => `${rating} out of ${maxRating} stars`}
      />,
    ],
  },
  {
    id: 'playground',
    title: 'Playground',
    blurb: [
      <Paragraph>
        The Backpack playground lets you directly modify prop-values and see the results in your
        browser. It also lets you get a code snippet for the component as you see it before you! We
        really couldn't make it easier for you! (Well, maybe we could)
      </Paragraph>,
    ],
    examples: [<StarRatingDemo />],
  },
];

const StarRatingPage = () => (
  <DocsPageBuilder
    title="Star Ratings"
    blurb={[
      <Paragraph>
        Star ratings are used for displaying a score within a given range. They can also be a good
        way of capturing user feedback on a particular feature.
      </Paragraph>,
    ]}
    components={components}
    readme={starRatingReadme}
  />
);

export default StarRatingPage;
