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
  $li.text(newSkill)
  $ul.append($li)

  // $('<div/ class = "box-red">X</div>').appendTo('.these-items');
  // $('div.box-red').fadeIn().css('display', 'inline');

  // $(function(){
  //   $('button').on('click',function(){
  //       // let redBut = $('<input type="button" value="X"/>');
  //       $("ul").append($redBut);
  //   });
  // });

  $(document).ready(function() {
    $("ul").addClass("redBut");
    $("ul > li").prepend($redBut);
  });

  const remove = (event) => {
    const $target = $(event.target)
    $target.remove()
  }
  $li.on("click", remove)
  $textInput.val("")

})

