import"@webcomponents/webcomponentsjs/webcomponents-bundle.js";import n from"prismjs";import{html as e,define as t}from"hybrids";import{color as a}from"@quarksuite/core";var r=Object.freeze(["\n  <style>\n    :host {\n      display: block;\n    }\n    :host[hidden] {\n      display: none;\n    }\n  </style>\n"]),o=e(r),l=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --border-width: var(--ms-inline-4-x);\n          --swatch-padding: var(--ms-block-2-x);\n          --value-font: var(--font-system-mono);\n          --value-padding: calc(var(--swatch-padding) / 2);\n          --value-size: var(--ms-block-base);\n        }\n\n        div {\n          background: ",";\n          border: var(--border-width) solid;\n          border-color: ",";\n          padding: var(--swatch-padding);\n        }\n\n        code {\n          background: rgba(255, 255, 255, 0.8);\n          display: block;\n          font-family: var(--value-font);\n          font-size: var(--value-size);\n          padding: var(--value-padding);\n          text-align: center;\n        }\n      </style>\n      <div>\n        <code>","</code>\n      </div>\n    "]),i={value:"#aaaaaa",render:function(n){var t=n.value;return e(l,o,t,a.palette(t,{shades:{limit:1,contrast:24}})[0].shade,t)}},s=Object.freeze(['\n        <div class="range">\n          <label for="','">',": ","",'</label>\n          <input\n            id="','"\n            type="range"\n            value="','"\n            min="','"\n            max="','"\n            oninput="','"\n          />\n        </div>\n      ']),c=Object.freeze(['\n        <label class="range"\n          ><input\n            type="range"\n            value="','"\n            min="','"\n            max="','"\n            oninput=',"\n          />\n          ",": ",""," <small>","</small></label\n        >\n      "]),d=function(n,t,a,r){void 0===r&&(r={});var o=r.min;void 0===o&&(o=0);var l=r.max;void 0===l&&(l=100);var i=r.inline;void 0===i&&(i=!1);var d=r.desc,u=r.suffix;void 0===u&&(u="%");var b=n.toLowerCase().split(" ").join("-");return i?e(c,t,o,l,a,n,t,u,d):e(s,b,n,t,u,b,t,o,l,a)},u=Object.freeze(['\n          <label class="radio"\n            ><input\n              type="radio"\n              name="','"\n              value="','"\n              oninput="','"\n            />\n            ',"\n          </label>\n        "]),b=Object.freeze(['\n          <label class="radio"\n            ><input\n              type="radio"\n              name="','"\n              value="','"\n              oninput="','"\n              checked\n            />\n            ',"\n          </label>\n        "]),m=function(n,t,a){return Object.values(t).map(function(t,r){return e(0===r?b:u,n,t.value,a,t.label)})},f=Object.freeze(["\n  <style>\n    :host {\n      --form-flow: column wrap;\n      --form-font: var(--font-system-sans);\n      --form-margins: 0 0 var(--ms-block-base) 0;\n\n      --field-margins: 0 0 var(--ms-block-base) 0;\n\n      --fieldset-bg: var(--color-primary-tint-300);\n      --fieldset-border-width: var(--ms-inline-base);\n      --fieldset-border-style: solid;\n      --fieldset-border-color: var(--color-primary-base);\n      --fieldset-border: var(--fieldset-border-width)\n        var(--fieldset-border-style) var(--fieldset-border-color);\n\n      --label-font-size: var(--ms-block-base);\n\n      --button-main-bg: var(--color-primary-tint-300);\n      --button-main-border-color: var(--color-secondary-base);\n      --button-main-padding: var(--ms-block-base);\n      --button-main-font-size: var(--ms-block-2-x);\n\n      --button-sub-bg: var(--button-main-bg);\n      --button-sub-border-color: var(--color-tertiary-base);\n      --button-sub-font-size: calc(var(--button-main-font-size) / 2);\n      --button-sub-padding: calc(var(--button-main-padding) / 3);\n    }\n\n    form {\n      display: flex;\n      flex-flow: var(--form-flow);\n      margin: var(--form-margins);\n    }\n\n    label,\n    legend {\n      font-weight: 700;\n    }\n\n    fieldset {\n      border: var(--fieldset-border);\n    }\n\n    fieldset > label {\n      font-weight: 400;\n    }\n  </style>\n"]),v=e(f),p=Object.freeze(['\n                    <b-swatch class="variant" value="','"></b-swatch>\n                  ']),g=Object.freeze(['\n          <div class="category">\n            <button class="limit-ctrl" onclick="','">\n              -\n            </button>\n            <div class="palette">\n              ','\n            </div>\n            <button class="limit-ctrl" onclick="','">+</button>\n          </div>\n        ']),h=Object.freeze(["\n      "," ",'\n      <style>\n        :host {\n          --field-margins: calc(var(--ms-block-base) / 3);\n        }\n\n        b-swatch {\n          --border-width: var(--ms-inline-base);\n          --swatch-padding: var(--ms-block-base);\n          --value-size: calc(var(--ms-block-base) / 1.2);\n        }\n        .range {\n          margin-bottom: var(--field-margins);\n        }\n\n        .category,\n        .palette {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .palette {\n          flex: 64;\n        }\n\n        .variant {\n          flex: 1;\n        }\n\n        .limit-ctrl {\n          background: transparent;\n          border: none;\n          flex-grow: 1;\n          font-size: var(--ms-block-3-x);\n        }\n      </style>\n      <form action="">\n        '," ","\n        <fieldset>\n          <legend>Blend Mode</legend>\n          ","\n        </fieldset>\n      </form>\n      ","\n    "]),y=function(n){return++n.limit},w=function(n){1!==n.limit&&--n.limit},k=function(n,e){return n.mode=e.target.value},x={swatch:"#aaaaaa",type:"tints",limit:3,contrast:95,mode:"logarithmic",format:"hex",output:function(n){var e,t=n.format;return a.palette(n.swatch,((e={})[n.type]={limit:n.limit,contrast:n.contrast,mode:n.mode},e.format=t,e))},render:function(n){var t=n.type,a=n.output;return e(h,o,v,d("Contrast",n.contrast,e.set("contrast")),m,m("mode",[{label:"complex",value:"logarithmic"},{label:"simple",value:"linear"}],k),Object.values(a).map(function(n){return e(g,w,n[t.replace(/s$/g,"")].map(function(n){return e(p,n)}),y)}))}},z=Object.freeze(['\n      <label class="checkbox"\n        ><input\n          type="checkbox"\n          name="','"\n          value="','"\n          onchange="','"\n        />\n        ',"</label\n      >\n    "]),j=function(n,t,a){return Object.values(t).map(function(t){return e(z,n,t.value,a,t.label)})},O=Object.freeze(['\n            <c-variant\n              swatch="','"\n              type="shades"\n              limit="2"\n              format="','"\n            ></c-variant>\n          ']),S=Object.freeze(['\n            <c-variant\n              swatch="','"\n              type="tones"\n              limit="2"\n              format=',"\n            ></c-variant>\n          "]),B=Object.freeze(['\n            <c-variant swatch="','" format="','"></c-variant>\n          ']),C=Object.freeze(["\n      "," ",'\n      <style>\n        b-swatch {\n          margin-bottom: calc(var(--ms-block-base) / 2);\n        }\n\n        c-variant {\n          flex-grow: 1;\n          margin-bottom: var(--ms-block-base);\n        }\n\n        .variants {\n          display: flex;\n          flex-flow: row wrap;\n        }\n      </style>\n      <b-swatch class="base" value="','"></b-swatch>\n      <form action="">\n        <fieldset>\n          <legend>Variants</legend>\n          ','\n        </fieldset>\n      </form>\n      <div class="variants">\n        ',"\n        ","\n        ","\n      </div>\n    "]),V=function(n,e){"tints"===e.target.value&&(n.tints=e.target.checked),"tones"===e.target.value&&(n.tones=e.target.checked),"shades"===e.target.value&&(n.shades=e.target.checked)},I={base:"#348ec9",tints:!1,tones:!1,shades:!1,format:"hex",render:function(n){var t=n.base,a=n.tints,r=n.tones,l=n.shades,s=n.format;return e(C,o,v,t,j("variants",[{label:"tints",value:"tints"},{label:"tones",value:"tones"},{label:"shades",value:"shades"}],V),a&&e(B,t,s),r&&e(S,t,s),l&&e(O,t,s)).define({BSwatch:i,CVariant:x})}},U=Object.freeze(['\n    <style>\n      .color > label {\n        display: block;\n        margin-bottom: var(--ms-inline-base);\n      }\n\n      input[type=\'color\'] {\n        background: transparent;\n        border: none;\n        padding: 0;\n        display: block;\n        width: 100%;\n        height: var(--ms-block-7-x);\n      }\n    </style>\n    <div class="color">\n      <label for="','">','</label>\n      <input\n        id="','"\n        name="','"\n        type="color"\n        value="','"\n        oninput="','"\n      />\n    </div>\n  ']),D=function(n,t,r,o){void 0===o&&(o="hex");var l=n.toLowerCase().split(" ").join("-");return e(U,l,n,l,l,a.format(t,"hex"),r)},L=Object.freeze(['\n  <button\n    class="button ','"\n    type="button"\n    value="','"\n    onclick="','"\n  >\n    ',"\n  </button>\n"]),Q=function(n,t,a,r){return void 0===a&&(a=""),void 0===r&&(r=""),e(L,r,a,t,n)},A=Object.freeze(['\n            <div class="swatch">\n              ','\n              <ui-variants base="','"></ui-variants>\n            </div>\n          ']),H=Object.freeze(["\n      "," ",'\n      <style>\n        .color {\n          margin: var(--field-margins);\n        }\n\n        .button {\n          background: var(--button-main-bg);\n          border: 4px solid var(--button-main-border-color);\n          font-size: var(--button-main-font-size);\n          padding: var(--button-main-padding);\n        }\n\n        .swatch {\n          position: relative;\n        }\n\n        .button.remove {\n          position: absolute;\n          right: 0;\n          background: rgba(255, 255, 255, 0.8);\n          border: none;\n          font-size: var(--button-sub-font-size);\n          padding: var(--button-sub-padding);\n        }\n      </style>\n      <form action="">\n        ',"\n        ","\n      </form>\n      ","\n    "]),M=function(n,e){e.preventDefault(),n.palette=n.palette.concat([n.currentValue]).filter(function(n,e,t){return t.indexOf(n)===e})},T=function(n,e){e.preventDefault(),n.palette=n.palette.filter(function(n){return n!==e.target.value})},q={palette:["dodgerblue","gold"],currentValue:"#f00000",render:function(n){var t=n.palette;return e(H,o,v,D("Color",n.currentValue,e.set("currentValue")),Q("Add to Palette",M),t.map(function(n){return e(A,Q("x",T,n,"remove"),n)})).define({UIVariants:I})}},F=Object.freeze(["\n      ",'\n      <style>\n        .filename,\n        .output-code {\n          font-family: var(--font-system-mono);\n          font-size: var(--ms-block-base);\n          margin: 0;\n        }\n\n        .filename {\n          background: var(--color-primary-base);\n          color: var(--color-primary-tint-300);\n          display: inline-block;\n          font-size: var(--ms-block-base);\n          padding: var(--ms-inline-3-x);\n        }\n\n        .output-code {\n          background: var(--color-primary-tint-300);\n          border: var(--ms-inline-base) solid var(--color-primary-base);\n          padding: var(--ms-inline-4-x);\n        }\n      </style>\n      <div class="filename"><code>','</code></div>\n      <pre class="output-code"><code innerHTML="','"></code></pre>\n    ']),G={data:{},variable:"output",filename:"system.js",output:function(e){return n.highlight("const "+e.variable+" = "+JSON.stringify(e.data,null,2)+";",n.languages.javascript,"javascript")},render:function(n){return e(F,o,n.filename,n.output).style(void 0)}},J=Object.freeze(["\n      "," ",'\n      <form action="">\n        ',"\n        ","\n        ",'\n      </form>\n      <b-swatch value="','"></b-swatch>\n    ']),N={base:"#ff0000",blend:"#0000ff",amount:50,format:"hex",output:function(n){return a.mix(n.base,n.blend,n.amount)},render:function(n){var t=n.blend,a=n.amount,r=n.output;return e(J,o,v,D("Base Color",n.base,e.set("base")),D("Blend Target",t,e.set("blend")),d("Blend Amount",a,e.set("amount")),r).define({BSwatch:i})}},P=Object.freeze(['\n              <ui-variants\n                base="','"\n                format="','"\n              ></ui-variants>\n            ']),R=Object.freeze(["\n      "," ",'\n      <form action="">\n        ',"\n        <fieldset>\n          <legend>\n            Scheme Type\n          </legend>\n          ",'\n        </fieldset>\n        <fieldset>\n          <legend>Options</legend>\n          <div class="options">\n            ',"\n            ","\n          </div>\n        </fieldset>\n        <fieldset>\n          <legend>Output Format</legend>\n          ",'\n        </fieldset>\n      </form>\n      <div class="palette">\n        ',"\n      </div>\n    "]),$=function(n,e){return n.type=e.target.value},E=function(n,e){return n.format=e.target.value},K=function(n,e){return n.accented=e.target.checked},W={base:"#348ec9",type:"monochromatic",distance:30,accented:!1,format:"hex",output:function(n){return a.palette(n.base,{scheme:{type:n.type,distance:n.distance,accented:n.accented},format:n.format})},render:function(n){var t=n.distance,a=n.format,r=n.output;return e(R,o,v,D("Base Color",n.base,e.set("base"),a),m("scheme-type",[{label:"mono",value:"monochromatic"},{label:"complement",value:"complementary"},{label:"analogous",value:"analogous"},{label:"split",value:"split complementary"},{label:"triadic",value:"triadic"},{label:"dual",value:"dual color"},{label:"tetradic",value:"tetradic"}],$),d("Distance",t,e.set("distance"),{min:15,max:45,inline:!0,desc:"(analogous, split, dual)",suffix:"°"}),j("option-accented",[{label:"Accented?",value:"accented"}],K),m("format",[{label:"Hex",value:"hex"},{label:"RGB",value:"rgb"},{label:"HSL",value:"hsl"}],E),Object.values(r).map(function(n,t){return e(P,n.base,a)}))}};t(Object.assign({},{QSUICustom:q,QSUIDataview:G,QSUIMix:N,QSUIScheme:W}));
//# sourceMappingURL=qsui.es.js.map