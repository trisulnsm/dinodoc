# Reports

Trisul comes with dozens of pre-defined reports for your use. You can
 either view them on the browser or send them via email periodically.

import DocCardList from '@theme/DocCardList';

<DocCardList />



#### Creating Your Own Reports

Using the [Trisul Remote Protocol API](/docs/trp) you can write Ruby scripts that create your own reports.

## Report Time

For each report type, you can select a number of predefined time windows using a [Time Selector](/docs/guide/ug/ui/elements#time-selector)

## Adding Logos

1. Logos can be placed in 3 corners of the PDF (all except the top-right).
2. Replace these 3 images (32×32) in the `/usr/local/share/webtrisul/public/images` directory:
   - `logo_tlhs.png`: placed on the top-left of the PDF
   - `logo_blhs.png`: placed on the bottom-left of the PDF
   - `logo_brhs.png`: placed on the bottom-right of the PDF

## Customizing Names

Refer to the [oem_settings](/docs/guide/ag/context/customize) for instructions.