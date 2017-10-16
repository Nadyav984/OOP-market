function Item(name, section, weight, price) {
    this.name = name;
    this.section = section;
    this.weight = weight;
    this.price=price;    
}

var apple = new Item("apple", "hd-1", 500, 20.50),
    pomegranate = new Item("pomegranate", "hd-1", 255, 60.55),
    kiwi = new Item("kiwi", "hd-1", 400, 36.90),
    lemon = new Item("lemon", "hd-1", 350, 1.99),
    orange = new Item("orange", "hd-1", 50, 0.99),
    plum = new Item("plum", "hd-1", 15, 9.99)


var itemArray = [apple, pomegranate, kiwi, lemon, orange, plum];



function move_icon(item){
    i.innerHTML = "<div class='sub_item_panel'><div class='buy' onclick='"+item.name+".GetBill()'></div><div class='weigh_butt' onclick='"+item.name+".Weigh()'></div></div>"



}

document.getElementsByClassName("section-item").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("chosen-product").style.backgroundColor = "yellow";;
}