const tag2 = $("#tag2");
tag2.text("This is tag - 2 ID");

const tag1 = $("<div></div>").html("<h1>This is tag - 1 ID</h1>");
tag2.before(tag1);

tag2.append(" and append text added");

const Style1 = {
  "font-size": "1rem",
  color: "red",
};
tag1.css(Style1);

tag2.css("color", "brown");

const tag3 = $("<div></div>").html("<h2>This is tag - 3 ID</h2>");
tag2.after(tag3);
tag3.addClass("Style");

tag1.remove();
tag3.removeClass();

const anchorDiv = $("<div></div>", {
  id: "div1",
});
tag3.after(anchorDiv);
const anchorTag = $("<a>", {
  id: "a1",
  text: "Google.com",
  href: "https://google.com",
  target: "_blank",
});

const ListStyles = {
  "background-color": "red",
  color: "white",
  padding: "10px",
};
let List = [];
const ListDiv = $("<div></div>");
anchorDiv.after(ListDiv);
ListDiv.css(ListStyles);
const NewListAddButton = $("<button></button>");
NewListAddButton.text("+Add new Book");
ListDiv.append(NewListAddButton);
let UList = $("<ul></ul>");
ListDiv.append(UList);

NewListAddButton.click((e) => {
  e.preventDefault();
  let bookName = String(prompt("Enter a Book name : "));
  if (!isNaN(Number(bookName))) {
    alert("Number not allowed!!");
  } else {
    showListItems(bookName);
  }
});

function showListItems(BookName) {
  UList.append($("<li></li>").text(BookName));
}

anchorDiv.append(anchorTag);
