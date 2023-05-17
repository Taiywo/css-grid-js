const imgscr = [
    "./images/partying.gif",
    "./images/hug.gif",
    "./images/time.gif",
    "./images/funny.gif",
    "./images/wow.gif",
    "./images/Love-Emoticon.gif",
    "./images/partying.gif",
    "./images/hug.gif",
    "./images/time.gif",
    
]
const body = document.body;
const main = document.createElement("main")
body.append(main)
const div = document.createElement("div")


main.classList.add("wrapper")
div.classList.add("container")


for (let index in imgscr) {
    const random = Math.floor(Math.random(index)*9)
    console.log(random);
 const imagescr = imgscr[random]

 const img = document.createElement("img")

 img.src = imagescr
 main.append(div)
 div.append(img)

 
}



