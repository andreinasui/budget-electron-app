const isMac = process.platform === "darwin";
const MenuBarTemplate = [
  {
    label: "File",
    submenu: [
      { label: "New budget sheet" },
      { label: "New budget notebook" },
      { type: "separator" },
      { label: "Open budget sheet" },
      { label: "Open budget notebook" },
      { type: "separator" },
      isMac ? { role: "close" } : { role: "quit" },
    ],
  },
  // Edit menu
  {
    role: "editMenu",
  },
  // Menu menu
  { label: "Menu" },
  // Help menu
  { label: "Help", submenu: [{ type: "separator" }, { label: "About" }] },
];

module.exports.MenuBarTemplate = MenuBarTemplate;
