// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Katakana`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01B000,
    0x01B155
  ],
  ranges: [
    [0x0030A1, 0x0030FA],
    [0x0030FD, 0x0030FF],
    [0x0031F0, 0x0031FF],
    [0x0032D0, 0x0032FE],
    [0x003300, 0x003357],
    [0x00FF66, 0x00FF6F],
    [0x00FF71, 0x00FF9D],
    [0x01AFF0, 0x01AFF3],
    [0x01AFF5, 0x01AFFB],
    [0x01AFFD, 0x01AFFE],
    [0x01B120, 0x01B122],
    [0x01B164, 0x01B167]
  ]
});
testPropertyEscapes(
  /^\p{Script=Katakana}+$/u,
  matchSymbols,
  "\\p{Script=Katakana}"
);
testPropertyEscapes(
  /^\p{Script=Kana}+$/u,
  matchSymbols,
  "\\p{Script=Kana}"
);
testPropertyEscapes(
  /^\p{sc=Katakana}+$/u,
  matchSymbols,
  "\\p{sc=Katakana}"
);
testPropertyEscapes(
  /^\p{sc=Kana}+$/u,
  matchSymbols,
  "\\p{sc=Kana}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0032FF,
    0x00FF70,
    0x01AFF4,
    0x01AFFC,
    0x01AFFF
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0030A0],
    [0x0030FB, 0x0030FC],
    [0x003100, 0x0031EF],
    [0x003200, 0x0032CF],
    [0x003358, 0x00DBFF],
    [0x00E000, 0x00FF65],
    [0x00FF9E, 0x01AFEF],
    [0x01B001, 0x01B11F],
    [0x01B123, 0x01B154],
    [0x01B156, 0x01B163],
    [0x01B168, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Katakana}+$/u,
  nonMatchSymbols,
  "\\P{Script=Katakana}"
);
testPropertyEscapes(
  /^\P{Script=Kana}+$/u,
  nonMatchSymbols,
  "\\P{Script=Kana}"
);
testPropertyEscapes(
  /^\P{sc=Katakana}+$/u,
  nonMatchSymbols,
  "\\P{sc=Katakana}"
);
testPropertyEscapes(
  /^\P{sc=Kana}+$/u,
  nonMatchSymbols,
  "\\P{sc=Kana}"
);

reportCompare(0, 0);
