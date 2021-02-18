var editorInstance = CKEDITOR.replace( document.getElementById( "editor1" ), {
  language_list: ["ar:Arabic:rtl", "fr:French", "es:Spanish", "en:English"],
  disableNativeSpellChecker: true,
  removeButtons: "Subscript,Superscript",
  extraPlugins: "colorbutton,print,font,autolink,justify",
  removePlugins:
    "sourcearea,maximize,image,stylescombo,scayt,wsc,elementspath,blockquote,link,specialchar,resize",
  title: this.title,
  readOnly: false,
  resize_enabled: false,
  autoGrow_minHeight: 200,
  autoGrow_bottomSpace: 50,
  autoGrow_onStartup: true,
  toolbarStartupExpanded: false,
  toolbarGroups: [
    { name: "others" },
    { name: "clipboard", groups: ["clipboard", "undo"] },
    { name: "editing", groups: ["find", "selection", "spellchecker"] },
    { name: "links" },
    { name: "insert" },
    { name: "forms" },
    { name: "tools" },
    { name: "styles" },
    "/",
    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
    {
      name: "paragraph",
      groups: ["list", "indent", "blocks", "align", "bidi"]
    },
    { name: "colors" },
    { name: "document", groups: ["mode", "document", "doctools"] }
  ]
});
