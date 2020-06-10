<html>
<head>
<title>Quotes</title>
<script language="JavaScript">
// We allocate a global array and fill it with the quote data.
lines = new Array();
lines.push("Everybody's always telling me one thing and out the other.");
lines.push("Even a fish could stay out of trouble if it would just learn to keep its mouth shut.");
lines.push("Beware the lollipop of mediocrity -- lick it once and you suckforever.");
lines.push("We don't have time to stop for gas -- we're already late.");
lines.push("By doing just a little each day, I can gradually let the task overwhelmme.");
lines.push("Being powerful is like being a lady. If you have to tell people you are,you aren't.");
lines.push("Never attribute to malice that which can satisfactorily be explained by incompetence.");
// Search for an element with the given id
// and set its innerHTML to the given text.
function setText(id, text) {
var node = document.getElementById(id);
if (node != null) {
node.innerHTML = text;
//node.childNodes[0].data = text; // alternative for some simple tags
}
}
// Given the name of a form, access the target field
// within that form and using its target text, generate
// the quote list and put it into the result tag.
function setQuotes(form_name) {
// cute: use [] instead of . to access the form by name
var target = document[form_name].target.value;
//alert(target);
var contents = "";
target = target.toLowerCase();
for (var i in lines) {
if (lines[i].toLowerCase().indexOf(target)!=-1) {
contents = contents + "<li>" + lines[i] + "\n";
}
}
setText("result", contents);
}
</script>
</head>
<!-- once the whole body is loaded, run setQuotes once -->
<body onload="setQuotes('form1');" >
<h1>Quotes</h1>
<p>Quote search
<!--
For this form, we call setQuotes('form1') when the form is submitted.
The return false inhibits the actual form submit.
-->
<form name=form1 onsubmit="setQuotes('form1'); return false;" >
Search: <input type=text name=target >
<input type=submit value=Submit>
</form>
<!--
For this first form, we setQuotes() on every keystroke (onkeyUp).
We also use the orindary sumbit in case they paste something in without
touching a key.
-->
<form name=form2 onSubmit="setQuotes('form2'); return false;" >
Search: <input type=text name=target onKeyUp="setQuotes('form2');">
<input type=submit value=Submit>
</form>
<p>
<!--- can use button outside of a form to trigger things -->
<button onclick="setQuotes('form1');">Quotes button</button>
<!-- can use an a tag, but need the return false so it doesn't
jump to the href -->
<a href onclick="setQuotes('form1'); return false;">Quotes tag</a>
<p>Quotes...
<!-- the div we refer to from the script to store the output -->
<div id=result></div>
</body>
