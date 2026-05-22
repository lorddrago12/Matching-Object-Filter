# Matching Object Filter

A lightweight JavaScript utility that filters an array of objects based on key-value pairs from a source object.

## Overview

`whatIsInAName` takes an array of objects and a source object, then returns only the array items whose properties **exactly match** every key-value pair in the source.

## Usage

```js
function whatIsInAName(arr, source) {
  const keys = Object.keys(source);

  return arr.filter(item => {
    return keys.every(key => item[key] === source[key]);
  });
}
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arr` | `Array<Object>` | The array of objects to filter |
| `source` | `Object` | The key-value pairs that each result must match |

### Returns

An array of objects from `arr` where **every** key-value pair in `source` is present and matches.

## Examples

```js
// Single property match
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// → [{ first: "Tybalt", last: "Capulet" }]

// Multiple property match
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// → [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// No matches
whatIsInAName([{ a: 1, b: 2 }, { a: 1 }], { a: 1, b: 2, c: 3 });
// → []
```

## How It Works

1. Extracts all keys from the `source` object using `Object.keys()`.
2. Filters the array, keeping only items where **every** source key exists on the item with a strictly equal (`===`) value.
3. Items may have additional properties beyond those in `source` and will still match.

## Notes

- Uses **strict equality** (`===`) for comparisons — type matters.
- An item only needs to satisfy all keys in `source`; extra properties on the item are ignored.
- Passing an empty `source` object (`{}`) returns the entire array, since there are no keys to fail against.
