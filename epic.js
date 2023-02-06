const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const goBtn = document.getElementById("go-btn");
console.log("Made By Zarif")
select2.innerHTML = '<option value="1.8">Release  1.8⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option><option value="recent-1.8">Recent 1.8</option>';

select1.addEventListener("change", function() {
  select2.innerHTML = '';
  if (this.value === "1.5") {
    select2.innerHTML = '<option value="1.5">Release 1.5.2</option><option value="1.5-rez">1.5 Rez</option><option value="1.5-precision">1.5 Precision</option>';
  } else {
    select2.innerHTML = '<option value="1.8">Release 1.8⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</option><option value="recent-1.8">Recent 1.8</option><option value="arch-1.8">Arch 1.8</option>';
  }
});

goBtn.addEventListener("click", function() {
  if (select2.value === "Release 1.8") {
    window.location.href = "/clients/1.8/index.html";
  } else if (select2.value === "recent-1.8") {
    window.location.href = "https://www.example2.com";
  } else if (select2.value === "arch-1.8") {
    window.location.href = "https://www.example3.com";
  } else if (select2.value === "1.5") {
    window.location.href = "/clients/1.5.2/index.html";
  } else if (select2.value === "1.5-rez") {
    window.location.href = "https://www.example5.com";
  } else {
    window.location.href = "/clients/1.8/index.html";
  }
});
