+++
author = "Chris Short"
categories = ["Ansible", "Red Hat", "2015"]
date = 2015-10-17T07:53:00Z
description = ""
draft = true
image = "https://shortcdn.com/file/chrisshort/ansible_circleA_red.png"
slug = "using-ansible-vault-effectively"
tags = ["ansible", "ansible-vault", "security"]
title = "Using Ansible Vault Effectively"

+++

[**Ansible**](http://www.ansible.com/) is a great orchestration tool. The low barrier to entry and simplicity of Ansible are why so many people that start using it love it. But there is one feature in Ansible that probably should be used more often. That feature is [**Ansible Vault**](http://docs.ansible.com/ansible/playbooks_vault.html).

{{< eo_signup >}}

> "Vault" is a feature of ansible that allows keeping sensitive data such as passwords or keys in encrypted files, rather than as plaintext in your playbooks or roles. These vault files can then be distributed or placed in source control.

This means you can store just about anything in Ansible files. SSH keys, MySQL user passwords, and secret API keys are all fair game in Ansible Vaults. Then you can safely check this data into your repo with a reasonable expectation that it is safe from Github crawlers and other prying eyes.

The best use case for Ansible Vaults are your variable files (group\_vars and host\_vars). I have a quite a few group\_vars and not so many host\_vars. It's nice to be able to store secrets as reusable variables. Keeping them all in one place is even better. I also take it a step further by having a policy of, "If one variable file is an Ansible Vault they're all Ansible Vaults." Why? Allow me to explain...

## Creating an Ansible Vault

1. `ansible-vault create BARF.yml`
2. Enter Vault Password at Prompt
3. Confirm Vault Password
4. Input your data
5. Save file

You can no longer use vim (or Emacs, nano, etc.) to edit Ansible Vault files... They're encrypted!

![vim ansible vault](https://shortcdn.com/file/chrisshort/vim_ansible_vault.png)

Ansible Vault adds a layer of security so it's inherently harder to use (but not much harder). Don't make it harder by sporadically encrypting some variable files and not others. Waste the handful of kilobytes of disk and make all your variable files Ansible Vaults.

{{< carbon >}}

Previously, I've given a one-liner on how to [Grep Multiple Ansible Vault Files](/grep-multiple-ansible-vault-files/) that is based off this model as well.

## Editing an Ansible Vault

1. `ansible-vault edit ~/BARF.yml`
2. Enter Vault Password at Prompt
3. Edit your data
4. Save File

Ansible Vault files, at first blush, seem a little cumbersome to work with. But, the good folks at Ansible gave us `vault_password_file`.

> [**vault\_password\_file**](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#default-vault-password-file) Configures the path to the Vault password file as an alternative to specifying --vault-password-file on the command line

vault\_password\_file is a file with your Ansible Vault password in it. For example: `~/.vault` is a valid place for a vault\_password\_file. **Your vault\_password\_file should be outside of any public repository and only readable/writable by you**. You can specify vault\_password\_file as a command line argument:

`ansible-vault edit --vault-password-file ~/.vault BARF.yml`

You can define vault\_password\_file in your [Ansible Configuration file](https://docs.ansible.com/ansible/latest/reference_appendices/config.html) and never have to use `--vault-password-file` nor be prompted for the password on the CLI (you will see an error if the vault\_password\_file does not exist).

I have taken this a step further and created some helper scripts so the various Ansible Vault commands can be run quickly and easily. You can find the [ansible-vault-helpers on Github](https://github.com/chris-short/ansible-vault-helpers) or [download them as a zip file](https://github.com/chris-short/ansible-vault-helpers/archive/master.zip).

## ansible-vault-helpers

The ansible-vault-helper scripts assume your Ansible Vault password is in a file (outside of any public repo and only readable/writable by you) in your home directory, specifically, ~/.vault.

Scripts are intended to be somewhere in your path for convenience. Adding this repo to your path is highly recommended.

More on Ansible Vault at http://docs.ansible.com/ansible/playbooks_vault.html

**avcreate**: Creates Ansible Vault files

**avdecrypt**: Removes the encryption from Ansible Vault files (converts file to plaintext)

**avedit**: Decrypts file for use in your text editor (vim for Ansible Vaults)

**avencrypt**: Encrypts file using Ansible Vault

**avview**: Read-only view of an Ansible Vault file (less for Ansible Vaults)


