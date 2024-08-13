// Thay đổi nội dung búc thư ở đây
var letterContent =" Hehe, chắc là em cũng không ngờ đến anh sẽ dùng cách này đâu nhỉ ^^. Thời gian vừa qua có 1 số chuyện khiến tình cảm của em dành cho anh có chút thay đổi,anh xin lỗi vì để điều đó xảy ra. Cảm ơn em vì vẫn tiếp tục yêu anh và luôn ở cạnh những lúc anh gặp khó khăn, buồn phiền, thậm chí mất đi động lực. Vốn dĩ anh định viết thư tay nhưng do chữ anh xấu với cả mình đang ở xa nhau nên để dành những lần sau nhá<3. I love u so muchhh!!!"

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