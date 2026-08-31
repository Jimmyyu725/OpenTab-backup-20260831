require("./7.js");
import * as r from "./0.js";
import * as i from "./3.js";
import * as o from "./36.js";
const s = Math.floor(screen.width * window.devicePixelRatio);
const a = Math.floor(window.devicePixelRatio * 203);
export const imgConfig = {
  smallWidth: a > 3840 ? 3840 : a,
  normalWidth: s > 3840 ? 3840 : s,
  format: o.f ? "" : o.g
};
export const getRandomWallpaper = async () => {
  try {
    const t = await i.a.get(r.w + "/random-wallpaper", {
      _: new Date().getTime()
    });
    if (!t.success) {
      throw t;
    }
    const {
      src: e,
      _id: n,
      source: o
    } = t.data[0];
    const {
      url: s,
      rawUrl: a
    } = convertURL(e.rawSrc);
    return {
      data: {
        url: s,
        rawUrl: a,
        id: n,
        source: o
      }
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getBingWallpaper = async () => {
  try {
    const t = await i.a.get(r.y + "/get_bing_wallpaper", null, {
      _single: "getBingWallpaper"
    });
    if (t.error) {
      throw t.error;
    }
    const {
      data: e
    } = t;
    const {
      content: n,
      url: o,
      rawUrl: s
    } = convertURL(e.src.rawSrc);
    e.thumbnail = n;
    e.url = o;
    e.rawUrl = s;
    return t;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getWallpapers = async t => {
  const {
    source: e
  } = t;
  t.source = e === "all" ? "" : e;
  try {
    const e = await i.a.get(r.w + "/get-wallpaper", t, {
      _single: "getWallpapers"
    });
    const {
      data: n
    } = e;
    n.forEach(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = convertURL(t.src.rawSrc);
      t.thumbnail = e;
      t.url = n;
      t.rawUrl = r;
    });
    return {
      result: e
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export async function getWallpaperListByType(t) {
  if (t.order === "1") {
    t.order = "like";
  } else if (t.order === "2") {
    t.order = "_id";
  }
  try {
    const e = await i.a.get(r.y + "/get_wallpaper_list", Object.assign({
      client: "pc"
    }, t), {
      _single: "getWallpaperListByType"
    });
    if (e.code !== 0) {
      throw new Error(e.message);
    }
    const {
      data: n
    } = e;
    n.list.forEach(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = convertURL(t.src.rawSrc);
      t.thumbnail = e;
      t.url = n;
      t.rawUrl = r;
    });
    n.data = n.list;
    n.success = 1;
    return {
      result: n
    };
  } catch (t) {
    return {
      error: t
    };
  }
}
export const likeWallpaper = async (t, e) => {
  try {
    const n = await i.a.post(r.y + "/like_wallpaper", {
      id: t,
      state: e
    }, {
      _auth: true
    });
    if (n.code !== 0) {
      throw n;
    }
    return n;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const collectionWallpaper = async (t, e) => {
  try {
    const n = await i.a.post(r.y + "/collection_wallpaper", {
      id: t,
      state: e
    }, {
      _auth: true
    });
    if (n.code !== 0) {
      throw n;
    }
    return n;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const addCustomColor = async t => {
  try {
    const e = await i.a.post(r.y + "/add_custom_color", Object.assign(Object.assign({}, t), {
      newVer: true
    }), {
      _auth: true
    });
    if (e.code !== 0) {
      throw e;
    }
    return e;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const setCustomColorItems = async t => {
  try {
    const e = await i.a.post(r.y + "/set_custom_color_items", t, {
      _auth: true
    });
    if (e.code !== 0) {
      throw e;
    }
    return e;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getCustomColor = async () => {
  try {
    const t = await i.a.get(r.y + "/get_custom_color", null, {
      _auth: true
    });
    if (t.code !== 0) {
      throw t;
    }
    return t;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const removeCustomColor = async t => {
  try {
    const e = await i.a.post(r.y + "/remove_custom_color", {
      id: t,
      newVer: true
    }, {
      _auth: true
    });
    if (e.code !== 0) {
      throw e;
    }
    return e;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const uploadWallpaper = async t => {
  try {
    const e = await i.a.post(r.y + "/upload_wallpaper", t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (e.code !== 0) {
      throw e;
    }
    return {
      data: e.data
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getWallpapersById = async t => {
  try {
    const e = await i.a.get(r.y + "/get_wallpapers_by_id", {
      id: t
    });
    if (e.code !== 0) {
      throw e;
    }
    const {
      data: n
    } = e;
    n.forEach(t => {
      const {
        content: e,
        url: n,
        rawUrl: r
      } = convertURL(t.src.rawSrc);
      t.thumbnail = e;
      t.url = n;
      t.rawUrl = r;
    });
    return {
      data: n
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const createWallpaperLibrary = async ({
  libraryName: t,
  libraryId: e,
  wallpapers: n
}) => {
  try {
    return await i.a.post(r.y + "/create_wallpaper_library", {
      libraryName: t,
      libraryId: e,
      wallpapers: n
    }, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getUserWallpaperLibrary = async () => await i.a.get(r.y + "/get_user_wallpaper_library", null, {
  _auth: true
});
export const hasWallpaperLibrary = async t => {
  try {
    return await i.a.get(r.y + "/has_wallpaper_library", {
      libraryId: t
    }, {
      _auth: true,
      _proxy: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getLikedWallpaper = async () => {
  try {
    return await i.a.get(r.y + "/get_liked_wallpaper", null, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getCollectionWallpaper = async () => {
  try {
    return await i.a.get(r.y + "/get_collection_wallpaper", null, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getWallpaperLibraryItems = async t => {
  const e = await i.a.get(r.y + "/get_user_wallpaper_library_items", {
    libraryId: t
  });
  e.data.map(t => {
    const {
      content: e,
      url: n,
      rawUrl: r
    } = convertURL(t.url);
    t.content = e;
    t.url = n;
    t.rawUrl = r;
    return t;
  });
  const {
    data: n
  } = e;
  e.data = {
    items: n,
    count: n.length
  };
  return e.data;
};
export const getUserWallpaperLibraryItemsById = async t => {
  try {
    const e = await i.a.get(r.y + "/get_user_wallpaper_library_items_by_id", {
      libraryItemsId: t
    });
    const {
      data: n
    } = e;
    e.data = {
      items: n,
      count: n.length
    };
    return e.data;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const removeWallpaperLibraryItem = async (t, e, n) => {
  try {
    return await i.a.post(r.y + "/remove_wallpaper_library_item", {
      libraryId: t,
      libraryItemId: e,
      ext: n
    }, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const removeWallpaperLibrary = async t => {
  try {
    return await i.a.post(r.y + "/remove_wallpaper_library", {
      libraryId: t
    }, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const addImagesToLibrary = async (t, e) => {
  try {
    return await i.a.post(r.y + "/add_images_to_library", {
      libraryId: t,
      wallpapers: e
    }, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const renameWallpaperLibrary = async (t, e) => {
  try {
    return await i.a.post(r.y + "/rename_wallpaper_library", {
      libraryId: t,
      libraryName: e
    }, {
      _auth: true
    });
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getNextWallpaper = async (t, e, n = "library") => {
  const o = {
    source: t,
    type: n
  };
  if (e) {
    o._id = e;
  }
  const s = await i.a.get(r.y + "/get_next_wallpaper", o, {
    _single: "getNextWallpaper"
  });
  if (s.code !== 0) {
    throw new Error();
  }
  const {
    data: a
  } = s;
  const {
    content: c,
    url: u,
    rawUrl: l
  } = convertURL(a.rawUrl);
  a.thumbnail = c;
  a.url = u;
  a.rawUrl = l;
  return s;
};
export const convertURL = t => ({
  rawUrl: t,
  url: `${t}?imageView2/2/w/${imgConfig.normalWidth}/${imgConfig.format}interlace/1`,
  content: `${t}?imageView2/2/w/${imgConfig.smallWidth}/${imgConfig.format}interlace/1`
});