# File Extraction

Tracks how the Save Binaries app handles HTTP file transfers: files extracted or skipped, decompression, and bytes saved.

| Property | Value |
|---|---|
| GUID | `{282E13BE-9691-4B61-F0A3-21CB90792478}` |
| Layer | System |
| Input | Packets |
| Key type | Fixed event name, or file type |
| Implementation | Lua — fe_counters.lua, fed by save_exe_streaming.lua (apps/analyzers/save_binaries) |
| Trisul App | save_binaries (install from Trisul Apps) |
| Bucket / Topper | 30 s / 300 s |
| Enabled by default | Yes, once the app is installed |

## What it measures

- `save_exe_streaming.lua` checks each HTTP response. Responses with a `javascript`, `html` or `css` Content-Type are skipped. Others are reassembled.
- On the first chunk of a file it runs libmagic on the payload. If the magic string matches the trigger regex (Windows/DOS executables, ELF, PDF, Flash, Office macros by default), the file is written to the output directory (default `/tmp/savedfiles`).
- Requires File Extraction to be enabled in the probe config.

## Keys

Meter 0 and meter 1 use fixed event keys. Meter 2 uses the first two words of the libmagic description.

| Key | Meter | Meaning |
|---|---|---|
| `Extracted` | 0 | File matched the trigger regex and is being saved. |
| `Skipped` | 0 | File type did not match, not saved. |
| `ContentTypeSkip` | 0 | Response skipped because of its JavaScript/HTML/CSS Content-Type. |
| `DecompressorStart` | 0 | gzip response that is decompressed for inspection. |
| `DecompressorSkip` | 0 | gzip response skipped by Content-Type, decompression avoided. |
| `LibmagicError` | 0 | libmagic failed on the first chunk. |
| `ExtractedBW` | 1 | Bytes written for saved files. |
| `PE32 executable` | 2 | A saved file of this type (first two words of the magic string). |
| `PDF document` | 2 | A saved PDF. |

### Special keys

| Key | Meaning |
|---|---|
| `SYS:GROUP_TOTALS` | Sum of every update made to this group in the interval. Meter 0 adds events of all kinds together, so it is not a file count. |

## Meter list

| ID | Name | Type | Units | Top | Bottom | Description |
|---|---|---|---|---|---|---|
| 0 | hits | VT_COUNTER | Hits | 10 | 0 | Meter name `Hits`. +1 per event, keyed by event name. |
| 1 | bytes | VT_RATE_COUNTER | Bps | 10 | 0 | Meter name `Throughput`. Bytes of saved file chunks, key `ExtractedBW`. |
| 2 | hits | VT_COUNTER | Hits | 10 | 0 | Meter name `TypeHits`. +1 per extracted file, keyed by file type. |
| 3 | bytes | VT_RATE_COUNTER | Bps | 10 | 0 | Meter name `TypeThroughput`. Not populated by the current code. |
| 4 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
| 5 | Unused Cardinality counter | VT_GAUGE | Uniques | 20 | 20 | Reserved cardinality slot. Not populated. |
