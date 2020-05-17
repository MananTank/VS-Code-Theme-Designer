const layout = {
	c9: {
		hex: '#193549',
		info: [
			{ name: 'editor', id: 'editor' },
			{ name: 'side bar group', id: 'side-bar-group' },
		],
	},

	c26: {
		hex: '#193549',
		info: [{ name: 'inactive tabs', id: 'inactive-tabs' }],
	},

	c10: {
		hex: '#15232d',
		info: [
			{ name: 'title bar', id: 'title-bar' },
			{ name: 'side bar', id: 'side-bar' },
		],
	},

	c27: {
		hex: '#15232d',
		info: [{ name: 'status bar', id: 'status-bar' }],
	},
	c1: {
		hex: '#122738',
		info: [
			{ name: 'activity bar', id: 'activity-bar' },
			{ name: 'line number gutter', id: 'line-gutter' },
			{ name: 'terminal', id: 'terminal' },
			{ name: 'active tab', id: 'active-tab' },
		],
	},

	c2: {
		hex: '#0d3a58',
		info: [{ name: 'active file', id: 'active-file' }],
	},
	c8: {
		hex: '#aaaaaa',
		info: [{ name: 'secondary font color', id: 'secondary-font' }],
	},
	c3: {
		hex: '#ffffff',
		info: [
			{ name: 'primary font color', id: 'primary-font', forShine: true },
			{ name: 'activity bar icons', id: 'activity-bar-icon', forShine: true },
		],
	},
};

const scopes = {
	c7: {
		hex: '#ff9d00',
		info: [
			{ name: 'conditions', id: 'if', forColor: true, pages: ['.js'] },
			{ name: 'operators', id: 'operators', forColor: true, pages: ['.js'] },
			{ name: 'import export', id: 'import', forColor: true, pages: ['.react'] },
			{ name: 'css units', id: 'css-units', forColor: true, pages: ['.css'] },
			{ name: '!important', id: 'important', forColor: true, pages: ['.css', '.stylus'] },
			{ name: 'media', id: 'media', forColor: true, pages: ['.css', '.stylus'] },
		],
	},

	c4: {
		hex: '#ffc600',
		info: [
			{ name: '=>', id: 'arrow', forColor: true, pages: ['.js'] },
			{ name: 'function name', id: 'function-name', forColor: true, pages: ['.js'] },
			{ name: 'badges', id: 'badges' },
			{ name: 'cursor', id: 'cursor', forColor: true, pages: ['.js'] },
			{ name: 'const', id: 'const', forColor: true, pages: ['.js'] },
			{ name: 'let', id: 'let', forColor: true, pages: ['.js'] },
			{ name: 'mixins', id: 'mixins', forColor: true, pages: ['.stylus'] },
			{ name: 'variable properties', id: 'var-props', forColor: true, pages: ['.js'] },
		],
	},

	c20: {
		hex: '#ffee80',
		info: [
			{ name: 'CSS values', id: 'css-values', forColor: true, pages: ['.css'] },
			{ name: 'breakpoint width', id: 'css-brw', forColor: true, pages: ['.css'] },
			{ name: '()', id: 'parentheses', forColor: true, pages: ['.js'] },
		],
	},

	c21: {
		hex: '#a5ff90',
		info: [
			{ name: 'strings', id: 'strings', forColor: true, pages: ['.js'] },
			{ name: 'css properties', id: 'css-props', forColor: true, pages: ['.css'] },
		],
	},

	c15: {
		hex: '#3ad900',
		info: [
			{ name: 'template strings', id: 'template-strings', forColor: true, pages: ['.js'] },
			{ name: 'class names', id: 'css-class', forColor: true, pages: ['.css', '.stylus'] },
			{ name: 'var( )', id: 'css-var', forColor: true, pages: ['.css'] },
		],
	},

	c19: {
		hex: '#e1efff',
		info: [
			{ name: '{ }', id: 'curly', forColor: true, pages: ['.js', '.react'] },
			{ name: ': . , ;', id: 'dots', forColor: true, pages: ['.js', '.css', '.stylus', '.react'] },
			{ name: 'pseudo', id: 'css-ps', forColor: true, pages: ['.css', '.stylus'] },
		],
	},

	c25: {
		hex: '#e1efff',
		info: [{ name: 'object', id: 'object', forColor: true, pages: ['.js'] }],
	},

	c24: {
		hex: '#e1efff',
		info: [{ name: 'variable names', id: 'var-names', forColor: true, pages: ['.js'] }],
	},

	c14: {
		hex: '#ff628c',
		info: [{ name: 'constants', id: 'constants', forColor: true, pages: ['.js'] }],
	},

	c16: {
		hex: '#fb94ff',
		info: [{ name: 'function keyword', id: 'function-keyword', forColor: true, pages: ['.js'] }],
	},

	c18: {
		hex: '#9effff',
		info: [
			{ name: '& (parent)', id: 'css-and', forColor: true, pages: ['.stylus'] },
			{ name: 'stylus variables', id: 'stylus-variables', forColor: true, pages: ['.stylus'] },
			{ name: 'css variables', id: 'css-var-name', forColor: true, pages: ['.css', '.stylus'] },
		],
	},
};

const others = {
	currentLine: {
		hex: '#1F4662',
		info: [{ name: 'current line', id: 'current-line' }],
	},
	selected: {
		hex: '#0050A4',
		info: [{ name: 'selected text', id: 'selected-text' }],
	},
	comment: {
		hex: '#0088ff',
		info: [{ name: 'comment', id: 'comment', forColor: true, pages: ['.js', '.stylus'] }],
	},
};

const fixed = {
	// used as font color
	c5: '#000000',
	// leave as is
	c13: '#A22929',
	// leave as is
	c17: '#80fcff',
	// not used in JS, TS - type name
	c22: '#80ffbb',
	// inherited component - JS and TS (not very used)
	c23: '#cccccc',
};

function makeTheme() {
	document.querySelector('textarea').textContent = `{
    "$schema": "vscode://schemas/color-theme",
    "name": "YOUR-THEME-NAME",
    // select your theme type dark/light
    "type": "dark",
    "colors": {
      // activityBar
      "activityBar.background": "${layout.c1.hex}",
      "activityBar.border": "${layout.c2.hex}",
      "activityBar.dropBackground": "${layout.c2.hex}",
      "activityBar.foreground": "${layout.c3.hex}",
      "activityBarBadge.background": "${scopes.c4.hex}",
      "activityBarBadge.foreground": "${fixed.c5}",
      // badge
      "badge.background": "${scopes.c4.hex}",
      "badge.foreground": "${fixed.c5}",
      // button
      "button.background": "${others.comment.hex}",
      "button.foreground": "${layout.c3.hex}",
      "button.hoverBackground": "${scopes.c7.hex}",
      // contrast
      "contrastActiveBorder": null,
      "contrastBorder": "${layout.c3.hex}00",
      // debug
      "debugExceptionWidget.background": "${layout.c9.hex}",
      "debugExceptionWidget.border": "${layout.c8.hex}",
      "debugToolBar.background": "${layout.c9.hex}",
      // description
      "descriptionForeground": "${layout.c8.hex}",
      // diff
      "diffEditor.insertedTextBackground": "${scopes.c15.hex}33",
      "diffEditor.insertedTextBorder": "${scopes.c15.hex}55",
      "diffEditor.removedTextBackground": "#ee3a4333",
      "diffEditor.removedTextBorder": "#ee3a4355",
      // dropdown
      "dropdown.background": "${layout.c9.hex}",
      "dropdown.border": "${layout.c10.hex}",
      "dropdown.foreground": "${layout.c3.hex}",
      // editor
      // This is the main Background color
      "editor.background": "${layout.c9.hex}",
      // this is the main text colour
      "editor.foreground": "${layout.c3.hex}",
      // Okay this part is confusing as heck!
      // Currently found item
      "editor.findMatchBackground": "#FF720066",
      // Other Found Items int the document
      "editor.findMatchHighlightBackground": "#CAD40F66",
      // WTF is this one for? I don't know
      "editor.findRangeHighlightBackground": "#243E51",
      // When you hover over something and a popup shows, this highlights that thing
      "editor.hoverHighlightBackground": "${scopes.c4.hex}33",
      // when you have something selected, but have lost focus on the editor
      "editor.inactiveSelectionBackground": "#003b8b",
      // current line styles
      "editor.lineHighlightBackground": "${others.currentLine.hex}",
      "editor.lineHighlightBorder": "${others.currentLine.hex}",
      "editor.rangeHighlightBackground": "${others.currentLine.hex}",
      // selected Text colours
      // This is the standard Select colour
      "editor.selectionBackground": "${others.selected.hex}",
      // This is the colour of the other matching elements
      "editor.selectionHighlightBackground": "${others.selected.hex}80",
      // if you tab away you can colour it differently, but ill leave this one out
      // "editor.inactiveSelectionBackground": "${others.selected.hex}",
      // Word Highlights! This happens when you move your cursor inside a variable
      // Strong is the one where your cursor currently is
      "editor.wordHighlightStrongBackground": "${layout.c3.hex}21",
      // and this one is the rest of them
      "editor.wordHighlightBackground": "${layout.c3.hex}21",
      "editorBracketMatch.background": "${layout.c2.hex}",
      "editorBracketMatch.border": "${scopes.c4.hex}80",
      "editorCodeLens.foreground": "${layout.c8.hex}",
      "editorCursor.foreground": "${scopes.c4.hex}",
      "editorError.border": "${layout.c2.hex}",
      "editorError.foreground": "${fixed.c13}",
      // gutter
      // 66
      "editorGutter.background": "${layout.c1.hex}",
      "editorGutter.addedBackground": "#3C9F4A",
      "editorGutter.deletedBackground": "${fixed.c13}",
      "editorGutter.modifiedBackground": "#26506D",
      // editorGroup
      "editorGroup.border": "${layout.c1.hex}",
      "editorGroup.dropBackground": "${layout.c1.hex}99",
      // editorGroupHeader
      "editorGroupHeader.noTabsBackground": "${layout.c26.hex}",
      "editorGroupHeader.tabsBackground": "${layout.c26.hex}",
      "editorGroupHeader.tabsBorder": "${layout.c10.hex}",
      // editorHoverWidget
      "editorHoverWidget.background": "${layout.c10.hex}",
      "editorHoverWidget.border": "${layout.c2.hex}",
      "editorIndentGuide.background": "#3B5364",
      "editorLineNumber.foreground": "${layout.c8.hex}",
      "editorLink.activeForeground": "${layout.c8.hex}",
      // editorMarkerNavigation
      "editorMarkerNavigation.background": "#3B536433",
      "editorMarkerNavigationError.background": "${fixed.c13}",
      "editorMarkerNavigationWarning.background": "${scopes.c4.hex}",
      // ruler
      "editorOverviewRuler.border": "${layout.c2.hex}",
      "editorOverviewRuler.commonContentForeground": "${scopes.c4.hex}55",
      "editorOverviewRuler.currentContentForeground": "#ee3a4355",
      "editorOverviewRuler.incomingContentForeground": "${scopes.c15.hex}55",
      "editorRuler.foreground": "${others.currentLine.hex}",
      // editorSuggestWidget
      "editorSuggestWidget.background": "${layout.c10.hex}",
      "editorSuggestWidget.border": "${layout.c10.hex}",
      "editorSuggestWidget.foreground": "${layout.c8.hex}",
      "editorSuggestWidget.highlightForeground": "${scopes.c4.hex}",
      "editorSuggestWidget.selectedBackground": "${layout.c9.hex}",
      // editorWarning
      "editorWarning.border": "${layout.c3.hex}",
      "editorWarning.foreground": "${scopes.c4.hex}",
      "editorWhitespace.foreground": "${layout.c3.hex}1a",
      "editorWidget.background": "${layout.c10.hex}",
      "editorWidget.border": "${layout.c2.hex}",
      "errorForeground": "${fixed.c13}",
      // extensionButton
      "extensionButton.prominentBackground": "${others.comment.hex}",
      "extensionButton.prominentForeground": "${layout.c3.hex}",
      "extensionButton.prominentHoverBackground": "${scopes.c7.hex}",
      "focusBorder": "${layout.c2.hex}",
      "foreground": "${layout.c8.hex}",
      // input
      "input.background": "${layout.c9.hex}",
      "input.border": "${layout.c2.hex}",
      "input.foreground": "${scopes.c4.hex}",
      "input.placeholderForeground": "${layout.c8.hex}",
      "inputOption.activeBorder": "#8dffff",
      "inputValidation.errorBackground": "${layout.c9.hex}",
      "inputValidation.errorBorder": "${scopes.c4.hex}",
      "inputValidation.infoBackground": "${layout.c9.hex}",
      "inputValidation.infoBorder": "${layout.c2.hex}",
      "inputValidation.warningBackground": "${layout.c9.hex}",
      "inputValidation.warningBorder": "${scopes.c4.hex}",
      // list
      "list.activeSelectionBackground": "${layout.c9.hex}",
      "list.activeSelectionForeground": "${layout.c8.hex}",
      "list.dropBackground": "${layout.c2.hex}",
      "list.focusBackground": "${layout.c2.hex}",
      "list.focusForeground": "${layout.c8.hex}",
      "list.highlightForeground": "${scopes.c4.hex}",
      "list.hoverBackground": "${layout.c9.hex}",
      "list.hoverForeground": "${layout.c8.hex}",
      "list.inactiveSelectionBackground": "${layout.c2.hex}",
      "list.inactiveSelectionForeground": "${layout.c8.hex}",
      // menu
      "menu.background": "${layout.c1.hex}",
      // merge
      "merge.border": "${layout.c3.hex}",
      "merge.commonContentBackground": "#c97d0c",
      "merge.commonHeaderBackground": "#c97d0c",
      "merge.currentContentBackground": "#2F7366",
      "merge.currentHeaderBackground": "#2F7366",
      "merge.incomingContentBackground": "#185294",
      "merge.incomingHeaderBackground": "#185294",
      // notification colors - The colors below only apply for VS Code versions 1.21 and higher.
      "notificationCenter.border": "${scopes.c4.hex}",
      "notificationCenterHeader.foreground": "${layout.c8.hex}",
      "notificationCenterHeader.background": "${layout.c1.hex}",
      "notificationToast.border": "${scopes.c4.hex}",
      "notifications.foreground": "${layout.c8.hex}",
      "notifications.background": "${layout.c1.hex}",
      "notifications.border": "${scopes.c4.hex}",
      "notificationLink.foreground": "${scopes.c4.hex}",
      // panel
      "panel.background": "${layout.c1.hex}",
      "panel.border": "${layout.c2.hex}",
      "panelTitle.activeBorder": "${scopes.c4.hex}",
      "panelTitle.activeForeground": "${scopes.c4.hex}",
      "panelTitle.inactiveForeground": "${layout.c8.hex}",
      // "peekView
      "peekView.border": "${scopes.c4.hex}",
      "peekViewEditor.background": "${layout.c9.hex}",
      "peekViewEditor.matchHighlightBackground": "${layout.c9.hex}00",
      "peekViewEditorGutter.background": "${layout.c1.hex}",
      "peekViewResult.background": "${layout.c10.hex}",
      "peekViewResult.fileForeground": "${layout.c8.hex}",
      "peekViewResult.lineForeground": "${layout.c3.hex}",
      "peekViewResult.matchHighlightBackground": "${layout.c2.hex}",
      "peekViewResult.selectionBackground": "${layout.c2.hex}",
      "peekViewResult.selectionForeground": "${layout.c3.hex}",
      "peekViewTitle.background": "${layout.c10.hex}",
      "peekViewTitleDescription.foreground": "${layout.c8.hex}",
      "peekViewTitleLabel.foreground": "${scopes.c4.hex}",
      // picker
      "pickerGroup.border": "${layout.c2.hex}",
      "pickerGroup.foreground": "${layout.c8.hex}",
      // progressBar
      "progressBar.background": "${scopes.c4.hex}",
      // scrollbar
      "scrollbar.shadow": "${fixed.c5}",
      "scrollbarSlider.activeBackground": "#355166cc",
      "scrollbarSlider.background": "${others.currentLine.hex}80",
      "scrollbarSlider.hoverBackground": "#406179cc",
      // selection
      "selection.background": "${others.selected.hex}",
      // sidebar
      "sideBar.background": "${layout.c10.hex}",
      "sideBar.border": "${layout.c2.hex}",
      "sideBar.foreground": "${layout.c8.hex}",
      "sideBarSectionHeader.background": "${layout.c9.hex}",
      "sideBarSectionHeader.foreground": "${layout.c8.hex}",
      "sideBarTitle.foreground": "${layout.c8.hex}",
      // statusBar
      "statusBar.background": "${layout.c27.hex}",
      "statusBar.border": "${layout.c2.hex}",
      "statusBar.debuggingBackground": "${layout.c10.hex}",
      "statusBar.debuggingBorder": "${scopes.c4.hex}",
      "statusBar.debuggingForeground": "${scopes.c4.hex}",
      "statusBar.foreground": "${layout.c8.hex}",
      "statusBar.noFolderBackground": "${layout.c27.hex}",
      "statusBar.noFolderBorder": "${layout.c2.hex}",
      "statusBar.noFolderForeground": "${layout.c8.hex}",
      "statusBarItem.activeBackground": "${others.comment.hex}",
      "statusBarItem.hoverBackground": "${layout.c2.hex}",
      "statusBarItem.prominentBackground": "${layout.c27.hex}",
      "statusBarItem.prominentHoverBackground": "${layout.c2.hex}",
      // tab
      "tab.activeBackground": "${layout.c1.hex}",
      "tab.activeForeground": "${layout.c3.hex}",
      "tab.border": "${layout.c10.hex}",
      "tab.activeBorder": "${scopes.c4.hex}",
      "tab.inactiveBackground": "${layout.c26.hex}",
      "tab.inactiveForeground": "${layout.c8.hex}",
      "tab.unfocusedActiveForeground": "${layout.c8.hex}",
      "tab.unfocusedInactiveForeground": "${layout.c8.hex}",
      // --- workbench: terminal
      "terminal.ansiBlack": "${fixed.c5}",
      "terminal.ansiRed": "${scopes.c14.hex}",
      "terminal.ansiGreen": "${scopes.c15.hex}",
      "terminal.ansiYellow": "${scopes.c4.hex}",
      "terminal.ansiBlue": "${others.comment.hex}",
      "terminal.ansiMagenta": "${scopes.c16.hex}",
      "terminal.ansiCyan": "${fixed.c17}",
      "terminal.ansiWhite": "${layout.c3.hex}",
      "terminal.ansiBrightBlack": "${others.selected.hex}",
      "terminal.ansiBrightRed": "${scopes.c14.hex}",
      "terminal.ansiBrightGreen": "${scopes.c15.hex}",
      "terminal.ansiBrightYellow": "${scopes.c4.hex}",
      "terminal.ansiBrightBlue": "${others.comment.hex}",
      "terminal.ansiBrightMagenta": "${scopes.c16.hex}",
      "terminal.ansiBrightCyan": "${fixed.c17}",
      "terminal.ansiBrightWhite": "${layout.c9.hex}",
      "terminal.background": "${layout.c1.hex}",
      "terminal.foreground": "${layout.c3.hex}",
      "terminalCursor.background": "${scopes.c4.hex}",
      "terminalCursor.foreground": "${scopes.c4.hex}",
      // Git status colors in File Explorer
      "gitDecoration.modifiedResourceForeground": "${scopes.c4.hex}",
      "gitDecoration.deletedResourceForeground": "${scopes.c14.hex}",
      "gitDecoration.untrackedResourceForeground": "${scopes.c15.hex}",
      "gitDecoration.ignoredResourceForeground": "#808080",
      "gitDecoration.conflictingResourceForeground": "#FF7200",
      // textBlockQuote
      "textBlockQuote.background": "${layout.c9.hex}",
      "textBlockQuote.border": "${others.comment.hex}",
      "textCodeBlock.background": "${layout.c9.hex}",
      "textLink.activeForeground": "${others.comment.hex}",
      "textLink.foreground": "${others.comment.hex}",
      "textPreformat.foreground": "${scopes.c4.hex}",
      "textSeparator.foreground": "${layout.c2.hex}",
      "titleBar.activeBackground": "${layout.c10.hex}",
      "titleBar.activeForeground": "${layout.c3.hex}",
      "titleBar.inactiveBackground": "${layout.c9.hex}",
      "titleBar.inactiveForeground": "${layout.c3.hex}33",
      "walkThrough.embeddedEditorBackground": "${layout.c2.hex}",
      "welcomePage.buttonBackground": "${layout.c9.hex}",
      "welcomePage.buttonHoverBackground": "${layout.c2.hex}",
      "widget.shadow": "${fixed.c5}26"
    },
    "tokenColors": [


      {
        "name": "Comment",
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
          "fontStyle": "italic",
          "foreground": "${others.comment.hex}"
        }
      },
      {
        "name": "Constant",
        "scope": "constant",
        "settings": {
          "foreground": "${scopes.c14.hex}"
        }
      },
      {
        "name": "Entity",
        "scope": "entity",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "Invalid",
        "scope": "invalid",
        "settings": {
          "foreground": "#f44542"
        }
      },
      {
        "name": "Storage Type Function",
        "scope": "storage.type.function",
        "settings": {
          "foreground": "${scopes.c7.hex}"
        }
      },
      {
        "name": "Keyword",
        "scope": "keyword, storage.type.class",
        "settings": {
          "foreground": "${scopes.c7.hex}"
        }
      },
      {
        "name": "Meta",
        "scope": "meta",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
          "name": "Meta JSX",
          "scope": [
              "meta.jsx.children",
              "meta.jsx.children.js",
              "meta.jsx.children.tsx"
          ],
          "settings": {
              "foreground": "${scopes.c21.hex}"
          }
      },
      {
        "name": "Meta Brace",
        "scope": "meta.brace",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "Punctuation",
        "scope": "punctuation",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "Punctuation Parameters",
        "scope": "punctuation.definition.parameters",
        "settings": {
          "foreground": "${scopes.c20.hex}"
        }
      },
      {
        "name": "Punctuation Template Expression",
        "scope": "punctuation.definition.template-expression",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "Storage Type Arrow Function",
        "scope": "storage.type.function.arrow",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "String",
        "scope": ["string", "punctuation.definition.string"],
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "String Template",
        "scope": ["string.template", "punctuation.definition.string.template"],
        "settings": {
          "foreground": "${scopes.c15.hex}"
        }
      },
      {
        "name": "Support",
        "scope": "support",
        "settings": {
          "foreground": "${fixed.c22}"
        }
      },
      {
        "name": "Support Function",
        "scope": "support.function",
        "settings": {
          "foreground": "${scopes.c7.hex}"
        }
      },
      {
        "name": "Support Variable Property DOM",
        "scope": "support.variable.property.dom",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "Variable",
        "scope": "variable",
        "settings": {
          "foreground": "${scopes.c24.hex}"
        }
      },
      {
        "name": "[CSS] - Entity",
        "scope": ["source.css entity", "source.stylus entity"],
        "settings": {
          "foreground": "${scopes.c15.hex}"
        }
      },
      {
        "name": "[CSS] - ID Selector",
        "scope": "entity.other.attribute-name.id.css",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },

      {
        "name": "[CSS] - psudeo class",
        "scope": "entity.other.attribute-name.pseudo-class.css",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[CSS] - Element Selector",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[CSS] - Support",
        "scope": ["source.css support", "source.stylus support"],
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[CSS] - Constant",
        "scope": [
          "source.css constant",
          "source.css support.constant",
          "source.stylus constant",
          "source.stylus support.constant"
        ],
        "settings": {
          "foreground": "${scopes.c20.hex}"
        }
      },
      {
        "name": "[CSS] - String",
        "scope": [
          "source.css string",
          "source.css punctuation.definition.string",
          "source.stylus string",
          "source.stylus punctuation.definition.string"
        ],
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[CSS] - Variable",
        "scope": ["source.css variable", "source.stylus variable"],
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[HTML] - Entity Name",
        "scope": "text.html.basic entity.name",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[HTML] - ID value",
        "scope": "meta.toc-list.id.html",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[HTML] - Entity Other",
        "scope": "text.html.basic entity.other",
        "settings": {
          "fontStyle": "italic",
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[HTML] - Script Tag",
        "scope": "meta.tag.metadata.script.html entity.name.tag.html",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name":
          "[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes",
        "scope":
          "punctuation.definition.string.begin, punctuation.definition.string.end",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[INI] - Entity",
        "scope": "source.ini entity",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[INI] - Keyword",
        "scope": "source.ini keyword",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[INI] - Punctuation Definition",
        "scope": "source.ini punctuation.definition",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[INI] - Punctuation Separator",
        "scope": "source.ini punctuation.separator",
        "settings": {
          "foreground": "${scopes.c7.hex}"
        }
      },
      {
        "name": "[JAVASCRIPT] - Storage Type Function",
        "scope": "source.js storage.type.function",
        "settings": {
          "foreground": "${scopes.c16.hex}"
        }
      },
      {
        "name": "[JAVASCRIPT] - Variable Language",
        "scope": "variable.language, entity.name.type.class.js",
        "settings": {
          "foreground": "${scopes.c16.hex}"
        }
      },
      {
        "name": "[JAVASCRIPT] - Inherited Component",
        "scope": "entity.other.inherited-class.js",
        "settings": {
          "foreground": "${fixed.c23}"
        }
      },
      {
        "name": "[PYTHON] - Self Argument",
        "scope": "variable.parameter.function.language.special.self.python",
        "settings": {
          "foreground": "${scopes.c16.hex}"
        }
      },
      {
        "name": "[JSON] - Support",
        "scope": "source.json support",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[JSON] - String",
        "scope": [
          "source.json string",
          "source.json punctuation.definition.string"
        ],
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Heading Punctuation",
        "scope": "punctuation.definition.heading.markdown",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Heading Name Section",
        "scope": [
          "entity.name.section.markdown",
          "markup.heading.setext.1.markdown",
          "markup.heading.setext.2.markdown"
        ],
        "settings": {
          "foreground": "${scopes.c4.hex}",
          "fontStyle": "bold"
        }
      },
      {
        "name": "[MARKDOWN] - Paragraph",
        "scope": "meta.paragraph.markdown",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Quote Punctuation",
        "scope": "beginning.punctuation.definition.quote.markdown",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Quote Paragraph",
        "scope": "markup.quote.markdown meta.paragraph.markdown",
        "settings": {
          "fontStyle": "italic",
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Separator",
        "scope": "meta.separator.markdown",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Emphasis Bold",
        "scope": "markup.bold.markdown",
        "settings": {
          "fontStyle": "bold",
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Emphasis Italic",
        "scope": "markup.italic.markdown",
        "settings": {
          "fontStyle": "italic",
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Lists",
        "scope": "beginning.punctuation.definition.list.markdown",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Link Title",
        "scope": "string.other.link.title.markdown",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Link/Image Title",
        "scope": [
          "string.other.link.title.markdown",
          "string.other.link.description.markdown",
          "string.other.link.description.title.markdown"
        ],
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Link Address",
        "scope": [
          "markup.underline.link.markdown",
          "markup.underline.link.image.markdown"
        ],
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Inline Code",
        "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[MARKDOWN] - Code Block",
        "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[PUG] - Entity Name",
        "scope": "text.jade entity.name",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[PUG] - Entity Attribute Name",
        "scope": "text.jade entity.other.attribute-name.tag",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "[PUG] - String Interpolated",
        "scope": "text.jade string.interpolated",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Entity Name Type",
        "scope": "source.ts entity.name.type",
        "settings": {
          "foreground": "${fixed.c22}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Keyword",
        "scope": "source.ts keyword",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Punctuation Parameters",
        "scope": "source.ts punctuation.definition.parameters",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Punctuation Arrow Parameters",
        "scope": "meta.arrow.ts punctuation.definition.parameters",
        "settings": {
          "foreground": "${scopes.c21.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Storage",
        "scope": "source.ts storage",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Variable Language",
        "scope": "variable.language, entity.name.type.class.ts, entity.name.type.class.tsx",
        "settings": {
          "foreground": "${scopes.c16.hex}"
        }
      },
      {
        "name": "[TYPESCRIPT] - Inherited Component",
        "scope": "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
        "settings": {
          "foreground": "${fixed.c23}"
        }
      },
      {
        "name": "[PHP] - Entity",
        "scope": "source.php entity",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[JAVASCRIPT] - Variable other Properties",
        "scope" : "variable.other.property.js",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[JAVASCRIPT] - JS objects",
        "scope" : "variable.other.object.js",
        "settings": {
          "foreground": "${scopes.c25.hex}"
        }
      },

      {
        "name": "[PHP] - Variables",
        "scope": "variable.other.php",
        "settings": {
          "foreground": "${scopes.c4.hex}"
        }
      },
      {
        "name": "[C#] - Annotations",
        "scope": "storage.type.cs",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[C#] - Properties",
        "scope": "entity.name.variable.property.cs",
        "settings": {
          "foreground": "${scopes.c18.hex}"
        }
      },
      {
        "name": "[C#] - Storage modifiers",
        "scope": "storage.modifier.cs",
        "settings": {
          "foreground": "${fixed.c22}"
        }
      },
      {
        "name": "Italicsify for Operator Mono",
        "scope": [
          "modifier",
          "this",
          "comment",
          "storage.modifier.js",
          "storage.modifier.ts",
          "storage.modifier.tsx",
          "entity.other.attribute-name.js",
          "entity.other.attribute-name.ts",
          "entity.other.attribute-name.tsx",
          "entity.other.attribute-name.html"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "[CSHARP] - Modifiers and keyword types",
        "scope": "storage.modifier.cs, keyword.type.cs",
        "settings": {
          "foreground": "${scopes.c16.hex}"
        }
      },
      {
        "name": "[CSHARP] - Storage types",
        "scope": "storage.type.cs",
        "settings": {
          "foreground": "${fixed.c22}"
        }
      },
      {
        "name": "[CSHARP] - Namespaces, parameters, field variables, properties",
        "scope": "entity.name.type.namespace.cs, entity.name.variable.parameter.cs, entity.name.variable.field.cs, entity.name.variable.property.cs",
        "settings": {
          "foreground": "${scopes.c19.hex}"
        }
      }
    ]
  }
  `;
}
