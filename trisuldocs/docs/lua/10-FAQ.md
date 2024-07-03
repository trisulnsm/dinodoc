# FAQ

Common questions about Trisul scripting

1 . **Why are so many instances of my LUA script active  ?**

Trisul spins up as many instances of your LUA script as required. However during main packet processing  
the number of active LUA script instances is determined by the [InflightTokens](https://trisul.org/docs/ref/trisulconfig.html#tuning) parameter in the config file

2 . **So there are 16 types of scripts, what should I use ?**

Use the Trisul [selector cheat sheet](https://trisul.org/docs/lua/selector.html) to pick the script type that you need to code up.

3 . **How to switch to single threaded mode ?**

Trisul uses the InflightTokens parameter in [trisulConfig.xml](https://trisul.org/docs/ref/trisulconfig.html#tuning) to determine the number of processing threads per stream. Set that to 1 from the default 2.

4 . **Isnt LUA too slow for per-packet processing ?**

Our extensive testing has demonstrated that LUA plugins,even without LuaJIT, are almost as fast as those written in C++. Nevertheless, make sure processing is fast and not to do memory allocs per packet.

5 . **Can I use separate  \*\.lua files for my countergroup ?**

You can put all your Lua script types in the same *.lua file as long as they are different types. You cannot put two or more of the same type in the same file.

6 .**I just want to count TCP Port 3000 Resets? Do I need a new counter group?**

No, you need to use a counter group **ONLY** if you are trying to monitor distinct keys. If you just want to track a single item, just use the preexisting counter group called AGGREGATES [identified by GUID](https://trisul.org/docs/ref/guid.html) `{393B5EBC-AB41-4387-8F31-8077DB917336}` and use a special key say `RST3000` there.

7 . **How to write loggers in a multithreaded Lua environment ?**

This is a very important aspect of the API. Trisul can load multiple instances of your Lua script depending on the number of hardware threads available on your machine. This can cause a conflict when trying to output to files.

Say you were writing a HTTP logger as following

```lua
This is a very important aspect of the API. Trisul can load multiple instances of your Lua script depending on the number of hardware threads available on your machine. This can cause a conflict when trying to output to files.

Say you were writing a HTTP logger as following
```

When you run this file on a 2-core machine you might be shocked to see that the `/tmp/myhttpoutput.log` has garbage lines. This is because two instances of your Lua snippet are active at any time. They simultaneously write to the file causing interleaving.

To fix this you can write to randomized output filenames, say you change the above code to

```lua
function onload()
  outfile = io.open("/tmp/httpheaders-"..math.random(1000,2000)..".log")
  ..
```

Then when you run the program you will find two output files

```lua
[vek@localhost trisul]$ ls -lrt /tmp/httpheaders*
-rw-rw-r--. 1 vek vek 95519 Apr  5 16:48 /tmp/httpheaders-1841.log
-rw-rw-r--. 1 vek vek 93436 Apr  5 16:48 /tmp/httpheaders-1783.log
```
