var total = 0;
var done = 0;

$(".iform").on("keydown", (event) => {
  if (event.key === "Enter" && t !== "") {
    var t = $(".iform").val();
    if (t !== "") {
      total++;
      updateBar();
      $(".task").prepend(taskHTML(t));
      $(".iform").val("");
      $(".queue")
        .first()[0]
        .firstElementChild.addEventListener("click", (e) => {
          if (e.target.classList.toggle("text-decoration-line-through")) {
            done++;
          } else {
            done--;
          }
          updateBar();
        });
      $(".queue")
        .first()[0]
        .lastElementChild.addEventListener("click", (e) => {
          total--;
          if (
            e.target.parentElement.firstElementChild.classList.contains(
              "text-decoration-line-through"
            )
          ) {
            done--;
          }
          updateBar();
          e.target.parentElement.remove();
        });
    }
  }
});

function taskHTML(a) {
  return (
    '<div class="list-group-item queue d-flex"> <p class="mb-1 flex-grow-1">' +
    a +
    '</p> <i class="fa fa-window-close my-auto"></i> </div>'
  );
}

function updateBar() {
  $(".bar").text(parseInt((done * 100) / total) + " %");
  $(".bar").css("width", parseInt((done * 100) / total) + "%");
}
