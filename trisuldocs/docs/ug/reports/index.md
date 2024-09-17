# Reports

Trisul comes with dozens of pre-defined reports for your use. You can
 either view them on the browser or send them via email periodically.

import DocCardList from '@theme/DocCardList';

<DocCardList />



#### Creating Your Own Reports

Using the [Trisul Remote Protocol API](/docs/trp) you can write Ruby scripts that create your own reports.

## Report Time

For each report type, you can easily select a number of predefined time windows using a [Time Selector](/docs/ug/ui/elements#time-selector)

## Adding Logos

1. Logos can be placed in the 3 corners of the PDF except the top-right
2. You need to replace 3 images (32×32) in the /usr/local/share/webtrisul/public/images directory
3. The images names are expected to named as follows
4. logo_tlhs.png → This image is placed on the top-left of the PDF
5. logo_blhs.png → This image is placed on the bottom-left of the PDF
6. logo_brhs.png → This image is placed on the bottom-right of the PDF

## Customizing Names

Refer to the [oem_settings](/docs/ag/webadmin/customize) for instructions.