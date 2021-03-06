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
import readme from 'react-native-bpk-component-phone-input/readme.md';
import iosScreenshoDialingCodeList from 'react-native-bpk-component-phone-input/screenshots/ios/dialing-code-list.png';
import iosScreenshotPhoneNumberInput from 'react-native-bpk-component-phone-input/screenshots/ios/phone-number-input.png';
import androidScreenshotDialingCodeList from 'react-native-bpk-component-phone-input/screenshots/android/dialing-code-list.png';
import androidScreenshotPhoneNumberInput from 'react-native-bpk-component-phone-input/screenshots/android/phone-number-input.png';
import BpkBlockquote from 'bpk-component-blockquote';

import IntroBlurb from './../../components/neo/IntroBlurb';
import DocsPageBuilder from './../../components/DocsPageBuilder';
import DocsPageWrapper from './../../components/neo/DocsPageWrapper';

const components = [
  {
    id: 'dialing-code-list',
    title: 'Dialing code list',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshoDialingCodeList}`,
        altText: 'iOS Dialing Code List Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotDialingCodeList}`,
        altText: 'Android Dialing Code List Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
  {
    id: 'phone-number-input',
    title: 'Phone number input',
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshotPhoneNumberInput}`,
        altText: 'iOS Dialing Code List Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshotPhoneNumberInput}`,
        altText: 'Android Dialing Code List Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const isNeo = process.env.BPK_NEO;

const blurb = [
  <IntroBlurb>
    The phone number input encapsulates two components that together enable the
    collection of phone numbers.
  </IntroBlurb>,
  <BpkBlockquote>
    Consumers are responsible for using these two components together. The
    accessory view in the text input shall present the dialing code list when
    tapped and a selection should update the dialing code set in the input
    component.
  </BpkBlockquote>,
];

const NativeInputPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Phone number input"
    blurb={isNeo ? null : blurb}
    components={components}
    readme={readme}
    showMenu={false}
    {...rest}
  />
);

const NeoNativeInputPage = () => (
  <DocsPageWrapper
    title="Phone number input"
    blurb={blurb}
    nativeSubpage={<NativeInputPage wrapped />}
  />
);

export default (isNeo ? NeoNativeInputPage : NativeInputPage);
