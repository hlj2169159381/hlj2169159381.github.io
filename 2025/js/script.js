// 倒计时功能
function updateCountdown() {
  const targetDate = new Date("2025-01-29T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);

// 烟花效果
document.body.addEventListener("click", (e) => {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = `${e.clientX}px`;
  firework.style.top = `${e.clientY}px`;
  firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.getElementById("fireworks").appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);

  // 跳转到烟花网页
  window.open("https://yanhua.w3h5.com/");
});

// 分享功能
document.getElementById("shareButton").addEventListener("click", () => {
  const shareText = "2025新年快乐！愿你年年有我，愿我岁岁有你。这一年的故事很简单，遇见你我很喜欢！";
  const shareUrl = window.location.href;

  if (navigator.share) {
    navigator
      .share({
        title: "2025新年祝福",
        text: shareText,
        url: shareUrl,
      })
      .catch(console.error);
  } else {
    // 如果浏览器不支持原生分享，则复制文本到剪贴板
    const textToCopy = `${shareText}\n${shareUrl}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("祝福语已复制到剪贴板，您可以粘贴并分享给朋友们！");
      })
      .catch(() => {
        alert("复制失败，请手动复制分享。");
      });
  }
});

// 那些瞬间按钮
document.getElementById("memoryButton").addEventListener("click", () => {
  // 跳转到同目录下的index1.html
  window.open("./index1.html", "_blank");
});