async function loadModel() {
  document.getElementById("ai-status").innerText = "Model AI sedang dimuat...";
  
  // Contoh model (dummy / placeholder)
  const model = await tf.loadLayersModel(
    "https://teachablemachine.withgoogle.com/models/model.json"
  ).catch(() => {
    document.getElementById("ai-status").innerText =
      "Model AI belum tersedia (contoh integrasi berhasil).";
  });

  if (model) {
    document.getElementById("ai-status").innerText =
      "Model AI berhasil dimuat!";
  }
}
