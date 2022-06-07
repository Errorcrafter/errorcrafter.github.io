function getMOTD() {
    const motds = ["motd moment","trolled!!!!!!!","the king of copy and paste","premium skidding services","allan please add details","minercaft maniac 😤😤😤",
    "i have no idea what i'm doing like 99% of the time","DONT DO SE[double u]ER SIDE","#savetf2","python/js developer."];
    return motds[Math.floor(Math.random() * motds.length)];
}

window.onload = () => {
    document.querySelector("h2#motd").innerHTML = getMOTD();
}