export function makeMap(e, t) {
  const n = Object.create(null);
  const i = e.split(",");
  for (let e = 0; e < i.length; e++) {
    n[i[e]] = true;
  }
  if (t) {
    return e => !!n[e.toLowerCase()];
  } else {
    return e => !!n[e];
  }
}
export const PatchFlagNames = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "HYDRATE_EVENTS",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
};
export const slotFlagsText = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
};
export const isGloballyWhitelisted = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");
export function generateCodeFrame(e, t = 0, n = e.length) {
  let i = e.split(/(\r?\n)/);
  const s = i.filter((e, t) => t % 2 == 1);
  i = i.filter((e, t) => t % 2 == 0);
  let r = 0;
  const a = [];
  for (let e = 0; e < i.length; e++) {
    r += i[e].length + (s[e] && s[e].length || 0);
    if (r >= t) {
      for (let o = e - 2; o <= e + 2 || n > r; o++) {
        if (o < 0 || o >= i.length) {
          continue;
        }
        const u = o + 1;
        a.push(`${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${i[o]}`);
        const g = i[o].length;
        const h = s[o] && s[o].length || 0;
        if (o === e) {
          const e = t - (r - (g + h));
          const i = Math.max(1, n > r ? g - e : n - t);
          a.push("   |  " + " ".repeat(e) + "^".repeat(i));
        } else if (o > e) {
          if (n > r) {
            const e = Math.max(Math.min(n - r, g), 1);
            a.push("   |  " + "^".repeat(e));
          }
          r += g + h;
        }
      }
      break;
    }
  }
  return a.join("\n");
}
const u = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
export const isSpecialBooleanAttr = makeMap(u);
export const isBooleanAttr = makeMap(u + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
export function includeBooleanAttr(e) {
  return !!e || e === "";
}
const l = /[>/="'\u0009\u000a\u000c\u0020]/;
const d = {};
export function isSSRSafeAttrName(e) {
  if (d.hasOwnProperty(e)) {
    return d[e];
  }
  const t = l.test(e);
  return d[e] = !t;
}
export const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
export const isNoUnitNumericStyleProp = makeMap("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width");
export const isKnownHtmlAttr = makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
export const isKnownSvgAttr = makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
export function normalizeStyle(e) {
  if (isArray(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      const s = isString(i) ? parseStringStyle(i) : normalizeStyle(i);
      if (s) {
        for (const e in s) {
          t[e] = s[e];
        }
      }
    }
    return t;
  }
  if (isString(e) || isObject(e)) {
    return e;
  } else {
    return undefined;
  }
}
const E = /;(?![^(]*\))/g;
const _ = /:(.+)/;
export function parseStringStyle(e) {
  const t = {};
  e.split(E).forEach(e => {
    if (e) {
      const n = e.split(_);
      if (n.length > 1) {
        t[n[0].trim()] = n[1].trim();
      }
    }
  });
  return t;
}
export function stringifyStyle(e) {
  let t = "";
  if (!e || isString(e)) {
    return t;
  }
  for (const n in e) {
    const i = e[n];
    const s = n.startsWith("--") ? n : hyphenate(n);
    if (isString(i) || typeof i == "number" && isNoUnitNumericStyleProp(s)) {
      t += `${s}:${i};`;
    }
  }
  return t;
}
export function normalizeClass(e) {
  let t = "";
  if (isString(e)) {
    t = e;
  } else if (isArray(e)) {
    for (let n = 0; n < e.length; n++) {
      const i = normalizeClass(e[n]);
      if (i) {
        t += i + " ";
      }
    }
  } else if (isObject(e)) {
    for (const n in e) {
      if (e[n]) {
        t += n + " ";
      }
    }
  }
  return t.trim();
}
export function normalizeProps(e) {
  if (!e) {
    return null;
  }
  let {
    class: t,
    style: n
  } = e;
  if (t && !isString(t)) {
    e.class = normalizeClass(t);
  }
  if (n) {
    e.style = normalizeStyle(n);
  }
  return e;
}
export const isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
export const isSVGTag = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
export const isVoidTag = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
const S = /["'&<>]/;
export function escapeHtml(e) {
  const t = "" + e;
  const n = S.exec(t);
  if (!n) {
    return t;
  }
  let i;
  let s;
  let r = "";
  let a = 0;
  for (s = n.index; s < t.length; s++) {
    switch (t.charCodeAt(s)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 39:
        i = "&#39;";
        break;
      case 60:
        i = "&lt;";
        break;
      case 62:
        i = "&gt;";
        break;
      default:
        continue;
    }
    if (a !== s) {
      r += t.slice(a, s);
    }
    a = s + 1;
    r += i;
  }
  if (a !== s) {
    return r + t.slice(a, s);
  } else {
    return r;
  }
}
const v = /^-?>|<!--|-->|--!>|<!-$/g;
export function escapeHtmlComment(e) {
  return e.replace(v, "");
}
export function looseEqual(e, t) {
  if (e === t) {
    return true;
  }
  let n = isDate(e);
  let i = isDate(t);
  if (n || i) {
    return !!n && !!i && e.getTime() === t.getTime();
  }
  n = isSymbol(e);
  i = isSymbol(t);
  if (n || i) {
    return e === t;
  }
  n = isArray(e);
  i = isArray(t);
  if (n || i) {
    return !!n && !!i && function (e, t) {
      if (e.length !== t.length) {
        return false;
      }
      let n = true;
      for (let i = 0; n && i < e.length; i++) {
        n = looseEqual(e[i], t[i]);
      }
      return n;
    }(e, t);
  }
  n = isObject(e);
  i = isObject(t);
  if (n || i) {
    if (!n || !i) {
      return false;
    }
    if (Object.keys(e).length !== Object.keys(t).length) {
      return false;
    }
    for (const n in e) {
      const i = e.hasOwnProperty(n);
      const s = t.hasOwnProperty(n);
      if (i && !s || !i && s || !looseEqual(e[n], t[n])) {
        return false;
      }
    }
  }
  return String(e) === String(t);
}
export function looseIndexOf(e, t) {
  return e.findIndex(e => looseEqual(e, t));
}
export const toDisplayString = e => isString(e) ? e : e == null ? "" : isArray(e) || isObject(e) && (e.toString === objectToString || !isFunction(e.toString)) ? JSON.stringify(e, N, 2) : String(e);
const N = (e, t) => t && t.__v_isRef ? N(e, t.value) : isMap(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => {
    e[`${t} =>`] = n;
    return e;
  }, {})
} : isSet(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : !isObject(t) || isArray(t) || isPlainObject(t) ? t : String(t);
export const EMPTY_OBJ = {};
export const EMPTY_ARR = [];
export const NOOP = () => {};
export const NO = () => false;
const H = /^on[^a-z]/;
export const isOn = e => H.test(e);
export const isModelListener = e => e.startsWith("onUpdate:");
export const extend = Object.assign;
export const remove = (e, t) => {
  const n = e.indexOf(t);
  if (n > -1) {
    e.splice(n, 1);
  }
};
const q = Object.prototype.hasOwnProperty;
export const hasOwn = (e, t) => q.call(e, t);
export const isArray = Array.isArray;
export const isMap = e => toTypeString(e) === "[object Map]";
export const isSet = e => toTypeString(e) === "[object Set]";
export const isDate = e => toTypeString(e) === "[object Date]";
export const isFunction = e => typeof e == "function";
export const isString = e => typeof e == "string";
export const isSymbol = e => typeof e == "symbol";
export const isObject = e => e !== null && typeof e == "object";
export const isPromise = e => isObject(e) && isFunction(e.then) && isFunction(e.catch);
export const objectToString = Object.prototype.toString;
export const toTypeString = e => objectToString.call(e);
export const toRawType = e => toTypeString(e).slice(8, -1);
export const isPlainObject = e => toTypeString(e) === "[object Object]";
export const isIntegerKey = e => isString(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
export const isReservedProp = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
export const isBuiltInDirective = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const he = e => {
  const t = Object.create(null);
  return n => t[n] ||= e(n);
};
const ce = /-(\w)/g;
export const camelize = he(e => e.replace(ce, (e, t) => t ? t.toUpperCase() : ""));
const de = /\B([A-Z])/g;
export const hyphenate = he(e => e.replace(de, "-$1").toLowerCase());
export const capitalize = he(e => e.charAt(0).toUpperCase() + e.slice(1));
export const toHandlerKey = he(e => e ? `on${capitalize(e)}` : "");
export const hasChanged = (e, t) => !Object.is(e, t);
export const invokeArrayFns = (e, t) => {
  for (let n = 0; n < e.length; n++) {
    e[n](t);
  }
};
export const def = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: false,
    value: n
  });
};
export const toNumber = e => {
  const t = parseFloat(e);
  if (isNaN(t)) {
    return e;
  } else {
    return t;
  }
};
let _e;
export const getGlobalThis = () => _e ||= typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : require.g !== undefined ? require.g : {};
const xe = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
export function genPropsAccessExp(e) {
  if (xe.test(e)) {
    return `__props.${e}`;
  } else {
    return `__props[${JSON.stringify(e)}]`;
  }
}