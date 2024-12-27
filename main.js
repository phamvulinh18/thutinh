// Thay đổi nội dung búc thư ở đây
var letterContent =" Thật vui khi biết rằng ngày hạnh phúc nhất của cuộc đời m đang đến gần !Dù t đang ở Nhật và không thể trực tiếp có mặt để chia sẻ niềm vui này nhưng mình sẽ theo dõi gián tiếp .Chúc m có 1 cuộc sông hôn nhân tràn đầy yêu thương,hạnh phúc và thật nhiều tiếng cười. Hãy cùng nhau xây dựng 1 tổ ấm thật vững chắc , nơi mọi niềm vui và nỗi buồn đều được chia sẻ  Chúc m luôn tìm thấy niềm vui trong những khoảnh khắc nhỏ bé của cuộc sống, luôn được bao quanh bởi yêu thương và sự ấm áp. Hạnh phúc không phải là điểm đến, mà là hành trình, và mình hy vọng m sẽ luôn bước đi trên con đường ấy với nụ cười tươi sáng, tựa như ánh bình minh.Mong rằng tình bạn của chúng ta sẽ mãi bền chặt, cùng nhau chia sẻ những khoảnh khắc vui buồn, và luôn là điểm tựa vững chắc trong những lúc cần nhau nhất.Chúc bạn có một cuộc sống tràn đầy yêu thương và hạnh phúc!Thân mến, [DIỆU ĐẸP TRAI]"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
