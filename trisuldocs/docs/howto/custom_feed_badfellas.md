Add custom intel feeds into Badfellas
=====================================

The [Badfellas plugin](/docs/ug/install/badfellas.html) analyzes your
network traffic looking for matches against millions of indicators of
malicious activity. Out of the box, we have selected more than a dozen
feeds that have provided consistently good results. This document
describes how you can add your own feeds to the framework.

The basic method is the following

1.  Pre process your feed into a TAB separated file in a particular
    directory or URL on the HUB node
2.  Point the Badfellas plugin to that file or URL for distribution to
    the PROBE nodes
3.  You can add any number of these feeds

**Advanced** : If you want to have maximum control of the Intel
framework processing, you can use the [LUA API](/docs/lua) alongside the
"IOC Intel Harvestor App". See [Trisul
APPS](/docs/ug/webadmin/apps.html)

Pre process your feed into a TAB separated file on the HUB node.
----------------------------------------------------------------

Create a TAB separated file with the following format. Put it in a
directory that is readable by the Web Trisul user, which is by default
`trisul.trisul`. A good place to put this file is the /tmp directory.

`FEED_NAME<TAB>INDICATOR<TAB>Description`

Indicators can be any of the usual IOCs (Indicators of Compromise). They
include

1.  IPv4/v6 Addresses
2.  Domain names
3.  URLs
4.  File Hashes
5.  Info contained in SSL Certs\
    and about 10 others.

### Sample file

A sample TSV file named `/tmp/myfeed1.tsv` would look like the
following.

``` {.language-csv}
# FeedName,indicator,description
# 
MYBADLIST<TAB>masterkey.com.ua<TAB>Malicious host possibly hosting Palevo 
MYBADLIST<TAB>ms4all.twoplayers.net<TAB>Malicious host possibly hosting Palev
MYBADLIST<TAB>94.100.215.170<TAB>Possible scanning 
MYBADLIST<TAB>http://friends-webcam-fun2.blogspot.com/wechat.php<TAB>Phishing host 
..
```

Automatically refreshing the feed
---------------------------------

Next, you need to point Trisul to your TSV file. This will automatically
refresh the feed and distribute it to the probe nodes. You do this by
adding a *feed* section to the Feeds framework configuration file.

### Badfellas FEED configuration file

The Trisul FEED framework is responsible for downloading INTEL feeds,
compiling them if required, and distributing them to the nodes. There
are a few FEED files like IP Location mapping, URL Filter, Blacklists,
and then the Badfellas feed.

The Badfellas feed configuration file is at
`/usr/local/var/lib/trisul-config/domain0/allcontexts/feeds/feed-2F3CCCA3-38D4-4773-97AB-3ED732F82533/rules.xml`
The GUID part is scary, but that is the GUID of the Badfellas plugin.

### Sections of the Badfellas configuration file

Open the badfellas feed config file

`vi /usr/local/var/lib/trisul-config/domain0/allcontexts/feeds/feed-2F3CCCA3-38D4-4773-97AB-3ED732F82533/rules.xml`

Notice the feed config file `rules.xml` consists of *Update* sections.

    <Update>
      .. contains a bunch of feeds to process
      <Run>
        <Frequency>
          .. how frequently do you want to download and refresh 
    </Update>

### Connect your feed into Badfellas

Scroll down to the bottom to locate the third Update section. You can
connect your TAB separated processed feed in this section.

Say you have saved your file in a location `/tmp/myfeed_1.tsv` You can
connect it to Badfellas in the following way.

-   Edit the file
    `/usr/local/var/lib/trisul-config/domain0/allcontexts/feeds/feed-2F3CCCA3-38D4-4773-97AB-3ED732F82533/rules.xml`
-   Add your TSV file (indicated by the `<-- add this line only` caption
    )

``` {.language-xml}


  ..  locate the Update section at the bottom of the config file 
  .. 
    <Update>
      <Sources>
        <Source>
>         <URL>file:///tmp/myfeed_1.tsv</URL>     <--- add this line only
          <Target>badfellas-local-0.tsv</Target>
        </Source>

      </Sources>
      <Output>
        <Filename>AllBadFellas.tch</Filename>
      </Output>
      <Post>
        <Cmd>mkbldb</Cmd>
      </Post>
      <Run>
        <RunAt>0200</RunAt>
        <Frequency>3600</Frequency>
      </Run>
    </Update>
```

That is it. Now your feed is integrated into Trisul. The lists will be
downloaded and processed automatically every 3600 seconds as per the
*Run\>Frequency* settings.

Downloading from a custom URL
-----------------------------

In the previous example, we downloaded the TSV feed from a `file:///`
local file. You can even download from another server via HTTP. Just
replace the URL section with something like
`<URL>http://mycompany.com/intelfeeds/myfeed_1.tsv</URL>`

### Wait for a while for this to take effect or restart Trisul.

Normally Trisul rolls over to a new feed it detects within 30 minutes.
