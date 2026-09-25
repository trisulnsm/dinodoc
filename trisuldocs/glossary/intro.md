---
id: intro
title: Trisul Glossary
hide_table_of_contents: true
sidebar_label: Trisul Glossary
sidebar_position: 0
slug: /glossary
---

import React from 'react';
import SearchBar from '@theme/SearchBar';

export const SearchPlaceholderUpdater = () => {
  React.useEffect(() => {
    const input = document.querySelector('.glossary-search-wrapper input');
    if (input) {
      input.setAttribute('placeholder', 'Search networking terms...');
    }
  }, []);
  return null;
};



<div
  style={{
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
    background:
      "linear-gradient(135deg, rgba(0,136,255,0.08), rgba(0,255,170,0.05))",
    borderRadius: "20px",
  }}
>

<h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
  Network Glossary
</h1>

<p
  style={{
    fontSize: "1.25rem",
    maxWidth: "800px",
    marginBottom: "2rem",
    color: "var(--ifm-color-emphasis-700)",
  }}
>
  Explore networking, security, NetFlow, observability, ISP, IPDR, and
  infrastructure terminology in simple, practical language.
</p>

<div className="glossary-search-wrapper">
  <SearchBar />
  <SearchPlaceholderUpdater />
</div>

<div
  style={{
    marginTop: "3rem",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  <span className="badge badge--primary">NetFlow</span>
  <span className="badge badge--secondary">IPDR</span>
  <span className="badge badge--info">DDoS</span>
  <span className="badge badge--success">ASN</span>
  <span className="badge badge--warning">Traffic Analysis</span>
  <span className="badge badge--danger">Network Security</span>
</div>

</div>

**Browse by letter:** [A](/glossary/a) · [B](/glossary/b) · [C](/glossary/c) · [D](/glossary/d) · [E](/glossary/e) · [F](/glossary/f) · [G](/glossary/g) · [H](/glossary/h) · [I](/glossary/i) · [J](/glossary/j) · [K](/glossary/k) · [L](/glossary/l) · [M](/glossary/m) · [N](/glossary/n) · [O](/glossary/o) · [P](/glossary/p) · [Q](/glossary/q) · [R](/glossary/r) · [S](/glossary/s) · [T](/glossary/t) · [U](/glossary/u) · [V](/glossary/v) · [W](/glossary/w) · [X](/glossary/x)

Looking for the terms Trisul uses in its own docs and UI? See [Trisul Terminology](/docs/guide/learntrisul/terminology).
