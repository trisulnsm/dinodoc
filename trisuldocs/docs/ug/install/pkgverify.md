---
sidebar_position: 5
---

# Verifying packages

All of ourDEBandRPMpackages are signed with ourGPGkey.

All packages are signed by ourGPGpublic key, available athttp://trisul.org/pubkey.gpg

## Verify a rpm

The steps are

1. Import our public key`rpm --import http://trisul.org/pubkey.gpg`
2. Verify using`rpm --checksig trisulpackage.rpm`

Look for the OK message.

A sample verify session would look like below

```
[root@localhost ~]# rpm --import http://trisul.org/pubkey.gpg
[root@localhost ~]# rpm --checksig webtrisul-3.0.1065-0.el6.x86_64.rpm
webtrisul-3.0.1065-0.el6.x86_64.rpm: rsa sha1 (md5) pgp md5 OK
```

TheRPMverification was successful if you see the status end with**pgp md5 OK**

## Verify a deb

You will be using a package called`dpkg-sig`to verify the DEBs. Make sure it is installed first.

The steps are :

1. Import our public key into your key ring using`gpg --import pubkey.gpg`
2. Verify using`dpkg-sig --verify pkg.deb`

A sample verify session would look like below

```bash
nsmdemo@ubu22:~$ wget http://trisul.org/pubkey.gpg 
nsmdemo@ubu22:~$ gpg --import pubkey.gpg 
gpg: key A6CC1B18: public key "Unleash Networks Support (UNPL) <info@unleashnetworks.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
nsmdemo@ubu22:~$ dpkg-sig --verify trisul_3.0.1316_i386.deb 
Processing trisul_3.0.1316_i386.deb...
GOODSIG _gpgbuilder 3024CAB9A68659FE4E4E3A0639A67B00A6CC1B18 1367065944
```

The output of dpkg-sig —verify must start withGOODSIG

The verification was successful if you see the status line start with**GOODSIG**
