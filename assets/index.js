function getMOTD() {
    const motds = ["motd moment","another random messgae"];
    return motds[Math.floor(Math.random() * motds.length)];
}

window.onload = () => {
    document.querySelector("h2#motd").innerHTML = getMOTD();
}