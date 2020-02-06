

//Grab all the elements and then we are going to attach on click listeners that do scrollToDiv
const vsa_link = document.querySelector("#VSA")
const reid_link = document.querySelector("#Reids")
const seb_link = document.querySelector("#Seb")
const black_link = document.querySelector("#BlackDot")
const path_link = document.querySelector("#PathStart")



//function for scrolling to div
const scrollToDiv = (string) => {
    //get y based on viewport of the div we want to get to
    const objectCollection = document.getElementsByClassName(string)
    const object = objectCollection[0]
    const bounds = object.getBoundingClientRect()
    const y = bounds.y
    //get y for body so we know how far the top is from our current pos
    const bodyRect = document.body.getBoundingClientRect()
    const bodyY = bodyRect.y
    
    window.scrollTo({
        top: y - bodyY - 50,
        left: 0,
        behavior: 'smooth'
    })

    console.log(`scrolling to ${string}`)
}

if(vsa_link && reid_link && seb_link && black_link && path_link){
    vsa_link.addEventListener("click",() => { scrollToDiv("vsa_block") })
    reid_link.addEventListener("click",() => { scrollToDiv("reidstrees_block") })
    seb_link.addEventListener("click",() => { scrollToDiv("seb_block") })
    black_link.addEventListener("click",() => { scrollToDiv("blackdot_block") })
    path_link.addEventListener("click",() => { scrollToDiv("pathstarters_block") })
}

console.log("worked")
