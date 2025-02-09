// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
description: various interesting string arguments.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const tests = [
  ["1976-11-18", 1976, 11, "M11", 18],
  ["2019-06-30", 2019, 6, "M06", 30],
  ["+000050-06-30", 50, 6, "M06", 30],
  ["+010583-06-30", 10583, 6, "M06", 30],
  ["-010583-06-30", -10583, 6, "M06", 30],
  ["-000333-06-30", -333, 6, "M06", 30],
  ["19761118", 1976, 11, "M11", 18],
  ["+0019761118", 1976, 11, "M11", 18],
  ["1976-11-18T152330.1+00:00", 1976, 11, "M11", 18],
  ["19761118T15:23:30.1+00:00", 1976, 11, "M11", 18],
  ["1976-11-18T15:23:30.1+0000", 1976, 11, "M11", 18],
  ["1976-11-18T152330.1+0000", 1976, 11, "M11", 18],
  ["19761118T15:23:30.1+0000", 1976, 11, "M11", 18],
  ["19761118T152330.1+00:00", 1976, 11, "M11", 18],
  ["19761118T152330.1+0000", 1976, 11, "M11", 18],
  ["+001976-11-18T152330.1+00:00", 1976, 11, "M11", 18],
  ["+0019761118T15:23:30.1+00:00", 1976, 11, "M11", 18],
  ["+001976-11-18T15:23:30.1+0000", 1976, 11, "M11", 18],
  ["+001976-11-18T152330.1+0000", 1976, 11, "M11", 18],
  ["+0019761118T15:23:30.1+0000", 1976, 11, "M11", 18],
  ["+0019761118T152330.1+00:00", 1976, 11, "M11", 18],
  ["+0019761118T152330.1+0000", 1976, 11, "M11", 18],
];

for (const [input, ...expected] of tests) {
  const result = Temporal.PlainDate.from(input);
  TemporalHelpers.assertPlainDate(result, ...expected, `from(${input})`);
}

reportCompare(0, 0);
