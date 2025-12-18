import React from 'react';
import OriginalTOC from '@theme-original/TOC';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function TOCWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const tocLabel = siteConfig?.customFields?.tocLabel; // read from customFields

  // Optional per-page override via frontMatter: set showTocLabel: false
  const { frontMatter } = useDoc() || {};
  const pageHidden = frontMatter && frontMatter.showTocLabel === false;

  const label = tocLabel && !pageHidden ? tocLabel : null;

  return (
    <>
      {label && (
        // Use a semantic element if you prefer <h3> — choose based on a11y needs
        <div className="global-toc-label" aria-hidden="false">
          {label}
        </div>
      )}
      <OriginalTOC {...props} />
    </>
  );
}

