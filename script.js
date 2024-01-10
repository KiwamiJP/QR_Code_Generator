const qr_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qrImg = document.getElementById('qrImg');
const inputText = document.getElementById('inputText');
const imgBox = document.getElementById('imgBox');
generateQR = () =>{
  if(inputText.value.length>0 || imgBox.classList.contains('showImgBox')==false){
    qrImg.src=qr_url+inputText.value;
    imgBox.classList.add("showImgBox");
  }else{
    imgBox.classList.remove("showImgBox");
    qrImg.src="";
    
  }
}