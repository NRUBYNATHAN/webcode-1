async function ruby(){
    try{
    var url="https://anapioficeandfire.com/api/books?page=1&pageSize=12"
    var fetch_url=await fetch(url)
    var con_json=await fetch_url.json()
    for(var i = 0;i<con_json.length;i++){
    console.log(con_json[i].url)
    var url2=await fetch(con_json[i].url)
    var cons=await url2.json()

    var create_div=document.createElement("div")
    create_div.classList.add("first")

    var create_p1=document.createElement("p")
    create_p1.innerText=`BOOK NAME : ${cons.name}`

    var create_p2=document.createElement("p")
    create_p2.innerText=`ISBN NO : ${cons.isbn}`

    var create_p3=document.createElement("p")
    create_p3.innerText=`NUMBER OF PAGES : ${cons.numberOfPages}`

    var create_p4=document.createElement("p")
    create_p4.innerText=`AUTHOR : ${cons.authors[0]}`

    var create_p5=document.createElement("p")
    create_p5.innerText=`PUBLISHER : ${cons.publisher}`

    var create_p6=document.createElement("p")
    create_p6.innerText=`RELEASED DATE : ${cons.released}`

    var create_div1=document.createElement("div1")
    create_div1.innerText="CHARACTERS"

    var create_ol=document.createElement("ol")

    var create_li1=document.createElement("li")
    create_li1.innerText=`${cons.characters[0]}`

    var create_li2=document.createElement("li")
    create_li2.innerText=`${cons.characters[1]}`

    var create_li3=document.createElement("li")
    create_li3.innerText=`${cons.characters[2]}`

    var create_li4=document.createElement("li")
    create_li4.innerText=`${cons.characters[3]}`

    var create_li5=document.createElement("li")
    create_li5.innerText=`${cons.characters[4]}`


create_ol.append(create_li1)
create_ol.append(create_li2)
create_ol.append(create_li3)
create_ol.append(create_li4)
create_ol.append(create_li5)
create_div1.append(create_ol)


    create_div.append(create_p1)
    create_div.append(create_p2)
    create_div.append(create_p3)
    create_div.append(create_p4)
    create_div.append(create_p5)
    create_div.append(create_p6)
    create_div.append(create_div1)
    document.querySelector("body").append(create_div)
}

}
catch(e){
    console.log(e)
    console.log("this api is not valid")
}
}

ruby()

