let image = document.querySelector("#image");
let content = document.querySelector("#content");
let btnCreate = document.querySelector("#btnCreate");

btnCreate.onclick = () => {
  if (content.value == "") return;

  let linkQR = `https://api.qrserver.com/v1/create-qr-code/?data=${content.value}&amp;size=500x500`;

  image.src = linkQR;
  content.value = "";
};
