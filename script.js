const supabaseUrl = "https://byxipudosflfoxjyoqml.supabase.co/drawings"
const supabaseKey = "sb_publishable_cnaG6qimY5VniRM7cCXtfg_Mx7jl0Ln"

async function loadDrawings() {

let res = await fetch(supabaseUrl + "/rest/v1/drawings", {
headers: {
apikey: supabaseKey,
Authorization: "Bearer " + supabaseKey
}
})

let data = await res.json()

let list = document.getElementById("list")

data.forEach(d => {

let li = document.createElement("li")

li.innerHTML = `<a href="draw.html?id=${d.id}">${d.title}</a>`

list.appendChild(li)

})

}

async function createDrawing() {

let title = prompt("Drawing name")

let res = await fetch(supabaseUrl + "/rest/v1/drawings", {
method:"POST",
headers:{
apikey:supabaseKey,
Authorization:"Bearer "+supabaseKey,
"Content-Type":"application/json"
},
body:JSON.stringify({
title:title,
data:{}
})
})

alert("Drawing created")

location.reload()

}

loadDrawings()
