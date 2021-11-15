/* eslint-disable no-restricted-globals */
/* eslint-disable no-native-reassign */

export function injectStyle(palette) {
  // Helper function, gets first different parent element that's not SPAN or DIV
  function firstDiffParent(elem) {
    parent = elem.parentElement;
    if (
      parent != null &&
      ["SPAN", "DIV", elem.tagName].includes(parent.tagName)
    ) {
      parent = firstDiffParent(parent);
    }
    return parent;
  }

  // re-colour div elements, skipping ones handled below
  var divs = document.getElementsByTagName("div");
  for (var i = 0, max = divs.length; i < max; i++) {
    var elem = divs[i];

    parent = firstDiffParent(elem);
    if (parent !== null) {
      var parentTag = parent.tagName.toLowerCase();
      if (["span", "li", "a", "button"].includes(parentTag)) {
        continue;
      }
    }

    try {
      elem.style.backgroundColor = palette.background[0];
      elem.style.color = palette.text[0];
    } catch (error) {
      console.error(error);
    }
  }

  // re-colour span elements, skipping ones handled below
  var spans = document.getElementsByTagName("span");
  for (var i = 0, max = spans.length; i < max; i++) {
    elem = spans[i];
    parent = firstDiffParent(elem);
    if (parent !== null) {
      parentTag = parent.tagName.toLowerCase();
      if (["li", "a", "button"].includes(parentTag)) {
        continue;
      }
    }
    try {
      elem.style.backgroundColor = palette.background[1];
      elem.style.color = palette.text[1];
    } catch (error) {
      console.error(error);
    }
  }

  // re-colour li elements, skipping ones handled below
  var lis = document.getElementsByTagName("li");
  for (var i = 0, max = lis.length; i < max; i++) {
    elem = lis[i];

    parent = firstDiffParent(elem);
    if (parent !== null) {
      parentTag = parent.tagName.toLowerCase();
      if (["li", "a", "button"].includes(parentTag)) {
        continue;
      }
    }
    try {
      elem.style.backgroundColor = palette.button[0];
      elem.style.color = palette.text[0];
    } catch (error) {
      console.error(error);
    }
  }

  // re-colour a elements, skipping ones handled below
  var as = document.getElementsByTagName("a");
  for (var i = 0, max = as.length; i < max; i++) {
    elem = as[i];

    parent = firstDiffParent(elem);
    if (parent !== null) {
      parentTag = parent.tagName.toLowerCase();
      if (["button"].includes(parentTag)) {
        continue;
      }
    }
    try {
      elem.style.backgroundColor = palette.button[0];
      elem.style.color = palette.text[0];
    } catch (error) {
      console.error(error);
    }
  }

  // re-colour button elements, skipping ones handled below
  var btns = document.getElementsByTagName("button");
  for (var i = 0, max = btns.length; i < max; i++) {
    elem = btns[i];
    try {
      elem.style.backgroundColor = palette.button[1];
    } catch (error) {
      console.error(error);
    }
  }
}
