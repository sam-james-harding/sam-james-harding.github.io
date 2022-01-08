# Basic Regex

## Basic

### Characters

| Code   | Explanation                                                                             | Example        | Example Match |
| ------ | --------------------------------------------------------------------------------------- | -------------- | ------------- |
| `\d` | One digit                                                                               | `file_\d_\d` | file_25       |
| `\D` | One non-digit                                                                           | `\D\D\D`     | ABC           |
| `\w` | One "word character" (letter, digit, underscore, ideogram)                              | `\w\w\w`     | a2_           |
| `\W` | One non-word character                                                                  | `\W\W`       | +)            |
| `\s` | One whitespace character (space, tab, newline, carriage return, vertical tab, etc.)     | `a\sb\sc`    | a b	c         |
| `\S` | One non-whitespace character                                                            | `\S\S\S`     | a{2           |
| `.`  | Any character except a line break                                                       | `.a..c`      | za bc         |
| `\`  | Escapes a special character (i.e.`\.` means a full stop, or `\\` means a backslash) | `\.\{abc\}`  | .{abc}        |

### Quantifiers

| Code      | Explanation                              | Example                      | Example Match       |
| --------- | ---------------------------------------- | ---------------------------- | ------------------- |
| `+`     | One or more                              | `Version \d+\.\d+`         | Version 2.34        |
| `{n}`   | Exactly `n` times                      | `\w{3}`                    | azN                 |
| `{n,m}` | `n` to `m` times                     | `\d{3, 7}`                 | 13264               |
| `{n,}`  | `n` or more times                      | `\w{5,}`                   | hello_world         |
| `*`     | Zero or more times                       | `A\d*B\d*`                 | AB23                |
| `?`     | Once or none<br />Makes quantifiers lazy | `\w\d?A\d?B`<br />`\w+?` | a2AB<br />A in ABCD |
| `+`     | One or more times                        | `\w+`                      | words               |

### Logic

| Code                 | Explanation                 | Example       | Example Match |
| -------------------- | --------------------------- | ------------- | ------------- |
| `                    | `                           | OR operand    | `22|33`    |33|
| `(...)`            | Capturing group             | `A(nt|pple)`       |*nt* in *Ant*|
| `\1`, `\2`, etc. | Contents of group 1, 2 etc. | `r(\w)g\1x` | regex         |
| `(?:...)`          | Non-capturing group         | `A(?:nt|pple)`        |Apple|

### Whitespace

| Code     | Explanation                                               | Example    | Example Match |
| -------- | --------------------------------------------------------- | ---------- | ------------- |
| `\t`   | Tab                                                       | `T\t\wb` | T	ab          |
| `\n`   | Newline                                                   | `A\nB`   | A<br />B      |
| `\r\n` | New line on Windows (carriage return followed by newline) | See above  | See above     |

### Character Classes

| Code       | Explanation                                                   | Example       | Example Match      |
| ---------- | ------------------------------------------------------------- | ------------- | ------------------ |
| `[...]`  | One of the characters in brackets.                            | `Str[ai]p`  | Strip *or* Strap |
| `[x-y]`  | One of the characters in the range of*x* to *y*           | `[a-d]+`    | caadbc             |
| `[^x]`   | One character that is not *x*                               | `Cr[^i]ck`  | Crack              |
| `[^x-y]` | One of the characters not in the range of*x* to *y*       | `[^b-e]{2}` | Ah                 |
| `[\xn]`  | Matches the character at hex position*n* of the ASCII table | `[\x4a]`    | J                  |

### Assertions
|Code|Explanation|Example|Example Match|
|----|-----------|-------|-------------|
|`^`|Matches the beginning of input|`(^\w)`|*a* in *abc*|
|`$`|Matches the end of input|`(\w$)`|*c* in *abc*|
|`\b`|Matches a word boundary|`(\w\b)`|*n* and *h* in *john smith*|
|`\B`|Matches a non-word boundary| `(\w\w\B)` |*jo* and *oh* in *john s*|
|`a(?=b)`|**Lookahead** Matches "a" only when "a" is followed by "b"|`(\w\w\w(?=d))`|*AAA* in *AAAd BBBf*|
|`a(?!b)`|**Negative Lookahead** Matches "a" only when "a" is not followed by "b"|`(\w\w\w(?!d))`|*BBB* in *AAAd BBBf*|
|`(?<=b)a`|**Lookbehind** Matches "a" only if preceded by "b"|`((?<=d)\w\w\w)`|*AAA* in *dAAA fBBB*|
|`(?<!b)a`|**Negative Lookbehind** Matches "a" only if not preceded by "b"|`((?<!d)\w\w\w)`|*BBB* in *dAAA fBBB*|
