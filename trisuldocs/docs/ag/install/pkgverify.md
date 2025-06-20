---
sidebar_position: 5
---

# Verifying Packages

Official Trisul package files (RPM and DEB) are signed with a GnuPG key available at https://trisul.org/pubkey.gpg

This page describes how you can verify these package files to ensure 
- These are created by Unleash Networks official build systems
- They have not been tampered with


## Verifying DEB for Ubuntu 24.04


To verify a `deb` package you can download the corresponding `.asc` which contains the signature used to verity.

```bash

# Verify with the ASC signature file 
gpg --verify trisul-probe-xyz.deb.asc trisul-probe.deb

```

If all is well you will get a message like this.

```
gpg: Good signature from "Trisul Networks <support@trisul.org>" [unknown]
```

## Verifying a DEB for older Ubuntu versions

You will be using a package called `dpkg-sig` to verify the DEBs. Make sure it is installed first.

The steps are :

1. Import our public key into your key ring using `gpg --import pubkey.gpg`
2. Verify using `dpkg-sig --verify pkg.deb`

A sample verify session would look like below

```bash
$ wget https://trisul.org/pubkey.gpg 

$ gpg --import pubkey.gpg 
gpg: key A6CC1B18: public key "Unleash Networks Support (UNPL) <info@unleashnetworks.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)

$ gpg --verify webtrisul_7.0.2522-jammy_amd64.deb 
Processing trisul_3.0.1316_i386.deb...

gpg: Good signature from "Unleash Networks Support (UNPL) <info@unleashnetworks.com>" [unknown]
```


## Verifying RPMs 

We will use the `--checksig` option to verify

The steps are

1. Import our public key `rpm --import https://trisul.org/pubkey.gpg`
2. Verify using `rpm --checksig trisulpackage.rpm`

Look for the OK message.

A sample verify session would look like below

```bash
$ rpm --import https://trisul.org/pubkey.gpg
$ rpm --checksig webtrisul-7.0.2522-1.el8.x86_64.rpm
webtrisul-7.0.2522-1.el8.x86_64.rpm: digests signatures OK
```

The RPM verification was successful if you see the  **OK**

