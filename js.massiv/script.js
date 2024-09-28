

// while (true) {
//     const arr = [prompt("Komanda kiriting")];

//     if ( komanda = "stop"){
//         arr.stop
//         break;
//     }
//     if (komanda === "add") {
//         arr.push(element)
//         console.log(arr)
//        }

//     else if (komanda = "del") {
//         arr.splice(-1)
//         console.log(arr)
//     }
// }


// let arr = []

// function komandFunc() {
//     let savol = prompt("komanda kiriting")

//     while (savol == "") {
//         savol = prompt("togri kiriting")
//     }
  
//     let newArr = savol.split(" ")
//     if (newArr[0] == "add") {
//         arr.push(newArr[1])
//     } else if (newArr[0] == "del") {
//         arr = arr.filter((item) => item !== newArr[1])
//     } 
    
      
//     console.log(arr);
//     komandFunc()
// }
// komandFunc()

let arr = [];

function komandFunc() {
    let savol = prompt("Komanda kiriting");

    while (savol == "") {
        savol = prompt("Iltimos, to'g'ri kiriting");
    }

    if (savol === "stop") {
        return; 
    }

    let newArr = savol.split(" ");

    if (newArr[0] == "add") {
        arr.push(newArr[1]);
    } else if (newArr[0] == "del") {
        arr = arr.filter((item) => item !== newArr[1]);
    }

    console.log(arr); 
    komandFunc(); 
}

komandFunc();