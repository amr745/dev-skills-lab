const $textInput = $("[type = 'text']")
const $submitInput = $("[type = 'submit']")
const $ul = $("#this-list")
const $redBut = $('<input type="button" value="X"/>')

const skills = []

$submitInput.on("click", (event) => {
  event.preventDefault();
  
  const newSkill = $textInput.val()
  skills.push(newSkill);
  
  const $li = $("<li>")
  $li.html(`<button class = 'redBut'>X</button> ${newSkill}`)
  $ul.append($li)

  const remove = (event) => {
    const $target = $(event.$li)
    $li.remove()
  }
  $li.on("click", remove)
  $textInput.val("")

})