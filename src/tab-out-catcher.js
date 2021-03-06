(function(root, factory) {
  root.catchTheTab = factory(root.b);
})(typeof self !== "undefined" ? self : this, function() {
  function moveGates(open, GATES) {
    GATES[0].setAttribute("tabindex", open ? -1 : 0);
    GATES[1].setAttribute("tabindex", open ? -1 : 0);
  }

  function isChild(obj, parentObj) {
    while (
      obj != undefined &&
      obj != null &&
      obj.tagName.toUpperCase() != "BODY"
    ) {
      if (obj == parentObj) {
        return true;
      }
      obj = obj.parentNode;
    }
    return false;
  }

  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  function getGateInput(handleTabOut) {
    var input = document.createElement("input");
    // not visibiliy:hidden or display:none as need to focus on this element
    var hiddingStyle =
      "opacity: 0;cursor: none;position: absolute;top: -10px;left: -10px;";

    input.setAttribute("style", hiddingStyle);
    input.addEventListener("focus", handleTabOut);

    return input;
  }

  function getTabOutHandler(element, GATES) {
    return function(event) {
      var relatedTarget = event.relatedTarget || event.fromElement;
      var target = event.target;
      var gatesTrapped = target === GATES[0] || target === GATES[1];

      if (gatesTrapped && isChild(relatedTarget, element)) {
        event.preventDefault();
        relatedTarget.focus();
      }
    };
  }

  function catchTheTab(element) {
    if (!document || !window) {
      throw new Error("You must execute it in browser!!!");
    }
    var GATES = [];
    var handleTabOut = getTabOutHandler(element, GATES);

    GATES.push(getGateInput(handleTabOut));
    GATES.push(getGateInput(handleTabOut));

    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 9) {
        if (isChild(document.activeElement, element)) {
          moveGates(false, GATES);
        } else {
          moveGates(true, GATES);
        }
      }
    });

    insertBefore(GATES[0], element);
    insertAfter(GATES[1], element);
  }

  return catchTheTab;
});
