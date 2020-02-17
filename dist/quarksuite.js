require("@webcomponents/webcomponentsjs/webcomponents-bundle.js");var n,e=(n=require("prismjs"))&&"object"==typeof n&&"default"in n?n.default:n,t=require("hybrids"),a=Object.freeze(["\n  <style>\n    :host {\n      display: block;\n    }\n    :host[hidden] {\n      display: none;\n    }\n  </style>\n"]),l=t.html(a),o=Object.freeze(["\n    ",'\n    <style>\n      :host {\n        --form-flow: column wrap;\n        --form-font: sans-serif;\n        --form-margins: 0 0 1.25em 0;\n\n        --button-bg: white;\n        --button-fg: black;\n        --button-font-size: 1.25em;\n        --button-border: 4px solid black;\n        --button-radius: 0.5em;\n        --button-padding: 1em;\n      }\n\n      form {\n        display: flex;\n        flex-flow: var(--form-flow);\n        font-family: var(--form-font);\n        margin: var(--form-margins);\n      }\n\n      ::slotted(button) {\n        background: var(--button-bg);\n        border: var(--button-border);\n        border-radius: var(--button-radius);\n        color: var(--button-fg);\n        font-size: var(--button-font-size);\n        padding: var(--button-padding);\n      }\n    </style>\n    <form action="">\n      <slot></slot>\n    </form>\n  ']),r={render:function(){return t.html(o,l)}},i=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --fieldset-border: 2px solid black;\n        --fieldset-font: sans-serif;\n\n        --legend-padding: 0 0.5em;\n        --legend-weight: 700;\n\n        font-family: var(--fieldset-font);\n      }\n\n      fieldset {\n        border: var(--fieldset-border);\n      }\n\n      legend {\n        font-weight: var(--legend-weight);\n        padding: var(--legend-padding);\n      }\n\n      ::slotted(qs-field) {\n        display: inline-block;\n      }\n    </style>\n    <fieldset>\n      <legend>","</legend>\n      <slot></slot>\n    </fieldset>\n  "]),d={group:"The Legend of Fieldset",render:function(n){return t.html(i,l,n.group)}},s=Object.freeze(["\n        <style>\n          :host {\n            --label-margins: 0 0 0 0.5em;\n          }\n\n          ::slotted(input) {\n            margin: var(--label-margins);\n          }\n        </style>\n        <label>","<slot></slot></label>\n      "]),b=Object.freeze(['\n        <style>\n          :host {\n            --label-margins: 0 0 0.5em 0;\n          }\n\n          ::slotted(input) {\n            margin: var(--label-margins);\n          }\n        </style>\n        <slot></slot>\n        <label for="','">',"</label>\n      "]),c=Object.freeze(["\n        <style>\n          :host {\n            --label-margins: 0 0.25em 0 0;\n          }\n\n          ::slotted(input) {\n            margin: var(--label-margins);\n          }\n        </style>\n        <label><slot></slot>","</label>\n      "]),f=Object.freeze(['\n        <style>\n          :host {\n            --label-margins: 0.5em 0 0 0;\n          }\n          ::slotted(input) {\n            margin: var(--label-margins);\n          }\n        </style>\n        <label for="','">',"</label>\n        <slot></slot>\n      "]),g=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --field-font: sans-serif;\n        --label-weight: 700;\n\n        --input-border: 4px solid black;\n        --input-radius: 0.5em;\n        --input-padding: 0.75em;\n\n        --color-input-height: 3em;\n\n        font-family: var(--field-font);\n      }\n\n      label {\n        display: block;\n        font-weight: var(--label-weight);\n      }\n\n      ::slotted(input[type='text']),\n      ::slotted(input[type='number']) {\n        border: var(--input-border);\n        box-sizing: border-box;\n        border-radius: var(--input-radius);\n        padding: var(--input-padding);\n        width: 100%;\n      }\n\n      ::slotted(input[type='color']) {\n        background: transparent;\n        box-sizing: border-box;\n        border: none;\n        border-radius: 0;\n        padding: 0;\n        width: 100%;\n        height: var(--color-input-height);\n      }\n    </style>\n    ","\n    ","\n    ","\n    ","\n  "]),v={label:"Read the Label",labelPos:"top",id:"id",render:function(n){var e=n.label,a=n.labelPos,o=n.id;return t.html(g,l,"top"===a&&t.html(f,o,e),"right"===a&&t.html(c,e),"bottom"===a&&t.html(b,o,e),"left"===a&&t.html(s,e))}},m=Object.freeze(['\n            <div class="filename"><code>','</code></div>\n            <pre class="output-code"><code innerHTML="','"></code></pre>\n          ']),u=Object.freeze(['\n            <pre class="output-code"><code innerHTML="','"></code></pre>\n          ']),p=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --label-bg: black;\n          --label-fg: white;\n          --label-padding: 1em;\n          --code-font: monospace;\n          --code-border: 4px solid black;\n          --font-size: 1.25em;\n\n          --theme-bg: white;\n          --theme-padding: var(--label-padding);\n          --theme-keyword-color: red;\n          --theme-string-color: lime;\n\n          font-family: var(--code-font);\n          font-size: var(--font-size);\n        }\n        .filename,\n        .output-code {\n          margin: 0;\n        }\n\n        .filename {\n          background: var(--label-bg);\n          color: var(--label-fg);\n          display: inline-block;\n          padding: var(--label-padding);\n        }\n        .output-code {\n          background: var(--theme-bg);\n          border: var(--code-border);\n          padding: var(--theme-padding);\n        }\n\n        /* prism theme */\n        .token.keyword {\n          color: var(--theme-keyword-color);\n          font-weight: 700;\n        }\n\n        .token.string {\n          color: var(--theme-string-color);\n        }\n      </style>\n      ","\n    "]),h={data:{},variable:"output",filename:"system.js",format:function(n){return JSON.stringify(n.data,null,2)},output:function(n){return e.highlight("const "+n.variable+" = "+n.format+";",e.languages.javascript,"javascript")},hide:!1,render:function(n){var e=n.filename,a=n.output;return t.html(p,l,n.hide?t.html(u,a):t.html(m,e,a))}},y=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --element-color: black;\n          --element-margin: 0 0 0.5em 0;\n          --element-width: 100%;\n\n          --label-size: 1rem;\n\n          --flex-flow: column nowrap;\n          --align-items: center;\n\n          display: flex;\n          flex-flow: var(--flex-flow);\n          align-items: var(--align-items);\n        }\n\n        div {\n          background: var(--element-color);\n          margin: var(--element-margin);\n          width: var(--element-width);\n          height: ",";\n        }\n\n        code {\n          font-size: var(--label-size);\n        }\n      </style>\n      <div></div>\n      <code>",": ","</code>\n    "]),z={label:"base",value:"1rem",render:function(n){var e=n.value;return t.html(y,l,e,n.label,e)}},w=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --label-bg: black;\n        --label-fg: white;\n        --label-padding: 1em;\n        --label-size: 1.25em;\n        --label-font: sans-serif;\n\n        --value-font: monospace;\n        --value-opacity: 0.8;\n\n        --content-border: 4px solid black;\n        --content-padding: calc(var(--label-padding) / 1.5);\n        --content-size: calc(var(--label-size) * 1.25);\n      }\n\n      .label {\n        background: var(--label-bg);\n        color: var(--label-fg);\n        padding: var(--label-padding);\n        font-family: var(--label-font);\n        font-size: var(--label-size);\n        font-weight: 700;\n      }\n\n      .label > code {\n        opacity: var(--value-opacity);\n        font-family: var(--value-font);\n        font-weight: 400;\n      }\n\n      .content {\n        border: var(--content-border);\n        padding: var(--content-padding);\n        font-family: ",';\n        font-size: var(--content-size);\n      }\n    </style>\n    <div class="label">',": <code>",'</code></div>\n    <div class="content">The quick brown fox jumps over the lazy dog.</div>\n  ']),k={label:"Sans",stack:"sans-serif",render:function(n){var e=n.stack;return t.html(w,l,e,n.label,e)}},j=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --label-bg: black;\n          --label-fg: white;\n\n          --label-font: sans-serif;\n          --label-size: 1.25em;\n          --label-padding: 1em;\n\n          --value-font: monospace;\n          --value-opacity: 0.8;\n\n          --content-bg: var(--label-fg);\n          --content-fg: var(--label-bg);\n          --content-border: 4px solid black;\n          --content-padding: var(--label-padding);\n        }\n\n        .label {\n          background: var(--label-bg);\n          color: var(--label-color);\n          display: inline-block;\n          font-family: var(--label-font);\n          font-size: var(--label-size);\n          padding: var(--label-padding);\n        }\n\n        .label > code {\n          opacity: var(--value-opacity);\n          font-family: var(--value-font);\n        }\n\n        .content {\n          border: var(--content-border);\n          background: var(--content-bg);\n          color: var(--content-fg);\n          padding: var(--content-padding);\n          font-family: var(--font-system-serif);\n          font-size: ",';\n        }\n      </style>\n      <div class="label">',": <code>",'</code></div>\n      <div class="content">',"</div>\n    "]),x={label:"base",value:"1rem",content:"The quick brown fox jumps over the lazy dog.",render:function(n){var e=n.value;return t.html(j,l,e,n.label,e,n.content)}},O=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --border-color: black;\n          --border-width: 4px;\n          --border-radius: 0;\n\n          --swatch-padding: 1.5em;\n\n          --value-font: monospace;\n          --value-padding: calc(var(--swatch-padding) / 2);\n          --value-size: 1rem;\n        }\n\n        div {\n          background: ",";\n          border: var(--border-width) solid var(--border-color);\n          border-radius: var(--border-radius);\n          padding: var(--swatch-padding);\n        }\n\n        code {\n          background: rgba(255, 255, 255, 0.8);\n          border-radius: calc(var(--border-radius) / 2);\n          display: block;\n          font-family: var(--value-font);\n          font-size: var(--value-size);\n          padding: var(--value-padding);\n          text-align: center;\n        }\n      </style>\n      <div>\n        <code>","</code>\n      </div>\n    "]),S={value:"#aaaaaa",render:function(n){var e=n.value;return t.html(O,l,e,e)}};t.define(Object.assign({},{QSControls:r,QSFieldset:d,QSField:v,QSData:h,QSElement:z,QSFont:k,QSScale:x,QSSwatch:S}));
//# sourceMappingURL=quarksuite.js.map
