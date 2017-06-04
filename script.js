
$(document).ready(function(){
    $("ul").on("clicked", "input[type=checkbox]", function() {
        $(this).closest("li").toggleClass("listlicompleted")
});
$("#inputbutton").click(function(){
    var todoblock = $(this).closest("#funtionbuttons")
    var description = todoblock.find("#usertext")
    var pomodoroestimate = todoblock.find("#usernumb")
    $("ul").append("<li> <input class='checkmark' type='checkbox'/> <span class='listeditems'>" + description.val() + "</span><span class='pomodoros'>" + pomodoroestimate.val() + " pomodoros</span> </li>")

    description.val("")
    pomodoroestimate("")
});
});

