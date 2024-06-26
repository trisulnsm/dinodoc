# trisul\_reencrypt : Reencrypt PCAP files

Trisul stores all its PCAP files in an encrypted format. It uses a
stream encryption cipher AES-128-CTR. Using `trisul_reencrypt` you can
change the passphrase and reencrypt all files with the new passphrase.

Use case: Employees leave the organization and the administrator wants
to re-encrypt all the PCAP files.

## Usage

Type `man trisul_reencrypt` for a complete list of available options.

```language-bash
trisul_reencrypt - rencrypts Trisul packet capture files with a new passphrase


OPTIONS
   -i, --infile=FILENAME
          The input packet capture file. It needs to be in Trisul capture format.

   -x, --decrypt-key=FILENAME
          The file that contains the old passphrase.  This is used to decrypt the input file.

   -o, --outfile=FILENAME
          The output file. NOTE:  The output file in Trisul format cannot be located on a tmpfs partition.

   -e, --encrypt-key=FILENAME
          The file that contains the new passphrase.  This is used to encrypt the output file.  This will be the new passphrase file after trisul_rencrypt has finished.
```
