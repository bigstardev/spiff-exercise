## v1

### Description

Create a tool that parses a string of text to find the number of words containing each character in the alphabet. For example: "The dog jumped over the fence" should return something like the following:

```
a: 0
b: 0
c: 1
d: 2
e: 5
...
```

### Acceptance Criteria

#### Styling

- the `textarea` input should match the style below:
  [[textarea image]]

- buttons should match the style below. On hover, button borders should increase to 2px width. On click, the border should increase to 3px.
  [[spiff button image]]

#### Parsing

- add a `textarea` input to accept a string of any length
- add a green `Parse` button to the canvas area that parses the textarea string
- add an orange `Reset` button to the canvas area that clears the textarea and all results

#### Character Counts

- each letter of the alphabet should list the number of words in the string that contain that character
- style this output however you think works best

---

## v2

### Description

Add on to the parsing tool above by highlighting the text where a given character appears

### Acceptance Criteria

- when the user clicks on a character result, display a copy of the original text with all matching words highlighted in yellow
- bonus: bold the matched character inside the highlighted words
