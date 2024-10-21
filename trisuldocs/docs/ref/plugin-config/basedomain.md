# Base Domains

Base domains - map domain names used by popular webservices to Application Names.

## File Location
`
/usr/local/etc/trisul-probe/domain0/probe0/context0/PI-081336B3-5AF1-4D4F-B850-BA3CAEEB8A2C.xml
`

```bash
<TrisulPluginConfiguration>
    <Policy>
     	<description>Base Domain Rules </description>

		<Rules>
			<Rule> <k> AMAZON AWS                 </k> <x> amazonaws </x> </Rule>
			<Rule> <k> AMAZON PRIME               </k> <x> (amazonvideo|aiv\-delivery|aiv\-cdn|video\.a2z|pv\-cdn|atv\-ps\.amazon|primevideo) </x> </Rule>
			<Rule> <k> AMAZON                     </k> <x> (amazon|a2z\.com) </x> </Rule>
			<Rule> <k> ANDROID                    </k> <x> android </x> </Rule>
			<Rule> <k> GMAIL                      </k> <x> (mail\.google|gmail|inbox\.google|mail\-ads\.google|mail\-attachment\.googleusercontent|googlemail\.l\.google|aspmx\.l\.google) </x> </Rule>
			<Rule> <k> YOUTUBE                    </k> <x> (youtube|ytimg|googlevideo|ggpht|gvt1) </x> </Rule>
			<Rule> <k> GOOGLE                     </k> <x> (google|gstatic|appspot|feedburner|gcp|gvt2|\.goog) </x> </Rule>
			<Rule> <k> WHATSAPP                   </k> <x> (whatsapp|wa\.me) </x> </Rule>
			<Rule> <k> INSTAGRAM                  </k> <x> (instagram|ig\.me|bookstagram|carstagram|chickstagram|igcdn|igsonar|igtv|imstagram|imtagram|instaadder|instachecker|instafallow|instafollower|instagainer|instagda|instagify|instagmania|instagor|instagran|instagranm|instagrem|instagrm|instagtram|instagy|instamgram|instangram|instanttelegram|instaplayer|instastyle|instgram|intagram|intagrm|intgram|kingstagram|lnstagram) </x> </Rule>
			<Rule> <k> FACEBOOK                   </k> <x> (facebook|fbcdn|fb\.me|fbsbx\.com|fbpigeon\.com|fb\.com|fbinfra) </x> </Rule>
			<Rule> <k> NEWS                       </k> <x> (bhaskar|patrika|jagran|indiatimes|economictimes|ndtv|newshunt|mid\-day|flipboard|zeenews) </x> </Rule>
			<Rule> <k> PINTEREST                  </k> <x> (pinterest|pinimg|2\-01\-37d2\-0018\.cdx\.cedexis|pin\.it) </x> </Rule>
			<Rule> <k> ONLINESHOPPING             </k> <x> (olx|flipkart|snapdeal|flixcart|quikr|jabong|shopclues|cilory) </x> </Rule>
			<Rule> <k> CHATGPT                    </k> <x> (chatgpt|chat\.openai) </x> </Rule>
			<Rule> <k> DZEN                       </k> <x> dzen </x> </Rule>
			<Rule> <k> IMDB                       </k> <x> imdb </x> </Rule>
			<Rule> <k> ONLINEBILLING              </k> <x> vs3\.com </x> </Rule>
			<Rule> <k> TOOL                       </k> <x> (addthis|montiera) </x> </Rule>
			<Rule> <k> WEB                        </k> <x> (cfcdn|omniroot|in\.com|gsmarena|mobilearena|vserv) </x> </Rule>
			<Rule> <k> BUSSINESS                  </k> <x> (montiera|cube26|scorecardresearch|vs3\.com|bitgravity|appsflyer|blackberry|gigya|online\-metrix|crittercism|geotrust|boswp|samsungdm|groillanation) </x> </Rule>
			<Rule> <k> BLOGS                      </k> <x> (tumblr|wordpress|blogspot|blogger|blogblog|disqus|wizrocket|wp\.com) </x> </Rule>
			<Rule> <k> WIKIPEDIA                  </k> <x> (wikipedia|wikimedia) </x> </Rule>
			<Rule> <k> VIBER                      </k> <x> viber </x> </Rule>
			<Rule> <k> HIKE                       </k> <x> hike </x> </Rule>
			<Rule> <k> SKYPE                      </k> <x> skype </x> </Rule>
			<Rule> <k> BAIDU                      </k> <x> baidu </x> </Rule>
			<Rule> <k> INDIANRAIL                 </k> <x> (irctc|indianrail) </x> </Rule>
			<Rule> <k> MOBILECOMPANY              </k> <x> (sonymobile|htc|lava|lenovo|micromax|poco|iqoo|vivo|oppo|oneplus) </x> </Rule>
			<Rule> <k> LAPTOP COMPANY             </k> <x> (dell|acer|asus|hp|lenovo) </x> </Rule>
			<Rule> <k> JOBPORTAL                  </k> <x> (kirannewsagency|naukri) </x> </Rule>
			<Rule> <k> SEARCHENGINE               </k> <x> (twing|ixigo) </x> </Rule>
			<Rule> <k> REDDIT                     </k> <x> (reddit|redd\.it) </x> </Rule>
			<Rule> <k> BING                       </k> <x> (bing|cortana\.ai) </x> </Rule>
			<Rule> <k> NAVER                      </k> <x> naver </x> </Rule>
			<Rule> <k> BILIBILI                   </k> <x> (bilibili|hdslb) </x> </Rule>
			<Rule> <k> VK                         </k> <x> (vk\.com|userapi\.com) </x> </Rule>
			<Rule> <k> MAILRU                     </k> <x> mail\.ru </x> </Rule>
			<Rule> <k> SAMSUNG                    </k> <x> (samsung|gos\-gsp\.io) </x> </Rule>
			<Rule> <k> FANDOM                     </k> <x> (fandom|wikia\.nocookie|wikia\-services\.com) </x> </Rule>
			<Rule> <k> TELEGRAM                   </k> <x> (t\.me|telegram) </x> </Rule>
			<Rule> <k> TIKTOK                     </k> <x> (tiktok|ttlivecdn) </x> </Rule>
			<Rule> <k> TWITCH                     </k> <x> (twitch|ttvnw|jtvnw|live\-video) </x> </Rule>
			<Rule> <k> LIVE                       </k> <x> live\.com </x> </Rule>
			<Rule> <k> QUORA                      </k> <x> (quora|poe\.com) </x> </Rule>
			<Rule> <k> DUCKDUCKGO                 </k> <x> duckduckgo </x> </Rule>
			<Rule> <k> ROBLOX                     </k> <x> (roblox|rbxcdn|rbxtrk) </x> </Rule>
			<Rule> <k> TEMU                       </k> <x> temu </x> </Rule>
			<Rule> <k> CANVA                      </k> <x> canva </x> </Rule>
			<Rule> <k> LAZLOGISTICS               </k> <x> lazlogistics </x> </Rule>
			<Rule> <k> GLOBO                      </k> <x> globo </x> </Rule>
			<Rule> <k> KWAI                       </k> <x> (kwai|yximgs) </x> </Rule>
			<Rule> <k> SNAPCHAT                   </k> <x> (snapchat|sc\-cdn|sc\-gw|sc\-static|snapkit|sc\-prod|snap\-storage\-cdn) </x> </Rule>
			<Rule> <k> SPOTIFY                    </k> <x> (spotify|scdn\.co|spotilocal\.com|spoti\.fi) </x> </Rule>
			<Rule> <k> kik                        </k> <x> kik </x> </Rule>
			<Rule> <k> VIMEO                      </k> <x> (vimeo|vhx) </x> </Rule>
			<Rule> <k> SIGNAL                     </k> <x> (signal\.org|whispersystems\.org) </x> </Rule>
			<Rule> <k> DISCORD                    </k> <x> discord </x> </Rule>
			<Rule> <k> HULU                       </k> <x> hulu </x> </Rule>
			<Rule> <k> DISNEY                     </k> <x> (dssedge|dssott\.qwilted\-cds\.cqloud) </x> </Rule>
			<Rule> <k> ZOOM                       </k> <x> zoom </x> </Rule>
			<Rule> <k> DROPBOX                    </k> <x> dropbox </x> </Rule>
			<Rule> <k> DEBIAN                     </k> <x> debian </x> </Rule>
			<Rule> <k> PAYPAL                     </k> <x> paypal </x> </Rule>
			<Rule> <k> PAYTM                      </k> <x> paytm </x> </Rule>
			<Rule> <k> GPAY                       </k> <x> gpay </x> </Rule>
			<Rule> <k> YANDEX                     </k> <x> yandex </x> </Rule>
			<Rule> <k> GAMING                     </k> <x> (king\.com|playhaven|game|octro|nintendo|everyplay|clashofclans|midasplayer) </x> </Rule>
			<Rule> <k> YAHOO                      </k> <x> (yahoo|yimg\.|js7k\.|oath\.) </x> </Rule>
			<Rule> <k> REDIFF                     </k> <x> rediff </x> </Rule>
			<Rule> <k> LINKEDIN                   </k> <x> (linkedin|licdn|oribi\.io) </x> </Rule>
			<Rule> <k> TRUECALLER                 </k> <x> truecaller </x> </Rule>
			<Rule> <k> SHAREPOINT                 </k> <x> (sharepoint|microsoftpersonalcontent|ha\-spo\.office|msedge) </x> </Rule>
			<Rule> <k> MS OFFICE                  </k> <x> office </x> </Rule>
			<Rule> <k> MICROSOFT WINDOWS          </k> <x> windows </x> </Rule>
			<Rule> <k> MICROSOFT                  </k> <x> (microsoft|msftncsi|msftconnecttest|sfx\.ms|msftncsi|appcenter\.ms|msn|outlook|live\.|ovi|onedrive|azure) </x> </Rule>
			<Rule> <k> ANTIVIRUS                  </k> <x> (avast|computerkolkata|kaspersky|avg|quickheal|computermumbai|computerbangalore|symantec|bitdefender) </x> </Rule>
			<Rule> <k> ONLINE BOOKING             </k> <x> (makemytrip|cleartrip|bookmyshow) </x> </Rule>
			<Rule> <k> FINANCE/BANKING            </k> <x> (onlinesbi|icicibank|moneycontrol|licindia|commodityface|manage\.com) </x> </Rule>
			<Rule> <k> IDEACELLULAR               </k> <x> ideacellular </x> </Rule>
			<Rule> <k> CLOUD SERVICE              </k> <x> (cloudfront|usercloud|sndcdn|fotapro\.com|userscloud|addthis|godaddy|ospserer|chartbeat|wizebar|gpsoneextra|gravatar|parsely|toolbarservices|infostatsserv|cedexis|turn\.com|umengcloud) </x> </Rule>
			<Rule> <k> OVI                        </k> <x> ovi </x> </Rule>
			<Rule> <k> BROWSER                    </k> <x> (ucweb|opera|mozilla|uc\.cn) </x> </Rule>
			<Rule> <k> IMAGE HOSTING              </k> <x> (pixlr|picsart|imageshack|bdupload|beautyplus\.com|imageshacki|photobucket) </x> </Rule>
			<Rule> <k> MPGOVT                     </k> <x> (samagra\.gov|mp\.nic|mponline\.gov|mpbhuabhilekhi\.nic|mp\.gov\.in) </x> </Rule>
			<Rule> <k> INDIANGOVT                 </k> <x> (\.gov\.in|emitra\.gov|uidai\.gov|\.nic\.in) </x> </Rule>
			<Rule> <k> GOVERNMENT                 </k> <x> \.gov </x> </Rule>
			<Rule> <k> CRASHLYTICS                </k> <x> crashlytics </x> </Rule>
			<Rule> <k> APPLE                      </k> <x> (apple|cable\.auth) </x> </Rule>
			<Rule> <k> PUBLIC INFORMATION         </k> <x> (accuweather|accu\-weather|openweathermap) </x> </Rule>
			<Rule> <k> MACAPPSTORE                </k> <x> adnx </x> </Rule>
			<Rule> <k> SOFTONIC                   </k> <x> softonic </x> </Rule>
			<Rule> <k> REAL ESTATES               </k> <x> cfdcn </x> </Rule>
			<Rule> <k> NETFLIX                    </k> <x> (assets\.nflxext|netflix|nflxso|nflxvideo|nflximg) </x> </Rule>
			<Rule> <k> ADOBE                      </k> <x> (adobe|lnkd\.demdex) </x> </Rule>
			<Rule> <k> ADITYA BRILA GROUP         </k> <x> adityabrila </x> </Rule>
			<Rule> <k> STOCK TRADING              </k> <x> stockmarketwatch </x> </Rule>
			<Rule> <k> CONTENT SERVER             </k> <x> (bootstrap|jquery|jassets|symcb\.com|wapkaimage|edgecastcdn) </x> </Rule>
			<Rule> <k> TECHINAL/BUSSINESS FORUMS  </k> <x> (gsmarena|mobilearena|bgr) </x> </Rule>
			<Rule> <k> STYLEBEAUTY                </k> <x> stylecraze </x> </Rule>
			<Rule> <k> SPORTS                     </k> <x> (qpic|cricketcb|cricbuzz|cricinfo) </x> </Rule>
			<Rule> <k> WEB ADS/MARKETING          </k> <x> (zedo|exoclick|inmobi|madgic|buzzcity|inmobi|flurry|liverail|vungle|trafficfactory|admob|startappexchange|nanigans|tapjoy|swrve|urbanairship|doubleclick|taboola|mcent|kontagnet|localytics|inmobbi|ads\.|mediatek|advertising|caslemedia|nanigans) </x> </Rule>
			<Rule> <k> ANDROIDMARKET              </k> <x> (9apps|9game|mobogenie|appsflyer|1mobile|voga360|samsungapps|octro|moborobo|inmobbi|mgccw|wizrocket|ksmobile|cmcm|onavo|mobogarden) </x> </Rule>
			<Rule> <k> MOBILEAPPTEST              </k> <x> apptimize </x> </Rule>
			<Rule> <k> VIDEOS_MOVIE               </k> <x> (new3gpmovies|mp4mobilemovies|o2cinemas|moviesmobile|filmymp4|videoming|moviearean|vipkhan|tubidy|krazywap|djpunab|fzmovies|mirchifun|devilwap|mrpopat|wapka\-files\.com|wapkafile|wapka\-file\.com|420wap|contentdef|enjoypur|shutterstock|vdopia|myvideosong\.in|hqmadi|saavn|swagymp3|loopme|indiaglitz|al\.cinemas) </x> </Rule>
			<Rule> <k> MP3                        </k> <x> (djmaza|mymp3song|mymp3singer|webmusic|pagalworld|waploft|freshmaza|bossmobi|djhungama|mp3slash|allmp3song|songsmp3|mp3mad|zedge|bestwapsongs|downloadming|freemaza|santabanta|songsindia|hipsongs|hindimp3|chillwap|t24wap|likewapmusic|djtune|ql\.vc|mp3\-funda|songspod|mirchistar|videomob|twlight3g) </x> </Rule>
			<Rule> <k> PORNOGRAPHY                </k> <x> (xxx|porn|xvideos|phncdn|hotchongas|3gpking|stripchat|perfectgirls|tnaflix|badmasti|sextgem|desiindian|heavy\-r|sexwap|desirebold|serviporno|badwap|sex2050|sucxsex|tubex|buildxxx|desipapa|xnxx|redtubefiles|pusssycash|xshare|nxgx|pzy\.be|lubetube\.com|anysex\.com|katestube|sextubelife|fuckandcdn|desi|fullsex|badwap|vartoken|spankbang|antarvasna|kitru|anysex|hot\-sex\-tube|taxi69|xxx|yeswegays|yourlust|worldsex|hoptopboy|pinktubemedia|xshare|shutterstock) </x> </Rule>
			<Rule> <k> TWITTER                    </k> <x> (twitter|twimg|^x\.com) </x> </Rule>
		</Rules>

		<StaticIPRules>
			<Rule>     <k> 31.13.93.3         </k><x>  facebook                                        </x></Rule>   
		</StaticIPRules>

    </Policy>
</TrisulPluginConfiguration>

```

### Specifying rules

- attribute k  
  the key to update the Base Domains counter group
- attribute x  
  the regex in RE2 format that matches
- order of matching  
  the first match is selected

| Parameters    | Defaults                    | Description                                                   |
| ------------- | -----------------------------|-------------------------------------------------------------- |
| Rules         | string of regex to app names    | The rules section map domain regexes in Google RE2 format to application names. You can add your own rules to this list and they will be picked up when Trisul-Probe is restarted |
| StaticIPRules | maps static IPs to applications | Most useful in corporate or TELCO settings when you have a fixed mapping of IP addressess to applications. Mostly used by caches  

