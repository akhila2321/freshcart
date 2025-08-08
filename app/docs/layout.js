"use client";

// import custom components
import DocsNavbar from "components/docs/DocsNavbar";
import DocsSidebar from "components/docs/DocsSidebar";

// import required hooks
import useToggle from "hooks/useToggle";

export default function DocsLayout({ children }) {
  const { isToggled: openNav, toggle: navToggle } = useToggle();

  return (
    <main className="docs-main-wrapper">
      <DocsNavbar navToggle={navToggle} />
      <DocsSidebar openNav={openNav} />
      <div className="docs-wrapper">{children}</div>
    </main>
  );
}