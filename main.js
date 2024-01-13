
// hàm này có vai trò tăng số lượng follow khi click vào follow-btn
const target = {
    clicked: 0,
    currentFollowers: 1066,
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
  };
  
  const follow = () => {
    target.clicked += 1;
    target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
  
    if (target.clicked % 2 === 0) {
      target.currentFollowers -= 1;
      target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
    }
    else {
      target.currentFollowers += 1;
    }
  
    target.fw.textContent = target.currentFollowers;
    target.btn.classList.toggle("following");
  }

  // bây giờ tôi sẽ tạo một hàm ngăn chặn việc mở dev tool


      const disabledKeys = ["c", "C", "x", "J", "u", "I"];
      const showAlert = e => {
        e.preventDefault();
        return alert("Chúc bạn may mắn lần sau :))");
      }
      document.addEventListener("contextmenu", e => {
        showAlert(e);
      });
      document.addEventListener("keydown", e => {
        // calling showAlert() function, if the pressed key matched to disabled keys
        if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
          showAlert(e);
        }
      });
      window.addEventListener("load",function(){
        try {
          !function t(n) {
            1 === ("" + n / n).length && 0 !== n || function() {}.constructor("debugger")(), t(++n)
          }(0)
        } catch (n) {
          setTimeout(t, 100)
        }
      });
