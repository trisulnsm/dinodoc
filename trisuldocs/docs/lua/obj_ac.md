# Object AC (Aho-Corasick)

An Aho-Corasick multi pattern matcher created with [`T.ac( _pattern_array_ )`](https://trisul.org/docs/lua/obj_ac.html#t.ac)

This is a convenience utility provided to you by the Trisul framework because multi pattern matching is such a frequent need in network analytics applications.

## Creating the object

The object is created and stored in a global state, either as a global variable or as a member in the `Global T` table. Note that the global states are per-file not across LUA files.

```lua
onload = function()
    T.patternMatcher = T.ac( {'string1','string2','strin3'...})
end,

.. later ..

T.patternMatcher:match_one(..)
```

## Functions

A summary of the functions available in this object.

| Name      | In     | Out   | Description  |
| --------- | ------ | ----- | ------------ |
| match_all | string | table | Matches all patterns. The matches are returned in a table<br/>\{ pattern_matched = position <br/>>The position indicates the last matching character, not the first. |
| match_one | string | table | Same as match_all, but stops after finding a single match. Use this method for alerting on pattern matches.                                                      |

## Function `match_all`

Tries to match all patterns against the input text.

### Purpose

Use this parameter passed to your Lua function to integrate your data into the Trisul framework.

### Parameters

<table>
    <tr>
        <td>text</td>
        <td>string</td>
        <td>the text to be matched </td>
    </tr>
</table>

### Return value

A table of matches. See the debug output below

### Usage

In this example we are attempting to match a list of hostnames against a DNS Full Text Search text.

The code at the point the `dbg()` is called is shown below

```lua
onload = function()
    T.patterns  = T.ac( { "toolbar", "nsatc",  "HOLLERITH" })
end,

onflush= function(dbengine, fts)
    local m = T.patterns:match_all( fts:text() )
    dbg();
    if next(m)  then
        print("FOUND a match.. do your thing"
    end
..
```

Using the debugger, we can inspect the return value `m`  

```lua
debugger.lua> p m
m => {"toolbar" = 87}
debugger.lua> p fts:text()
fts:text() => "QUERY\9ID: 39219\9Flags:0×0100\9QDCount:1\9ANCount:0\9NSCount:0\9ARCount:0\Questions\.toolbar.google.com\9\9A\9IN\\"
debugger.lua>
```

## Function `match_one`

Match all the strings in the pattern against the input text.  
Stop at the first match. The `match_all` tries to match all patterns and does not stop after the first match.
