function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");

  sections.forEach(function(section) {
    section.hidden = section.id !== sectionId;
  });
}

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", function() {
  const keyword = searchBox.value.toLowerCase();

  document.querySelectorAll("#book-list li").forEach(
    function(book) {
      book.hidden = !book.textContent
        .toLowerCase()
        .includes(keyword);
    }
  );
});
