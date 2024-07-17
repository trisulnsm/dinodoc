# Object Buffer

Represents a sequence of raw bytes. Many of your LUA scripts will get this object when dealing with packet contents.

## Functions

A summary of the functions available in this object.

| Name                                                                            | In                           | Out            | Description                                                                                                                               |
| ------------------------------------------------------------------------------- | ---------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| size                                                                            |                              | number         | size of the buffer containing the raw bytes                                                                                               |
| length                                                                          |                              | number         | same as size                                                                                                                              |
| [hexdump](/docs/lua/obj_buffer#functionhexdump)         | offset, size (both optional) | string         | string with hexdump of the buffer in canonical format. Specify offset, size to dump a subset                                              |
| hval_8                                                                          | offset                       | number         | returns the byte at buffer+offset                                                                                                         |
| hval_16                                                                         | offset                       | number         | same as *ntohs( )* on the 2 bytes at buffer+offset                                                                                        |
| hval_24                                                                         | offset                       | number         | The 3 byte (24 bit) number at buffer_offset                                                                                               |
| hval_32                                                                         | offset                       | number         | same as *ntohl( )* on the 4 bytes at buffer+offset                                                                                        |
| [tostring](/docs/lua/obj_buffer#functiontostring)      | offset, size (both optional) | string         | `tostring()` returns the full string to LUA `tostring(offset,size)` returns the substring of *size* bytes starting and including *offset* |
| [appendtofile](/docs/lua/obj_buffer#functionappendtofile)  | filename                     | string         | append the contents of the buffer to the filename specified                                                                               |
| [writetofile](/docs/lua/obj_buffer#functionwritetofile) | filename, offset             | string, number | write the contents of the buffer to the filename specified at the offset                                                                  |

## Function reference

## Function `hexdump`

Adds a single metric to the Trisul framework.

### Purpose

Dump the buffer in canonical hex dump format and return a string. Very useful while developing packet dissectors.

### Parameters

**Note** : The offset starts at 0. Watch out for this because LUA strings start at 1.

| offset | optional : default 0              | offset from start of buffer. **NOTE: Offset start from 0 , unlike the normal LUA array of 1** |
| ------ | --------------------------------- | --------------------------------------------------------------------------------------------- |
| size   | optional: default `buffer:size()` | Number of bytes to dump in hex                                                                |

### Return value

| string | Hexdump of requested string |
| ------ | --------------------------- |

### Usage

Some sample uses

```lua
..

 print(buff:hexdump())

00000000   0d ec bf b3 91 ab 42 d9 39 51 30 33 35 01 6e f4    ......B.9Q035.n.
00000010   b3 1d 11 42 9d f3 41 98 0a 55 a0 01 00 04 43 48    ...B..A..U....CH
00000020   4c 4f 1d 00 00 00 50 41 44 00 d4 00 00 00 53 4e    LO....PAD.....SN
00000030   49 00 e3 00 00 00 53 54 4b 00 6b 01 00 00 56 45    I.....STK.k...VE
00000040   52 00 6f 01 00 00 43 43 53 00 7f 01 00 00 4e 4f    R.o...CCS.....NO
00000050   4e 43 9f 01 00 00 4d 53 50 43 a3 01 00 00 41 45    NC....MSPC....AE
00000060   41 44 a7 01 00 00 55 41 49 44 c8 01 00 00 53 43    AD....UAID....SC
00000070   49 44 d8 01 00 00 54 43 49 44 dc 01 00 00 50 44    ID....TCID....PD
00000080   4d 44 e0 01 00 00 53 52 42 46 e4 01 00 00 53 4d    MD....SRBF....SM
00000090   48 4c e8 01 00 00 49 43 53 4c ec 01 00 00 43 54    HL....ICSL....CT


 print(buff:hexdump(32,16))

00000000   4c 4f 1d 00 00 00 50 41 44 00 d4 00 00 00 53 4e    LO....PAD.....SN
```

## Function `tostring`

Gets buffer contents into a LUA string

### Purpose

Gets the buffer into a LUA string for further processing. You can get the full buffer or Parts of the buffer.

### Parameters

:::note 

The offset starts at 0. Watch out for this because LUA strings start at 1.

:::

| offset | optional : default 0              | offset from start of buffer. **NOTE: Offset start from 0 , unlike the normal LUA array of 1** |
| ------ | --------------------------------- | --------------------------------------------------------------------------------------------- |
| size   | optional: default `buffer:size()` | Number of bytes to retrieve                                                                   |

### Return value

| string | LUA string bytes |
| ------ | ---------------- |

### Usage

## Function `appendtofile`

Append the contents of the buffer to a file.

### Purpose

This is typically used by scripts for extracting contents to a disk file.

### Parameters

| filename | string | The file where you want to append to. If file does not exit, it is created. |
| -------- | ------ | --------------------------------------------------------------------------- |

### Return value

None

### Usage

## Function `writetofile`

Write contents of the buffer to a file at the specified offset.

### Purpose

Typically used by scripts that do reassembly that need to write at particular offset.

### Parameters

| filename | string | The file where you want to append to. If file does not exit, it is created.                                                                                                  |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| offset   | number | The seek position of the file. NOTE: Offset is 0 based unlike LUA arrays which are 1 based. Essentially this method from the C side does `lseek(..)` followed by `write(..)` |

### Return value

None

# 
