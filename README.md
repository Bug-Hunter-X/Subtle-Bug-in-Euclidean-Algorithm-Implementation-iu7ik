# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of Euclid's algorithm for finding the greatest common divisor (GCD). The code appears to work correctly for most inputs, but it fails in specific edge cases involving zero.

## Bug Description

The `myFunction` function uses recursion to calculate the GCD. While it correctly handles most cases, it exhibits unexpected behavior when either `a` or `b` is 0.  This is because the conditionals for zero values aren't entirely foolproof.