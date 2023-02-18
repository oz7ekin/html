function toggleContent(section) {
  var sections = ["home-content", "job-content", "cupe-content","contact-content"];

  // Hide all sections first
  sections.forEach(function (sectionId) {
    var sectionElem = document.getElementById(sectionId);
    sectionElem.style.display = "none";
  });

  // Show the selected section
  var selectedElem = document.getElementById(section + "-content");
  selectedElem.style.display = "block";
}
