---
sidebar_position: 9
---

# Rule Builder

Used to build a rule for use for flow taggers, custom metering, etc.

## Trisul Rule Format

See [Trisul Filter Format](/docs/ref/trisul_filter_format#format) section for more details

---

sidebar_position: 9
sidebar_label: Rule Builder

---

## How to use

:::note navigation

To access select Tools -\> Trisul Rule Builder

:::

|                                  |                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Combine with previous expression | Whether to AND or OR this expression with what is already in the *Tagger Rule* box above. You can ignore for simple expressions                  |
| Counter Group                    | Select a counter group which you want to match                                                                                                   |
| Condition                        | Select EQUALS or NOT EQUALS, this operator applies to the key field                                                                              |
| Key                              | Keys to match from the counter group selected. The text below the box has examples of key formats. You can specify multiple keys by using commas |

Once you fill this out, press the *Update Target Rule* button. This will
merge your input with what is in the *Tagger Rule* box above. Repeat the
process if you have another expression.
