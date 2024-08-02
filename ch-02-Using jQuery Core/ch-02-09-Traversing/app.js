// Selecting an element's direct parent:
$("span.subchild").parent(); // returns [ div.child ]

// Selecting all the parents of an element that match a given selector:
$("span.subchild").parents("div.parent"); // returns [ div.parent ] => it filters the ancestors to include only those that match the selector, i.e., div with class parent
$("span.subchild").parents(); // returns [ div.child, div.parent, div.grandparent ]

// Selecting all the parents of an element up to, but *not including* the selector:
$("span.subchild").parentsUntil("div.grandparent"); // returns [ div.child, div.parent ]

// Selecting the closest parent, note that only one parent will be selected and that the initial element itself is included in the search:
$("span.subchild").closest("div"); // returns [ div.child ]
$("div.child").closest("div"); // returns [ div.child ] as the selector is also included in the search

// Selecting an element's direct children:
$("div.grandparent").children("div"); // returns [ div.parent, div.surrogateParent1, div.surrogateParent2 ]

// Finding all elements within a selection that match the selector:
$("div.grandparent").find("div"); // returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]

// Selecting a next sibling of the selectors:
$("div.parent").next(); // returns [ div.surrogateParent1 ]

// Selecting a prev sibling of the selectors:
$("div.parent").prev(); // returns [] as No sibling exists before div.parent

// Selecting all the next siblings of the selector:
$("div.parent").nextAll(); // returns [ div.surrogateParent1, div.surrogateParent2 ]
$("div.parent").nextAll().first(); // returns [ div.surrogateParent1 ]
$("div.parent").nextAll().last(); // returns [ div.surrogateParent2 ]

// Selecting all the previous siblings of the selector:
$("div.surrogateParent2").prevAll(); // returns [ div.surrogateParent1, div.parent ]
$("div.surrogateParent2").prevAll().first(); // returns [ div.surrogateParent1 ]
$("div.surrogateParent2").prevAll().last(); // returns [ div.parent ]

// Selecting an element's siblings in both directions that matches the given selector:
$("div.parent").siblings(); // returns [ div.surrogateParent1, div.surrogateParent2 ]
$("div.surrogateParent1").siblings(); // returns [ div.parent, div.surrogateParent2 ]
