// console.log($)

const $textInput = $("[type = 'text']")
const $submitInput = $("[type = 'submit']")
const $ul = $("#this-list")
const $redBut = $('<input type="button" value="X"/>')

const skills = []

$submitInput.on("click", (event) => {
  event.preventDefault()
  
  const newSkill = $textInput.val()
  skills.push(newSkill)
  
  const $li = $("<li>")
  $li.html(newSkill)
  $ul.append($li)
  // $ul.append($redBut)

  // $('<div/ class = "box-red">X</div>').appendTo('.these-items');
  // $('div.box-red').fadeIn().css('display', 'inline');

  // $(function(){
  //   $('button').on('click',function(){
  //       // let redBut = $('<input type="button" value="X"/>');
  //       $("ul").append($redBut);
  //   });
  // });

  $(document).ready(function() {
    $("li").addClass("redBut");
    // $("ul > li").prepend($redBut);
    $("li").prepend($redBut)
  });

  const remove = (event) => {
    const $target = $(event.$li)
    $li.remove()
  }
  $li.on("click", remove)
  $textInput.val("")

  // $redBut.on("click", remove)
  // $textInput.val("")
})

  // $(document).ready(function()
  // $(redBut).click(function() {
  //   $(this).parent($li).remove();
  // });
// });
