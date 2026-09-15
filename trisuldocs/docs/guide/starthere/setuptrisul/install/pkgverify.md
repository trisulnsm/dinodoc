---
sidebar_position: 5
---

# Verifying Packages

This page explains how to check that the packages you downloaded for Trisul are genuine and untampered. Official Trisul package files, whether RPM or DEB are signed with a public key to confirm that the packages installing was indeed built by the official developers and has not been altered.

The official Trisul package files (RPM and DEB) are signed with a GnuPG key available at https://trisul.org/pubkey.gpg. So by verifying the signature, you ensure authenticity.


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

For older Ubuntu versions, verification is done using the `dpkg-sig` tool. Install it if it’s not already available.

Then:

1. Import our public key using `gpg --import pubkey.gpg`
2. Verify the DEB using `dpkg-sig --verify pkg.deb`

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

If you are installing Trisul using RPM packages, you can verify their authenticity with the `--checksig` option.

The steps are:

1. Import our public key `rpm --import https://trisul.org/pubkey.gpg`
2. Verify the package using `rpm --checksig trisulpackage.rpm`

When the verification is successful, it should look something like this,

```bash
$ rpm --import https://trisul.org/pubkey.gpg
$ rpm --checksig webtrisul-7.0.2522-1.el8.x86_64.rpm
webtrisul-7.0.2522-1.el8.x86_64.rpm: digests signatures OK
```

3. The RPM verification was successful if you see the  **OK**

Now that your packages are verified, go ahead and move to the installation section.
