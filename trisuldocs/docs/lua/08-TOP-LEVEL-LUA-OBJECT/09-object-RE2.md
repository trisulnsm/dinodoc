# Object RE2

A [precompiled Google RE2](https://github.com/google/re2) regex from C++ land that can be used from your Lua scripts.

**TIP** if you are just working with simple regexes then it is better to use the built in LuaJIT functions. The performance gains may not be enough to justify crossing the Lua-C boundary. This works best with complex or large numbers of regexes that are called at a low frequency.

## Functions

A summary of the functions available in this object.

### Creation

You need to use the [T.re2](/docs/lua/TOP-LEVEL-LUA-OBJECT/object-global#functiontre2 ) method to create a precompiled regex object. After the creation, you can invoke the following function to run the matches.

### Functions

| Name             | In     | Out                    | Description                                                                                                                                                                                   |
| ---------------- | ------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partial_match    | string | bool                   | Does the regex match anywhere in the input string                                                                                                                                             |
| full_match       | string | bool                   | Full input string must match the regex                                                                                                                                                        |
| partial_match_c1 | string | bool, string           | Match input string with 1 capture. If matched, return true + captured string<br/>Example `(Host.*)\\s*:` will pull the match in paranthesis into a string. If not matched, return false, nil. |
| partial_match_c2 | string | bool, string, string   | Same as partial_match_c1 but extract TWO captures rather than one.                                                                                                                            |
| partial_match_n  | string | bool, string1..stringN | Partial match returns variable number of strings, you are expected to know how many captures are there                                                                                        |
| full_match_n     | string | bool, string1..stringN | Full input string must match the regex. Returns N-capture strings                                                                                                                             |

More will be added as required.

### Example

Here is an example usage of RE2 parsing HTTP headers. You create a precompiled RE2 once in `onload(..)` then use it in your code.

```lua
onload = function()

    T.re2_http_request = T.re2("(GET|POST|HEAD|OPTIONS|CONNECT)\\s(\\S+)\\sHTTP/\\d\\.\\d")
    T.re2_connect=T.re2("CONNECT\\s(\\S+):(\\d+)")

  end,

  -- reassembly_handler block
  -- 
  reassembly_handler   = {


    onpayload = function(engine, timestamp, flowkey, direction, seekpos, buffer) 

        -- Using RE2 
        local match,c1,c2 = T.re2_http_request:partial_match_n(buffstr:tostring())

        print("Method="..c1)
        print("URL="..c2)
```
