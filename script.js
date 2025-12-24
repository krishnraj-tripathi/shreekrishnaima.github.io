const prices = {
  views: 80,
  followers: 200,
  likes: 100,
  comments: 150,
  story: 50
};

function updatePrice() {
  const service = document.getElementById("service").value;
  document.getElementById("price").innerText = service ? prices[service] : 0;
}

function verifyOrder() {
  const service = document.getElementById("service").value;
  const input = document.getElementById("inputField").value;

  if (!service || input.trim() === "") {
    alert("Please select service and enter username or link");
    return;
  }

  document.getElementById("paymentSection").style.display = "block";
}
